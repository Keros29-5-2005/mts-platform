"use client";

import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";

type SearchSuggestionsProps = {
  products: Product[];
  selectedIndex: number;
  onClose: () => void;
};

export default function SearchSuggestions({
  products,
  selectedIndex,
  onClose,
}: SearchSuggestionsProps) {
  if (products.length === 0) return null;

  return (
    <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl">

      {products.map((product, index) => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          onClick={onClose}
          className={`flex items-center gap-4 border-b border-white/10 p-4 transition last:border-none
            ${
              index === selectedIndex
                ? "bg-orange-500 text-black"
                : "hover:bg-orange-500 hover:text-black"
            }`}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={60}
            height={60}
            className="rounded-xl object-cover"
          />

          <div className="flex-1">

            <p className="font-semibold">
              {product.name}
            </p>

            <p className="text-sm opacity-80">
              {formatPrice(product.price)}
            </p>

          </div>

        </Link>
      ))}

    </div>
  );
}