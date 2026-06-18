type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition">
      {text}
    </button>
  );
}