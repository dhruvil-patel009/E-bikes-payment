"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CheckoutSuccessPage() {
  const [paymentInfo, setPaymentInfo] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentIntentId = params.get("payment_intent");

    if (paymentIntentId) {
      setPaymentInfo({
        id: paymentIntentId,
        amount: "$60.00",
        date: "June 15, 2023 - 14:32 PM",
        method: "Visa **** 4321",
        email: "example@email.com",
        transactionId: "BB-87652341",
      });
    }
  }, []);

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
        {paymentInfo && (
          <div className="bg-gray-50  border-gray-200 rounded-xl p-4 text-left text-sm mb-6">
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
        )}

        {/* Receipt Info */}
        <p className="text-gray-600 text-sm mb-6">
          A copy of the receipt has been sent to{" "}
          <span className="text-green-600 font-semibold">
            {paymentInfo?.email}
          </span>
        </p>

        {/* Buttons */}
        <div className="d-flex flex-col sm:flex-row justify-center gap-5 alignitems-center justify-content-center" >
          <button className="px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-green-600 hover:shadow-lg transition" style={{backgroundColor:"Green"}}>
            View Receipt
          </button>
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
