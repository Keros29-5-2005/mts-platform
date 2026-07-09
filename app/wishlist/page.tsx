"use client";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

import EmptyWishlist from "@/components/wishlist/EmptyWishlist";
import WishlistCard from "@/components/wishlist/WishlistCard";

import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { wishlistItems } =
    useWishlist();

  return (
    <main className="py-20">

      <Container>

        <SectionHeader
          label="Wishlist"
          title="Saved For Later"
          description="Everything you've loved in one place."
        />

        {wishlistItems.length === 0 ? (
          <EmptyWishlist />
        ) : (
          <div className="mt-12 space-y-6">

            {wishlistItems.map((product) => (
              <WishlistCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        )}

      </Container>

    </main>
  );
}