import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GydomasisMasazasContent from "@/components/GydomasisMasazasContent";

export const metadata: Metadata = {
  title: "Gydomasis masažas Vilniuje — ReaMed klinika",
  description:
    "Tikslingai taikomas gydomasis masažas Vilniuje. Raumenų įtampos mažinimas, atsistatymas po krūvio, derinimas su kineziterapija. ReaMed klinika, Olimpiečių g. 1A-7.",
  keywords: [
    "gydomasis masažas Vilniuje",
    "masažas Vilnius",
    "raumenų įtampa",
    "atsistatymas po sporto",
    "masažas nugarai",
    "ReaMed",
  ],
};

export default function GydomasisMasazasPage() {
  return (
    <>
      <Header />
      <main>
        <GydomasisMasazasContent />
      </main>
      <Footer />
    </>
  );
}
