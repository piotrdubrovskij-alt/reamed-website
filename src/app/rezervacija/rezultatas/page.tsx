import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingHeading from "@/components/booking/BookingHeading";
import ResultContent from "@/components/booking/ResultContent";

export const metadata: Metadata = {
  title: "Registracijos rezultatas — ReaMed",
  robots: { index: false, follow: false },
};

export default function RezultatasPage() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <BookingHeading kind="result" />
          <Suspense fallback={null}>
            <ResultContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
