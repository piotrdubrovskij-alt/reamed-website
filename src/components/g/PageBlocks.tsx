import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { sourceHref, type Source } from "@/content/conditions/types";
import type { Review, SpecialistSlug } from "@/data/reviews";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { getSpecialistBySlug } from "@/lib/specialists";
import { translations } from "@/lib/translations";
import { SPECIALIST_NAMES, firstSentences, formatRating, reviewsCountLabel, specialistPhoto } from "@/components/reviews/format";

// Blocks shared by the problem pages (ConditionPageContent) and the service pages (ServicePageContent):
// mockup G, docs/design/redesign-g/nugaros-skausmas.html. Sections change background instead of lines or cards.
// Server components: the text is Lithuanian only until /en and /ru exist.

const t = translations.lt;

export const h2 = "text-h2 text-balance";
export const twoCols = "grid gap-10 desk:grid-cols-[5fr_7fr] desk:gap-[72px] desk:items-start";
export const dot =
  "flex gap-4 items-baseline text-body leading-[1.45] before:content-[''] before:shrink-0 before:size-3 before:rounded-full before:translate-y-[-2px]";

export function Dots({ items, dark = false }: { items: string[]; dark?: boolean }) {
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

/** First screen: back link, title, direct answer, booking. No specialist photo here (Piotr, 07.11.2026):
 *  the circle read like a passport photo. If a photo comes back, it is an arch as on the home page. */
export function PageHero({ back, h1, lead }: { back: { href: string; label: string }; h1: string; lead: string }) {
  return (
    <section aria-labelledby="h1" className="bg-ground">
      <div className="wrap pt-8 pb-16 desk:pt-14 desk:pb-24">
        <div className="flex flex-col gap-6 desk:gap-7 desk:max-w-[800px]">
          <Link href={back.href} className="self-start inline-flex items-center min-h-11 text-small font-medium text-graphite no-underline hover:text-ink">
            ← {back.label}
          </Link>
          <h1 id="h1" className="text-h1-m desk:text-h1 text-balance">
            {h1}
          </h1>
          <p className="max-w-[52ch] text-lead-m desk:text-lead">{lead}</p>
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
  );
}

/** Phrases with bold opening words next to a round photo of the clinic ("Kaip vertiname", "Kaip vyksta vizitas"). */
export function Phrases({ items }: { items: { lead: string; text: string }[] }) {
  return (
    <div className="grid gap-10 desk:grid-cols-[7fr_5fr] desk:gap-18 desk:items-center">
      <div className="flex flex-col gap-4.5 max-w-[34ch] desk:max-w-none">
        {items.map((s) => (
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
  );
}

/** The arched clinic photo under a left-column heading (desktop only). */
export function ArchPhoto() {
  return (
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
  );
}

/** Red flags or "when it does not fit": dark dots on the darker ground. */
export function WarningSection({ id, title, note, items }: { id: string; title: string; note: string; items: string[] }) {
  return (
    <section aria-labelledby={id} className="bg-ground-hover py-16 desk:py-24">
      <div className={`wrap ${twoCols}`}>
        <div>
          <h2 id={id} className="text-h3-m desk:text-h3 text-balance">
            {title}
          </h2>
          {note && <p className="mt-4 text-small text-graphite max-w-[36ch]">{note}</p>}
        </div>
        <Dots items={items} dark />
      </div>
    </section>
  );
}

/** Who works with it: graphite block with arched photos. */
export function TeamSection({ title, specialists, note }: { title: string; specialists: SpecialistSlug[]; note?: string }) {
  return (
    <section aria-labelledby="komanda-h" className="bg-graphite text-white section-y [--focus-ring:var(--color-mint)]">
      <div className="wrap">
        <h2 id="komanda-h" className={`${h2} text-mint mb-10 desk:mb-14`}>
          {title}
        </h2>
        <ul className="grid grid-cols-2 gap-x-3.5 gap-y-7 md:grid-cols-4 md:gap-6">
          {specialists.map((slug) => {
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
        {note && <p className="mt-10 max-w-[62ch] text-on-dark">{note}</p>}
      </div>
    </section>
  );
}

/** Questions: <details> works without script and stays in the HTML for search. */
export function FaqSection({ faq }: { faq: { q: string; a: string }[] }) {
  return (
    <section aria-labelledby="duk-h" className="bg-paper section-y">
      <div className={`wrap ${twoCols}`}>
        <h2 id="duk-h" className={h2}>
          Dažniausi klausimai
        </h2>
        <div className="flex flex-col gap-2">
          {faq.map((f) => (
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
  );
}

/** Reviews: only when at least two match the page's tag. */
export function ReviewsSection({ reviews }: { reviews: Review[] }) {
  if (reviews.length < 2) return null;
  return (
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
  );
}

/** Sources (DOI, or the page link when there is none), the reviewer (only once a specialist has approved the text), related pages. */
export function SourcesSection({
  sources,
  reviewed,
  related,
  neighbours = [],
}: {
  sources: Source[];
  reviewed: { by: SpecialistSlug; date: string } | null;
  related: { href: string; label: string }[];
  /** Other pages of the same section (problem pages only). */
  neighbours?: { href: string; label: string }[];
}) {
  const reviewer = reviewed ? getSpecialistBySlug(reviewed.by) : undefined;
  return (
    <section aria-labelledby="saltiniai-h" className="bg-paper py-16 desk:py-20">
      <div className={`wrap ${twoCols}`}>
        <div>
          <h2 id="saltiniai-h" className="text-h3-m desk:text-h3">
            Šaltiniai
          </h2>
          {reviewer && reviewed && (
            <p className="mt-4 text-small text-graphite">
              Peržiūrėjo{" "}
              <Link href={`/specialistai/${reviewer.slug}`} className="link-action text-ink">
                {reviewer.name}
              </Link>
              , {reviewer.role.toLowerCase()}, {reviewed.date}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-10">
          <ol className="flex flex-col gap-3 text-small list-decimal pl-5 marker:text-graphite">
            {sources.map((s) => (
              <li key={sourceHref(s)}>
                {s.authors} {s.title}
                {s.journal ? (
                  <>
                    {/[.?!]$/.test(s.title) ? "" : "."}{" "}
                    <i>{s.journal}</i>
                    {s.year ? `, ${s.year}` : ""}.
                  </>
                ) : (
                  <>
                    {s.year ? `, ${s.year}` : ""}
                    {/[.?!]$/.test(s.year ? "" : s.title) ? "" : "."}
                  </>
                )}{" "}
                <a
                  href={sourceHref(s)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`link-action ${s.doi ? "break-all" : "whitespace-nowrap"}`}
                >
                  {s.doi ? `doi:${s.doi}` : new URL(sourceHref(s)).hostname.replace(/^www\./, "")}
                </a>
              </li>
            ))}
          </ol>
          {neighbours.length > 0 && (
            <div>
              <h2 className="text-body font-medium">Kitos šio skyriaus temos</h2>
              <ul className="mt-2 flex flex-wrap gap-x-7 gap-y-1">
                {neighbours.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className="link-action inline-flex items-center min-h-11 text-body">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {related.length > 0 && (
            <div>
              <h2 className="text-body font-medium">Susiję puslapiai</h2>
              <ul className="mt-2 flex flex-wrap gap-x-7 gap-y-1">
                {related.map((r) => (
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
  );
}
