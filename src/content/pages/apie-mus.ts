import type { InfoPage } from "./types";
import { SECTIONS } from "@/content/sections";
import { eur, minutes } from "@/content/services/price-text";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { formatRating, reviewsCountLabel } from "@/components/reviews/format";
import { translations } from "@/lib/translations";

const t = translations.lt;

// Batch 15. Plan of 07.11.2026: team, national teams, VU, licences, how the first visit goes, and one place with all
// the facts about the clinic (AI assistants often get exactly these wrong).
export const apieMus: InfoPage = {
  path: "/apie-mus",
  navTitle: "Apie mus",
  schema: "AboutPage",
  meta: {
    title: "Apie ReaMed: privati kineziterapijos klinika Vilniuje",
    description:
      "ReaMed yra privati kineziterapijos klinika Vilniaus centre. Komanda, patirtis su Lietuvos rinktinėmis, licencijos, pirmasis vizitas, ką gydome ir ko ne.",
  },
  back: { href: "/", label: "Pradžia" },
  hero: {
    h1: "Apie ReaMed kliniką",
    lead: "ReaMed yra privati kineziterapijos klinika Vilniaus centre. Gydome nugaros, kaklo ir sąnarių skausmą, sporto traumas ir padedame atsigauti po ortopedinių ir stuburo operacijų. Trys mūsų kineziterapeutai dirba su Lietuvos ledo ritulio ir futbolo rinktinėmis, o Piotr Dubrovskij dėsto Vilniaus universiteto Medicinos fakultete.",
  },
  blocks: [
    {
      kind: "steps",
      id: "kaip-dirbame",
      title: "Kaip dirbame",
      items: [
        { lead: "Pirmiausia ištiriame,", text: "kas sukelia skausmą ir ar kineziterapija jums tinka. Jei reikia gydytojo, pasakome, kur kreiptis." },
        { lead: "Gydome aktyviai:", text: "rankų technikos mažina skausmą, o ilgalaikį rezultatą duoda pratimai ir tinkamas krūvis." },
        { lead: "Remiamės tyrimais:", text: "medicininiuose tekstuose nurodome šaltinius, o kur įrodymų mažai, taip ir parašome." },
        { lead: "Stebuklų nežadame:", text: "pasakome, kiek vizitų gali prireikti, o jei pokyčio nėra, keičiame planą." },
      ],
    },
    {
      kind: "team",
      id: "komanda-h",
      title: t.team.title,
      specialists: ["piotr-dubrovskij", "kotryna-kairyte", "mangirdas-kazacenko", "erikas-jatkauskas", "edmundas-zlatkus"],
    },
    {
      kind: "experience",
      id: "patirtis",
      title: "Patirtis ir licencijos",
      note: "Kineziterapeutai Lietuvoje yra licencijuojami asmens sveikatos priežiūros specialistai.",
      rows: [
        {
          slug: "piotr-dubrovskij",
          text: "Nuo 2012 m. Lietuvos nacionalinės ir jaunimo ledo ritulio rinktinių vyr. kineziterapeutas, nuo 2020 m. dėsto Vilniaus universiteto Medicinos fakulteto Reabilitacijos, fizinės ir sporto medicinos katedroje.",
        },
        {
          slug: "kotryna-kairyte",
          text: "Nuo 2022 m. Lietuvos nacionalinės moterų futbolo rinktinės kineziterapeutė, nuo 2019 m. dirba su Lietuvos nacionaline ir jaunimo ledo ritulio rinktinėmis. Baigė sporto kineziterapijos magistrantūrą Lietuvos sveikatos mokslų universitete.",
        },
        {
          slug: "mangirdas-kazacenko",
          text: "Baigė Maitland manualinės terapijos 1, 2A ir 2B lygių kursus. Dirba su nugaros, kaklo ir sąnarių skausmu, veda reabilitaciją po ortopedinių operacijų.",
        },
        {
          slug: "erikas-jatkauskas",
          text: "Nuo 2022 m. Lietuvos jaunimo ledo ritulio rinktinės kineziterapeutas. Baigė kineziterapijos bakalauro studijas Vilniaus universiteto Medicinos fakultete.",
        },
        {
          slug: "edmundas-zlatkus",
          text: "2026 m. baigė kineziterapijos bakalauro studijas Vilniaus universiteto Medicinos fakultete. Dirba su gydomuoju masažu ir atsistatymu po sporto traumų.",
        },
      ],
    },
    {
      kind: "items",
      id: "pirmasis-vizitas",
      title: "Kaip vyksta pirmasis vizitas",
      items: [
        { title: "Išklausome:", text: "kada skausmas prasidėjo, kas jį didina ir ko tikitės iš gydymo." },
        { title: "Ištiriame", text: "judesius, raumenų jėgą ir sąnarius, o kai skausmas plinta, ir nervų funkciją." },
        { title: "Paaiškiname,", text: "ką radome, ir sudarome gydymo planą." },
        { title: "Pradedame gydyti", text: "jau per pirmąjį vizitą ir parodome, ką daryti namuose." },
      ],
      paragraphs: [
        `Pirmasis vizitas trunka ${minutes("pirmasis-vizitas")} ir kainuoja ${eur("pirmasis-vizitas")}. Prašome atvykti 5–10 min. anksčiau ir vilkėti patogią aprangą. Jei turite, atsineškite tyrimų atsakymus ir gydytojų rekomendacijas.`,
      ],
    },
    { kind: "services" },
    {
      kind: "links",
      id: "ka-gydome",
      title: "Ką gydome",
      note: "Kiekviename skyriuje rasite konkrečias būkles ir operacijas.",
      items: SECTIONS.filter((s) => s.hasPage).map((s) => ({ href: `/ka-gydome/${s.slug}`, label: s.name.lt })),
    },
    {
      kind: "warning",
      id: "su-kuo-nedirbame",
      title: "Su kuo nedirbame",
      note: "Jei abejojate, paskambinkite: patarsime, kur kreiptis.",
      items: [
        "Vaikų kineziterapija ir skoliozė: tam yra FitKid klinika (fitkid.lt)",
        "Reabilitacija pagal ligonių kasų siuntimą: esame privati klinika",
        "Žandikaulio sąnario ir dubens dugno problemos, nėščiųjų kineziterapija",
        "Ankstyva reabilitacija iš karto po sąnario pakeitimo (endoprotezavimo)",
        "Būklės, kurioms reikia skubios gydytojo pagalbos",
      ],
    },
    {
      kind: "facts",
      id: "faktai",
      title: "Trumpai apie kliniką",
      rows: [
        { label: "Paslaugų teikėjas", value: "MB „Kineziterapija“, juridinio asmens kodas 305136936, veikianti ReaMed vardu" },
        { label: "Adresas", value: `${t.contact.address}. Atskiras įėjimas pirmame pastato aukšte, iš Sporto rūmų pusės` },
        { label: "Darbo laikas", value: t.booking.hoursValue },
        { label: "Telefonas", value: t.contact.phone },
        { label: "El. paštas", value: t.contact.email },
        { label: "Kalbos", value: "Lietuvių, anglų, rusų" },
        { label: "Siuntimas", value: "Nereikia. Paslaugos mokamos, su ligonių kasomis nedirbame" },
        { label: "Kainos", value: `Pirmasis vizitas ${eur("pirmasis-vizitas")}, kineziterapija ${eur("kineziterapija")}. [Visos kainos ir paketai](/kainos)` },
        { label: "Įvertinimas", value: `${formatRating(GOOGLE_REVIEWS.rating, "lt")} iš 5, ${reviewsCountLabel(GOOGLE_REVIEWS.count, "lt", { quoted: false })}` },
      ],
    },
    { kind: "reviews" },
  ],
  sources: [],
  reviewed: null,
  related: [
    { href: "/duk", label: "Dažniausi klausimai" },
    { href: "/kainos", label: "Kainos" },
    { href: "/kontaktai", label: "Kontaktai" },
  ],
};
