import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingHeading from "@/components/booking/BookingHeading";
import BookingContent from "@/components/booking/BookingContent";
import { pageMetadata } from "@/lib/seo";

// Live since 16.11.2026 (Paysera project activated; klinika-system docs/WEBSITE_BOOKING.md): every
// "Registruotis" button leads here. /registracija stays as the question form for those who prefer it.
export const metadata: Metadata = pageMetadata({
  path: "/rezervacija",
  title: "Registracija vizitui internetu — ReaMed",
  description:
    "Pasirinkite specialistą, paslaugą ir laiką, apmokėkite internetu, ir vizitas ReaMed klinikoje patvirtintas.",
});

export default function RezervacijaPage() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <BookingHeading kind="booking" />
          {/* useSearchParams (the rebook link's specialist and service) needs the boundary. */}
          <Suspense fallback={null}>
            <BookingContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
