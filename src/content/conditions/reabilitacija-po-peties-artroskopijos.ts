import type { ConditionPage } from "./types";
import { MAZUQUIN_2021, RC_REPAIR_CONSENSUS } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 7»).
// Operation: lives in «Po operacijų», listed again in «Petys». Search: kaip miegoti po peties operacijos 170,
// reabilitacija po peties sausgyslės operacijos 110. Piotr, 07.11: rehab starts early, as the surgeon allows;
// sports cases mostly Kotryna, older patients Mangirdas.
export const reabilitacijaPoPetiesArtroskopijos: ConditionPage = {
  slug: "reabilitacija-po-peties-artroskopijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po peties artroskopijos",
  meta: {
    title: "Reabilitacija po peties operacijos (rotatorių manžetės)",
    description:
      "Kaip atsistatyti po peties artroskopijos ar rotatorių manžetės siūlės: etapai, įtvaras, kaip miegoti, kada vairuoti ir dirbti. Vilniuje, be siuntimo.",
  },
  conditionName: "Būklė po peties artroskopijos ir rotatorių manžetės siūlės",
  hero: {
    h1: "Reabilitacija po peties artroskopijos ir rotatorių manžetės siūlės",
    lead: "Po peties artroskopijos atsistatymas priklauso nuo to, kas buvo padaryta. Jei susiūta rotatorių manžetės sausgyslė, petį kelias savaites saugo įtvaras, o jėgos pratimai pradedami tik sausgyslei prigijus. Kineziterapeutas veda reabilitaciją pagal jūsų operaciją ir chirurgo nurodymus: nuo švelnių pasyvių judesių iki jėgos ir grįžimo prie darbo ar sporto. Pradedame anksti, be siuntimo ir be eilių.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    paragraphs: [
      "Rotatorių manžetė yra keturi raumenys, kurių sausgyslės apgaubia peties sąnarį ir laiko žastikaulio galvą vietoje. Artroskopijos metu chirurgas per kelis nedidelius pjūvius susiuva plyšusią sausgyslę, pašalina įspaudimą ar sutvarko kitus pažeidimus. Susiūta sausgyslė prie kaulo prigyja per kelias savaites, todėl reabilitacija vyksta etapais.",
      "Amerikos peties ir alkūnės terapeutų sutarimas po rotatorių manžetės siūlės siūlo tokią eigą: apie 2 savaites griežtai su įtvaru, nuo 2 iki 6 savaitės saugūs pasyvūs judesiai, vėliau aktyvūs judesiai, o jėgos pratimai nuo maždaug 12 savaitės. Tikslų laiką lemia plyšimo dydis, sausgyslės būklė ir chirurgo nurodymai.",
      "Apžvalga parodė, kad ankstyvesni judesiai po sausgyslės siūlės pagerina judesių amplitudę ir nedidina pakartotinio plyšimo rizikos, palyginti su vėlesne reabilitacijos pradžia.",
    ],
  },
  when: {
    items: [
      "Operacija numatyta: verta pasiruošti iš anksto",
      "Ką tik po operacijos, su įtvaru, ir norite žinoti, ką galima daryti",
      "Sunku miegoti, petys skauda naktį",
      "Įtvarą jau nuėmė, bet ranka nekyla, trūksta judesio",
      "Trūksta jėgos dirbti, apsirengti, kelti ranką virš galvos",
      "Norite grįžti prie plaukimo, teniso ar treniruočių sporto salėje",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kas buvo padaryta operacijos metu ir ką nurodė chirurgas (atsineškite išrašą)." },
    { lead: "Tada ištiriame:", text: "skausmą, peties ir mentės judesius, laikyseną, o vėliau ir raumenų jėgą." },
    { lead: "Nustatome etapą", text: "ir ką saugiai galima daryti dabar, o ko dar ne." },
    {
      lead: "Ir sudarome planą:",
      text: "pratimai klinikoje ir namuose, įtvaro naudojimas, miegas, grįžimas prie darbo ir sporto.",
    },
  ],
  services: ["pooperacine-reabilitacija", "kineziterapija", "manualine-terapija"],
  treatment: {
    items: [
      {
        title: "Pirmos savaitės:",
        text: "įtvaras, švelnūs pasyvūs peties judesiai pagal chirurgo leidimą, alkūnės, riešo ir mentės judesiai, patarimai miegui ir kasdienei veiklai.",
      },
      { title: "Judesio etapas:", text: "aktyvūs judesiai ir mentės kontrolė, kai leidžia chirurgas." },
      { title: "Jėgos etapas:", text: "rotatorių manžetės ir mentės raumenų stiprinimas, darbas virš galvos." },
      { title: "Grįžimas prie darbo ir sporto:", text: "palaipsniui didinamas krūvis ir testai." },
    ],
    paragraphs: [
      "Jėgos pratimai po sausgyslės siūlės pradedami maždaug po 3 mėnesių, todėl visas atsistatymas ir sportas su ranka virš galvos trunka kelis mėnesius ar ilgiau. Po įspaudimo pašalinimo be sausgyslės siūlės atsistatoma greičiau.",
      "Reabilitaciją pradedame anksti, kai leidžia chirurgas: nuo pirmų savaičių patariame, kaip miegoti, rengtis ir judėti, ir atliekame leistinus švelnius judesius.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į operavusį gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Karščiuojate, žaizda parausta, šyla ar iš jos teka",
      "Stiprus skausmas, kuris nemažėja nuo vaistų ir poilsio",
      "Ranka tinsta, šąla, tirpsta ar keičia spalvą",
      "Atsirado dusulys ar skausmas krūtinėje",
      "Pajutote trakštelėjimą ir staiga negalite pakelti rankos",
    ],
  },
  team: {
    title: "Su atsistatymu po peties operacijos dirba",
    specialists: ["mangirdas-kazacenko", "kotryna-kairyte", "piotr-dubrovskij", "erikas-jatkauskas"],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Kaip miegoti po peties operacijos?",
      a: "Pirmas savaites daugeliui patogiausia miegoti pusiau sėdint, pavyzdžiui, su keliomis pagalvėmis, su įtvaru, jei jį nurodė chirurgas. Pagalvė po alkūne ir dilbiu sumažina tempimą. Ant operuoto peties negulėkite, kol to neleido chirurgas.",
    },
    {
      q: "Kiek laiko nešioti įtvarą?",
      a: "Tai nurodo chirurgas. Po rotatorių manžetės siūlės įtvaras dažniausiai nešiojamas kelias savaites; nusiimti jį galima tik tiek, kiek leista, pavyzdžiui, pratimams ir higienai.",
    },
    {
      q: "Kada galima vairuoti?",
      a: "Kai nebereikia įtvaro, galite saugiai valdyti vairą abiem rankomis ir vaistai nemažina dėmesio. Sprendimą derinkite su chirurgu.",
    },
    {
      q: "Kada pradėti reabilitaciją?",
      a: "Kuo anksčiau, kai leidžia chirurgas. Pirmomis savaitėmis svarbūs patarimai ir švelnūs leistini judesiai, todėl nelaukiame, kol nuims įtvarą.",
    },
    {
      q: "Ar priklauso kompensuojama reabilitacija po peties operacijos?",
      a: "Kompensuojamą reabilitaciją skiria gydytojas pagal nustatytus kriterijus. ReaMed yra privati klinika: galite pradėti be siuntimo ir be eilės, kai tik leidžia chirurgas.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [RC_REPAIR_CONSENSUS, MAZUQUIN_2021],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/peties-problemos", label: "Peties skausmas" },
    { href: "/ka-gydome/subakromialinis-skausmo-sindromas", label: "Subakromialinis skausmo sindromas" },
    { href: "/ka-gydome/atsistatymas-po-operaciju", label: "Reabilitacija po operacijų" },
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Pooperacinė reabilitacija" },
  ],
};
