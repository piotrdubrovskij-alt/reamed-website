import type { ConditionPage } from "./types";
import { SECTIONS, getSection, type SectionSlug } from "@/content/sections";
import { stuburoIsvarza } from "./stuburo-isvarza";
import { isialgijaRadikulopatija } from "./isialgija-radikulopatija";
import { skausmasNugarosApacioje } from "./skausmas-nugaros-apacioje";
import { osteochondroze } from "./osteochondroze";
import { plantarinisFascitas } from "./plantarinis-fascitas";
import { reabilitacijaPoMeniskoOperacijos } from "./reabilitacija-po-menisko-operacijos";
import { atsistatymasPoOperaciju } from "./atsistatymas-po-operaciju";
import { ankstyvaReabilitacijaPoOperacijos } from "./ankstyva-reabilitacija-po-operacijos";
import { reabilitacijaPoKryzminioRaiscioOperacijos } from "./reabilitacija-po-kryzminio-raiscio-operacijos";
import { kelioSkausmas } from "./kelio-skausmas";
import { priekinioKryzminioRaiscioPlysimas } from "./priekinio-kryzminio-raiscio-plysimas";
import { meniskoPlysimas } from "./menisko-plysimas";
import { patelofemoralinisSkausmas } from "./patelofemoralinis-skausmas";
import { nugarosSkausmas } from "./nugaros-skausmas";
import { kakloSkausmas } from "./kaklo-skausmas";
import { cervikalgija } from "./cervikalgija";
import { kakloRadikulopatija } from "./kaklo-radikulopatija";
import { itamposGalvosSkausmas } from "./itampos-galvos-skausmas";
import { petiesProblemos } from "./peties-problemos";
import { subakromialinisSkausmoSindromas } from "./subakromialinis-skausmo-sindromas";
import { sportoTraumos } from "./sporto-traumos";
import { raumenuPatempimas } from "./raumenu-patempimas";
import { slauniesDvigalvioRaumensPatempimas } from "./slaunies-dvigalvio-raumens-patempimas";
import { pritraukiamujuRaumenuPatempimas } from "./pritraukiamuju-raumenu-patempimas";
import { blauzdosRaumensPlysimas } from "./blauzdos-raumens-plysimas";
import { grizimasISportaPoTraumos } from "./grizimas-i-sporta-po-traumos";

// Problem pages built from data (/ka-gydome/<slug>). Order = order inside each section.
// Older section pages not yet rewritten still live in their own folders under src/app/ka-gydome/.
export const conditionPages: ConditionPage[] = [
  stuburoIsvarza,
  isialgijaRadikulopatija,
  skausmasNugarosApacioje,
  osteochondroze,
  plantarinisFascitas,
  reabilitacijaPoMeniskoOperacijos,
  // Batch 2: two section pages (they replace the older ones at the same addresses) and five topics.
  atsistatymasPoOperaciju,
  ankstyvaReabilitacijaPoOperacijos,
  reabilitacijaPoKryzminioRaiscioOperacijos,
  kelioSkausmas,
  priekinioKryzminioRaiscioPlysimas,
  meniskoPlysimas,
  patelofemoralinisSkausmas,
  // Batch 3: three section pages (they replace the older ones at the same addresses) and four topics.
  nugarosSkausmas,
  kakloSkausmas,
  cervikalgija,
  kakloRadikulopatija,
  itamposGalvosSkausmas,
  petiesProblemos,
  subakromialinisSkausmoSindromas,
  // Batch 4: the Sporto traumos section page (replaces the older one at the same address) and five topics.
  sportoTraumos,
  raumenuPatempimas,
  slauniesDvigalvioRaumensPatempimas,
  pritraukiamujuRaumenuPatempimas,
  blauzdosRaumensPlysimas,
  grizimasISportaPoTraumos,
];

export function getConditionPage(slug: string): ConditionPage | undefined {
  return conditionPages.find((p) => p.slug === slug);
}

/** First sentence of the lead, for lists. */
export function conditionSummary(p: ConditionPage): string {
  const end = p.hero.lead.indexOf(". ");
  return end === -1 ? p.hero.lead : p.hero.lead.slice(0, end + 1);
}

/** Pages shown inside a section, in the order of its topics in src/content/sections.ts. */
export function conditionsInSection(section: SectionSlug): ConditionPage[] {
  return getSection(section).topics.flatMap((t) => {
    const p = t.page ? getConditionPage(t.page) : undefined;
    return p ? [p] : [];
  });
}

// The build stops if the plan's tree and the page files disagree: a topic linking to a page that
// does not exist, or a page that its own section does not list.
for (const s of SECTIONS) {
  for (const t of s.topics) {
    if (t.page && !getConditionPage(t.page)) throw new Error(`sections.ts: «${t.title}» links to missing page ${t.page}`);
  }
}
for (const p of conditionPages) {
  if (p.slug === p.section) continue; // a section's own page
  if (!getSection(p.section).topics.some((t) => t.page === p.slug)) {
    throw new Error(`${p.slug}: its section ${p.section} in sections.ts does not list it`);
  }
}
