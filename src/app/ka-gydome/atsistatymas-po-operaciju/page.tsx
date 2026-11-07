import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AtsistataymasPoOperacijuContent from "@/components/AtsistataymasPoOperacijuContent";
import SectionPagesBlock from "@/components/SectionPagesBlock";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/ka-gydome/atsistatymas-po-operaciju",
    title: "Atsistatymas po operacijų Vilniuje — pooperacinė reabilitacija | ReaMed",
    description:
      "Pooperacinė reabilitacija Vilniuje. Įvertiname būklę, gijimo stadiją ir parenkame tinkamiausią atsistatymo kryptį po ortopedinio ar stuburo chirurginio gydymo. ReaMed klinika.",
  }),
  keywords: [
    "atsistatymas po operacijos Vilniuje",
    "pooperacinė reabilitacija",
    "reabilitacija po kelio operacijos",
    "reabilitacija po peties operacijos",
    "reabilitacija po stuburo operacijos",
    "ReaMed",
  ],
};

export default function AtsistataymasPoOperacijuPage() {
  return (
    <>
      <Header />
      <main>
        <AtsistataymasPoOperacijuContent />
        <SectionPagesBlock section="atsistatymas-po-operaciju" />
      </main>
      <Footer />
    </>
  );
}
