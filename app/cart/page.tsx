"use client";

import Link from "next/link";
import {
  useCart,
} from "@/context/CartContext";

import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";

export default function CartPage() {
  const {
    cartItems,
    count,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto max-w-7xl px-6 py-20">
        <EmptyCart />
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      {/* Header */}

      <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h1 className="text-5xl font-bold">
            Shopping Cart
          </h1>

          <p className="mt-3 text-gray-400">
            {count} item{count > 1 ? "s" : ""} in your cart
          </p>

        </div>

        <button
          onClick={clearCart}
          className="rounded-full border border-red-500/40 px-6 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Clear Cart
        </button>

      </div>

      {/* Layout */}

      <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">

        {/* Products */}

        <div className="space-y-8">

          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
              onIncrease={() =>
                increaseQuantity(item.product.id)
              }
              onDecrease={() =>
                decreaseQuantity(item.product.id)
              }
              onRemove={() =>
                removeFromCart(item.product.id)
              }
            />
          ))}

        </div>

        {/* Summary */}

        <div className="h-fit lg:sticky lg:top-8">

          <CartSummary
            totalItems={count}
            totalPrice={totalPrice}
          />

        </div>

      </div>

      {/* Continue Shopping */}

      <div className="mt-16 text-center">

        <Link
          href="/"
          className="text-orange-400 transition hover:text-orange-300"
        >
          ← Continue Shopping
        </Link>

      </div>

    </main>
  );
}