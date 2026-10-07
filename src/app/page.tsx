"use client";

import Navbar from "@/sections/Navbar";
import HeroSection from "@/sections/HeroSection";
import UnitsSection from "@/sections/UnitsSection";
import VideoSection from "@/sections/VideoSection";
import MarketSection from "@/sections/MarketSection";
import CompareSection from "@/sections/CompareSection";
import BenefitsSection from "@/sections/BenefitsSection";
import KPISection from "@/sections/KPISection";
import RoadmapSection from "@/sections/RoadmapSection";
import MediaSection from "@/sections/MediaSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import FAQSection from "@/sections/FAQSection";
import CtaSection from "@/sections/CtaSection";
import Footer from "@/sections/Footer";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <Navbar />
      <HeroSection />
      <UnitsSection />
      <MediaSection />
      <VideoSection />
      <MarketSection />
      <CompareSection />
      <BenefitsSection />
      <KPISection />
      <TestimonialsSection />
      <RoadmapSection />
      <FAQSection />
      <div className="cta-footer-shell">
        <CtaSection />
        <Footer />
      </div>
    </>
  );
}
