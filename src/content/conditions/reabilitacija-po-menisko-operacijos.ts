import type { ConditionPage } from "./types";
import { MENISCUS_CONSENSUS, MENISCUS_ROOT_REHAB } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 1»).
// Piotr, 07.11: rehab starts early, about a week after surgery or as the surgeon allows;
// sports cases after surgery mostly Kotryna, older patients Mangirdas.
export const reabilitacijaPoMeniskoOperacijos: ConditionPage = {
  slug: "reabilitacija-po-menisko-operacijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po menisko operacijos",
  meta: {
    title: "Reabilitacija po menisko operacijos Vilniuje: etapai ir trukmė | ReaMed",
    description:
      "Kaip atsistatyti po menisko pašalinimo ar susiuvimo: etapai, kada galima vaikščioti, vairuoti ir sportuoti. Privati reabilitacija Vilniaus centre be siuntimo ir be eilės.",
  },
  conditionName: "Būklė po menisko operacijos",
  hero: {
    h1: "Reabilitacija po menisko operacijos",
    lead: "Po menisko operacijos atsistatymas priklauso nuo to, kas buvo padaryta: menisko dalis pašalinta ar meniskas susiūtas. Po pašalinimo dažniausiai grįžtama prie veiklos greičiau, po susiuvimo reikia daugiau laiko, kad meniskas sugytų. Kineziterapeutas veda reabilitaciją pagal jūsų operaciją ir chirurgo nurodymus, kad kelias atgautų judesį, jėgą ir pasitikėjimą.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Meniskai yra du pusmėnulio formos kremzliniai „amortizatoriai“ kelio sąnaryje. Juos dažniausiai pažeidžia sukamasis judesys sportuojant arba ilgainiui atsiradę degeneraciniai plyšimai. Operacija atliekama artroskopiškai: chirurgas pašalina pažeistą dalį (meniscektomija) arba ją susiuva (menisko siūlė).",
      "Tarptautinis 2024 m. sutarimas rekomenduoja: po menisko dalies pašalinimo reabilitaciją vesti pagal pasiektus tikslus, o ne pagal kalendorių; po susiuvimo derinti ir laiko, ir tikslų kriterijus, nes sugyti meniskui reikia laiko.",
    ],
  },
  when: {
    items: [
      "Operacija numatyta: verta pasiruošti iš anksto",
      "Ką tik išėjote iš ligoninės ir norite pradėti teisingai",
      "Kelias tinsta, sunku jį visiškai ištiesti ar sulenkti",
      "Šlubuojate, nepasitikite koja laiptuose",
      "Norite grįžti prie bėgimo, krepšinio, futbolo ar ledo ritulio",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kokia buvo operacija ir ką nurodė chirurgas (atsineškite išrašą)." },
    { lead: "Tada ištiriame:", text: "kelio tinimą, judesių amplitudę, keturgalvio raumens aktyvumą, eiseną." },
    { lead: "Nustatome etapą", text: "ir tikslus, kuriuos reikia pasiekti prieš kitą žingsnį." },
    { lead: "Ir sudarome planą:", text: "pratimai klinikoje ir namuose, krūvio didinimas, grįžimas prie darbo ir sporto." },
  ],
  services: ["pooperacine-reabilitacija", "sporto-reabilitacija", "kineziterapija", "gydomasis-masazas"],
  treatment: {
    items: [
      {
        title: "Pirmos savaitės:",
        text: "tinimo mažinimas, kelio ištiesimas ir lenkimas, keturgalvio raumens „įjungimas“, eisena. Po siūlės laikomės chirurgo nurodytų apribojimų dėl sulenkimo ir apkrovos.",
      },
      { title: "Jėgos etapas:", text: "kojos ir klubo raumenų stiprinimas, pusiausvyra, laiptai." },
      { title: "Grįžimas prie sporto:", text: "bėgimas, šuoliai, krypties keitimai, testai prieš grįžtant į treniruotes." },
    ],
    paragraphs: [
      "Po menisko dalies pašalinimo prie kasdienės veiklos dažniausiai grįžtama per kelias savaites, prie sporto dažnai per 1–3 mėnesius. Po susiuvimo sportuoti dažniausiai leidžiama ne anksčiau kaip po 4–6 mėnesių. Tikslų laiką nustato jūsų chirurgas ir pasiekti funkcijos tikslai.",
      "Reabilitaciją pradedame anksti: maždaug po savaitės po operacijos arba kai leidžia chirurgas, nes chirurgų nurodymai skiriasi. Nelaukiame kelių mėnesių: nuo pirmų dienų patariame, ką daryti namuose, ir pradedame švelnius judesius, todėl kelias greičiau atgauna judesį.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į operavusį gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Karščiuojate, žaizda parausta, šyla ar iš jos teka",
      "Staiga stipriai patino ir skauda blauzdą",
      "Atsirado dusulys ar skausmas krūtinėje",
      "Kelias staiga „užstrigo“ ir negalite jo ištiesti",
    ],
  },
  team: {
    title: "Su atsistatymu po menisko operacijos dirba",
    specialists: ["kotryna-kairyte", "mangirdas-kazacenko", "piotr-dubrovskij", "erikas-jatkauskas"],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Ar priklauso kompensuojama reabilitacija po menisko operacijos?",
      a: "Kompensuojamą reabilitaciją skiria gydytojas pagal nustatytus kriterijus. ReaMed yra privati klinika: galite pradėti be siuntimo ir be eilės, kai tik leidžia chirurgas.",
    },
    {
      q: "Kada pradėti reabilitaciją?",
      a: "Kuo anksčiau, tuo geriau: dažniausiai maždaug po savaitės po operacijos arba kai leidžia chirurgas.",
    },
    {
      q: "Kada galima vairuoti?",
      a: "Kai galite saugiai ir greitai stabdyti operuota koja, o vaistai nemažina dėmesio. Su automatine pavarų dėže po kairio kelio operacijos dažniausiai anksčiau nei po dešinio; sprendimą derinkite su chirurgu.",
    },
    {
      q: "Kiek vizitų reikės?",
      a: "Priklauso nuo operacijos ir tikslų. Po pirmojo vizito pasakome planą; namų pratimai yra tokia pat svarbi gydymo dalis kaip vizitai.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [MENISCUS_CONSENSUS, MENISCUS_ROOT_REHAB],
  reviewed: null,
  related: [
    { href: "/ka-gydome/kelio-skausmas", label: "Kelio skausmas" },
    { href: "/ka-gydome/menisko-plysimas", label: "Menisko plyšimas" },
    { href: "/ka-gydome/atsistatymas-po-operaciju", label: "Reabilitacija po operacijų" },
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Pooperacinė reabilitacija" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
