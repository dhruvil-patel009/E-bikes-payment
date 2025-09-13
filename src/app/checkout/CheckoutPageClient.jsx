// // src/app/checkout/checkoutPageClient.jsx
// "use client";
// import React, { useEffect, useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import "../styles/checkout.css"; // small CSS shown below
// import CheckoutForm from "./components/CheckoutForm";
// import { useSearchParams } from "next/navigation";

// const stripePromise = loadStripe(
//     process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// export default function CheckoutPageClient() {
//     const searchParams = useSearchParams();
//     const currency = searchParams.get("currency") || "aud";
//     const price = parseFloat(searchParams.get("price")) || 65;

//     const [clientSecret, setClientSecret] = useState(null);
//     // const [currency, setCurrency] = useState(currencyParam);
//     // const [price, setPrice] = useState(priceParam);

//     // Calculate smallest currency unit (paisa/cents)
//     const amount = Math.round(price * 100);

//     useEffect(() => {
//         // Create PaymentIntent on page load or when currency/amount changes
//         async function createPI() {
//             const res = await fetch("/api/create-payment-intent", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ amount, currency }),
//             });
//             const data = await res.json();
//             if (data.clientSecret) setClientSecret(data.clientSecret);
//             else console.error(data);
//         }
//         createPI();
//     }, [amount, currency]);

//     if (!clientSecret) return <p>Loading payment...</p>;

//     return (
//         // <div className="checkout-page">
//         //     <div className="right-col">
//         //         <div className="payment-card">
//         //             {clientSecret && (
//         //                 <Elements stripe={stripePromise} options={options}>
//         //                     <CheckoutForm
//         //                         clientSecret={clientSecret}
//         //                         amount={amount}
//         //                         currency={currency}
//         //                     />
//         //                 </Elements>
//         //             )}
//         //             {!clientSecret && <div className="loading">Loading payment...</div>}
//         //         </div>
//         //     </div>
//         // </div>

//         <Elements stripe={stripePromise} options={{ clientSecret }}>
//             <CheckoutForm clientSecret={clientSecret} amount={amount} currency={currency} />
//         </Elements>
//     );
// }


// src/app/checkout/checkoutPageClient.jsx
"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useSearchParams } from "next/navigation";
import "../styles/checkout.css"; // small CSS shown below
import productsData from "../../data/productData.json"; // your JSON file



const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutPageClient() {
    const searchParams = useSearchParams();
    const slug = searchParams.get("productId"); // pass product slug in URL

    const productId = searchParams.get("productId");

    // const currency = searchParams.get("currency") || "aud";

    const product = productsData.find((p) => p.slug === slug);

    const price = parseFloat(searchParams.get("price")) || product?.price.current || 0;
    const currency = searchParams.get("currency") || product?.price.currency || "AUD";

    const [clientSecret, setClientSecret] = useState(null);
    const amount = product?.price?.stripeAmount || Math.round(price * 100);


    // fallback if no product found
    if (!product) {
        return <div className="checkout-page">Product not found!</div>;
    }


    useEffect(() => {
        if (!product) return;

        async function createPaymentIntent() {
            try {
                const res = await fetch("/api/create-payment-intent", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ amount, currency: currency.toLowerCase() }),
                });
                const data = await res.json();
                if (data.clientSecret) {
                    setClientSecret(data.clientSecret);
                } else {
                    console.error("Error creating PaymentIntent:", data);
                }
            } catch (err) {
                console.error("PaymentIntent error:", err);
            }
        }

        createPaymentIntent();
    }, [amount, currency, product]);

    const options = clientSecret ? { clientSecret } : null;

    if (!product) {
        return (
            <div className="container py-5">
                <h1>Product not found</h1>
            </div>
        );
    }

    return (
        <div className="checkout-page container py-5">
            <h1 className="text-center mb-4">Checkout – {product.title}</h1>
            <div className="checkout-product-info d-flex flex-column align-items-center mb-4">
                <img
                    src={product.images.front}
                    alt={product.title}
                    className="checkout-product-img mb-3"
                    width={30}
                    height={30}
                />
                <p className="fs-4 fw-bold">
                    {currency.toUpperCase()} {price}
                </p>
            </div>

            <div className="payment-card mx-auto" style={{ maxWidth: 500 }}>
                {clientSecret ? (
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm clientSecret={clientSecret} amount={amount} currency={currency} product={product} />
                    </Elements>
                ) : (
                    <div className="loading text-center py-5">Loading payment...</div>
                )}
            </div>
        </div>
    );

}
