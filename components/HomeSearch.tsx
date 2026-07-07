"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import products from "@/data/products";
import SearchSuggestions from "./SearchSuggestions";

export default function HomeSearch() {
  const router = useRouter();

  const [search, setSearch] = useState("");

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

  const handleSearch = () => {
    const query = search.trim();

    if (!query) return;

    router.push(
      `/collections?search=${encodeURIComponent(query)}`
    );
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mx-auto mt-12 max-w-3xl">

      <div className="relative">

        <div className="flex overflow-hidden rounded-full border border-white/10 bg-zinc-900">

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
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

        <SearchSuggestions
          products={suggestions}
          onClose={() => setSearch("")}
        />

      </div>

    </div>
  );
}