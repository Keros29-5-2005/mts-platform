import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-16">

      <div className="mx-auto max-w-6xl px-6 text-center">

        <div className="flex justify-center">
          <Image
            src="/products/logo/mts-logo.svg"
            alt="MTS Logo"
            width={70}
            height={70}
          />
        </div>

        <h2 className="mt-6 text-3xl font-bold">
          More Than Seen
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          Curiosity begins where certainty ends.
        </p>

        <div className="mt-10 flex justify-center gap-8 text-sm uppercase tracking-wider">

          <Link
            href="/collections"
            className="transition hover:text-orange-400"
          >
            Collections
          </Link>

          <Link
            href="/stories"
            className="transition hover:text-orange-400"
          >
            Stories
          </Link>

          <Link
            href="/about"
            className="transition hover:text-orange-400"
          >
            About
          </Link>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8">

          <p className="text-sm text-gray-500">
            © 2026 More Than Seen. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}