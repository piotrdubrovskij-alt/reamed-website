import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VoucherTermsContent from "@/components/voucher/VoucherTermsContent";
import { pageMetadata } from "@/lib/seo";
import { GIFT_VOUCHER_LIVE } from "@/lib/voucher/launch";

// Follows the voucher page: hidden from search until the launch.
export const metadata: Metadata = pageMetadata({
  path: "/dovanu-kuponas/salygos",
  title: "Dovanų kuponų taisyklės — ReaMed",
  description:
    "ReaMed dovanų kuponų taisyklės: galioja 12 mėnesių, naudojamas dalimis, nepratęsiamas, pristatomas el. paštu, atsisakyti galima per 14 dienų.",
  noindex: !GIFT_VOUCHER_LIVE,
});

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          {/* useSearchParams and the visitor's language need the boundary. */}
          <Suspense fallback={null}>
            <VoucherTermsContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
