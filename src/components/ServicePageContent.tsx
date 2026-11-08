import Link from "next/link";
import type { ServicePage } from "@/content/services/types";
import { getConditionPage } from "@/content/conditions";
import { getPricedService } from "@/data/prices";
import { getReviews } from "@/data/reviews";
import { Service } from "@/components/prices/PriceLines";
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

// Service page (/paslaugos/<slug>), mockup G: the same blocks as the problem pages, in the order a person
// choosing a service asks: what it is, what it helps with, how a visit goes, methods and time, price,
// when it does not fit, who does it, questions, sources. Server component, Lithuanian only for now.

export default function ServicePageContent({ page }: { page: ServicePage }) {
  const reviews = page.reviews ? getReviews({ service: page.reviews }) : [];
  const conditions = page.helps.pages.flatMap((slug) => {
    const p = getConditionPage(slug);
    return p ? [p] : [];
  });
  const prices = page.price.lines.map(getPricedService);

  return (
    <>
      {/* «← Paslaugos» goes to the services block on the home page, as the menu does (Piotr, 07.11.2026). */}
      <PageHero back={{ href: "/#paslaugos", label: "Paslaugos" }} h1={page.hero.h1} lead={page.hero.lead} />

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
      </section>

      {/* What it helps with: complaints in plain words, then the problem pages from «Ką gydome». */}
      <section aria-labelledby="padeda-h" className="bg-ground section-y">
        <div className={`wrap ${twoCols}`}>
          <div>
            <h2 id="padeda-h" className={h2}>
              Kam tai padeda?
            </h2>
            {page.helps.note && <p className="mt-4 text-small text-graphite max-w-[36ch]">{page.helps.note}</p>}
            <ArchPhoto />
          </div>
          <div className="desk:mt-3 flex flex-col gap-12">
            <Dots items={page.helps.items} />
            {conditions.length > 0 && (
              <div>
                <h3 className="text-body font-medium">Plačiau apie būkles</h3>
                <ul className="mt-2 flex flex-wrap gap-x-7 gap-y-1">
                  {conditions.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/ka-gydome/${c.slug}`} className="link-action inline-flex items-center min-h-11 text-body">
                        {c.navTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How a visit goes */}
      <section aria-labelledby="vizitas-h" className="bg-paper section-y">
        <div className="wrap">
          <h2 id="vizitas-h" className={`${h2} mb-10 desk:mb-14`}>
            Kaip vyksta vizitas
          </h2>
          <Phrases items={page.visit} />
          {page.visitNote && <p className="mt-10 max-w-[62ch]">{page.visitNote}</p>}
        </div>
      </section>

      {/* Methods and time */}
      <section aria-labelledby="taikome-h" className="bg-ground section-y">
        <div className={`wrap ${twoCols}`}>
          <h2 id="taikome-h" className={h2}>
            Ką taikome ir kiek tai trunka
          </h2>
          <div className="flex flex-col gap-6 max-w-[62ch]">
            {page.methods.intro && <p>{page.methods.intro}</p>}
            <ul className="flex flex-col gap-5">
              {page.methods.items.map((item) => (
                <li key={item.title} className={`${dot} before:bg-mint`}>
                  <span>
                    <b className="font-medium">{item.title}</b> {item.text}
                  </span>
                </li>
              ))}
            </ul>
            {page.methods.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Price: the same lines and numbers as /kainos (src/data/prices.ts). */}
      <section aria-labelledby="kaina-h" className="bg-paper section-y">
        <div className={`wrap ${twoCols}`}>
          <div>
            <h2 id="kaina-h" className={h2}>
              Kaina
            </h2>
            <p className="mt-4 text-small text-graphite max-w-[36ch]">
              Privati klinika:{" "}
              <Link href="/reabilitacija-be-siuntimo" className="link-action">
                siuntimo nereikia
              </Link>
              , eilių nėra.{" "}
              <Link href="/kainos" className="link-action">
                Visos kainos ir paketų sąlygos
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-8 max-w-[640px]">
            <ul className="flex flex-col gap-8">
              {prices.map((s) => (
                <li key={s.id}>
                  <Service service={s} lang="lt" />
                </li>
              ))}
            </ul>
            {page.price.note && <p className="text-small text-graphite max-w-[62ch]">{page.price.note}</p>}
          </div>
        </div>
      </section>

      {/* When it does not fit */}
      <WarningSection
        id="netinka-h"
        title={page.limits.title ?? "Kada šis gydymas netinka?"}
        note={page.limits.note ?? "Tokiais atvejais pirmiausia reikia gydytojo. Jei abejojate, paskambinkite: patarsime, kur kreiptis."}
        items={page.limits.items}
      />

      <TeamSection title={page.team.title} specialists={page.team.specialists} note={page.team.note} />

      <FaqSection faq={page.faq} />

      <ReviewsSection reviews={reviews} />

      <SourcesSection sources={page.sources} reviewed={page.reviewed} related={page.related} />
    </>
  );
}
