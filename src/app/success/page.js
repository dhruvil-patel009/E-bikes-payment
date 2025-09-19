// src/app/success/page.js
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [message, setMessage] = useState("Processing your payment...");

  useEffect(() => {
    if (sessionId) {
      setMessage(`✅ Payment successful! Session ID: ${sessionId}`);
      // Optional: fetch session details from your backend using sessionId
    }
  }, [sessionId]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Payment Success 🎉</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}
