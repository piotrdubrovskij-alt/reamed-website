import type { ConditionPage } from "./types";
import { CALF_EXPERTS_2022, CALF_RISK_2017, CALF_RTP_2020, EKSTRAND_2011 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 4»).
// Deep vein thrombosis and Achilles rupture look alike: both are in the urgent list and the FAQ.
export const blauzdosRaumensPlysimas: ConditionPage = {
  slug: "blauzdos-raumens-plysimas",
  section: "sporto-traumos",
  navTitle: "Blauzdos raumens plyšimas",
  meta: {
    title: "Blauzdos raumens plyšimas ir patempimas: gydymas ir trukmė",
    description:
      "Bėgant ar šokant lyg kas spyrė į blauzdą? Blauzdos raumens patempimas ir plyšimas: kaip atpažinti, ką daryti, kiek trunka gijimas. Vilniaus centre, be siuntimo.",
  },
  conditionName: "Blauzdos raumens plyšimas",
  hero: {
    h1: "Blauzdos raumens plyšimas",
    lead: "Blauzdos raumens patempimas ar plyšimas yra dvilypio arba plekšninio raumens skaidulų pažeidimas. Jis įvyksta bėgant, šokant ar staiga startuojant, o žmonės dažnai sako, kad pajuto lyg smūgį į blauzdą. Dažniau taip nutinka vyresniems sportuojantiems ir tiems, kurie blauzdą jau buvo patempę. Gydymo pagrindas yra palaipsniui sunkinami blauzdos jėgos pratimai ir bėgimo programa.",
    specialist: "edmundas-zlatkus",
  },
  about: {
    paragraphs: [
      "Blauzdos raumuo susideda iš dviejų dalių: paviršinio dvilypio raumens ir giliau esančio plekšninio. Dvilypis dažniau plyšta staigiu judesiu, pavyzdžiui, šokant ar startuojant, o plekšninio pažeidimas dažnai prasideda ne taip ryškiai, bėgant ilgesnį laiką. Profesionalių futbolininkų tyrime blauzdos raumenų traumos sudarė 13 % raumenų traumų, o su amžiumi jų daugėjo.",
      "Australų futbolo žaidėjų tyrime tie, kurių raumens sausgyslinė plokštelė (aponeurozė) nepažeista, į žaidimą grįžo vidutiniškai per 19 dienų, o kai ji stipriai pažeista, per 31 dieną. Pakartotinę traumą geriau numatė amžius ir ankstesnės traumos nei MRT vaizdas.",
    ],
  },
  when: {
    items: [
      "Bėgant ar šokant pajutote staigų skausmą blauzdoje, lyg kas būtų spyręs",
      "Skauda lipant ant pirštų galų ar einant į kalną",
      "Blauzda įsitempusi, skauda ją liečiant, atsirado mėlynė",
      "Bėgant blauzda pradeda skaudėti vis anksčiau",
      "Blauzdos trauma kartojasi",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kaip įvyko trauma, ar tai pirmas kartas, kokį krūvį darėte prieš tai." },
    {
      lead: "Tada ištiriame:",
      text: "skausmingą vietą, kaip skauda lipant ant pirštų galų tiesia ir sulenkta koja, čiurnos judesius, jėgą.",
    },
    { lead: "Atmetame", text: "Achilo sausgyslės plyšimą ir giliųjų venų trombozę, kurie gali atrodyti panašiai." },
    { lead: "Ir sudarome planą:", text: "blauzdos jėgos pratimai, bėgimo programa ir testai prieš grįžtant." },
  ],
  services: ["sporto-reabilitacija", "kineziterapija", "gydomasis-masazas"],
  treatment: {
    items: [
      {
        title: "Pirmosios dienos:",
        text: "vaikščiojimas tiek, kiek leidžia skausmas, švelnūs čiurnos judesiai ir lengvi blauzdos įtempimai.",
      },
      {
        title: "Jėgos pratimai:",
        text: "lipimas ant pirštų galų tiesia ir sulenkta koja, palaipsniui didinant krūvį ir greitį.",
      },
      { title: "Bėgimo programa:", text: "nuo ėjimo ir lėto bėgimo iki šuolių ir sprinto." },
      { title: "Prieš grįžtant:", text: "blauzdos jėgos ir ištvermės testai, palyginti su sveikąja koja." },
    ],
    paragraphs: [
      "Sporto medicinos ekspertai pabrėžia, kad grįžimo laiką geriausiai rodo ne tyrimo vaizdas, o tai, kaip blauzda atlaiko vis didesnį krūvį, todėl jį tikriname kiekviename etape. Dažniausiai pakanka kelių vizitų, o tarp jų pratimai namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Blauzda ištinusi, karšta, paraudusi ir skauda net ramybėje, ypač jei neseniai ilgai skridote, sirgote ar buvote operuoti",
      "Kartu dūstate ar skauda krūtinę",
      "Po traumos negalite atsistoti ant pirštų galų, o virš kulno jaučiama įduba",
      "Blauzda labai įsitempusi, kieta, o skausmas didėja, nors koja ilsisi",
      "Pėda tirpsta, šąla ar pabąla",
    ],
  },
  team: {
    title: "Su blauzdos traumomis dirba",
    specialists: ["edmundas-zlatkus", "erikas-jatkauskas", "kotryna-kairyte"],
  },
  faq: [
    {
      q: "Kuo blauzdos raumens plyšimas skiriasi nuo Achilo sausgyslės plyšimo?",
      a: "Raumens plyšimas skauda blauzdos viduryje ar viršutinėje dalyje, o Achilo sausgyslė plyšta arčiau kulno. Plyšus sausgyslei dažniausiai nebegalite atsistoti ant tos kojos pirštų galų, ir reikia skubios gydytojo apžiūros.",
    },
    {
      q: "Ar tai gali būti trombozė?",
      a: "Taip, giliųjų venų trombozė gali sukelti panašų blauzdos skausmą ir tinimą, dažnai be aiškios traumos. Jei blauzda ištinusi, karšta ir skauda ramybėje, kreipkitės į gydytoją tą pačią dieną.",
    },
    {
      q: "Kada galima vėl bėgti?",
      a: "Kai einant ir lipant ant pirštų galų neskauda, o blauzdos jėga artėja prie sveikosios pusės. Bėgimą pradedame trumpais intervalais ir greitį didiname palaipsniui.",
    },
    {
      q: "Kodėl blauzdos traumos kartojasi?",
      a: "Rizika didesnė vyresniems sportuojantiems ir tiems, kurie blauzdą jau buvo patempę. Todėl svarbu ne tik sulaukti, kol praeis skausmas, bet ir atkurti blauzdos jėgą bei ištvermę.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "sporto-traumos",
  sources: [CALF_RTP_2020, CALF_EXPERTS_2022, CALF_RISK_2017, EKSTRAND_2011],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/raumenu-patempimas", label: "Raumenų patempimai ir plyšimai" },
    { href: "/ka-gydome/tendinopatijos", label: "Sausgyslių uždegimas ir tendinopatijos" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
