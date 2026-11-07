import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlintantisSkausmasContent from "@/components/PlintantisSkausmasContent";
import SectionPagesBlock from "@/components/SectionPagesBlock";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/ka-gydome/plintantis-skausmas",
    title: "Plintantis skausmas ir tirpimas Vilniuje — gydymas ir įvertinimas | ReaMed",
    description:
      "Plintančio skausmo, tirpimo ir dilgčiojimo į ranką ar koją įvertinimas ir gydymas Vilniuje. Analizuojame priežastis ir parenkame tinkamiausią kryptį. ReaMed klinika.",
  }),
  keywords: [
    "plintantis skausmas Vilniuje",
    "tirpimas rankoje kojoje",
    "skausmas plinta į koją",
    "nervų dirginimas gydymas",
    "kaklo skausmas plinta į ranką",
    "ReaMed",
  ],
};

export default function PlintantisSkausmasPage() {
  return (
    <>
      <Header />
      <main>
        <PlintantisSkausmasContent />
        <SectionPagesBlock section="plintantis-skausmas" />
      </main>
      <Footer />
    </>
  );
}
