import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OsteopatijaContent from "@/components/OsteopatijaContent";

export const metadata: Metadata = {
  title: "Osteopatija Vilniuje — ReaMed klinika",
  description:
    "Struktūrinis osteopatinis gydymas Vilniuje. Skausmo mažinimas, kūno judrumo ir funkcinių ryšių gerinimas. Piotr Dubrovskij, ReaMed klinika, Olimpiečių g. 1A-7.",
  keywords: [
    "osteopatija Vilniuje",
    "osteopatas Vilnius",
    "struktūrinė osteopatija",
    "nugaros skausmas",
    "kūno judrumas",
    "ReaMed",
  ],
};

export default function OsteopatijaPage() {
  return (
    <>
      <Header />
      <main>
        <OsteopatijaContent />
      </main>
      <Footer />
    </>
  );
}
