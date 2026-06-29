import reflection from "@/data/reflections";

export default function ReflectionSection() {
  return (
    <section className="py-20 text-center">
      <p>{reflection.category}</p>

      <h2>{reflection.quote}</h2>

      <span>— {reflection.author}</span>
    </section>
  );
}