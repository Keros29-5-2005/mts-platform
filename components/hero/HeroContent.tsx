import FadeUp from "@/components/animations/FadeUp";

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

      <FadeUp>
        <HeroBadge text={badge} />
      </FadeUp>

      <FadeUp delay={0.15}>
        <h1 className="mt-8 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
          {title}
        </h1>
      </FadeUp>

      <FadeUp delay={0.3}>
        <p className="mt-8 text-lg leading-8 text-gray-400">
          {description}
        </p>
      </FadeUp>

      <FadeUp delay={0.45}>
        <HeroButtons
          primary={primaryButton}
          secondary={secondaryButton}
        />
      </FadeUp>

    </div>
  );
}