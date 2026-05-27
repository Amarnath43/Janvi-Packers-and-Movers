import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What types of relocation services do you provide?",
    answer:
      "We provide house shifting, office relocation, industrial relocation, bike transport, car transport, logistics solutions, and interstate moving services across India.",
  },
  {
    question: "How do you calculate shifting charges?",
    answer:
      "Shifting charges are calculated based on distance, quantity of goods, packing requirements, manpower, vehicle type, and additional services required.",
  },
  {
    question: "Do you provide packing materials and labor?",
    answer:
      "Yes. We provide high-quality packing materials along with trained professionals for safe packing, loading, unloading, and unpacking services.",
  },
  {
    question: "Are my belongings insured during transit?",
    answer:
      "Yes. We offer transit insurance options to ensure your belongings remain protected against unexpected damages during transportation.",
  },
  {
    question: "How long does a typical move take?",
    answer:
      "Local shifting is usually completed within the same day, while interstate relocation timelines depend on the destination and shipment size.",
  },
  {
    question: "Do you offer interstate moving services?",
    answer:
      "Yes. We provide reliable interstate and intercity relocation services with secure transportation and timely delivery across India.",
  },
  {
    question: "Can I transport my bike or car safely?",
    answer:
      "Absolutely. We use specialized vehicle carriers and secure handling methods for safe bike and car transportation services.",
  },
  {
    question: "How early should I book my move?",
    answer:
      "We recommend booking your move at least 3–7 days in advance to ensure smooth scheduling and vehicle availability.",
  },
  {
    question: "Do you provide office and commercial relocation?",
    answer:
      "Yes. We handle office shifting, commercial relocation, industrial equipment movement, and corporate moving services with minimal downtime.",
  },
  {
    question: "How can I get a quotation?",
    answer:
      "You can contact us by phone, WhatsApp, or through our website inquiry form to receive a free quotation based on your moving requirements.",
  },
];

const leftFAQs = faqs.slice(0, Math.ceil(faqs.length / 2));
const rightFAQs = faqs.slice(Math.ceil(faqs.length / 2));

function FAQColumn({
  items,
}: {
  items: typeof faqs;
}) {
  return (
    <div>
      {items.map((faq) => (
        <details
          key={faq.question}
          className="group border-b border-black/10"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
            <h3 className="text-[17px] font-bold leading-snug text-black">
              {faq.question}
            </h3>

            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/10 transition-transform duration-300 group-open:rotate-45">
              <Plus className="h-4 w-4 text-[#FF4F00]" />
            </div>
          </summary>

          <p className="max-w-[95%] pb-6 text-[15px] leading-relaxed text-black/60">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section
      className="relative overflow-hidden bg-white py-18"
      id="faq"
    >
      {/* Background Text */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[16vw] font-black uppercase leading-none text-black/[0.03]">
        FAQ
      </div>

      <div className="mx-auto max-w-7xl px-5">
        {/* HEADER */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-[#FF4F00]">
              — Frequently Asked Questions
            </span>

            <h2 className="text-[clamp(2rem,5vw,3rem)] font-black uppercase leading-none text-black">
              Moving Questions,
              <br />
              Answered
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-black/50 md:text-right">
            Everything you need to know about packing, moving,
            transportation, pricing, and relocation services.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid gap-12 md:grid-cols-2">
          <FAQColumn items={leftFAQs} />

          <FAQColumn items={rightFAQs} />
        </div>

        {/* FOOTER NOTE */}
        <p className="mt-12 text-center text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
          Still have questions? Contact our support team anytime.
        </p>
      </div>
    </section>
  );
}