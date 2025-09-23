// src/app/checkout-expired/page.jsx
"use client";

import Link from "next/link";

export default function CheckoutExpiredPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-red-100 via-pink-50 to-orange-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-6 sm:p-8 max-w-md w-full text-center transition-all duration-300">
        <h1 className="text-2xl font-extrabold text-red-600 mb-3">
          Payment Session Expired ⏰
        </h1>
        <p className="text-gray-600 mb-6">
          Your checkout session has expired. Please restart your payment.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link href="/checkout">
            <button className="px-5 py-2 rounded-xl bg-blue-500 font-semibold shadow-md hover:bg-blue-600 hover:shadow-lg transition">
              Retry Payment
            </button>
          </Link>
          <Link href="/">
            <button className="px-5 py-2 rounded-xl bg-gray-500 font-semibold shadow-md hover:bg-gray-600 hover:shadow-lg transition">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
