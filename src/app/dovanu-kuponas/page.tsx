import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VoucherContent from "@/components/voucher/VoucherContent";
import VoucherHeading from "@/components/voucher/VoucherHeading";
import { pageMetadata } from "@/lib/seo";
import { GIFT_VOUCHER_LIVE } from "@/lib/voucher/launch";

// Hidden until the launch (src/lib/voucher/launch.ts): no menu link and noindex while Paysera is in Test Mode.
export const metadata: Metadata = pageMetadata({
  path: "/dovanu-kuponas",
  title: "Dovanų kuponas — ReaMed",
  description:
    "ReaMed dovanų kuponas kineziterapijai, masažui ar konsultacijai Vilniuje: nuo 50 €, galioja 12 mėnesių, sumą galima naudoti dalimis. Kuponą gausite el. paštu iškart po apmokėjimo.",
  noindex: !GIFT_VOUCHER_LIVE,
});

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <VoucherHeading kind="buy" />
          {/* useSearchParams and the visitor's language need the boundary. */}
          <Suspense fallback={null}>
            <VoucherContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
