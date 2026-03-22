import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NugarosSkausmasContent from "@/components/NugarosSkausmasContent";

export const metadata: Metadata = {
  title: "Nugaros skausmas Vilniuje — gydymas ir reabilitacija | ReaMed",
  description:
    "Nugaros skausmo gydymas Vilniuje. Įvertiname skausmo pobūdį, priežastis ir parenkame tinkamiausią gydymo kryptį — kineziterapija, manualinė terapija ar osteopatija. ReaMed klinika.",
  keywords: [
    "nugaros skausmas Vilniuje",
    "nugaros skausmo gydymas",
    "juosmens skausmas",
    "nugaros gydytojas Vilnius",
    "kineziterapija nugarai",
    "ReaMed",
  ],
};

export default function NugarosSkausmasPage() {
  return (
    <>
      <Header />
      <main>
        <NugarosSkausmasContent />
      </main>
      <Footer />
    </>
  );
}
