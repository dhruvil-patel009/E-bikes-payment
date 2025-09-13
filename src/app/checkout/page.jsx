// // src/app/checkout/page.jsx
// "use client"; // optional, but safe
// import CheckoutPageClient from "./checkoutPageClient";

// // Force Next.js to skip prerender
// export const dynamic = "force-dynamic";

// export default function CheckoutPage() {
//   return <CheckoutPageClient />;
// }


// src/app/checkout/page.jsx
"use client"; // Make the whole page a client component

import React from "react";
import CheckoutPageClient from "./CheckoutPageClient";

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
