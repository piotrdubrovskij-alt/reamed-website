import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PooperacineReabilitacijaContent from "@/components/PooperacineReabilitacijaContent";

export const metadata: Metadata = {
  title: "Pooperacinė reabilitacija Vilniuje — ReaMed klinika",
  description:
    "Pooperacinė reabilitacija po ortopedinių ir stuburo operacijų Vilniuje. Individualus planas pagal gijimo etapą, saugus grįžimas į judėjimą ir funkciją. ReaMed klinika.",
  keywords: [
    "pooperacinė reabilitacija Vilniuje",
    "reabilitacija po operacijos",
    "reabilitacija po kelio operacijos",
    "reabilitacija po stuburo operacijos",
    "pooperacinis gydymas",
    "ReaMed",
  ],
};

export default function PooperacineReabilitacijaPage() {
  return (
    <>
      <Header />
      <main>
        <PooperacineReabilitacijaContent />
      </main>
      <Footer />
    </>
  );
}
