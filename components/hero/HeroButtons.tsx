type HeroButtonsProps = {
  primary: string;
  secondary: string;
};

export default function HeroButtons({
  primary,
  secondary,
}: HeroButtonsProps) {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button
        className="
          rounded-2xl
          border
          border-orange-500
          bg-orange-500
          px-8
          py-4
          font-semibold
          text-black
          transition-all
          duration-300
          hover:scale-105
        "
      >
        {primary} →
      </button>

      <button
        className="
          rounded-2xl
          border
          border-white/20
          px-8
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:border-white
        "
      >
        {secondary}
      </button>
    </div>
  );
}