"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { bookingCopy } from "@/lib/booking/copy";

type Kind = "booking" | "result" | "order" | "my";

/** The page title and one sentence under it, in the visitor's language. */
export default function BookingHeading({ kind }: { kind: Kind }) {
  const { lang } = useLanguage();
  const c = bookingCopy[lang];
  const title = kind === "booking" ? c.title : kind === "result" ? c.title : kind === "order" ? c.orderTitle : c.myVisitsTitle;
  const lead = kind === "booking" ? c.lead : kind === "order" ? null : kind === "my" ? null : null;
  return (
    <header className="flex flex-col gap-4 mb-8 md:mb-10">
      <h1 className="text-h1-m desk:text-h1 text-balance">{title}</h1>
      {lead && <p className="text-lead text-graphite max-w-[60ch] text-pretty">{lead}</p>}
    </header>
  );
}
