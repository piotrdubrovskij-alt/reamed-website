import type { ConditionPage } from "./types";
import { BACK_PAIN_CPG, BOGDUK_2009, BRINJIKJI_2015, CERVICAL_RADICULOPATHY_REVIEW } from "./sources";

// Section page «Plintantis skausmas». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 5»).
// Rebuilt from scratch. Piotr, 07.11: sciatica and acute periods are mostly his; long radiculopathy 10+ visits.
export const plintantisSkausmas: ConditionPage = {
  slug: "plintantis-skausmas",
  section: "plintantis-skausmas",
  navTitle: "Plintantis skausmas",
  topicsTitle: "Su kuo dirbame",
  meta: {
    title: "Plintantis skausmas ir tirpimas: iš nugaros į koją, iš kaklo į ranką | ReaMed",
    description:
      "Skausmas plinta į koją ar ranką, tirpsta, dilgčioja? Kaip atskirti nervo dirginimą nuo plintančio raumenų ir sąnarių skausmo, kada skubiai pas gydytoją, kaip gydome.",
  },
  conditionName: "Plintantis skausmas ir tirpimas",
  hero: {
    h1: "Plintantis skausmas ir tirpimas",
    lead: "Skausmas, kuris plinta iš nugaros į sėdmenį ir koją arba iš kaklo į petį ir ranką, gali kilti dėl dviejų skirtingų priežasčių: dirginamos nervo šaknelės arba stuburo sąnarių, diskų ir raumenų, kurių skausmas tik jaučiamas toliau. Kartais nervas suspaudžiamas toliau nuo stuburo, pavyzdžiui, riešo kanale. Kineziterapeutas ištiria, iš kur kyla simptomai, nes nuo to priklauso gydymas. Daugeliu atvejų jie praeina be operacijos.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    title: "Iš kur kyla plintantis skausmas",
    paragraphs: [
      "Kai dirginama nervo šaknelė, skausmas paprastai būna aštrus, šaudantis ir plinta siaura juosta į ranką ar koją, dažnai žemiau alkūnės ar kelio. Tai vadinama radikuliniu skausmu, o kai prisideda tirpimas ar raumenų silpnumas, radikulopatija. Kitas tipas yra atspindėtas skausmas: jis kyla iš stuburo sąnarių, diskų ar raumenų, būna gilus, maudžiantis, sunkiai lokalizuojamas ir dažniausiai jaučiamas sėdmenyje ir šlaunyje arba mentėje ir petyje.",
      "Tirpimą ir plintantį skausmą gali sukelti ir nervo suspaudimas toliau nuo stuburo: riešo kanalo sindromas, alkūninio nervo dirginimas ties alkūne ar įsitempęs kriaušinis raumuo sėdmenyje. Todėl tiriame ne tik stuburą, bet ir visą nervo kelią iki pirštų.",
    ],
  },
  when: {
    items: [
      "Skausmas plinta iš nugaros į sėdmenį ar koją",
      "Skausmas plinta iš kaklo į mentę, petį ar ranką",
      "Tirpsta, dilgčioja ar degina ranka, pirštai ar koja",
      "Ranka ar koja tapo silpnesnė",
      "Simptomai stiprėja sėdint, pasilenkus ar pasukus galvą",
      "Tirpimas pažadina naktį",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kur tiksliai plinta skausmas ir tirpimas, kas juos didina ir mažina, kaip miegate.",
    },
    {
      lead: "Tada ištiriame:",
      text: "jutimą, raumenų jėgą ir refleksus, nervų įtempimo testus, stuburo, peties ar klubo judesius.",
    },
    {
      lead: "Nustatome,",
      text: "iš kur greičiausiai kyla simptomai: nervo šaknelė, stuburo audiniai ar nervo suspaudimas toliau nuo stuburo.",
    },
    { lead: "Ir sudarome planą:", text: "gydymas, pratimai ir aiškūs ženklai, kada reikia gydytojo ar tyrimų." },
  ],
  services: ["kineziterapija", "manualine-terapija", "osteopatija"],
  treatment: {
    items: [
      { title: "Skausmo mažinimas:", text: "padėtys ir judesiai, kurie mažina plitimą, švelni stuburo mobilizacija." },
      { title: "Nervų slydimo pratimai:", text: "jautrus nervas palaipsniui pratinamas prie judesio." },
      { title: "Jėgos ir judrumo pratimai:", text: "nugaros, kaklo ir galūnių raumenims, kai skausmas sumažėja." },
      {
        title: "Kasdienė veikla:",
        text: "kaip sėdėti, dirbti, miegoti ir grįžti prie sporto, kad simptomai nesugrįžtų.",
      },
    ],
    paragraphs: [
      "Ūmiam plintančiam skausmui sumažinti dažnai pakanka kelių vizitų, o užsitęsusiai radikulopatijai paprastai reikia 10 ir daugiau vizitų, priklausomai nuo stadijos. Jei per kelias savaites būklė negerėja arba silpsta ranka ar koja, siūlome pasitarti su gydytoju.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Sutriko šlapinimasis ar tuštinimasis, tirpsta tarpvietė",
      "Greitai silpsta ranka ar koja, nukaro pėda",
      "Tirpsta ar silpsta abi rankos ar abi kojos, sutrinka eisena",
      "Staiga nutirpo vienos kūno pusės ranka, koja ar veidas, sunku kalbėti: skubiai kvieskite 112",
      "Skausmas atsirado po traumos arba kartu karščiuojate",
    ],
  },
  team: {
    title: "Su plintančiu skausmu dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "erikas-jatkauskas"],
    note: "Išialgijos ir ūmaus plintančio skausmo atvejais dažniausiai dirba Piotr.",
  },
  faq: [
    {
      q: "Ar plintantis skausmas visada reiškia išvaržą?",
      a: "Ne. Išvarža yra dažna priežastis, bet skausmas į koją ar ranką gali plisti ir iš stuburo sąnarių, raumenų ar suspausto nervo toliau nuo stuburo. Be to, išvaržos dažnai randamos MRT ir žmonėms, kuriems visai neskauda.",
    },
    {
      q: "Ar reikia MRT?",
      a: "Dažniausiai ne iš karto. MRT reikia, kai silpsta raumenys, simptomai ilgai negerėja arba svarstoma operacija.",
    },
    {
      q: "Ką daryti, kai tirpsta ranka?",
      a: "Dažniausiai tai nepavojinga, bet verta ištirti, iš kur kyla tirpimas. Jei ranka ir veidas nutirpo staiga ir sunku kalbėti, nedelsdami kvieskite 112.",
    },
    {
      q: "Ar padeda šildymas ir masažas?",
      a: "Gali trumpam palengvinti, bet ilgalaikį poveikį duoda tikslingi pratimai ir judesiai, kurie mažina nervo dirginimą.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "plintantis-skausmas",
  sources: [BOGDUK_2009, CERVICAL_RADICULOPATHY_REVIEW, BACK_PAIN_CPG, BRINJIKJI_2015],
  reviewed: null,
  related: [
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Išialgija ir radikulopatija" },
    { href: "/ka-gydome/kaklo-radikulopatija", label: "Kaklo radikulopatija" },
    { href: "/ka-gydome/tirpsta-ranka", label: "Tirpsta ranka ar pirštai" },
    { href: "/ka-gydome/rieso-kanalo-sindromas", label: "Riešo kanalo sindromas" },
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
  ],
};
