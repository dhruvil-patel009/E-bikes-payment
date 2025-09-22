"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import productsData from "../../data/productData.json";

export default function CheckoutSuccessPage() {
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Read query params from Stripe redirect
    const params = new URLSearchParams(window.location.search);
    const paymentIntentId = params.get("payment_intent");
    const productSlug = params.get("product"); // optional if you pass product slug

    if (paymentIntentId) {
      setPaymentInfo({ id: paymentIntentId });
    }

    // If you passed product slug during checkout
    if (productSlug) {
      const foundProduct = productsData.find((p) => p.slug === productSlug);
      setProduct(foundProduct);
    }
  }, []);

  return (
    <div className="container py-5 text-center">
      <h1 className="text-success mb-3">Payment Successful!</h1>
      {paymentInfo && (
        <p>
          Your payment was successful. Payment ID:{" "}
          <strong>{paymentInfo.id}</strong>
        </p>
      )}

      {product && (
        <div className="product-summary mt-4">
          <h2>{product.title}</h2>
          <Image
            src={product.images.front}
            alt={product.title}
            width={300}
            height={300}
            className="my-3"
          />
          <p className="fs-5">
            Price: {product.price.currency} {product.price.current}
          </p>
        </div>
      )}

      <Link href="/">
        <button className="btn btn-primary mt-4">Go Back Home</button>
      </Link>
    </div>
  );
}
