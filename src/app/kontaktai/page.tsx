import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KontaktaiContent from "@/components/KontaktaiContent";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/kontaktai",
    title: "Kontaktai — ReaMed klinika Vilniuje",
    description:
      "ReaMed klinikos kontaktai: adresas Olimpiečių g. 1A-7, Vilnius. Telefono numeris, el. paštas, darbo laikas ir forma registracijai.",
  }),
};

export default function KontaktaiPage() {
  return (
    <>
      <Header />
      <main>
        <KontaktaiContent />
      </main>
      <Footer />
    </>
  );
}
