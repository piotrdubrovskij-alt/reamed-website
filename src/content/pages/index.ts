import type { InfoPage } from "./types";
import { PAGE_LINK } from "@/lib/inline-links";
import { conditionPages } from "@/content/conditions";
import { servicePages } from "@/content/services";
import { specialists } from "@/lib/specialists";
import { apieMus } from "./apie-mus";
import { duk } from "./duk";
import { chiropraktikasVilniuje } from "./chiropraktikas-vilniuje";
import { reabilitacijaBeSiuntimo } from "./reabilitacija-be-siuntimo";

// Standalone pages outside «Ką gydome» and «Paslaugos» (batch 15, plan of 07.11.2026). Reached from the footer and from
// texts. Each has its own folder in src/app and is listed in the sitemap. Routes import from here, so the check below runs.
export { apieMus, duk, chiropraktikasVilniuje, reabilitacijaBeSiuntimo };
export const infoPages: InfoPage[] = [apieMus, duk, chiropraktikasVilniuje, reabilitacijaBeSiuntimo];

// The build stops if a link inside a text or under a page leads nowhere.
const known = new Set<string>([
  "/",
  "/kainos",
  "/kontaktai",
  "/registracija",
  "/privatumas",
  "/specialistai",
  "/paslaugos",
  "/ka-gydome",
  ...conditionPages.map((p) => `/ka-gydome/${p.slug}`),
  ...servicePages.map((p) => `/paslaugos/${p.slug}`),
  ...specialists.map((s) => `/specialistai/${s.slug}`),
  ...infoPages.map((p) => p.path),
]);

function check(page: InfoPage, href: string) {
  if (!known.has(href)) throw new Error(`${page.path}: link leads to missing page ${href}`);
}

for (const page of infoPages) {
  page.related.forEach((r) => check(page, r.href));
  const texts: string[] = [page.hero.lead];
  for (const b of page.blocks) {
    if (b.kind === "text") texts.push(...b.paragraphs);
    if (b.kind === "items") texts.push(...(b.paragraphs ?? []));
    if (b.kind === "facts") texts.push(...b.rows.map((r) => r.value));
    if (b.kind === "faq") texts.push(...b.items.map((f) => f.a));
    if (b.kind === "links") b.items.forEach((l) => check(page, l.href));
    if (b.kind === "dots") b.links?.items.forEach((l) => check(page, l.href));
  }
  for (const text of texts) for (const m of text.matchAll(PAGE_LINK)) check(page, m[2]);
}
