import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import QuickAccessSection from "@/components/sections/QuickAccessSection";
import MainDirectionsSection from "@/components/sections/MainDirectionsSection";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhatWeTreatSection from "@/components/sections/WhatWeTreatSection";
import SpecialistsSection from "@/components/sections/SpecialistsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <QuickAccessSection />
        <MainDirectionsSection />
        <HowWeWorkSection />
        <WhatWeTreatSection />
        <SpecialistsSection />
        <ReviewsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
