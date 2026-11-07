"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { specialists } from "@/lib/specialists";
import { FIRST_VISIT, formatPrice } from "@/data/prices";
import type { SpecialistSlug } from "@/data/reviews";
import { SPECIALIST_NAMES, specialistPhoto } from "@/components/reviews/format";

export type HubKind = "areas" | "services" | "specialists";
export type HubLink = { slug: string; title: string; text: string };

const content = {
  lt: {
    areas: {
      title: "Ką gydome",
      lead: "Nugaros, kaklo, peties ir kelio skausmas, sporto traumos, sausgyslių perkrovos ir atsistatymas po operacijų. Pasirinkite, kas jus vargina.",
    },
    services: {
      title: "Paslaugos",
      lead: "Kineziterapija, manualinė terapija, osteopatija ir gydomasis masažas Vilniaus centre. Privati klinika: siuntimo nereikia.",
    },
    specialists: {
      title: "Specialistai",
      lead: "Kineziterapeutai, dirbantys su Lietuvos ledo ritulio ir futbolo rinktinėmis, ir osteopatas, dėstantis Vilniaus universitete.",
    },
    more: "Plačiau",
    conditionsTitle: "Ligos, traumos ir operacijos",
    unsure: "Nežinote, nuo ko pradėti?",
    firstVisit: "Pirmojo vizito metu įvertiname būklę ir sudarome gydymo planą",
    book: "Registruotis vizitui",
  },
  en: {
    areas: {
      title: "What we treat",
      lead: "Back, neck, shoulder and knee pain, sports injuries, tendon overload and recovery after surgery. Choose what troubles you.",
    },
    services: {
      title: "Services",
      lead: "Physiotherapy, manual therapy, osteopathy and therapeutic massage in central Vilnius. A private clinic: no referral needed.",
    },
    specialists: {
      title: "Specialists",
      lead: "Physiotherapists who work with Lithuania's national ice hockey and football teams, and an osteopath who teaches at Vilnius University.",
    },
    more: "Read more",
    conditionsTitle: "Conditions, injuries and surgery",
    unsure: "Not sure where to start?",
    firstVisit: "At the first visit we assess your condition and draw up a treatment plan",
    book: "Book a visit",
  },
} as const;

function LinkList({ items, base }: { items: readonly { slug: string; title: string; text: string }[]; base: string }) {
  return (
    <ul className="grid gap-8 md:grid-cols-2 desk:grid-cols-3 md:gap-x-[72px] md:gap-y-12">
      {items.map((item) => (
        <li key={item.slug}>
          <Link href={`${base}/${item.slug}`} className="link-action inline-flex items-center min-h-11 text-lead">
            {item.title}
          </Link>
          <p className="mt-1.5 text-graphite max-w-[36ch]">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}

function SpecialistList() {
  const { lang } = useLanguage();
  return (
    <ul className="grid grid-cols-2 gap-x-3.5 gap-y-7 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
      {specialists.map((p) => {
        const slug = p.slug as SpecialistSlug;
        return (
          <li key={slug}>
            <Link href={`/specialistai/${slug}`} className="group block">
              <Image
                src={specialistPhoto(slug)}
                alt=""
                width={640}
                height={800}
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                className="w-full aspect-[4/5] object-cover rounded-t-full"
              />
              <span className="block mt-[18px] text-body md:text-lead font-medium group-hover:underline group-hover:decoration-mint group-hover:decoration-2 group-hover:underline-offset-[5px]">
                {SPECIALIST_NAMES[slug]}
              </span>
            </Link>
            <p className="mt-1.5 text-small text-graphite">{lang === "en" ? p.taglineEn : p.tagline}</p>
          </li>
        );
      })}
    </ul>
  );
}

// Index page of a section: /ka-gydome, /paslaugos, /specialistai.
// Graphite band with the title, then the list, then the first-visit offer.
// `conditions`: pages built from src/content/conditions (Lithuanian only), passed in by the
// server route so their texts stay out of the client bundle.
export default function HubPageContent({ kind, conditions = [] }: { kind: HubKind; conditions?: HubLink[] }) {
  const { lang, t } = useLanguage();
  const c = content[lang];
  const page = c[kind];
  const headingId = `hub-${kind}-h`;

  return (
    <>
      <section aria-labelledby={headingId} className="bg-graphite text-white [--focus-ring:var(--color-mint)]">
        <div className="wrap pt-12 pb-14 desk:pt-24 desk:pb-20">
          <h1 id={headingId} className="text-h1-m desk:text-display text-balance text-mint">
            {page.title}
          </h1>
          <p className="mt-5 max-w-[46ch] text-lead-m text-on-dark desk:mt-7 desk:text-lead-l">{page.lead}</p>
        </div>
      </section>

      <section className="bg-paper section-y">
        <div className="wrap">
          {kind === "areas" && <LinkList items={t.areas.items} base="/ka-gydome" />}
          {kind === "areas" && conditions.length > 0 && (
            <>
              <h2 className="text-h2 text-balance mt-16 desk:mt-24 mb-10 desk:mb-14">{c.conditionsTitle}</h2>
              <LinkList items={conditions} base="/ka-gydome" />
            </>
          )}
          {kind === "services" && <LinkList items={t.services.items} base="/paslaugos" />}
          {kind === "specialists" && <SpecialistList />}
        </div>
      </section>

      <section aria-labelledby={`${headingId}-visit`} className="bg-ground section-y">
        <div className="wrap flex flex-col gap-6 desk:flex-row desk:items-end desk:justify-between">
          <div>
            <h2 id={`${headingId}-visit`} className="text-h3-m desk:text-h3 text-balance">
              {c.unsure}
            </h2>
            <p className="mt-3 max-w-[46ch]">
              {c.firstVisit}: {FIRST_VISIT.duration}, {formatPrice(FIRST_VISIT.price, lang)}.
            </p>
          </div>
          <Link href="/registracija" className="btn btn-dark self-start desk:self-auto">
            {c.book}
          </Link>
        </div>
      </section>
    </>
  );
}
