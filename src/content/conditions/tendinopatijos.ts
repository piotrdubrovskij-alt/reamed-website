import type { ConditionPage } from "./types";
import { COOMBES_2010, ICON_2019, TENDINOPATHY_NRDP_2021 } from "./sources";

// Section page «Sausgyslės». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 5»).
// Rebuilt from scratch, not moved over: the old page named no conditions and cited nothing.
export const tendinopatijos: ConditionPage = {
  slug: "tendinopatijos",
  section: "tendinopatijos",
  navTitle: "Sausgyslės",
  topicsTitle: "Su kuo dirbame",
  meta: {
    title: "Sausgyslių uždegimas (tendinitas) ir tendinopatija: gydymas | ReaMed",
    description:
      "Skauda sausgyslę judant ar po krūvio? Kodėl tai dažniausiai ne tik uždegimas, kas padeda, kas trukdo gyti ir kiek trunka gydymas. Kineziterapija Vilniaus centre, be siuntimo.",
  },
  conditionName: "Tendinopatija (sausgyslių uždegimas)",
  hero: {
    h1: "Sausgyslių uždegimas ir tendinopatija",
    lead: "Tai, ką dažnai vadiname sausgyslės uždegimu arba tendinitu, specialistai šiandien vadina tendinopatija: ilgiau trunkantis sausgyslės skausmas ir silpnumas, susijęs su krūviu. Dažniausiai skauda peties, alkūnės, kelio, Achilo ir sėdmenų sausgysles. Pagrindinis gydymas yra ne poilsis, o tinkamai dozuotas krūvis: pratimai, kurie palaipsniui grąžina sausgyslei gebėjimą atlaikyti apkrovą. ReaMed yra privati klinika Vilniaus centre: siuntimo nereikia.",
    specialist: "erikas-jatkauskas",
  },
  about: {
    title: "Kodėl skauda sausgyslę",
    paragraphs: [
      "Tarptautinis sausgyslių tyrėjų sutarimas rekomenduoja šią būklę vadinti tendinopatija: tai nuolatinis sausgyslės skausmas ir sumažėjusi funkcija, susiję su mechaniniu krūviu. Žodžiai „tendinitas“ ir „uždegimas“ klaidina, nes sausgyslėje vyksta ne tik uždegimas: keičiasi jos skaidulų struktūra, kraujagyslės ir nervai, todėl sausgyslė prasčiau atlaiko krūvį.",
      "Dažniausiai tendinopatija išsivysto, kai krūvis padidėja greičiau, nei sausgyslė spėja prisitaikyti: nauja sporto šaka, daugiau bėgimo ar šuolių, remontas namuose. Kortikosteroidų injekcijos skausmą sumažina greitai, tačiau tyrimų apžvalga parodė, kad, pavyzdžiui, teniso alkūnės atveju po pusmečio ir metų rezultatai po injekcijos buvo prastesni nei visai negydant.",
    ],
  },
  when: {
    items: [
      "Sausgyslę skauda judant ar po krūvio ilgiau nei kelias savaites",
      "Skausmas stipriausias pradėjus judėti ar ryte, o apšilus sumažėja",
      "Skauda alkūnę keliant puodelį ar spaudžiant ranką",
      "Skauda Achilo sausgyslę bėgant ar lipant laiptais",
      "Naktį skauda gulint ant klubo šono",
      "Skausmas grįžta vos atnaujinus sportą",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kur skauda, kada prasidėjo, kas pasikeitė krūvyje prieš tai, kokie judesiai skausmą sukelia.",
    },
    {
      lead: "Tada ištiriame:",
      text: "sausgyslės jautrumą liečiant ir apkraunant, raumenų jėgą, judesius ir gretimus sąnarius.",
    },
    {
      lead: "Atskiriame",
      text: "tendinopatiją nuo sausgyslės plyšimo, sąnario ligos ar skausmo, plintančio iš kaklo ar nugaros.",
    },
    { lead: "Ir sudarome planą:", text: "kokį krūvį sausgyslė dabar atlaiko, kaip jį didinsime ir ko kol kas vengti." },
  ],
  services: ["kineziterapija", "sporto-reabilitacija", "manualine-terapija"],
  treatment: {
    items: [
      { title: "Krūvio valdymas:", text: "laikinai mažiname tai, kas sausgyslę dirgina, bet visiškai nesustojame." },
      {
        title: "Laipsniški jėgos pratimai:",
        text: "pagrindinė gydymo dalis: nuo statinių įtempimų iki sunkesnių ir greitesnių pratimų.",
      },
      {
        title: "Sportui ar darbui būdingi judesiai:",
        text: "bėgimas, šuoliai, metimai ar darbas rankomis, kai sausgyslė tam pasiruošusi.",
      },
      {
        title: "Skausmo malšinimas, jei reikia:",
        text: "manualinė terapija, kinezioteipavimas ar gydomasis masažas kaip pratimų priedas.",
      },
    ],
    paragraphs: [
      "Laipsniškas krūvio didinimas svarbus daugeliui tendinopatijų, tačiau staigus skausmas po traumos, galimas sausgyslės plyšimas ar ryškus funkcijos praradimas pirmiausia turi būti įvertinti gydytojo. Skirtingoms sausgyslių ir jų dangalų būklėms vienoda programa netinka.",
      "Sausgyslės prisitaiko lėtai, todėl gydymas paprastai trunka bent 6–12 savaičių, o ilgai besitęsianti tendinopatija gali gyti ir kelis mėnesius. Paprastai reikia ne mažiau kaip 5 vizitų, o tarp jų kasdienių pratimų namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Pajutote smūgį ar spragtelėjimą ir nebegalite atlikti judesio, pavyzdžiui, atsistoti ant pirštų galų",
      "Sąnarys ar sausgyslė parausta, karšta, ištino, karščiuojate",
      "Sausgyslę pradėjo skaudėti vartojant antibiotikus, ypač fluorochinolonus",
      "Vienu metu skauda daug sąnarių ar sausgyslių, rytais jie ilgai sustingę",
    ],
  },
  team: {
    title: "Su sausgyslių skausmu dirba",
    specialists: ["erikas-jatkauskas", "kotryna-kairyte", "mangirdas-kazacenko", "edmundas-zlatkus"],
  },
  faq: [
    {
      q: "Ar sausgyslių uždegimą reikia gydyti poilsiu?",
      a: "Visiškas poilsis skausmą trumpam sumažina, bet sausgyslė silpnėja, ir grįžus prie krūvio skausmas dažnai atsinaujina. Geriau sumažinti krūvį iki tokio, kurį sausgyslė atlaiko, ir jį palaipsniui didinti.",
    },
    {
      q: "Ar padeda priešuždegiminiai vaistai ir tepalai?",
      a: "Jie gali trumpam sumažinti skausmą, bet sausgyslės nesustiprina. Dėl vaistų tarkitės su gydytoju ar vaistininku.",
    },
    {
      q: "Ar galima sportuoti, kai skauda sausgyslę?",
      a: "Dažnai taip, jei skausmas krūvio metu nedidelis ir kitą dieną nestiprėja. Kokį krūvį galima, pasakome ištyrę.",
    },
    {
      q: "Ar reikia echoskopijos ar MRT?",
      a: "Dažniausiai tendinopatija nustatoma ištyrus, be vaizdinių tyrimų. Jų reikia, kai įtariamas plyšimas ar kita priežastis arba kai gydymas nepadeda.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "tendinopatijos",
  sources: [ICON_2019, TENDINOPATHY_NRDP_2021, COOMBES_2010],
  reviewed: null,
  related: [
    { href: "/ka-gydome/teniso-alkune", label: "Teniso alkūnė" },
    { href: "/ka-gydome/achilo-tendinopatija", label: "Achilo sausgyslės uždegimas ir tendinopatija" },
    { href: "/ka-gydome/soninis-klubo-skausmas", label: "Šoninis klubo skausmas" },
    { href: "/ka-gydome/subakromialinis-skausmo-sindromas", label: "Subakromialinis skausmo sindromas" },
  ],
};
