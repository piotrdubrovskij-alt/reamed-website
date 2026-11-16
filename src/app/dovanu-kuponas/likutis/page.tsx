import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VoucherBalanceContent from "@/components/voucher/VoucherBalanceContent";
import VoucherHeading from "@/components/voucher/VoucherHeading";
import { pageMetadata } from "@/lib/seo";

// Opened from the QR on the voucher; a page about one voucher is not for search engines.
export const metadata: Metadata = pageMetadata({
  path: "/dovanu-kuponas/likutis",
  title: "Dovanų kupono likutis — ReaMed",
  description:
    "Pasitikrinkite ReaMed dovanų kupono likutį ir galiojimo datą pagal kupono kodą.",
  noindex: true,
});

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <VoucherHeading kind="balance" />
          {/* useSearchParams and the visitor's language need the boundary. */}
          <Suspense fallback={null}>
            <VoucherBalanceContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
