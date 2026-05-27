"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Phone,
  MapPin,
  ExternalLink,
  Building2,
} from "lucide-react";
import Image from "next/image";



// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const branches = [
  {
    city: "Hyderabad",
    state: "Telangana",
    address:
            "Maithri Vanam, Old Bowenpally, Secunderabad, Telangana 500011",
    phone: "+91 76800 13880",
    mapsUrl: "https://www.google.com/maps?q=17.482417,78.4806416&z=17&hl=en",
    SVG: "/Charminar.png",
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    address:
      "Pillayar Koil St, Viraraghavapuram, Avadi, Tamil Nadu 600077",
    phone: "+91 76800 13880",
    mapsUrl: "https://www.google.com/maps?q=13.0740145,80.1092914&z=17&hl=en",
     SVG: "/monument.png",
  },
  {
    city: "Bengaluru",
    state: "Karnataka",
    address:
      "Yeswanthpur, Bengaluru, Karnataka 560022",
    phone: "+91 7680013880",
    mapsUrl: "https://www.google.com/maps?q=13.0209629,77.5370009&z=17&hl=en",
    SVG: "/landmark.png",
  },
];

// ─────────────────────────────────────────────
// CARD
// ─────────────────────────────────────────────

function BranchCard({
  branch,
  index,
}: {
  branch: (typeof branches)[0];
  index: number;
}) {
  const SVG = branch.SVG;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white transition-all duration-300 hover:border-[#FF4F00]/30"
    >
      {/* TOP LINE */}
      <div className="absolute left-0 top-0 h-[3px] w-full origin-left scale-x-0 bg-[#FF4F00] transition-transform duration-500 group-hover:scale-x-100" />

      {/* HEADER */}
      <div className="relative flex h-44 items-end justify-center overflow-hidden border-b border-black/5 px-8 pb-5">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* SOFT GLOW */}
        <div className="absolute inset-0 bg-[#FF4F00]/[0.03] blur-3xl" />

      

        
      </div>

      {/* BODY */}
      <div className="flex flex-col gap-6 p-7">
        {/* TITLE */}
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-3xl font-black uppercase tracking-wide text-black">
              {branch.city}
            </h3>

            <span className="rounded-full border border-[#FF4F00]/20 bg-[#FF4F00]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#FF4F00]">
              Branch
            </span>
          </div>

          <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-[#FF4F00]">
            {branch.state}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-black/6" />

        {/* ADDRESS */}
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03]">
            <Building2 className="h-4 w-4 text-[#FF4F00]" />
          </div>

          <p className="text-sm leading-relaxed text-black/60">
            {branch.address}
          </p>
        </div>

        {/* PHONE */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03]">
            <Phone className="h-4 w-4 text-[#FF4F00]" />
          </div>

          <a
            href={`tel:${branch.phone.replace(/\s/g, "")}`}
            className="text-sm font-medium text-black/80 transition-colors hover:text-[#FF4F00]"
          >
            {branch.phone}
          </a>
        </div>

        {/* BUTTON */}
        <a
          href={branch.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-[#FF4F00]/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#FF4F00] transition-all duration-300 hover:bg-[#FF4F00] hover:text-white"
        >
          <MapPin className="h-4 w-4" />
          View on Maps
          <ExternalLink className="h-3 w-3 opacity-70" />
        </a>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// SECTION
// ─────────────────────────────────────────────

export default function Branches() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="branches"
      className="relative overflow-hidden bg-white py-18"
    >
      {/* BG TEXT */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[18vw] font-black leading-none text-black/[0.03]">
        OFFICES
      </div>

      <div className="mx-auto max-w-7xl px-5" ref={ref}>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.3em] text-[#FF4F00]">
              — Our Locations
            </span>

            <h2 className="text-[clamp(2rem,5vw,3rem)] font-black uppercase leading-none text-black">
              Branch Network
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-black/50 md:text-right">
            Walk in or call your nearest branch for a same-day quote and
            consultation.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-3">
          {branches.map((branch, index) => (
            <BranchCard
              key={branch.city}
              branch={branch}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}