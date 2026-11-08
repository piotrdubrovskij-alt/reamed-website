import type { ConditionPage } from "./types";
import { NECK_PAIN_CPG, TTH_EFNS } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 3»). Piotr, 07.11: tension headache is in.
// The EFNS guideline is careful about physiotherapy ("may be valuable, no robust evidence"): the text says so.
export const itamposGalvosSkausmas: ConditionPage = {
  slug: "itampos-galvos-skausmas",
  section: "kaklo-skausmas",
  navTitle: "Įtampos galvos skausmas",
  meta: {
    title: "Įtampos galvos skausmas: kodėl spaudžia galvą ir kas padeda",
    description:
      "Galvą spaudžia lyg lankas, skauda pakaušį ir sprandą? Įtampos galvos skausmas: priežastys, kada kreiptis į gydytoją, kaip padeda kineziterapija. Be siuntimo.",
  },
  conditionName: "Įtampos tipo galvos skausmas",
  hero: {
    h1: "Įtampos galvos skausmas",
    lead: "Įtampos galvos skausmas yra dažniausia galvos skausmo rūšis: galvą spaudžia ar veržia iš abiejų pusių lyg lankas, dažnai kartu įsitempęs sprandas ir pečiai. Jis nėra pavojingas, bet gali kartotis ir trukdyti dirbti. Be vaistų padeda informacija apie skausmą, jį sukeliančių veiksnių mažinimas ir atsipalaidavimas, o kai skausmas kartojasi dažnai, gali padėti ir kineziterapija.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    paragraphs: [
      "Skausmas dažniausiai būna silpnas ar vidutinio stiprumo, spaudžiantis ar veržiantis, abiejose galvos pusėse, nestiprėja einant laiptais ar įprastai judant. Skirtingai nei migrena, paprastai nebūna pykinimo ir stipraus jautrumo šviesai. Jį gali provokuoti stresas, nemiga, ilgas darbas vienoje padėtyje, kaklo ir pečių raumenų įtampa.",
      "Europos neurologų gairės pataria pirmiausia taikyti nemedikamentinį gydymą: paaiškinti, kas vyksta, atpažinti skausmą sukeliančius veiksnius, mokytis atsipalaiduoti. Kineziterapija gali būti naudinga, kai skausmas kartojasi dažnai, nors tvirtų įrodymų dar nedaug. Svarbu nevartoti skausmą malšinančių vaistų per dažnai: jie patys gali sukelti galvos skausmą.",
    ],
  },
  when: {
    items: [
      "Galvą spaudžia ar veržia kelis kartus per mėnesį ar dažniau",
      "Skauda pakaušį, skausmas eina iš sprando į galvą",
      "Vakare po darbo prie kompiuterio sprandas ir pečiai įsitempę",
      "Skausmą malšinančius vaistus vartojate vis dažniau",
      "Galvos skausmą jau įvertino gydytojas ir norite gydymo be vaistų",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kaip dažnai ir kada skauda, kas provokuoja, kokius vaistus vartojate, ar galvos skausmą vertino gydytojas.",
    },
    { lead: "Tada ištiriame:", text: "kaklo judesius, sprando ir pečių raumenų jautrumą, laikyseną darbo metu." },
    { lead: "Atmetame", text: "pavojaus ženklus ir, jei reikia, siūlome pasitarti su gydytoju neurologu." },
    { lead: "Ir sudarome planą:", text: "gydymas klinikoje, pratimai ir atsipalaidavimas namuose, darbo dienos įpročiai." },
  ],
  services: ["manualine-terapija", "kineziterapija", "gydomasis-masazas", "osteopatija"],
  treatment: {
    items: [
      { title: "Manualinė terapija ir minkštųjų audinių technikos:", text: "kaklui, sprandui ir pečių juostai." },
      { title: "Pratimai:", text: "gilieji kaklo raumenys, laikysena, judrumas." },
      { title: "Atsipalaidavimas:", text: "kvėpavimo ir raumenų atpalaidavimo pratimai." },
      { title: "Įpročiai:", text: "darbo vieta, pertraukos, miegas." },
    ],
    paragraphs: [
      "Dažniausiai reikia ne mažiau kaip 5 vizitų per kelias savaites ir kasdienių pratimų. Padeda pasižymėti, kada ir kaip stipriai skauda: taip matome, ar gydymas veikia.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Staiga prasidėjo labai stiprus galvos skausmas, stipriausias gyvenime",
      "Galvą skauda po traumos",
      "Kartu karščiuojate, sustingo sprandas, atsirado bėrimas",
      "Silpsta ranka ar koja, sunku kalbėti, sutriko regėjimas",
      "Po 50 metų atsirado naujas, vis stiprėjantis galvos skausmas",
      "Skausmas pakeitė pobūdį, žadina naktį ar stiprėja kosint",
    ],
  },
  team: {
    title: "Su įtampos galvos skausmu dirba",
    specialists: ["mangirdas-kazacenko", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Kuo įtampos galvos skausmas skiriasi nuo migrenos?",
      a: "Įtampos skausmas paprastai spaudžia abi galvos puses ir nestiprėja judant; migrena dažniau pulsuoja vienoje pusėje, kartu pykina, erzina šviesa ir garsai. Migreną diagnozuoja ir gydo gydytojas.",
    },
    {
      q: "Ar galvos skausmas gali kilti iš kaklo?",
      a: "Taip, toks skausmas vadinamas cervikogeniniu. Jis dažniausiai būna vienoje pusėje ir stiprėja judant kaklą. Gydymas panašus: manualinė terapija ir pratimai.",
    },
    {
      q: "Ar padeda masažas?",
      a: "Masažas gali sumažinti įtampą ir trumpam palengvinti skausmą; ilgalaikiam poveikiui svarbūs pratimai ir įpročiai.",
    },
    {
      q: "Ar reikia siuntimo?",
      a: "Ne. Jei galvos skausmas naujas ar neįprastas, pirmiausia rekomenduojame pasitarti su gydytoju.",
    },
  ],
  reviews: "kaklo-skausmas",
  sources: [TTH_EFNS, NECK_PAIN_CPG],
  reviewed: { by: "mangirdas-kazacenko", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
    { href: "/ka-gydome/cervikalgija", label: "Cervikalgija" },
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
    { href: "/paslaugos/gydomasis-masazas", label: "Gydomasis masažas" },
  ],
};
