"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

import type { Product } from "@/types/product";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {  
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="mt-8 rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
      >
        Add to Cart
      </button>

      {showToast && (
        <div className="fixed right-6 top-6 z-50 rounded-xl border border-green-500/30 bg-zinc-900 px-5 py-3 text-green-400 shadow-lg">
          ✓ Added to Cart
        </div>
      )}
    </>
  );
}