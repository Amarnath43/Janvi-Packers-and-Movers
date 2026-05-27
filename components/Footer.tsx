import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Branches", href: "#branches" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "House Shifting",
  "Office Relocation",
  "Bike Transport",
  "Car Transport",
  "Logistics Solutions",
  "Industrial Relocation",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-white">
      {/* Background Text */}
      <div className="pointer-events-none absolute bottom-0 right-0 select-none text-[14vw] font-black uppercase leading-none text-black/[0.03]">
        JANVI
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20">
        {/* GRID */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="lg:max-w-sm">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
                 <Image
              src="/icon.svg"
              alt="Janvi Packers & Movers Logo" 
                width={200}
                height={200}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
           

              <div>
                <h2 className="text-xl font-black uppercase tracking-wide text-black">
                  Janvi
                </h2>

                <p className="-mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FF4F00]">
                  Packers & Movers
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 text-sm leading-relaxed text-black/60">
              Janvi Packers & Movers provides safe, fast, and
              reliable relocation services across India for homes,
              offices, vehicles, and commercial goods.
            </p>

            {/* Trust */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-black/40">
              <span>Safe</span>

              <span className="h-1 w-1 rounded-full bg-[#FF4F00]" />

              <span>Fast</span>

              <span className="h-1 w-1 rounded-full bg-[#FF4F00]" />

              <span>Reliable</span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-black">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-black/60 transition-colors duration-300 hover:text-[#FF4F00]"
                  >
                    {link.label}

                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-black">
              Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-black/60"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-black">
              Contact
            </h3>

            <div className="space-y-5">
              {/* Phone */}
              <a
                href="tel:+917680013880"
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03]">
                  <Phone className="h-4 w-4 text-[#FF4F00]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/35">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-black/70 transition-colors duration-300 group-hover:text-[#FF4F00]">
                    +91 7680013880
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:janvipackersandmovers@gmail.com"
                className="group flex items-start gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03]">
                  <Mail className="h-4 w-4 text-[#FF4F00]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/35">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-black/70 transition-colors duration-300 group-hover:text-[#FF4F00]">
                    janvipackersandmovers@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03]">
                  <MapPin className="h-4 w-4 text-[#FF4F00]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/35">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-black/70">
                    Old Bowenpally, Secunderabad. Telangana – 500011
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-black/[0.03]">
                  <Clock3 className="h-4 w-4 text-[#FF4F00]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/35">
                    Support
                  </p>

                  <p className="mt-1 text-sm text-black/70">
                    24/7 Customer Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-center md:flex-row">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
  <p className="text-sm font-medium text-black/55">
    © {new Date().getFullYear()} Janvi Packers & Movers. All rights reserved.
  </p>

  <span className="hidden h-1 w-1 rounded-full bg-[#FF4F00] md:block" />

  <p className="text-sm font-medium text-black/45">
    GSTIN: 36EBHPK6615K2ZA
  </p>
</div>

          <div className="flex items-center gap-6">
  <Link
    href="/privacy-policy"
    className="text-sm font-medium text-black/50 transition-colors duration-300 hover:text-[#FF4F00]"
  >
    Privacy Policy
  </Link>

  <Link
    href="/terms-and-conditions"
    className="text-sm font-medium text-black/50 transition-colors duration-300 hover:text-[#FF4F00]"
  >
    Terms & Conditions
  </Link>
</div>
        </div>
      </div>
    </footer>
  );
}