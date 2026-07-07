"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mx-auto w-full max-w-2xl">

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search collections..."
        className="
          w-full
          rounded-full
          border
          border-white/10
          bg-zinc-900
          px-6
          py-4
          text-white
          placeholder:text-gray-500
          outline-none
          transition-all
          duration-300
          focus:border-orange-400
          focus:ring-2
          focus:ring-orange-400/20
        "
      />

    </div>
  );
}