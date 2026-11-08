import type { ConditionPage } from "./types";
import { KNEE_ARTHROSCOPY_GUIDELINE, KNEE_OA_EXERCISE_2015, OARSI_2019 } from "./sources";

// Draft of 08.11.2026, waiting for Piotr's review (Claude Doc «Пачка 8»).
// Section «Kelias». Search: kelio sąnario uždegimas 140, kelio skausmas ramybės būsenoje 140,
// kelio skausmas naktį 110, kelio artrozė 70.
export const kelioArtroze: ConditionPage = {
  slug: "kelio-artroze",
  section: "kelio-skausmas",
  navTitle: "Kelio artrozė",
  meta: {
    title: "Kelio artrozė: pratimai ir gydymas be operacijos Vilniuje | ReaMed",
    description:
      "Skauda kelį vaikštant ir lipant laiptais, rytais jis sustingęs? Kelio artrozė: kas iš tikrųjų padeda, kokie pratimai ir kada reikia operacijos. Kineziterapija Vilniaus centre be siuntimo.",
  },
  conditionName: "Kelio sąnario artrozė",
  hero: {
    h1: "Kelio artrozė",
    lead: "Kelio artrozė yra dažniausia kelio skausmo priežastis vyresniame amžiuje: keičiasi sąnario kremzlė ir aplinkiniai audiniai, kelį skauda vaikštant ir lipant laiptais, jis sustingsta po poilsio. Tarptautinės gairės pagrindiniu gydymu laiko mokymą, pratimus ir, jei reikia, svorio mažinimą. Pratimai mažina skausmą ir gerina funkciją panašiai kaip vaistai nuo uždegimo.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    paragraphs: [
      "Artrozė nėra vien „susidėvėjusi kremzlė“: keičiasi visas sąnarys, kremzlė, kaulas po ja, sąnario dangalas ir aplinkiniai raumenys. Ji dažniau būna vyresniems žmonėms, po senų kelio traumų ar menisko operacijų, esant didesniam kūno svoriui. Rentgeno vaizdas ir skausmas dažnai nesutampa: ryškūs pakitimai gali mažai varginti, o nedideli stipriai skaudėti.",
      "Cochrane apžvalga, apėmusi 44 tyrimus, parodė, kad pratimai mažina kelio artrozės skausmą ir gerina funkciją. Poveikio dydis panašus kaip vaistų nuo uždegimo, o nauda išlieka 2–6 mėnesius po gydymo kurso. Individualiai parinktos programos dažniau davė daugiau naudos nei grupiniai užsiėmimai ar vien namų pratimai.",
      "Tarptautinės OARSI gairės kelio artrozei pirmiausia rekomenduoja mokymą, struktūruotus pratimus ir, jei reikia, svorio mažinimą. Kelio artroskopijos degeneracinei kelio ligai ir artrozei tarptautinės gairės nerekomenduoja.",
    ],
  },
  when: {
    items: [
      "Skauda kelį vaikštant, lipant laiptais ar atsistojant nuo kėdės",
      "Kelias sustingęs rytais ar po ilgesnio sėdėjimo",
      "Kelias tinsta, girgžda, sunku jį iki galo ištiesti ar sulenkti",
      "Gavote artrozės diagnozę ir nežinote, ar galima sportuoti",
      "Svarstote apie operaciją ir pirmiausia norite išbandyti gydymą pratimais",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kada ir kur skauda, kiek galite nueiti, kas palengvina, kokie tyrimai jau atlikti.",
    },
    {
      lead: "Tada ištiriame:",
      text: "kelio judesius ir tinimą, šlaunies ir klubo raumenų jėgą, eiseną, atsistojimą nuo kėdės ir laiptus.",
    },
    { lead: "Paaiškiname,", text: "ką reiškia rentgeno aprašymas ir kodėl judėti sąnariui naudinga." },
    {
      lead: "Ir sudarome planą:",
      text: "pratimai, krūvio pritaikymas kasdienybėje ir, jei reikia, tolesni žingsniai pas gydytoją.",
    },
  ],
  services: ["kineziterapija", "manualine-terapija"],
  treatment: {
    items: [
      {
        title: "Pratimai:",
        text: "keturgalvio, šlaunies užpakalinių ir sėdmenų raumenų stiprinimas, judrumas, pusiausvyra. Krūvį didiname palaipsniui pagal skausmą.",
      },
      {
        title: "Mokymas:",
        text: "kaip judėti, kai skauda, kiek vaikščioti, kaip pritaikyti laiptus, sportą ir darbą.",
      },
      { title: "Manualinė terapija:", text: "švelnūs sąnario judesiai skausmui mažinti ir judesiui gerinti, kartu su pratimais." },
      { title: "Aktyvumas:", text: "vaikščiojimas, dviratis, plaukimas; jei reikia, svorio mažinimas." },
    ],
    paragraphs: [
      "Pirmąjį pagerėjimą dažniausiai pajuntate po kelių savaičių reguliarių pratimų. Mūsų klinikoje paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites, o pratimus namuose verta tęsti ir vėliau, nes juos nutraukus nauda mažėja.",
    ],
  },
  urgent: {
    note: "Šiais atvejais pirmiausia kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Kelias staiga stipriai patino, parausta ir karštas, ypač jei karščiuojate",
      "Po kritimo ar traumos negalite atsiremti į koją",
      "Kelias užstrigo ir negalite jo ištiesti",
      "Staiga patino ir skauda blauzdą",
      "Kelį stipriai skauda ramybėje ir naktį, be priežasties krenta svoris",
    ],
  },
  team: {
    title: "Su kelio artroze dirba",
    specialists: ["mangirdas-kazacenko", "piotr-dubrovskij", "kotryna-kairyte", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Ar su kelio artroze galima vaikščioti ir sportuoti?",
      a: "Taip, ir tai svarbu. Vaikščiojimas, dviratis, plaukimas ir jėgos pratimai sąnariui naudingi. Nedidelis skausmas pratimų metu, kuris per parą praeina ir nestiprėja, dažniausiai nepavojingas.",
    },
    {
      q: "Ar padeda kelio artroskopija?",
      a: "Degeneracinei kelio ligai ir artrozei tarptautinės gairės artroskopijos nerekomenduoja: ilgalaikės naudos, palyginti su gydymu be operacijos, ji neduoda.",
    },
    {
      q: "Kada reikia sąnario keitimo operacijos?",
      a: "Kai skausmas ir judėjimo sunkumai išlieka nepaisant gerai atlikto gydymo be operacijos ir labai riboja gyvenimą. Sprendžia ortopedas kartu su jumis.",
    },
    {
      q: "Ar padeda papildai, tepalai ar injekcijos?",
      a: "Įrodymų, kad papildai atkuria kremzlę, nėra. Vaistus, tepalus ir injekcijas aptarkite su gydytoju.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "kelio-skausmas",
  sources: [KNEE_OA_EXERCISE_2015, OARSI_2019, KNEE_ARTHROSCOPY_GUIDELINE],
  reviewed: null,
  related: [
    { href: "/ka-gydome/kelio-skausmas", label: "Kelio skausmas" },
    { href: "/ka-gydome/menisko-plysimas", label: "Menisko plyšimas" },
    { href: "/ka-gydome/patelofemoralinis-skausmas", label: "Patelofemoralinis skausmas" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
  ],
};
