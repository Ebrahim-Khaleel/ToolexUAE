'use client';

import Hero from "../components/Hero";
import Partners from "../components/Partners";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <FeaturedProducts />
      <Testimonials />

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
