import ProductCard from "@/components/ProductCard";
import type { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-3xl font-bold">
          No Products Found
        </h2>

        <p className="mt-4 text-gray-400">
          Try searching with another keyword or category.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
  );
}  