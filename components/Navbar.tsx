"use client";

import Container from "./ui/Container";
import Link from "next/link";
import navigation from "@/data/shared/navigation";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { count } = useCart();
  return (
    <header className="py-6">
      <Container>
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/products/logo/mts-logo.svg"
              alt="MTS Logo"
              width={40}
              height={40}
            />

              <span className="text-lg font-semibold tracking-wide">
                More Than Seen
              </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-10">

            <nav className="flex items-center gap-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="transition hover:text-orange-400"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link
              href="/cart"
              className="rounded-full border border-white/20 px-4 py-2 transition hover:border-orange-400"
            >
              Cart ({count})
            </Link>

          </div>

        </div>
      </Container>
    </header>
  );
} 