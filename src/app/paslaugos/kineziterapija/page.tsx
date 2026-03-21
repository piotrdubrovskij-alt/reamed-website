import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KineziterapijaContent from "@/components/KineziterapijaContent";

export const metadata: Metadata = {
  title: "Kineziterapija Vilniuje — ReaMed klinika",
  description:
    "Individualiai pritaikyta kineziterapija Vilniuje. Skausmo mažinimas, judesio atkūrimas, reabilitacija po traumų ir operacijų. ReaMed klinika, Olimpiečių g. 1A-7.",
  keywords: [
    "kineziterapija Vilniuje",
    "kineziterapeutas Vilnius",
    "nugaros skausmas",
    "reabilitacija",
    "judesio atkūrimas",
    "ReaMed",
  ],
};

export default function KineziterapijaPage() {
  return (
    <>
      <Header />
      <main>
        <KineziterapijaContent />
      </main>
      <Footer />
    </>
  );
}
