import Image from "next/image";
import type { Language } from "@/lib/translations";
import { voucherCopy } from "@/lib/voucher/copy";
import { wholeEuros } from "@/lib/voucher/format";

/**
 * The front of the voucher exactly as the clinic system prints it (klinika-system,
 * server/gift-voucher-pdf.ts): warm paper, a thin graphite frame, the lockup, one mint accent,
 * "Laikas pasirūpinti savimi.", the words for the recipient on the left, the sum apart on the
 * right, the code and the last valid day in one quiet line at the bottom. Sizes are fractions of
 * the card's width (container query units) so the card scales like the printed A5; on a narrow
 * phone the text keeps a readable floor and the card grows in height instead.
 */
export default function VoucherPreview({
  lang,
  amountCents,
  to,
  from,
  message,
  validUntil,
  code,
  className = "",
}: {
  lang: Language;
  amountCents: number | null;
  to?: string | null;
  from?: string | null;
  message?: string | null;
  validUntil: string;
  code?: string | null;
  className?: string;
}) {
  const c = voucherCopy[lang];
  const quote = message ? (lang === "lt" ? `„${message}“` : `“${message}”`) : null;
  return (
    <div className={`@container ${className}`}>
      <div
        className="flex flex-col rounded-[max(1.4cqw,8px)] border-[0.6px] border-graphite bg-[#FAF8F4] text-ink p-[max(4.3cqw,18px)] @[480px]:min-h-[calc(100cqw*388/563)]"
        style={{ fontFeatureSettings: '"tnum"' }}
      >
        <div className="flex items-start justify-between gap-4">
          <Image
            src="/brand/reamed-lockup-for-light.svg"
            alt="ReaMed"
            width={124}
            height={35}
            className="h-auto w-[max(22cqw,96px)]"
          />
          <span className="text-[max(1.95cqw,12px)] font-medium text-graphite pt-[max(1.4cqw,4px)]">{c.title}</span>
        </div>

        <div className="flex gap-[max(2cqw,12px)] mt-[max(9.5cqw,28px)]">
          <div className="min-w-0 flex-1 flex flex-col">
            <span aria-hidden="true" className="block h-[max(0.71cqw,4px)] w-[max(7.1cqw,36px)] bg-mint" />
            <p className="mt-[max(2.1cqw,10px)] text-[max(4.79cqw,22px)] leading-[1.08] font-semibold tracking-[-0.01em] text-balance max-w-[max(58.6cqw,100%)]">
              {c.line}
            </p>
            {(to || from || quote) && (
              <div className="mt-[max(3.2cqw,14px)] flex flex-col gap-[max(0.9cqw,4px)] max-w-[max(58.6cqw,100%)]">
                {to && (
                  <p className="text-[max(2.31cqw,14px)] font-medium break-words">
                    <span className="text-[max(1.69cqw,11px)] font-normal text-graphite mr-[0.6em]">{c.to}</span>
                    {to}
                  </p>
                )}
                {from && (
                  <p className="text-[max(2.31cqw,14px)] font-medium break-words">
                    <span className="text-[max(1.69cqw,11px)] font-normal text-graphite mr-[0.6em]">{c.from}</span>
                    {from}
                  </p>
                )}
                {quote && (
                  <p className="mt-[max(0.7cqw,2px)] text-[max(1.86cqw,12px)] leading-[1.35] break-words">{quote}</p>
                )}
              </div>
            )}
          </div>
          <div className="shrink-0 w-[max(30cqw,112px)] text-right pt-[max(0.5cqw,0px)]">
            <p className="text-[max(8.17cqw,36px)] leading-none font-semibold tracking-[-0.02em] whitespace-nowrap">
              {amountCents === null ? "— €" : wholeEuros(amountCents, "lt")}
            </p>
            <p className="mt-[max(2cqw,8px)] text-[max(1.6cqw,11px)] leading-[1.3] text-graphite">{c.previewFor}</p>
          </div>
        </div>

        <div className="mt-auto pt-[max(5cqw,22px)]">
          <div className="border-t border-[#D6D4CE] pt-[max(2.1cqw,10px)] flex items-end justify-between gap-[max(3cqw,12px)]">
            <div className="flex gap-[max(7cqw,24px)]">
              <div className="flex flex-col">
                <span className="text-[max(1.42cqw,10px)] text-graphite">{c.previewCode}</span>
                <span className="text-[max(2.31cqw,13px)] font-medium tracking-[0.06em] whitespace-nowrap">
                  {code ?? "RM-••••-••••"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[max(1.42cqw,10px)] text-graphite">{c.previewValid}</span>
                <span className="text-[max(2.31cqw,13px)] font-medium whitespace-nowrap">{validUntil}</span>
              </div>
            </div>
            <span className="hidden @[420px]:block text-[max(1.6cqw,10px)] text-graphite whitespace-nowrap">
              reamed.lt · +370 601 34304
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
