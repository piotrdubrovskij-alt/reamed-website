import type { ConditionPage } from "./types";
import type { SectionSlug } from "@/content/sections";
import { stuburoIsvarza } from "./stuburo-isvarza";
import { isialgijaRadikulopatija } from "./isialgija-radikulopatija";
import { skausmasNugarosApacioje } from "./skausmas-nugaros-apacioje";
import { osteochondroze } from "./osteochondroze";
import { plantarinisFascitas } from "./plantarinis-fascitas";
import { reabilitacijaPoMeniskoOperacijos } from "./reabilitacija-po-menisko-operacijos";

// Problem pages built from data (/ka-gydome/<slug>). Order = order inside each section.
// The eight older pages still live in their own folders under src/app/ka-gydome/.
export const conditionPages: ConditionPage[] = [
  stuburoIsvarza,
  isialgijaRadikulopatija,
  skausmasNugarosApacioje,
  osteochondroze,
  plantarinisFascitas,
  reabilitacijaPoMeniskoOperacijos,
];

export function getConditionPage(slug: string): ConditionPage | undefined {
  return conditionPages.find((p) => p.slug === slug);
}

/** First sentence of the lead, for lists. */
export function conditionSummary(p: ConditionPage): string {
  const end = p.hero.lead.indexOf(". ");
  return end === -1 ? p.hero.lead : p.hero.lead.slice(0, end + 1);
}

/** Pages shown inside a section: its own first, then those that also sit there (operations in their zone). */
export function conditionsInSection(section: SectionSlug): ConditionPage[] {
  return [
    ...conditionPages.filter((p) => p.section === section),
    ...conditionPages.filter((p) => p.alsoIn?.includes(section)),
  ];
}
