import Link from "next/link";

export default function PreFooterCTA() {
  return (
    <section className="mt-24">

      <div className="mx-auto max-w-4xl px-6 text-center">

        <p className="uppercase tracking-[0.4em] text-orange-400 text-sm">
          More Than Seen
        </p>

        <h2 className="mt-6 text-4xl font-bold md:text-6xl">
          Every design begins with curiosity.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          Explore science-inspired apparel, stories and ideas
          that go beyond the obvious.
        </p>

        <Link
          href="/collections"
          className="mt-10 inline-block rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
        >
          Explore Collection
        </Link>

      </div>

    </section>
  );
}
