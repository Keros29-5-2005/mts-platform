import Container from "./ui/Container";
import hero from "@/data/hero";

import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <HeroContent
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            primaryButton={hero.primaryButton}
            secondaryButton={hero.secondaryButton}
          />

          <HeroImage image={hero.image} />
        </div>
      </Container>
    </section>
  );
} 