import Link from "next/link";
import { Heart } from "lucide-react";

export default function EmptyWishlist() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">

      <Heart
        size={80}
        className="mb-6 text-orange-400"
      />

      <h2 className="text-4xl font-bold">
        Your Wishlist is Empty
      </h2>

      <p className="mt-4 max-w-lg text-gray-400">
        Save products you love and they'll appear here.
      </p>

      <Link
        href="/collections"
        className="mt-10 rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
      >
        Explore Collection
      </Link>

    </div>
  );
}