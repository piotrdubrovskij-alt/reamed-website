"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSpecialistBySlug } from "@/lib/specialists";
import type { Language } from "@/lib/translations";
import {
  formatCount,
  formatPrice,
  priceGroups,
  serviceMeta,
  specialistVisit,
  type PricedService,
} from "@/data/prices";

const content = {
  lt: {
    title: "Kainos",
    lead: "Pirmasis vizitas mūsų klinikoje visada prasideda nuo konsultacijos.",
    book: "Registruotis vizitui",
    about: "Apie Piotrą",
    notesTitle: "Paketai ir apmokėjimas",
    notes: [
      // Package and cancellation terms: decision of 04–05.11.2026 (project doc claude/reamed-booking-terms.md).
      {
        title: "Galiojimas",
        text: "5 vizitų paketas galioja 49 dienas, 10 vizitų paketas galioja 84 dienas nuo pirkimo dienos. Paketas vardinis, skirtas vienai paslaugai, bet ne konkrečiam specialistui.",
      },
      {
        title: "Pasibaigus galiojimui",
        text: "Paketas nepratęsiamas. Įvykę vizitai perskaičiuojami pagal vienkartinio vizito kainą, o likutis lieka jūsų sąskaitoje ir gali būti naudojamas bet kurioms ReaMed paslaugoms pagal tos dienos kainas. Paprašius likutį grąžiname, išskyrus dovanų kuponu apmokėtą dalį.",
      },
      {
        title: "Atšaukimas ir perkėlimas",
        text: "Vizitą nemokamai pakeisti ar atšaukti galima, kol iki jo liko ne mažiau kaip 12 valandų. Vėliau perkelti galima tik per administraciją, mokestis 20 €. Vėlesnis atšaukimas ar neatvykimas prilygsta įvykusiam vizitui: iš paketo jis nurašomas, už vienkartinį vizitą pinigai negrąžinami.",
      },
      {
        title: "Apmokėjimas ir draudimas",
        text: "ReaMed yra privati klinika: visos paslaugos mokamos, gydytojo siuntimo nereikia, su ligonių kasomis nedirbame. Mokėti galima grynaisiais, banko kortele arba pavedimu. Jei turite sveikatos draudimą, po vizito išrašome sąskaitą faktūrą draudimo bendrovei.",
      },
    ],
  },
  en: {
    title: "Prices",
    lead: "Our first visit always starts with a consultation.",
    book: "Book a visit",
    about: "About Piotr",
    notesTitle: "Packages and payment",
    notes: [
      {
        title: "Validity",
        text: "A 5-visit package is valid for 49 days and a 10-visit package for 84 days from the date of purchase. A package is personal and tied to one service, not to a particular specialist.",
      },
      {
        title: "After expiry",
        text: "A package is not extended. Visits already used are recalculated at the single-visit price, and the remainder stays on your account for any ReaMed service at that day's prices. On request we refund the remainder, except any part paid with a gift voucher.",
      },
      {
        title: "Cancelling and rescheduling",
        text: "You can change or cancel a visit free of charge up to 12 hours before it. Later, rescheduling is possible only through the administration and costs €20. A later cancellation or a no-show counts as a visit that took place: it is deducted from the package, and a single visit is not refunded.",
      },
      {
        title: "Payment and insurance",
        text: "ReaMed is a private clinic: all services are paid, no doctor's referral is needed, and we do not work with the state health insurance fund. You can pay in cash, by bank card or by bank transfer. If you have health insurance, after the visit we issue an invoice for your insurance company.",
      },
    ],
  },
} as const;

// Name, dotted leader, price. The leader is empty, so reading or copying the text gives no dots.
// Package rows never wrap; below 360px they lose the indent so "10 sessions × €60" still fits.
function PriceRow({
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

function Service({ service, lang, onMint = false }: { service: PricedService; lang: Language; onMint?: boolean }) {
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

const groupTitle = "text-lead desk:text-h3-m font-medium tracking-[-0.01em] leading-[1.2]";
const rule = "border-b-2 border-dashed border-rule";

// The price list as a till receipt (mockup G, docs/design/redesign-g/kainos.html).
// Desktop: intro, Piotr and the notes on the left, the receipt across all three rows on the right.
export default function KainosContent() {
  const { lang } = useLanguage();
  const c = content[lang];
  const piotr = getSpecialistBySlug(specialistVisit.slug);

  return (
    // overflow-x: clip keeps the full-bleed band from adding a horizontal scroll.
    // 68.8125rem = 1101px; in rem so Tailwind sorts it after `desk:` (a px value would lose).
    <div className="overflow-x-clip pb-26 desk:pb-42 tabular-nums">
      <div className="wrap flex flex-col desk:grid desk:grid-cols-[minmax(0,1fr)_560px] desk:grid-rows-[auto_auto_1fr] desk:gap-x-14 min-[68.8125rem]:grid-cols-[minmax(0,1fr)_640px] min-[68.8125rem]:gap-x-24">
        {/* Graphite band: the intro cell stretched past both screen edges. */}
        <div className="relative z-0 pt-12 pb-26 text-center text-white desk:col-start-1 desk:row-start-1 desk:pt-24 desk:pb-30 desk:text-left [--focus-ring:var(--color-mint)] before:absolute before:inset-y-0 before:-inset-x-[100vmax] before:-z-10 before:bg-graphite">
          <h1 id="kainos-h" className="text-h1-m desk:text-display text-balance text-mint">
            {c.title}
          </h1>
          <p className="mt-5 mx-auto max-w-[28ch] text-lead-m desk:mt-7 desk:mx-0 desk:text-lead-l">{c.lead}</p>
          <Link href="/registracija" className="btn btn-mint mt-7 desk:mt-10">
            {c.book}
          </Link>
        </div>

        <article
          aria-labelledby="kainos-h"
          className="receipt-edges relative z-10 -mt-16 bg-white px-5 pt-12 pb-10 desk:col-start-2 desk:row-start-1 desk:row-span-3 desk:self-start desk:mt-24 desk:px-14 desk:pt-15 desk:pb-14"
        >
          <div className={`pb-9 ${rule}`}>
            <Image
              src="/brand/reamed-wordmark-graphite.svg"
              alt="ReaMed"
              width={132}
              height={27}
              className="mx-auto w-[112px] desk:w-[132px] h-auto"
            />
          </div>

          {priceGroups.map((group, i) => (
            <section
              key={group.id}
              aria-labelledby={`price-${group.id}`}
              className={`pt-7.5 desk:pt-9 ${i < priceGroups.length - 1 ? `pb-8.5 desk:pb-10 ${rule}` : "pb-2"}`}
            >
              <h2 id={`price-${group.id}`} className={groupTitle}>
                {group.title[lang]}
              </h2>
              <ul className="mt-5.5 flex flex-col gap-6.5">
                {group.services.map((service) => (
                  <li key={service.name.lt}>
                    <Service service={service} lang={lang} />
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <Link href="/registracija" className="btn btn-dark mt-8 flex w-full">
            {c.book}
          </Link>
        </article>

        {/* Piotr's own slip: mint-light, the same edges; on desktop it climbs 56px onto the band. */}
        <section
          aria-labelledby="price-piotr"
          className="receipt-edges relative z-10 mt-10 bg-mint-light px-5 pt-10 pb-8.5 desk:col-start-1 desk:row-start-2 desk:self-start desk:max-w-[480px] desk:-mt-14 desk:px-10 desk:pt-11 desk:pb-10"
        >
          <div className="flex items-center gap-4">
            {piotr?.photo && (
              <Image
                src={piotr.photo}
                alt=""
                width={64}
                height={64}
                className="size-14 desk:size-16 shrink-0 rounded-full object-cover object-[50%_16%]"
              />
            )}
            <div>
              <h2 id="price-piotr" className={groupTitle}>
                {piotr?.name}
              </h2>
              <p className="mt-0.5 text-small">{lang === "en" ? piotr?.roleEn : piotr?.role}</p>
            </div>
          </div>
          <div className="mt-7">
            <Service service={specialistVisit.service} lang={lang} onMint />
          </div>
          <Link
            href={`/specialistai/${specialistVisit.slug}`}
            className="link-action decoration-ink inline-flex items-center min-h-11 mt-2 text-small"
          >
            {c.about}
          </Link>
        </section>

        <section
          aria-labelledby="price-notes"
          className="pt-14 flex flex-col gap-7 desk:col-start-1 desk:row-start-3 desk:pt-16 desk:gap-9 desk:max-w-[440px]"
        >
          <h2 id="price-notes" className="text-h3">
            {c.notesTitle}
          </h2>
          {c.notes.map((note) => (
            <div key={note.title}>
              <h3 className="text-body font-medium leading-[1.4]">{note.title}</h3>
              <p className="mt-1.5 text-body">{note.text}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
