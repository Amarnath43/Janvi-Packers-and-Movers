"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Check,
} from "lucide-react";
import Link from "next/link";

const trustPoints = [
  "GST Certified",
  "Fully Insured",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-14 md:py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(255,79,0,0.12),transparent_35%)]" />

      {/* Soft Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[#FF4F00]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF4F00]/15 bg-[#FF4F00]/8 px-4 py-2 text-xs font-medium text-[#FF4F00] backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" />
            Trusted Packers & Movers Across South India
          </div>

          {/* Heading */}
          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl">
            Move Stress-Free with{" "}
            <span className="text-[#FF4F00]">
              Janvi Packers & Movers
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
            Reliable house shifting, office relocation,
            vehicle transport, and logistics services across
            Hyderabad, Chennai & Bengaluru.
          </p>

          {/* Conversion Line */}
          <p className="mt-4 text-sm font-medium text-neutral-700">
            Free shifting quotation within 30 minutes.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* WhatsApp Primary */}
            <Link
              href="https://wa.me/917680013880"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2 rounded-xl bg-[#FF4F00] px-6 text-sm font-medium text-white transition hover:bg-[#E64800]"
            >
              <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              WhatsApp Us
            </Link>

            {/* Call Secondary */}
            <Link
              href="tel:+917680013880"
              className="group inline-flex h-12 items-center gap-2 rounded-xl border border-neutral-300 px-6 text-sm font-medium text-neutral-800 transition hover:border-[#FF4F00] hover:text-[#FF4F00]"
            >
              <Phone className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Call Now
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-neutral-600">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm"
              >
                <Check className="h-4 w-4 text-[#FF4F00]" />
                {item}
              </div>
            ))}
          </div>

          {/* Locations */}
          <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
            <MapPin className="h-4 w-4 text-[#FF4F00]" />
            Offices in Hyderabad • Chennai • Bengaluru
          </div>
        </motion.div>
      </div>
    </section>
  );
}