import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#fafafa] py-10 sm:py-14">
      <div className="mx-auto max-w-5xl px-5">
        <div className="rounded-[32px] border border-black/5 bg-white px-6 py-14 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sm:px-12 sm:py-16">
          <div className="max-w-3xl">
            {/* Heading */}
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-black">
              Move with confidence,
              <br />
              we’ll handle the rest.
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-black/60">
              Safe packing, careful transportation, and smooth relocation
              services for homes and offices across local and long-distance
              moves.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {/* Primary CTA */}
              <Link
                href="/#quote"
                className="group flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#FF4F00] px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-[#e64800]"
              >
                Get Free Quote

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <a
                href="tel:+917680013880"
                className="flex h-14 items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-8 text-sm font-medium text-black transition-all duration-300 hover:border-[#FF4F00]/30 hover:text-[#FF4F00]"
              >
                <Phone className="h-4 w-4" />

                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}