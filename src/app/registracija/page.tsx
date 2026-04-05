import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegistracijaContent from "@/components/RegistracijaContent";

export const metadata: Metadata = {
  title: "Registracija vizitui — ReaMed",
  description:
    "Registruokitės vizitui ReaMed klinikoje: skambinkite, rašykite WhatsApp arba užpildykite užklausos formą.",
  robots: { index: false },
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
