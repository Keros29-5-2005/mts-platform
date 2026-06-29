import reasons from "@/data/whyMts";

export default function WhyMts() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12">
        Why MTS?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="border rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {reason.title}
            </h3>

            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}