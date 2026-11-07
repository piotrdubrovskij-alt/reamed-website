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
      "Kaip ReaMed tvarko pacientų, jų atstovų ir svetainės lankytojų asmens duomenis bei įgyvendina jų teises.",
  }),
};

export default function PrivacyPage() {
  return <><Header /><main><PrivacyContent /></main><Footer /></>;
}
