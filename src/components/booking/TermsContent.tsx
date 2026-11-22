"use client";

import LegalDocument from "@/components/legal/LegalDocument";
import { useLanguage } from "@/contexts/LanguageContext";
import { purchaseTerms } from "@/content/legal/terms";

// ReaMed paslaugų pirkimo, registracijos ir atšaukimo taisyklės (redakcija 2026-11-22, src/content/legal/terms.ts).
// The clinic system stores this redakcija with every website order; change the rules only by a new redakcija
// recorded in klinika-system docs/DECISIONS.md.
export default function TermsContent() {
  const { lang } = useLanguage();
  return <LegalDocument doc={purchaseTerms[lang]} lang={lang} />;
}
