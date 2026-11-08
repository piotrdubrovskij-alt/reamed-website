import type { ConditionPage } from "./types";
import { ANKLE_CPG_2021, ANKLE_SPRAIN_GUIDELINE, PEACE_LOVE_2020 } from "./sources";

// Draft of 08.11.2026, waiting for Piotr's review (Claude Doc «Пачка 8»).
// Section «Čiurna, pėda ir kulnas». Search: čiurnos patempimas 140, čiurnos raiščių plyšimas 90;
// «pasisukusi koja» no data.
export const ciurnosPatempimas: ConditionPage = {
  slug: "ciurnos-patempimas",
  section: "ciurnos-ir-pedos-skausmas",
  navTitle: "Čiurnos patempimas",
  meta: {
    title: "Čiurnos patempimas ir raiščių plyšimas: ką daryti, gydymas | ReaMed",
    description:
      "Pasisuko koja, tinsta ir skauda čiurną? Ką daryti pirmomis dienomis, kada reikia rentgeno, kaip atsistatyti ir kad nesikartotų. Kineziterapija Vilniaus centre be siuntimo.",
  },
  conditionName: "Čiurnos raiščių patempimas",
  hero: {
    h1: "Čiurnos patempimas",
    lead: "Čiurnos patempimas dažniausiai įvyksta, kai pėda pasisuka į vidų ir pažeidžiami čiurnos išorės raiščiai. Skauda ir tinsta čiurnos išorė, sunku remtis į koją. Gairės rekomenduoja ne ilgą imobilizaciją, o teipą ar įtvarą kartu su pratimais: taip greičiau grįžta stabilumas ir mažiau tikėtina, kad patempimas kartosis.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Raiščių pažeidimas gali būti nuo nedidelio patempimo iki visiško plyšimo. Patempimo sunkumą patikimiausiai įvertina apžiūra praėjus 4–5 dienoms po traumos, kai sumažėja tinimas ir skausmas.",
      "Olandų gairės nurodo, kad trumpa imobilizacija gali sumažinti skausmą ir tinimą, bet daugiausia naudos duoda teipas ar įtvaras kartu su pratimų programa. Prižiūrimi pratimai rekomenduojami labiau nei pasyvios procedūros, o operacija paliekama tiems, kuriems nepadėjo išsamus gydymas pratimais.",
      "Amerikos kineziterapeutų gairės pabrėžia, kad dauguma žmonių atsistato, bet dalis vėliau jaučia, kad čiurna nestabili, koja vis pasisuka, ir patempimai kartojasi. Tai vadinama lėtiniu čiurnos nestabilumu, todėl pusiausvyros ir jėgos pratimai svarbūs ir tada, kai jau nebeskauda.",
    ],
  },
  when: {
    items: [
      "Pasisuko koja, tinsta ir skauda čiurnos išorę",
      "Sunku vaikščioti, šlubuojate",
      "Čiurna jaučiasi nestabili, koja vis pasisuka",
      "Patempimas kartojasi kelis kartus per metus",
      "Norite saugiai grįžti į sportą",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kaip įvyko trauma, ar galėjote iškart remtis į koją, ar patempimas ne pirmas." },
    {
      lead: "Patikriname, ar nereikia rentgeno:",
      text: "jei skauda paspaudus tam tikras kaulų vietas ar negalite žengti kelių žingsnių, pirmiausia reikia atmesti lūžį.",
    },
    { lead: "Tada ištiriame:", text: "raiščių stabilumą, tinimą, judesius, pusiausvyrą ir eiseną." },
    { lead: "Ir sudarome planą:", text: "apsauga, judesys, jėga, pusiausvyra ir grįžimas į sportą pagal etapus." },
  ],
  services: ["kineziterapija", "sporto-reabilitacija"],
  treatment: {
    items: [
      { title: "Pirmos dienos:", text: "apsauga, koja pakelta, kompresija, judesys be stipraus skausmo. Teipas ar įtvaras." },
      { title: "Judesys ir jėga:", text: "čiurnos judesiai, blauzdos ir pėdos raumenų stiprinimas, eisena be šlubavimo." },
      { title: "Pusiausvyra:", text: "pratimai ant vienos kojos ir nestabilaus paviršiaus, kad patempimas nesikartotų." },
      { title: "Grįžimas į sportą:", text: "bėgimas, šuoliai, krypties keitimai; kartojantis patempimams sportuojant verta naudoti įtvarą." },
    ],
    paragraphs: [
      "Lengvas patempimas dažniausiai pagerėja per kelias savaites, sunkesnis raiščių plyšimas gali trukti kelis mėnesius. Ūmiai traumai paprastai pakanka kelių vizitų ir pratimų namuose; jei čiurna nestabili ir patempimai kartojasi, prireikia daugiau laiko.",
    ],
  },
  urgent: {
    note: "Šiais atvejais pirmiausia kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Negalite žengti 4 žingsnių iškart po traumos",
      "Skauda paspaudus kulkšnies kaulą ar pėdos išorės kaulą ties viduriu (penktojo padikaulio pagrindą)",
      "Čiurna ar pėda deformuota",
      "Pėda tirpsta, šąla ar keičia spalvą",
      "Skausmas ir tinimas ne mažėja, o didėja",
    ],
  },
  team: {
    title: "Su čiurnos traumomis dirba",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "edmundas-zlatkus", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Ką daryti iškart po patempimo?",
      a: "Pirmomis dienomis apsaugokite čiurną, laikykite koją pakeltą, naudokite kompresinį tvarstį ir judinkite tiek, kiek leidžia skausmas. Jei negalite remtis į koją ar skauda paspaudus kaulą, kreipkitės į gydytoją dėl rentgeno.",
    },
    {
      q: "Šaldyti ar šildyti?",
      a: "Šaltis trumpam sumažina skausmą, bet nėra įrodyta, kad pagreitina gijimą. Svarbiau apsauga, kompresija ir laipsniškas judesys.",
    },
    {
      q: "Ar reikia įtvaro?",
      a: "Teipas ar įtvaras pirmosiomis savaitėmis padeda saugiai judėti. Jei patempimai kartojasi, įtvaras sportuojant sumažina pakartotinio patempimo riziką.",
    },
    {
      q: "Kada galima grįžti į sportą?",
      a: "Kai nebeskauda, čiurna stabili, o šuolių, bėgimo ir krypties keitimo testai beveik tokie pat kaip sveikos kojos. Laikas priklauso nuo pažeidimo sunkumo.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "sporto-traumos",
  sources: [ANKLE_SPRAIN_GUIDELINE, ANKLE_CPG_2021, PEACE_LOVE_2020],
  reviewed: null,
  related: [
    { href: "/ka-gydome/ciurnos-ir-pedos-skausmas", label: "Čiurnos, pėdos ir kulno skausmas" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
    { href: "/ka-gydome/grizimas-i-sporta-po-traumos", label: "Grįžimas į sportą po traumos" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
