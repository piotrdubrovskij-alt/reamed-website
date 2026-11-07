import type { ConditionPage } from "./types";
import { HEEL_CPG, RIEL_2025 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 1»).
// Shockwave therapy is not mentioned until the clinic has it.
export const plantarinisFascitas: ConditionPage = {
  slug: "plantarinis-fascitas",
  section: "ciurnos-ir-pedos-skausmas",
  navTitle: "Plantarinis fascitas",
  meta: {
    title: "Plantarinis fascitas ir kulno skausmas: gydymas Vilniuje | ReaMed",
    description:
      "Skauda kulną rytais ar po bėgimo? Plantarinis (padų) fascitas: priežastys, pratimai, įklotai, teipavimas ir kineziterapija Vilniaus centre. Siuntimo nereikia.",
  },
  conditionName: "Plantarinis fascitas (kulno skausmas)",
  hero: {
    h1: "Plantarinis fascitas: kai skauda kulną",
    lead: "Plantarinis fascitas yra dažniausia kulno skausmo priežastis. Skausmas jaučiamas kulno apačioje, ypač pirmais žingsniais ryte ar atsistojus po sėdėjimo. Jis kyla, kai padų fascija perkraunama: daug stovint, bėgant, padidėjus svoriui ar staiga pakeitus avalynę. Daugumai žmonių padeda gydymas be operacijos: pratimai, krūvio pritaikymas, teipavimas ir įklotai.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Padų fascija yra tvirta jungiamojo audinio juosta nuo kulno iki pirštų, kuri palaiko pėdos skliautą. Kai krūvis viršija tai, ką audinys spėja atlaikyti, prie kulno atsiranda jautrumas ir skausmas. Nors pavadinime yra „itas“, ilgiau trunkant tai dažniau yra perkrovos, o ne uždegimo būklė.",
      "Kulno atauga rentgene dažnai randama ir žmonėms be skausmo, todėl ji ne visada yra skausmo priežastis ir jos pašalinti dažniausiai nereikia.",
    ],
  },
  when: {
    items: [
      "Skauda kulno apačią pirmais žingsniais ryte",
      "Skausmas grįžta atsistojus po sėdėjimo",
      "Skausmas stiprėja po bėgimo, ilgo stovėjimo ar vaikščiojimo",
      "Sunku bėgioti ar sportuoti kaip anksčiau",
      "Skausmas trunka ilgiau nei 2–3 savaites",
    ],
  },
  assess: [
    { lead: "Pirmiausia išklausome:", text: "kada skauda, kiek stovite ar bėgate, kokią avalynę dėvite, ar keitėsi krūvis." },
    { lead: "Tada ištiriame:", text: "pėdos ir čiurnos judrumą, blauzdos raumenų jėgą ir ilgį, eiseną, jautrius taškus." },
    { lead: "Atskiriame", text: "nuo kitų kulno skausmo priežasčių: Achilo sausgyslės, nervo dirginimo, nuovargio lūžio." },
    { lead: "Ir sudarome planą:", text: "kaip sumažinti skausmą dabar ir kaip grįžti prie bėgimo ar darbo." },
  ],
  services: ["kineziterapija", "sporto-reabilitacija", "manualine-terapija", "gydomasis-masazas"],
  treatment: {
    intro: "Gydymą renkamės pagal klinikines rekomendacijas:",
    items: [
      { title: "Krūvio pritaikymas:", text: "kiek ir kaip stovėti, bėgti, kokią avalynę rinktis." },
      { title: "Pratimai:", text: "padų fascijos ir blauzdos tempimas, laipsniški jėgos pratimai pėdai ir blauzdai." },
      { title: "Teipavimas", text: "trumpam sumažina skausmą einant ir sportuojant." },
      { title: "Įklotai ir naktiniai įtvarai", text: "padeda daliai žmonių, ypač jei labiausiai skauda ryte." },
      { title: "Manualinė terapija:", text: "pėdos sąnarių ir minkštųjų audinių mobilizacija skausmui mažinti." },
    ],
    paragraphs: [
      "Daugumai žmonių skausmas sumažėja per kelis mėnesius, bet kartais užtrunka ir iki metų. Kuo anksčiau pradedama, tuo greičiau grįžtama prie veiklos. Jei skausmas nemažėja per kelis mėnesius, kitas galimybes aptariame su gydytoju ortopedu.",
    ],
  },
  urgent: {
    note: "Šiais atvejais kreipkitės į gydytoją.",
    items: [
      "Kulnas ar pėda staiga patino, paraudo, yra karšti",
      "Skausmas atsirado po kritimo ar šuolio",
      "Negalite atsiremti ant kojos",
      "Tirpsta ar dega visa pėda",
      "Karščiuojate",
    ],
  },
  team: {
    title: "Su kulno skausmu dirba",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "edmundas-zlatkus", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Kodėl labiausiai skauda ryte?",
      a: "Naktį fascija ir blauzdos raumenys trumpėja, o pirmi žingsniai juos staiga ištempia. Todėl padeda keli tempimo judesiai prieš atsistojant.",
    },
    {
      q: "Ar galima bėgioti?",
      a: "Dažnai galima, sumažinus apimtį ir greitį. Krūvį parenkame pagal skausmą: jis neturėtų stiprėti kitą rytą.",
    },
    {
      q: "Ar reikia individualių įklotų?",
      a: "Ne visada. Daugeliui pakanka paruoštų įklotų ir tinkamos avalynės; individualius rekomenduojame tik esant aiškiai priežasčiai.",
    },
    { q: "Ar kulno ataugą reikia operuoti?", a: "Dažniausiai ne. Atauga pati savaime retai būna skausmo priežastis." },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  sources: [HEEL_CPG, RIEL_2025],
  reviewed: null,
  related: [
    { href: "/ka-gydome/tendinopatijos", label: "Sausgyslių uždegimas ir tendinopatijos" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
