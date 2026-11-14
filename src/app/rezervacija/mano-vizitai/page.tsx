import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingHeading from "@/components/booking/BookingHeading";
import MyVisitsContent from "@/components/booking/MyVisitsContent";

export const metadata: Metadata = {
  title: "Mano vizitai — ReaMed",
  robots: { index: false, follow: false },
};

export default function ManoVizitaiPage() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <BookingHeading kind="my" />
          <MyVisitsContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
