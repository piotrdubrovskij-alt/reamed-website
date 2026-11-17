import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AreasSection from "@/components/sections/AreasSection";
import SpecialistsSection from "@/components/sections/SpecialistsSection";
import FirstVisitSection from "@/components/sections/FirstVisitSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = pageMetadata({
  path: "/",
  // Piotr 17.11.2026: the home page answers «kineziterapija Vilniuje» (Google already ranks it, not /paslaugos/kineziterapija).
  title: "Kineziterapija Vilniuje | ReaMed klinika",
  description:
    "Privati kineziterapijos, manualinės terapijos ir osteopatijos klinika Vilniaus centre. Nugaros, kaklo, peties ir kelio skausmas, sporto traumos, atsistatymas po operacijų. Siuntimo nereikia.",
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AreasSection />
        <FirstVisitSection />
        <ServicesSection />
        <SpecialistsSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}
