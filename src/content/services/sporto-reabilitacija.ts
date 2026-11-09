import type { ServicePage } from "./types";
import { ARDERN_2016, LAUERSEN_2014, PEACE_LOVE_2020 } from "@/content/conditions/sources";
import { eur } from "./price-text";

// Batch 6, draft of 07.11.2026. The service page; the injuries themselves live in the «Sporto traumos» section.
export const sportoReabilitacija: ServicePage = {
  slug: "sporto-reabilitacija",
  navTitle: "Sporto reabilitacija",
  meta: {
    title: "Sporto reabilitacija Vilniuje: grįžimas į sportą",
    description:
      "Sporto traumų reabilitacija Vilniaus centre: raumenų patempimai, raiščių traumos, sausgyslių perkrovos ir saugus grįžimas į sportą. Kineziterapeutai, dirbantys su Lietuvos rinktinėmis.",
  },
  therapyName: "Sporto reabilitacija",
  hero: {
    h1: "Sporto reabilitacija Vilniuje",
    lead: "Sporto reabilitacija padeda po traumos ar perkrovos grįžti į treniruotes ir varžybas taip, kad trauma nepasikartotų. Ištiriame, kas pažeista ir kodėl, sudarome etapų planą, o pasirengimą grįžti tikriname testais. Trys mūsų kineziterapeutai dirba su Lietuvos ledo ritulio ir futbolo rinktinėmis.",
  },
  about: {
    paragraphs: [
      "Sportininkui neužtenka, kad nustojo skaudėti. Reikia atgauti jėgą, greitį, šuolius, krypties keitimą ir pasitikėjimą. Todėl sporto reabilitacija baigiasi ne tada, kai praėjo skausmas, o kai kūnas pasiruošęs sporto krūviui.",
      "Grįžimą planuojame trimis žingsniais: grįžimas į treniruotes, grįžimas į savo sportą ir grįžimas į ankstesnį lygį. Kiekviename žingsnyje vertiname krūvį, simptomus ir testų rezultatus.",
      "Dirbame ir su profesionalais, ir su mėgėjais: bėgikais, futbolininkais, krepšininkais, ledo ritulininkais, sporto salių lankytojais.",
    ],
  },
  helps: {
    items: [
      "Raumenų patempimai: šlaunies, kirkšnies, blauzdos",
      "Raiščių patempimai ir plyšimai: kelio, čiurnos",
      "Sausgyslių perkrovos: Achilo, kelio, alkūnės",
      "Bėgimo traumos ir pasikartojantis skausmas",
      "Reabilitacija po sporto traumų operacijų",
      "Traumų prevencija ir pasiruošimas sezonui",
    ],
    pages: [
      "sporto-traumos",
      "raumenu-patempimas",
      "slaunies-dvigalvio-raumens-patempimas",
      "pritraukiamuju-raumenu-patempimas",
      "blauzdos-raumens-plysimas",
      "priekinio-kryzminio-raiscio-plysimas",
      "achilo-tendinopatija",
      "patelofemoralinis-skausmas",
      "grizimas-i-sporta-po-traumos",
    ],
  },
  visit: [
    { lead: "Išsiaiškiname traumą:", text: "kaip ji įvyko, ką rodo tyrimai, koks jūsų sportas ir artimiausi tikslai." },
    { lead: "Ištiriame:", text: "pažeistą vietą, jėgą, judrumą, pusiausvyrą ir judesio techniką." },
    { lead: "Sudarome planą", text: "su etapais ir kriterijais, kada pereiti prie kito." },
    { lead: "Pasakome, ką galima daryti", text: "jau dabar, kad nereikėtų visiškai nutraukti treniruočių." },
  ],
  methods: {
    items: [
      {
        title: "Pirmosios dienos:",
        text: "saugome pažeistą vietą ir mažiname tinimą, bet ilgo visiško poilsio vengiame (PEACE ir LOVE principai).",
      },
      { title: "Laipsniškas krūvis:", text: "jėgos pratimai raumenims ir sausgyslėms, judrumas, pusiausvyra." },
      { title: "Sportui būdingi judesiai:", text: "bėgimas, šuoliai, krypties keitimas, kontaktas." },
      { title: "Grįžimo testai:", text: "jėgos, šuolių ir funkciniai testai, lyginant sveiką ir pažeistą pusę." },
      { title: "Prevencija:", text: "pratimų programa, kuri mažina pakartotinės traumos riziką." },
    ],
    paragraphs: [
      "Jėgos, pusiausvyros ir judesių valdymo programos gali sumažinti tam tikrų sporto traumų riziką, o vien tempimas traumų nesumažina. Todėl jėgos pratimai yra kiekvieno mūsų plano dalis. Poveikis priklauso nuo sporto šakos, programos ir jos laikymosi, todėl vieno rizikos sumažėjimo procento negalima taikyti kiekvienam žmogui.",
      "Trukmė priklauso nuo traumos: lengvas raumens patempimas dažnai užgyja per kelias savaites, o po raiščio plyšimo ar operacijos reabilitacija trunka mėnesius.",
    ],
  },
  price: {
    lines: ["pirmasis-vizitas", "kineziterapija", "kompleksine"],
  },
  limits: {
    title: "Kada pirmiausia reikia gydytojo?",
    items: [
      "Įtariate lūžį: stiprus skausmas, negalite atsiremti ant kojos, matoma deformacija",
      "Sąnarys per kelias valandas po traumos stipriai patino",
      "Sąnarys užsiblokavo ar „išnyra“",
      "Galvos trauma: svaigimas, pykinimas, atminties sutrikimai",
      "Po traumos tirpsta ar silpsta ranka ar koja",
    ],
    note: "Tokiais atvejais pirmiausia kreipkitės į traumatologą ar skubiosios pagalbos skyrių. Kai gydytojas atmes lūžį ar kitą skubią būklę, reabilitaciją galite pradėti iš karto.",
  },
  team: {
    title: "Sporto reabilitaciją veda",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "edmundas-zlatkus", "piotr-dubrovskij", "mangirdas-kazacenko"],
    note: "Piotr Dubrovskij ir Kotryna Kairytė dirba su Lietuvos nacionaline ir jaunimo ledo ritulio rinktinėmis, Kotryna dar ir su nacionaline moterų futbolo rinktine, Erikas Jatkauskas su jaunimo ledo ritulio rinktine.",
  },
  faq: [
    {
      q: "Kada po traumos galima grįžti į sportą?",
      a: "Kai praėjo skausmas, sugrįžo jėga ir judrumas, o testai rodo, kad pažeista pusė atlaiko sporto krūvį. Vien laikas nėra kriterijus: pasirengimą tikriname testais ir derinamės prie jūsų sporto.",
    },
    {
      q: "Ar reikia ilsėtis, kol užgis?",
      a: "Ilgas visiškas poilsis paprastai nepadeda. Pirmas dienas saugome pažeistą vietą, o tada laipsniškai didiname krūvį, kad audiniai gytų stiprūs.",
    },
    {
      q: "Ar galima treniruotis reabilitacijos metu?",
      a: "Dažniausiai taip: parenkame, ką galima daryti nekenkiant pažeistai vietai. Visiškai sustoti tenka retai.",
    },
    {
      q: "Ar reikia MRT?",
      a: "Ne visada. Daugelį traumų galima įvertinti ištyrimu. Jei įtariame raiščio plyšimą ar kitą sužalojimą, kurį reikia patvirtinti, patarsime, kokį tyrimą daryti.",
    },
    {
      q: "Kiek kainuoja?",
      a: `Pirmasis vizitas su ištyrimu ${eur("pirmasis-vizitas")}, kineziterapijos vizitas ${eur("kineziterapija")}. Su paketu vizitas pigesnis.`,
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "sporto-reabilitacija",
  sources: [ARDERN_2016, PEACE_LOVE_2020, LAUERSEN_2014],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
    { href: "/ka-gydome/grizimas-i-sporta-po-traumos", label: "Grįžimas į sportą po traumos" },
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Reabilitacija po operacijos" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
    { href: "/reabilitacija-be-siuntimo", label: "Privati reabilitacija be siuntimo" },
  ],
};
