import type { ConditionPage } from "./types";
import { COOMBES_2010, COOMBES_2013, LATERAL_ELBOW_CPG } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 5»).
// Own section Alkūnė ir riešas (section page since batch 7); also listed in Sausgyslės.
// Search: lateralinis epikondilitas 320, alkūnės skausmas 170.
export const tenisoAlkune: ConditionPage = {
  slug: "teniso-alkune",
  section: "alkunes-ir-rieso-skausmas",
  navTitle: "Teniso alkūnė",
  meta: {
    title: "Teniso alkūnė (lateralinis epikondilitas): simptomai ir gydymas | ReaMed",
    description:
      "Skauda alkūnės išorę keliant puodelį ar spaudžiant ranką? Teniso alkūnė: kodėl atsiranda, kas padeda ir kodėl injekcija ne visada gera mintis. Kineziterapija Vilniaus centre.",
  },
  conditionName: "Teniso alkūnė (lateralinis epikondilitas)",
  hero: {
    h1: "Teniso alkūnė (lateralinis epikondilitas)",
    lead: "Teniso alkūnė yra dilbio tiesiamųjų raumenų sausgyslės tendinopatija ties alkūnės išorine dalimi. Skauda suimant daiktus, keliant juos ištiesta ranka, spaudžiant ranką ar dirbant pele, o tenisą žaidžia tik nedidelė dalis sergančiųjų. Ši būklė dažnai praeina pati, bet gali užtrukti ir kartotis; gydymo pagrindas yra krūvio keitimas ir laipsniški dilbio raumenų pratimai.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    paragraphs: [
      "Ties alkūnės išoriniu gumburu prisitvirtina raumenys, kurie tiesia riešą ir pirštus. Kai jie ilgai ar per daug dirba, pavyzdžiui, nešant, gręžiant, dirbant su įrankiais ar kompiuteriu, sausgyslė tampa jautri ir prasčiau atlaiko krūvį. Amerikos kineziterapeutų gairės pabrėžia, kad be sausgyslės pokyčių svarbūs ir raumenų darbo bei skausmo jutimo pokyčiai, todėl vien poilsio nepakanka.",
      "Didelis tyrimas parodė, kad po kortikosteroidų injekcijos per metus visiškai pasveiko ar labai pagerėjo 83 % pacientų, o po placebo injekcijos 96 %; liga atsinaujino atitinkamai 54 % ir 12 % pacientų. Todėl injekcija tinka ne visiems, o sprendimą verta priimti kartu su gydytoju, žinant šią riziką.",
    ],
  },
  when: {
    items: [
      "Skauda alkūnės išorę suimant, keliant ar sukant daiktus",
      "Sunku paspausti ranką, nešti maišelį ar puodelį",
      "Skausmas plinta į dilbį",
      "Skauda dirbant pele, su įrankiais ar sportuojant",
      "Skausmas trunka ilgiau nei kelias savaites ar kartojasi",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kokie judesiai skauda, koks jūsų darbas ir sportas, ar jau buvo injekcijų.",
    },
    {
      lead: "Tada ištiriame:",
      text: "skausmingą vietą, suėmimo jėgą, riešo ir pirštų tiesimą prieš pasipriešinimą, alkūnės judesius.",
    },
    {
      lead: "Atmetame",
      text: "skausmą, plintantį iš kaklo, alkūnės sąnario ligas ir nervų suspaudimą, kurie gali atrodyti panašiai.",
    },
    { lead: "Ir sudarome planą:", text: "kaip keisti darbą ir krūvį, kokie pratimai ir kaip juos sunkinti." },
  ],
  services: ["kineziterapija", "manualine-terapija", "sporto-reabilitacija"],
  treatment: {
    items: [
      {
        title: "Krūvio keitimas:",
        text: "kaip suimti ir kelti daiktus, kad sausgyslė mažiau dirgtų, darbo vietos pritaikymas.",
      },
      {
        title: "Laipsniški pratimai:",
        text: "riešo tiesiamųjų raumenų įtempimai ir jėgos pratimai su vis didesniu svoriu.",
      },
      {
        title: "Manualinė terapija:",
        text: "alkūnės, kaklo ir krūtinės stuburo mobilizacija skausmui mažinti, kaip pratimų priedas.",
      },
      { title: "Dilbio įtvaras ar teipas, jei reikia:", text: "trumpam palengvina skausmą dirbant." },
    ],
    paragraphs: [
      "Tame pačiame tyrime kineziterapija padėjo greičiau: po 4 savaičių labai pagerėjo 39 % kineziterapiją gavusių pacientų, palyginti su 10 % be jos, nors po metų skirtumo neliko. Paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites ir kasdienių pratimų namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po traumos alkūnė deformuota arba negalite jos sulenkti ar ištiesti",
      "Alkūnė ištinusi, karšta, parausta, karščiuojate",
      "Tirpsta pirštai, greitai silpsta ranka",
    ],
  },
  team: {
    title: "Su alkūnės skausmu dirba",
    specialists: ["mangirdas-kazacenko", "erikas-jatkauskas", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Kiek laiko trunka teniso alkūnė?",
      a: "Daugumai žmonių per metus būklė gerokai pagerėja, bet pradžioje skausmas gali trukdyti kelis mėnesius, o liga kartais kartojasi. Gydymas padeda greičiau sumažinti skausmą ir išmokti, kaip išvengti atkryčio.",
    },
    {
      q: "Ar padeda injekcija?",
      a: "Kortikosteroidų injekcija greitai sumažina skausmą, bet tyrimuose po metų rezultatai buvo prastesni, o liga dažniau atsinaujino. Sprendimą dėl injekcijos priima gydytojas, kartu su jumis įvertinęs naudą ir riziką.",
    },
    {
      q: "Ar reikia nešioti įtvarą?",
      a: "Dilbio įtvaras gali trumpam palengvinti skausmą dirbant, bet sausgyslės nesustiprina. Jį derinkite su pratimais.",
    },
    {
      q: "Ar galima dirbti kompiuteriu?",
      a: "Taip. Padeda pakeisti pelės ir klaviatūros padėtį, daryti pertraukas ir mažinti stiprų suėmimą.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "tendinopatijos",
  sources: [COOMBES_2013, LATERAL_ELBOW_CPG, COOMBES_2010],
  reviewed: null,
  related: [
    { href: "/ka-gydome/tendinopatijos", label: "Sausgyslių uždegimas ir tendinopatija" },
    { href: "/ka-gydome/rieso-kanalo-sindromas", label: "Riešo kanalo sindromas" },
    { href: "/ka-gydome/kaklo-radikulopatija", label: "Kaklo radikulopatija" },
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
  ],
};
