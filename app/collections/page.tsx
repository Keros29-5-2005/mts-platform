import Container from "@/components/ui/Container";
import FeaturedCategories from "@/components/FeaturedCategories";

export default function CollectionsPage() {
  return (
    <main>

      {/* Hero Section */}
      <section className="py-28 text-center">

        <Container>

          <p className="uppercase tracking-[0.4em] text-orange-400 text-sm">
            Collections
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mt-6">
            Choose Your
            <br />
            Curiosity
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
            Explore products inspired by science,
            discovery, mystery and the universe beyond
            what we normally see.
          </p>

        </Container>

      </section>

      {/* Categories */}
      <FeaturedCategories />

    </main>
  );
}