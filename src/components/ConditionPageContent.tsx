import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import type { ConditionPage } from "@/content/conditions/types";
import { getSpecialistBySlug } from "@/lib/specialists";
import { getSection, sectionInfo } from "@/content/sections";
import SectionTopics from "@/components/SectionTopics";
import { translations } from "@/lib/translations";
import { FIRST_VISIT, formatPrice } from "@/data/prices";
import { GOOGLE_REVIEWS, getReviews } from "@/data/reviews";
import { SPECIALIST_NAMES, firstSentences, formatRating, reviewsCountLabel, specialistPhoto } from "@/components/reviews/format";

// Problem page, mockup G (docs/design/redesign-g/nugaros-skausmas.html), extended with the
// blocks search needs: what it is, treatment and time, questions, sources, reviewer.
// Sections change background instead of lines or cards: ground / paper / graphite.
// Server component: the text is Lithuanian only until /en and /ru exist.

const t = translations.lt;

const h2 = "text-h2 text-balance";
const twoCols = "grid gap-10 desk:grid-cols-[5fr_7fr] desk:gap-[72px] desk:items-start";
const dot = "flex gap-4 items-baseline text-body leading-[1.45] before:content-[''] before:shrink-0 before:size-3 before:rounded-full before:translate-y-[-2px]";

function Dots({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="grid gap-x-10 gap-y-5.5 sm:grid-cols-2 content-start">
      {items.map((item) => (
        <li key={item} className={`${dot} ${dark ? "before:bg-graphite" : "before:bg-mint"}`}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ConditionPageContent({ page }: { page: ConditionPage }) {
  // A section's own page (/ka-gydome/kelio-skausmas): it lists the section's topics and leads back to /ka-gydome.
  const isSectionPage = page.slug === page.section;
  const section = isSectionPage ? { title: "Ką gydome", href: "/ka-gydome" } : sectionInfo(page.section);
  const topics = isSectionPage ? getSection(page.section).topics : null;
  const reviewer = page.reviewed ? getSpecialistBySlug(page.reviewed.by) : undefined;
  const reviews = page.reviews ? getReviews({ condition: page.reviews }) : [];
  const services = page.services
    .map((slug) => t.services.items.find((s) => s.slug === slug))
    .filter((s): s is (typeof t.services.items)[number] => Boolean(s));

  return (
    <>
      {/* First screen: title, direct answer, booking. No specialist photo here (Piotr, 07.11.2026):
          the circle read like a passport photo. If a photo comes back, it is an arch as on the home page. */}
      <section aria-labelledby="h1" className="bg-ground">
        <div className="wrap pt-8 pb-16 desk:pt-14 desk:pb-24">
          <div className="flex flex-col gap-6 desk:gap-7 desk:max-w-[800px]">
            {/* Back to the page's section (plan of 07.11.2026); to /ka-gydome while the section has no page. */}
            <Link href={section.href ?? "/ka-gydome"} className="self-start inline-flex items-center min-h-11 text-small font-medium text-graphite no-underline hover:text-ink">
              ← {section.href ? section.title : "Ką gydome"}
            </Link>
            <h1 id="h1" className="text-h1-m desk:text-h1 text-balance">
              {page.hero.h1}
            </h1>
            <p className="max-w-[52ch] text-lead-m desk:text-lead">{page.hero.lead}</p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link href="/registracija" className="btn btn-dark w-full sm:w-auto">
                Registruotis vizitui
              </Link>
              <a href={t.contact.phoneHref} className="link-action inline-flex items-center gap-2.5 min-h-11 text-body">
                <Phone size={20} aria-hidden="true" />
                {t.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

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
            <div className="hidden desk:block mt-12 w-full max-w-[440px] aspect-[11/13] rounded-t-full overflow-hidden">
              <Image
                src="/photos/clinic.jpg"
                alt="ReaMed klinika Vilniuje"
                width={880}
                height={1040}
                sizes="440px"
                className="size-full object-cover object-[100%_0] scale-[1.18] origin-top-right"
              />
            </div>
          </div>
          <div className="desk:mt-3">
            <Dots items={page.when.items} />
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
          <div className="grid gap-10 desk:grid-cols-[7fr_5fr] desk:gap-18 desk:items-center">
            <div className="flex flex-col gap-4.5 max-w-[34ch] desk:max-w-none">
              {page.assess.map((s) => (
                <p key={s.lead} className="text-h3-m desk:text-h3 font-medium leading-[1.15] tracking-[-0.02em]">
                  {s.lead} <span className="font-normal text-graphite">{s.text}</span>
                </p>
              ))}
            </div>
            <div className="w-[80vw] max-w-[480px] justify-self-end aspect-square rounded-full overflow-hidden desk:w-full">
              <Image
                src="/photos/clinic.jpg"
                alt="ReaMed kineziterapeutai aptaria paciento tyrimus"
                width={1024}
                height={354}
                sizes="(min-width: 821px) 480px, 80vw"
                className="size-full object-cover object-[62%_50%]"
              />
            </div>
          </div>
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
            <ul className="flex flex-col gap-5">
              {page.treatment.items.map((item) => (
                <li key={item.title} className={`${dot} before:bg-mint`}>
                  <span>
                    <b className="font-medium">{item.title}</b> {item.text}
                  </span>
                </li>
              ))}
            </ul>
            {page.treatment.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section aria-labelledby="skubu-h" className="bg-ground-hover py-16 desk:py-24">
        <div className={`wrap ${twoCols}`}>
          <div>
            <h2 id="skubu-h" className="text-h3-m desk:text-h3 text-balance">
              Kada reikalingas skubesnis įvertinimas?
            </h2>
            <p className="mt-4 text-small text-graphite max-w-[36ch]">
              {page.urgent.note ?? "Šiais atvejais nedelsdami kreipkitės į gydytoją arba skubiosios pagalbos skyrių."}
            </p>
          </div>
          <Dots items={page.urgent.items} dark />
        </div>
      </section>

      {/* Who works with it */}
      <section aria-labelledby="komanda-h" className="bg-graphite text-white section-y [--focus-ring:var(--color-mint)]">
        <div className="wrap">
          <h2 id="komanda-h" className={`${h2} text-mint mb-10 desk:mb-14`}>
            {page.team.title}
          </h2>
          <ul className="grid grid-cols-2 gap-x-3.5 gap-y-7 md:grid-cols-4 md:gap-6">
            {page.team.specialists.map((slug) => {
              const p = getSpecialistBySlug(slug);
              if (!p) return null;
              return (
                <li key={slug}>
                  <Link href={`/specialistai/${slug}`} className="group flex flex-col gap-1.5 no-underline">
                    <Image
                      src={specialistPhoto(slug)}
                      alt=""
                      width={640}
                      height={800}
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="w-full aspect-[5/6] object-cover object-top rounded-t-full mb-3"
                    />
                    <span className="text-body md:text-lead font-medium group-hover:underline group-hover:decoration-mint group-hover:decoration-2 group-hover:underline-offset-[5px]">
                      {SPECIALIST_NAMES[slug]}
                    </span>
                    <span className="text-small text-on-dark">{p.role}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {page.team.note && <p className="mt-10 max-w-[62ch] text-on-dark">{page.team.note}</p>}
        </div>
      </section>

      {/* Questions: <details> works without script and stays in the HTML for search. */}
      <section aria-labelledby="duk-h" className="bg-paper section-y">
        <div className={`wrap ${twoCols}`}>
          <h2 id="duk-h" className={h2}>
            Dažniausi klausimai
          </h2>
          <div className="flex flex-col gap-2">
            {page.faq.map((f) => (
              <details key={f.q} className="group rounded-[24px] bg-ground px-6 desk:px-8 open:pb-6">
                <summary className="flex items-center justify-between gap-4 min-h-16 py-3 text-body desk:text-lead font-medium cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown size={20} aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none" />
                </summary>
                <p className="max-w-[62ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews: only when at least two match this topic. */}
      {reviews.length >= 2 && (
        <section aria-labelledby="atsiliepimai-h" className="bg-ground section-y">
          <div className="wrap grid gap-10 desk:grid-cols-[4fr_8fr] desk:gap-[72px] desk:items-start">
            <div>
              <h2 id="atsiliepimai-h" className={h2}>
                Atsiliepimai
              </h2>
              <a href={GOOGLE_REVIEWS.url} target="_blank" rel="noopener noreferrer" className="link-action mt-5 inline-flex items-center min-h-11 text-small">
                {reviewsCountLabel(GOOGLE_REVIEWS.count, "lt", { quoted: false })}, {formatRating(GOOGLE_REVIEWS.rating, "lt")}
              </a>
            </div>
            <div className="flex flex-col gap-12">
              {/* As on the home page: the first sentences verbatim, author, then who it is about. */}
              {reviews.slice(0, 2).map((r) => {
                const about = r.specialists[0] ? getSpecialistBySlug(r.specialists[0]) : undefined;
                return (
                  <figure key={r.id} className="m-0">
                    <blockquote lang={r.lang} className="m-0 text-lead-m desk:text-lead leading-[1.45] max-w-[46ch]">
                      <p>{firstSentences(r.text, 3)}</p>
                    </blockquote>
                    <figcaption className="mt-3.5 flex flex-wrap items-center gap-x-2 text-small text-graphite">
                      <span className="font-medium text-ink">{r.author}</span>
                      {about && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="inline-flex items-center gap-2 whitespace-nowrap">
                            apie
                            <Link
                              href={`/specialistai/${about.slug}`}
                              className="inline-flex items-center gap-2 min-h-11 underline underline-offset-[3px] hover:text-ink"
                            >
                              <Image
                                src={specialistPhoto(r.specialists[0])}
                                alt=""
                                width={28}
                                height={28}
                                className="size-7 rounded-full object-cover object-[50%_18%]"
                              />
                              {about.nameAccusative ?? about.name.split(" ")[0]}
                            </Link>
                          </span>
                        </>
                      )}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Sources, reviewer, related pages */}
      <section aria-labelledby="saltiniai-h" className="bg-paper py-16 desk:py-20">
        <div className={`wrap ${twoCols}`}>
          <div>
            <h2 id="saltiniai-h" className="text-h3-m desk:text-h3">
              Šaltiniai
            </h2>
            {reviewer && page.reviewed && (
              <p className="mt-4 text-small text-graphite">
                Peržiūrėjo{" "}
                <Link href={`/specialistai/${reviewer.slug}`} className="link-action text-ink">
                  {reviewer.name}
                </Link>
                , {reviewer.role.toLowerCase()}, {page.reviewed.date}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-10">
            <ol className="flex flex-col gap-3 text-small list-decimal pl-5 marker:text-graphite">
              {page.sources.map((s) => (
                <li key={s.doi}>
                  {s.authors} {s.title} <i>{s.journal}</i>, {s.year}.{" "}
                  <a href={`https://doi.org/${s.doi}`} target="_blank" rel="noopener noreferrer" className="link-action break-all">
                    doi:{s.doi}
                  </a>
                </li>
              ))}
            </ol>
            {page.related.length > 0 && (
              <div>
                <h2 className="text-body font-medium">Susiję puslapiai</h2>
                <ul className="mt-2 flex flex-wrap gap-x-7 gap-y-1">
                  {page.related.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="link-action inline-flex items-center min-h-11 text-body">
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
