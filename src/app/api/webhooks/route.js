import Stripe from "stripe";
import { NextResponse } from "next/server";
import sendEmail from "@/lib/sendEmail";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-08-01", // ✅ use valid Stripe API version
});
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Helper to load HTML template and inject variables
function loadTemplate(fileName, variables) {
  const filePath = path.join(process.cwd(), "src/app/template", fileName);
  let html = fs.readFileSync(filePath, "utf-8");

  for (const key in variables) {
    const regex = new RegExp(`{{${key}}}`, "g");
    html = html.replace(regex, variables[key] ?? "");
  }

  return html;
}

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

  // Extract transaction date
  const transactionDate = new Date().toLocaleString(); // Current date/time

  if (
    event.type === "payment_intent.succeeded" ) {
    const paymentIntent = event.data.object;
    const { customer_name, rental_start, rental_end } = paymentIntent.metadata || {};

    // Detect payment method type
    let paymentMethod = "Unknown";
    if (paymentIntent.payment_method_types.length > 0) {
      const type = paymentIntent.payment_method_types[0];
      if (type === "card") paymentMethod = "Card";
      else if (type === "apple_pay") paymentMethod = "Apple Pay";
      else if (type === "google_pay") paymentMethod = "Google Pay";
      else paymentMethod = type.charAt(0).toUpperCase() + type.slice(1);
    }

    // Determine status
    const status =
      event.type === "payment_intent.succeeded" ? "Completed" : "Failed";

    const templateData = {
      customerName: customer_name || "Guest",
      amount: (paymentIntent.amount / 100).toFixed(2),
      currency: paymentIntent.currency.toUpperCase(),
      startDate: rental_start,
      endDate: rental_end,
      transactionId: paymentIntent.id,
      paymentMethod,
      status,
      transactionDate,
      year: new Date().getFullYear(),
    };

    try {
      // Load and inject HTML template for customer
       if (paymentIntent.receipt_email) {
        const customerHtml = loadTemplate("Paymentconfirmation.html", templateData);

        await sendEmail({
          to: paymentIntent.receipt_email,
          subject: `✅ Your eBike Rental Payment is Completed`,
          html: customerHtml,
        });
      }


      // Owner email
      const ownerHtml = loadTemplate("PaymentRecive.html", templateData);

      await sendEmail({
        to: process.env.SMTP_USER,
        subject: `New Rental Payment ${status} from ${templateData.customerName}`,
        html: ownerHtml,
      });

      console.log("✅ Emails sent successfully!");
    } catch (err) {
      console.error("❌ Error sending emails:", err);
    }
  }
  // Handle Failed Payment
  if (event.type === "payment_intent.payment_failed") {
    console.error("❌ Payment failed:", event.data.object.last_payment_error?.message);
  }

  return NextResponse.json({ received: true });
}
