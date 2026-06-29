export default function Newsletter() {
  return (
    <section className="py-12 px-8 text-center">
      <h2 className="text-5xl md:text-6xl font-bold mb-6" >
        Stay Connected
      </h2>

      <p className="mb-10 text-lg text-gray-400 max-w-2xl mx-auto">
        Get updates about new collections,
        science-inspired designs,
        and exclusive launches.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border rounded-lg px-4 py-3 w-full sm:w-96"
        />

        <button className="bg-white text-black px-6 ">
          Subscribe
        </button>
      </div>
    </section>
  );
}
