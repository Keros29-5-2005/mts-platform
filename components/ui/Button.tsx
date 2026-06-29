type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button
      className="
        rounded-full
        border
        border-white/10
        px-7
        py-3
        text-sm
        font-medium
        uppercase
        tracking-wider
        transition-all
        duration-300
        hover:scale-105
        hover:border-blue-400
        hover:bg-blue-500/10
      "
    >
      {text}
    </button>
  );
}