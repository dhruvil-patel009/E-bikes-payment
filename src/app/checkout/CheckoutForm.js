// // src/app/components/CheckoutForm.jsx
// "use client";
// import React, { useEffect, useState } from "react";
// import {
//   useStripe,
//   useElements,
//   PaymentElement,
//   PaymentRequestButtonElement,
// } from "@stripe/react-stripe-js";

// export default function CheckoutForm({ clientSecret, amount, currency }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentRequest, setPaymentRequest] = useState(null);
//   const [canMakePayment, setCanMakePayment] = useState(false);
//   const [message, setMessage] = useState(null);

//   // Create PaymentRequest (wallets) once stripe is ready
//   useEffect(() => {
//     if (!stripe) return;

//     const pr = stripe.paymentRequest({
//       country: "AU",
//       currency: "aud",
//       // total: { label: "Total", amount },
//       total: {
//         label: "E-bike Rental",
//         amount: 6000, // $60.00 AUD
//       },
//       requestPayerName: true,
//       requestPayerEmail: true,
//     });

//     pr.canMakePayment().then((result) => {
//       console.log("canMakePayment result:", result);

//       if (result) {
//         setPaymentRequest(pr);
//         setCanMakePayment(true);
//       } else {
//         setCanMakePayment(false);
//       }
//     });

//     // handle wallet flow
//     pr.on("paymentmethod", async (ev) => {
//       // Use the existing PaymentIntent clientSecret to confirm
//       try {
//         const { error, paymentIntent } = await stripe.confirmCardPayment(
//           clientSecret,
//           { payment_method: ev.paymentMethod.id },
//           { handleActions: false }
//         );

//         if (error) {
//           ev.complete("fail");
//           setMessage(error.message || "Payment failed");
//         } else {
//           ev.complete("success");
//           // Handle next_action if any
//           if (paymentIntent.status === "requires_action") {
//             const { error: confirmError } = await stripe.confirmCardPayment(
//               clientSecret
//             );
//             if (confirmError) setMessage(confirmError.message);
//             else window.location.href = "/success";
//           } else {
//             // Payment succeeded
//             window.location.href = "/success";
//           }
//         }
//       } catch (err) {
//         ev.complete("fail");
//         setMessage(err.message);
//       }
//     });

//     // cleanup listener on unmount
//     return () => {
//       if (pr && pr.removeListener) pr.removeListener("paymentmethod", () => {});
//     };
//   }, [stripe, clientSecret, amount, currency]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null);
//     if (!stripe || !elements) return;
//     // Submit Payment Element
//     const { error } = await stripe.confirmPayment({
//       elements,
//       confirmParams: { return_url: `${window.location.origin}/success` },
//     });
//     if (error) setMessage(error.message);
//   };

//   return (
//     <div className="checkout-form">
//       <div className="email-row">
//         <div>Email</div>
//         <div>yourname@example.com</div>
//       </div>

//       <div className="payment-area">
//         <div id="wallet-button">
//           {canMakePayment && paymentRequest ? (
//             <PaymentRequestButtonElement options={{ paymentRequest }} />
//           ) : (
//             <div className="wallet-fallback">Pay with card below</div>
//           )}
//         </div>

//         <form id="payment-form" onSubmit={handleSubmit}>
//           <PaymentElement id="payment-element" />
//           <button className="pay-btn" disabled={!stripe}>
//             Pay
//           </button>
//           {message && <div className="error">{message}</div>}
//         </form>
//       </div>
//       <div className="notice">
//         <small>
//           By paying you may see different network logos depending on the
//           card/wallet
//         </small>
//       </div>
//     </div>
//   );
// }

// "use client";
// import { useEffect, useState } from "react";
// import {
//   PaymentElement,
//   PaymentRequestButtonElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// export default function CheckoutForm({
//   clientSecret,
//   amount,
//   currency,
//   product,
// }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentRequest, setPaymentRequest] = useState(null);
//   const [canMakePayment, setCanMakePayment] = useState(false);
//   const [message, setMessage] = useState(null);

//   const title = product?.title || "Unknown Product";
//   const price = product?.price?.current || 0;

//   useEffect(() => {
//     if (!stripe || !clientSecret) return;

//     const pr = stripe.paymentRequest({
//       country: "AU",
//       currency: currency?.toLowerCase() || "aud",
//       total: {
//         label: product?.title, // 👈 this must be a string
//         amount: amount, // 👈 must be integer (e.g. 6000 for $60)
//       },
//       requestPayerName: true,
//       requestPayerEmail: true,
//     });

//     pr.canMakePayment().then((result) => {
//       console.log("canMakePayment result:", result);
//       if (result) {
//         setPaymentRequest(pr);
//         setCanMakePayment(true);
//       } else {
//         setCanMakePayment(false);
//       }
//     });
//   }, [stripe, clientSecret, amount, currency, product]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     const { error } = await stripe.confirmPayment({
//       elements,
//       confirmParams: { return_url: `${window.location.origin}/success` },
//     });

//     if (error) setMessage(error.message);
//   };

//   return (
//     <div className="checkout-container">
//       <div className="checkout-product">
//         <img src={product.image} alt={product.name} className="checkout-img" />
//         <div className="checkout-info">
//           <h2>{title}</h2>
//           <p className="price">
//             {currency?.toUpperCase()} {(amount / 100).toFixed(2)}
//           </p>
//         </div>
//       </div>

//       {canMakePayment && paymentRequest ? (
//         <PaymentRequestButtonElement options={{ paymentRequest }} />
//       ) : (
//         <form onSubmit={handleSubmit} className="card-form">
//           <PaymentElement />
//           <button type="submit" disabled={!stripe} className="pay-btn">
//             Pay {currency.toUpperCase()} {(amount / 100).toFixed(2)}
//           </button>
//           {message && <div className="error">{message}</div>}
//         </form>
//       )}
//     </div>
//   );
// }

// src/app/components/CheckoutForm.jsx
"use client";
import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

export default function CheckoutForm({
  clientSecret,
  amount,
  currency,
  product,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canMakePayment, setCanMakePayment] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "AU",
      currency: currency.toLowerCase(),
      total: {
        label: product.title,
        amount: amount,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
        setCanMakePayment(true);
      }
    });
  }, [stripe, amount, currency, product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout-success`,
      },
    });

    if (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      {canMakePayment && paymentRequest ? (
        <div className="mb-4">
          <PaymentRequestButtonElement
            options={{ paymentRequest }}
            className="w-100"
          />
          <div className="text-center my-2">or pay with card</div>
        </div>
      ) : (
        <div className="text-center mb-2">Pay with card</div>
      )}

      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button
          type="submit"
          disabled={!stripe || loading}
          className="btn btn-primary w-100 mt-3"
        >
          {loading
            ? "Processing..."
            : `Pay ${currency.toUpperCase()} ${amount / 100}`}
        </button>
      </form>

      {error && <div className="text-danger mt-2">{error}</div>}
    </div>
  );
}
