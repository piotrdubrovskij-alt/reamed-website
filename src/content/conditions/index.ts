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
import { tendinopatijos } from "./tendinopatijos";
import { plintantisSkausmas } from "./plintantis-skausmas";
import { tenisoAlkune } from "./teniso-alkune";
import { achiloTendinopatija } from "./achilo-tendinopatija";
import { soninisKlubo } from "./soninis-klubo-skausmas";
import { riesoKanaloSindromas } from "./rieso-kanalo-sindromas";
import { tirpstaRanka } from "./tirpsta-ranka";
import { kluboIrKirksniesSkausmas } from "./klubo-ir-kirksnies-skausmas";
import { ciurnosIrPedosSkausmas } from "./ciurnos-ir-pedos-skausmas";
import { alkunesIrRiesoSkausmas } from "./alkunes-ir-rieso-skausmas";
import { reabilitacijaPoPetiesArtroskopijos } from "./reabilitacija-po-peties-artroskopijos";
import { reabilitacijaPoKelioArtroskopijos } from "./reabilitacija-po-kelio-artroskopijos";
import { vidinioSoninioRaiscioPazeidimas } from "./vidinio-soninio-raiscio-pazeidimas";
import { galvosSkausmasDelKaklo } from "./galvos-skausmas-del-kaklo";
import { umusNugarosSkausmas } from "./umus-nugaros-skausmas";
import { kakloOsteochondroze } from "./kaklo-osteochondroze";
import { ciurnosPatempimas } from "./ciurnos-patempimas";
import { kulnoAtauga } from "./kulno-atauga";
import { spondilolisteze } from "./spondilolisteze";
import { stuburoKanaloStenoze } from "./stuburo-kanalo-stenoze";
import { kelioArtroze } from "./kelio-artroze";
import { kryzkaulioIrKluboSanarioSkausmas } from "./kryzkaulio-ir-klubo-sanario-skausmas";
import { reabilitacijaPoKelioLuzioOperacijos } from "./reabilitacija-po-kelio-luzio-operacijos";
import { reabilitacijaPoPetiesStabilizacijos } from "./reabilitacija-po-peties-stabilizacijos";
import { reabilitacijaPoZastikaulioLuzio } from "./reabilitacija-po-zastikaulio-luzio";
import { reabilitacijaPoRiesoIrRankosLuzio } from "./reabilitacija-po-rieso-ir-rankos-luzio";
import { reabilitacijaPoKluboArtroskopijos } from "./reabilitacija-po-klubo-artroskopijos";
import { reabilitacijaPoCiurnosLuzioArOperacijos } from "./reabilitacija-po-ciurnos-luzio-ar-operacijos";
import { reabilitacijaPoAchiloSausgyslesPlysimo } from "./reabilitacija-po-achilo-sausgysles-plysimo";
import { reabilitacijaPoDiskoIsvarzosOperacijos } from "./reabilitacija-po-disko-isvarzos-operacijos";
import { reabilitacijaPoStuburoStabilizacijos } from "./reabilitacija-po-stuburo-stabilizacijos";
import { nugarosSkausmasIrRaumenuItampa } from "./nugaros-skausmas-ir-raumenu-itampa";
import { skausmasTarpMenciu } from "./skausmas-tarp-menciu";
import { nugarosSkausmasSedint } from "./nugaros-skausmas-sedint";
import { laikysenosProblemos } from "./laikysenos-problemos";
import { uzstrigesKaklas } from "./uzstriges-kaklas";
import { ribotasKakloJudrumas } from "./ribotas-kaklo-judrumas";
import { kakloTraumaPoAvarijos } from "./kaklo-trauma-po-avarijos";
import { rotatoriuManzetesPazeidimas } from "./rotatoriu-manzetes-pazeidimas";
import { dvigalvioRaumensSausgyslesUzdegimas } from "./dvigalvio-raumens-sausgysles-uzdegimas";
import { kalcifikuojantisTendinitas } from "./kalcifikuojantis-tendinitas";
import { sustingesPetys } from "./sustinges-petys";
import { petiesNestabilumasIrIsnirimai } from "./peties-nestabilumas-ir-isnirimai";
import { acSanarioTrauma } from "./ac-sanario-trauma";
import { petiesSanarioArtroze } from "./peties-sanario-artroze";
import { uzpakalinioKryzminioRaiscioPlysimas } from "./uzpakalinio-kryzminio-raiscio-plysimas";
import { kelioLuziai } from "./kelio-luziai";
import { ribotasKelioJudrumas } from "./ribotas-kelio-judrumas";
import { sokejoKelis } from "./sokejo-kelis";
import { iliotibialinioTraktoSindromas } from "./iliotibialinio-trakto-sindromas";
import { golfoAlkune } from "./golfo-alkune";
import { alkunesSustingimasPoTraumos } from "./alkunes-sustingimas-po-traumos";
import { deQuervainSindromas } from "./de-quervain-sindromas";
import { riesoSkausmasIrPatempimai } from "./rieso-skausmas-ir-patempimai";
import { kluboSanarioArtroze } from "./klubo-sanario-artroze";
import { skausmasIrSustingimasPoKluboEndoprotezavimo } from "./skausmas-ir-sustingimas-po-klubo-endoprotezavimo";
import { kirksniesSkausmasSportininkams } from "./kirksnies-skausmas-sportininkams";
import { kluboFaiIrSanarioLuposPlysimas } from "./klubo-fai-ir-sanario-lupos-plysimas";
import { piriformioSindromas } from "./piriformio-sindromas";
import { ciurnosNestabilumas } from "./ciurnos-nestabilumas";
import { stresiniaiPedosLuziai } from "./stresiniai-pedos-luziai";
import { ciurnosSanarioArtroze } from "./ciurnos-sanario-artroze";
import { blauzdosSkausmasBegikams } from "./blauzdos-skausmas-begikams";

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
  // Batch 5: the Sausgyslės and Plintantis skausmas section pages (rebuilt, same addresses) and five topics
  // that live in their body-zone sections (elbow and wrist, heel, hip) and are also listed in these two.
  tendinopatijos,
  plintantisSkausmas,
  tenisoAlkune,
  achiloTendinopatija,
  soninisKlubo,
  riesoKanaloSindromas,
  tirpstaRanka,
  // Batch 7: the three new section pages (Klubas ir kirkšnis, Čiurna, Alkūnė ir riešas), two operations
  // (also listed in Petys and Kelias) and three topics.
  kluboIrKirksniesSkausmas,
  ciurnosIrPedosSkausmas,
  alkunesIrRiesoSkausmas,
  reabilitacijaPoPetiesArtroskopijos,
  reabilitacijaPoKelioArtroskopijos,
  vidinioSoninioRaiscioPazeidimas,
  galvosSkausmasDelKaklo,
  umusNugarosSkausmas,
  // Batch 8: seven topics (the disc operation moved to batch 9 with Piotr's text, 08.11.2026).
  kakloOsteochondroze,
  ciurnosPatempimas,
  kulnoAtauga,
  spondilolisteze,
  stuburoKanaloStenoze,
  kelioArtroze,
  kryzkaulioIrKluboSanarioSkausmas,
  // Batch 9: Piotr's nine «Po operacijų» texts (08.11.2026); each also sits in its body zone.
  reabilitacijaPoKelioLuzioOperacijos,
  reabilitacijaPoPetiesStabilizacijos,
  reabilitacijaPoZastikaulioLuzio,
  reabilitacijaPoRiesoIrRankosLuzio,
  reabilitacijaPoKluboArtroskopijos,
  reabilitacijaPoCiurnosLuzioArOperacijos,
  reabilitacijaPoAchiloSausgyslesPlysimo,
  reabilitacijaPoDiskoIsvarzosOperacijos,
  reabilitacijaPoStuburoStabilizacijos,
  // Batch 10: Piotr's seven texts for Nugara and Kaklas (08.11.2026), moved by scripts/import-condition-texts.mjs.
  nugarosSkausmasIrRaumenuItampa,
  skausmasTarpMenciu,
  nugarosSkausmasSedint,
  laikysenosProblemos,
  uzstrigesKaklas,
  ribotasKakloJudrumas,
  kakloTraumaPoAvarijos,
  // Batch 11: Piotr's seven texts for Petys (08.11.2026), moved by scripts/import-condition-texts.mjs.
  // The biceps tendon page is also listed in Sausgyslės.
  rotatoriuManzetesPazeidimas,
  dvigalvioRaumensSausgyslesUzdegimas,
  kalcifikuojantisTendinitas,
  sustingesPetys,
  petiesNestabilumasIrIsnirimai,
  acSanarioTrauma,
  petiesSanarioArtroze,
  // Batch 12: Piotr's nine texts for Kelias and Alkūnė ir riešas (08.11.2026), moved by scripts/import-condition-texts.mjs.
  // The jumper's knee, golfer's elbow and De Quervain pages are also listed in Sausgyslės.
  uzpakalinioKryzminioRaiscioPlysimas,
  kelioLuziai,
  ribotasKelioJudrumas,
  sokejoKelis,
  iliotibialinioTraktoSindromas,
  golfoAlkune,
  alkunesSustingimasPoTraumos,
  deQuervainSindromas,
  riesoSkausmasIrPatempimai,
  // Batch 13: Piotr's nine texts for Klubas ir kirkšnis and Čiurna, pėda ir kulnas (08.11.2026), moved by scripts/import-condition-texts.mjs.
  // Piriformio sindromas is also listed in Plintantis skausmas.
  kluboSanarioArtroze,
  skausmasIrSustingimasPoKluboEndoprotezavimo,
  kirksniesSkausmasSportininkams,
  kluboFaiIrSanarioLuposPlysimas,
  piriformioSindromas,
  ciurnosNestabilumas,
  stresiniaiPedosLuziai,
  ciurnosSanarioArtroze,
  blauzdosSkausmasBegikams,
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
// Every source opens somewhere: a DOI for a study, or the page link (08.11.2026).
for (const p of conditionPages) {
  for (const src of p.sources) {
    if (!src.doi && !src.url) throw new Error(`${p.slug}: source «${src.title}» has neither doi nor url`);
  }
}

for (const s of SECTIONS) {
  for (const t of s.topics) {
    if (t.page && !getConditionPage(t.page)) throw new Error(`sections.ts: «${t.title}» links to missing page ${t.page}`);
  }
  // A section with a page names it by that page's H1 in the «Ką gydome» block.
  if (s.hasPage) {
    const own = getConditionPage(s.slug);
    if (!own) throw new Error(`sections.ts: ${s.slug} has hasPage but no page file`);
    if (s.pageTitle !== own.hero.h1) {
      throw new Error(`sections.ts: ${s.slug} pageTitle «${s.pageTitle}» ≠ page H1 «${own.hero.h1}»`);
    }
  }
}
for (const p of conditionPages) {
  if (p.slug === p.section) continue; // a section's own page
  if (!getSection(p.section).topics.some((t) => t.page === p.slug)) {
    throw new Error(`${p.slug}: its section ${p.section} in sections.ts does not list it`);
  }
}
