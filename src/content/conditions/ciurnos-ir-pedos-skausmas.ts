import type { ConditionPage } from "./types";
import { ACHILLES_CPG, ANKLE_SPRAIN_GUIDELINE, HEEL_CPG, PEACE_LOVE_2020 } from "./sources";

// Section page «Čiurna, pėda ir kulnas». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 7»).
// Search: kulno skausmas 480, achilo sausgyslės uždegimas 170, čiurnos patempimas 140, čiurnos raiščių plyšimas 90.
export const ciurnosIrPedosSkausmas: ConditionPage = {
  slug: "ciurnos-ir-pedos-skausmas",
  section: "ciurnos-ir-pedos-skausmas",
  navTitle: "Čiurna, pėda ir kulnas",
  topicsTitle: "Su kuo dirbame",
  meta: {
    title: "Čiurnos, pėdos ir kulno skausmas: gydymas Vilniuje | ReaMed",
    description:
      "Skauda kulną rytais, pasisuko koja ar skauda Achilo sausgyslę? Plantarinis fascitas, čiurnos patempimas, Achilo tendinopatija: kas padeda. Be siuntimo.",
  },
  conditionName: "Čiurnos, pėdos ir kulno skausmas",
  hero: {
    h1: "Čiurnos, pėdos ir kulno skausmas",
    lead: "Dažniausios priežastys yra plantarinis fascitas (kulno skausmas rytais), čiurnos raiščių patempimas pasisukus kojai ir Achilo sausgyslės perkrova. Daugumai padeda gydymas be operacijos: pratimai, krūvio pritaikymas, kartais teipas ar įtvaras. ReaMed yra privati klinika Vilniaus centre: siuntimo nereikia.",
    specialist: "kotryna-kairyte",
  },
  about: {
    title: "Kodėl skauda pėdą ar čiurną",
    paragraphs: [
      "Kulno skausmas apačioje, ypač pirmais žingsniais ryte, dažniausiai yra plantarinis fascitas. Skausmas virš kulno, sausgyslėje, jungiančioje blauzdą su kulnu, dažniausiai yra Achilo tendinopatija. Staigus skausmas ir tinimas čiurnos išorėje po to, kai koja pasisuko, dažniausiai reiškia raiščių patempimą.",
      "Čiurnos patempimo klinikinės gairės nurodo, kad trumpa imobilizacija gali sumažinti skausmą ir tinimą, bet daugiausia naudos duoda teipas ar įtvaras kartu su pratimų programa. Prižiūrimi pratimai rekomenduojami labiau nei pasyvios procedūros, o operacija paliekama tiems, kuriems nepadėjo išsamus gydymas pratimais.",
      "Kulno skausmui ir Achilo tendinopatijai Amerikos kineziterapeutų gairės rekomenduoja pratimus, mokymą ir krūvio pritaikymą. Kulno skausmui dar gali padėti manualinė terapija, tempimo pratimai ir teipavimas.",
    ],
  },
  when: {
    items: [
      "Skauda kulną pirmais žingsniais ryte ar atsistojus po sėdėjimo",
      "Pasisuko koja: tinsta ir skauda čiurnos išorę",
      "Koja dažnai pasisuka, čiurna atrodo nestabili",
      "Skauda Achilo sausgyslę bėgant, šokinėjant ar lipant laiptais",
      "Bėgant skauda blauzdos vidinę pusę ar pėdą",
      "Po čiurnos lūžio ar operacijos koja silpna, trūksta judesio",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kaip ir kada atsirado skausmas, ar buvo trauma, kokią avalynę dėvite, kiek vaikštote, bėgate ar stovite.",
    },
    {
      lead: "Tada ištiriame:",
      text: "pėdos ir čiurnos judesius, raiščių stabilumą, blauzdos raumenų jėgą, pusiausvyrą ir eiseną.",
    },
    {
      lead: "Po patempimo",
      text: "raiščių būklę tiksliausiai įvertiname po 4–5 dienų, kai sumažėja tinimas. Jei įtariame lūžį, patariame pasidaryti rentgeno nuotrauką.",
    },
    {
      lead: "Ir sudarome planą:",
      text: "pratimai, krūvio pritaikymas, teipas ar įtvaras, jei reikia, ir grįžimas prie sporto.",
    },
  ],
  services: ["kineziterapija", "sporto-reabilitacija", "manualine-terapija", "pooperacine-reabilitacija"],
  treatment: {
    items: [
      {
        title: "Pirmos dienos po patempimo:",
        text: "čiurnos apsauga, kojos pakėlimas, kompresinis tvarstis ir judesys be skausmo.",
      },
      {
        title: "Pratimai:",
        text: "blauzdos ir pėdos raumenų jėga, pusiausvyra, šuoliai ir bėgimas, palaipsniui didinant krūvį.",
      },
      {
        title: "Teipas ar įtvaras,",
        text: "kai reikia apsaugoti čiurną po patempimo ar sumažinti kulno skausmą einant.",
      },
      { title: "Manualinė terapija ir tempimo pratimai", text: "kulno skausmui mažinti, kartu su pratimais." },
    ],
    paragraphs: [
      "Lengvas čiurnos patempimas dažniausiai pagerėja per kelias savaites, o kulno ir Achilo sausgyslės skausmas dažnai trunka ilgiau, kartais mėnesius. Paprastai reikia ne mažiau kaip 5 vizitų ir kasdienių pratimų namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po traumos negalite atsiremti į koją ir žengti kelių žingsnių",
      "Išgirdote trakštelėjimą virš kulno ir negalite atsistoti ant pirštų galų",
      "Pėda ar čiurna karšta, paraudusi, karščiuojate",
      "Blauzda staiga patino, skauda ir kaista",
      "Pėda tirpsta, šąla ar keičia spalvą",
    ],
  },
  team: {
    title: "Su pėdos ir čiurnos skausmu dirba",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "mangirdas-kazacenko", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Pasisuko koja. Ką daryti pirmomis dienomis?",
      a: "Saugokite čiurną, laikykite koją pakeltą ir naudokite kompresinį tvarstį. Judėkite tiek, kiek leidžia skausmas. Vaistus nuo uždegimo vartokite saikingai ir pasitarę su gydytoju ar vaistininku: gairės įspėja, kad jie gali lėtinti gijimą.",
    },
    {
      q: "Ar reikia įtvaro po čiurnos patempimo?",
      a: "Po rimtesnio patempimo teipas ar įtvaras kartu su pratimais padeda labiausiai. Sportuojant įtvaras mažina pakartotinio patempimo riziką.",
    },
    {
      q: "Kodėl kulną labiausiai skauda ryte?",
      a: "Per naktį padų fascija ir blauzdos raumenys būna atsipalaidavę, todėl pirmi žingsniai juos staiga ištempia. Padeda tempimo pratimai prieš atsistojant ir tinkamai paskirstytas krūvis dienos metu.",
    },
    {
      q: "Ar kulno ataugą reikia operuoti?",
      a: "Retai. Kulno atauga dažnai randama ir tiems, kam visai neskauda. Skausmą dažniausiai sukelia padų fascija, ir jis gydomas be operacijos.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  sources: [ANKLE_SPRAIN_GUIDELINE, HEEL_CPG, ACHILLES_CPG, PEACE_LOVE_2020],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/plantarinis-fascitas", label: "Plantarinis fascitas" },
    { href: "/ka-gydome/achilo-tendinopatija", label: "Achilo tendinopatija" },
    { href: "/ka-gydome/blauzdos-raumens-plysimas", label: "Blauzdos raumens plyšimas" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
  ],
};
