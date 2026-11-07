import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubPageContent from "@/components/HubPageContent";
import { conditionsInSection } from "@/content/conditions";
import { PLANNED_SECTIONS, type SectionSlug } from "@/content/sections";
import { translations } from "@/lib/translations";

export const metadata: Metadata = pageMetadata({
  path: "/ka-gydome",
  title: "Ką gydome — nugaros, kaklo, peties, kelio skausmas ir sporto traumos | ReaMed",
  description:
    "Nugaros, kaklo, peties ir kelio skausmas, sporto traumos, sausgyslių perkrovos ir atsistatymas po operacijų. Privati kineziterapijos klinika Vilniaus centre, siuntimo nereikia.",
});

// Sections by body zone, each with its own pages under it (plan of 07.11.2026, CLAUDE.md).
const sectionSlugs: SectionSlug[] = [
  ...translations.lt.areas.items.map((a) => a.slug),
  ...PLANNED_SECTIONS.map((s) => s.slug),
];
const sectionPages = Object.fromEntries(
  sectionSlugs.map((slug) => [
    slug,
    conditionsInSection(slug).map((p) => ({ href: `/ka-gydome/${p.slug}`, title: p.navTitle })),
  ]),
);
// A section without its own page appears only once it holds a page.
const plannedSections = PLANNED_SECTIONS.filter((s) => conditionsInSection(s.slug).length > 0).map((s) => ({
  slug: s.slug,
  title: s.title,
  text: s.text,
  href: null,
}));

export default function KaGydomePage() {
  return (
    <>
      <Header />
      <main>
        <HubPageContent kind="areas" sectionPages={sectionPages} plannedSections={plannedSections} />
      </main>
      <Footer />
    </>
  );
}
