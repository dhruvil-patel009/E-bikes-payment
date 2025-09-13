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



"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useSearchParams } from "next/navigation";
import "../styles/checkout.css"; // small CSS shown below


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutPageClient() {
    const searchParams = useSearchParams();
    const currency = searchParams.get("currency") || "aud";
    const price = parseFloat(searchParams.get("price")) || 65;

    const [clientSecret, setClientSecret] = useState(null);
    const amount = Math.round(price * 100);

    useEffect(() => {
        async function createPaymentIntent() {
            try {
                const res = await fetch("/api/create-payment-intent", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ amount, currency }),
                });
                const data = await res.json();
                setClientSecret(data.clientSecret);
            } catch (err) {
                console.error("PaymentIntent error:", err);
            }
        }
        createPaymentIntent();
    }, [amount, currency]);

    if (!clientSecret) return <p>Loading payment...</p>;

    return (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm clientSecret={clientSecret} amount={amount} currency={currency} />
        </Elements>
    );
}
