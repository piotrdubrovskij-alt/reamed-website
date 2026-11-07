import type { ConditionPage } from "./types";
import { BACK_PAIN_CPG, NASS_SPONDYLOLISTHESIS } from "./sources";

// Draft of 08.11.2026, waiting for Piotr's review (Claude Doc «Пачка 8»).
// Section «Nugara». Search: spondilolistezė 110.
export const spondilolisteze: ConditionPage = {
  slug: "spondilolisteze",
  section: "nugaros-skausmas",
  navTitle: "Spondilolistezė",
  meta: {
    title: "Spondilolistezė (slankstelio poslinkis): simptomai ir gydymas | ReaMed",
    description:
      "MRT ar rentgene rado slankstelio poslinkį? Kas yra spondilolistezė, kodėl dažniausiai gydoma be operacijos ir kokie pratimai padeda. Kineziterapija Vilniaus centre be siuntimo.",
  },
  conditionName: "Juosmeninė spondilolistezė",
  hero: {
    h1: "Spondilolistezė: slankstelio poslinkis",
    lead: "Spondilolistezė reiškia, kad vienas juosmens slankstelis pasislinkęs į priekį, palyginti su esančiu žemiau. Dažniausiai poslinkis nedidelis ir gali visai neskaudėti, bet kartais sukelia nugaros skausmą arba skausmą ir tirpimą kojose. Šiaurės Amerikos stuburo draugijos gairės nurodo, kad dauguma žmonių be neurologinių sutrikimų gerai jaučiasi gydomi be operacijos.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Dažniausiai pasitaiko dvi rūšys. Degeneracinė spondilolistezė atsiranda su amžiumi dėl tarpslankstelinio disko ir sąnarių pakitimų, dažniau vyresniems nei 50 metų, dažniau moterims, dažniausiai tarp IV ir V juosmens slankstelių. Istminė spondilolistezė atsiranda dėl slankstelio lanko defekto, dažnai dar jaunystėje, ir dažniausiai būna tarp V juosmens slankstelio ir kryžkaulio.",
      "Poslinkis vertinamas laipsniais pagal tai, kiek slankstelis pasislinkęs. Dažniausiai jis būna nedidelis (I laipsnio). Poslinkio dydis ne visada atitinka skausmą: daug ką lemia raumenų jėga, judesių kontrolė ir krūvis.",
      "Kai poslinkis siaurina stuburo kanalą, simptomai būna panašūs į stuburo kanalo stenozę: einant skauda ir tirpsta kojos, o pasilenkus ar atsisėdus palengvėja. Operacija dažniau svarstoma, kai silpsta kojos, sutrinka jutimas ar simptomai labai riboja gyvenimą nepaisant gydymo.",
    ],
  },
  when: {
    items: [
      "MRT ar rentgeno aprašyme parašyta „spondilolistezė“ ar „anterolistezė“",
      "Skauda juosmenį, ypač ilgai stovint ar atsilošus",
      "Einant skauda ar tirpsta kojos, atsisėdus palengvėja",
      "Bijote sportuoti, kad slankstelis „nepasislinktų“ daugiau",
      "Svarstote apie operaciją ir pirmiausia norite išbandyti kineziterapiją",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kada ir kur skauda, ar skausmas plinta į kojas, kas palengvina." },
    { lead: "Peržiūrime tyrimus", text: "ir paaiškiname, ką reiškia poslinkio laipsnis jūsų aprašyme." },
    { lead: "Tada ištiriame:", text: "stuburo ir klubų judesius, liemens raumenų kontrolę, kojų jėgą, jutimą ir refleksus." },
    { lead: "Ir sudarome planą:", text: "kokie pratimai ir krūvis tinka dabar, kaip grįžti prie sporto ir darbo." },
  ],
  services: ["kineziterapija", "manualine-terapija"],
  treatment: {
    items: [
      { title: "Liemens ir sėdmenų raumenų pratimai:", text: "judesių kontrolė ir jėga, kad stuburas geriau atlaikytų krūvį." },
      { title: "Padėtys, kurios mažina simptomus:", text: "dažniausiai lenkimas į priekį; mokome, kaip stovėti, sėdėti ir dirbti." },
      { title: "Manualinė terapija:", text: "švelnios technikos aplinkiniams sąnariams ir raumenims skausmui mažinti." },
      { title: "Aktyvumas:", text: "vaikščiojimas, dviratis, plaukimas, laipsniškas grįžimas prie sporto." },
    ],
    paragraphs: [
      "Mūsų klinikoje paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites. Jei skausmas plinta į kojas ir tęsiasi seniai, gydymas užtrunka ilgiau. Pratimus namuose verta tęsti ir vėliau.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Sutriko šlapinimasis ar tuštinimasis, nutirpo tarpvietė",
      "Greitai silpnėja koja ar pėda, kliūva pėda einant",
      "Kojos tirpsta vis labiau, trumpėja atstumas, kurį galite nueiti",
      "Nugarą pradėjo skaudėti po kritimo ar traumos",
      "Karščiuojate, be priežasties krenta svoris ar sirgote onkologine liga",
    ],
  },
  team: {
    title: "Su spondilolisteze dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "kotryna-kairyte", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Ar slankstelį galima „įstatyti“ atgal?",
      a: "Ne. Nei manualinė terapija, nei pratimai poslinkio nepakeičia, ir to nereikia. Gydymo tikslas yra sumažinti simptomus ir sustiprinti nugarą.",
    },
    {
      q: "Ar spondilolistezę reikia operuoti?",
      a: "Dažniausiai ne. Operacija svarstoma, kai silpsta kojos, sutrinka jutimas ar simptomai labai riboja gyvenimą nepaisant gydymo. Sprendžia neurochirurgas ar ortopedas.",
    },
    {
      q: "Ar galima sportuoti?",
      a: "Daugeliu atvejų taip. Krūvį parenkame pagal simptomus ir didiname palaipsniui; iš pradžių gali tekti riboti gilius atsilošimus ir šuolius.",
    },
    {
      q: "Ar poslinkis didės?",
      a: "Dažniausiai poslinkis keičiasi labai lėtai arba visai nesikeičia. Jei didėja simptomai ar silpsta kojos, aptarkite su gydytoju.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "nugaros-skausmas",
  sources: [NASS_SPONDYLOLISTHESIS, BACK_PAIN_CPG],
  reviewed: null,
  related: [
    { href: "/ka-gydome/nugaros-skausmas", label: "Nugaros skausmas" },
    { href: "/ka-gydome/stuburo-kanalo-stenoze", label: "Stuburo kanalo stenozė" },
    { href: "/ka-gydome/skausmas-nugaros-apacioje", label: "Skausmas nugaros apačioje" },
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Išialgija ir radikulopatija" },
  ],
};
