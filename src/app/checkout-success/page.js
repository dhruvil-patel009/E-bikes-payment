"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutSuccessPage() {
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem("checkoutUsed", "true");
    localStorage.removeItem("checkoutActive");

    async function fetchPaymentDetails() {
      const params = new URLSearchParams(window.location.search);
      const paymentIntentId = params.get("payment_intent");

      if (!paymentIntentId) return setLoading(false);

      try {
        const res = await fetch(
          `/api/get-payment-intent?pi=${paymentIntentId}`
        );
        const data = await res.json();

        if (data.paymentIntent) {
          const pi = data.paymentIntent;
          setPaymentInfo({
            id: pi.id,
            amount: (pi.amount / 100).toLocaleString(undefined, {
              style: "currency",
              currency: pi.currency.toUpperCase(),
            }),
            date: new Date(pi.created * 1000).toLocaleString(),
            method: pi.charges?.data[0]?.payment_method_details?.card
              ? `${pi.charges.data[0].payment_method_details.card.brand.toUpperCase()} **** ${
                  pi.charges.data[0].payment_method_details.card.last4
                }`
              : "Unknown",
            email: pi.receipt_email || "N/A",
            transactionId: pi.charges?.data[0]?.id || "N/A",
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

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading payment details...</p>
      </div>
    );

  if (!paymentInfo)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>No payment details found.</p>
      </div>
    );

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
        <h1 className="text-2xl font-extrabold text-green-600 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Your payment has been processed successfully 🎉
        </p>

        {/* Payment Summary */}
        <div className="bg-gray-50 border-gray-200 rounded-xl p-4 text-left text-sm mb-6">
          <p className="text-2xl font-bold text-center mb-4 text-gray-800">
            {paymentInfo.amount}
          </p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Transaction ID:</span>
              <span className="font-semibold text-gray-800">
                {paymentInfo.transactionId}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Date &amp; Time:</span>
              <span className="font-semibold text-gray-800">
                {paymentInfo.date}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Method:</span>
              <span className="font-semibold text-gray-800">
                {paymentInfo.method}
              </span>
            </div>
          </div>
        </div>

        {/* Receipt Info */}
        <p className="text-gray-600 text-sm mb-6">
          A copy of the receipt has been sent to{" "}
          <span className="text-green-600 font-semibold">
            {paymentInfo.email}
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href={paymentInfo.charges?.data[0]?.receipt_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition"
              style={{ backgroundColor: "green" }}
            >
              View Receipt
            </button>
          </a>
          <Link href="/">
            <button className="px-5 py-2 rounded-xl bg-blue-500 font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
