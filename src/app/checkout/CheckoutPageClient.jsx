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
import "../styles/checkout.css";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutPageClient() {
  const searchParams = useSearchParams();

  // ✅ Get price and currency from query params OR use defaults
  const price = parseFloat(searchParams.get("price")) || 50; // default $50 if not provided
  const currency = searchParams.get("currency") || "AUD";

  const [clientSecret, setClientSecret] = useState(null);
  const amount = Math.round(price * 100); // Stripe uses cents

  useEffect(() => {
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
  }, [amount, currency]);

  const options = clientSecret ? { clientSecret } : null;

  return (
    <div className="checkout-page container py-5">
      <h1 className="text-center mb-4">Complete Your Payment</h1>

      <div className="checkout-product-info d-flex flex-column align-items-center mb-4">
        <p className="fs-4 fw-bold">
          {currency.toUpperCase()} {price}
        </p>
      </div>

      <div className="payment-card mx-auto" style={{ maxWidth: 500 }}>
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm
              clientSecret={clientSecret}
              amount={amount}
              currency={currency}
              product={{ title: "Rental Payment" }}
            />
          </Elements>
        ) : (
          <div className="loading text-center py-5">Loading payment...</div>
        )}
      </div>
    </div>
  );
}
