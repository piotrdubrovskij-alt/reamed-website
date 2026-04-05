import type { MetadataRoute } from "next";

const BASE_URL = "https://reamed.lt";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/kontaktai`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE_URL}/kainos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // /registracija is noindex — intentionally excluded from sitemap
  ];

  const serviceRoutes: MetadataRoute.Sitemap = [
    "kineziterapija",
    "manualine-terapija",
    "osteopatija",
    "sporto-reabilitacija",
    "pooperacine-reabilitacija",
    "gydomasis-masazas",
  ].map((slug) => ({
    url: `${BASE_URL}/paslaugos/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const conditionRoutes: MetadataRoute.Sitemap = [
    "nugaros-skausmas",
    "kaklo-skausmas",
    "sporto-traumos",
    "kelio-skausmas",
    "peties-problemos",
    "plintantis-skausmas",
    "tendinopatijos",
    "atsistatymas-po-operaciju",
  ].map((slug) => ({
    url: `${BASE_URL}/ka-gydome/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const specialistRoutes: MetadataRoute.Sitemap = [
    "piotr-dubrovskij",
    "mangirdas-kazacenko",
    "kotryna-kairyte",
    "erikas-jatkauskas",
  ].map((slug) => ({
    url: `${BASE_URL}/specialistai/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...conditionRoutes, ...specialistRoutes];
}
