import type { ConditionPage } from "./types";
import { BACK_PAIN_CPG, LBP_LANCET_2018 } from "./sources";

// Section page «Nugara». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 3»).
// Piotr, 07.11: acute periods and sciatica are mostly his; visits: acute a few, correction at least 5,
// long-lasting radiculopathy 10 or more depending on the stage.
export const nugarosSkausmas: ConditionPage = {
  slug: "nugaros-skausmas",
  section: "nugaros-skausmas",
  navTitle: "Nugara",
  topicsTitle: "Su kuo dirbame",
  meta: {
    title: "Nugaros skausmas: priežastys ir gydymas Vilniuje | ReaMed",
    description:
      "Skauda nugarą, užstrigo juosmuo ar skausmas plinta į koją? Kada praeina savaime, kada reikia pagalbos, kaip gydome. Kineziterapija Vilniaus centre, be siuntimo.",
  },
  conditionName: "Nugaros skausmas",
  hero: {
    h1: "Nugaros skausmas",
    lead: "Nugaros skausmas dažniausiai nėra pavojingas ir per kelias savaites gerokai sumažėja, ypač jei judate, o ne gulite. Kineziterapeutas ištiria, iš kur jis kyla, atmeta pavojingas priežastis ir sudaro planą: nuo ūmaus skausmo malšinimo iki pratimų, kad skausmas negrįžtų. ReaMed yra privati klinika Vilniaus centre: siuntimo nereikia.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    title: "Kodėl skauda nugarą",
    paragraphs: [
      "Daugumai žmonių tikslios struktūrinės priežasties nustatyti neįmanoma ir nereikia: skausmą palaiko raumenų, sąnarių ir nervų jautrumas, krūvis, miegas, stresas. Tokį skausmą gydytojai vadina nespecifiniu. Rečiau skausmą sukelia nervo šaknelės dirginimas dėl išvaržos (tada jis plinta į koją), stuburo kanalo stenozė ar kitos konkrečios būklės.",
      "Tarptautinės gairės rekomenduoja pirmiausia paaiškinti, kas vyksta, likti aktyviam ir daryti pratimus. Vaizdinius tyrimus, poilsį lovoje, stiprius skausmo vaistus ir operacijas jos siūlo taikyti saikingai, tik kai tam yra priežastis.",
    ],
  },
  when: {
    items: [
      "Nugarą skauda ilgiau nei kelias dienas ir tai trukdo dirbti ar miegoti",
      "„Užstrigo“ nugara: sunku atsitiesti, apsiauti batus",
      "Skausmas plinta į sėdmenį ar koją, tirpsta",
      "Skausmas kartojasi kas kelis mėnesius",
      "Skauda sėdint darbe ar vairuojant",
      "Norite grįžti prie sporto po nugaros skausmo",
    ],
  },
  assess: [
    { lead: "Pirmiausia išklausome:", text: "kada ir kaip prasidėjo, kur plinta skausmas, kas jį didina ir mažina." },
    { lead: "Tada ištiriame:", text: "stuburo ir klubų judesius, nervų funkciją (jutimą, jėgą, refleksus), skausmo provokacijos testus." },
    { lead: "Atmetame pavojingas priežastis", text: "ir pasakome, ar reikia tyrimų ar gydytojo." },
    { lead: "Ir sudarome planą:", text: "ką daryti dabar, kokie judesiai saugūs, kaip grįžti prie darbo ir sporto." },
  ],
  services: ["kineziterapija", "manualine-terapija", "osteopatija", "gydomasis-masazas"],
  treatment: {
    items: [
      {
        title: "Ūmiame periode:",
        text: "padėtys ir judesiai skausmui mažinti, manualinė terapija, švelnūs pratimai, patarimai, kaip miegoti, sėdėti ir dirbti.",
      },
      { title: "Pratimai:", text: "palaipsniui stiprėjantys pilvo, nugaros ir sėdmenų raumenų bei judrumo pratimai." },
      { title: "Krūvio ir įpročių keitimas:", text: "darbo vieta, sėdėjimas, kėlimas, sportas." },
      { title: "Papildomai, jei tinka:", text: "gydomasis masažas, kinezioteipavimas, osteopatija." },
    ],
    paragraphs: [
      "Ūmiam skausmui dažnai pakanka kelių vizitų. Pasikartojančiam ar ilgalaikiam skausmui koreguoti paprastai reikia ne mažiau kaip 5 vizitų, o užsitęsusiai radikulopatijai 10 ir daugiau, priklausomai nuo stadijos.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Sutriko šlapinimasis ar tuštinimasis, tirpsta tarpvietė",
      "Greitai silpsta koja ar pėda",
      "Nugarą skauda po stipraus kritimo ar traumos",
      "Kartu karščiuojate ar be priežasties krenta svoris",
      "Esate sirgę onkologine liga ir atsirado naujas nugaros skausmas",
      "Skausmas stiprus ir nemažėja net ramybėje ir naktį",
    ],
  },
  team: {
    title: "Su nugaros skausmu dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "erikas-jatkauskas", "kotryna-kairyte"],
    note: "Ūmaus skausmo ir išialgijos atvejais dažniausiai dirba Piotr.",
  },
  faq: [
    {
      q: "Kaip atskirti nugaros skausmą nuo inkstų skausmo?",
      a: "Inkstų skausmas dažniausiai jaučiamas šone, nekinta judant, kartu gali būti karščiavimas, skausmingas ar dažnas šlapinimasis. Nugaros skausmas dažniau keičiasi judant, sėdint ar keliant. Jei abejojate ar karščiuojate, kreipkitės į gydytoją.",
    },
    {
      q: "Ar reikia gulėti, kai skauda nugarą?",
      a: "Ne. Ilgas gulėjimas dažniausiai skausmą užtęsia; geriau judėti tiek, kiek leidžia skausmas.",
    },
    {
      q: "Ar reikia MRT?",
      a: "Dažniausiai ne: be pavojaus ženklų tyrimas gydymo nekeičia. MRT reikia, kai yra nervų pažeidimo požymių ar įtariama rimta priežastis.",
    },
    {
      q: "Kokie pratimai nugarai geriausi?",
      a: "Tie, kuriuos darote reguliariai ir kurie tinka jūsų būklei. Pratimus parenkame ištyrę ir parodome, kaip didinti krūvį.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "nugaros-skausmas",
  sources: [BACK_PAIN_CPG, LBP_LANCET_2018],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Išialgija ir radikulopatija" },
    { href: "/ka-gydome/skausmas-nugaros-apacioje", label: "Skausmas nugaros apačioje" },
    { href: "/ka-gydome/osteochondroze", label: "Osteochondrozė" },
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
  ],
};
