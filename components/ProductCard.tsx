import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/lib/formatPrice";

import FadeUp from "@/components/animations/FadeUp";
import HoverLift from "@/components/animations/HoverLift";
import WishlistButton from "./WishlistButton";

import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const {
    slug,
    name,
    price,
    image,
  } = product;

  return (
    <FadeUp>
      <HoverLift>

        <div className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-500 hover:border-orange-400 hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]">

          {/* Product Image */}

          <div className="relative h-72 overflow-hidden">

            <WishlistButton product={product} />

            <Image
              src={image}
              alt={name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

          </div>

          {/* Product Details */}

          <div className="p-6">

            <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-orange-300">
              {name}
            </h3>

            <p className="mt-2 text-orange-400">
              {formatPrice(price)}
            </p>

            <Link href={`/product/${slug}`}>
              <button
                className="
                  mt-6
                  w-full
                  rounded-full
                  border
                  border-white/20
                  py-3
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                  group-hover:-translate-y-1
                "
              >
                View Product
              </button>
            </Link>

          </div>

        </div>

      </HoverLift>
    </FadeUp>
  );
}