import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubPageContent from "@/components/HubPageContent";

export const metadata: Metadata = pageMetadata({
  path: "/specialistai",
  title: "Specialistai — ReaMed kineziterapeutai ir osteopatas Vilniuje",
  description:
    "ReaMed kineziterapeutai, dirbantys su Lietuvos ledo ritulio ir futbolo rinktinėmis, ir osteopatas, dėstantis Vilniaus universitete. Registracija vizitui.",
});

export default function SpecialistaiPage() {
  return (
    <>
      <Header />
      <main>
        <HubPageContent kind="specialists" />
      </main>
      <Footer />
    </>
  );
}
