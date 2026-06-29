type HeroBadgeProps = {
  text: string;
};

export default function HeroBadge({
  text,
}: HeroBadgeProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
      🧠 {text}
    </div>
  );
}