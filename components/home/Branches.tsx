import Image from "next/image";
import {
  Phone,
  MapPin,
  ExternalLink,
  Building2,
} from "lucide-react";

const branches = [
  {
    city: "Hyderabad",
    state: "Telangana",
    address:
      "Maithri Vanam, Old Bowenpally, Secunderabad, Telangana 500011",
    phone: "+91 76800 13880",
    mapsUrl:
      "https://www.google.com/maps?q=17.482417,78.4806416&z=17&hl=en",
    image: "/Charminar.png",
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    address:
      "Pillayar Koil St, Viraraghavapuram, Avadi, Tamil Nadu 600077",
    phone: "+91 76800 13880",
    mapsUrl:
      "https://www.google.com/maps?q=13.0740145,80.1092914&z=17&hl=en",
    image: "/monument.png",
  },
  {
    city: "Bengaluru",
    state: "Karnataka",
    address:
      "Yeswanthpur, Bengaluru, Karnataka 560022",
    phone: "+91 7680013880",
    mapsUrl:
      "https://www.google.com/maps?q=13.0209629,77.5370009&z=17&hl=en",
    image: "/landmark.png",
  },
];

function BranchCard({
  branch,
}: {
  branch: (typeof branches)[0];
}) {
  return (
    <div className="group rounded-[28px] border border-black/8 bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#FF4F00]/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      {/* Top */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#FF4F00]">
            {branch.state}
          </p>

          <h3 className="mt-2 text-2xl font-black tracking-tight text-black">
            {branch.city}
          </h3>
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FF4F00]/5">
          <Image
            src={branch.image}
            alt={branch.city}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-7 h-px bg-black/6" />

      {/* Address */}
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-black/[0.02]">
          <Building2 className="h-4 w-4 text-[#FF4F00]" />
        </div>

        <p className="text-sm leading-relaxed text-black/60">
          {branch.address}
        </p>
      </div>

      {/* Phone */}
      <div className="mt-5 flex items-center gap-4">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-black/8 bg-black/[0.02]">
          <Phone className="h-4 w-4 text-[#FF4F00]" />
        </div>

        <a
          href={`tel:${branch.phone.replace(/\s/g, "")}`}
          className="text-sm font-semibold text-black/75 transition-colors duration-300 hover:text-[#FF4F00]"
        >
          {branch.phone}
        </a>
      </div>

      {/* CTA */}
      <a
        href={branch.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-[#FF4F00]/15 bg-[#FF4F00]/5 text-xs font-bold uppercase tracking-[0.18em] text-[#FF4F00] transition-all duration-300 hover:bg-[#FF4F00] hover:text-white"
      >
        <MapPin className="h-4 w-4" />
        View Location
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}

export default function Branches() {
  return (
    <section
      id="branches"
      className="relative overflow-hidden bg-[#fafafa] py-20 md:py-24"
    >
      {/* Background Text */}
      <div className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[16vw] font-black leading-none text-black/[0.03] lg:block">
        OFFICES
      </div>

      <div className="mx-auto max-w-7xl px-5">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-lg font-bold uppercase tracking-[0.3em] text-[#FF4F00]">
              — Our Locations
            </span>

            <h2 className="text-[clamp(2rem,5vw,3rem)] font-black leading-[0.95] tracking-[-0.04em] text-black">
              Branch Network
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-black/50 md:text-right">
            Walk into your nearest branch or contact us for
            quick moving assistance and same-day quotations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-7">
          {branches.map((branch) => (
            <BranchCard
              key={branch.city}
              branch={branch}
            />
          ))}
        </div>
      </div>
    </section>
  );
}