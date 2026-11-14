import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingHeading from "@/components/booking/BookingHeading";
import OrderContent from "@/components/booking/OrderContent";

export const metadata: Metadata = {
  title: "Jūsų vizitai — ReaMed",
  robots: { index: false, follow: false },
};

export default function UzsakymasPage() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <BookingHeading kind="order" />
          <Suspense fallback={null}>
            <OrderContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
