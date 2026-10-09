"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import CartToast from "./CartToast";
import { products } from "@/lib/products";

const TOAST_DURATION_MS = 3500;

/**
 * Faithful port: adding to cart shows the toast and nothing else. The header
 * badge and $74.00 total stay static, exactly as in main.html.
 */
export default function ProductGrid() {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  function handleAdd(product) {
    setToast({
      title: `Added "${product.name}"`,
      desc: `$${product.price.toFixed(2)} added to bag • Free shipping ready`,
    });
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setToast(null), TOAST_DURATION_MS);
  }

  return (
    <>
      <div className="mt-space-xl grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={handleAdd} />
        ))}
      </div>
      <CartToast visible={toast !== null} title={toast?.title} desc={toast?.desc} />
    </>
  );
}
