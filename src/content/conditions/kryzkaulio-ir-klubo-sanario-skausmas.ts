import type { ConditionPage } from "./types";
import { BACK_PAIN_CPG, LASLETT_2005 } from "./sources";

// Draft of 08.11.2026, waiting for Piotr's review (Claude Doc «Пачка 8»).
// Section «Nugara». The sacroiliac joint, not the hip joint. Search: kryžkaulio skausmas 70;
// «kryžkaulio klubo sąnario skausmas» no data.
export const kryzkaulioIrKluboSanarioSkausmas: ConditionPage = {
  slug: "kryzkaulio-ir-klubo-sanario-skausmas",
  section: "nugaros-skausmas",
  navTitle: "Kryžkaulio ir klubo sąnario skausmas",
  meta: {
    title: "Kryžkaulio ir klubo sąnario skausmas: simptomai ir gydymas",
    description:
      "Skauda vienoje pusėje juosmens apačioje ar sėdmenyje, šalia kryžkaulio? Kryžkaulio ir klubo sąnario skausmas: kaip atpažįstamas ir kas padeda. Be siuntimo.",
  },
  conditionName: "Kryžkaulio ir klubo sąnario skausmas",
  hero: {
    h1: "Kryžkaulio ir klubo sąnario skausmas",
    lead: "Kryžkaulio ir klubo sąnarys jungia stuburo apačią (kryžkaulį) su dubens kaulais. Jo skausmas dažniausiai jaučiamas vienoje pusėje juosmens apačioje ar sėdmenyje, šalia kryžkaulio, kartais plinta į šlaunį. Atpažinti padeda keli specialūs testai kartu, o gydoma dažniausiai pratimais ir manualine terapija.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Tai ne klubo sąnarys, o jungtis tarp kryžkaulio ir dubens kaulų kiekvienoje pusėje. Ji juda labai nedaug ir perduoda kūno svorį iš stuburo į kojas. Skausmas gali atsirasti po kritimo ant sėdmenų, netikėto žingsnio, sunkaus kėlimo, bėgimo ar ilgo vienpusio krūvio. Rečiau priežastis būna uždegiminė liga, kuri dažniau pasitaiko jaunesniems žmonėms.",
      "Tyrime kineziterapeutų atlikti 6 provokaciniai testai buvo palyginti su sąnario nuskausminimo injekcija. Jei bent 3 iš 6 testų sukėlė įprastą skausmą, testų jautrumas siekė 94 %, o specifiškumas 78 %. Jei nė vienas testas skausmo nesukėlė, šį sąnarį kaip skausmo priežastį galima atmesti.",
      "Gydymo tyrimų, skirtų būtent šiam sąnariui, nedaug, todėl remiamės juosmens skausmo gairėmis: pratimais, manualine terapija ir krūvio pritaikymu.",
    ],
  },
  when: {
    items: [
      "Skauda vienoje pusėje juosmens apačioje ar sėdmenyje, šalia kryžkaulio",
      "Skauda lipant laiptais, apsiverčiant lovoje ar stovint ant vienos kojos",
      "Skausmas atsirado po kritimo ant sėdmenų ar netikėto žingsnio",
      "Skauda bėgant ar sportuojant",
      "Skausmas kartojasi, ir nežinote, iš kur jis",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kur skauda, kas sukelia ir palengvina, ar buvo trauma, ar sustingstate rytais." },
    {
      lead: "Tada ištiriame:",
      text: "juosmens ir klubų judesius, atliekame kryžkaulio ir klubo sąnario provokacinius testus, tikriname nervų funkciją.",
    },
    {
      lead: "Atskiriame",
      text: "nuo stuburo išvaržos, klubo sąnario ir sėdmenų sausgyslių skausmo; įtarę uždegiminę ligą, patariame kreiptis į reumatologą.",
    },
    { lead: "Ir sudarome planą:", text: "kaip sumažinti skausmą dabar ir sustiprinti dubenį ir nugarą ateičiai." },
  ],
  services: ["kineziterapija", "manualine-terapija", "osteopatija"],
  treatment: {
    items: [
      { title: "Manualinė terapija:", text: "dubens ir juosmens sąnarių mobilizacijos ir minkštųjų audinių technikos skausmui mažinti." },
      { title: "Pratimai:", text: "sėdmenų, šlaunies ir liemens raumenų stiprinimas, kad dubuo geriau atlaikytų krūvį." },
      { title: "Krūvio pritaikymas:", text: "kaip stovėti, sėdėti, lipti laiptais ir sportuoti, kol skauda." },
    ],
    paragraphs: [
      "Ūmiam skausmui dažnai pakanka kelių vizitų. Jei skausmas trunka ilgiau ar kartojasi, paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites ir pratimų namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais pirmiausia kreipkitės į gydytoją.",
    items: [
      "Sutriko šlapinimasis ar tuštinimasis, nutirpo tarpvietė",
      "Silpsta koja ar pėda",
      "Skauda po kritimo ar traumos, ypač vyresniame amžiuje ar sergant osteoporoze",
      "Karščiuojate, skauda ir ramybėje, naktį",
      "Juosmuo ar sėdmenys sustingę rytais ilgiau nei pusvalandį, o judant palengvėja",
    ],
  },
  team: {
    title: "Su kryžkaulio ir klubo sąnario skausmu dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "kotryna-kairyte", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Kuo šis skausmas skiriasi nuo klubo sąnario skausmo?",
      a: "Klubo sąnario skausmas dažniausiai jaučiamas kirkšnyje ir stiprėja sukant ar lenkiant klubą. Kryžkaulio ir klubo sąnario skausmas jaučiamas juosmens apačioje ar sėdmenyje, šalia kryžkaulio.",
    },
    {
      q: "Ar sąnarys gali „išsinarinti“ ar „pasislinkti“?",
      a: "Ne. Šis sąnarys juda labai nedaug ir „išsinarinti“ negali. Manualinė terapija mažina skausmą, bet nieko „neįstato“.",
    },
    {
      q: "Ar reikia MRT?",
      a: "Dažniausiai ne. MRT reikia, jei įtariamas uždegimas, lūžis ar kita pavojinga priežastis; tada patariame kreiptis į gydytoją.",
    },
    {
      q: "Ar galima bėgioti?",
      a: "Dažniausiai taip, tik krūvį reikia pritaikyti. Kol skauda, bėgimą trumpiname ir stipriname sėdmenų bei liemens raumenis.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "nugaros-skausmas",
  sources: [LASLETT_2005, BACK_PAIN_CPG],
  reviewed: { by: "mangirdas-kazacenko", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/nugaros-skausmas", label: "Nugaros skausmas" },
    { href: "/ka-gydome/skausmas-nugaros-apacioje", label: "Skausmas nugaros apačioje" },
    { href: "/ka-gydome/soninis-klubo-skausmas", label: "Šoninis klubo skausmas" },
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
  ],
};
