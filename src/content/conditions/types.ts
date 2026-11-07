import type { ConditionSlug, ServiceSlug, SpecialistSlug } from "@/data/reviews";
import type { SectionSlug } from "@/content/sections";

// One problem page (/ka-gydome/<slug>) as data. The look lives in ConditionPageContent
// (mockup G, docs/design/redesign-g/nugaros-skausmas.html); texts live here, one file per page.
// Lithuanian only for now: English and Russian get their own addresses later (/en, /ru).
// No long dashes in Lithuanian texts (CLAUDE.md).

export type Source = {
  /** "George SZ ir kt." */
  authors: string;
  title: string;
  journal: string;
  year: number;
  doi: string;
};

export type ConditionPage = {
  slug: string;
  /** Its own section (plan of 07.11.2026): breadcrumbs and the back link lead there. Where else it is
   *  listed is set in src/content/sections.ts (an operation also sits in its body zone). */
  section: SectionSlug;
  /** Short name in section lists: "Stuburo išvarža". */
  navTitle: string;
  /** Only on a section's own page (slug === section): heading over the section's topics. */
  topicsTitle?: string;
  /** Google title and description. */
  meta: { title: string; description: string };
  /** Search phrase the page is built around, for MedicalCondition.name in schema.org. */
  conditionName: string;
  hero: {
    h1: string;
    /** Two or three sentences: the direct answer Google and AI assistants quote. */
    lead: string;
    /** Lead specialist of the topic. Not shown in the first screen for now (Piotr, 07.11.2026);
     *  if a photo returns there, it is an arch as on the home page, not a circle. */
    specialist: SpecialistSlug;
  };
  about: { title?: string; paragraphs: string[]; list?: { intro: string; items: string[] } };
  when: { items: string[]; note?: string };
  /** "Kaip vertiname": bold opening words, then the rest of the sentence. */
  assess: { lead: string; text: string }[];
  assessNote?: string;
  /** Service pages linked under "Kaip vertiname". */
  services: ServiceSlug[];
  treatment: {
    intro?: string;
    items: { title: string; text: string }[];
    paragraphs: string[];
  };
  urgent: { items: string[]; note?: string };
  team: { title: string; specialists: SpecialistSlug[]; note?: string };
  faq: { q: string; a: string }[];
  /** Reviews are taken from this tag, only if at least two exist. */
  reviews?: ConditionSlug;
  sources: Source[];
  /** Filled in when the specialist has read and approved the text. Until then nothing is shown. */
  reviewed: { by: SpecialistSlug; date: string } | null;
  related: { href: string; label: string }[];
};
