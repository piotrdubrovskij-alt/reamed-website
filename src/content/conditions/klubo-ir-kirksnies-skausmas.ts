import type { ConditionPage } from "./types";
import { DOHA_2015, HIP_OA_EXERCISE_2014, OARSI_2019, WARWICK_2016 } from "./sources";

// Section page «Klubas ir kirkšnis». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 7»).
// Search: klubo skausmas 320, klubo sąnario skausmas 210, klubo sąnario uždegimas 170, kirkšnies skausmas 140.
// Piotr, 07.11: hip replacement is not a «Po operacijų» direction, but problems after it and hip OA are here.
export const kluboIrKirksniesSkausmas: ConditionPage = {
  slug: "klubo-ir-kirksnies-skausmas",
  section: "klubo-ir-kirksnies-skausmas",
  navTitle: "Klubas ir kirkšnis",
  topicsTitle: "Su kuo dirbame",
  meta: {
    title: "Klubo ir kirkšnies skausmas: priežastys ir gydymas Vilniuje | ReaMed",
    description:
      "Skauda klubą, kirkšnį ar klubo šoną? Artrozė, sausgyslės, klubo įspaudimas (FAI), sportininkų kirkšnies skausmas ir sunkumai po endoprotezavimo. Kineziterapija Vilniaus centre be siuntimo.",
  },
  conditionName: "Klubo ir kirkšnies skausmas",
  hero: {
    h1: "Klubo ir kirkšnies skausmas",
    lead: "Klubo skausmą dažniausiai sukelia klubo sąnario artrozė, sėdmenų sausgyslių perkrova klubo šone, klubo sąnario įspaudimas (FAI) arba, sportininkams, kirkšnies raumenų ir sausgyslių perkrova. Kartais klube jaučiamas skausmas, kuris ateina iš nugaros. Daugumai padeda gydymas be operacijos: tikslūs pratimai ir krūvio pritaikymas. ReaMed yra privati klinika Vilniaus centre: siuntimo nereikia.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    title: "Kodėl skauda klubą ar kirkšnį",
    paragraphs: [
      "Kur skauda, daug pasako. Skausmas kirkšnyje ar giliai klube dažniau kyla iš paties klubo sąnario: artrozės, sąnario lūpos pažeidimo ar įspaudimo. Skausmas klubo šone dažniausiai susijęs su sėdmenų raumenų sausgyslėmis. Skausmas sėdmenyje, plintantis į koją, dažnai ateina iš nugaros.",
      "Klubo sąnario artrozei Cochrane apžvalga rado aukštos kokybės įrodymų, kad pratimai mažina skausmą ir gerina funkciją, o skausmas mažesnis išliko bent 3–6 mėnesius po gydymo. Tarptautinės OARSI rekomendacijos pratimus nurodo kaip pagrindinį kelio ir klubo artrozės gydymą.",
      "Klubo įspaudimui (FAI) tarptautinis Warwick sutarimas nurodo tris tinkamus kelius: konservatyvų gydymą, reabilitaciją ir operaciją. Sportininkų kirkšnies skausmą Doha sutarimas skirsto pagal tai, iš kur jis kyla: pritraukiamieji raumenys, klubinis juosmens raumuo, kirkšnies kanalas, gaktos sritis ar pats klubo sąnarys. Nuo to priklauso ir pratimai.",
    ],
  },
  when: {
    items: [
      "Skauda kirkšnį ar giliai klube einant, lipant laiptais ar atsistojus",
      "Rytais klubas sustingęs, sunku apsiauti batus ar kojines",
      "Skauda klubo šoną gulint ant šono ar lipant laiptais",
      "Sportuojant skauda kirkšnį: spiriant, sprintuojant, keičiant kryptį",
      "Klubas spragsi ar užstringa, skauda giliai pritūpus ar ilgai sėdint",
      "Praėjo keli mėnesiai po endoprotezavimo, bet vis dar skauda ar trūksta judesio",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kur tiksliai skauda, kada skausmas atsirado, kas jį didina ir mažina, ar buvo trauma ar operacija.",
    },
    {
      lead: "Tada ištiriame:",
      text: "klubo judesius, eiseną, raumenų jėgą, stovėjimą ant vienos kojos ir skausmo provokacijos testus.",
    },
    {
      lead: "Atskiriame",
      text: "klubo sąnario, sausgyslių, kirkšnies ir nugaros skausmą, nes jie gali skaudėti panašioje vietoje.",
    },
    {
      lead: "Ir sudarome planą:",
      text: "pratimai klinikoje ir namuose, kasdienės veiklos ir sporto pritaikymas. Jei reikia tyrimų ar ortopedo konsultacijos, pasakome.",
    },
  ],
  services: ["kineziterapija", "manualine-terapija", "sporto-reabilitacija", "pooperacine-reabilitacija"],
  treatment: {
    items: [
      {
        title: "Pratimai:",
        text: "klubo ir sėdmenų raumenų jėga, judesių amplitudė, pusiausvyra. Artrozei pratimai yra pagrindinis gydymas.",
      },
      {
        title: "Krūvio pritaikymas:",
        text: "kaip vaikščioti, sėdėti, lipti laiptais ir sportuoti, kad skausmas mažėtų, o ne didėtų.",
      },
      { title: "Manualinė terapija,", text: "kai sąnarys ar audiniai riboja judesį, kartu su pratimais." },
      {
        title: "Grįžimas prie sporto:",
        text: "bėgimas, spyriai, krypties keitimai ir testai prieš grįžtant į treniruotes.",
      },
    ],
    paragraphs: [
      "Kiek truks gydymas, priklauso nuo priežasties. Paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites ir kasdienių pratimų namuose; kai skausmas trunka ilgai ar po operacijos, dažnai daugiau.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po kritimo skauda klubą ir negalite atsiremti į koją",
      "Klubas karštas, paraudęs, karščiuojate",
      "Skausmas stiprus ramybėje ir naktį, kartu be priežasties krenta svoris",
      "Po endoprotezavimo staiga sustiprėjo skausmas, koja sutrumpėjo ar pasisuko",
      "Kartu tirpsta ar silpsta koja, sutriko šlapinimasis",
    ],
  },
  team: {
    title: "Su klubo ir kirkšnies skausmu dirba",
    specialists: ["mangirdas-kazacenko", "kotryna-kairyte", "erikas-jatkauskas", "piotr-dubrovskij"],
    note: "Vyresniems pacientams ir po operacijų dažniausiai padeda Mangirdas, sportininkams Kotryna.",
  },
  faq: [
    {
      q: "Ar klubo artrozę galima gydyti be operacijos?",
      a: "Daugeliui taip, dažnai ilgą laiką. Pratimai mažina skausmą ir gerina funkciją. Jei skausmas ir apribojimai dideli nepaisant gydymo, dėl endoprotezavimo sprendžia ortopedas.",
    },
    {
      q: "Kodėl skauda kirkšnį, nors traumos nebuvo?",
      a: "Dažniausiai dėl perkrovos: daug spyrių, bėgimo su krypties keitimais ar staiga padidinto krūvio. Kartais kirkšnyje jaučiamas klubo sąnario ar nugaros skausmas, todėl pirmiausia ištiriame.",
    },
    {
      q: "Po endoprotezavimo vis dar skauda. Ar tai normalu?",
      a: "Pirmus mėnesius skausmas ir sustingimas yra dažni. Jei jie nemažėja ar stiprėja, pasitarkite su ortopedu. Dažnai padeda tikslūs pratimai eisenai, judesiui ir jėgai atkurti.",
    },
    {
      q: "Ar padės masažas?",
      a: "Masažas gali trumpam sumažinti įtampą ir skausmą, bet pagrindinis gydymas yra pratimai ir krūvio pritaikymas.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  sources: [HIP_OA_EXERCISE_2014, OARSI_2019, WARWICK_2016, DOHA_2015],
  reviewed: null,
  related: [
    { href: "/ka-gydome/soninis-klubo-skausmas", label: "Šoninis klubo skausmas" },
    { href: "/ka-gydome/pritraukiamuju-raumenu-patempimas", label: "Pritraukiamųjų raumenų patempimas" },
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Išialgija ir radikulopatija" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
  ],
};
