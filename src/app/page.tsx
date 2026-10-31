import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import HowWeWorkSection from "@/components/sections/HowWeWorkSection";
import WhatWeTreatSection from "@/components/sections/WhatWeTreatSection";
import ServicesSection from "@/components/sections/ServicesSection";
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
        <TrustBar />
        <WhatWeTreatSection />
        <ServicesSection />
        <HowWeWorkSection />
        <SpecialistsSection />
        <ReviewsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
