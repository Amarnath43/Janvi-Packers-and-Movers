"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/icon.svg"
            alt="Janvi Packers & Movers Logo"
            width={200}
            height={200}
            priority
            className="h-12 w-auto object-contain sm:h-14 md:h-16"
          />

          <div className="min-w-0 leading-none">
            <h2 className="truncate text-xl font-extrabold text-[#ff4f00] sm:text-2xl">
              Janvi
            </h2>

            <p className="truncate text-[10px] font-medium text-gray-500 sm:text-xs">
              Packers & Movers
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#FF4F00] lg:text-base"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/#quote"
            className="inline-flex items-center justify-center rounded-lg bg-[#FF4F00] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 lg:px-5 lg:py-3"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="h-7 w-7 text-gray-900" />
          ) : (
            <Menu className="h-7 w-7 text-gray-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-gray-200 bg-white shadow-xl md:hidden">
          <div className="space-y-1 px-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-[#FF4F00]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#quote"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-[#FF4F00] px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}