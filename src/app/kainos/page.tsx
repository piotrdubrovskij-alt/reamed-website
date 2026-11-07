import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KainosContent from "@/components/KainosContent";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/kainos",
    title: "Kainos — ReaMed klinika Vilniuje",
    description:
      "ReaMed klinikos kainos: pirmasis vizitas, kineziterapija, kompleksinė reabilitacija, masažas, fizioterapija. Paketai 5 ir 10 kartų.",
  }),
};

export default function KainosPage() {
  return (
    <>
      <Header />
      <main>
        <KainosContent />
      </main>
      <Footer />
    </>
  );
}
