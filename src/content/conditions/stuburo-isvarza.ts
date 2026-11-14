import type { ConditionPage } from "./types";
import { BACK_PAIN_CPG, BRINJIKJI_2015, CHIU_2015, RASHED_2023 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 1»).
export const stuburoIsvarza: ConditionPage = {
  slug: "stuburo-isvarza",
  section: "nugaros-skausmas",
  navTitle: "Stuburo išvarža",
  meta: {
    title: "Stuburo išvarža: simptomai ir gydymas be operacijos Vilniuje",
    description:
      "Kas yra stuburo (disko) išvarža, kokie jos simptomai, ar ji praeina be operacijos ir kada reikia skubiai pas gydytoją. Kineziterapija Vilniuje, be siuntimo.",
  },
  conditionName: "Stuburo (tarpslankstelinio disko) išvarža",
  hero: {
    h1: "Stuburo išvarža: simptomai ir gydymas",
    lead: "Stuburo išvarža atsiranda, kai tarpslankstelinio disko dalis išsikiša ir dirgina šalia esančią nervo šaknelę. Dažniausiai ji jaučiama kaip juosmens skausmas, plintantis į sėdmenį ir koją. Daugumai žmonių simptomai sumažėja per kelias savaites ar mėnesius be operacijos, o kineziterapija padeda per tą laiką mažinti skausmą ir saugiai grįžti prie darbo ir sporto.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Tarpslankstelinis diskas yra tarsi tvirtas žiedas su minkštesne šerdimi. Su amžiumi ir dėl krūvio žiedas gali įtrūkti, o šerdies dalis išsikišti. Gydytojai išskiria išsipūtimą (protrūziją), išvaržą (ekstruziją) ir atplyšusią disko dalį (sekvestraciją). Dažniausiai išvarža būna juosmens srityje, tarp L4 ir L5 arba L5 ir S1 slankstelių.",
      "Svarbu žinoti: išsikišęs diskas „neiššoka“ ir jo negalima „įstatyti“ atgal. Skausmą dažniausiai sukelia nervo šaknelės dirginimas ir uždegimas, o jie su laiku mažėja.",
    ],
  },
  when: {
    items: [
      "Juosmens skausmas plinta į sėdmenį, šlaunį ar blauzdą",
      "Tirpsta ar dilgčioja blauzda, pėda ar kojos pirštai",
      "Skausmas stiprėja sėdint, pasilenkus, kosint ar čiaudint",
      "Sunku ilgiau sėdėti darbe ar vairuoti",
      "Skausmas nemažėja per 1–2 savaites",
      "Gavote MRT atsakymą ir norite suprasti, ką jis reiškia",
    ],
  },
  assess: [
    { lead: "Pirmiausia išklausome:", text: "kada prasidėjo, kur plinta skausmas, kas jį didina ir mažina." },
    { lead: "Tada ištiriame:", text: "jutimą, refleksus ir kojų raumenų jėgą, stuburo judesius, nervo įtempimo testus." },
    { lead: "Peržiūrime tyrimus,", text: "jei juos turite: MRT ar KT aprašymą ir nuotraukas." },
    { lead: "Ir sudarome planą:", text: "ką daryti dabar, kokie judesiai saugūs ir kada tikėtis pagerėjimo." },
  ],
  assessNote:
    "MRT reikalingas ne visada. Disko išsipūtimas MRT matomas maždaug trečdaliui 20-mečių ir daugiau nei pusei vyresnių žmonių, kuriems visai neskauda, todėl vaizdas be simptomų dar nėra diagnozė. Tyrimas svarbus, kai yra skubaus įvertinimo požymių arba svarstoma operacija.",
  services: ["kineziterapija", "manualine-terapija", "osteopatija", "gydomasis-masazas"],
  treatment: {
    items: [
      { title: "Paaiškiname, kas vyksta.", text: "Kai suprantate, kad judėti saugu, skausmas mažiau riboja kasdienybę." },
      { title: "Pratimai, kurie mažina plintantį skausmą.", text: "Parenkame judesių kryptį ir krūvį pagal tai, kaip reaguoja jūsų simptomai." },
      { title: "Nervo mobilizacija ir liemens raumenų stiprinimas,", text: "kai ūmus skausmas aprimsta." },
      { title: "Manualinė terapija", text: "padeda kai kuriems žmonėms trumpuoju laikotarpiu sumažinti skausmą ir pagerinti judrumą; ją deriname su pratimais, ne vietoje jų." },
      { title: "Laipsniškas grįžimas", text: "prie darbo, vairavimo, sporto." },
    ],
    paragraphs: [
      "Tyrimų duomenimis, išsikišusi disko dalis dažnai pati sumažėja: ekstruzija maždaug 70 %, atplyšusi dalis net 93–96 % atvejų. Kuo didesnė išvarža, tuo dažniau ji mažėja. Dažniausiai pagerėjimą žmonės jaučia per 6–12 savaičių.",
      "Kiek vizitų prireiks, priklauso nuo būklės ir stadijos. Ūmiam skausmui dažnai pakanka kelių vizitų, o užsitęsusiai radikulopatijai reikia ilgesnio ciklo: 10 ir daugiau vizitų. Tikslingam gydymui dažniausiai planuojame bent 5 vizitus.",
      "Jei skausmas nemažėja per 6–12 savaičių arba silpnėja kojos raumenys, rekomenduojame neurochirurgo konsultaciją.",
    ],
  },
  urgent: {
    items: [
      "Sutriko šlapinimasis ar tuštinimasis",
      "Nejaučiate tarpvietės ar vidinės šlaunų pusės",
      "Greitai silpnėja koja ar pėda, sunku atsistoti ant kulnų ar pirštų",
      "Skausmas atsirado po rimtos traumos",
      "Kartu karščiuojate, krenta svoris ar sirgote onkologine liga",
    ],
  },
  team: {
    title: "Su stuburo išvarža dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "kotryna-kairyte", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Ar stuburo išvarža praeina be operacijos?",
      a: "Dažniausiai taip. Daugumai žmonių simptomai sumažėja per kelias savaites ar mėnesius, o išsikišusi disko dalis dažnai pati sumažėja. Operacija svarstoma, kai sutrinka šlapinimasis, progresuoja raumenų silpnumas arba skausmas nemažėja nepaisant gydymo.",
    },
    {
      q: "Ar su išvarža reikia gulėti lovoje?",
      a: "Ne. Ilgas gulėjimas nepadeda. Geriau judėti tiek, kiek leidžia skausmas, ir vengti tik to, kas stipriai didina plintantį skausmą.",
    },
    { q: "Ar galima sportuoti?", a: "Dažniausiai galima, tik krūvį reikia parinkti. Planą sudarome pagal jūsų sportą ir simptomus." },
    {
      q: "Ar manualinė terapija „įstato“ diską?",
      a: "Ne. Diskas neiššoka ir neįstatomas. Manualinė terapija gali sumažinti skausmą ir pagerinti judrumą, o ilgalaikį rezultatą duoda pratimai ir laipsniškas krūvis.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
    { q: "Ką atsinešti?", a: "MRT ar KT aprašymą ir nuotraukas, gydytojų išrašus, jei jų turite." },
  ],
  reviews: "nugaros-skausmas",
  sources: [BACK_PAIN_CPG, CHIU_2015, RASHED_2023, BRINJIKJI_2015],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Radikulopatija ir išialgija" },
    { href: "/ka-gydome/skausmas-nugaros-apacioje", label: "Skausmas nugaros apačioje" },
    { href: "/ka-gydome/nugaros-skausmas", label: "Nugaros skausmas" },
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Reabilitacija po operacijų" },
  ],
};
