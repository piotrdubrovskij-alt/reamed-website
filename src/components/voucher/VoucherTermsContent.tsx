"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { voucherCopy } from "@/lib/voucher/copy";

// The gift voucher's own terms (15.11.2026). The rules themselves (12 months, spent in parts, not
// exchanged for money) are recorded in klinika-system docs/DECISIONS.md: change them there first.
export default function VoucherTermsContent() {
  const { lang } = useLanguage();
  const c = voucherCopy[lang];
  return (
    <article className="bg-paper rounded-[28px] p-5 md:p-8 max-w-[760px] flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="text-h2 text-balance">{c.termsTitle}</h1>
        <p className="text-small text-graphite">{c.termsUpdated}</p>
      </header>
      {c.terms.map((section) => (
        <section key={section.heading} className="flex flex-col gap-2">
          <h2 className="text-h3-m font-medium">{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph} className="text-body text-ink text-pretty">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      <ul className="flex flex-col gap-1 pl-4 list-disc marker:text-mint text-body">
        <li>
          <Link href="/dovanu-kuponas/likutis" className="link-action">
            {c.termsBalance}
          </Link>
        </li>
        <li>
          <Link href="/rezervacija/salygos" className="link-action">
            {c.termsBooking}
          </Link>
        </li>
      </ul>
    </article>
  );
}
