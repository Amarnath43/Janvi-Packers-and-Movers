"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Turnstile } from "@marsidev/react-turnstile";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  LucideIcon,
} from "lucide-react";

type FormData = {
  name: string;
  email: string;
  mobile: string;
  message: string;
};

const contactInfo: {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: MapPin,
    title: "Office Address",
    value: "Old Bowenpally, Secunderabad. Telangana – 500011",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "janvipackersandmovers@gmail.com",
    href: "mailto:janvipackersandmovers@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 76800 13880",
    href: "tel:+917680013880",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Mon - Sun : 24/7 Available",
  },
];

const inputClass =
  "h-12 w-full rounded-xl border border-orange-100 bg-white px-4 text-sm text-neutral-800 outline-none transition focus:border-[#FF4F00] focus:ring-2 focus:ring-orange-100";

export default function ContactSection() {
  const router = useRouter();

  const [captchaToken, setCaptchaToken] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    try {
      if (!captchaToken) {
        alert("Please complete captcha verification");
        return;
      }

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            access_key:
              "1d53f759-20ab-4c1c-871c-458d1548ba18",

            subject:
              "Contact Form Submission - Janvi Packers & Movers",

            sender_name: data.name,
            sender_email: data.email,

            message: `
Name: ${data.name}
Email: ${data.email}
Mobile: ${data.mobile}

Message:
${data.message}
            `,
          }),
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.message || "Something went wrong.");
        return;
      }

      reset();

      router.push("/thank-you?type=contact");
    } catch (error) {
      console.error(error);
      alert("Failed to submit form.");
    }
  }

  return (
    <section className="bg-white py-4 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#FF4F00]">
            Contact Us
          </p>

          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-5xl">
            Let’s Make Your Move Stress-Free
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-neutral-600 md:text-base">
            Connect with our team for safe, reliable, and professional packing
            and moving services across India.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-[#FFF7F2] p-6 md:p-7">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#FF4F00]/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6">
                <h3 className="text-2xl font-medium text-neutral-900">
                  Contact Information
                </h3>

                <p className="mt-2 text-sm leading-7 text-neutral-600">
                  We’re available 24/7 to assist you with shifting and
                  relocation services.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(
                  ({ icon: Icon, title, value, href }) => (
                    <div
                      key={title}
                      className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-white p-4 transition hover:shadow-md hover:shadow-orange-100/50"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FF4F00] text-white">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="mb-1 text-sm text-neutral-500">
                          {title}
                        </p>

                        {href ? (
                          <a
                            href={href}
                            className="break-words text-sm text-neutral-800 transition hover:text-[#FF4F00]"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm leading-6 text-neutral-800">
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-[0_10px_40px_rgba(255,79,0,0.06)] md:p-7">
            <div className="mb-6">
              <h3 className="text-2xl font-medium text-neutral-900">
                Send Us a Message
              </h3>

              <p className="mt-2 text-sm leading-7 text-neutral-600">
                Fill out the form and our team will contact you shortly.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <div>
                <label className="mb-2 block text-sm text-neutral-600">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className={inputClass}
                  {...register("name", {
                    required: "Name is required",
                  })}
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-neutral-600">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className={inputClass}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-neutral-600">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter your mobile number"
                  className={inputClass}
                  {...register("mobile", {
                    required: "Mobile number is required",
                  })}
                />

                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm text-neutral-600">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-orange-100 bg-white p-4 text-sm text-neutral-800 outline-none transition focus:border-[#FF4F00] focus:ring-2 focus:ring-orange-100"
                  {...register("message", {
                    required: "Message is required",
                  })}
                />

                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Turnstile
                siteKey={
                  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!
                }
                onSuccess={setCaptchaToken}
                options={{
                  theme: "light",
                  size: "normal",
                }}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#FF4F00] px-5 text-sm font-medium text-white transition hover:bg-[#E64700] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-orange-100 shadow-[0_10px_40px_rgba(255,79,0,0.06)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3617.2311440461413!2d78.47806667516704!3d17.482416983421114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI4JzU2LjciTiA3OMKwMjgnNTAuMyJF!5e1!3m2!1sen!2sin!4v1779815695818!5m2!1sen!2sin"
            width="100%"
            height="380"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
    </section>
  );
}