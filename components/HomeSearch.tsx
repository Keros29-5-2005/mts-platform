"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import products from "@/data/products";
import SearchSuggestions from "./SearchSuggestions";

export default function HomeSearch() {
  const router = useRouter();

  const searchRef =
    useRef<HTMLDivElement>(null);

  const [search, setSearch] =
    useState("");

  const [showSuggestions, setShowSuggestions] =
    useState(false);

  const [selectedIndex, setSelectedIndex] =
    useState(-1);

  const suggestions = useMemo(() => {
    if (!search.trim()) return [];

    return products
      .filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .slice(0, 5);
  }, [search]);

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        searchRef.current &&
        !searchRef.current.contains(
          event.target as Node
        )
      ) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleSearch = () => {
    const query = search.trim();

    if (!query) return;

    setShowSuggestions(false);

    router.push(
      `/collections?search=${encodeURIComponent(query)}`
    );
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();

        setSelectedIndex((prev) =>
          prev < suggestions.length - 1
            ? prev + 1
            : 0
        );

        break;

      case "ArrowUp":
        e.preventDefault();

        setSelectedIndex((prev) =>
          prev > 0
            ? prev - 1
            : suggestions.length - 1
        );

        break;

      case "Enter":
        if (
          selectedIndex >= 0 &&
          suggestions[selectedIndex]
        ) {
          router.push(
            `/product/${suggestions[selectedIndex].slug}`
          );

          setShowSuggestions(false);

          return;
        }

        handleSearch();

        break;

      case "Escape":
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div className="mx-auto mt-12 max-w-3xl">

      <div
        ref={searchRef}
        className="relative"
      >

        <div className="flex overflow-hidden rounded-full border border-white/10 bg-zinc-900">

          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
              setSelectedIndex(-1);
            }}
            onFocus={() => {
              if (search.trim()) {
                setShowSuggestions(true);
              }
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search the collection..."
            className="flex-1 bg-transparent px-6 py-5 text-white placeholder:text-gray-500 outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-orange-500 px-8 font-semibold text-black transition hover:bg-orange-400"
          >
            Search
          </button>

        </div>

        {showSuggestions && (
          <SearchSuggestions
            products={suggestions}
            selectedIndex={selectedIndex}
            onClose={() => {
              setShowSuggestions(false);
              setSelectedIndex(-1);
            }}
          />
        )}

      </div>

    </div>
  );
}