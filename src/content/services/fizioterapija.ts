import type { ServicePage } from "./types";
import { EBADI_2020, HAUGER_2018, JOHNSON_2022, VAN_MELICK_2016 } from "@/content/conditions/sources";
import { eur, minutes, packEur } from "./price-text";

// Batch 6, draft of 07.11.2026. Plan («Карта запросов»): one page for elektroterapija and ultragarso terapija under
// «fizioterapija». Piotr, 07.11.2026: ultrasound, electrical stimulation during movement for strengthening (muscle
// activation, not only TENS); add it to the services list.
export const fizioterapija: ServicePage = {
  slug: "fizioterapija",
  navTitle: "Fizioterapija",
  meta: {
    title: "Fizioterapija Vilniuje: elektroterapija ir ultragarsas",
    description: `Fizioterapija Vilniaus centre: raumenų elektrostimuliacija judesio metu, TENS skausmui ir terapinis ultragarsas, visada kartu su pratimais. Procedūra ${eur("fizioterapija")}.`,
  },
  therapyName: "Fizioterapija (elektroterapija ir ultragarsas)",
  hero: {
    h1: "Fizioterapija Vilniuje: elektroterapija ir ultragarsas",
    lead: "Fizioterapija mūsų klinikoje yra elektroterapija ir terapinis ultragarsas, kuriuos taikome kartu su kineziterapija, o ne vietoje jos. Raumenų elektrostimuliaciją atliekame judesio metu: impulsai padeda „įjungti“ ir sustiprinti raumenį, pavyzdžiui, šlaunies raumenį po kelio operacijos. TENS trumpam sumažina skausmą, kad būtų lengviau judėti.",
  },
  about: {
    paragraphs: [
      "Lietuvoje fizioterapija vadinamos fizikinės gydymo procedūros: elektroterapija, ultragarsas ir kitos. Jos nėra atskiras gydymas: geriausiai veikia kaip pratimų papildymas.",
      "Elektrostimuliacija (NMES) sukelia raumens susitraukimą per odą priklijuotais elektrodais. Mes ją deriname su jūsų pačių judesiu: raumuo susitraukia ir nuo impulso, ir nuo jūsų pastangų. Taip lengviau atgauti raumens valdymą ir jėgą, kai po operacijos, traumos ar imobilizacijos raumuo „neklauso“.",
      "TENS yra kitokia elektroterapija: švelnūs impulsai per odą mažina skausmo pojūtį. Poveikis būna procedūros metu ir iškart po jos, todėl TENS naudojame, kad skausmas netrukdytų pratimams.",
      "Terapinis ultragarsas taikomas atrinktais atvejais. Sakome atvirai: įrodymų, kad jis mažina lėtinį nugaros skausmą, beveik nėra, todėl jo nesiūlome kaip vienintelio gydymo.",
    ],
  },
  helps: {
    items: [
      "Silpnas, „neklausantis“ raumuo po operacijos ar traumos",
      "Raumenų jėgos atkūrimas po imobilizacijos: gipso, įtvaro",
      "Skausmas, kuris trukdo atlikti pratimus",
      "Reabilitacija po kelio operacijų: kryžminio raiščio, menisko",
      "Kaip papildymas kineziterapijai esant nugaros, kaklo ar sąnarių skausmui",
    ],
    note: "Fizioterapiją skiriame po ištyrimo, kai ji gali padėti pratimams. Jei nepadės, pasakysime tiesiai.",
    pages: [
      "reabilitacija-po-kryzminio-raiscio-operacijos",
      "reabilitacija-po-menisko-operacijos",
      "ankstyva-reabilitacija-po-operacijos",
      "kelio-skausmas",
      "nugaros-skausmas",
    ],
  },
  visit: [
    { lead: "Pirmiausia ištiriame,", text: "kas riboja judesį ar jėgą ir ar fizioterapija čia padės." },
    { lead: "Parenkame procedūrą:", text: "elektrostimuliaciją, TENS ar ultragarsą, jos vietą ir stiprumą." },
    { lead: "Deriname su judesiu:", text: "elektrostimuliacijos metu atliekate pratimą, kad raumuo dirbtų ir pats." },
    { lead: "Stebime pokytį:", text: "jėgą, skausmą ir judesį, ir procedūrą nutraukiame, kai jos nebereikia." },
  ],
  visitNote: `Procedūra trunka ${minutes("fizioterapija")}. Dažniausiai ji yra kineziterapijos vizito dalis.`,
  methods: {
    items: [
      {
        title: "Raumenų elektrostimuliacija (NMES) judesio metu:",
        text: "impulsai sukelia raumens susitraukimą, o jūs tuo pat metu atliekate pratimą. Naudojame raumens aktyvacijai ir jėgai atkurti.",
      },
      { title: "TENS:", text: "švelnūs impulsai skausmui sumažinti procedūros metu ir iškart po jos." },
      { title: "Terapinis ultragarsas", text: "atrinktais atvejais, kaip papildomas gydymas." },
      { title: "Pratimai", text: "kiekvienoje procedūroje ir namuose: be jų elektroterapija naudos beveik neduoda." },
    ],
    paragraphs: [
      "Apžvalgoje po priekinio kryžminio raiščio operacijos elektrostimuliacija kartu su įprasta kineziterapija per pirmąsias 4–12 savaičių šlaunies keturgalvio raumens jėgą ir funkciją pagerino labiau nei vien kineziterapija. Tarptautinės rekomendacijos po šios operacijos ją taip pat siūlo.",
      "Didelėje 381 tyrimo apžvalgoje skausmas TENS metu ir iškart po jos buvo mažesnis nei taikant imitaciją, rimtų nepageidaujamų reiškinių nepastebėta.",
      "Terapinio ultragarso poveikis lėtiniam nugaros skausmui, palyginti su imitacija, tyrimuose buvo mažas arba jokio, todėl jį taikome tik kaip papildymą.",
    ],
  },
  price: {
    lines: ["fizioterapija", "kompleksine"],
    note: `Kineziterapijos vizito metu procedūra gali būti papildomas modulis (${minutes("papildomas-modulis")}, ${eur("papildomas-modulis")}), o kompleksinės reabilitacijos vizite kineziterapija derinama su viena papildoma priemone, pavyzdžiui, elektrostimuliacija.`,
  },
  limits: {
    items: [
      "Širdies stimuliatorius ar kitas implantuotas elektroninis prietaisas",
      "Onkologinė liga gydomoje srityje",
      "Nėštumas: pilvo ir juosmens srityje netaikome",
      "Žaizda, infekcija ar odos pažeidimas elektrodų vietoje",
      "Įtariamas kraujo krešulys: blauzda tinsta, skauda ir kaista",
      "Epilepsija: kaklo ir galvos srityje elektroterapijos netaikome",
    ],
    note: "Apie tai pasakykite per ištyrimą. Jei sutrikęs odos jutimas ar yra metalinių implantų, procedūrą parenkame individualiai arba jos netaikome.",
  },
  team: {
    title: "Fizioterapiją taiko",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "mangirdas-kazacenko", "edmundas-zlatkus", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Kuo fizioterapija skiriasi nuo kineziterapijos?",
      a: "Fizioterapija Lietuvoje vadinamos fizikinės procedūros: elektroterapija, ultragarsas. Kineziterapija yra gydymas judesiu. Mūsų klinikoje procedūras taikome kartu su pratimais, nes vienos jos naudos duoda mažai.",
    },
    {
      q: "Kuo elektrostimuliacija skiriasi nuo TENS?",
      a: "Elektrostimuliacija (NMES) sukelia stiprų raumens susitraukimą ir padeda atgauti jėgą. TENS yra švelnesni impulsai, kurie trumpam mažina skausmą, bet raumens nestiprina.",
    },
    {
      q: "Ar elektrostimuliacija skauda?",
      a: "Jaučiamas dilgčiojimas ir stiprus raumens susitraukimas. Intensyvumą reguliuojame pagal jūsų pojūtį: skaudėti neturi.",
    },
    {
      q: "Ar galima ateiti tik į fizioterapiją?",
      a: "Dažniausiai fizioterapiją skiriame kartu su kineziterapija. Atskirą procedūrą galima užsisakyti, jei ji jums tinka ir planas jau sudarytas.",
    },
    {
      q: "Kiek kainuoja?",
      a: `Procedūra kainuoja ${eur("fizioterapija")} ir trunka ${minutes("fizioterapija")}. Su 5 ar 10 procedūrų paketu viena kainuoja ${packEur("fizioterapija", 5)} arba ${packEur("fizioterapija", 10)}.`,
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "fizioterapija",
  sources: [HAUGER_2018, VAN_MELICK_2016, JOHNSON_2022, EBADI_2020],
  reviewed: null,
  related: [
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Reabilitacija po operacijos" },
    { href: "/ka-gydome/reabilitacija-po-kryzminio-raiscio-operacijos", label: "Po kryžminio raiščio rekonstrukcijos" },
    { href: "/kainos", label: "Kainos" },
  ],
};
