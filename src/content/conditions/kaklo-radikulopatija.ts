import type { ConditionPage } from "./types";
import { CERVICAL_RADICULOPATHY_REVIEW, NECK_PAIN_CPG } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 3»). "See a doctor if no better in
// 6–12 weeks" is marked in the doc for Piotr to confirm: a usual criterion, not one the sources state.
export const kakloRadikulopatija: ConditionPage = {
  slug: "kaklo-radikulopatija",
  section: "kaklo-skausmas",
  navTitle: "Kaklo radikulopatija",
  meta: {
    title: "Kaklo radikulopatija ir išvarža: skausmas plinta į ranką | ReaMed",
    description:
      "Skausmas iš kaklo plinta į petį ir ranką, tirpsta pirštai? Kas yra kaklo radikulopatija, kiek trunka ir kaip gydoma be operacijos. Kineziterapija Vilniaus centre.",
  },
  conditionName: "Kaklo radikulopatija",
  hero: {
    h1: "Kaklo radikulopatija: skausmas plinta į ranką",
    lead: "Kaklo radikulopatija yra nervo šaknelės dirginimas kaklo srityje, dažniausiai dėl disko išvaržos ar su amžiumi susiaurėjusios nervo angos. Skausmas, tirpimas ar dilgčiojimas plinta iš kaklo į petį, ranką ir pirštus. Daugumai žmonių būklė pagerėja be operacijos, o kineziterapija padeda mažinti skausmą ir išsaugoti judesį, kol nervas nurimsta.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Iš kaklo stuburo į rankas eina nervų šaknelės. Kai jas dirgina išsikišęs diskas ar kaulinės ataugos, skausmas jaučiamas ne tik kakle, bet ir mentėje, petyje, rankoje; gali tirpti tam tikri pirštai, silpti rankos raumenys. Kartais skausmas sumažėja užsidėjus ranką ant galvos.",
      "Sisteminė apžvalga parodė, kad nepriklausomai nuo gydymo būdo dauguma pacientų laikui bėgant gerėja; nė vienas konservatyvus metodas nebuvo aiškiai pranašesnis už kitus, o kineziterapija trumpuoju laikotarpiu atrodė perspektyviai.",
    ],
  },
  when: {
    items: [
      "Skausmas iš kaklo plinta į mentę, petį ar ranką",
      "Tirpsta ar dilgčioja ranka, pirštai",
      "Ranka silpnesnė, sunkiau suimti daiktus",
      "Skausmas stiprėja pasukus ar atlošus galvą",
      "MRT parodė kaklo išvaržą ir norite suprasti, ką daryti",
    ],
  },
  assess: [
    { lead: "Pirmiausia išklausome:", text: "kur tiksliai plinta skausmas, kas jį didina ir mažina, kaip miegate." },
    { lead: "Tada ištiriame:", text: "rankų jutimą, refleksus ir raumenų jėgą, kaklo judesius, nervų testus." },
    { lead: "Atskiriame", text: "nuo peties, alkūnės ar riešo problemų, kurios gali sukelti panašius simptomus." },
    { lead: "Ir sudarome planą:", text: "padėtys ir judesiai skausmui mažinti, pratimai, kada kreiptis į gydytoją." },
  ],
  services: ["kineziterapija", "manualine-terapija", "osteopatija"],
  treatment: {
    items: [
      { title: "Skausmo mažinimas:", text: "padėtys, švelni kaklo mobilizacija, nervų slydimo pratimai." },
      { title: "Pratimai:", text: "gilieji kaklo raumenys, mentės ir pečių juosta, laikysena." },
      { title: "Kasdienė veikla:", text: "kaip miegoti, dirbti ir vairuoti, kad nervas nurimtų." },
      { title: "Laipsniškas krūvis:", text: "grįžimas prie sporto ir fizinio darbo." },
    ],
    paragraphs: [
      "Ūmiam skausmui sumažinti dažnai pakanka kelių vizitų, bet užsitęsusiai radikulopatijai paprastai reikia 10 ir daugiau vizitų, priklausomai nuo stadijos. Jei per 6–12 savaičių būklė negerėja arba silpsta ranka, siūlome pasitarti su gydytoju.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Silpsta abi rankos ar kojos, sutrinka eisena",
      "Sunku atlikti smulkius judesius, pavyzdžiui, užsisegti sagas",
      "Sutriko šlapinimasis ar tuštinimasis",
      "Greitai silpsta ranka",
      "Skausmas atsirado po traumos arba kartu karščiuojate",
    ],
  },
  team: {
    title: "Su kaklo radikulopatija dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko"],
  },
  faq: [
    {
      q: "Ar kaklo išvarža praeina be operacijos?",
      a: "Dažniausiai simptomai sumažėja per kelias savaites ar mėnesius be operacijos. Operacija svarstoma, kai silpsta ranka, sutrinka eisena ar skausmas nemažėja ilgą laiką.",
    },
    {
      q: "Kodėl tirpsta ranka?",
      a: "Kai dirginama nervo šaknelė kakle, tirpsta ta rankos ir pirštų sritis, kurią tas nervas aprūpina. Tirpimą gali sukelti ir riešo kanalo sindromas, todėl svarbu ištirti.",
    },
    {
      q: "Ar padeda kaklo apykaklė?",
      a: "Trumpam ūmiame periode ji gali palengvinti skausmą, bet ilgai nešioti neverta: kaklui reikia judesio.",
    },
    {
      q: "Kaip miegoti, kai skausmas plinta į ranką?",
      a: "Daugeliui patogiau ant nugaros ar ant sveikojo šono, su žemesne pagalve; skaudančią ranką galima pasidėti ant pagalvės. Per vizitą parenkame jums tinkamą padėtį.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "plintantis-skausmas",
  sources: [CERVICAL_RADICULOPATHY_REVIEW, NECK_PAIN_CPG],
  reviewed: null,
  related: [
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Išialgija ir radikulopatija" },
    { href: "/ka-gydome/cervikalgija", label: "Cervikalgija" },
    { href: "/ka-gydome/plintantis-skausmas", label: "Plintantis skausmas" },
  ],
};
