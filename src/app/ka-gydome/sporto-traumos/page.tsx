import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SportoTraumosContent from "@/components/SportoTraumosContent";

export const metadata: Metadata = {
  title: "Sporto traumos Vilniuje — gydymas ir reabilitacija | ReaMed",
  description:
    "Sporto traumų gydymas ir reabilitacija Vilniuje. Įvertiname traumos pobūdį, funkcinius ribojimus ir parenkame tinkamiausią kryptį saugiam grįžimui į aktyvumą ar sportą. ReaMed klinika.",
  keywords: [
    "sporto traumos Vilniuje",
    "sporto traumų reabilitacija",
    "grįžimas į sportą po traumos",
    "raiščių trauma reabilitacija",
    "sausgyslių perkrova gydymas",
    "ReaMed",
  ],
};

export default function SportoTraumosPage() {
  return (
    <>
      <Header />
      <main>
        <SportoTraumosContent />
      </main>
      <Footer />
    </>
  );
}
