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

  // ✅ Get price, currency, email, name from query params OR use defaults
  const price = parseFloat(searchParams.get("price")) || 50; // default $50 if not provided
  const currency = searchParams.get("currency") || "AUD";
  const email = searchParams.get("email") || ""; // from BookRent form
  const name = searchParams.get("name") || "";
  const startDate = searchParams.get("start");
const endDate = searchParams.get("end");

  const [clientSecret, setClientSecret] = useState(null);
  const amount = Math.round(price * 100); // Stripe uses cents

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
        } else {
          console.error("Error creating PaymentIntent:", data);
        }
      } catch (err) {
        console.error("PaymentIntent error:", err);
      }
    }

    createPaymentIntent();
  }, [amount, currency, email, name, startDate, endDate]);

  const options = clientSecret ? { clientSecret } : null;

  return (
    <div className="checkout-page container py-5">
      <h1 className="text-center mb-4">Complete Your Payment</h1>

      <div className="checkout-product-info d-flex flex-column align-items-center mb-4">
        <p className="fs-4 fw-bold">
          {currency.toUpperCase()} {price}
        </p>
        {email && (
          <p className="text-muted small">
            Paying as: <strong>{email}</strong>
          </p>
        )}
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
