"use client";

import LegalDocument from "@/components/legal/LegalDocument";
import { useLanguage } from "@/contexts/LanguageContext";
import { cookiePolicy } from "@/content/legal/cookies";

export default function CookiePolicyContent() {
  const { lang } = useLanguage();
  return <LegalDocument doc={cookiePolicy[lang]} lang={lang} />;
}
