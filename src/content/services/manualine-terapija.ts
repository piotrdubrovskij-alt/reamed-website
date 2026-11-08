import type { ServicePage } from "./types";
import { BACK_PAIN_CPG, GROSS_2015, NECK_PAIN_CPG, RUBINSTEIN_2019 } from "@/content/conditions/sources";
import { eur, minutes, packEur } from "./price-text";

// Batch 6, draft of 07.11.2026. Plan: manual therapy by the Maitland concept. Piotr, 07.11.2026: Mangirdas and Erikas,
// same price as kineziterapija.
export const manualineTerapija: ServicePage = {
  slug: "manualine-terapija",
  navTitle: "Manualinė terapija",
  meta: {
    title: "Manualinė terapija Vilniuje pagal Maitland koncepciją",
    description:
      "Manualinė terapija Vilniaus centre: sąnarių mobilizacijos ir manipuliacijos pagal Maitland koncepciją, visada kartu su pratimais. Kada padeda, kaip vyksta, kaina. Siuntimo nereikia.",
  },
  therapyName: "Manualinė terapija (Maitland koncepcija)",
  hero: {
    h1: "Manualinė terapija Vilniuje",
    lead: "Manualinė terapija yra gydymas rankomis: specialistas mobilizuoja sąnarius ir minkštuosius audinius, kad sumažėtų skausmas ir judesiai taptų laisvesni. ReaMed klinikoje dirbame pagal Maitland koncepciją: techniką renkamės pagal ištyrimą ir iš karto patikriname, ar judesys pagerėjo. Manualinę terapiją visada deriname su pratimais.",
  },
  about: {
    paragraphs: [
      "Manualinė terapija nėra masažas ir nėra „kaulų įstatymas“. Tai tikslingos technikos konkrečiam sąnariui ar stuburo segmentui: lėtos ritmiškos mobilizacijos, o kai tinka, ir greita manipuliacija.",
      "Maitland koncepciją sukūrė australų fizioterapeutas Geoffrey Maitland. Jos esmė: išsamus ištyrimas, mobilizacijos, dozuojamos pagal skausmą ir audinių pasipriešinimą (I–IV laipsniai), ir nuolatinis pakartotinis įvertinimas. Jei technika nepagerino judesio ar skausmo, ją keičiame.",
      "Tyrimų apžvalgos rodo, kad lėtiniam nugaros skausmui stuburo manipuliacijos ir mobilizacijos padeda panašiai kaip kiti rekomenduojami gydymo būdai, o kaklo skausmui krūtinės stuburo manipuliacija trumpuoju laikotarpiu mažina skausmą ir gerina funkciją. Todėl manualinė terapija yra gydymo dalis, o ne vienintelis gydymas.",
    ],
  },
  helps: {
    items: [
      "Nugaros ir kaklo skausmas su ribotu judrumu",
      "Užstrigęs kaklas ar nugara",
      "Galvos skausmas dėl kaklo",
      "Peties, kelio ar čiurnos sąnario sustingimas",
      "Sustingimas po gipso, įtvaro ar operacijos, kai gydytojas leidžia judinti",
      "Skausmas plinta į ranką ar koją: švelnios technikos ir nervo mobilizacija",
    ],
    pages: [
      "nugaros-skausmas",
      "skausmas-nugaros-apacioje",
      "stuburo-isvarza",
      "kaklo-skausmas",
      "cervikalgija",
      "itampos-galvos-skausmas",
      "peties-problemos",
      "ankstyva-reabilitacija-po-operacijos",
    ],
  },
  visit: [
    { lead: "Ištiriame:", text: "kurie judesiai sukelia skausmą, kuris sąnarys ar segmentas juda per mažai, kaip reaguoja nervai." },
    { lead: "Pasirenkame techniką", text: "ir jos stiprumą pagal tai, ką radome." },
    { lead: "Iš karto patikriname,", text: "ar judesys laisvesnis ir skausmas mažesnis. Jei ne, keičiame techniką." },
    { lead: "Duodame pratimų,", text: "kurie išlaiko pagerėjimą tarp vizitų." },
  ],
  visitNote: `Pirmasis vizitas su ištyrimu trunka ${minutes("pirmasis-vizitas")}, pakartotinis ${minutes("kineziterapija")}.`,
  methods: {
    items: [
      { title: "Mobilizacijos:", text: "lėti ritmiški sąnario judesiai, švelnesni esant stipriam skausmui ir stipresni esant sustingimui." },
      { title: "Manipuliacijos:", text: "greitas mažos amplitudės judesys. Taikome tik kai tinka ir tik jums sutikus." },
      { title: "Nervinio audinio mobilizacija,", text: "kai skausmas ar tirpimas plinta į ranką ar koją." },
      { title: "Minkštųjų audinių technikos", text: "raumenų įtampai mažinti." },
      { title: "Pratimai", text: "judrumui ir jėgai, kad rezultatas išliktų." },
    ],
    paragraphs: [
      "Pagal Maitland koncepciją kiekvieno vizito pradžioje ir pabaigoje tikriname tuos pačius judesius, todėl ir jūs matote, kas keičiasi.",
      "Ūmiam skausmui dažnai pakanka kelių vizitų, tikslingam gydymui dažniausiai planuojame bent 5. Manualinė terapija dažniausiai yra kineziterapijos vizito dalis.",
      "Tyrimuose nepageidaujami reiškiniai po stuburo manipuliacijų dažniausiai būdavo laikini ir lengvi ar vidutiniai, pavyzdžiui, trumpalaikis raumenų maudimas.",
    ],
  },
  price: {
    lines: ["pirmasis-vizitas", "kineziterapija"],
    note: "Manualinė terapija atliekama kineziterapijos vizito metu, todėl kaina ir paketai tokie patys.",
  },
  limits: {
    items: [
      "Įtariamas lūžis ar ką tik patirta rimta trauma",
      "Stipri osteoporozė",
      "Onkologinė liga, ypač jei įtariamas jos išplitimas į kaulus",
      "Karščiavimas, ūmi infekcija ar uždegiminė liga paūmėjimo metu",
      "Sutrikęs šlapinimasis, greitai silpnėjanti ranka ar koja",
      "Staigus neįprastas galvos ir kaklo skausmas su svaigimu, regos ar kalbos sutrikimais",
    ],
    note: "Tokiais atvejais pirmiausia reikia gydytojo. Jei vartojate kraujo krešėjimą mažinančius vaistus, pasakykite per ištyrimą: tada manipuliacijų netaikome ir renkamės švelnesnes technikas.",
  },
  team: {
    title: "Manualinę terapiją atlieka",
    specialists: ["mangirdas-kazacenko", "erikas-jatkauskas"],
    note: "Mangirdas Kazačenko baigė Maitland manualinės terapijos 1, 2A ir 2B lygių kursus, Erikas Jatkauskas 2022 m. dalyvavo Maitland seminare.",
  },
  faq: [
    {
      q: "Kuo manualinė terapija skiriasi nuo masažo?",
      a: "Masažas daugiausia veikia raumenis, o manualinė terapija yra tikslingas darbas su konkrečiu sąnariu, stuburo segmentu ar nervu, kad jis judėtų laisviau ir mažiau skaudėtų.",
    },
    {
      q: "Ar manualinė terapija „įstato“ slankstelius ar diską?",
      a: "Ne. Slanksteliai ir diskai neiššoka, todėl jų nereikia „įstatyti“. Technikos mažina skausmą ir gerina judrumą, o traškesys sąnaryje yra tik dujų burbuliuko garsas.",
    },
    {
      q: "Kas yra Maitland koncepcija?",
      a: "Manualinės terapijos mokykla, kurioje technika ir jos stiprumas parenkami pagal ištyrimą, o poveikis tikrinamas iš karto po kiekvienos technikos.",
    },
    {
      q: "Ar tai skauda?",
      a: "Neturėtų. Mobilizacijų stiprumą parenkame pagal skausmą. Kitą dieną gali jaustis lengvas maudimas, jis greitai praeina.",
    },
    {
      q: "Ar galima su stuburo išvarža?",
      a: "Taip, jei nėra skubaus įvertinimo požymių. Technikas parenkame pagal tai, kaip reaguoja plintantis skausmas, ir deriname jas su pratimais.",
    },
    {
      q: "Kiek kainuoja?",
      a: `Pirmasis vizitas su ištyrimu ${eur("pirmasis-vizitas")}, pakartotinis ${eur("kineziterapija")}. Perkant 5 ar 10 vizitų paketą, vizitas kainuoja ${packEur("kineziterapija", 5)} arba ${packEur("kineziterapija", 10)}.`,
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "manualine-terapija",
  sources: [RUBINSTEIN_2019, GROSS_2015, BACK_PAIN_CPG, NECK_PAIN_CPG],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/paslaugos/osteopatija", label: "Osteopatija" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
    { href: "/specialistai/mangirdas-kazacenko", label: "Mangirdas Kazačenko" },
  ],
};
