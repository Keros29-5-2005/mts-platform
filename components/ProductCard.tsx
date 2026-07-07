import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/formatPrice";

type ProductCardProps = {
  slug: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  slug,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-orange-400">

      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">

        <h3 className="text-xl font-semibold text-white">
          {name}
        </h3>

        <p className="mt-2 text-orange-400">
          {formatPrice(price)}
        </p>

        <Link href={`/product/${slug}`}>
          <button className="mt-6 w-full rounded-full border border-white/20 py-3 text-white transition hover:bg-white hover:text-black">
            View Product
          </button>
        </Link>

      </div>

    </div>
  );
}