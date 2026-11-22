import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsContent from "@/components/booking/TermsContent";
import { pageMetadata } from "@/lib/seo";

// A public page since 15.11.2026 (Paysera's review wants the sale terms reachable on the site). Since 22.11.2026 it
// carries Piotr's «Paslaugų pirkimo, registracijos ir atšaukimo taisyklės», redakcija 2026-11-22.
export const metadata: Metadata = pageMetadata({
  path: "/rezervacija/salygos",
  title: "Paslaugų pirkimo, registracijos ir atšaukimo taisyklės — ReaMed",
  description:
    "ReaMed paslaugų pirkimo taisyklės: apmokėjimas per Paysera, vizitų paketai, perkėlimas ir atšaukimas likus bent 12 valandų, pinigų grąžinimas.",
});

export default function SalygosPage() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <TermsContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
