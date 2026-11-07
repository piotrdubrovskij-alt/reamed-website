import { translations } from "@/lib/translations";

// Sections of «Ką gydome» by body zone — the plan of 07.11.2026 (CLAUDE.md, «Правило»).
// Every condition page belongs to one section and is shown inside it: under the section on
// /ka-gydome, on the section page, and in the breadcrumbs «Ką gydome › section › page».
//
// Sections with a page are the eight in translations.areas (their titles and texts live there).
// Sections from the plan that have no page yet are listed here; /ka-gydome shows one by name,
// without a link, only once it holds at least one page. When its page is made, move it to
// translations.areas and pick the slug then.

type AreaSlug = (typeof translations.lt.areas.items)[number]["slug"];

export const PLANNED_SECTIONS = [
  { slug: "ciurna-ir-peda", title: "Čiurna ir pėda", text: "Kulno, pėdos ir čiurnos skausmas, raiščių patempimai." },
  { slug: "alkune-ir-riesas", title: "Alkūnė ir riešas", text: "Alkūnės ir riešo skausmas, sausgyslių perkrovos." },
  { slug: "klubas-ir-kirksnis", title: "Klubas ir kirkšnis", text: "Klubo ir kirkšnies skausmas, ypač sportuojantiems." },
] as const;

type PlannedSlug = (typeof PLANNED_SECTIONS)[number]["slug"];

export type SectionSlug = AreaSlug | PlannedSlug;

/** Lithuanian name of a section and its page address (null while the section has no page). */
export function sectionInfo(slug: SectionSlug): { title: string; href: string | null } {
  const area = translations.lt.areas.items.find((a) => a.slug === slug);
  if (area) return { title: area.title, href: `/ka-gydome/${area.slug}` };
  const planned = PLANNED_SECTIONS.find((s) => s.slug === slug);
  return { title: planned?.title ?? "Ką gydome", href: null };
}
