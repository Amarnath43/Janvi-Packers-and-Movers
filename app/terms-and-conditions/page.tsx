"use client";

import Link from "next/link";
import { FileText, ShieldCheck } from "lucide-react";

// ─────────────────────────────────────────────
// TERMS DATA
// ─────────────────────────────────────────────

const termsSections = [
  {
    title: "1. Service Agreement",
    points: [
      "By booking our services, the customer agrees to the terms and conditions mentioned by Janvi Packers & Movers.",
      "All services are subject to availability, operational feasibility, and confirmation.",
    ],
  },

  {
    title: "2. Quotations & Pricing",
    points: [
      "All quotations are based on the information provided by the customer.",
      "Final pricing may vary after physical inspection or additional service requirements.",
      "Additional charges may apply for extra labor, staircase handling, long carrying distance, or special packing requirements.",
    ],
  },

  {
    title: "3. Packing Material Retention",
    points: [
      "Retention charges of ₹100 per corrugated box and ₹500 per red plastic box will apply if packing materials are not returned after relocation.",
    ],
  },

  {
    title: "4. Distance to Doorstep",
    points: [
      "Additional charges may apply if the distance between the vehicle parking location and the loading/unloading point exceeds 30 meters.",
    ],
  },

  {
    title: "5. Service Lift Usage",
    points: [
      "Extra labor charges may apply if service lifts are unavailable during loading or unloading operations.",
    ],
  },

  {
    title: "6. Rescheduling Policy",
    points: [
      "Customers may reschedule their shifting free of charge up to 48 hours before the scheduled pickup time.",
      "Rescheduling requests within 48 hours may attract operational charges depending on resource allocation.",
    ],
  },

  {
    title: "7. Customer Responsibilities",
    points: [
      "Customers must disclose fragile, valuable, oversized, or sensitive items before transportation.",
      "Customers are responsible for verifying all goods before dispatch and after delivery.",
      "Restricted, illegal, hazardous, or prohibited items shall not be transported.",
    ],
  },

  {
    title: "8. Delivery & Transit",
    points: [
      "Transit timelines are estimated and may vary due to traffic, weather, road conditions, strikes, or unforeseen operational situations.",
      "Janvi Packers & Movers shall not be held responsible for delays caused by circumstances beyond reasonable control.",
    ],
  },

  {
    title: "9. Insurance & Liability",
    points: [
      "Transit insurance is optional and subject to separate charges.",
      "Without insurance coverage, company liability for damages shall be limited as per applicable operational policies.",
      "Damage claims must be reported within 24 hours of delivery.",
    ],
  },

  {
    title: "10. Cancellation Policy",
    points: [
      "Cancellation charges may apply once manpower, vehicles, or packing resources are allocated.",
      "Refund eligibility, if applicable, shall be determined based on service stage and operational costs incurred.",
    ],
  },

  {
    title: "11. Website Usage",
    points: [
      "Information submitted through quote forms or contact forms must be accurate and genuine.",
      "Users shall not misuse, copy, or attempt unauthorized access to the website or its services.",
    ],
  },

  {
    title: "12. Privacy",
    points: [
      "Customer information is handled according to our Privacy Policy.",
      "By using our website, users consent to data collection practices described in the Privacy Policy.",
    ],
  },

  {
    title: "13. Governing Jurisdiction",
    points: [
      "These terms shall be governed by applicable laws of India.",
      "Any disputes shall fall under the jurisdiction of courts located in Hyderabad, Telangana.",
    ],
  },
];

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function TermsAndConditionsPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background Text */}
      <div className="pointer-events-none absolute right-0 top-32 select-none text-[14vw] font-black uppercase leading-none text-black/[0.03]">
        Terms
      </div>

      {/* HERO */}
      <section className="relative border-b border-black/10 py-24">
        <div className="mx-auto max-w-5xl px-5">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.3em] text-[#FF4F00]">
            — Terms & Conditions
          </span>

          <h1 className="max-w-4xl text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.95] text-black">
            Terms of
            <br />
            Service
          </h1>

          <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-black/60">
            Please read these terms carefully before using our
            relocation services or submitting inquiries through our
            website.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-black/40">
            <span>Last Updated: January 2026</span>

            <span className="h-1 w-1 rounded-full bg-[#FF4F00]" />

            <span>janvipackersandmovers.in</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="space-y-16">
            {termsSections.map((section) => (
              <div
                key={section.title}
                className="border-b border-black/10 pb-12"
              >
                {/* Title */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#FF4F00]/15 bg-[#FF4F00]/5 text-[#FF4F00]">
                    <FileText className="h-5 w-5" />
                  </div>

                  <h2 className="text-2xl font-black uppercase text-black">
                    {section.title}
                  </h2>
                </div>

                {/* Points */}
                <ul className="mt-7 space-y-5">
                  {section.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF4F00]" />

                      <p className="text-[15px] leading-relaxed text-black/60">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* CONTACT CARD */}
            <div className="rounded-3xl border border-black/10 bg-[#FF4F00]/[0.03] p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FF4F00] text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-xl font-black uppercase text-black">
                    Contact Information
                  </h2>

                  <p className="mt-1 text-sm text-black/55">
                    For any service-related questions or disputes,
                    please contact:
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <InfoBlock
                  label="Business Name"
                  value="Janvi Packers & Movers"
                />

                <InfoBlock
                  label="GST Number"
                  value="36EBHPK6615K2ZA"
                />

                <InfoBlock
                  label="Email"
                  value="support@janvipackersandmovers.in"
                />

                <InfoBlock
                  label="Phone"
                  value="+91 98765 43210"
                />

                <InfoBlock
                  label="Location"
                  value="Old Bowenpally, Hyderabad, Telangana"
                />

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                    Website
                  </p>

                  <Link
                    href="https://janvipackersandmovers.in"
                    className="mt-2 block text-sm text-[#FF4F00]"
                  >
                    janvipackersandmovers.in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─────────────────────────────────────────────
// INFO BLOCK
// ─────────────────────────────────────────────

function InfoBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
        {label}
      </p>

      <p className="mt-2 text-sm text-black/70">
        {value}
      </p>
    </div>
  );
}