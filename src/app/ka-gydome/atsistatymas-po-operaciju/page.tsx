import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AtsistataymasPoOperacijuContent from "@/components/AtsistataymasPoOperacijuContent";

export const metadata: Metadata = {
  title: "Atsistatymas po operacijų Vilniuje — pooperacinė reabilitacija | ReaMed",
  description:
    "Pooperacinė reabilitacija Vilniuje. Įvertiname būklę, gijimo stadiją ir parenkame tinkamiausią atsistatymo kryptį po ortopedinio ar stuburo chirurginio gydymo. ReaMed klinika.",
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
      </main>
      <Footer />
    </>
  );
}
