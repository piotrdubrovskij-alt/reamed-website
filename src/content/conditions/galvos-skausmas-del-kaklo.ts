import type { ConditionPage } from "./types";
import { JULL_2002, NECK_PAIN_CPG } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 7»).
// Section «Kaklas». Search: galvos skausmas pakaušyje 210, kaklo skausmas pereinantis į galvą 110,
// sprando skausmas pereinantis į galvą 70.
export const galvosSkausmasDelKaklo: ConditionPage = {
  slug: "galvos-skausmas-del-kaklo",
  section: "kaklo-skausmas",
  navTitle: "Galvos skausmas dėl kaklo",
  meta: {
    title: "Galvos skausmas dėl kaklo (cervikogeninis): gydymas Vilniuje | ReaMed",
    description:
      "Galvą skauda nuo pakaušio į smilkinį, vienoje pusėje, ir skausmas stiprėja judinant kaklą? Cervikogeninis galvos skausmas: kas padeda. Kineziterapija Vilniaus centre be siuntimo.",
  },
  conditionName: "Cervikogeninis galvos skausmas",
  hero: {
    h1: "Galvos skausmas dėl kaklo",
    lead: "Galvos skausmas dėl kaklo, arba cervikogeninis galvos skausmas, kyla iš viršutinės kaklo dalies sąnarių ir raumenų. Dažniausiai skauda vieną galvos pusę: nuo pakaušio į smilkinį ar kaktą, o skausmas sustiprėja judinant kaklą ar ilgai laikant vieną padėtį. Tyrime manualinė terapija ir specialūs kaklo pratimai sumažino galvos skausmų dažnį ir stiprumą, o poveikis išliko ir po metų.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Viršutinės kaklo dalies nervai susiję su tais pačiais nervų centrais, kurie jaučia galvos skausmą, todėl kaklo sąnarių ir raumenų skausmas gali būti jaučiamas galvoje. Tokį galvos skausmą dažniausiai lydi kaklo skausmas, ribotas kaklo judesys ir jautrumas pakaušio srityje.",
      "Svarbu atskirti nuo migrenos ir įtampos galvos skausmo, nes jie gydomi kitaip. Migrena dažnai būna su pykinimu, jautrumu šviesai ir garsui. Įtampos galvos skausmas dažniausiai spaudžia abi galvos puses. Galvos skausmas dėl kaklo dažniausiai būna vienoje pusėje ir susijęs su kaklo judesiais ar padėtimi.",
      "Tyrime su 200 žmonių 6 savaičių manualinė terapija, specialūs giliųjų kaklo raumenų pratimai ar abu kartu sumažino galvos skausmų dažnį ir stiprumą, o poveikis išliko ir po 12 mėnesių. Derinant abu būdus, pagerėjo 10 % daugiau žmonių. Kineziterapeutų kaklo skausmo gairės kaklo skausmui su galvos skausmu taip pat rekomenduoja manualinę terapiją ir pratimus.",
    ],
  },
  when: {
    items: [
      "Galvą skauda nuo pakaušio į smilkinį ar kaktą, dažniausiai vienoje pusėje",
      "Galvos skausmas stiprėja ilgai sėdint prie kompiuterio ar judinant kaklą",
      "Kartu skauda ir stingsta kaklas",
      "Sunku pasukti galvą į vieną pusę",
      "Vaistai padeda tik trumpam, skausmas grįžta",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kur ir kada skauda, kaip dažnai, kas sukelia ir kas palengvina, kokius vaistus vartojate.",
    },
    {
      lead: "Tada ištiriame:",
      text: "kaklo judesius, viršutinės kaklo dalies sąnarius, giliųjų kaklo raumenų darbą ir laikyseną.",
    },
    {
      lead: "Atskiriame",
      text: "nuo migrenos, įtampos galvos skausmo ir pavojingų priežasčių; jei reikia, patariame kreiptis į neurologą.",
    },
    { lead: "Ir sudarome planą:", text: "manualinė terapija, pratimai ir darbo vietos pritaikymas." },
  ],
  services: ["kineziterapija", "manualine-terapija", "osteopatija"],
  treatment: {
    items: [
      {
        title: "Manualinė terapija:",
        text: "švelnūs viršutinės kaklo dalies sąnarių judesiai skausmui mažinti ir judesiui gerinti.",
      },
      {
        title: "Giliųjų kaklo raumenų pratimai:",
        text: "mažo krūvio pratimai galvos laikymui ir kaklo kontrolei, kaip tyrime.",
      },
      { title: "Mentės ir laikysenos pratimai,", text: "kad kaklas mažiau pavargtų dirbant." },
      { title: "Darbo vietos ir įpročių pritaikymas:", text: "ekrano aukštis, pertraukos, miegas." },
    ],
    paragraphs: [
      "Tyrime gydymas truko 6 savaites. Mūsų klinikoje paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites ir kasdienių pratimų namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Staigus, labai stiprus galvos skausmas, stipriausias gyvenime",
      "Galvos skausmas su karščiavimu ir sustingusiu sprandu",
      "Sutriko kalba, regėjimas ar pusiausvyra, nusilpo ranka ar koja",
      "Galvos skausmas po traumos ar kritimo",
      "Naujas, vis stiprėjantis galvos skausmas po 50 metų",
    ],
  },
  team: {
    title: "Su galvos ir kaklo skausmu dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Kaip žinoti, ar galvos skausmas dėl kaklo?",
      a: "Į tai rodo skausmas vienoje pusėje nuo pakaušio, susijęs su kaklo judesiais ar padėtimi, kartu su kaklo skausmu ir ribotu judesiu. Tiksliai pasakyti galima ištyrus.",
    },
    {
      q: "Ar padeda kaklo masažas?",
      a: "Masažas gali trumpam sumažinti įtampą. Tyrime ilgalaikį poveikį davė manualinė terapija ir specialūs kaklo pratimai.",
    },
    {
      q: "Ar reikia MRT?",
      a: "Dažniausiai ne: galvos skausmą dėl kaklo atpažįstame ištyrę. Tyrimų reikia, jei yra pavojaus ženklų; tada patariame kreiptis į gydytoją.",
    },
    {
      q: "Ar manualinė terapija kaklui saugi?",
      a: "Kaklui dažniausiai taikome švelnias mobilizacijas. Prieš bet kokią manualinę terapiją ištiriame ir patikriname, ar nėra priežasčių jos netaikyti.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "kaklo-skausmas",
  sources: [JULL_2002, NECK_PAIN_CPG],
  reviewed: null,
  related: [
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
    { href: "/ka-gydome/itampos-galvos-skausmas", label: "Įtampos galvos skausmas" },
    { href: "/ka-gydome/cervikalgija", label: "Cervikalgija" },
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
  ],
};
