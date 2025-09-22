// // src/app/checkout/page.jsx
// "use client"; // optional, but safe
// import CheckoutPageClient from "./checkoutPageClient";

// // Force Next.js to skip prerender
// export const dynamic = "force-dynamic";

// export default function CheckoutPage() {
//   return <CheckoutPageClient />;
// }


// src/app/checkout/page.jsx
import { Suspense } from "react";
import CheckoutPageClient from "./CheckoutPageClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutPageClient />
    </Suspense>
  );
}
