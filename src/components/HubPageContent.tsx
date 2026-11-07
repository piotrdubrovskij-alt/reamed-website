"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { specialists } from "@/lib/specialists";
import { FIRST_VISIT, formatPrice } from "@/data/prices";
import type { SpecialistSlug } from "@/data/reviews";
import { SPECIALIST_NAMES, specialistPhoto } from "@/components/reviews/format";

export type HubKind = "areas" | "services" | "specialists";
/** A section without a page yet has `href: null`: shown by name, without a link. */
export type HubItem = { slug: string; title: string; text: string; href?: string | null };
/** A page inside a section (src/content/conditions). */
export type HubPageLink = { href: string; title: string };

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
    unsure: "Not sure where to start?",
    firstVisit: "At the first visit we assess your condition and draw up a treatment plan",
    book: "Book a visit",
  },
} as const;

function LinkList({
  items,
  base,
  pages = {},
}: {
  items: readonly HubItem[];
  base: string;
  pages?: Record<string, HubPageLink[]>;
}) {
  return (
    <ul className="grid gap-10 md:grid-cols-2 desk:grid-cols-3 md:gap-x-[72px] md:gap-y-14">
      {items.map((item) => {
        const href = item.href === undefined ? `${base}/${item.slug}` : item.href;
        const inside = pages[item.slug] ?? [];
        return (
          <li key={item.slug}>
            {href ? (
              <Link href={href} className="link-action inline-flex items-center min-h-11 text-lead">
                {item.title}
              </Link>
            ) : (
              <p className="flex items-center min-h-11 text-lead font-medium">{item.title}</p>
            )}
            <p className="mt-1.5 text-graphite max-w-[36ch]">{item.text}</p>
            {/* The section's own pages, right under it (plan of 07.11.2026). */}
            {inside.length > 0 && (
              <ul className="mt-3">
                {inside.map((pg) => (
                  <li key={pg.href}>
                    <Link
                      href={pg.href}
                      className="inline-flex items-center gap-3 min-h-11 hover:underline hover:decoration-mint hover:decoration-2 hover:underline-offset-[6px]"
                    >
                      <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-mint" />
                      {pg.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
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
// /ka-gydome: each section with its own pages under it. `sectionPages` and `plannedSections` come
// from the server route (src/content), so the page texts stay out of the client bundle.
export default function HubPageContent({
  kind,
  sectionPages = {},
  plannedSections = [],
}: {
  kind: HubKind;
  sectionPages?: Record<string, HubPageLink[]>;
  plannedSections?: HubItem[];
}) {
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
          {kind === "areas" && (
            <LinkList items={[...t.areas.items, ...plannedSections]} base="/ka-gydome" pages={sectionPages} />
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
