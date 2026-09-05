import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privatumo politika — ReaMed",
  description: "Kaip ReaMed tvarko pacientų, jų atstovų ir svetainės lankytojų asmens duomenis bei įgyvendina jų teises.",
  alternates: { canonical: "https://reamed.lt/privatumas" },
};

export default function PrivacyPage() {
  return <><Header /><main><PrivacyContent /></main><Footer /></>;
}
