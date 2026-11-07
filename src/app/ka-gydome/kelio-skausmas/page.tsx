import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KelioSkausmasContent from "@/components/KelioSkausmasContent";
import SectionPagesBlock from "@/components/SectionPagesBlock";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/ka-gydome/kelio-skausmas",
    title: "Kelio skausmas ir traumos Vilniuje — gydymas ir reabilitacija | ReaMed",
    description:
      "Kelio skausmo, traumų ir pooperacinės reabilitacijos gydymas Vilniuje. Įvertiname ir parenkame tinkamiausią kryptį — kineziterapija, sporto ar pooperacinė reabilitacija. ReaMed klinika.",
  }),
  keywords: [
    "kelio skausmas Vilniuje",
    "kelio trauma reabilitacija",
    "kelio operacija reabilitacija",
    "menisko trauma",
    "raiščių trauma kelias",
    "ReaMed",
  ],
};

export default function KelioSkausmasPage() {
  return (
    <>
      <Header />
      <main>
        <KelioSkausmasContent />
        <SectionPagesBlock section="kelio-skausmas" />
      </main>
      <Footer />
    </>
  );
}
