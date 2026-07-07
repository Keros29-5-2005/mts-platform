import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/10 bg-zinc-900 px-8 py-24 text-center">

      <div className="mb-8 text-7xl">
        🛒
      </div>

      <h2 className="text-4xl font-bold">
        Your Cart is Empty
      </h2>

      <p className="mt-4 max-w-md text-gray-400">
        Looks like you haven't added anything yet.
        Discover science-inspired products and start your journey.
      </p>

      <Link href="/shop" className="mt-10">
        <button className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105">
          Explore Collection
        </button>
      </Link>

    </div>
  );
}