"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Award,
  Truck,
} from "lucide-react";
import Image from "next/image";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "1000+", label: "Successful Moves" },
  { value: "200+", label: "Cities Covered" },
  { value: "24/7", label: "Customer Support" },
];

const pillars = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Fully Insured",
    desc: "Safe and secure transportation for every move.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Expert Team",
    desc: "Professionally trained packing and moving staff.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "ISO Certified",
    desc: "Trusted relocation processes with quality standards.",
  },
  {
    icon: <Truck className="h-5 w-5" />,
    title: "Pan India Service",
    desc: "Reliable relocation services across India.",
  },
];

// ─────────────────────────────────────────────
// ANIMATION
// ─────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
    },
  }),
};

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────

export default function About() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 scroll-mt-20"
    >
      {/* Top Accent Line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FF4F00]/20 to-transparent" />

      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(#FF4F00 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div
        ref={ref}
        className="mx-auto grid max-w-7xl items-center gap-24 px-5 lg:grid-cols-2"
      >
        {/* ───────────────── LEFT ───────────────── */}

        <div>
          {/* Label */}
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.3em] text-[#FF4F00]"
          >
            — About Us
          </motion.span>

          {/* Heading */}
          <motion.h2
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="max-w-xl text-[clamp(2.2rem,4vw,3.6rem)] font-black uppercase leading-[0.95] text-black"
          >
            Reliable Packers
            <br />
            <span className="text-[#FF4F00]">
              & Movers
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mt-7 max-w-2xl text-[15px] leading-relaxed text-black/60"
          >
            Founded in 2019, Janvi Packers & Movers has been
            delivering safe, professional, and reliable relocation
            services across India. From household shifting to
            commercial relocation, our experienced team ensures
            secure packing, smooth transportation, and timely
            delivery for every move.
          </motion.p>

          {/* Stats */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="mt-12 grid grid-cols-2 gap-6 border-y border-black/10 py-10 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black leading-none text-[#FF4F00]">
                  {stat.value}
                </div>

                <div className="mt-2 text-[11px] uppercase tracking-[0.15em] text-black/40">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Pillars */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                custom={4 + index}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="flex items-start gap-4"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#FF4F00]/15 bg-[#FF4F00]/5 text-[#FF4F00]">
                  {pillar.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-black">
                    {pillar.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-black/55">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ───────────────── RIGHT ───────────────── */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Soft Glow */}
          <div className="absolute inset-0 bg-[#FF4F00]/5 blur-3xl" />

          {/* Image Card */}
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl shadow-black/[0.03]">
            {/* Accent Line */}
            <div className="absolute left-0 top-0 h-[3px] w-full bg-[#FF4F00]" />

            {/* Image */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/about.webp"
                alt="Janvi Packers & Movers"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Bottom Info */}
            <div className="flex items-center justify-between border-t border-black/10 px-6 py-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/35">
                  Established
                </p>

                <p className="mt-1 text-sm font-bold text-black">
                  Since 2019
                </p>
              </div>

              <div className="rounded-full bg-[#FF4F00] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                Pan India Service
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-black/10 bg-white px-5 py-4 shadow-xl shadow-black/[0.04] md:block">
            <div className="text-2xl font-black leading-none text-[#FF4F00]">
              1000+
            </div>

            <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-black/40">
              Happy Customers
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}