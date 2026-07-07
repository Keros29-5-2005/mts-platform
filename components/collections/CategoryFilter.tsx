"use client";

type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-6 py-3 font-medium transition-all duration-300
            ${
              selectedCategory === category
                ? "bg-orange-500 text-black shadow-lg shadow-orange-500/20"
                : "border border-white/10 bg-zinc-900 text-white hover:border-orange-400"
            }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
}