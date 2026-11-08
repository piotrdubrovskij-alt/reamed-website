import type { ConditionPage } from "./types";
import { BACK_PAIN_CPG, CHIU_2015, ZHU_2025 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 1»).
export const isialgijaRadikulopatija: ConditionPage = {
  slug: "isialgija-radikulopatija",
  section: "nugaros-skausmas",
  navTitle: "Išialgija ir radikulopatija",
  meta: {
    title: "Išialgija ir radikulopatija: sėdimojo nervo uždegimas",
    description:
      "Skausmas plinta iš nugaros į koją, tirpsta pėda? Kas yra išialgija ir radikulopatija, kaip ji gydoma be operacijos ir kada skubiai pas gydytoją.",
  },
  conditionName: "Išialgija (juosmens radikulopatija)",
  hero: {
    h1: "Išialgija ir radikulopatija: kai skausmas plinta į koją",
    lead: "Išialgija yra skausmas, plintantis iš juosmens per sėdmenį į koją, dažnai žemiau kelio. Žmonės ją vadina sėdimojo nervo uždegimu, o gydytojai, kai dirginama nervo šaknelė, radikulopatija. Dažniausia priežastis yra disko išvarža. Daugumai žmonių skausmas sumažėja be operacijos, o kineziterapija padeda jį valdyti ir saugiai grįžti prie veiklos.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Sėdimasis nervas susidaro iš kelių juosmens ir kryžkaulio nervų šaknelių. Kai viena iš jų dirginama ar suspaudžiama, skausmas, tirpimas ar silpnumas jaučiamas toje kojos vietoje, kurią ši šaknelė inervuoja. Todėl pagal tai, kur plinta simptomai, galima spręsti, kuri šaknelė dirginama.",
      "Ne kiekvienas skausmas kojoje yra „nervas“. Pirmojo vizito metu atskiriame nervinį skausmą nuo atspindėto, nes nuo to priklauso gydymas.",
    ],
    list: {
      intro: "Dažniausios priežastys:",
      items: [
        "tarpslankstelinio disko išvarža (jaunesniems ir vidutinio amžiaus žmonėms);",
        "stuburo kanalo ar tarpslankstelinės angos susiaurėjimas (vyresniems);",
        "rečiau raumenų ar sąnarių skausmas, kuris tik plinta į koją, bet nėra nervinis.",
      ],
    },
  },
  when: {
    items: [
      "Skausmas plinta į sėdmenį, šlaunies ar blauzdos užpakalinę pusę, pėdą",
      "Koja tirpsta, dilgčioja, „bėga skruzdėlės“",
      "Skausmas kojoje stipresnis nei nugaroje",
      "Sunku sėdėti, ilgiau vaikščioti ar miegoti",
      "Simptomai nepraeina per 1–2 savaites",
      "Skausmas kartojasi kelis kartus per metus",
    ],
  },
  assess: [
    { lead: "Pirmiausia išklausome:", text: "kur tiksliai plinta skausmas, kada jis didėja, kaip miegate ir dirbate." },
    { lead: "Tada ištiriame:", text: "kojų jutimą, refleksus, raumenų jėgą, nervo įtempimo testus ir stuburo judesius." },
    { lead: "Atskiriame:", text: "ar tai nervo šaknelės dirginimas, ar skausmas, plintantis iš sąnario ar raumens." },
    { lead: "Ir sudarome planą:", text: "ką daryti pirmomis savaitėmis ir kaip palaipsniui didinti krūvį." },
  ],
  services: ["kineziterapija", "manualine-terapija", "osteopatija", "gydomasis-masazas"],
  treatment: {
    items: [
      { title: "Skausmo valdymas pirmomis savaitėmis:", text: "padėtys ir judesiai, kurie mažina plintantį skausmą, patarimai miegui ir darbui." },
      { title: "Pratimai ir nervo mobilizacija:", text: "švelnūs judesiai, kurie gerina nervo slankumą, ir liemens bei kojų raumenų stiprinimas." },
      { title: "Manualinė terapija", text: "kai kuriems žmonėms trumpai sumažina skausmą; ją naudojame kartu su pratimais." },
      { title: "Bendradarbiavimas su gydytoju,", text: "jei reikia vaistų nuo skausmo, injekcijų ar operacijos įvertinimo." },
    ],
    paragraphs: [
      "Nė vienas metodas nėra stebuklingas: didelė tyrimų apžvalga parodė, kad patikimų įrodymų, jog kuris nors vienas neoperacinis gydymas lėtinei išialgijai yra aiškiai geresnis už kitus, kol kas nėra. Todėl gydymą deriname ir keičiame pagal tai, kaip reaguoja jūsų simptomai.",
      "Dažniausiai skausmas kojoje mažėja per kelias savaites ar mėnesius. Ūmiai išialgijai dažnai pakanka kelių vizitų, užsitęsusiai radikulopatijai reikia ilgesnio ciklo: 10 ir daugiau vizitų pagal stadiją. Jei per 6–12 savaičių pagerėjimo nėra arba silpnėja koja, rekomenduojame neurochirurgo ar neurologo konsultaciją.",
    ],
  },
  urgent: {
    items: [
      "Sutriko šlapinimasis ar tuštinimasis",
      "Nejaučiate tarpvietės ar vidinės šlaunų pusės",
      "Skausmas abiejose kojose ir greitai silpnėja kojos",
      "Pėda „krenta“, sunku pakelti pėdos priekį",
      "Kartu karščiuojate, krenta svoris ar sirgote onkologine liga",
    ],
  },
  team: {
    title: "Su išialgija dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "kotryna-kairyte", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Ar sėdimasis nervas tikrai „uždegęs“?",
      a: "Dažniausiai dirginama ir patinusi nervo šaknelė prie stuburo, o ne visas nervas. Todėl gydome priežastį, o ne tik kojos skausmą.",
    },
    { q: "Ar padeda šiluma ar šaltis?", a: "Kai kuriems žmonėms trumpai palengvina. Tai gali būti pagalba, bet ne gydymas." },
    { q: "Ar reikia MRT?", a: "Ne visada. MRT reikalingas, kai yra skubaus įvertinimo požymių, silpnėja raumenys arba svarstoma operacija." },
    {
      q: "Ar galiu dirbti?",
      a: "Dažniausiai taip, pritaikius sėdėjimo laiką, pertraukas ir krūvį. Visiškas poilsis nepagreitina sveikimo.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "plintantis-skausmas",
  sources: [BACK_PAIN_CPG, ZHU_2025, CHIU_2015],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
    { href: "/ka-gydome/skausmas-nugaros-apacioje", label: "Skausmas nugaros apačioje" },
    { href: "/ka-gydome/plintantis-skausmas", label: "Plintantis skausmas ir tirpimas" },
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
  ],
};
