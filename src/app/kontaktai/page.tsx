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
      "ReaMed kontaktai: telefonas, el. paštas, darbo laikas ir adresas Olimpiečių g. 1A-7, Vilnius. Kaip rasti įėjimą ir kur statyti automobilį.",
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
