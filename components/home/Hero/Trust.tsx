"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Truck,
  Users,
  PackageCheck,
} from "lucide-react";

const stats = [
  {
    icon: BriefcaseBusiness,
    value: "5+",
    label: "Years Experience",
  },
  {
    icon: PackageCheck,
    value: "1000+",
    label: "Successful Moves",
  },
  {
    icon: Truck,
    value: "15+",
    label: "Transport Vehicles",
  },
  {
    icon: Users,
    value: "25+",
    label: "Professional Staff",
  },
];

export default function TrustStats() {
  return (
    <section className="relative  py-12 md:py-16 bg-white">
      
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,79,0,0.05),transparent_45%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4F00]/10 text-[#FF4F00]">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Number */}
                <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="mt-2 text-sm font-medium text-gray-600 md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}