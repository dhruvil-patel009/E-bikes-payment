// // src/api/create-payment-intent/route.js
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   try {
//     const { amount, currency = "aud" } = await req.json();

//     if (!amount) {
//       return new Response(JSON.stringify({ error: "Missing amount" }), {
//         status: 400,
//       });
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//       automatic_payment_methods: { enabled: true },
//     });

//     return new Response(
//       JSON.stringify({ clientSecret: paymentIntent.client_secret }),
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("Stripe error:", err);
//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//     });
//   }
// }

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const { amount, currency } = await req.json();

    if (!amount || !currency) {
      return new Response(
        JSON.stringify({ error: "Missing amount or currency" }),
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true }, // <-- enables wallets like GPay/Apple Pay
    });

    return new Response(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("PaymentIntent error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
