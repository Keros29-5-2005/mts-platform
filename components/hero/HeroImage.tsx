import Image from "next/image";

type HeroImageProps = {
  image: string;
};

export default function HeroImage({
  image,
}: HeroImageProps) {
  return (
    <div className="relative flex justify-center">
      
      <div
        className="
          absolute
          h-80
          w-80
          rounded-full
          bg-orange-500/20
          blur-3xl
        "
      />

      <Image
        src={image}
        alt="Nebula Hoodie"
        width={550}
        height={550}
        priority
        className="
          relative
          z-10
          rounded-3xl
          shadow-2xl
        "
      />
    </div>
  );
}