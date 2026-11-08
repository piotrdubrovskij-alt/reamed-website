import type { ConditionPage } from "./types";
import { CTS_CPG, CTS_MANUAL_VS_SURGERY, PADUA_2016 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 5»).
// Own section Alkūnė ir riešas (section page since batch 7); also listed in Plintantis skausmas.
// Search: riešo kanalo sindromas 480. «Įtvaras», never «įdėklas» (Piotr, 07.11).
export const riesoKanaloSindromas: ConditionPage = {
  slug: "rieso-kanalo-sindromas",
  section: "alkunes-ir-rieso-skausmas",
  navTitle: "Riešo kanalo sindromas",
  meta: {
    title: "Riešo kanalo sindromas: tirpsta pirštai naktį, gydymas",
    description:
      "Tirpsta nykštys, smilius ir didysis pirštas, ypač naktį? Riešo kanalo sindromas: kaip atpažinti, kas padeda be operacijos ir kada reikia chirurgo. Be siuntimo.",
  },
  conditionName: "Riešo kanalo sindromas",
  hero: {
    h1: "Riešo kanalo sindromas",
    lead: "Riešo kanalo sindromas yra dažniausias periferinio nervo suspaudimas: riešo kanale spaudžiamas vidurinis nervas. Nykštys, smilius, didysis ir dalis bevardžio piršto tirpsta ar dilgčioja, dažnai naktį ar ryte, o ilgainiui gali silpti suėmimas. Lengvesniais ir vidutiniais atvejais padeda gydymas be operacijos: naktinis riešo įtvaras, manualinė terapija ir pratimai.",
    specialist: "erikas-jatkauskas",
  },
  about: {
    paragraphs: [
      "Riešo kanalas yra siauras tarpas tarp riešo kaulų ir raiščio, kuriuo eina pirštų lenkiamųjų raumenų sausgyslės ir vidurinis nervas. Kai spaudimas kanale padidėja, pavyzdžiui, ilgai laikant riešą sulenktą, dirbant vibruojančiais įrankiais, nėštumo metu ar sergant cukriniu diabetu, nervas pradeda blogiau veikti. Mažasis pirštas paprastai netirpsta: jį aprūpina kitas nervas.",
      "Diagnozė dažniausiai nustatoma pagal simptomus ir ištyrimą, o elektroneuromiografija (ENMG) parodo, kiek pažeistas nervas, ir padeda nuspręsti dėl operacijos. Ispanų tyrime moterims, kurioms taikyta 3 vizitų manualinės terapijos programa, po 1 ir 3 mėnesių skausmas ir funkcija buvo geresni nei po operacijos, o po 6 ir 12 mėnesių rezultatai buvo panašūs.",
    ],
  },
  when: {
    items: [
      "Tirpsta ar dilgčioja nykštys, smilius ar didysis pirštas",
      "Ranka nutirpsta naktį, ir tenka ją papurtyti",
      "Tirpsta vairuojant, laikant telefoną ar knygą",
      "Iš rankų krenta daiktai, sunku užsisegti sagas",
      "Simptomai kartojasi kelias savaites ar ilgiau",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kurie pirštai tirpsta, kada, ar tirpimas pažadina naktį, koks jūsų darbas.",
    },
    {
      lead: "Tada ištiriame:",
      text: "jutimą pirštuose, nykščio raumenų jėgą, riešo provokacijos testus, kaklą ir visą nervo kelią.",
    },
    {
      lead: "Atskiriame",
      text: "nuo kaklo radikulopatijos ir alkūninio nervo suspaudimo, kurie sukelia panašų tirpimą.",
    },
    {
      lead: "Ir sudarome planą:",
      text: "įtvaras, pratimai, darbo įpročiai; jei reikia, siūlome ENMG ar chirurgo konsultaciją.",
    },
  ],
  services: ["kineziterapija", "manualine-terapija"],
  treatment: {
    items: [
      { title: "Naktinis riešo įtvaras:", text: "laiko riešą tiesų, kad nervas naktį būtų mažiau spaudžiamas." },
      {
        title: "Manualinė terapija:",
        text: "riešo, dilbio ir kaklo audinių mobilizacija, nervų jautrumą mažinantys judesiai.",
      },
      {
        title: "Nervų ir sausgyslių slydimo pratimai:",
        text: "švelnūs judesiai, kurie gerina nervo judėjimą kanale.",
      },
      { title: "Darbo įpročiai:", text: "riešo padėtis dirbant, pertraukos, suėmimo jėga." },
    ],
    paragraphs: [
      "Lengvesniais atvejais dažnai pakanka kelių vizitų ir naktinio įtvaro. Jei tirpsta nuolat, silpsta nykščio raumenys ar gydymas per kelias savaites nepadeda, siūlome ENMG ir chirurgo konsultaciją.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Staiga nutirpo ranka ir veidas, sunku kalbėti ar nusišypsoti: skubiai kvieskite 112",
      "Po riešo traumos ar lūžio greitai stiprėja tirpimas ir skausmas",
      "Nykščio raumenys akivaizdžiai suplonėjo, ranka labai nusilpo",
    ],
  },
  team: {
    title: "Su riešo ir rankos tirpimu dirba",
    specialists: ["erikas-jatkauskas", "piotr-dubrovskij", "mangirdas-kazacenko"],
  },
  faq: [
    {
      q: "Kodėl ranka tirpsta naktį?",
      a: "Miegant riešas dažnai būna sulenktas, todėl spaudimas kanale padidėja. Naktinis įtvaras laiko riešą tiesų ir dažnai sumažina naktinį tirpimą.",
    },
    {
      q: "Ar reikia operacijos?",
      a: "Ne visada. Operacija svarstoma, kai nervas aiškiai pažeistas, silpsta raumenys arba gydymas be operacijos nepadeda. Sprendimą priima chirurgas, įvertinęs ENMG.",
    },
    {
      q: "Ar tai gali būti iš kaklo?",
      a: "Taip, kaklo radikulopatija gali sukelti panašų tirpimą. Kartais būna abu iš karto, todėl tiriame ir kaklą.",
    },
    {
      q: "Ar padeda pratimai?",
      a: "Nervų ir sausgyslių slydimo pratimai bei manualinė terapija gali sumažinti simptomus, ypač kartu su naktiniu įtvaru. Kuriuos daryti, parodome per vizitą.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  sources: [CTS_CPG, PADUA_2016, CTS_MANUAL_VS_SURGERY],
  reviewed: { by: "mangirdas-kazacenko", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/tirpsta-ranka", label: "Tirpsta ranka ar pirštai" },
    { href: "/ka-gydome/kaklo-radikulopatija", label: "Kaklo radikulopatija" },
    { href: "/ka-gydome/teniso-alkune", label: "Teniso alkūnė" },
    { href: "/ka-gydome/plintantis-skausmas", label: "Plintantis skausmas ir tirpimas" },
  ],
};
