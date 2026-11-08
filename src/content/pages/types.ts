import type { Source } from "@/content/conditions/types";
import type { PriceId } from "@/data/prices";
import type { ConditionSlug, ServiceSlug, SpecialistSlug } from "@/data/reviews";

// A standalone page outside «Ką gydome» and «Paslaugos» (plan of 07.11.2026), as data. The look lives in
// InfoPageContent (mockup G, the same blocks as the problem and service pages); texts live here, one file per page.
// Lithuanian only for now. No long dashes in Lithuanian texts (CLAUDE.md).
// Paragraphs, questions' answers and fact values may link to our own pages: «[words](/path)» (src/lib/inline-links.ts).

type Titled = { id: string; title: string; note?: string };

export type InfoBlock =
  /** Heading on the left, paragraphs on the right; an optional bulleted list follows them. */
  | (Titled & { kind: "text"; paragraphs: string[]; list?: { intro?: string; items: string[] } })
  /** Round bullets in two columns, then optional links to pages that say more. */
  | (Titled & { kind: "dots"; items: string[]; links?: { title: string; items: { href: string; label: string }[] } })
  /** Large phrases with bold opening words next to the round clinic photo. */
  | (Titled & { kind: "steps"; items: { lead: string; text: string }[] })
  /** Bold opening words, then the sentence; paragraphs after the list. */
  | (Titled & { kind: "items"; intro?: string; items: { title: string; text: string }[]; paragraphs?: string[] })
  /** Two or three methods side by side, on a phone one under the other. */
  | (Titled & { kind: "compare"; columns: { title: string; ours?: boolean; rows: { label: string; value: string }[] }[] })
  /** Label and value rows: the facts AI assistants and people look up. */
  | (Titled & { kind: "facts"; rows: { label: string; value: string }[] })
  /** Each specialist's experience; name, role and licence number come from src/lib/specialists.ts. */
  | (Titled & { kind: "experience"; rows: { slug: SpecialistSlug; text: string }[] })
  /** Price lines from src/data/prices.ts, the same numbers as /kainos. */
  | (Titled & { kind: "price"; lines: PriceId[] })
  /** Dark dots on the darker ground: red flags, or what the clinic does not do. */
  | (Titled & { kind: "warning"; items: string[] })
  /** Graphite block with arched photos. */
  | (Titled & { kind: "team"; specialists: SpecialistSlug[] })
  /** The service buttons from the home page, on the mint band. */
  | { kind: "services" }
  /** A list of links under a heading. */
  | (Titled & { kind: "links"; items: { href: string; label: string }[] })
  /** Questions under their own heading; a page can have several groups. */
  | (Titled & { kind: "faq"; items: { q: string; a: string }[] })
  /** Two real Google reviews, only if at least two match: by service or problem, or the featured ones when neither is set. */
  | { kind: "reviews"; service?: ServiceSlug; condition?: ConditionSlug };

export type InfoPage = {
  /** Address from the site root: "/duk". Also the canonical URL. */
  path: string;
  /** Short name: breadcrumb and links. */
  navTitle: string;
  /** schema.org type of the page. */
  schema: "AboutPage" | "FAQPage" | "MedicalWebPage";
  /** schema.org `about` of a MedicalWebPage. */
  therapyName?: string;
  /** Google title and description. */
  meta: { title: string; description: string };
  back: { href: string; label: string };
  hero: {
    h1: string;
    /** Two or three sentences: the direct answer Google and AI assistants quote. */
    lead: string;
  };
  blocks: InfoBlock[];
  sources: Source[];
  /** Filled in when the specialist has read and approved the text. Until then nothing is shown. */
  reviewed: { by: SpecialistSlug; date: string } | null;
  related: { href: string; label: string }[];
};
