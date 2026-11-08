import Link from "next/link";
import type { ConditionPage } from "@/content/conditions/types";
import { getSection, sectionInfo } from "@/content/sections";
import SectionTopics from "@/components/SectionTopics";
import { translations } from "@/lib/translations";
import { FIRST_VISIT, formatPrice } from "@/data/prices";
import { getReviews } from "@/data/reviews";
import {
  ArchPhoto,
  Dots,
  FaqSection,
  PageHero,
  Phrases,
  ReviewsSection,
  SourcesSection,
  TeamSection,
  WarningSection,
  dot,
  h2,
  twoCols,
} from "@/components/g/PageBlocks";

// Problem page, mockup G (docs/design/redesign-g/nugaros-skausmas.html), extended with the
// blocks search needs: what it is, treatment and time, questions, sources, reviewer.
// The blocks shared with the service pages live in src/components/g/PageBlocks.tsx.
// Server component: the text is Lithuanian only until /en and /ru exist.

const t = translations.lt;

export default function ConditionPageContent({ page }: { page: ConditionPage }) {
  // A section's own page (/ka-gydome/kelio-skausmas): it lists the section's topics and leads back to «Ką gydome»,
  // which is the block on the home page, as in the menu (Piotr, 07.11.2026). /ka-gydome stays for breadcrumbs and the sitemap.
  const isSectionPage = page.slug === page.section;
  const section = isSectionPage ? { title: "Ką gydome", href: "/#ka-gydome" } : sectionInfo(page.section);
  const topics = isSectionPage ? getSection(page.section).topics : null;
  const reviews = page.reviews ? getReviews({ condition: page.reviews }) : [];
  const services = page.services
    .map((slug) => t.services.items.find((s) => s.slug === slug))
    .filter((s): s is (typeof t.services.items)[number] => Boolean(s));

  return (
    <>
      {/* Back to the page's section (plan of 07.11.2026); to «Ką gydome» on the home page while the section has no page. */}
      <PageHero
        back={{ href: section.href ?? "/#ka-gydome", label: section.href ? section.title : "Ką gydome" }}
        h1={page.hero.h1}
        lead={page.hero.lead}
      />

      {/* What it is */}
      <section aria-labelledby="kas-tai-h" className="bg-paper section-y">
        <div className={`wrap ${twoCols}`}>
          <h2 id="kas-tai-h" className={h2}>
            {page.about.title ?? "Kas tai yra"}
          </h2>
          <div className="flex flex-col gap-5 max-w-[62ch]">
            {page.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {page.about.list && (
              <>
                <p>{page.about.list.intro}</p>
                <ul className="flex flex-col gap-2.5 pl-1">
                  {page.about.list.items.map((item) => (
                    <li key={item} className={`${dot} before:bg-mint`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        {/* Section page: everything the section holds, from the plan's table (src/content/sections.ts). */}
        {topics && (
          <div className={`wrap ${twoCols} mt-16 desk:mt-24`}>
            <h2 id="temos-h" className={h2}>
              {page.topicsTitle ?? "Su kuo dirbame"}
            </h2>
            <SectionTopics topics={topics} columns />
          </div>
        )}
      </section>

      {/* When to come */}
      <section aria-labelledby="kada-h" className="bg-ground section-y">
        <div className={`wrap ${twoCols}`}>
          <div>
            <h2 id="kada-h" className={h2}>
              Kada verta kreiptis?
            </h2>
            {page.when.note && <p className="mt-4 text-small text-graphite max-w-[36ch]">{page.when.note}</p>}
            <ArchPhoto />
          </div>
          <div className="desk:mt-3">
            {page.when.items.length > 0 && <Dots items={page.when.items} />}
            {page.when.paragraphs && (
              <div className="flex flex-col gap-5 max-w-[62ch]">
                {page.when.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How we assess */}
      <section aria-labelledby="vertiname-h" className="bg-paper section-y">
        <div className="wrap">
          <h2 id="vertiname-h" className={`${h2} mb-10 desk:mb-14`}>
            Kaip vertiname
          </h2>
          {/* Mockup G: phrases 7fr, round photo 5fr */}
          <Phrases items={page.assess} />
          {page.assessNote && <p className="mt-10 max-w-[62ch]">{page.assessNote}</p>}
          {services.length > 0 && (
            <ul className="mt-12 desk:mt-14 grid grid-cols-2 desk:grid-cols-4 gap-6">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/paslaugos/${s.slug}`} className="link-action inline-flex items-center min-h-11 text-body">
                    {s.title}
                  </Link>
                  <p className="mt-1 text-small text-graphite">{s.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Treatment and time */}
      <section aria-labelledby="gydome-h" className="bg-ground section-y">
        <div className={`wrap ${twoCols}`}>
          <div>
            <h2 id="gydome-h" className={h2}>
              Kaip gydome ir kiek tai trunka
            </h2>
            <p className="mt-6 text-small text-graphite max-w-[36ch]">
              Pirmasis vizitas: {FIRST_VISIT.name.lt.toLowerCase()}, {FIRST_VISIT.duration}, {formatPrice(FIRST_VISIT.price, "lt")}.{" "}
              <Link href="/kainos" className="link-action">
                Visos kainos
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-6 max-w-[62ch]">
            {page.treatment.intro && <p>{page.treatment.intro}</p>}
            {page.treatment.items.length > 0 && (
              <ul className="flex flex-col gap-5">
                {page.treatment.items.map((item) => (
                  <li key={item.title} className={`${dot} before:bg-mint`}>
                    <span>
                      <b className="font-medium">{item.title}</b> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {page.treatment.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What to do until the visit: operation pages (batch 9, Piotr's texts of 08.11.2026). */}
      {page.beforeVisit && (
        <section aria-labelledby="iki-vizito-h" className="bg-paper section-y">
          <div className={`wrap ${twoCols}`}>
            <h2 id="iki-vizito-h" className={h2}>
              Ką galite daryti iki vizito
            </h2>
            <Dots items={page.beforeVisit} />
          </div>
        </section>
      )}

      {/* Red flags */}
      <WarningSection
        id="skubu-h"
        title="Kada reikalingas skubesnis įvertinimas?"
        note={page.urgent.note ?? "Šiais atvejais nedelsdami kreipkitės į gydytoją arba skubiosios pagalbos skyrių."}
        items={page.urgent.items}
      />

      {/* Who works with it */}
      <TeamSection title={page.team.title} specialists={page.team.specialists} note={page.team.note} />

      <FaqSection faq={page.faq} />

      <ReviewsSection reviews={reviews} />

      <SourcesSection sources={page.sources} reviewed={page.reviewed} related={page.related} />
    </>
  );
}
