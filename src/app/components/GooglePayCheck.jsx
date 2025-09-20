"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
    Elements,
    PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

// Load Stripe
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function GooglePayCheck() {
    const [paymentRequest, setPaymentRequest] = useState(null);
    const [availableWallets, setAvailableWallets] = useState(null);

    useEffect(() => {
        async function initPaymentRequest() {
            const stripe = await stripePromise;

            if (!stripe) {
                console.error("Stripe failed to load");
                return;
            }

            const pr = stripe.paymentRequest({
                country: "AU", // 👈 set to your country
                currency: "aud",
                total: {
                    label: "E-bike Rental",
                    amount: 5000, // amount in cents (50 AUD)
                },
                requestPayerName: true,
                requestPayerEmail: true,
            });

            pr.canMakePayment().then((result) => {
                console.log("Wallet detection result:", result);
                setAvailableWallets(result);
                if (result) {
                    setPaymentRequest(pr);
                }
            });
        }

        initPaymentRequest();
    }, []);

    return (
        <Elements stripe={stripePromise}>
            <div className="my-4">
                {/* <h3 className="text-lg font-semibold mb-2">Wallet Detection</h3> */}
                {availableWallets ? (
                    <>
                        {/* <pre className="bg-gray-100 p-2 rounded text-sm">
                            {JSON.stringify(availableWallets, null, 2)}
                        </pre> */}
                        {paymentRequest && (
                            <PaymentRequestButtonElement
                                options={{
                                    paymentRequest,
                                    style: { paymentRequestButton: { type: "default", theme: "dark", height: "44px" } },
                                }}
                            />
                        )}
                    </>
                ) : (
                    <p className="text-gray-600">No wallet available on this device.</p>
                )}
            </div>
        </Elements>
    );
}
