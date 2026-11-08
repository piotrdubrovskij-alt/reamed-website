import type { ConditionPage } from "./types";
import { CSAW_2018, FROZEN_SHOULDER_REVIEW, SAPS_GUIDELINE } from "./sources";

// Section page «Petys». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 3»).
// Piotr, 07.11: shoulder pain syndromes are mostly his; sports cases after surgery, Kotryna.
export const petiesProblemos: ConditionPage = {
  slug: "peties-problemos",
  section: "peties-problemos",
  navTitle: "Petys",
  topicsTitle: "Su kuo dirbame",
  meta: {
    title: "Peties skausmas: priežastys ir gydymas Vilniuje | ReaMed",
    description:
      "Skauda petį keliant ranką, naktį ar po traumos? Sausgyslių pažeidimai, sustingęs petys, nestabilumas. Kineziterapija Vilniaus centre, be siuntimo ir be eilės.",
  },
  conditionName: "Peties skausmas",
  hero: {
    h1: "Peties skausmas",
    lead: "Peties skausmą dažniausiai sukelia rotatorių manžetės sausgyslių perkrova ar pažeidimas, sustingęs petys, nestabilumas po išnirimo arba sąnario artrozė. Dauguma šių būklių gydomos be operacijos: pratimais, krūvio valdymu ir, jei reikia, manualine terapija. Kineziterapeutas ištiria petį ir kaklą, nes skausmas petyje kartais kyla iš kaklo, ir sudaro planą.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    title: "Kodėl skauda petį",
    paragraphs: [
      "Petys yra judriausias kūno sąnarys, todėl jį daugiausia laiko raumenys ir sausgyslės. Dažniausiai skauda keliant ranką į šoną ar virš galvos, gulint ant to šono, siekiant už nugaros. Vyresniems žmonėms dažnesni sausgyslių pažeidimai, sustingęs petys ir artrozė, jauniems sportuojantiems nestabilumas ir perkrova.",
      "Olandų ortopedų gairės subakromialinį skausmą rekomenduoja pirmiausia gydyti be operacijos, o didelis britų tyrimas parodė, kad dažnai atliekama peties operacija (subakromialinė dekompresija) nebuvo veiksmingesnė už placebo operaciją. Sustingęs petys gydomas kartu su gydytoju: tyrimų apžvalga rodo, kad ankstyva sąnario injekcija kartu su pratimais namuose duoda geriausių rezultatų.",
    ],
  },
  when: {
    items: [
      "Skauda keliant ranką ar siekiant virš galvos",
      "Petį skauda naktį, ypač gulint ant to šono",
      "Sunku apsirengti, užsisegti, susišukuoti",
      "Po kritimo ar traumos petys silpnas, ranka „nekyla“",
      "Petys „išslysta“ ar buvo išniręs",
      "Petys stingsta, judesys mažėja savaitėmis",
    ],
  },
  assess: [
    { lead: "Pirmiausia išklausome:", text: "kaip prasidėjo, ar buvo trauma, kas skausmą didina, kaip miegate." },
    { lead: "Tada ištiriame:", text: "peties judesius ir jėgą, sausgyslių testus, mentės judėjimą, kaklą." },
    { lead: "Peržiūrime tyrimus", text: "(echoskopiją ar MRT, jei turite) ir pasakome, ar jų reikia." },
    { lead: "Ir sudarome planą:", text: "pratimai, krūvio keitimas, kada reikia gydytojo." },
  ],
  services: ["kineziterapija", "manualine-terapija", "sporto-reabilitacija", "pooperacine-reabilitacija"],
  treatment: {
    items: [
      { title: "Pratimai:", text: "rotatorių manžetės ir mentės raumenų stiprinimas, palaipsniui didinant krūvį." },
      { title: "Judesio atkūrimas:", text: "sustingusiam pečiui ir po traumų." },
      { title: "Manualinė terapija:", text: "skausmui mažinti ir judesiui gerinti, kaip pratimų priedas." },
      { title: "Kasdienė veikla ir sportas:", text: "kaip dirbti, miegoti ir treniruotis, kad petys atsigautų." },
    ],
    paragraphs: [
      "Ūmiam skausmui dažnai pakanka kelių vizitų. Ilgiau trunkančioms peties problemoms paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites ir kasdienių pratimų; sustingęs petys atsistato lėčiau, dažnai per mėnesius.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po traumos petys deformuotas, negalite pajudinti rankos",
      "Po traumos staiga nebegalite pakelti rankos",
      "Kairį petį ar ranką skauda kartu su skausmu krūtinėje, dusuliu ar prakaitavimu",
      "Petys karštas, paraudęs, karščiuojate",
      "Ranka tirpsta, šąla ar pabąla",
    ],
  },
  team: {
    title: "Su peties skausmu dirba",
    specialists: ["piotr-dubrovskij", "kotryna-kairyte", "mangirdas-kazacenko"],
    note: "Peties skausmo sindromų atvejais dažniausiai dirba Piotr, po sporto traumų operacijų Kotryna.",
  },
  faq: [
    {
      q: "Kodėl petį skauda naktį?",
      a: "Gulint ant skaudamo šono spaudžiamos sausgyslės ir bursa, be to, naktį skausmas jaučiamas stipriau. Padeda pagalvė po ranka ir gulėjimas ant kito šono; jei naktinis skausmas stiprus ir nepraeina, verta ištirti.",
    },
    {
      q: "Ar dešinio ir kairio peties skausmas skiriasi?",
      a: "Dažniausiai ne: priežastys tos pačios. Tačiau kairio peties skausmas kartu su skausmu krūtinėje ar dusuliu gali būti širdies problema, tada reikia skubios pagalbos.",
    },
    {
      q: "Ar reikia echoskopijos ar MRT?",
      a: "Ne visada. Gairės siūlo tyrimus, jei skausmas trunka ilgiau nei 6 savaites, po traumos ar silpstant rankai.",
    },
    {
      q: "Ar padeda injekcijos?",
      a: "Kai kuriais atvejais, pavyzdžiui, esant sustingusiam pečiui ar ilgai besitęsiančiam skausmui, gydytojas gali pasiūlyti injekciją; ji veikia geriausiai kartu su pratimais.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "peties-problemos",
  sources: [SAPS_GUIDELINE, CSAW_2018, FROZEN_SHOULDER_REVIEW],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/subakromialinis-skausmo-sindromas", label: "Subakromialinis skausmo sindromas" },
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
    { href: "/ka-gydome/atsistatymas-po-operaciju", label: "Reabilitacija po operacijų" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
  ],
};
