import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Janvi Packers & Movers",
  description: "Reliable packing and moving services.",
  
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}