"use client";

import Container from "./ui/Container";
import Link from "next/link";
import Image from "next/image";

import navigation from "@/data/shared/navigation";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

import { Heart, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { count } = useCart();
  const { count: wishlistCount } = useWishlist();

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

            {/* Wishlist */}

            <Link
              href="/wishlist"
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-orange-400 hover:text-orange-400"
            >
              <Heart size={18} />

              <span>
                Wishlist ({wishlistCount})
              </span>
            </Link>

            {/* Cart */}

            <Link
              href="/cart"
              className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 transition hover:border-orange-400 hover:text-orange-400"
            >
              <ShoppingCart size={18} />

              <span>
                Cart ({count})
              </span>
            </Link>

          </div>

        </div>
      </Container>
    </header>
  );
}