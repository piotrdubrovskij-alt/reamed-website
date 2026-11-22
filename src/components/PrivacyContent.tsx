"use client";

import LegalDocument from "@/components/legal/LegalDocument";
import { useLanguage } from "@/contexts/LanguageContext";
import { privacyPolicy } from "@/content/legal/privacy";

export default function PrivacyContent() {
  const { lang } = useLanguage();
  return <LegalDocument doc={privacyPolicy[lang]} lang={lang} />;
}
