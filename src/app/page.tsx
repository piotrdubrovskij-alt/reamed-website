import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { eur } from "@/content/services/price-text";
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
  title: "ReaMed — kineziterapijos ir reabilitacijos klinika Vilniuje",
  description:
    `Privati kineziterapija Vilniaus centre: nugaros, kaklo, sąnarių skausmas, sporto traumos, reabilitacija po operacijų. Pirmasis vizitas ${eur("pirmasis-vizitas")}, be siuntimo.`,
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
