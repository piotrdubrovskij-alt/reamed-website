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
import { fetchGoogleReviews } from "@/lib/google-reviews";

export default async function Home() {
  const reviews = await fetchGoogleReviews();
  const reviewsUrl = "https://www.google.com/search?hl=en-LT&gl=lt&q=ReaMed,+Olimpiečių+g.+1a,+Vilnius,+09200+Vilniaus+m.+sav.&ludocid=5379242466351535503&lsig=AB86z5Wss5jZo_36S86sdmHmI7DZ#lrd=0x46dd9167a75aaaab:0x4aa6e885cf94558f,1";

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
        <ReviewsSection reviews={reviews} reviewsUrl={reviewsUrl} />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
