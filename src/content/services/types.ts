import type { ServiceSlug, SpecialistSlug } from "@/data/reviews";
import type { Source } from "@/content/conditions/types";
import type { PriceId } from "@/data/prices";

// One service page (/paslaugos/<slug>) as data. The look lives in ServicePageContent (mockup G, the same
// blocks as the problem pages); texts live here, one file per page. Lithuanian only for now.
// No long dashes in Lithuanian texts (CLAUDE.md). Plan of 07.11.2026: services are rewritten on template G.

export type ServicePage = {
  slug: ServiceSlug;
  /** Short name, as in the services list: "Kineziterapija". */
  navTitle: string;
  /** Google title and description. */
  meta: { title: string; description: string };
  /** schema.org MedicalTherapy.name. */
  therapyName: string;
  hero: {
    h1: string;
    /** Two or three sentences: the direct answer Google and AI assistants quote. */
    lead: string;
  };
  about: { title?: string; paragraphs: string[]; list?: { intro: string; items: string[] } };
  /** "Kam tai padeda": complaints in plain words, then links to the problem pages (/ka-gydome/<slug>). */
  helps: { items: string[]; note?: string; pages: string[] };
  /** "Kaip vyksta vizitas": bold opening words, then the rest of the sentence. */
  visit: { lead: string; text: string }[];
  visitNote?: string;
  /** "Ką taikome ir kiek tai trunka". */
  methods: {
    intro?: string;
    items: { title: string; text: string }[];
    paragraphs: string[];
  };
  /** Lines from src/data/prices.ts, the same numbers as /kainos. */
  price: { lines: PriceId[]; note?: string };
  /** Contraindications and when a doctor comes first. Title defaults to "Kada šis gydymas netinka?". */
  limits: { title?: string; items: string[]; note?: string };
  team: { title: string; specialists: SpecialistSlug[]; note?: string };
  faq: { q: string; a: string }[];
  /** Reviews are taken from this tag, only if at least two exist. */
  reviews?: ServiceSlug;
  sources: Source[];
  /** Filled in when the specialist has read and approved the text. Until then nothing is shown. */
  reviewed: { by: SpecialistSlug; date: string } | null;
  related: { href: string; label: string }[];
};
