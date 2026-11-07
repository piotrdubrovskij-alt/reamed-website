import type { ConditionPage } from "./types";
import { COOMBES_2013, CTS_CPG, LATERAL_ELBOW_CPG } from "./sources";

// Section page «Alkūnė ir riešas». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 7»).
// Search: riešo kanalo sindromas 480, lateralinis epikondilitas 320, alkūnės skausmas 170, riešo skausmas 140,
// rankos sausgyslių uždegimas 110.
export const alkunesIrRiesoSkausmas: ConditionPage = {
  slug: "alkunes-ir-rieso-skausmas",
  section: "alkunes-ir-rieso-skausmas",
  navTitle: "Alkūnė ir riešas",
  topicsTitle: "Su kuo dirbame",
  meta: {
    title: "Alkūnės ir riešo skausmas: gydymas Vilniuje | ReaMed",
    description:
      "Skauda alkūnę keliant puodelį, naktį tirpsta pirštai ar skauda riešą po lūžio? Teniso alkūnė, riešo kanalo sindromas, De Quervain. Kineziterapija Vilniaus centre be siuntimo.",
  },
  conditionName: "Alkūnės ir riešo skausmas",
  hero: {
    h1: "Alkūnės ir riešo skausmas",
    lead: "Dažniausios priežastys yra teniso ar golfo alkūnė (sausgyslių perkrova), riešo kanalo sindromas, kai tirpsta pirštai, De Quervain sindromas nykščio pusėje ir sustingimas po lūžio ar traumos. Daugumai padeda gydymas be operacijos: pratimai, krūvio pritaikymas, kartais įtvaras. ReaMed yra privati klinika Vilniaus centre: siuntimo nereikia.",
    specialist: "erikas-jatkauskas",
  },
  about: {
    title: "Kodėl skauda alkūnę ar riešą",
    paragraphs: [
      "Rankos sausgyslės dažniausiai perkraunamos dirbant kompiuteriu ar su įrankiais, keliant ar sportuojant su rakete. Skausmas alkūnės išorėje yra teniso alkūnė, vidinėje pusėje golfo alkūnė, o riešo nykščio pusėje dažnai De Quervain sindromas. Kai naktį tirpsta nykštys, smilius ir didysis pirštas, dažniausiai tai riešo kanalo sindromas.",
      "Amerikos kineziterapeutų gairės teniso alkūnei rekomenduoja pratimus, mokymą, kaip pritaikyti krūvį, ir manualinę terapiją. Kortikosteroidų injekcija skausmą sumažina greitai, bet tyrime po metų rezultatai po jos buvo prastesni, o liga dažniau atsinaujino.",
      "Riešo kanalo sindromui gairės rekomenduoja riešo įtvarą, laikantį riešą tiesiai, ir manualinę terapiją. Operacija svarstoma, kai tirpimas nuolatinis, silpsta nykščio raumenys ar gydymas be operacijos nepadeda.",
    ],
  },
  when: {
    items: [
      "Skauda alkūnės išorę keliant puodelį, spaudžiant ranką ar dirbant pele",
      "Skauda alkūnės vidinę pusę metant, žaidžiant golfą ar keliant svorius",
      "Naktį tirpsta pirštai, ryte ranka atrodo nesava",
      "Skauda riešą nykščio pusėje, ypač keliant vaiką ar sukant riešą",
      "Po riešo ar alkūnės lūžio trūksta judesio ir jėgos",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kokie judesiai ir darbai sukelia skausmą ar tirpimą, kiek laiko tai trunka, ar buvo trauma.",
    },
    {
      lead: "Tada ištiriame:",
      text: "alkūnės ir riešo judesius, sukibimo jėgą, sausgyslių ir nervų testus, taip pat kaklą.",
    },
    {
      lead: "Atskiriame",
      text: "sausgyslių, nervų ir kaklo kilmės skausmą, nes tirpimas ar skausmas rankoje gali ateiti iš kaklo.",
    },
    {
      lead: "Ir sudarome planą:",
      text: "pratimai, darbo ir sporto krūvio pritaikymas, įtvaras, jei reikia.",
    },
  ],
  services: ["kineziterapija", "manualine-terapija", "pooperacine-reabilitacija", "fizioterapija"],
  treatment: {
    items: [
      {
        title: "Pratimai sausgyslėms:",
        text: "palaipsniui didinamas krūvis, kad sausgyslė vėl atlaikytų darbą ir sportą.",
      },
      { title: "Krūvio pritaikymas:", text: "darbo vietos, įrankių, sukibimo ir treniruočių pakeitimai." },
      {
        title: "Įtvaras, kai reikia:",
        text: "naktinis riešo įtvaras tirpimui, dilbio juosta teniso alkūnei.",
      },
      { title: "Manualinė terapija", text: "skausmui mažinti ir judesiui gerinti, kartu su pratimais." },
      {
        title: "Po lūžio:",
        text: "judesių atgavimas, sukibimo jėga ir grįžimas prie darbo, pagal gydytojo nurodymus.",
      },
    ],
    paragraphs: [
      "Sausgyslių skausmas dažniausiai gerėja per kelias savaites ar mėnesius, jei krūvis dozuojamas teisingai. Paprastai reikia ne mažiau kaip 5 vizitų ir kasdienių pratimų namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po kritimo ant ištiestos rankos skauda ir tinsta riešas nykščio pusėje",
      "Po traumos alkūnė ar riešas deformuoti, negalite jų judinti",
      "Ranka ar pirštai staiga nusilpo, krenta daiktai",
      "Riešas ar alkūnė karšti, parausę, karščiuojate",
      "Tirpsta ranka, kartu skauda krūtinę ar sunku kvėpuoti",
    ],
  },
  team: {
    title: "Su alkūnės ir riešo skausmu dirba",
    specialists: ["erikas-jatkauskas", "mangirdas-kazacenko", "kotryna-kairyte", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Ar teniso alkūnę verta gydyti injekcija?",
      a: "Kortikosteroidų injekcija greitai sumažina skausmą, bet tyrime po metų rezultatai buvo prastesni, o liga dažniau atsinaujino. Sprendimą dėl injekcijos priima gydytojas, kartu su jumis įvertinęs naudą ir riziką.",
    },
    {
      q: "Ar padeda riešo įtvaras naktį?",
      a: "Riešo kanalo sindromui naktinis įtvaras, laikantis riešą tiesiai, yra vienas iš gairėse rekomenduojamų gydymo būdų.",
    },
    {
      q: "Kada riešo kanalo sindromą reikia operuoti?",
      a: "Kai tirpimas nuolatinis, silpsta nykščio raumenys ar gydymas be operacijos nepadeda. Tai sprendžia gydytojas; jei matome tokius ženklus, pasakome.",
    },
    {
      q: "Ar galima toliau dirbti kompiuteriu?",
      a: "Dažniausiai taip, pakeitus darbo vietą ir darant pertraukas. Visiškas poilsis sausgyslėms nepadeda: joms reikia tinkamai dozuoto krūvio.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  sources: [LATERAL_ELBOW_CPG, COOMBES_2013, CTS_CPG],
  reviewed: null,
  related: [
    { href: "/ka-gydome/teniso-alkune", label: "Teniso alkūnė" },
    { href: "/ka-gydome/rieso-kanalo-sindromas", label: "Riešo kanalo sindromas" },
    { href: "/ka-gydome/tirpsta-ranka", label: "Tirpsta ranka ar pirštai" },
    { href: "/ka-gydome/tendinopatijos", label: "Sausgyslių uždegimas ir tendinopatija" },
  ],
};
