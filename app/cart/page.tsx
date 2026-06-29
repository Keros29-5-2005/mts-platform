"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
const { cartItems, count } = useCart();

return ( <main className="py-20 px-8"> <h1 className="mb-10 text-center text-5xl font-bold">
Shopping Cart </h1>

  <p className="mb-8 text-center text-xl">
    Total Items: <span className="font-bold">{count}</span>
  </p>

  <pre className="overflow-auto rounded-xl bg-zinc-900 p-6">
    {JSON.stringify(cartItems, null, 2)}
  </pre>
</main>

);
}
