import type { ConditionPage } from "./types";
import { NECK_PAIN_CPG } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 3»).
// «Cervikalgija» is the biggest neck query (590 a month): the word people find in their medical papers.
export const cervikalgija: ConditionPage = {
  slug: "cervikalgija",
  section: "kaklo-skausmas",
  navTitle: "Cervikalgija",
  meta: {
    title: "Cervikalgija: kas tai yra ir kaip gydoma | ReaMed",
    description:
      "Gydytojas parašė „cervikalgija“? Tai kaklo skausmas. Kodėl jis atsiranda, kiek trunka, kokie pratimai ir gydymas padeda. Kineziterapija Vilniuje, be siuntimo.",
  },
  conditionName: "Cervikalgija (kaklo skausmas)",
  hero: {
    h1: "Cervikalgija: kaklo skausmas ir įtampa",
    lead: "Cervikalgija yra medicininis kaklo skausmo pavadinimas: ji reiškia, kad skauda kaklą, bet nenurodo konkrečios priežasties. Dažniausiai tai raumenų įtampa ir sąnarių jautrumas, susiję su ilgu sėdėjimu, stresu ar perkrova. Gydymo pagrindas yra manualinė terapija, pratimai ir įpročių keitimas; dažnai skausmas sumažėja per kelias savaites.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    paragraphs: [
      "Žodis „cervikalgija“ kilęs iš lotyniško cervix (kaklas) ir graikiško algos (skausmas). Gydytojai jį rašo, kai kaklą skauda, o pavojingų priežasčių, pavyzdžiui, traumos, infekcijos ar nervo pažeidimo, nerasta. Tai nėra atskira liga, todėl gydymas priklauso nuo to, kas skausmą palaiko būtent jums.",
      "Dažniausi veiksniai: ilgas darbas prie kompiuterio ar telefono, stresas ir prastas miegas, staigus judesys, nauja ar per didelė fizinė apkrova. Rentgeno nuotraukose dažnai matomi su amžiumi atsirandantys pakitimai (kaklo osteochondrozė), bet jie ne visada paaiškina skausmą.",
    ],
  },
  when: {
    items: [
      "Kaklą skauda ar „traukia“ ilgiau nei savaitę",
      "Įtampa sprande stiprėja vakare ar po darbo prie kompiuterio",
      "Sunku pasukti ar palenkti galvą",
      "Kartu skauda pakaušį ar galvą",
      "Skausmas kartojasi",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kada skauda, kas skausmą didina, kokia jūsų darbo ir poilsio diena." },
    { lead: "Tada ištiriame:", text: "kaklo ir krūtinės stuburo judesius, raumenų jautrumą, giliųjų kaklo raumenų darbą, laikyseną." },
    { lead: "Atmetame", text: "skausmą, plintantį į ranką, ir kitus pavojaus ženklus." },
    { lead: "Ir sudarome planą:", text: "gydymas klinikoje ir trumpa pratimų programa namuose." },
  ],
  services: ["manualine-terapija", "kineziterapija", "gydomasis-masazas", "osteopatija"],
  treatment: {
    items: [
      { title: "Manualinė terapija:", text: "kaklo ir krūtinės stuburo mobilizacija, minkštųjų audinių technikos." },
      { title: "Pratimai:", text: "gilieji kaklo raumenys, pečių juosta, judrumas; namuose užtenka 5–10 minučių per dieną." },
      { title: "Darbo vieta ir pertraukos:", text: "ekrano aukštis, sėdėjimas, judėjimo pertraukos." },
      { title: "Gydomasis masažas:", text: "įtampai mažinti, kaip gydymo dalis." },
    ],
    paragraphs: [
      "Ūmiai cervikalgijai dažnai pakanka kelių vizitų. Jei skausmas kartojasi mėnesius, paprastai reikia ne mažiau kaip 5 vizitų ir pratimus tęsti savarankiškai.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po traumos stipriai skauda kaklą",
      "Silpsta ar tirpsta rankos, sutrinka eisena",
      "Kartu karščiuojate ir sunku palenkti galvą",
      "Staiga prasidėjo labai stiprus galvos skausmas",
    ],
  },
  team: {
    title: "Su cervikalgija dirba",
    specialists: ["mangirdas-kazacenko", "piotr-dubrovskij", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Ar cervikalgija pavojinga?",
      a: "Dažniausiai ne. Tai kaklo skausmas be pavojingos priežasties; svarbiausia jį suvaldyti, kad netrukdytų dirbti ir miegoti.",
    },
    {
      q: "Kiek laiko trunka cervikalgija?",
      a: "Ūmus skausmas dažnai sumažėja per kelias savaites. Jei skausmas kartojasi, padeda reguliarūs pratimai ir įpročių keitimas.",
    },
    {
      q: "Kokie pratimai padeda?",
      a: "Giliųjų kaklo raumenų, mentės raumenų ir judrumo pratimai. Kuriuos daryti, parenkame ištyrę.",
    },
    {
      q: "Ar padeda masažas?",
      a: "Masažas gali trumpam sumažinti įtampą; ilgalaikį poveikį duoda pratimai kartu su manualine terapija.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "kaklo-skausmas",
  sources: [NECK_PAIN_CPG],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
    { href: "/ka-gydome/itampos-galvos-skausmas", label: "Įtampos galvos skausmas" },
    { href: "/ka-gydome/kaklo-radikulopatija", label: "Kaklo radikulopatija" },
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
  ],
};
