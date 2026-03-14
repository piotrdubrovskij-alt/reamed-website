import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KainosContent from "@/components/KainosContent";

export const metadata: Metadata = {
  title: "Kainos — ReaMed klinika Vilniuje",
  description:
    "ReaMed klinikos paslaugų kainos: kineziterapija, manualinė terapija, osteopatija, masažas, fizioterapija. Individuali ir paketinė kainodara.",
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
