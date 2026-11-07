import type { ConditionPage } from "./types";
import { PFP_CPG } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 2»).
// Piotr, 07.11: «įtvaras», never «įdėklas».
export const patelofemoralinisSkausmas: ConditionPage = {
  slug: "patelofemoralinis-skausmas",
  section: "kelio-skausmas",
  navTitle: "Patelofemoralinis skausmas (bėgiko kelis)",
  meta: {
    title: "Bėgiko kelis (patelofemoralinis skausmas): pratimai ir gydymas | ReaMed",
    description:
      "Skauda aplink girnelę lipant laiptais, tupiant, bėgant ar ilgai sėdint? Kas yra patelofemoralinis skausmas ir kokie pratimai padeda. Kineziterapija Vilniuje, be siuntimo.",
  },
  conditionName: "Patelofemoralinis skausmo sindromas",
  hero: {
    h1: "Patelofemoralinis skausmas (bėgiko kelis)",
    lead: "Patelofemoralinis skausmas yra skausmas kelio priekyje, aplink ar po girnele, kuris stiprėja lipant laiptais, tupiant, bėgant, šokinėjant ar ilgai sėdint sulenktais keliais. Tai viena dažniausių kelio skausmo priežasčių bėgikams ir jauniems aktyviems žmonėms. Gydymo pagrindas yra klubo ir kelio raumenų pratimai bei krūvio valdymas.",
    specialist: "erikas-jatkauskas",
  },
  about: {
    paragraphs: [
      "Skausmą sukelia girnelės ir šlaunikaulio sąnario perkrova: kai krūvis, pavyzdžiui, bėgimo apimtis ar laiptų kiekis, padidėja greičiau, nei audiniai spėja prisitaikyti. Diagnozei vaizdinių tyrimų dažniausiai nereikia: ji nustatoma pagal simptomus ir apžiūrą.",
      "Amerikos kineziterapeutų klinikinės gairės rekomenduoja pratimus klubo ir kelio raumenims kaip pagrindinį gydymą; teipavimas gali padėti trumpam, kartu su pratimais. Skausmas gali kartotis ir užsitęsti metams, todėl svarbu ne tik jį numalšinti, bet ir išmokti valdyti krūvį.",
    ],
  },
  when: {
    items: [
      "Skauda aplink girnelę lipant laiptais, ypač žemyn",
      "Skauda tupiant ar atsistojant iš žemos kėdės",
      "Kelį skauda ilgai sėdint, pavyzdžiui, kine ar automobilyje",
      "Skauda bėgant, ypač nuokalnėn",
      "Skausmas kartojasi kas kelis mėnesius",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kada skauda ir kaip keitėsi bėgimo ar treniruočių krūvis." },
    { lead: "Tada ištiriame:", text: "kelio ir girnelės judesius, klubo ir šlaunies raumenų jėgą, pritūpimo ir nusileidimo techniką, pėdas." },
    { lead: "Paaiškiname,", text: "kodėl skauda ir ko kol kas vengti." },
    { lead: "Ir sudarome planą:", text: "pratimai, krūvio keitimas ir grįžimas prie bėgimo." },
  ],
  services: ["kineziterapija", "sporto-reabilitacija"],
  treatment: {
    items: [
      { title: "Krūvio valdymas:", text: "laikinai sumažiname tai, kas labiausiai provokuoja skausmą, bet nesustojame judėti." },
      { title: "Pratimai:", text: "klubo ir kelio raumenų stiprinimas, palaipsniui sunkėjantys pratimai." },
      { title: "Judesio technika:", text: "pritūpimas, nusileidimas, bėgimo įpročiai." },
      { title: "Trumpalaikė pagalba:", text: "kinezioteipavimas ar įtvaras, jei tinka." },
    ],
    paragraphs: [
      "Pratimų programos tyrimuose dažniausiai trunka 6–12 savaičių. Paprastai reikia ne mažiau kaip 5 vizitų ir reguliarių pratimų namuose; jei skausmas ūmus ir trumpalaikis, gali pakakti kelių vizitų.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Kelis staiga stipriai patino be aiškios priežasties, yra karštas ir paraudęs",
      "Karščiuojate ir skauda kelį",
      "Po traumos negalite atsiremti į koją arba girnelė išnirusi",
    ],
  },
  team: {
    title: "Su patelofemoraliniu skausmu dirba",
    specialists: ["erikas-jatkauskas", "kotryna-kairyte", "edmundas-zlatkus"],
  },
  faq: [
    {
      q: "Ar galima bėgti, kai skauda girnelę?",
      a: "Dažnai galima, sumažinus atstumą, greitį ar nuokalnes. Jei skausmas bėgant didėja ar laikosi kitą dieną, krūvį reikia mažinti.",
    },
    {
      q: "Kokie pratimai padeda?",
      a: "Sėdmenų, klubo ir keturgalvio raumenų stiprinimo pratimai. Kuriuos ir kokiu krūviu daryti, parenkame ištyrę.",
    },
    {
      q: "Ar reikia MRT ar rentgeno?",
      a: "Dažniausiai ne: patelofemoralinis skausmas nustatomas pagal simptomus ir apžiūrą.",
    },
    {
      q: "Ar padeda kelio įtvaras ar teipas?",
      a: "Trumpam teipas ar įtvaras gali sumažinti skausmą, bet pagrindinis gydymas yra pratimai.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "kelio-skausmas",
  sources: [PFP_CPG],
  reviewed: null,
  related: [
    { href: "/ka-gydome/kelio-skausmas", label: "Kelio skausmas" },
    { href: "/ka-gydome/menisko-plysimas", label: "Menisko plyšimas" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
