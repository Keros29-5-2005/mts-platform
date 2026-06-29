import Container from "./ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import CategoryCard from "@/components/CategoryCard";
import categories from "@/data/categories";

export default function FeaturedCategories() {
  return (
    <section className="pb-20 px-8">
      <Container>
        <SectionHeader
          label="Categories"
          title="Shop by Category"
          description="Browse our growing collection of thoughtfully designed products."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              image={category.image}
              description={category.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}