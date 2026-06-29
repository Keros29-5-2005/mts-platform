import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";

type HeroContentProps = {
  badge: string;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
};

export default function HeroContent({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
}: HeroContentProps) {
  return (
    <div className="max-w-2xl">
      <HeroBadge text={badge} />

      <h1 className="mt-8 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
        {title}
      </h1>

      <p className="mt-8 text-lg leading-8 text-gray-400">
        {description}
      </p>

      <HeroButtons
        primary={primaryButton}
        secondary={secondaryButton}
      />
    </div>
  );
}