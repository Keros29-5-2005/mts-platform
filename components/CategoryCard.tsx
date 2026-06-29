import Image from "next/image";

type CategoryCardProps = {
  name: string;
  image: string;
  description: string;
};

export default function CategoryCard({
  name,
  image,
  description,
}: CategoryCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-800 bg-black hover:border-orange-500 transition duration-300 cursor-pointer">

      <div className="relative h-56 overflow-hidden">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="p-6">

        <h3 className="text-xl font-semibold">
          {name}
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          {description}
        </p>

      </div>

    </div>
  );
}