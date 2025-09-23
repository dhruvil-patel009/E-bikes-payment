// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   try {
//     // ✅ Destructure all fields from body
//     const {
//       amount,
//       currency,
//       customerEmail,
//       customerName,
//       rentalStart,
//       rentalEnd,
//     } = await req.json();

//     if (!amount || !currency) {
//       return new Response(
//         JSON.stringify({ error: "Missing amount or currency" }),
//         { status: 400 }
//       );
//     }

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//       receipt_email: customerEmail || undefined, // ✅ attach email so Stripe can send receipt
//       metadata: {
//         customer_name: customerName || "Guest",
//         rental_start: rentalStart || "", // ✅ fixed (no more ReferenceError)
//         rental_end: rentalEnd || "",
//       },
//       automatic_payment_methods: { enabled: true },
//     });

//     return new Response(
//       JSON.stringify({ clientSecret: paymentIntent.client_secret }),
//       { status: 200, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (err) {
//     console.error("PaymentIntent error:", err);
//     return new Response(JSON.stringify({ error: err.message }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export async function POST(req) {
  try {
    // ✅ Destructure all fields from body
    const {
      amount,
      currency,
      customerEmail,
      customerName,
      rentalStart,
      rentalEnd,
    } = await req.json();

    if (!amount || !currency) {
      return new Response(
        JSON.stringify({ error: "Missing amount or currency" }),
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      receipt_email: customerEmail || undefined, // ✅ attach email so Stripe can send receipt
      metadata: {
        customer_name: customerName || "Guest",
        rental_start: rentalStart || "", // ✅ fixed (no more ReferenceError)
        rental_end: rentalEnd || "",
      },
      automatic_payment_methods: { enabled: true },
    });

    return new Response(
      JSON.stringify({
        clientSecret: paymentIntent.client_secret,
        id: paymentIntent.id,
      }),
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
