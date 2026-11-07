import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KakloSkausmasContent from "@/components/KakloSkausmasContent";
import SectionPagesBlock from "@/components/SectionPagesBlock";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/ka-gydome/kaklo-skausmas",
    title: "Kaklo skausmas Vilniuje — gydymas ir reabilitacija | ReaMed",
    description:
      "Kaklo skausmo gydymas Vilniuje. Įvertiname simptomų pobūdį, priežastis ir parenkame tinkamiausią gydymo kryptį — kineziterapija, manualinė terapija ar osteopatija. ReaMed klinika.",
  }),
  keywords: [
    "kaklo skausmas Vilniuje",
    "kaklo skausmo gydymas",
    "kaklo įtampa",
    "pečių juostos skausmas",
    "kineziterapija kaklui",
    "ReaMed",
  ],
};

export default function KakloSkausmasPage() {
  return (
    <>
      <Header />
      <main>
        <KakloSkausmasContent />
        <SectionPagesBlock section="kaklo-skausmas" />
      </main>
      <Footer />
    </>
  );
}
