import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { specialists } from "@/lib/specialists";
import { translations } from "@/lib/translations";

// No lastModified on purpose: the site does not track when each page's text
// really changed, and a date that is always "now" teaches Google to ignore it.
// Pages will get real dates when their texts move into content files.
//
// /registracija is noindex and stays out.

const staticPaths = ["/", "/ka-gydome", "/paslaugos", "/specialistai", "/kainos", "/kontaktai", "/privatumas"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lt = translations.lt;
  const paths = [
    ...staticPaths,
    ...lt.areas.items.map((a) => `/ka-gydome/${a.slug}`),
    ...lt.services.items.map((s) => `/paslaugos/${s.slug}`),
    ...specialists.map((s) => `/specialistai/${s.slug}`),
  ];

  return paths.map((path) => ({ url: path === "/" ? SITE_URL : `${SITE_URL}${path}` }));
}
