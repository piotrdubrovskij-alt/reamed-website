import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { specialists } from "@/lib/specialists";
import { translations } from "@/lib/translations";
import { conditionPages } from "@/content/conditions";
import { SECTIONS } from "@/content/sections";
import { servicePages } from "@/content/services";

// lastModified only where a real date exists: the day a specialist last reviewed the text (`reviewed.date`).
// Change a page's text, and its reviewed date changes with it. A date that is always "now" teaches Google to ignore it.
//
// /registracija is noindex and stays out.

const staticPaths = ["/", "/ka-gydome", "/paslaugos", "/specialistai", "/kainos", "/kontaktai", "/privatumas"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lt = translations.lt;
  const reviewedOn = new Map<string, string>();
  for (const p of conditionPages) if (p.reviewed) reviewedOn.set(`/ka-gydome/${p.slug}`, p.reviewed.date);
  for (const p of servicePages) if (p.reviewed) reviewedOn.set(`/paslaugos/${p.slug}`, p.reviewed.date);
  const paths = [
    ...staticPaths,
    ...SECTIONS.filter((s) => s.hasPage).map((s) => `/ka-gydome/${s.slug}`),
    ...conditionPages.map((p) => `/ka-gydome/${p.slug}`),
    ...lt.services.items.map((s) => `/paslaugos/${s.slug}`),
    ...specialists.map((s) => `/specialistai/${s.slug}`),
  ];

  // A section's own page can be both a section and a data page: list it once.
  return [...new Set(paths)].map((path) => {
    const lastModified = reviewedOn.get(path);
    return { url: path === "/" ? SITE_URL : `${SITE_URL}${path}`, ...(lastModified ? { lastModified } : {}) };
  });
}
