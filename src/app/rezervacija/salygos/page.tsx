import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsContent from "@/components/booking/TermsContent";

export const metadata: Metadata = {
  title: "Registracijos, apmokėjimo ir atšaukimo sąlygos — ReaMed",
  robots: { index: false, follow: false },
};

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
