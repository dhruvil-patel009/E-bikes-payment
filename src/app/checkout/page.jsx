// // src/app/checkout/page.jsx
// "use client"; // optional, but safe
// import CheckoutPageClient from "./checkoutPageClient";

// // Force Next.js to skip prerender
// export const dynamic = "force-dynamic";

// export default function CheckoutPage() {
//   return <CheckoutPageClient />;
// }


"use client"; // <--- add this

import CheckoutPageClient from "./checkoutPageClient";

// Force Next.js to skip prerendering (optional, but safer)
export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
