import type { ReactNode } from "react";
import type { Language } from "@/lib/translations";
import { formatCount, formatPrice, serviceMeta, type PricedService } from "@/data/prices";

// Receipt lines of the price list (/kainos, mockup G), shared with the service pages.
// No hooks: works in server and client components.

// Name, dotted leader, price. The leader is empty, so reading or copying the text gives no dots.
// Package rows never wrap; below 360px they lose the indent so "10 sessions × €60" still fits.
export function PriceRow({
  name,
  price,
  sub = false,
  dots = "text-graphite/55",
}: {
  name: ReactNode;
  price: string;
  sub?: boolean;
  dots?: string;
}) {
  return (
    <div
      className={`flex items-end ${
        sub ? "mt-2 pl-3.5 max-[360px]:pl-0 desk:pl-5 text-small text-graphite" : "text-body desk:text-lead leading-[1.35] font-medium"
      }`}
    >
      <span className={`max-w-[78%] ${sub ? "whitespace-nowrap" : ""}`}>{name}</span>
      <span aria-hidden="true" className={`leader mx-2.5 ${sub ? "mb-[0.4em] max-[360px]:mx-2" : "mb-[0.42em]"} ${dots}`} />
      <span className="whitespace-nowrap tabular-nums">{price}</span>
    </div>
  );
}

export function Service({ service, lang, onMint = false }: { service: PricedService; lang: Language; onMint?: boolean }) {
  const meta = serviceMeta(service, lang);
  return (
    <>
      <PriceRow
        name={service.name[lang]}
        price={formatPrice(service.price, lang)}
        dots={onMint ? "text-graphite" : undefined}
      />
      {meta && <p className={`mt-1 text-small max-w-[46ch] ${onMint ? "text-ink" : "text-graphite"}`}>{meta}</p>}
      {service.packs && (
        <ul className={meta ? "mt-2.5" : undefined}>
          {service.packs.map((pack) => (
            <li key={pack.count}>
              {/* The count sits in a fixed-width column (wider for "10 sessions"), so every "× 65 €" starts on one line. */}
              <PriceRow
                sub
                name={
                  <>
                    <span className={`inline-block ${lang === "en" ? "min-w-[5.6em]" : "min-w-[4.6em]"}`}>
                      {formatCount(pack.count, lang)}
                    </span>{" "}
                    <span>×{"\u00a0"}{formatPrice(pack.unit, lang)}</span>
                  </>
                }
                price={formatPrice(pack.total, lang)}
              />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
