import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AreasSection from "@/components/sections/AreasSection";
import SpecialistsSection from "@/components/sections/SpecialistsSection";
import FirstVisitSection from "@/components/sections/FirstVisitSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AreasSection />
        <SpecialistsSection />
        <FirstVisitSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
}
