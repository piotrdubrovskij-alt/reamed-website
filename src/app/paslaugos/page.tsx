import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubPageContent from "@/components/HubPageContent";

export const metadata: Metadata = pageMetadata({
  path: "/paslaugos",
  title: "Paslaugos: kineziterapija, manualinė terapija, osteopatija Vilniuje | ReaMed",
  description:
    "Kineziterapija, manualinė terapija, osteopatija, fizioterapija, gydomasis masažas, sporto ir pooperacinė reabilitacija Vilniaus centre. Privati klinika, siuntimo nereikia.",
});

export default function PaslaugosPage() {
  return (
    <>
      <Header />
      <main>
        <HubPageContent kind="services" />
      </main>
      <Footer />
    </>
  );
}
