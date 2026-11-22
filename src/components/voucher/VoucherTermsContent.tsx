"use client";

import LegalDocument from "@/components/legal/LegalDocument";
import { useLanguage } from "@/contexts/LanguageContext";
import { voucherRules } from "@/content/legal/voucher";

// ReaMed dovanų kuponų taisyklės, redakcija 2026-11-22 (src/content/legal/voucher.ts). The rules themselves (12 months,
// spent in parts, not extended, not exchanged for money) live in klinika-system: change them there first.
export default function VoucherTermsContent() {
  const { lang } = useLanguage();
  return <LegalDocument doc={voucherRules[lang]} lang={lang} />;
}
