import Stripe from "stripe";
import { NextResponse } from "next/server";
import sendEmail from "@/lib/sendEmail";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  const sig = req.headers.get("stripe-signature");
  const body = await req.text();

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error("⚠️ Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Handle successful payment
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;

    // Metadata you passed when creating PaymentIntent
    const { customer_name, rental_start, rental_end } = paymentIntent.metadata;

    try {
      // Send email to customer
      await sendEmail({
        to: paymentIntent.receipt_email,
        subject: "✅ Your eBike Rental is Confirmed",
        text: `Hi ${customer_name || "Guest"},
Your eBike rental is confirmed!
Start: ${rental_start}
End: ${rental_end}
Amount: ${(paymentIntent.amount / 100).toFixed(2)} ${paymentIntent.currency.toUpperCase()}`,
      });

      // Send email to owner
      await sendEmail({
        to: process.env.SMTP_USER,
        subject: `New Rental Payment Received from ${customer_name || "Guest"}`,
        text: `Payment ID: ${paymentIntent.id}
Customer: ${customer_name || "Guest"}
Start: ${rental_start}
End: ${rental_end}
Amount: ${(paymentIntent.amount / 100).toFixed(2)} ${paymentIntent.currency.toUpperCase()}`,
      });

      console.log("✅ Emails sent successfully!");
    } catch (err) {
      console.error("❌ Error sending emails:", err);
    }
  }

  return NextResponse.json({ received: true });
}
