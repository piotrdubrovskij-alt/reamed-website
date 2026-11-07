import type { ServicePage } from "./types";
import { getConditionPage } from "@/content/conditions";
import { translations } from "@/lib/translations";
import { kineziterapija } from "./kineziterapija";
import { osteopatija } from "./osteopatija";
import { manualineTerapija } from "./manualine-terapija";
import { pooperacineReabilitacija } from "./pooperacine-reabilitacija";
import { sportoReabilitacija } from "./sporto-reabilitacija";
import { gydomasisMasazas } from "./gydomasis-masazas";

// Service pages built from data (/paslaugos/<slug>), template G. Batch 6: the six older services rewritten.
// The list on /paslaugos, the home page and the sitemap still comes from translations.services.
export const servicePages: ServicePage[] = [
  kineziterapija,
  osteopatija,
  manualineTerapija,
  pooperacineReabilitacija,
  sportoReabilitacija,
  gydomasisMasazas,
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug);
}

// The build stops if a service page links to a problem page that does not exist,
// or if a service in the list has no page.
for (const p of servicePages) {
  for (const slug of p.helps.pages) {
    if (!getConditionPage(slug)) throw new Error(`services/${p.slug}: helps.pages links to missing page ${slug}`);
  }
}
for (const s of translations.lt.services.items) {
  if (!getServicePage(s.slug)) throw new Error(`translations.services: «${s.title}» has no page in src/content/services`);
}
