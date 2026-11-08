import type { ConditionPage } from "./types";
import { ACHILLES_CPG, COOMBES_2010, TENDINOPATHY_NRDP_2021 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 5»).
// Own section Čiurna, pėda ir kulnas (section page since batch 7); also listed in Sausgyslės.
// Search: achilo sausgyslės uždegimas 170, kaip gydyti achilo sausgyslės uždegimą 70.
export const achiloTendinopatija: ConditionPage = {
  slug: "achilo-tendinopatija",
  section: "ciurnos-ir-pedos-skausmas",
  navTitle: "Achilo tendinopatija",
  meta: {
    title: "Achilo sausgyslės uždegimas (tendinopatija): gydymas",
    description:
      "Skauda Achilo sausgyslę ryte ar bėgant? Kodėl tai vadinama tendinopatija, kas padeda, kiek trunka gydymas ir kada skubiai pas gydytoją. Vilniuje, be siuntimo.",
  },
  conditionName: "Achilo sausgyslės tendinopatija",
  hero: {
    h1: "Achilo sausgyslės uždegimas ir tendinopatija",
    lead: "Achilo tendinopatija yra su krūviu susijęs Achilo sausgyslės skausmas ir sustingimas, dažniausiai 2–6 cm virš kulno. Ji dažna bėgikams, bet pasitaiko ir nesportuojantiems žmonėms. Skauda ryte pirmais žingsniais, pradėjus bėgti ar lipant laiptais. Amerikos kineziterapeutų gairės pagrindiniu gydymu laiko laipsniškus blauzdos ir sausgyslės krūvio pratimus.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Achilo sausgyslė jungia blauzdos raumenis su kulnu ir einant bei bėgant atlaiko kelis kartus didesnį nei kūno svoris krūvį. Kai krūvis padidėja greičiau, nei sausgyslė spėja prisitaikyti, pavyzdžiui, staiga padaugėja bėgimo, šuolių ar bėgimo į kalną, ji tampa jautri ir sustingusi. Skausmas gali būti sausgyslės viduryje arba ties jos prisitvirtinimu prie kulno; nuo vietos priklauso, kurie pratimai tinka.",
      "Gydymas dažniausiai trunka bent 12 savaičių, nes sausgyslė prisitaiko lėtai. Gairės rekomenduoja pratimus, kai sausgyslė apkraunama palaipsniui sunkinant, ir skausmo stebėjimą: nedidelis skausmas pratimų metu leidžiamas, jei kitą rytą sausgyslė nebūna labiau sustingusi.",
    ],
  },
  when: {
    items: [
      "Skauda ar stingsta Achilo sausgyslė ryte pirmais žingsniais",
      "Skauda pradėjus bėgti, šokti ar lipant laiptais",
      "Sausgyslė sustorėjusi arba skauda ją suspaudus",
      "Skausmas trunka ilgiau nei kelias savaites",
      "Padidinote bėgimo krūvį, ir sausgyslė pradėjo skaudėti",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kada prasidėjo, kas pasikeitė treniruotėse ar avalynėje, kada skauda labiausiai.",
    },
    {
      lead: "Tada ištiriame:",
      text: "kur tiksliai skauda, sausgyslės storį ir jautrumą, blauzdos jėgą ir ištvermę, šuolius.",
    },
    {
      lead: "Atmetame",
      text: "dalinį ar visišką sausgyslės plyšimą ir kitas kulno skausmo priežastis, pavyzdžiui, plantarinį fascitą.",
    },
    { lead: "Ir sudarome planą:", text: "pratimų programa, bėgimo ir šuolių krūvis, kaip stebėti skausmą." },
  ],
  services: ["kineziterapija", "sporto-reabilitacija"],
  treatment: {
    items: [
      {
        title: "Krūvio keitimas:",
        text: "laikinai mažiname bėgimą, šuolius ir bėgimą į kalną, bet aktyvumo neatsisakome.",
      },
      {
        title: "Blauzdos ir sausgyslės pratimai:",
        text: "lipimas ant pirštų galų lėtai ir su vis didesniu svoriu, tiesia ir sulenkta koja.",
      },
      { title: "Greitis ir šuoliai:", text: "kai sausgyslė atlaiko jėgos pratimus, grąžiname šokinėjimą ir bėgimą." },
      { title: "Grįžimas į sportą:", text: "bėgimo programa, atstumą ir greitį didinant etapais." },
    ],
    paragraphs: [
      "Paprastai reikia ne mažiau kaip 5 vizitų per kelis mėnesius, o tarp jų kasdienių pratimų namuose. Jei skausmas trunka ilgiau nei pusmetį ir nemažėja, kartu su gydytoju aptariame kitus gydymo būdus.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Pajutote lyg smūgį į kulną ar blauzdą ir nebegalite atsistoti ant pirštų galų",
      "Virš kulno sausgyslėje jaučiama įduba",
      "Blauzda ištinusi, karšta ir skauda ramybėje",
      "Sausgyslė parausta, karšta, karščiuojate",
      "Sausgyslę pradėjo skaudėti vartojant antibiotikus, ypač fluorochinolonus",
    ],
  },
  team: {
    title: "Su Achilo sausgysle dirba",
    specialists: ["kotryna-kairyte", "edmundas-zlatkus", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Ar galima bėgti su Achilo tendinopatija?",
      a: "Dažnai taip, sumažinus atstumą ir greitį, jei skausmas bėgant nedidelis ir kitą rytą nestiprėja. Bėgimą į kalną ir šuolius kol kas ribojame.",
    },
    {
      q: "Kodėl skauda ryte?",
      a: "Per naktį sausgyslė sustingsta, todėl pirmi žingsniai būna skausmingiausi; prasivaikščiojus paprastai palengvėja.",
    },
    {
      q: "Ar padeda injekcijos?",
      a: "Tyrimų apžvalga parodė, kad trombocitų plazmos ir kai kurios kitos injekcijos Achilo tendinopatijai nebuvo veiksmingesnės už placebą. Pagrindinis gydymas lieka pratimai.",
    },
    {
      q: "Ar reikia echoskopijos?",
      a: "Dažniausiai ne: tendinopatija nustatoma ištyrus. Echoskopija ar MRT reikalinga, kai įtariamas plyšimas arba gydymas nepadeda.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "tendinopatijos",
  sources: [ACHILLES_CPG, COOMBES_2010, TENDINOPATHY_NRDP_2021],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/tendinopatijos", label: "Sausgyslių uždegimas ir tendinopatija" },
    { href: "/ka-gydome/blauzdos-raumens-plysimas", label: "Blauzdos raumens plyšimas" },
    { href: "/ka-gydome/plantarinis-fascitas", label: "Plantarinis fascitas" },
    { href: "/ka-gydome/grizimas-i-sporta-po-traumos", label: "Grįžimas į sportą po traumos" },
  ],
};
