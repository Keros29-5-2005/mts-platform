import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";

type CartSummaryProps = {
  totalItems: number;
  totalPrice: number;
};

export default function CartSummary({
  totalItems,
  totalPrice,
}: CartSummaryProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">

      <h2 className="text-2xl font-bold">
        Order Summary
      </h2>

      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between">
          <span className="text-gray-400">
            Total Items
          </span>

          <span className="font-semibold">
            {totalItems}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4">

          <span className="text-lg font-semibold">
            Total
          </span>

          <span className="text-2xl font-bold text-orange-400">
            {formatPrice(totalPrice)}
          </span>

        </div>

      </div>

      <div className="mt-8 space-y-4">

        <Link href="/shop">
          <button className="w-full rounded-full border border-white/20 py-3 transition hover:border-orange-400">
            Continue Shopping
          </button>
        </Link>

        <button className="w-full rounded-full bg-orange-500 py-3 font-semibold text-black transition hover:scale-105">
          Checkout
        </button>

      </div>

    </div>
  );
}