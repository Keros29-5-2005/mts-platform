"use client";

import { Heart } from "lucide-react";

import { useWishlist } from "@/context/WishlistContext";
import type { Product } from "@/types/product";

type WishlistButtonProps = {
  product: Product;
};

export default function WishlistButton({
  product,
}: WishlistButtonProps) {
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const liked = isInWishlist(product.id);

  function toggleWishlist() {
    if (liked) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <button
      onClick={toggleWishlist}
      className="
        absolute
        right-4
        top-4
        z-20
        rounded-full
        bg-black/60
        p-2
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-110
        hover:bg-orange-500
      "
    >
      <Heart
        size={22}
        className={`transition-all duration-300 ${
          liked
            ? "fill-orange-500 text-orange-500"
            : "text-white"
        }`}
      />
    </button>
  );
}