import Link from "next/link";

import {
  Check,
  Phone,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

type ThankYouType = "contact" | "quote";

const content: Record<
  ThankYouType,
  {
    title: string;
    description: string;
    badge: string;
  }
> = {
  contact: {
    title: "Message sent successfully!",
    description:
      "Thank you for reaching out to us. We have received your message and will get back to you shortly.",
    badge: "Contact Request Submitted",
  },

  quote: {
    title: "Quote request submitted!",
    description:
      "Thank you for submitting your quote request. Our team will review the details and contact you shortly.",
    badge: "Quote Request Submitted",
  },
};

type Props = {
  searchParams: Promise<{
    type?: ThankYouType;
  }>;
};

export default async function ThankYouPage({
  searchParams,
}: Props) {
  const { type } = await searchParams;

  const pageType =
    type === "quote" ? "quote" : "contact";

  const selectedContent = content[pageType];

  return (
    <main className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-white px-5 py-16">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-[#FF4F00]/10 blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-2xl rounded-[2rem] border border-black/10 bg-white px-6 py-10 text-center shadow-xl shadow-black/[0.03] md:px-10 md:py-12">
        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#FF4F00]/15 bg-[#FF4F00]/5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF4F00] text-white">
            <Check className="h-7 w-7" />
          </div>
        </div>

        {/* Badge */}
        <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#FF4F00]">
          {selectedContent.badge}
        </span>

        {/* Title */}
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-black md:text-6xl">
          {selectedContent.title}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-black/60 md:text-base">
          {selectedContent.description}
        </p>

        {/* Response Time */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-4 py-2 text-xs font-medium text-black/50">
          <span className="h-2 w-2 rounded-full bg-[#FF4F00]" />
          Usually responds within 15–30 minutes
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="https://wa.me/917680013880"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#FF4F00] px-6 text-sm font-medium text-white transition hover:bg-[#E54800]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </Link>

          <Link
            href="tel:+917680013880"
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-6 text-sm font-medium text-black transition hover:border-[#FF4F00]/20 hover:text-[#FF4F00]"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </Link>
        </div>

        {/* Back Home */}
        <div className="mt-5">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-black/10 bg-black/[0.02] px-5 text-sm font-medium text-black/60 transition hover:border-[#FF4F00]/20 hover:text-[#FF4F00]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}