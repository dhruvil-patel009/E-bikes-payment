"use client";
import React from "react";
import CheckoutPageClient from "./CheckoutPageClient";

// Force Next.js to treat this page as dynamic (no prerender)
export const dynamic = "force-dynamic";

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
