// // src/app/api/create-checkout-session/route.js
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { name, price, currency, image } = body;

//     if (!name || !price || !currency) {
//       return new Response(
//         JSON.stringify({ error: "Missing required fields" }),
//         { status: 400, headers: { "Content-Type": "application/json" } }
//       );
//     }

//     // Ensure absolute image URL
//     const fullImageUrl = image?.startsWith("http")
//       ? image
//       : `${process.env.NEXT_PUBLIC_BASE_URL}${image}`;

//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price_data: {
//             currency,
//             product_data: {
//               name,
//               images: fullImageUrl ? [fullImageUrl] : [],
//             },
//             unit_amount: Math.round(price * 100),
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?canceled=true`,
//     });

//     return new Response(JSON.stringify({ id: session.id }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error("Stripe Checkout error:", err);

//     return new Response(
//       JSON.stringify({ error: err.message || "Unknown error" }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }

// src/app/api/create-checkout-session/route.js
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, startDate, endDate, amount } = body;

    // Validation
    if (!name || !email || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Ensure absolute image URL
    // const fullImageUrl = image?.startsWith("http")
    //   ? image
    //   : `${process.env.NEXT_PUBLIC_BASE_URL}${image}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "AUD",
            product_data: {
              name: `E-bike Rental - ${name}`,
              description: `Rental from ${startDate} to ${endDate}`,
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      // Set default locale & country
      payment_method_options: {
        card: {
          // Ensures cards are treated as AU cards
          request_three_d_secure: "automatic",
        },
      },

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout?canceled=true`,
    });

    return NextResponse.json({ id: session.id, url: session.url });
    // return new Response(JSON.stringify({ id: session.id }), {
    //   status: 200,
    //   headers: { "Content-Type": "application/json" },
    // });
  } catch (err) {
    console.error("Stripe Checkout error:", err);

    return new Response(
      JSON.stringify({ error: err.message || "Unknown error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
