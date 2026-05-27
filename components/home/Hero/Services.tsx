import Image from "next/image";

const services = [
  {
    title: "House Shifting",
    image: "/house_shifting.webp",
  },
  {
    title: "Office Relocation",
    image: "/office_shifting.webp",
  },
  {
    title: "Industrial Relocation",
    image: "/industrial_relocation.webp",
  },
  {
    title: "Bike Transport",
    image: "/bike_relocation.webp",
  },
  {
    title: "Car Transport",
    image: "/car_relocation.webp",
  },
  {
    title: "Logistics Solutions",
    image: "/logistic_solution.webp",
  },
  {
    title: "Full Truck Load (FTL)",
    image: "/FTL.webp",
  },
  {
    title: "Partial Truck Load (PTL)",
    image: "/PTL.webp",
  },
  {
    title: "ODC Services",
    image: "/ODC.webp",
  },
];

type ServiceCardProps = {
  title: string;
  image: string;
};

function ServiceCard({
  title,
  image,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
      {/* Image */}
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Title */}
        <div className="absolute bottom-0 left-0 z-10 p-6">
          <h3 className="text-2xl font-bold tracking-tight text-white">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fafafa] py-6 md:py-14"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,79,0,0.08),transparent_28%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-[#FF4F00]/20 bg-[#FF4F00]/10 px-4 py-2 text-sm font-semibold text-[#FF4F00]">
            Our Services
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Professional Moving & Logistics Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Reliable relocation and transportation services
            for homes, businesses, vehicles, and industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}