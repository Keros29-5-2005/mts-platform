"use client";

type SortDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortDropdown({
  value,
  onChange,
}: SortDropdownProps) {
  return (
    <div className="mt-10 flex justify-end">

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          rounded-full
          border
          border-white/10
          bg-zinc-900
          px-5
          py-3
          text-white
          outline-none
          transition-all
          duration-300
          hover:border-orange-400
          focus:border-orange-400
        "
      >
        <option value="featured">
          Featured
        </option>

        <option value="price-low">
          Price: Low → High
        </option>

        <option value="price-high">
          Price: High → Low
        </option>

        <option value="name">
          Name (A → Z)
        </option>

      </select>

    </div>
  );
}