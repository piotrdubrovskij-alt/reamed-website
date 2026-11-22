import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookiePolicyContent from "@/components/CookiePolicyContent";

// The cookie policy as its own document (redakcija 2026-11-22); until then it was a section of /privatumas,
// whose old anchor #slapukai now lands on the section that links here.
export const metadata: Metadata = {
  ...pageMetadata({
    path: "/slapukai",
    title: "Slapukų politika — ReaMed",
    description:
      "Kokius slapukus ir naršyklės įrašus naudoja reamed.lt, kam jie reikalingi, kiek laiko saugomi ir kaip pakeisti sutikimą.",
  }),
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-ground">
        <div className="wrap pt-10 pb-16 md:pt-14 md:pb-24">
          <CookiePolicyContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
