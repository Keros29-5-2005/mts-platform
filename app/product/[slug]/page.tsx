import products from "@/data/products";
import Image from "next/image";
import Container from "@/components/ui/Container";
import AddToCartButton from "@/components/AddToCartButton";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    return (
      <Container>
        <div className="py-20 text-center">
          Product not found.
        </div>
      </Container>
    );
  }

  return (
    <main className="py-20">

      <Container>

        {/* Product Section */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Product Image */}
          <div className="overflow-hidden rounded-3xl">

            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="w-full rounded-3xl object-cover"
            />

          </div>

          {/* Product Info */}
          <div>

            <p className="uppercase tracking-[0.3em] text-orange-400 text-sm">
              MTS Collection
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              {product.name}
            </h1>

            <p className="mt-6 text-gray-400">
              {product.description}
            </p>

            <p className="mt-8 text-3xl font-semibold text-orange-400">
              {product.price}
            </p>

            <AddToCartButton product={product} />

          </div>

        </div>

        {/* Related Products */}
        <div className="mt-24">

          <div className="mb-12 text-center">

            <p className="uppercase tracking-[0.4em] text-orange-400 text-sm">
                Continue Exploring
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Discover More
            </h2>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                Every design tells a different story of science,
                mystery and exploration.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {products
              .filter((item) => item.slug !== product.slug)
              .slice(0, 3)
              .map((item) => (

                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
                >

                  <Image
                    src={item.image}
                    alt={item.name}
                    width={600}
                    height={600}
                    className="w-full object-cover"
                  />

                  <div className="p-6">

                    <h3 className="text-xl font-semibold">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-orange-400">
                      {item.price}
                    </p>

                  </div>

                </div>

              ))}

          </div>

        </div>

      </Container>

    </main>
  );
}