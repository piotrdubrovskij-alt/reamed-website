import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubPageContent from "@/components/HubPageContent";

export const metadata: Metadata = pageMetadata({
  path: "/ka-gydome",
  title: "Ką gydome: reabilitacija po operacijų, kelio, peties, nugaros ir kaklo skausmas | ReaMed",
  description:
    "Reabilitacija po operacijų, kelio, peties, nugaros ir kaklo skausmas, sporto traumos ir sausgyslių perkrovos. Privati kineziterapijos klinika Vilniaus centre, siuntimo nereikia.",
});

export default function KaGydomePage() {
  return (
    <>
      <Header />
      <main>
        <HubPageContent kind="areas" />
      </main>
      <Footer />
    </>
  );
}
