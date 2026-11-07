import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubPageContent from "@/components/HubPageContent";

export const metadata: Metadata = pageMetadata({
  path: "/ka-gydome",
  title: "Ką gydome — nugaros, kaklo, peties, kelio skausmas ir sporto traumos | ReaMed",
  description:
    "Nugaros, kaklo, peties ir kelio skausmas, sporto traumos, sausgyslių perkrovos ir atsistatymas po operacijų. Privati kineziterapijos klinika Vilniaus centre, siuntimo nereikia.",
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
