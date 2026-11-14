"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { specialists } from "@/lib/specialists";
import { FIRST_VISIT, formatPrice } from "@/data/prices";
import type { SpecialistSlug } from "@/data/reviews";
import { SPECIALIST_NAMES, specialistPhoto } from "@/components/reviews/format";
import SectionTopics from "@/components/SectionTopics";
import ServiceButtons from "@/components/ServiceButtons";
import { SECTIONS } from "@/content/sections";

export type HubKind = "areas" | "services" | "specialists";

const content = {
  lt: {
    areas: {
      title: "Ką gydome",
      lead: "Reabilitacija po operacijų, kelio, peties, nugaros ir kaklo skausmas, sporto traumos ir sausgyslių perkrovos. Pasirinkite, kas jus vargina.",
    },
    services: {
      title: "Paslaugos",
      lead: "Kineziterapija, manualinė terapija, osteopatija, fizioterapija ir gydomasis masažas Vilniaus centre. Privati klinika: siuntimo nereikia, eilių nėra.",
    },
    specialists: {
      title: "Specialistai",
      lead: "Kineziterapeutai, dirbantys su Lietuvos ledo ritulio ir futbolo rinktinėmis, ir osteopatas, dėstantis Vilniaus universitete.",
    },
    more: "Plačiau",
    unsure: "Nežinote, nuo ko pradėti?",
    firstVisit: "Pirmojo vizito metu įvertiname būklę ir sudarome gydymo planą",
    book: "Registruotis vizitui",
  },
  en: {
    areas: {
      title: "What we treat",
      lead: "Rehabilitation after surgery, knee, shoulder, back and neck pain, sports injuries and tendon overload. Choose what troubles you.",
    },
    services: {
      title: "Services",
      lead: "Physiotherapy, manual therapy, osteopathy, electrotherapy and therapeutic massage in central Vilnius. A private clinic: no referral, no waiting list.",
    },
    specialists: {
      title: "Specialists",
      lead: "Physiotherapists who work with Lithuania's national ice hockey and football teams, and an osteopath who teaches at Vilnius University.",
    },
    more: "Read more",
    unsure: "Not sure where to start?",
    firstVisit: "At the first visit we assess your condition and draw up a treatment plan",
    book: "Book a visit",
  },
} as const;

// /ka-gydome: the plan's table as the page. One row per section, in the table's order:
// the section (a link once it has its own page) and everything it holds.
function SectionRows() {
  const { lang } = useLanguage();
  return (
    <ul className="flex flex-col gap-14 desk:gap-16">
      {SECTIONS.map((s) => (
        <li key={s.slug} className="grid gap-4 desk:grid-cols-[5fr_7fr] desk:gap-[72px] desk:items-start">
          <div>
            <h2 className="text-h3-m desk:text-h3">
              {s.hasPage ? (
                <Link href={`/ka-gydome/${s.slug}`} className="link-action inline-flex items-center min-h-11">
                  {s.name[lang]}
                </Link>
              ) : (
                <span className="inline-flex items-center min-h-11">{s.name[lang]}</span>
              )}
            </h2>
            <p className="mt-1.5 text-graphite max-w-[40ch]">{s.text[lang]}</p>
          </div>
          {lang === "lt" && <SectionTopics topics={s.topics} columns />}
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
// /ka-gydome lists the sections from src/content/sections.ts (the plan's table).
export default function HubPageContent({ kind }: { kind: HubKind }) {
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

      {/* /paslaugos: the same mint band with graphite buttons as on the home page (Piotr, 07.11.2026). */}
      <section
        className={kind === "services" ? "bg-mint text-ink section-y [--focus-ring:var(--color-ink)]" : "bg-paper section-y"}
      >
        <div className="wrap">
          {kind === "areas" && <SectionRows />}
          {kind === "services" && <ServiceButtons items={t.services.items} />}
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
