import type { ConditionPage } from "./types";
import { ACP_LBP_2017, BACK_PAIN_CPG, LBP_LANCET_2018, LBP_PROGNOSIS_2012 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 7»).
// Section «Nugara», topic «Ūmus nugaros skausmas („užstrigo nugara“)». Search: lumbago 140, staigus nugaros skausmas 70.
// Piotr, 07.11: acute periods are his; an acute case usually needs only a few visits.
export const umusNugarosSkausmas: ConditionPage = {
  slug: "umus-nugaros-skausmas",
  section: "nugaros-skausmas",
  navTitle: "Ūmus nugaros skausmas",
  meta: {
    title: "Užstrigo nugara: ūmus nugaros skausmas, ką daryti | ReaMed",
    description:
      "Staiga užstrigo nugara, sunku išsitiesti ar atsikelti? Ką daryti pirmomis dienomis, per kiek laiko praeina ir kada skubiai pas gydytoją. Vilniuje, be siuntimo.",
  },
  conditionName: "Ūmus juosmens skausmas (lumbago)",
  hero: {
    h1: "Užstrigo nugara: ūmus nugaros skausmas",
    lead: "Ūmus nugaros skausmas, liaudiškai „užstrigo nugara“ arba lumbago, dažniausiai prasideda staiga: pasilenkus, pakėlus ar pasisukus. Skauda stipriai, sunku išsitiesti, bet dažniausiai tai nėra pavojinga, o skausmas labiausiai sumažėja per pirmąsias 6 savaites. Svarbiausia likti aktyviems ir judėti tiek, kiek leidžia skausmas. Kineziterapeutas padeda greičiau sumažinti skausmą ir išmokyti, kaip judėti.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Dažniausiai ūmus nugaros skausmas yra nespecifinis: dirginami stuburo sąnariai, raiščiai, raumenys ar diskas, bet tikslios vietos nustatyti nepavyksta, ir to nereikia. Skausmas gali būti labai stiprus, nors rimtos žalos nėra. Pavojingos priežastys retos; jas atskiriame pagal pavojaus ženklus.",
      "Metaanalizė, apėmusi 33 tyrimų grupes ir daugiau kaip 11 000 žmonių, parodė, kad ūmus nugaros skausmas labiausiai sumažėja per pirmąsias 6 savaites: vidutiniškai nuo 52 iki 23 balų iš 100. Vėliau gerėjimas lėtesnis, o po metų dalis žmonių vis dar jaučia nedidelį skausmą.",
      "Amerikos gydytojų kolegija ūmiam nugaros skausmui pirmiausia rekomenduoja gydymą be vaistų: šilumą, masažą, akupunktūrą ar stuburo manipuliacijas. Lancet apžvalga pabrėžia, kad gulėti lovoje ir be pavojaus ženklų daryti vaizdinius tyrimus nereikia: svarbiau paaiškinti, kas vyksta, ir likti aktyviems.",
    ],
  },
  when: {
    items: [
      "Staiga užstrigo nugara pasilenkus, pakėlus ar pasisukus",
      "Sunku išsitiesti, atsikelti iš lovos ar nuo kėdės",
      "Skauda juosmenį, kartais skausmas plinta į sėdmenį",
      "Bijote judėti, nes skauda",
      "Nugara užstringa kelis kartus per metus",
    ],
  },
  assess: [
    { lead: "Pirmiausia patikriname,", text: "ar nėra pavojaus ženklų, dėl kurių reikia gydytojo." },
    {
      lead: "Tada ištiriame:",
      text: "kaip judate, kokie judesiai ir padėtys skausmą didina ar mažina, ar skausmas neplinta į koją.",
    },
    { lead: "Paaiškiname,", text: "kas vyksta ir kodėl skausmas nepavojingas, kad nebijotumėte judėti." },
    {
      lead: "Ir sudarome planą:",
      text: "ką daryti namuose, kaip miegoti, sėdėti, dirbti ir kada grįžti prie sporto.",
    },
  ],
  services: ["kineziterapija", "manualine-terapija", "gydomasis-masazas"],
  treatment: {
    items: [
      { title: "Skausmo mažinimas:", text: "manualinė terapija, minkštųjų audinių technikos, šiluma." },
      { title: "Judesys:", text: "padėtys ir švelnūs judesiai, kurie mažina skausmą, vaikščiojimas." },
      {
        title: "Mokymas:",
        text: "kaip keltis iš lovos, sėdėti, kelti daiktus ir dirbti, kad skausmas mažėtų.",
      },
      {
        title: "Kad nesikartotų:",
        text: "liemens ir klubų raumenų pratimai, kai ūmus skausmas praeina.",
      },
    ],
    paragraphs: [
      "Ūmiam skausmui dažniausiai užtenka kelių vizitų. Jei skausmas kartojasi ar trunka ilgiau nei 6 savaites, gydymas užtrunka ilgiau ir daugiau dėmesio skiriame pratimams.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Sutriko šlapinimasis ar tuštinimasis, nutirpo tarpvietė",
      "Silpsta koja ar pėda, sunku stovėti ant pirštų ar kulnų",
      "Nugarą skauda po kritimo ar traumos",
      "Karščiuojate arba be priežasties krenta svoris",
      "Esate sirgę onkologine liga",
      "Skausmas stiprus ramybėje ir naktį, nemažėja keičiant padėtį",
    ],
  },
  team: {
    title: "Su ūmiu nugaros skausmu dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "erikas-jatkauskas"],
    note: "Ūmius nugaros skausmus dažniausiai gydo Piotr.",
  },
  faq: [
    {
      q: "Ką daryti, jei užstrigo nugara?",
      a: "Likite aktyvūs: judėkite ir vaikščiokite tiek, kiek leidžia skausmas, dažnai keiskite padėtį. Gali padėti šiluma. Jei skausmas labai stiprus, vaistus parinkite su gydytoju ar vaistininku.",
    },
    {
      q: "Ar reikia gulėti lovoje?",
      a: "Ne. Gulėjimas lovoje atsistatymo nepagreitina; geriau judėti tiek, kiek leidžia skausmas.",
    },
    {
      q: "Per kiek laiko praeina?",
      a: "Dažniausiai skausmas labiausiai sumažėja per pirmąsias 6 savaites, o daugumai po kelių savaičių būna daug geriau.",
    },
    {
      q: "Ar reikia MRT ar rentgeno?",
      a: "Be pavojaus ženklų ne: vaizdiniai tyrimai ūmiam nugaros skausmui gydymo nepakeičia.",
    },
    {
      q: "Šildyti ar šaldyti?",
      a: "Gairės rekomenduoja šilumą: ji gali sumažinti skausmą ir raumenų įtampą pirmomis dienomis.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "nugaros-skausmas",
  sources: [LBP_PROGNOSIS_2012, ACP_LBP_2017, LBP_LANCET_2018, BACK_PAIN_CPG],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/nugaros-skausmas", label: "Nugaros skausmas" },
    { href: "/ka-gydome/skausmas-nugaros-apacioje", label: "Skausmas nugaros apačioje" },
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Išialgija ir radikulopatija" },
  ],
};
