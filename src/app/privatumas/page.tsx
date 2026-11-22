import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/privatumas",
    title: "Privatumo politika — ReaMed",
    description:
      "Kaip ReaMed tvarko pacientų, jų atstovų, paslaugų ir dovanų kuponų pirkėjų bei svetainės lankytojų asmens duomenis ir kaip įgyvendinamos jų teisės.",
  }),
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <PrivacyContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
