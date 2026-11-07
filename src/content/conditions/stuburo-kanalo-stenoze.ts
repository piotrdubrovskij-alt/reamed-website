import type { ConditionPage } from "./types";
import { DELITTO_2015, STENOSIS_COCHRANE_2016 } from "./sources";

// Draft of 08.11.2026, waiting for Piotr's review (Claude Doc «Пачка 8»).
// Section «Nugara». Search: stuburo kanalo stenozė 90.
export const stuburoKanaloStenoze: ConditionPage = {
  slug: "stuburo-kanalo-stenoze",
  section: "nugaros-skausmas",
  navTitle: "Stuburo kanalo stenozė",
  meta: {
    title: "Stuburo kanalo stenozė: simptomai ir gydymas be operacijos | ReaMed",
    description:
      "Einant skauda ir tirpsta kojos, o atsisėdus ar pasilenkus palengvėja? Juosmeninė stuburo kanalo stenozė: kas padeda ir kada reikia operacijos. Kineziterapija Vilniaus centre be siuntimo.",
  },
  conditionName: "Juosmeninė stuburo kanalo stenozė",
  hero: {
    h1: "Stuburo kanalo stenozė",
    lead: "Stuburo kanalo stenozė yra stuburo kanalo susiaurėjimas juosmens srityje, dažniausiai vyresniems nei 50 metų žmonėms. Būdingiausia, kad einant ar ilgai stovint skauda, tirpsta ar silpsta kojos, o atsisėdus ar pasilenkus į priekį palengvėja. Atsitiktinių imčių tyrime kineziterapija po dvejų metų davė panašų funkcijos pagerėjimą kaip operacija.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Kanalą siaurina su amžiumi storėjantys raiščiai, sąnarių ir disko pakitimai. Tiesiant nugarą kanalas dar labiau susiaurėja, o pasilenkus į priekį praplatėja, todėl daugeliui lengviau eiti pasiremiant pirkinių vežimėliu ar važiuoti dviračiu nei vaikščioti tiesiai.",
      "Amerikiečių tyrime 169 žmonės, vyresni nei 50 metų, kuriems buvo siūloma operacija, atsitiktine tvarka gavo operaciją arba kineziterapiją. Po dvejų metų funkcija abiejose grupėse buvo panaši. Vis dėlto 57 % kineziterapijos grupės žmonių vėliau pasirinko operaciją, todėl sprendimas visada individualus.",
      "Cochrane apžvalga, apėmusi 5 tyrimus ir 643 žmones, aiškios operacijos naudos, palyginti su gydymu be operacijos, nerado, o komplikacijų po operacijos pasitaikė 10–24 % atvejų. Gydymas be operacijos dažniausiai yra pirmas žingsnis, jei nėra pavojaus ženklų.",
    ],
  },
  when: {
    items: [
      "Einant ar ilgai stovint skauda, tirpsta ar silpsta kojos",
      "Atsisėdus ar pasilenkus į priekį greitai palengvėja",
      "Kas kelis šimtus metrų tenka sustoti ir atsisėsti",
      "MRT aprašyme parašyta „stenozė“, ir nežinote, ką daryti",
      "Svarstote apie operaciją ir pirmiausia norite išbandyti kineziterapiją",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kiek galite nueiti, kas palengvina, ar tirpsta kojos, kokie tyrimai atlikti." },
    { lead: "Peržiūrime tyrimus", text: "ir paaiškiname, ką reiškia MRT aprašymas." },
    { lead: "Tada ištiriame:", text: "stuburo ir klubų judesius, kojų jėgą, jutimą ir refleksus, eiseną ir pusiausvyrą." },
    {
      lead: "Atskiriame",
      text: "nuo kraujagyslių ligos, kuri irgi sukelia skausmą einant; jei reikia, patariame kreiptis į gydytoją.",
    },
  ],
  services: ["kineziterapija", "manualine-terapija"],
  treatment: {
    items: [
      { title: "Pratimai su lenkimu į priekį:", text: "padėtys ir judesiai, kurie praplečia kanalą ir mažina simptomus." },
      { title: "Jėga ir ištvermė:", text: "kojų, sėdmenų ir liemens raumenų stiprinimas, dviratis, laipsniškai ilginamas vaikščiojimas." },
      { title: "Manualinė terapija:", text: "juosmens ir klubų sąnarių mobilizacija, kad lengviau būtų judėti." },
      { title: "Pusiausvyra:", text: "pratimai, kad būtų saugiau vaikščioti ir mažiau tikėtina nukristi." },
    ],
    paragraphs: [
      "Mūsų klinikoje paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites, o pratimus namuose verta tęsti ir vėliau, nes jie padeda išlaikyti pasiektą rezultatą.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Sutriko šlapinimasis ar tuštinimasis, nutirpo tarpvietė",
      "Greitai silpnėja koja ar pėda, kliūva pėda einant",
      "Kojos šąla, keičia spalvą, o skausmas einant praeina vos sustojus ir nepasilenkus",
      "Karščiuojate, be priežasties krenta svoris ar sirgote onkologine liga",
    ],
  },
  team: {
    title: "Su stuburo kanalo stenoze dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "erikas-jatkauskas", "kotryna-kairyte"],
  },
  faq: [
    {
      q: "Ar stenozę būtina operuoti?",
      a: "Ne visada. Jei nėra pavojaus ženklų, dažniausiai pirmiausia bandomas gydymas be operacijos. Operaciją svarsto neurochirurgas, kai simptomai labai riboja gyvenimą ar silpsta kojos.",
    },
    {
      q: "Kuo stenozė skiriasi nuo išvaržos?",
      a: "Išvarža dažniau būna jaunesniems, skausmas plinta į vieną koją ir stiprėja sėdint ar pasilenkus. Stenozė dažniau vyresniems, kojos skauda ir tirpsta einant ar stovint, o pasilenkus ar atsisėdus palengvėja.",
    },
    {
      q: "Ar galima vaikščioti?",
      a: "Taip. Vaikščiokite tiek, kiek leidžia simptomai, darykite pertraukas ir atstumą ilginkite palaipsniui. Dviratis dažnai būna lengvesnis už vaikščiojimą.",
    },
    {
      q: "Ar stenozė progresuoja?",
      a: "Daugeliui žmonių simptomai ilgai išlieka panašūs. Jei silpsta kojos ar trumpėja atstumas, kurį galite nueiti, aptarkite su gydytoju.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "nugaros-skausmas",
  sources: [DELITTO_2015, STENOSIS_COCHRANE_2016],
  reviewed: null,
  related: [
    { href: "/ka-gydome/nugaros-skausmas", label: "Nugaros skausmas" },
    { href: "/ka-gydome/spondilolisteze", label: "Spondilolistezė" },
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Išialgija ir radikulopatija" },
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
  ],
};
