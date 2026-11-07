import type { ConditionPage } from "./types";
import { HEEL_CPG, KIRKPATRICK_2017 } from "./sources";

// Draft of 08.11.2026, waiting for Piotr's review (Claude Doc «Пачка 8»).
// Section «Čiurna, pėda ir kulnas». Search: kulno skausmas 480, kulno atauga 110.
// Insoles are «įklotai» here, «įtvaras» only for a night splint (CLAUDE.md).
export const kulnoAtauga: ConditionPage = {
  slug: "kulno-atauga",
  section: "ciurnos-ir-pedos-skausmas",
  navTitle: "Kulno atauga",
  meta: {
    title: "Kulno atauga (spuras): ar ji skauda ir kaip gydoma | ReaMed",
    description:
      "Rentgene rado kulno ataugą ir skauda kulną? Kodėl atauga dažnai nėra skausmo priežastis, kas padeda ir kada reikia operacijos. Kineziterapija Vilniaus centre be siuntimo.",
  },
  conditionName: "Kulno atauga",
  hero: {
    h1: "Kulno atauga",
    lead: "Kulno atauga yra nedidelė kaulinė atauga kulnakaulio apačioje, kurią dažnai randa rentgene skaudant kulną. Ji dažnai būna ir žmonėms, kuriems kulno visai neskauda, o skausmą dažniausiai sukelia padų fascijos perkrova (plantarinis fascitas). Todėl gydome ne ataugą, o fasciją ir pėdą: pratimais, krūvio pritaikymu ir kitomis priemonėmis be operacijos.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Atauga formuojasi ilgainiui ten, kur prie kulnakaulio tvirtinasi padų fascija ir trumpieji pėdos raumenys. Anatomų apžvalga nurodo, kad ji dažniau randama vyresniems žmonėms, turintiems didesnį kūno svorį, sergantiems plantariniu fascitu ar artritu. Ar pati atauga sukelia skausmą, iki šiol ginčijamasi.",
      "Dažniausiai skauda kulno apačią pirmais žingsniais ryte ar atsistojus po sėdėjimo, o išsivaikščiojus palengvėja. Tai būdingi plantarinio fascito požymiai, ir juos gydome pagal kineziterapeutų kulno skausmo gaires.",
    ],
  },
  when: {
    items: [
      "Rentgene rado kulno ataugą ir skauda kulną",
      "Skauda kulno apačią pirmais žingsniais ryte",
      "Skauda ilgai stovint ar vaikščiojant, ypač ant kieto paviršiaus",
      "Skausmas trunka kelias savaites ar mėnesius",
      "Svarstote apie operaciją ar procedūras ir norite pirmiausia išbandyti pratimus",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kada ir kur skauda, kiek stovite ir vaikštote, kokią avalynę dėvite, ar sportuojate." },
    { lead: "Peržiūrime tyrimus", text: "ir paaiškiname, ką reiškia atauga rentgene." },
    { lead: "Tada ištiriame:", text: "kur tiksliai skauda, pėdos ir blauzdos judrumą bei jėgą, eiseną." },
    { lead: "Ir sudarome planą:", text: "pratimai, krūvio pritaikymas, avalynė ir kitos priemonės." },
  ],
  services: ["kineziterapija", "manualine-terapija"],
  treatment: {
    intro: "Gydymą renkamės pagal klinikines rekomendacijas:",
    items: [
      { title: "Krūvio pritaikymas:", text: "kiek ir kaip stovėti, vaikščioti, bėgti, kokią avalynę rinktis." },
      { title: "Pratimai:", text: "padų fascijos ir blauzdos tempimas, laipsniški jėgos pratimai pėdai ir blauzdai." },
      { title: "Teipavimas", text: "trumpam sumažina skausmą einant ir sportuojant." },
      { title: "Įklotai ir naktiniai įtvarai", text: "padeda daliai žmonių, ypač jei labiausiai skauda ryte." },
      { title: "Manualinė terapija:", text: "pėdos sąnarių ir minkštųjų audinių mobilizacija skausmui mažinti." },
    ],
    paragraphs: [
      "Daugumai žmonių skausmas sumažėja per kelis mėnesius. Paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites ir kasdienių pratimų namuose. Jei skausmas nemažėja per kelis mėnesius, kitas galimybes aptariame su gydytoju ortopedu.",
    ],
  },
  urgent: {
    note: "Šiais atvejais pirmiausia kreipkitės į gydytoją.",
    items: [
      "Kulną pradėjo skaudėti po kritimo ar šuolio",
      "Kulnas tinsta, parausta ir karštas, karščiuojate",
      "Skauda ir ramybėje, naktį, skausmas nemažėja",
      "Tirpsta ar dilgčioja pėda",
      "Skauda abu kulnus, kartu skauda kitus sąnarius ar nugarą rytais",
    ],
  },
  team: {
    title: "Su kulno skausmu dirba",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "edmundas-zlatkus", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Ar kulno ataugą reikia operuoti?",
      a: "Dažniausiai ne. Atauga dažnai būna ir be skausmo, o skausmą paprastai sukelia padų fascija, kuri gydoma be operacijos.",
    },
    {
      q: "Ar atauga išnyks?",
      a: "Ne, kaulinė atauga dažniausiai lieka. Bet skausmas gali visiškai praeiti ir su ja.",
    },
    {
      q: "Kokius batus rinktis?",
      a: "Su minkštu, amortizuojančiu padu ir šiek tiek pakeltu kulnu. Ilgai nevaikščiokite basomis ar plokščiais batais ant kieto paviršiaus, kol skauda.",
    },
    {
      q: "Ar reikia rentgeno?",
      a: "Dažniausiai ne: kulno skausmą atpažįstame ištyrę. Rentgenas ataugą parodys, bet gydymo dažniausiai nepakeičia.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  sources: [KIRKPATRICK_2017, HEEL_CPG],
  reviewed: null,
  related: [
    { href: "/ka-gydome/plantarinis-fascitas", label: "Plantarinis fascitas" },
    { href: "/ka-gydome/ciurnos-ir-pedos-skausmas", label: "Čiurnos, pėdos ir kulno skausmas" },
    { href: "/ka-gydome/achilo-tendinopatija", label: "Achilo tendinopatija" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
  ],
};
