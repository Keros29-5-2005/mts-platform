"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { Product } from "@/types/product";

type WishlistContextType = {
  wishlistItems: Product[];

  addToWishlist: (product: Product) => void;

  removeFromWishlist: (id: number) => void;

  isInWishlist: (id: number) => boolean;

  count: number;
};

const WishlistContext =
  createContext<WishlistContextType | null>(
    null
  );

export function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishlistItems, setWishlistItems] =
    useState<Product[]>([]);

  useEffect(() => {
    const stored =
      localStorage.getItem("wishlist");

    if (stored) {
      setWishlistItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  const addToWishlist = (
    product: Product
  ) => {
    setWishlistItems((prev) => {
      if (
        prev.some(
          (item) => item.id === product.id
        )
      ) {
        return prev;
      }

      return [...prev, product];
    });
  };

  const removeFromWishlist = (
    id: number
  ) => {
    setWishlistItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const isInWishlist = (
    id: number
  ) => {
    return wishlistItems.some(
      (item) => item.id === id
    );
  };

  const count = useMemo(
    () => wishlistItems.length,
    [wishlistItems]
  );

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        count,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context =
    useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}