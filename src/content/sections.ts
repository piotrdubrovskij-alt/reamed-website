// «Ką gydome»: the 11 sections by body zone and what each one holds, exactly as the table in the
// plan of 07.11.2026 (Claude Doc «reamed.lt: план захвата поиска по кинезитерапии», CLAUDE.md «Правило»).
// One source for the home page block, /ka-gydome, the sitemap and the breadcrumbs. Order = order of the table.
//
// `topics` are the conditions and operations of the section from the table. A topic with `page` links to
// /ka-gydome/<page> (a file in src/content/conditions); without it the topic is shown as text until its
// page is written. An operation sits in «Po operacijų» and again in its body zone.
// Topic names are Lithuanian only for now, like the pages. No long dashes in Lithuanian texts.

export type Topic = { title: string; page?: string };

export type Section = {
  /** /ka-gydome/<slug> */
  slug: string;
  name: { lt: string; en: string };
  text: { lt: string; en: string };
  /** The section's own page exists (the eight older pages; the three new ones are still to be written). */
  hasPage: boolean;
  priority: 1 | 2 | 3;
  topics: Topic[];
};

const SECTION_LIST = [
  {
    slug: "atsistatymas-po-operaciju",
    name: { lt: "Po operacijų", en: "After surgery" },
    text: {
      lt: "Reabilitacija po kelio, peties, čiurnos, klubo ir stuburo operacijų.",
      en: "Rehabilitation after knee, shoulder, ankle, hip and spine surgery.",
    },
    hasPage: true,
    priority: 1,
    topics: [
      { title: "Po PKR rekonstrukcijos" },
      { title: "Po menisko operacijos", page: "reabilitacija-po-menisko-operacijos" },
      { title: "Po kelio artroskopijos" },
      { title: "Po peties artroskopijos ir rotatorių manžetės siūlės" },
      { title: "Po peties stabilizacijos" },
      { title: "Po Achilo sausgyslės plyšimo" },
      { title: "Po čiurnos lūžio ar operacijos" },
      { title: "Po riešo ir rankos lūžio" },
      { title: "Po klubo artroskopijos" },
      { title: "Po disko išvaržos operacijos" },
      { title: "Po stuburo stabilizacijos" },
    ],
  },
  {
    slug: "kelio-skausmas",
    name: { lt: "Kelias", en: "Knee" },
    text: {
      lt: "Raiščių ir menisko traumos, perkrovos, kelio artrozė.",
      en: "Ligament and meniscus injuries, overuse, knee osteoarthritis.",
    },
    hasPage: true,
    priority: 1,
    topics: [
      { title: "Priekinio kryžminio raiščio plyšimas" },
      { title: "Menisko plyšimas" },
      { title: "Po menisko operacijos", page: "reabilitacija-po-menisko-operacijos" },
      { title: "Patelofemoralinis skausmas (bėgiko kelis)" },
      { title: "Girnelės sausgyslės tendinopatija" },
      { title: "Iliotibialinio trakto sindromas" },
      { title: "Kelio raiščių patempimas" },
      { title: "Kelio artrozė" },
    ],
  },
  {
    slug: "peties-problemos",
    name: { lt: "Petys", en: "Shoulder" },
    text: {
      lt: "Peties skausmas, ribotas judesys, išnirimai ir sausgyslių pažeidimai.",
      en: "Shoulder pain, restricted movement, dislocations and tendon injuries.",
    },
    hasPage: true,
    priority: 1,
    topics: [
      { title: "Subakromialinis skausmas" },
      { title: "Rotatorių manžetės pažeidimas" },
      { title: "Sustingęs petys" },
      { title: "Peties išnirimas ir nestabilumas" },
      { title: "AC sąnario trauma" },
      { title: "Kalcifikuojantis tendinitas" },
    ],
  },
  {
    slug: "nugaros-skausmas",
    name: { lt: "Nugara", en: "Back" },
    text: {
      lt: "Nugaros skausmas, stuburo išvarža, išialgija ir kitos stuburo problemos.",
      en: "Back pain, disc herniation, sciatica and other spine problems.",
    },
    hasPage: true,
    priority: 1,
    topics: [
      { title: "Stuburo išvarža", page: "stuburo-isvarza" },
      { title: "Išialgija ir radikulopatija", page: "isialgija-radikulopatija" },
      { title: "Skausmas nugaros apačioje", page: "skausmas-nugaros-apacioje" },
      { title: "Osteochondrozė", page: "osteochondroze" },
      { title: "Ūmus nugaros skausmas („užstrigo nugara“)" },
      { title: "Stuburo kanalo stenozė" },
      { title: "Spondilolistezė" },
      { title: "Kryžkaulio ir klubo sąnario skausmas" },
      { title: "Skausmas tarp mentių" },
      { title: "Nugaros skausmas sėdint" },
      { title: "Laikysena" },
      { title: "Po disko išvaržos operacijos" },
      { title: "Po stuburo stabilizacijos" },
    ],
  },
  {
    slug: "kaklo-skausmas",
    name: { lt: "Kaklas", en: "Neck" },
    text: {
      lt: "Kaklo skausmas, skausmas, plintantis į ranką, ir galvos skausmas dėl kaklo.",
      en: "Neck pain, pain spreading to the arm, and headaches coming from the neck.",
    },
    hasPage: true,
    priority: 1,
    topics: [
      { title: "Cervikalgija" },
      { title: "Kaklo radikulopatija" },
      { title: "Užstrigęs kaklas" },
      { title: "Kaklo trauma po avarijos" },
      { title: "Įtampos galvos skausmas" },
      { title: "Galvos skausmas dėl kaklo" },
    ],
  },
  {
    slug: "sporto-traumos",
    name: { lt: "Sporto traumos", en: "Sports injuries" },
    text: {
      lt: "Raumenų patempimai ir plyšimai, bėgimo traumos, grįžimas į sportą.",
      en: "Muscle strains and tears, running injuries, return to sport.",
    },
    hasPage: true,
    priority: 1,
    topics: [
      { title: "Šlaunies dvigalvio raumens patempimas" },
      { title: "Blauzdos raumens plyšimas" },
      { title: "Bėgimo traumos" },
      { title: "Grįžimas į sportą po traumos" },
    ],
  },
  {
    slug: "tendinopatijos",
    name: { lt: "Sausgyslės", en: "Tendons" },
    text: {
      lt: "Sausgyslių uždegimas ir tendinopatija: skausmas krūvio metu ar po jo.",
      en: "Tendon inflammation and tendinopathy: pain during or after load.",
    },
    hasPage: true,
    priority: 2,
    topics: [
      { title: "Teniso alkūnė" },
      { title: "Achilo tendinopatija" },
      { title: "Girnelės sausgyslės tendinopatija" },
      { title: "Peties sausgyslių tendinopatija" },
    ],
  },
  {
    slug: "alkunes-ir-rieso-skausmas",
    name: { lt: "Alkūnė ir riešas", en: "Elbow and wrist" },
    text: {
      lt: "Alkūnės ir riešo skausmas, sausgyslių perkrovos.",
      en: "Elbow and wrist pain, tendon overuse.",
    },
    hasPage: false,
    priority: 2,
    topics: [
      { title: "Teniso alkūnė" },
      { title: "Golfo alkūnė" },
      { title: "De Quervain sindromas" },
      { title: "Riešo kanalo sindromas" },
    ],
  },
  {
    slug: "klubo-ir-kirksnies-skausmas",
    name: { lt: "Klubas ir kirkšnis", en: "Hip and groin" },
    text: {
      lt: "Klubo ir kirkšnies skausmas, ypač sportuojantiems.",
      en: "Hip and groin pain, especially in people who do sport.",
    },
    hasPage: false,
    priority: 2,
    topics: [
      { title: "Kirkšnies skausmas sportininkams" },
      { title: "Šoninis klubo skausmas" },
      { title: "Klubo FAI ir lūpos plyšimas" },
      { title: "Piriformio sindromas" },
    ],
  },
  {
    slug: "ciurnos-ir-pedos-skausmas",
    name: { lt: "Čiurna ir pėda", en: "Ankle and foot" },
    text: {
      lt: "Kulno, pėdos ir čiurnos skausmas, raiščių patempimai.",
      en: "Heel, foot and ankle pain, ligament sprains.",
    },
    hasPage: false,
    priority: 2,
    topics: [
      { title: "Plantarinis fascitas", page: "plantarinis-fascitas" },
      { title: "Čiurnos patempimas" },
      { title: "Čiurnos nestabilumas" },
      { title: "Achilo tendinopatija" },
      { title: "Blauzdos skausmas bėgikams" },
    ],
  },
  {
    slug: "plintantis-skausmas",
    name: { lt: "Plintantis skausmas", en: "Radiating pain" },
    text: {
      lt: "Skausmas, plintantis į koją ar ranką, tirpimas.",
      en: "Pain spreading to the leg or arm, numbness.",
    },
    hasPage: true,
    priority: 3,
    topics: [
      { title: "Išialgija ir radikulopatija", page: "isialgija-radikulopatija" },
      { title: "Kaklo radikulopatija" },
    ],
  },
] as const satisfies readonly Section[];

export type SectionSlug = (typeof SECTION_LIST)[number]["slug"];

export const SECTIONS: readonly Section[] = SECTION_LIST;

export function getSection(slug: SectionSlug): Section {
  const s = SECTIONS.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown section ${slug}`);
  return s;
}

/** Name of a section and its page address (null while the section has no page). */
export function sectionInfo(slug: SectionSlug): { title: string; href: string | null } {
  const s = getSection(slug);
  return { title: s.name.lt, href: s.hasPage ? `/ka-gydome/${s.slug}` : null };
}
