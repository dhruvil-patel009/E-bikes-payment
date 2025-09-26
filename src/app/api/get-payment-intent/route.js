// /src/app/api/get-payment-intent/route.js
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const pi = searchParams.get("pi");

  if (!pi)
    return NextResponse.json(
      { error: "Missing payment_intent id" },
      { status: 400 }
    );

  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(pi, {
  expand: ["charges", "charges.data.payment_method_details", "invoice"],
    });

    return NextResponse.json({ paymentIntent }, { status: 200 });
  } catch (err) {
    console.error("Error fetching payment intent:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
