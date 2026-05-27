import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Janvi Packers & Movers",
  description: "Reliable packing and moving services.",
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Navbar/>
      <body>{children}</body>
      <Footer/>
    </html>
  );
}