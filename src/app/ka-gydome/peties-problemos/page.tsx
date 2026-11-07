import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PetiesProblemoContent from "@/components/PetiesProblemoContent";
import SectionPagesBlock from "@/components/SectionPagesBlock";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/ka-gydome/peties-problemos",
    title: "Peties problemos Vilniuje — gydymas ir reabilitacija | ReaMed",
    description:
      "Peties skausmo, judesio ribojimo ir atsistatymo po traumos ar operacijos gydymas Vilniuje. Įvertiname ir parenkame tinkamiausią kryptį — kineziterapija, manualinė terapija, sporto ar pooperacinė reabilitacija. ReaMed klinika.",
  }),
  keywords: [
    "peties skausmas Vilniuje",
    "peties gydymas",
    "peties reabilitacija",
    "rotatorių manžetė",
    "peties operacija reabilitacija",
    "ReaMed",
  ],
};

export default function PetiesProblemoPage() {
  return (
    <>
      <Header />
      <main>
        <PetiesProblemoContent />
        <SectionPagesBlock section="peties-problemos" />
      </main>
      <Footer />
    </>
  );
}
