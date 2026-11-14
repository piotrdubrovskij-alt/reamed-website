import type { ConditionPage } from "./types";
import { CSAW_2018, SAPS_GUIDELINE } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 3»).
// Two topics of the table lead here: «Peties skausmas keliant ranką» and «Subakromialinis skausmo sindromas».
export const subakromialinisSkausmoSindromas: ConditionPage = {
  slug: "subakromialinis-skausmo-sindromas",
  section: "peties-problemos",
  navTitle: "Subakromialinis skausmo sindromas",
  meta: {
    title: "Skauda petį keliant ranką: subakromialinis skausmo sindromas",
    description:
      "Petį skauda keliant ranką, gulint ant šono ar siekiant virš galvos? Subakromialinis skausmo sindromas: kas tai ir kaip gydoma be operacijos. Be siuntimo.",
  },
  conditionName: "Subakromialinis skausmo sindromas",
  hero: {
    h1: "Subakromialinis skausmo sindromas: skauda petį keliant ranką",
    lead: "Subakromialinis skausmo sindromas (anksčiau vadintas impingement sindromu) yra viena dažniausių peties skausmo priežasčių: skauda keliant ranką į šoną ar virš galvos, gulint ant to šono. Skausmą dažniausiai sukelia rotatorių manžetės sausgyslių ir bursos perkrova. Gairės rekomenduoja pirmiausia gydyti be operacijos, o pagrindas yra kryptingi pratimai.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Po akromionu, peties ataugos kaulu, slenka rotatorių manžetės sausgyslės ir bursa. Kai jos perkraunamos, pavyzdžiui, daug dirbant rankomis virš galvos, sportuojant ar staiga padidinus krūvį, jos tampa jautrios. Tada skauda keliant ranką maždaug nuo pečių iki galvos aukščio, gulint ant peties, siekiant už nugaros.",
      "Seniau manyta, kad sausgysles „suspaudžia“ kaulo atauga, todėl dažnai buvo atliekama operacija jai pašalinti. Didelis britų tyrimas parodė, kad ši operacija nebuvo veiksmingesnė už placebo operaciją, o olandų gairės nurodo, kad įtikinamų įrodymų, jog operacija pranašesnė už gydymą be jos, nėra. Pratimai turi būti specifiniai, nedidelio intensyvumo ir dažni.",
    ],
  },
  when: {
    items: [
      "Skauda keliant ranką į šoną ar į priekį",
      "Skauda gulint ant to peties",
      "Sunku pasiekti viršutinę lentyną, užsivilkti striukę",
      "Skauda po darbo rankomis virš galvos ar po treniruotės",
      "Skausmas trunka ilgiau nei kelias savaites",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kas skausmą sukelia, kokius judesius darote darbe ir sporte." },
    { lead: "Tada ištiriame:", text: "peties judesius ir jėgą, rotatorių manžetės testus, mentės judėjimą, kaklą." },
    { lead: "Atskiriame", text: "nuo sausgyslės plyšimo, sustingusio peties ir skausmo, kylančio iš kaklo." },
    { lead: "Ir sudarome planą:", text: "pratimų programa, krūvio keitimas; jei reikia, siūlome echoskopiją ar gydytojo konsultaciją." },
  ],
  services: ["kineziterapija", "manualine-terapija", "sporto-reabilitacija"],
  treatment: {
    items: [
      { title: "Krūvio valdymas:", text: "laikinai sumažiname judesius virš galvos, bet ranką judiname." },
      {
        title: "Pratimai:",
        text: "rotatorių manžetės ir mentės raumenų stiprinimas nedideliu krūviu, bet dažnai, palaipsniui sunkinant.",
      },
      { title: "Manualinė terapija ir minkštųjų audinių technikos:", text: "skausmui mažinti, kaip pratimų priedas." },
      { title: "Darbo ir sporto technika:", text: "kaip dirbti ir treniruotis, kad petys nebūtų perkraunamas." },
    ],
    paragraphs: [
      "Paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites ir kasdienių pratimų namuose. Jei per 6 savaites skausmas nemažėja, gairės siūlo atlikti echoskopiją, kad būtų atmestas sausgyslės plyšimas.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po kritimo staiga nebegalite pakelti rankos",
      "Kairį petį skauda kartu su skausmu krūtinėje ar dusuliu",
      "Petys karštas, paraudęs, karščiuojate",
    ],
  },
  team: {
    title: "Su peties skausmu dirba",
    specialists: ["kotryna-kairyte", "piotr-dubrovskij", "mangirdas-kazacenko"],
  },
  faq: [
    {
      q: "Ar tai sausgyslių uždegimas?",
      a: "Dažnai taip vadinama, bet tikro uždegimo dažniausiai nėra: sausgyslės ir bursa yra perkrautos ir jautrios. Todėl pagrindinis gydymas yra krūvio valdymas ir pratimai, o ne poilsis.",
    },
    {
      q: "Ar reikia operacijos?",
      a: "Dažniausiai ne. Tyrimai neparodė, kad operacija būtų veiksmingesnė už gydymą be jos.",
    },
    {
      q: "Ar galima sportuoti?",
      a: "Dažniausiai taip, pakeitus pratimus ir krūvį. Kokius judesius kol kas riboti, pasakome per vizitą.",
    },
    {
      q: "Ar padeda injekcija?",
      a: "Kai skausmas kartojasi ar užsitęsia, gydytojas gali pasiūlyti injekciją. Jos poveikis dažnai laikinas, todėl pratimai lieka gydymo pagrindas.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "peties-problemos",
  sources: [SAPS_GUIDELINE, CSAW_2018],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/peties-problemos", label: "Peties skausmas" },
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
  ],
};
