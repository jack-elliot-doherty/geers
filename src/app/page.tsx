"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Product } from "@/components/Product";
import { Ambassadors } from "@/components/Ambassadors";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Product />
        <Ambassadors />
        <Footer />
      </main>
    </>
  );
}
