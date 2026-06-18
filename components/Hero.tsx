import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 text-center">
      <h1 className="mb-4 text-6xl font-bold">
        More Than Seen
      </h1>

      <p className="mb-2 text-2xl text-gray-700">
        Reality Runs Deeper.
      </p>

      <p className="mb-8 text-gray-500">
        Science • Technology • Space • Psychology
      </p>

      <div className="flex gap-4">
        <Button text="Explore Collection" />
        <Button text="Learn More" />
      </div>
    </section>
  );
}