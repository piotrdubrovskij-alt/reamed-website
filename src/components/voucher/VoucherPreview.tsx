import Image from "next/image";
import type { Language } from "@/lib/translations";
import { voucherCopy } from "@/lib/voucher/copy";
import { wholeEuros } from "@/lib/voucher/format";

/**
 * The voucher as the recipient will get it: the same graphite card with mint that the clinic
 * system prints on the PDF sheet. Before the payment the code is a row of dots.
 */
export default function VoucherPreview({
  lang,
  amountCents,
  to,
  from,
  message,
  validUntil,
  code,
}: {
  lang: Language;
  amountCents: number | null;
  to?: string | null;
  from?: string | null;
  message?: string | null;
  validUntil: string;
  code?: string | null;
}) {
  const c = voucherCopy[lang];
  return (
    <div className="rounded-[28px] bg-graphite text-white p-6 md:p-7 flex flex-col gap-5">
      <div className="flex items-center justify-between gap-4">
        <Image src="/brand/reamed-lockup-for-dark.svg" alt="ReaMed" width={128} height={36} className="h-9 w-auto" />
        <span className="text-small font-medium text-on-dark text-right">{c.title}</span>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-[44px] md:text-[56px] leading-none font-medium tracking-[-0.025em] text-mint">
          {amountCents === null ? "– €" : wholeEuros(amountCents, lang)}
        </p>
        <p className="text-small text-on-dark">{c.previewFor}</p>
      </div>
      {(to || from || message) && (
        <div className="flex flex-col gap-1.5">
          {to && (
            <p className="text-body break-words">
              <span className="text-small text-on-dark mr-2">{c.to}</span>
              {to}
            </p>
          )}
          {from && (
            <p className="text-body break-words">
              <span className="text-small text-on-dark mr-2">{c.from}</span>
              {from}
            </p>
          )}
          {message && (
            <p className="text-small text-on-dark break-words mt-1">
              {lang === "lt" ? `„${message}“` : `“${message}”`}
            </p>
          )}
        </div>
      )}
      <div className="flex items-end justify-between gap-4 border-t border-white/25 pt-4">
        <div className="flex flex-col">
          <span className="text-small text-on-dark">{c.previewCode}</span>
          <span className="text-lead-m font-medium tracking-[0.06em]">{code ?? "RM-••••-••••"}</span>
        </div>
        <div className="flex flex-col items-end text-right">
          <span className="text-small text-on-dark">{c.previewValid}</span>
          <span className="text-lead-m font-medium">{validUntil}</span>
        </div>
      </div>
    </div>
  );
}
