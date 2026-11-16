"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { voucherCopy } from "@/lib/voucher/copy";

type Kind = "buy" | "result" | "balance";

/** The page title and one sentence under it, in the visitor's language. */
export default function VoucherHeading({ kind }: { kind: Kind }) {
  const { lang } = useLanguage();
  const c = voucherCopy[lang];
  const title = kind === "balance" ? c.balanceTitle : kind === "result" ? c.resultTitle : c.title;
  const lead = kind === "buy" ? c.lead : kind === "balance" ? c.balanceLead : null;
  return (
    <header className="flex flex-col gap-4 mb-8 md:mb-10">
      <h1 className="text-h1-m desk:text-h1 text-balance">{title}</h1>
      {lead && <p className="text-lead text-graphite max-w-[60ch] text-pretty">{lead}</p>}
    </header>
  );
}
