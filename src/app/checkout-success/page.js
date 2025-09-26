// // src/app/checkout-sucess/page.js 
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import '../styles/checkout.css'

// export default function CheckoutSuccessPage() {
//   const [paymentInfo, setPaymentInfo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     localStorage.setItem("checkoutUsed", "true");
//     localStorage.removeItem("checkoutActive");

//     async function fetchPaymentDetails() {
//       const params = new URLSearchParams(window.location.search);
//       const paymentIntentId = params.get("payment_intent");

//       if (!paymentIntentId) return setLoading(false);

//       try {
//         const res = await fetch(
//           `/api/get-payment-intent?pi=${paymentIntentId}`
//         );
//         const data = await res.json();

//         if (data.paymentIntent) {
//           const pi = data.paymentIntent;
//           console.log("Full PaymentIntent Object:", pi);
//           console.log("payment_method_types:", pi.payment_method_types);
//           setPaymentInfo({
//             id: pi.id,
//             amount: (pi.amount / 100).toLocaleString(undefined, {
//               style: "currency",
//               currency: pi.currency.toUpperCase(),
//             }),
//             date: new Date(pi.created * 1000).toLocaleString(),
//             // method: pi.charges?.data[0]?.payment_method_details?.card
//             //   ? `${pi.charges.data[0].payment_method_details.card.brand.toUpperCase()} **** ${
//             //       pi.charges.data[0].payment_method_details.card.last4
//             //     }`
//             //   : "Unknown",
//             method: pi.charges?.data[0]?.payment_method_details?.card
//               ? `${pi.charges.data[0].payment_method_details.card.brand.toUpperCase()} **** ${pi.charges.data[0].payment_method_details.card.last4
//               }`
//               : pi.payment_method_types?.[0]?.toUpperCase() || "Unknown", 
//               email: pi.receipt_email || "N/A",
//             transactionId:
//               pi.charges?.data[0]?.id || // ✅ Prefer charge id
//               pi.latest_charge || // fallback if charges not expanded
//               pi.id, // last fallback: PaymentIntent id
//             // charges: pi.charges,
//                 invoicePdfUrl: pi.invoice?.invoice_pdf || charge?.receipt_url || "#",

//           });
//           console.log("PaymentIntent:", pi);
//           console.log("PaymentIntent:", pi.charges?.data[0]?.id);
//         }
//       } catch (err) {
//         console.error("Error fetching payment details:", err);
//       } finally {
//         setLoading(false);
//       }
//     }


//     fetchPaymentDetails();
//   }, []);

//   if (loading)
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p>Loading payment details...</p>
//       </div>
//     );

//   if (!paymentInfo)
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p>No payment details found.</p>
//       </div>
//     );

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 p-4">
//       <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 max-w-md w-full text-center transition-all duration-300">
//         {/* Success GIF */}
//         <Image
//           src="/images/Success.gif"
//           alt="Success"
//           width={120}
//           height={120}
//           unoptimized
//           className="mx-auto mb-4"
//         />

//         {/* Title */}
//         <h1 className="mb-2" style={{ color: '#1A3B19', fontSize: '30px', fontWeight: '600' }}>
//           Payment Successful!
//         </h1>
//         <p className="text-muted mb-4">
//           Your payment has been processed successfully 🎉
//         </p>

//         {/* Payment Summary */}
//         {/* <div className="bg-gray-50 border-gray-200 rounded-xl p-4 text-left text-sm mb-6">
//           <p className="font-bold text-center mb-4" style={{fontSize:'25px',fontWeight:'600',color:'#1A3B19'}}>
//             {paymentInfo.amount}
//           </p>
//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <span className="text-gray-500">Transaction ID:</span>
//               <span className="font-semibold text-gray-800">
//                 {paymentInfo.transactionId}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">Date &amp; Time:</span>
//               <span className="font-semibold text-gray-800">
//                 {paymentInfo.date}
//               </span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-500">Payment Method:</span>
//               <span className="font-semibold text-gray-800">
//                 {paymentInfo.method}
//               </span>
//             </div>
//           </div>
//         </div> */}

//         <div className="bg-light rounded p-3 text-start small mb-3">
//           <div className="d-flex justify-content-between align-items-center mb-1">
//             <span className="text-muted">Transaction ID</span>
//             <div className="d-flex align-items-center gap-2">
//               <span className="fw-medium text-dark">{paymentInfo.transactionId}</span>
//               <button className="btn btn-link p-0 text-muted" style={{ fontSize: "14px" }}>
//                 <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div className="d-flex justify-content-between mb-1">
//             <span className="text-muted">Date & Time</span>
//             <span className="fw-medium text-dark">{paymentInfo.date}</span>
//           </div>
//           <div className="d-flex justify-content-between">
//             <span className="text-muted">Payment Method</span>
//             <span className="fw-medium text-dark">{paymentInfo.method}</span>
//           </div>
//         </div>

//         {/* Receipt Info */}
//         <p className="text-muted text-sm mb-6">
//           A copy of the receipt has been sent to{" "}
//           <span className="text-green-600 font-semibold">
//             {paymentInfo.email}
//           </span>
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row justify-center gap-5">
//           <a
//             href={paymentInfo.charges?.data[0]?.receipt_url || "#"}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button
//               className="rent-now-payment"

//             >
//               View Receipt
//             </button>
//           </a>
//           <Link href="/">
//             <button className="btn btn-secondary ms-4">
//               Return to Home
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/app/checkout-sucess/page.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import '../styles/checkout.css'

export default function CheckoutSuccessPage() {
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mark checkout as used
    localStorage.setItem("checkoutUsed", "true");
    localStorage.removeItem("checkoutActive");

    async function fetchPaymentDetails() {
      const params = new URLSearchParams(window.location.search);
      const paymentIntentId = params.get("payment_intent");

      if (!paymentIntentId) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(`/api/get-payment-intent?pi=${paymentIntentId}`);
        const data = await res.json();

        if (data.paymentIntent) {
          const pi = data.paymentIntent;
          const charge = pi.charges?.data?.[0];
          const invoicePdfUrl = charge?.receipt_url || "#";


          setPaymentInfo({
            id: pi.id,
            amount: (pi.amount / 100).toLocaleString(undefined, {
              style: "currency",
              currency: pi.currency.toUpperCase(),
            }),
            date: new Date(pi.created * 1000).toLocaleString(),
            method: charge?.payment_method_details?.card
              ? `${charge.payment_method_details.card.brand.toUpperCase()} **** ${charge.payment_method_details.card.last4}`
              : pi.payment_method_types?.[0]?.toUpperCase() || "Unknown",
            email: pi.receipt_email || "N/A",
  invoicePdfUrl: charge?.receipt_url || "#", // ✅ Use only the charge's receipt_url
          });
        }
      } catch (err) {
        console.error("Error fetching payment details:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPaymentDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading payment details...</p>
      </div>
    );
  }

  if (!paymentInfo) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No payment details found.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 max-w-md w-full text-center transition-all duration-300">

        {/* Success GIF */}
        <Image
          src="/images/Success.gif"
          alt="Success"
          width={120}
          height={120}
          unoptimized
          className="mx-auto mb-4"
        />

        {/* Title */}
        <h1 className="mb-2" style={{ color: '#1A3B19', fontSize: '30px', fontWeight: '600' }}>
          Payment Successful!
        </h1>
        <p className="text-muted mb-4">
          Your payment has been processed successfully 🎉
        </p>

        {/* Payment Summary */}
        <div className="bg-light rounded p-3 text-start small mb-3">
          <div className="d-flex justify-content-between mb-1">
            <span className="text-muted">Transaction ID</span>
            <span className="fw-medium text-dark">{paymentInfo.id}</span>
          </div>
          <div className="d-flex justify-content-between mb-1">
            <span className="text-muted">Date & Time</span>
            <span className="fw-medium text-dark">{paymentInfo.date}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="text-muted">Payment Method</span>
            <span className="fw-medium text-dark">{paymentInfo.method}</span>
          </div>
        </div>

        {/* Receipt Info */}
        <p className="text-muted text-sm mb-6">
          A copy of the receipt has been sent to{" "}
          <span className="text-green-600 font-semibold">{paymentInfo.email}</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          {/* Download Stripe Invoice PDF */}
         <a href={paymentInfo.invoicePdfUrl} target="_blank" rel="noopener noreferrer">
  <button className="rent-now-payment">
    Download Receipt
  </button>
</a>

          {/* Return Home */}
          <Link href="/">
            <button className="btn btn-secondary ms-4">
              Return to Home
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
