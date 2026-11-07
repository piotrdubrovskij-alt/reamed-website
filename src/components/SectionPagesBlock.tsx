import Link from "next/link";
import { conditionSummary, conditionsInSection } from "@/content/conditions";
import type { SectionSlug } from "@/content/sections";

// The section's own pages (plan of 07.11.2026), shown on an old section page (ka-gydome/<section>)
// until that page moves to mockup G and lists them itself. Renders nothing while the section is empty.
// Lithuanian only, like the pages it links to.
export default function SectionPagesBlock({ section }: { section: SectionSlug }) {
  const pages = conditionsInSection(section);
  if (pages.length === 0) return null;
  const headingId = `skyrius-${section}-h`;

  return (
    <section aria-labelledby={headingId} className="bg-paper section-y">
      <div className="wrap grid gap-10 desk:grid-cols-[5fr_7fr] desk:gap-[72px] desk:items-start">
        <h2 id={headingId} className="text-h2 text-balance">
          Plačiau šia tema
        </h2>
        <ul className="grid gap-8 md:grid-cols-2 md:gap-x-12">
          {pages.map((p) => (
            <li key={p.slug}>
              <Link href={`/ka-gydome/${p.slug}`} className="link-action inline-flex items-center min-h-11 text-lead">
                {p.navTitle}
              </Link>
              <p className="mt-1.5 text-graphite max-w-[40ch]">{conditionSummary(p)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
