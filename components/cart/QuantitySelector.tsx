type QuantitySelectorProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-4 rounded-full border border-white/10 bg-zinc-900 px-3 py-2 w-fit">

      <button
        onClick={onDecrease}
        className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-orange-500 hover:text-black"
      >
        -
      </button>

      <span className="min-w-[24px] text-center font-semibold">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-orange-500 hover:text-black"
      >
        +
      </button>

    </div>
  );
}