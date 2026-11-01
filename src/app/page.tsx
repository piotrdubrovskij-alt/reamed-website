import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AreasSection from "@/components/sections/AreasSection";
import SpecialistsSection from "@/components/sections/SpecialistsSection";
import FirstVisitSection from "@/components/sections/FirstVisitSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import Footer from "@/components/Footer";

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
