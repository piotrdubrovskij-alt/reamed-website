import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VoucherResultContent from "@/components/voucher/VoucherResultContent";
import VoucherHeading from "@/components/voucher/VoucherHeading";
import { pageMetadata } from "@/lib/seo";

// The return from Paysera: never indexed.
export const metadata: Metadata = pageMetadata({
  path: "/dovanu-kuponas/rezultatas",
  title: "Dovanų kupono užsakymas — ReaMed",
  description:
    "Dovanų kupono apmokėjimo rezultatas.",
  noindex: true,
});

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <VoucherHeading kind="result" />
          {/* useSearchParams and the visitor's language need the boundary. */}
          <Suspense fallback={null}>
            <VoucherResultContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
