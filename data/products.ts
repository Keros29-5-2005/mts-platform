import type { Product } from "@/components/types/product";

const products: Product[] = [
  {
    id: 1,
    slug: "cosmic-tee",
    name: "Cosmic Tee",
    price: "₹999",
    image: "/products/cosmic-tee.jpg",
    description:
      "Inspired by the wonders of the cosmos and designed for curious minds.",
  },
  {
    id: 2,
    slug: "nebula-hoodie",
    name: "Nebula Hoodie",
    price: "₹1,999",
    image: "/products/nebula-hoodie.jpg",
    description:
      "Comfort meets exploration with a design inspired by distant nebulae.",
    },
    {
    id: 3,
    slug: "beyond-reality",
    name: "Beyond Reality",
    price: "₹1,299",
    image: "/products/beyond-reality.jpg",
    description:
      "A design that challenges perception and celebrates curiosity.",
  },
  {
    id: 4,
    slug: "dark-matter-cap",
    name: "Dark Matter Cap",
    price: "₹799",
    image: "/products/dark-matter-cap.jpg",
    description:
      "Minimal, mysterious and inspired by the unseen forces of the universe.",
  },
];

export default products;