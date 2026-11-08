// «Ką gydome»: the 11 sections by body zone and what each one holds, exactly as the table in the
// plan of 07.11.2026 (Claude Doc «reamed.lt: план захвата поиска по кинезитерапии», CLAUDE.md «Правило»),
// with Piotr's revision of the same day: order of the sections and a fuller list of topics in each.
// One source for the home page block, /ka-gydome, the sitemap and the breadcrumbs. Order = order on the site.
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
  /** The section's own page exists (all eleven since batch 7, 07.11.2026). */
  hasPage: boolean;
  /** H1 of the section's own page, the text of its link in the «Ką gydome» block (checked at build). */
  pageTitle?: string;
  priority: 1 | 2 | 3;
  topics: Topic[];
};

const SECTION_LIST = [
  {
    slug: "atsistatymas-po-operaciju",
    name: { lt: "Po operacijų", en: "After surgery" },
    text: {
      lt: "Reabilitacija po operacijų ir lūžių: nuo švelnios pradžios su gipsu ar įtvaru iki grįžimo prie darbo ir sporto.",
      en: "Rehabilitation after surgery and fractures: from a gentle start in a cast or brace to getting back to work and sport.",
    },
    hasPage: true,
    pageTitle: "Reabilitacija po operacijų",
    priority: 1,
    topics: [
      { title: "Ankstyva reabilitacija po operacijos ir imobilizacijos (gipsas, įtvaras)", page: "ankstyva-reabilitacija-po-operacijos" },
      { title: "Po kryžminio raiščio rekonstrukcijos", page: "reabilitacija-po-kryzminio-raiscio-operacijos" },
      { title: "Po menisko operacijos", page: "reabilitacija-po-menisko-operacijos" },
      { title: "Po kelio artroskopijos", page: "reabilitacija-po-kelio-artroskopijos" },
      { title: "Po kelio lūžio operacijos", page: "reabilitacija-po-kelio-luzio-operacijos" },
      { title: "Po peties artroskopijos ir rotatorių manžetės siūlės", page: "reabilitacija-po-peties-artroskopijos" },
      { title: "Po peties stabilizacijos", page: "reabilitacija-po-peties-stabilizacijos" },
      { title: "Po žastikaulio lūžio", page: "reabilitacija-po-zastikaulio-luzio" },
      { title: "Po riešo ir rankos lūžio", page: "reabilitacija-po-rieso-ir-rankos-luzio" },
      { title: "Po klubo artroskopijos", page: "reabilitacija-po-klubo-artroskopijos" },
      { title: "Po čiurnos lūžio ar operacijos", page: "reabilitacija-po-ciurnos-luzio-ar-operacijos" },
      { title: "Po Achilo sausgyslės plyšimo", page: "reabilitacija-po-achilo-sausgysles-plysimo" },
      { title: "Po disko išvaržos operacijos", page: "reabilitacija-po-disko-isvarzos-operacijos" },
      { title: "Po stuburo stabilizacijos", page: "reabilitacija-po-stuburo-stabilizacijos" },
    ],
  },
  {
    slug: "nugaros-skausmas",
    name: { lt: "Nugara", en: "Back" },
    text: {
      lt: "Nugaros skausmas ir įtampa, stuburo išvarža, išialgija ir kitos stuburo problemos.",
      en: "Back pain and tension, disc herniation, sciatica and other spine problems.",
    },
    hasPage: true,
    pageTitle: "Nugaros skausmas",
    priority: 1,
    topics: [
      { title: "Ūmus nugaros skausmas („užstrigo nugara“)", page: "umus-nugaros-skausmas" },
      { title: "Nugaros skausmas ir raumenų įtampa", page: "nugaros-skausmas-ir-raumenu-itampa" },
      { title: "Stuburo išvarža", page: "stuburo-isvarza" },
      { title: "Išialgija ir radikulopatija", page: "isialgija-radikulopatija" },
      { title: "Skausmas nugaros apačioje", page: "skausmas-nugaros-apacioje" },
      { title: "Osteochondrozė", page: "osteochondroze" },
      { title: "Stuburo kanalo stenozė", page: "stuburo-kanalo-stenoze" },
      { title: "Spondilolistezė", page: "spondilolisteze" },
      { title: "Kryžkaulio ir klubo sąnario skausmas", page: "kryzkaulio-ir-klubo-sanario-skausmas" },
      { title: "Skausmas tarp menčių", page: "skausmas-tarp-menciu" },
      { title: "Nugaros skausmas sėdint", page: "nugaros-skausmas-sedint" },
      { title: "Laikysenos problemos", page: "laikysenos-problemos" },
      { title: "Po disko išvaržos operacijos", page: "reabilitacija-po-disko-isvarzos-operacijos" },
      { title: "Po stuburo stabilizacijos", page: "reabilitacija-po-stuburo-stabilizacijos" },
    ],
  },
  {
    slug: "kaklo-skausmas",
    name: { lt: "Kaklas", en: "Neck" },
    text: {
      lt: "Kaklo skausmas ir įtampa, ribotas judrumas, skausmas į ranką ir galvos skausmas dėl kaklo.",
      en: "Neck pain and tension, restricted movement, pain into the arm and headaches coming from the neck.",
    },
    hasPage: true,
    pageTitle: "Kaklo skausmas",
    priority: 1,
    topics: [
      { title: "Kaklo skausmas ir įtampa (cervikalgija)", page: "cervikalgija" },
      { title: "Užstrigęs kaklas", page: "uzstriges-kaklas" },
      { title: "Ribotas kaklo judrumas", page: "ribotas-kaklo-judrumas" },
      { title: "Kaklo osteochondrozė", page: "kaklo-osteochondroze" },
      { title: "Kaklo radikulopatija: skausmas plinta į ranką", page: "kaklo-radikulopatija" },
      { title: "Kaklo trauma po avarijos", page: "kaklo-trauma-po-avarijos" },
      { title: "Įtampos galvos skausmas", page: "itampos-galvos-skausmas" },
      { title: "Galvos skausmas dėl kaklo", page: "galvos-skausmas-del-kaklo" },
    ],
  },
  {
    slug: "peties-problemos",
    name: { lt: "Petys", en: "Shoulder" },
    text: {
      lt: "Peties skausmas, sausgyslių pažeidimai, nestabilumas, sustingimas ir artrozė.",
      en: "Shoulder pain, tendon injuries, instability, stiffness and osteoarthritis.",
    },
    hasPage: true,
    pageTitle: "Peties skausmas",
    priority: 1,
    topics: [
      { title: "Peties skausmas keliant ranką", page: "subakromialinis-skausmo-sindromas" },
      { title: "Subakromialinis skausmo sindromas", page: "subakromialinis-skausmo-sindromas" },
      { title: "Rotatorių manžetės pažeidimas", page: "rotatoriu-manzetes-pazeidimas" },
      { title: "Dvigalvio raumens sausgyslės uždegimas", page: "dvigalvio-raumens-sausgysles-uzdegimas" },
      { title: "Kalcifikuojantis tendinitas", page: "kalcifikuojantis-tendinitas" },
      { title: "Sustingęs petys (adhezinis kapsulitas)", page: "sustinges-petys" },
      { title: "Peties nestabilumas ir išnirimai", page: "peties-nestabilumas-ir-isnirimai" },
      { title: "AC sąnario trauma", page: "ac-sanario-trauma" },
      { title: "Peties sąnario artrozė", page: "peties-sanario-artroze" },
      { title: "Po peties artroskopijos ir rotatorių manžetės siūlės", page: "reabilitacija-po-peties-artroskopijos" },
      { title: "Po peties stabilizacijos", page: "reabilitacija-po-peties-stabilizacijos" },
      { title: "Po žastikaulio lūžio", page: "reabilitacija-po-zastikaulio-luzio" },
    ],
  },
  {
    slug: "alkunes-ir-rieso-skausmas",
    name: { lt: "Alkūnė ir riešas", en: "Elbow and wrist" },
    text: {
      lt: "Alkūnės ir riešo skausmas, sausgyslių perkrovos, sustingimas po lūžių.",
      en: "Elbow and wrist pain, tendon overuse, stiffness after fractures.",
    },
    hasPage: true,
    pageTitle: "Alkūnės ir riešo skausmas",
    priority: 2,
    topics: [
      { title: "Teniso alkūnė", page: "teniso-alkune" },
      { title: "Golfo alkūnė", page: "golfo-alkune" },
      { title: "Alkūnės sustingimas po traumos", page: "alkunes-sustingimas-po-traumos" },
      { title: "De Quervain sindromas", page: "de-quervain-sindromas" },
      { title: "Riešo kanalo sindromas", page: "rieso-kanalo-sindromas" },
      { title: "Riešo skausmas ir patempimai", page: "rieso-skausmas-ir-patempimai" },
      { title: "Po riešo ir rankos lūžio", page: "reabilitacija-po-rieso-ir-rankos-luzio" },
    ],
  },
  {
    slug: "kelio-skausmas",
    name: { lt: "Kelias", en: "Knee" },
    text: {
      lt: "Raiščių ir menisko traumos, lūžiai, ribotas judrumas, perkrovos ir artrozė.",
      en: "Ligament and meniscus injuries, fractures, restricted movement, overuse and osteoarthritis.",
    },
    hasPage: true,
    pageTitle: "Kelio skausmas",
    priority: 1,
    topics: [
      { title: "Priekinio kryžminio raiščio plyšimas", page: "priekinio-kryzminio-raiscio-plysimas" },
      { title: "Užpakalinio kryžminio raiščio plyšimas", page: "uzpakalinio-kryzminio-raiscio-plysimas" },
      { title: "Vidinio šoninio raiščio pažeidimas", page: "vidinio-soninio-raiscio-pazeidimas" },
      { title: "Menisko plyšimas", page: "menisko-plysimas" },
      { title: "Kelio lūžiai", page: "kelio-luziai" },
      { title: "Ribotas kelio judrumas", page: "ribotas-kelio-judrumas" },
      { title: "Patelofemoralinis skausmas (bėgiko kelis)", page: "patelofemoralinis-skausmas" },
      { title: "Šokėjo kelis (girnelės sausgyslės tendinopatija)", page: "sokejo-kelis" },
      { title: "Iliotibialinio trakto sindromas", page: "iliotibialinio-trakto-sindromas" },
      { title: "Kelio artrozė", page: "kelio-artroze" },
      { title: "Po kryžminio raiščio rekonstrukcijos", page: "reabilitacija-po-kryzminio-raiscio-operacijos" },
      { title: "Po menisko operacijos", page: "reabilitacija-po-menisko-operacijos" },
      { title: "Po kelio artroskopijos", page: "reabilitacija-po-kelio-artroskopijos" },
      { title: "Po kelio lūžio operacijos", page: "reabilitacija-po-kelio-luzio-operacijos" },
    ],
  },
  {
    slug: "klubo-ir-kirksnies-skausmas",
    name: { lt: "Klubas ir kirkšnis", en: "Hip and groin" },
    text: {
      lt: "Klubo sąnario ir kirkšnies skausmas, artrozė, sunkumai po endoprotezavimo.",
      en: "Hip joint and groin pain, osteoarthritis, problems after hip replacement.",
    },
    hasPage: true,
    pageTitle: "Klubo ir kirkšnies skausmas",
    priority: 2,
    topics: [
      { title: "Klubo sąnario artrozė" },
      { title: "Skausmas ir sustingimas po klubo endoprotezavimo" },
      { title: "Šoninis klubo skausmas (trochanterinis bursitas)", page: "soninis-klubo-skausmas" },
      { title: "Kirkšnies skausmas sportininkams" },
      { title: "Klubo FAI ir sąnario lūpos plyšimas" },
      { title: "Piriformio sindromas" },
      { title: "Po klubo artroskopijos", page: "reabilitacija-po-klubo-artroskopijos" },
    ],
  },
  {
    slug: "ciurnos-ir-pedos-skausmas",
    name: { lt: "Čiurna, pėda ir kulnas", en: "Ankle, foot and heel" },
    text: {
      lt: "Kulno, pėdos ir čiurnos skausmas, raiščių patempimai, stresiniai lūžiai.",
      en: "Heel, foot and ankle pain, ligament sprains, stress fractures.",
    },
    hasPage: true,
    pageTitle: "Čiurnos, pėdos ir kulno skausmas",
    priority: 2,
    topics: [
      { title: "Plantarinis fascitas", page: "plantarinis-fascitas" },
      { title: "Kulno atauga", page: "kulno-atauga" },
      { title: "Čiurnos patempimas", page: "ciurnos-patempimas" },
      { title: "Čiurnos nestabilumas" },
      { title: "Achilo tendinopatija", page: "achilo-tendinopatija" },
      { title: "Stresiniai pėdos lūžiai" },
      { title: "Čiurnos sąnario artrozė" },
      { title: "Blauzdos skausmas bėgikams" },
      { title: "Po čiurnos lūžio ar operacijos", page: "reabilitacija-po-ciurnos-luzio-ar-operacijos" },
      { title: "Po Achilo sausgyslės plyšimo", page: "reabilitacija-po-achilo-sausgysles-plysimo" },
    ],
  },
  {
    slug: "sporto-traumos",
    name: { lt: "Sporto traumos", en: "Sports injuries" },
    text: {
      lt: "Raumenų ir raiščių traumos, lūžiai, grįžimas į sportą ir traumų prevencija.",
      en: "Muscle and ligament injuries, fractures, return to sport and injury prevention.",
    },
    hasPage: true,
    pageTitle: "Sporto traumos",
    priority: 1,
    topics: [
      { title: "Raumenų patempimai ir plyšimai", page: "raumenu-patempimas" },
      { title: "Šlaunies dvigalvio raumens patempimas", page: "slaunies-dvigalvio-raumens-patempimas" },
      { title: "Pritraukiamųjų raumenų patempimas", page: "pritraukiamuju-raumenu-patempimas" },
      { title: "Blauzdos raumens plyšimas", page: "blauzdos-raumens-plysimas" },
      { title: "Raumens sumušimas" },
      { title: "Raiščių patempimai ir plyšimai" },
      { title: "Lūžiai ir grįžimas į sportą po lūžio" },
      { title: "Stresiniai lūžiai" },
      { title: "Peties išnirimas sportuojant" },
      { title: "Bėgimo traumos" },
      { title: "Grįžimas į sportą po traumos", page: "grizimas-i-sporta-po-traumos" },
      { title: "Traumų prevencija" },
    ],
  },
  {
    slug: "plintantis-skausmas",
    name: { lt: "Plintantis skausmas", en: "Radiating pain" },
    text: {
      lt: "Skausmas, plintantis iš nugaros į koją ar iš kaklo į ranką, tirpimas.",
      en: "Pain spreading from the back into the leg or from the neck into the arm, numbness.",
    },
    hasPage: true,
    pageTitle: "Plintantis skausmas ir tirpimas",
    priority: 3,
    topics: [
      { title: "Skausmas plinta į koją (išialgija)", page: "isialgija-radikulopatija" },
      { title: "Skausmas plinta į ranką iš kaklo", page: "kaklo-radikulopatija" },
      { title: "Tirpsta ranka ar pirštai", page: "tirpsta-ranka" },
      { title: "Riešo kanalo sindromas", page: "rieso-kanalo-sindromas" },
      { title: "Piriformio sindromas" },
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
    pageTitle: "Sausgyslių uždegimas ir tendinopatija",
    priority: 2,
    topics: [
      { title: "Teniso alkūnė", page: "teniso-alkune" },
      { title: "Golfo alkūnė", page: "golfo-alkune" },
      { title: "Šokėjo kelis", page: "sokejo-kelis" },
      { title: "Achilo tendinopatija", page: "achilo-tendinopatija" },
      { title: "Peties sausgyslių tendinopatija", page: "subakromialinis-skausmo-sindromas" },
      { title: "Dvigalvio raumens sausgyslės uždegimas", page: "dvigalvio-raumens-sausgysles-uzdegimas" },
      { title: "Sėdmenų sausgyslių tendinopatija", page: "soninis-klubo-skausmas" },
      { title: "De Quervain sindromas", page: "de-quervain-sindromas" },
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
