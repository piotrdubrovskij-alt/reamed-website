import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ManualineTerapijaContent from "@/components/ManualineTerapijaContent";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/paslaugos/manualine-terapija",
    title: "Manualinė terapija Vilniuje — ReaMed klinika",
    description:
      "Tikslingai taikoma manualinė terapija Vilniuje. Skausmo mažinimas, sąnarių judrumo gerinimas, derinimas su kineziterapija. ReaMed klinika, Olimpiečių g. 1A-7.",
  }),
  keywords: [
    "manualinė terapija Vilniuje",
    "manualinis terapeutas Vilnius",
    "nugaros skausmas",
    "sąnarių judrumas",
    "manualinis gydymas",
    "ReaMed",
  ],
};

export default function ManualineTerapijaPage() {
  return (
    <>
      <Header />
      <main>
        <ManualineTerapijaContent />
      </main>
      <Footer />
    </>
  );
}
