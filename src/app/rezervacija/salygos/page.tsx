import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsContent from "@/components/booking/TermsContent";
import { pageMetadata } from "@/lib/seo";

// A public page since 15.11.2026 (Paysera's review wants the sale terms reachable on the site); the booking page
// itself stays noindex and unlinked until the Paysera project is activated.
export const metadata: Metadata = pageMetadata({
  path: "/rezervacija/salygos",
  title: "Registracijos, apmokėjimo ir atšaukimo sąlygos — ReaMed",
  description:
    "Registracijos internetu sąlygos ReaMed klinikoje: apmokėjimas per Paysera, vizito keitimas ir atšaukimas likus bent 12 valandų, sumokėtų lėšų grąžinimas.",
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
