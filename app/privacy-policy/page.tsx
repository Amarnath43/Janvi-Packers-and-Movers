"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-white">
      {/* Background Text */}
      <div className="pointer-events-none absolute right-0 top-32 select-none text-[14vw] font-black uppercase leading-none text-black/[0.03]">
        Privacy
      </div>

      {/* Hero */}
      <section className="relative border-b border-black/10 py-24">
        <div className="mx-auto max-w-5xl px-5">
          <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.3em] text-[#FF4F00]">
            — Privacy Policy
          </span>

          <h1 className="max-w-4xl text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.95] text-black">
            Your Privacy
            <br />
            Matters to Us
          </h1>

          <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-black/60">
            Janvi Packers & Movers is committed to protecting your
            personal information and maintaining transparency about
            how your data is collected, used, and stored.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-black/40">
            <span>Last Updated: January 2026</span>

            <span className="h-1 w-1 rounded-full bg-[#FF4F00]" />

            <span>janvipackersandmovers.in</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="space-y-16">
            {/* Intro */}
            <PolicyBlock
              title="1. Introduction"
              content={[
                "This Privacy Policy explains how Janvi Packers & Movers collects, uses, stores, and protects information provided through our website and relocation services.",
                "By accessing or using our website, you agree to the practices described in this policy.",
              ]}
            />

            {/* Information Collected */}
            <PolicyBlock
              title="2. Information We Collect"
              content={[
                "We may collect personal information including your name, phone number, email address, pickup and delivery locations, and relocation requirements when you submit quote requests or contact forms.",
                "We may also collect limited technical information such as browser type, IP address, and device information for security and analytics purposes.",
              ]}
            />

            {/* Usage */}
            <PolicyBlock
              title="3. How We Use Your Information"
              content={[
                "The information collected is used to provide quotations, schedule relocation services, respond to inquiries, improve customer experience, and maintain operational communication.",
                "We do not sell or rent your personal information to third parties.",
              ]}
            />

            {/* reCAPTCHA */}
            <PolicyBlock
              title="4. Google reCAPTCHA"
              content={[
                "Our website may use Google reCAPTCHA to protect forms from spam and automated abuse.",
                "reCAPTCHA may collect hardware and software information in accordance with Google's Privacy Policy and Terms of Service.",
              ]}
            />

            {/* Data Security */}
            <PolicyBlock
              title="5. Data Security"
              content={[
                "We implement reasonable administrative and technical measures to protect your personal information from unauthorized access, misuse, or disclosure.",
                "However, no method of online transmission or electronic storage is completely secure.",
              ]}
            />

            {/* Cookies */}
            <PolicyBlock
              title="6. Cookies"
              content={[
                "Our website may use cookies or similar technologies to improve website functionality, analyze traffic, and enhance user experience.",
                "You can disable cookies through your browser settings if preferred.",
              ]}
            />

            {/* Third Parties */}
            <PolicyBlock
              title="7. Third-Party Services"
              content={[
                "Our website may contain links or integrations with third-party services such as Google Maps, WhatsApp, or communication platforms.",
                "We are not responsible for the privacy practices of external websites or services.",
              ]}
            />

            {/* User Rights */}
            <PolicyBlock
              title="8. Your Rights"
              content={[
                "You may contact us to request correction, update, or deletion of your personal information, subject to applicable legal and operational requirements.",
              ]}
            />

            {/* Updates */}
            <PolicyBlock
              title="9. Policy Updates"
              content={[
                "We may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes.",
                "Updated versions will be published on this page with a revised effective date.",
              ]}
            />

            {/* Contact */}
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
                    For privacy-related inquiries, please contact:
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                    Business Name
                  </p>

                  <p className="mt-2 text-sm text-black/70">
                    Janvi Packers & Movers
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                    GST Number
                  </p>

                  <p className="mt-2 text-sm text-black/70">
                    36EBHPK6615K2ZA
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                    Email
                  </p>

                  <p className="mt-2 text-sm text-black/70">
                    support@janvipackersandmovers.in
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                    Phone
                  </p>

                  <p className="mt-2 text-sm text-black/70">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/35">
                    Location
                  </p>

                  <p className="mt-2 text-sm text-black/70">
                    Old Bowenpally, Hyderabad, Telangana
                  </p>
                </div>

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
// POLICY BLOCK
// ─────────────────────────────────────────────

function PolicyBlock({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  return (
    <div className="border-b border-black/10 pb-12">
      <h2 className="text-2xl font-black uppercase text-black">
        {title}
      </h2>

      <div className="mt-6 space-y-5">
        {content.map((paragraph, index) => (
          <p
            key={index}
            className="text-[15px] leading-relaxed text-black/60"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}