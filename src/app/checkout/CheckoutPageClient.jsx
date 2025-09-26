// "use client";
// import React, { useEffect, useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import { useSearchParams } from "next/navigation";
// import "../styles/checkout.css";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// export default function CheckoutPageClient() {
//   const searchParams = useSearchParams();

//   // ✅ Get price, currency, email, name from query params OR use defaults
//   const price = parseFloat(searchParams.get("price")) || 50; // default $50 if not provided
//   const currency = searchParams.get("currency") || "AUD";
//   const email = searchParams.get("email") || ""; // from BookRent form
//   const name = searchParams.get("name") || "";
//   const startDate = searchParams.get("start");
// const endDate = searchParams.get("end");

//   const [clientSecret, setClientSecret] = useState(null);
//   const amount = Math.round(price * 100); // Stripe uses cents

//   useEffect(() => {
//     async function createPaymentIntent() {
//       try {
//         const res = await fetch("/api/create-payment-intent", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             amount,
//             currency: currency.toLowerCase(),
//             customerEmail: email,
//             customerName: name,
//             rentalStart: startDate,
//           rentalEnd: endDate,
//           }),
//         });

//         const data = await res.json();
//         if (data.clientSecret) {
//           setClientSecret(data.clientSecret);
//         } else {
//           console.error("Error creating PaymentIntent:", data);
//         }
//       } catch (err) {
//         console.error("PaymentIntent error:", err);
//       }
//     }

//     createPaymentIntent();
//   }, [amount, currency, email, name, startDate, endDate]);

//   const options = clientSecret ? { clientSecret } : null;

//   return (
//     <div className="checkout-page container py-5">
//       <h1 className="text-center mb-4">Complete Your Payment</h1>

//       <div className="checkout-product-info d-flex flex-column align-items-center mb-4">
//         <p className="fs-4 fw-bold">
//           {currency.toUpperCase()} {price}
//         </p>
//         {email && (
//           <p className="text-muted small">
//             Paying as: <strong>{email}</strong>
//           </p>
//         )}
//       </div>

//       <div className="payment-card mx-auto" style={{ maxWidth: 500 }}>
//         {clientSecret ? (
//           <Elements stripe={stripePromise} options={options}>
//             <CheckoutForm
//               clientSecret={clientSecret}
//               amount={amount}
//               currency={currency}
//               product={{ title: "Rental Payment" }}
//             />
//           </Elements>
//         ) : (
//           <div className="loading text-center py-5">Loading payment...</div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useEffect, useState, useRef } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useSearchParams, useRouter } from "next/navigation";
import "../styles/checkout.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ✅ Get params
  const price = parseFloat(searchParams.get("price")) || 50;
  const currency = searchParams.get("currency") || "AUD";
  const email = searchParams.get("email") || "";
  const name = searchParams.get("name") || "";
  const startDate = searchParams.get("start");
  const endDate = searchParams.get("end");

  const [clientSecret, setClientSecret] = useState(null);
  const [paymentIntentId, setPaymentIntentId] = useState(null);
  const [expired, setExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 min = 300s

  const [sessionUsed, setSessionUsed] = useState(false);

  const amount = Math.round(price * 100);

  useEffect(() => {
    async function createPaymentIntent() {
      try {
        const res = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount,
            currency: currency.toLowerCase(),
            customerEmail: email,
            customerName: name,
            rentalStart: startDate,
            rentalEnd: endDate,
          }),
        });

        const data = await res.json();
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
          setPaymentIntentId(data.id);
          localStorage.setItem("checkoutActive", "true"); // prevent back nav reuse
        } else {
          console.error("Error creating PaymentIntent:", data);
        }
      } catch (err) {
        console.error("PaymentIntent error:", err);
      }
    }

    createPaymentIntent();
  }, [amount, currency, email, name, startDate, endDate]);

  // ⏳ Countdown timer
  useEffect(() => {
    if (!clientSecret || expired) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setExpired(true);

          // ❌ Cancel PaymentIntent
          if (paymentIntentId) {
            fetch("/api/cancel-payment-intent", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ paymentIntentId }),
            }).catch((err) =>
              console.error("Failed to cancel PaymentIntent:", err)
            );
          }
          // ✅ Auto-redirect to expired page
          router.push("/checkout-expired");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [clientSecret, expired]);

  // ⛔ Prevent back navigation reuse
  useEffect(() => {
    if (localStorage.getItem("checkoutUsed") === "true") {
      router.replace("/checkout-expired");
    }
  }, []);

  const options = clientSecret ? { clientSecret } : null;

  if (sessionUsed) {
    return (
      <div className="text-center py-10">
        <h2 className="text-danger">This checkout session has expired.</h2>
      </div>
    );
  }

  if (expired) {
    return (
      <div className="text-center py-10">
        <h2 className="text-danger mb-3">Payment Failed: Session Expired ⏰</h2>
        <button
          onClick={() => router.push("/checkout")}
          className="btn btn-primary"
        >
          Retry Payment
        </button>
      </div>
    );
  }

  return (
    // <div className="checkout-page container py-5">
     

    //   {/* Timer */}
    //   {clientSecret && (
    //     <div className="text-center mb-3 text-danger fw-bold">
    //       Time left: {Math.floor(timeLeft / 60)}:
    //       {(timeLeft % 60).toString().padStart(2, "0")}
    //     </div>
    //   )}

    //   <div className="checkout-product-info d-flex flex-column align-items-center mb-4">
    //     <p className="fs-4 fw-bold">
    //       {currency.toUpperCase()} {price}
    //     </p>
    //     {email && (
    //       <p className="text-muted small">
    //         Paying as: <strong>{email}</strong>
    //       </p>
    //     )}
    //   </div>

    //   <div className="payment-card mx-auto" style={{ maxWidth: 500 }}>
    //     {clientSecret ? (
    //       <Elements stripe={stripePromise} options={options}>
    //         <CheckoutForm
    //           clientSecret={clientSecret}
    //           amount={amount}
    //           currency={currency}
    //           product={{ title: "Rental Payment" }}
    //         />
    //       </Elements>
    //     ) : (
    //       <div className="loading text-center py-5">Loading payment...</div>
    //     )}
    //   </div>
    // </div>
    <div className="checkout-page container py-5">
  {/* Timer */}
  <h1 style={{color:'#1A3B19'}}>Complete Your Payment</h1>

  {/* Product Info */}
  

  {/* Summary */}
  <div className="row g-4 mt-3">
  <div className="col-md-6">
    
  <div className="checkout-summary card p-3 h-100">
    {clientSecret && (
  <div className="checkout-timer-box d-flex align-items-center mb-4">
    <i className="bi bi-clock-fill me-2"></i>
    <span>
      Time left:{" "}
      <strong>
        {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </strong>
    </span>
  </div>
)}

<div className="checkout-product-info d-flex align-items-start mb-4">
  <img
    src="images/15-09-Latest-Freedom-Logo-12-05.png"
    alt="Premium Mountain Bike"
    className="checkout-product-img me-3"
  />
  <div>
    <h6 className="fw-bold mb-1">E-Bike</h6>
    <p className="text-muted small mb-1">
      Rental Period: 3 days (Jun 15 - Jun 18)
    </p>
    <p className="text-muted small">Size: Medium</p>
  </div>
</div>

   <p><span>Subtotal</span><span> {currency.toUpperCase()} {price}</span></p>
    <p><span>Tax</span><span> {currency.toUpperCase()} {price}</span></p>
    <p className="checkout-total"><span>Total</span><span> {currency.toUpperCase()} {price}</span></p>
    {/* Receipt */}
  <div className="alert alert-light d-flex align-items-center mt-3" role="alert">
    <i className="bi bi-envelope me-2"></i>
    Your receipt will be sent to: <strong className="ms-1">{email}</strong>
  </div>


  <div className="checkout-footer mt-4">
    <span><i className="bi bi-shield-lock-fill"></i> Secure Payment</span>
    <span><i className="bi bi-lock-fill"></i> SSL Encrypted</span>
    <span><i className="bi bi-headset"></i> 24/7 Support</span>
  </div>
  </div>

  
</div>
  {/* Stripe Form */}
  <div className="col-md-6 mt-5">
  <div className="payment-card card p-3 h-100" style={{ maxWidth: 500 }}>
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

  
</div>
  {/* Footer */}
  
</div>

  );
}
