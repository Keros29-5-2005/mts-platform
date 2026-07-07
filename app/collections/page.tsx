"use client";

import { useMemo, useState } from "react";

import products from "@/data/products";

import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

import SearchBar from "@/components/collections/SearchBar";
import CategoryFilter from "@/components/collections/CategoryFilter";
import SortDropdown from "@/components/collections/SortDropdown";
import ProductGrid from "@/components/collections/ProductGrid";

import { useSearchParams } from "next/navigation";

export default function CollectionsPage() {
  const searchParams = useSearchParams();
  const initialSearch =
    searchParams.get("search") ?? "";
    
  const [search, setSearch] =
    useState(initialSearch);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("featured");

  // Categories
  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        products.map(
          (product) => product.category
        )
      ),
    ];
  }, []);

  // Filter + Sort
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search
    if (search.trim()) {
      filtered = filtered.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) =>
          product.category === selectedCategory
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort(
          (a, b) => a.price - b.price
        );
        break;

      case "price-high":
        filtered.sort(
          (a, b) => b.price - a.price
        );
        break;

      case "name":
        filtered.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      case "featured":
      default:
        filtered.sort(
          (a, b) =>
            Number(b.featured) -
            Number(a.featured)
        );
    }

    return filtered;
  }, [
    search,
    selectedCategory,
    sortBy,
  ]);

  return (
    <main className="py-20">

      <Container>

        <SectionHeader
          label="Our Collection"
          title="Discover More Than Seen"
          description="Explore science-inspired apparel crafted for curious minds."
        />

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={
            selectedCategory
          }
          onSelect={
            setSelectedCategory
          }
        />

        <SortDropdown
          value={sortBy}
          onChange={setSortBy}
        />

        <ProductGrid
          products={filteredProducts}
        />

      </Container>

    </main>
  );
}