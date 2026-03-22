import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SportoReabilitacijaContent from "@/components/SportoReabilitacijaContent";

export const metadata: Metadata = {
  title: "Sporto reabilitacija Vilniuje — ReaMed klinika",
  description:
    "Sporto reabilitacija po traumų ir perkrovų Vilniuje. Funkcinis įvertinimas, individualus planas, kryptingas grįžimas į sportą ar aktyvų gyvenimą. ReaMed klinika.",
  keywords: [
    "sporto reabilitacija Vilniuje",
    "sporto traumos gydymas",
    "grįžimas į sportą",
    "sporto fizioterapija Vilnius",
    "reabilitacija po traumos",
    "ReaMed",
  ],
};

export default function SportoReabilitacijaPage() {
  return (
    <>
      <Header />
      <main>
        <SportoReabilitacijaContent />
      </main>
      <Footer />
    </>
  );
}
