"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Turnstile } from "@marsidev/react-turnstile";
import {useRouter} from "next/navigation";
import {
  MapPin,
  Calendar,
  Truck,
  Phone,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";


type FormData = {
  fromCity: string;
  toCity: string;
  movingDate: string;
  serviceType: string;
  phone: string;
};

export default function QuoteFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [captchaToken, setCaptchaToken] = useState("");
  const router = useRouter();

  async function onSubmit(data: FormData) {
    try {

      if (!captchaToken) {
        alert("Please complete captcha verification");
        return;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1d53f759-20ab-4c1c-871c-458d1548ba18",

          subject: "New Quote Request - Janvi Packers & Movers",

          from_city: data.fromCity,
          to_city: data.toCity,
          moving_date: data.movingDate,
          service_type: data.serviceType,
          phone: data.phone,
        }),
      });

      const result = await response.json();

      if (result.success) {
        reset();

  router.push("/thank-you?type=quote");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-white py-8 md:py-14 scroll-mt-20"

    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,79,0,0.08),transparent_30%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF4F00]/20 bg-[#FF4F00]/10 px-4 py-2 text-sm font-semibold text-[#FF4F00]">
            <ShieldCheck className="h-4 w-4" />
            Quick & Hassle-Free Moving Estimate
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Get Your Free Moving Quote
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Tell us your moving details and our team will contact you shortly
            with a quick estimate.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="rounded-[2rem] border border-gray-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-10">

            <form
              onSubmit={handleSubmit(onSubmit)}

            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {/* From City */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    From City
                  </label>

                  <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#FF4F00] focus-within:bg-white">
                    <MapPin className="h-5 w-5 text-[#FF4F00]" />

                    <input
                      type="text"
                      placeholder="Enter pickup city"
                      className="h-full w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                      {...register("fromCity", {
                        required: "From city is required",
                        minLength: {
                          value: 2,
                          message: "Minimum 2 characters",
                        },
                      })}
                    />
                  </div>

                  {errors.fromCity && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.fromCity.message}
                    </p>
                  )}
                </div>

                {/* To City */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    To City
                  </label>

                  <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#FF4F00] focus-within:bg-white">
                    <MapPin className="h-5 w-5 text-[#FF4F00]" />

                    <input
                      type="text"
                      placeholder="Enter destination city"
                      className="h-full w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                      {...register("toCity", {
                        required: "Destination city is required",
                        minLength: {
                          value: 2,
                          message: "Minimum 2 characters",
                        },
                      })}
                    />
                  </div>

                  {errors.toCity && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.toCity.message}
                    </p>
                  )}
                </div>

                {/* Moving Date */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Moving Date
                  </label>

                  <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#FF4F00] focus-within:bg-white">
                    <Calendar className="h-5 w-5 text-[#FF4F00]" />

                    <input
                      type="date"
                      className="h-full w-full bg-transparent text-sm text-gray-900 outline-none"
                      {...register("movingDate", {
                        required: "Moving date is required",
                      })}
                    />
                  </div>

                  {errors.movingDate && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.movingDate.message}
                    </p>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Service Type
                  </label>

                  <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#FF4F00] focus-within:bg-white">
                    <Truck className="h-5 w-5 text-[#FF4F00]" />

                    <select
                      className="h-full w-full bg-transparent text-sm text-gray-900 outline-none"
                      {...register("serviceType", {
                        required: "Please select a service",
                      })}
                    >
                      <option value="">Select service</option>
                      <option value="House Shifting">
                        House Shifting
                      </option>
                      <option value="Office Relocation">
                        Office Relocation
                      </option>
                      <option value="Bike Transport">
                        Bike Transport
                      </option>
                      <option value="Car Transport">
                        Car Transport
                      </option>
                      <option value="Logistics Services">
                        Logistics Services
                      </option>
                    </select>
                  </div>

                  {errors.serviceType && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.serviceType.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-800">
                    Phone Number
                  </label>

                  <div className="flex h-14 items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-[#FF4F00] focus-within:bg-white">
                    <Phone className="h-5 w-5 text-[#FF4F00]" />

                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="h-full w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[6-9]\d{9}$/,
                          message: "Enter a valid phone number",
                        },
                      })}
                    />
                  </div>

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

              </div>

              {/* Submit Row */}
              <div className="mt-6 flex flex-wrap items-center gap-5">

                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                  onSuccess={(token) => setCaptchaToken(token)}
                  options={{
                    theme: "light",
                    size: "normal",
                  }}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex h-[54px] items-center justify-center gap-2 rounded-2xl bg-[#FF4F00] px-8 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Get Free Estimate"}

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>


          </div>
        </motion.div>
      </div>
    </section>
  );
}