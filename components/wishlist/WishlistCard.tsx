"use client";

import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";

import { formatPrice } from "@/lib/formatPrice";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

type WishlistCardProps = {
  product: Product;
};

export default function WishlistCard({
  product,
}: WishlistCardProps) {
  const { removeFromWishlist } =
    useWishlist();

  const { addToCart } = useCart();

  function moveToCart() {
    addToCart(product);
    removeFromWishlist(product.id);
  }

  return (
    <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-zinc-900 p-6 transition hover:border-orange-400 lg:flex-row">

      <div className="relative h-48 w-full overflow-hidden rounded-2xl lg:h-36 lg:w-36">

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />

      </div>

      <div className="flex flex-1 flex-col justify-center">

        <h2 className="text-2xl font-semibold">
          {product.name}
        </h2>

        <p className="mt-2 text-gray-400">
          {product.description}
        </p>

        <p className="mt-4 text-xl font-semibold text-orange-400">
          {formatPrice(product.price)}
        </p>

      </div>

      <div className="flex flex-col gap-3">

        <Link
          href={`/product/${product.slug}`}
          className="rounded-full border border-white/20 px-6 py-3 text-center transition hover:border-orange-400"
        >
          View Product
        </Link>

        <button
          onClick={moveToCart}
          className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
        >
          Move to Cart
        </button>

        <button
          onClick={() =>
            removeFromWishlist(product.id)
          }
          className="rounded-full border border-red-500 px-6 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Remove
        </button>

      </div>

    </div>
  );
}