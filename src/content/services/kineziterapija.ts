import type { ServicePage } from "./types";
import { BACK_PAIN_CPG, HAYDEN_2021, NECK_PAIN_CPG, OARSI_2019 } from "@/content/conditions/sources";
import { eur, minutes, packEur } from "./price-text";

// Batch 6 (services on template G), draft of 07.11.2026, waiting for Piotr's review (Claude Doc «пачка 6»).
export const kineziterapija: ServicePage = {
  slug: "kineziterapija",
  navTitle: "Kineziterapija",
  meta: {
    title: "Kineziterapija Vilniuje: kaina, kaip vyksta, kada padeda | ReaMed",
    description: `Kineziterapija Vilniaus centre: ištyrimas, gydomieji pratimai ir aiškus planas. Pirmasis vizitas ${eur("pirmasis-vizitas")}, kineziterapija ${eur("kineziterapija")}. Privati klinika, siuntimo nereikia.`,
  },
  therapyName: "Kineziterapija",
  hero: {
    h1: "Kineziterapija Vilniuje",
    lead: "Kineziterapija yra gydymas judesiu: kineziterapeutas ištiria, kas sukelia skausmą ar riboja judesį, ir parenka pratimus, rankų technikas ir krūvį, kurie padeda atkurti funkciją. Tai pagrindinis nugaros, kaklo ir sąnarių skausmo gydymo būdas, taip pat reabilitacija po traumų ir operacijų. ReaMed yra privati klinika Vilniaus centre: siuntimo nereikia, eilių nėra.",
  },
  about: {
    paragraphs: [
      "Kineziterapeutas yra licencijuotas sveikatos priežiūros specialistas, kuris gydo judesiu. Angliškai ši profesija vadinama physiotherapy. Lietuvoje fizioterapija dažniausiai vadinamos fizikinės procedūros, pavyzdžiui, elektroterapija ar ultragarsas, o kineziterapija yra aktyvus gydymas pratimais ir rankomis.",
      "Kineziterapija nėra vien pratimų sąrašas. Pirmiausia ištiriame, kaip judate ir kas didina simptomus, tada parenkame gydymą: pratimus, rankų technikas, krūvio planą ir patarimus kasdienybei. Gydymas keičiasi kartu su jūsų būkle.",
      "Tyrimų apžvalgos rodo, kad pratimai lėtinį nugaros skausmą sumažina labiau nei gydymo nebuvimas ar įprastinė priežiūra, o nugaros, kaklo skausmo ir kelio artrozės gydymo gairės pratimus laiko pagrindiniu gydymu.",
    ],
  },
  helps: {
    items: [
      "Nugaros ar juosmens skausmas",
      "Kaklo skausmas ir įtampa, galvos skausmas dėl kaklo",
      "Skausmas plinta į ranką ar koją, tirpsta pirštai",
      "Peties skausmas keliant ranką",
      "Kelio skausmas lipant laiptais ar bėgant",
      "Sausgyslių skausmas: alkūnė, Achilas, klubo šonas",
      "Sporto traumos ir grįžimas į sportą",
      "Reabilitacija po operacijų ir lūžių",
    ],
    note: "Jei nežinote, ar jums tiks kineziterapija, tai išsiaiškinsime per pirmąjį vizitą.",
    pages: [
      "nugaros-skausmas",
      "stuburo-isvarza",
      "isialgija-radikulopatija",
      "kaklo-skausmas",
      "peties-problemos",
      "kelio-skausmas",
      "tendinopatijos",
      "sporto-traumos",
      "atsistatymas-po-operaciju",
    ],
  },
  visit: [
    { lead: "Pirmiausia išklausome:", text: "kada prasidėjo, kas didina ir mažina skausmą, ko norite vėl galėti daryti." },
    { lead: "Tada ištiriame:", text: "judesius, jėgą, sąnarių judrumą, o prireikus jutimą ir refleksus." },
    { lead: "Paaiškiname, kas vyksta,", text: "ir kartu nusprendžiame, ko siekiame ir per kiek laiko." },
    { lead: "Gydyti pradedame tą pačią dieną:", text: "parodome pirmuosius pratimus ir ką daryti namuose." },
  ],
  visitNote: `Pirmasis vizitas trunka ${minutes("pirmasis-vizitas")}. Vilkėkite patogius drabužius, atsineškite tyrimų aprašymus ar gydytojų išrašus, jei jų turite.`,
  methods: {
    items: [
      { title: "Gydomieji pratimai:", text: "jėgos, judrumo, pusiausvyros ir judesio kontrolės, parinkti pagal jūsų būklę ir tikslus." },
      { title: "Krūvio planas:", text: "kiek ir kaip judėti, kad skausmas mažėtų, o ne kiltų iš naujo." },
      {
        title: "Manualinė terapija",
        text: "(sąnarių mobilizacijos, minkštųjų audinių technikos), kai ji padeda judėti lengviau. Deriname ją su pratimais, ne vietoje jų.",
      },
      { title: "Pratimai su Redcord sistema,", text: "kai krūvį reikia sumažinti ar labai tiksliai dozuoti." },
      {
        title: "Papildomos priemonės,",
        text: "kai tai tikslinga: kineziologinis teipavimas, elektroterapija ar ultragarsas (kompleksinės reabilitacijos vizitas).",
      },
      { title: "Pratimai namams", text: "su aiškiu kiekiu ir dažniu, kad progresas nesustotų tarp vizitų." },
    ],
    paragraphs: [
      `Kineziterapijos vizitas trunka ${minutes("kineziterapija")}. Pradžioje dažniausiai susitinkame kartą ar du per savaitę, vėliau rečiau, kai vis daugiau darote patys.`,
      "Kiek vizitų prireiks, priklauso nuo būklės: ūmiam skausmui dažnai pakanka kelių vizitų, tikslingam gydymui dažniausiai planuojame bent 5, o užsitęsusiai radikulopatijai reikia 10 ir daugiau.",
      "Didelėje tyrimų apžvalgoje pratimai lėtinį nugaros skausmą sumažino vidutiniškai 15 balų iš 100, palyginti su gydymo nebuvimu ar įprastine priežiūra.",
    ],
  },
  price: {
    lines: ["pirmasis-vizitas", "kineziterapija", "kompleksine", "kompleksine-isplestine"],
    note: `Kineziterapiją atlieka ir Piotr Dubrovskij: jo vizito kaina ${eur("piotr")}, paketai jo vizitams netaikomi.`,
  },
  limits: {
    items: [
      "Skausmas atsirado po rimtos traumos: kritimo, avarijos",
      "Sutriko šlapinimasis ar tuštinimasis, nejaučiate tarpvietės",
      "Greitai silpnėja ranka ar koja",
      "Karščiuojate, be priežasties krenta svoris, sirgote onkologine liga",
      "Stiprus skausmas naktį, kuris nepriklauso nuo judesių ir padėties",
      "Krūtinės skausmas, dusulys ar staigus labai stiprus galvos skausmas",
    ],
    note: "Tokiais atvejais pirmiausia kreipkitės į gydytoją arba skubiosios pagalbos skyrių. Kineziterapiją pradėsime, kai gydytojas atmes pavojingas priežastis.",
  },
  team: {
    title: "Kineziterapiją atlieka",
    specialists: ["piotr-dubrovskij", "kotryna-kairyte", "erikas-jatkauskas", "mangirdas-kazacenko", "edmundas-zlatkus"],
    note: "Trys mūsų kineziterapeutai dirba su Lietuvos ledo ritulio ir futbolo rinktinėmis.",
  },
  faq: [
    {
      q: "Kiek kainuoja kineziterapija?",
      a: `Pirmasis vizitas su ištyrimu ir gydymo planu kainuoja ${eur("pirmasis-vizitas")}, kineziterapijos vizitas ${eur("kineziterapija")}. Perkant 5 ar 10 vizitų paketą, vienas vizitas kainuoja ${packEur("kineziterapija", 5)} arba ${packEur("kineziterapija", 10)}.`,
    },
    { q: "Ar reikia gydytojo siuntimo?", a: "Ne. ReaMed yra privati klinika: registruojatės tiesiogiai, su ligonių kasomis nedirbame." },
    {
      q: "Kuo kineziterapija skiriasi nuo masažo?",
      a: "Masažas veikia raumenis ir minkštuosius audinius, o kineziterapija gydo judesiu: ištiriame, kas sukelia skausmą, ir parenkame pratimus bei krūvį. Masažas gali būti gydymo dalis, bet ilgalaikį rezultatą dažniausiai duoda aktyvus darbas.",
    },
    {
      q: "Kiek vizitų reikės?",
      a: "Priklauso nuo būklės. Ūmiam skausmui dažnai pakanka kelių vizitų, tikslingam gydymui dažniausiai planuojame bent 5. Po pirmojo vizito pasakome, ko tikėtis.",
    },
    {
      q: "Ar kineziterapija skauda?",
      a: "Pratimai gali sukelti nedidelį diskomfortą ar raumenų maudimą kitą dieną, bet gydymas neturi stipriai didinti skausmo. Krūvį parenkame pagal tai, kaip reaguojate.",
    },
    {
      q: "Ar draudimas kompensuoja kineziterapiją?",
      a: "Jei turite sveikatos draudimą, po vizito išrašome sąskaitą faktūrą draudimo bendrovei. Kiek kompensuos, priklauso nuo jūsų draudimo sąlygų.",
    },
    { q: "Ar galima konsultuotis angliškai ar rusiškai?", a: "Taip, konsultuojame lietuvių, anglų ir rusų kalbomis." },
  ],
  reviews: "kineziterapija",
  sources: [HAYDEN_2021, BACK_PAIN_CPG, NECK_PAIN_CPG, OARSI_2019],
  reviewed: null,
  related: [
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Reabilitacija po operacijos" },
    { href: "/kainos", label: "Kainos" },
  ],
};
