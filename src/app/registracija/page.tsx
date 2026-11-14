import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistracijaContent from "@/components/RegistracijaContent";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/registracija",
    title: "Registracija vizitui — ReaMed",
    description:
      "Registruokitės vizitui ReaMed klinikoje: skambinkite, rašykite WhatsApp arba užpildykite užklausos formą.",
    noindex: true,
  }),
};

export default function RegistracijaPage() {
  return (
    <>
      <Header />
      <main>
        <RegistracijaContent />
      </main>
      <Footer />
    </>
  );
}
