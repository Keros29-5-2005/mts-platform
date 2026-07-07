"use client";

import Image from "next/image";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";
import QuantitySelector from "./QuantitySelector";

type CartItemProps = {
  product: Product;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export default function CartItem({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-zinc-900 p-6 md:flex-row md:items-center">

      {/* Product Image */}
      <div className="relative h-32 w-32 overflow-hidden rounded-2xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">

        <h2 className="text-2xl font-semibold">
          {product.name}
        </h2>

        <p className="mt-2 text-orange-400 text-lg">
          {formatPrice(product.price)}
        </p>

        <div className="mt-6">
          <QuantitySelector
            quantity={quantity}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
          />
        </div>

      </div>

      {/* Right Side */}
      <div className="flex flex-col items-end gap-4">

        <p className="text-xl font-semibold">
          {formatPrice(product.price * quantity)}
        </p>

        <button
          onClick={onRemove}
          className="rounded-full border border-red-500/40 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Remove
        </button>

      </div>

    </div>
  );
}