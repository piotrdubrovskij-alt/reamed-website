import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TendinopatijosContent from "@/components/TendinopatijosContent";

export const metadata: Metadata = {
  title: "Tendinopatijos ir perkrovos Vilniuje — gydymas ir reabilitacija | ReaMed",
  description:
    "Sausgyslių tendinopatijų ir perkrovų gydymas Vilniuje. Įvertiname simptomų pobūdį, apkrovos toleranciją ir parenkame tinkamiausią kryptį grįžimui į aktyvumą. ReaMed klinika.",
  keywords: [
    "tendinopatija Vilniuje",
    "sausgyslių perkrova gydymas",
    "pasikartojantis skausmas sportuojant",
    "tendinitas reabilitacija",
    "achilo sausgyslė gydymas",
    "ReaMed",
  ],
};

export default function TendinopatijosPage() {
  return (
    <>
      <Header />
      <main>
        <TendinopatijosContent />
      </main>
      <Footer />
    </>
  );
}
