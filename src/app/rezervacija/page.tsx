import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingHeading from "@/components/booking/BookingHeading";
import BookingContent from "@/components/booking/BookingContent";

// Not indexed and not linked from the menu until the booking launches (klinika-system
// docs/WEBSITE_BOOKING.md, stage 3). /registracija with the request form stays until then.
export const metadata: Metadata = {
  title: "Registracija vizitui internetu — ReaMed",
  description:
    "Pasirinkite specialistą, paslaugą ir laiką, apmokėkite internetu, ir vizitas ReaMed klinikoje patvirtintas.",
  robots: { index: false, follow: false },
};

export default function RezervacijaPage() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <BookingHeading kind="booking" />
          <BookingContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
