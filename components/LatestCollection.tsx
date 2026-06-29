import Container from "./ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "./ProductCard";
import products from "@/data/products";

export default function LatestCollection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          label="Featured Collection"
          title="Explore Our Collection"
          description="Discover products inspired by science, technology, curiosity, and exploration."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}