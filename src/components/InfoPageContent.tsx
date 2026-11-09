import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import type { InfoBlock, InfoPage } from "@/content/pages/types";
import { getPricedService } from "@/data/prices";
import { getReviews } from "@/data/reviews";
import { PAGE_LINK } from "@/lib/inline-links";
import { getSpecialistBySlug } from "@/lib/specialists";
import { translations } from "@/lib/translations";
import ServiceButtons from "@/components/ServiceButtons";
import LinkedText from "@/components/g/LinkedText";
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

// A standalone page (/apie-mus, /duk, /chiropraktikas-vilniuje, /reabilitacija-be-siuntimo), mockup G: the blocks of the
// problem and service pages in the order the page's data sets. Sections change background instead of lines or cards.
// Server component, Lithuanian only for now.

const t = translations.lt;

type Tone = "paper" | "ground";

// Blocks with a background of their own. The block after one starts again from paper.
const OWN_BACKGROUND = new Set<InfoBlock["kind"]>(["warning", "team", "services", "reviews"]);

function tonesOf(blocks: InfoBlock[]): Tone[] {
  let next: Tone = "paper";
  return blocks.map((b) => {
    const tone = next;
    next = OWN_BACKGROUND.has(b.kind) || tone === "ground" ? "paper" : "ground";
    return tone;
  });
}

const Text = ({ text }: { text: string }) => <LinkedText text={text} pattern={PAGE_LINK} />;

function Section({ id, tone, wide = false, children }: { id: string; tone: Tone; wide?: boolean; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className={`${tone === "paper" ? "bg-paper" : "bg-ground"} section-y`}>
      <div className={wide ? "wrap" : `wrap ${twoCols}`}>{children}</div>
    </section>
  );
}

function SideHeading({ id, title, note, children }: { id: string; title: string; note?: string; children?: ReactNode }) {
  return (
    <div>
      <h2 id={id} className={h2}>
        {title}
      </h2>
      {note && <p className="mt-4 text-small text-graphite max-w-[36ch]">{note}</p>}
      {children}
    </div>
  );
}

function LinkList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-x-7 gap-y-1">
      {items.map((l) => (
        <li key={l.href}>
          <Link href={l.href} className="link-action inline-flex items-center min-h-11 text-body">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Block({ block: b, tone }: { block: InfoBlock; tone: Tone }) {
  switch (b.kind) {
    case "text":
      return (
        <Section id={b.id} tone={tone}>
          <SideHeading id={b.id} title={b.title} note={b.note} />
          <div className="flex flex-col gap-5 max-w-[62ch]">
            {b.paragraphs.map((p) => (
              <p key={p}>
                <Text text={p} />
              </p>
            ))}
            {b.list && (
              <>
                {b.list.intro && <p>{b.list.intro}</p>}
                <ul className="flex flex-col gap-2.5 pl-1">
                  {b.list.items.map((item) => (
                    <li key={item} className={`${dot} before:bg-mint`}>
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </Section>
      );

    case "dots":
      return (
        <Section id={b.id} tone={tone}>
          <SideHeading id={b.id} title={b.title} note={b.note}>
            <ArchPhoto />
          </SideHeading>
          <div className="desk:mt-3 flex flex-col gap-12">
            <Dots items={b.items} />
            {b.links && (
              <div>
                <h3 className="text-body font-medium mb-2">{b.links.title}</h3>
                <LinkList items={b.links.items} />
              </div>
            )}
          </div>
        </Section>
      );

    case "steps":
      return (
        <Section id={b.id} tone={tone} wide>
          <h2 id={b.id} className={`${h2} mb-10 desk:mb-14`}>
            {b.title}
          </h2>
          <Phrases items={b.items} />
          {b.note && <p className="mt-10 max-w-[62ch]">{b.note}</p>}
        </Section>
      );

    case "items":
      return (
        <Section id={b.id} tone={tone}>
          <SideHeading id={b.id} title={b.title} note={b.note} />
          <div className="flex flex-col gap-6 max-w-[62ch]">
            {b.intro && <p>{b.intro}</p>}
            <ul className="flex flex-col gap-5">
              {b.items.map((item) => (
                <li key={item.title} className={`${dot} before:bg-mint`}>
                  <span>
                    <b className="font-medium">{item.title}</b> {item.text}
                  </span>
                </li>
              ))}
            </ul>
            {b.paragraphs?.map((p) => (
              <p key={p}>
                <Text text={p} />
              </p>
            ))}
          </div>
        </Section>
      );

    case "compare":
      return (
        <Section id={b.id} tone={tone} wide>
          <h2 id={b.id} className={`${h2} ${b.note ? "" : "mb-10 desk:mb-14"}`}>
            {b.title}
          </h2>
          {b.note && <p className="mt-4 mb-10 desk:mb-14 max-w-[62ch]">{b.note}</p>}
          {/* The rows of all columns line up from tablet width (subgrid), so a row can be read across. */}
          <div className={`grid gap-3 md:gap-4 ${b.columns.length === 3 ? "desk:grid-cols-3" : "md:grid-cols-2"}`}>
            {b.columns.map((c) => (
              <div
                key={c.title}
                style={{ "--rows": c.rows.length, "--all": c.rows.length + 1 } as CSSProperties}
                className={`grid gap-y-6 content-start rounded-[24px] px-6 py-7 desk:px-8 desk:py-9 md:grid-rows-subgrid md:[grid-row:span_var(--all)] ${
                  c.ours ? "bg-mint-light" : tone === "paper" ? "bg-ground" : "bg-paper"
                }`}
              >
                <h3 className="text-h3-m font-medium text-balance">{c.title}</h3>
                <dl className="grid gap-y-6 md:grid-rows-subgrid md:[grid-row:span_var(--rows)]">
                  {c.rows.map((r) => (
                    <div key={r.label}>
                      <dt className={`text-small ${c.ours ? "text-ink" : "text-graphite"}`}>{r.label}</dt>
                      <dd className="mt-1">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </Section>
      );

    case "facts":
      return (
        <Section id={b.id} tone={tone}>
          <SideHeading id={b.id} title={b.title} note={b.note} />
          <dl className="flex flex-col gap-5 max-w-[62ch]">
            {b.rows.map((r) => (
              <div key={r.label} className="sm:grid sm:grid-cols-[180px_1fr] sm:gap-x-8 sm:items-baseline">
                <dt className="text-small text-graphite">{r.label}</dt>
                <dd className="mt-0.5 sm:mt-0">
                  <Text text={r.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      );

    case "experience":
      return (
        <Section id={b.id} tone={tone}>
          <SideHeading id={b.id} title={b.title} note={b.note} />
          <ul className="flex flex-col gap-8 max-w-[62ch]">
            {b.rows.map((r) => {
              const p = getSpecialistBySlug(r.slug);
              if (!p) return null;
              return (
                <li key={r.slug}>
                  <Link href={`/specialistai/${r.slug}`} className="link-action inline-flex items-center min-h-11 text-body desk:text-lead">
                    {p.name}
                  </Link>
                  <p className="text-small text-graphite">
                    {p.role}
                    {p.license ? `, licencija ${p.license}` : ""}
                  </p>
                  <p className="mt-2">{r.text}</p>
                </li>
              );
            })}
          </ul>
        </Section>
      );

    case "price":
      return (
        <Section id={b.id} tone={tone}>
          <div>
            <h2 id={b.id} className={h2}>
              {b.title}
            </h2>
            <p className="mt-4 text-small text-graphite max-w-[36ch]">
              <Link href="/kainos" className="link-action">
                Visos kainos ir paketų sąlygos
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-8 max-w-[640px]">
            <ul className="flex flex-col gap-8">
              {b.lines.map(getPricedService).map((s) => (
                <li key={s.id}>
                  <Service service={s} lang="lt" />
                </li>
              ))}
            </ul>
            {b.note && <p className="text-small text-graphite max-w-[62ch]">{b.note}</p>}
          </div>
        </Section>
      );

    case "warning":
      return <WarningSection id={b.id} title={b.title} note={b.note ?? ""} items={b.items} />;

    case "team":
      return <TeamSection title={b.title} specialists={b.specialists} note={b.note} />;

    // The same mint band and buttons as on the home page: the list of services looks the same everywhere.
    case "services":
      return (
        <section aria-labelledby="paslaugos-h" className="bg-mint text-ink section-y [--focus-ring:var(--color-ink)]">
          <div className="wrap">
            <h2 id="paslaugos-h" className="text-h2 max-w-[24ch] text-balance mb-8 md:mb-12">
              {t.services.title}
            </h2>
            <ServiceButtons items={t.services.items} />
          </div>
        </section>
      );

    case "links":
      return (
        <Section id={b.id} tone={tone}>
          <SideHeading id={b.id} title={b.title} note={b.note} />
          <div className="desk:mt-3">
            <LinkList items={b.items} />
          </div>
        </Section>
      );

    case "faq":
      return <FaqSection faq={b.items} title={b.title} id={b.id} tone={tone} />;

    case "reviews":
      return <ReviewsSection reviews={getReviews(b.service || b.condition ? { service: b.service, condition: b.condition } : { featured: true })} />;
  }
}

export default function InfoPageContent({ page }: { page: InfoPage }) {
  const tones = tonesOf(page.blocks);
  return (
    <>
      <PageHero back={page.back} h1={page.hero.h1} lead={page.hero.lead} />
      {page.blocks.map((b, i) => (
        <Block key={i} block={b} tone={tones[i]} />
      ))}
      <SourcesSection sources={page.sources} reviewed={page.reviewed} related={page.related} />
    </>
  );
}
