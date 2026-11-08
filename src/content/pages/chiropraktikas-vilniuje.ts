import type { InfoPage } from "./types";
import { BILLER_2014, DE_ZOETE_2026, GROSS_2015, NIELSEN_2017, PAIGE_2017, WFC_2013 } from "@/content/conditions/sources";
import { getConditionPage } from "@/content/conditions";
import { eur, minutes, packEur } from "@/content/services/price-text";
import { manualineTerapija } from "@/content/services/manualine-terapija";

// Batch 15. Plan of 07.11.2026: «chiropraktika» 320, «chiropraktikas» 110, «chiropractor vilnius» 70 a month. An honest page:
// ReaMed has no chiropractors; what chiropractic is, how Maitland manual therapy and structural osteopathy differ, who it suits.
// Nothing here on the legal status of chiropractors in Lithuania: no current act could be checked (see the batch doc).
const conditionLink = (slug: string) => {
  const p = getConditionPage(slug);
  if (!p) throw new Error(`chiropraktikas-vilniuje: missing page ${slug}`);
  return { href: `/ka-gydome/${slug}`, label: p.navTitle };
};

export const chiropraktikasVilniuje: InfoPage = {
  path: "/chiropraktikas-vilniuje",
  navTitle: "Chiropraktikas Vilniuje?",
  schema: "MedicalWebPage",
  therapyName: "Chiropraktika, manualinė terapija ir osteopatija",
  meta: {
    title: "Chiropraktikas Vilniuje? Manualinė terapija ir osteopatija",
    description:
      "Ieškote chiropraktiko Vilniuje? ReaMed klinikoje jų nėra, bet nugaros ir kaklo skausmą gydo manualinės terapijos specialistai ir osteopatas. Kuo tai skiriasi.",
  },
  back: { href: "/#paslaugos", label: "Paslaugos" },
  hero: {
    h1: "Chiropraktikas Vilniuje?",
    lead: "ReaMed klinikoje chiropraktikų nėra. Jei ieškote gydymo rankomis nuo nugaros ar kaklo skausmo, tokias problemas pas mus sprendžia manualinės terapijos specialistai ir osteopatas: ištiria, mobilizuoja sąnarius, kai tinka atlieka manipuliaciją ir parodo pratimus. Žemiau paaiškiname, kuo šie metodai skiriasi ir ką rodo tyrimai.",
  },
  blocks: [
    {
      kind: "text",
      id: "kas-yra",
      title: "Kas yra chiropraktika",
      paragraphs: [
        "Chiropraktika yra sveikatos priežiūros profesija, kuri užsiima nervų, raumenų ir skeleto sistemos sutrikimų diagnostika, gydymu ir prevencija. Atskira profesija ji tapo JAV XIX amžiaus pabaigoje, o chiropraktikų studijų programos trunka ne mažiau kaip 4 metus.",
        "Chiropraktikai daugiausia dirba rankomis. Pagrindinis jų metodas yra stuburo ir kitų sąnarių manipuliacija, dažnai vadinama koregavimu: greitas mažos amplitudės judesys, po kurio neretai pasigirsta traškesys.",
      ],
    },
    {
      kind: "compare",
      id: "kuo-skiriasi",
      title: "Kuo skiriasi chiropraktika, manualinė terapija ir osteopatija",
      note: "Visi trys metodai gydo rankomis ir naudoja panašias technikas, bet skiriasi kilme ir tuo, kas gydyme svarbiausia.",
      columns: [
        {
          title: "Chiropraktika",
          rows: [
            { label: "Kilmė", value: "JAV, XIX amžiaus pabaiga" },
            { label: "Kas svarbiausia", value: "Stuburo ir kitų sąnarių funkcija ir jos poveikis nervų ir raumenų sistemai" },
            { label: "Pagrindinės technikos", value: "Greitos stuburo ir sąnarių manipuliacijos (koregavimas)" },
            { label: "ReaMed klinikoje", value: "Chiropraktikų nėra" },
          ],
        },
        {
          title: "Manualinė terapija (Maitland)",
          ours: true,
          rows: [
            { label: "Kilmė", value: "Australų fizioterapeuto Geoffrey Maitland koncepcija" },
            { label: "Kas svarbiausia", value: "Kurie judesiai sukelia skausmą ir kaip jie keičiasi po kiekvienos technikos" },
            { label: "Pagrindinės technikos", value: "Lėtos ritmiškos mobilizacijos, kai tinka ir manipuliacija, visada su pratimais" },
            { label: "ReaMed klinikoje", value: "Mangirdas Kazačenko, Erikas Jatkauskas" },
          ],
        },
        {
          title: "Osteopatija",
          ours: true,
          rows: [
            { label: "Kilmė", value: "JAV, XIX amžiaus pabaiga" },
            { label: "Kas svarbiausia", value: "Stuburo, sąnarių ir raumenų judrumas ir platesni kūno ryšiai" },
            { label: "Pagrindinės technikos", value: "Mobilizacijos, manipuliacijos, minkštųjų audinių technikos ir pratimai" },
            { label: "ReaMed klinikoje", value: "Piotr Dubrovskij" },
          ],
        },
      ],
    },
    {
      kind: "dots",
      id: "kada-padeda",
      title: "Kada gydymas rankomis padeda",
      items: [
        "Nugaros ir kaklo skausmas su ribotu judrumu",
        "Užstrigęs kaklas ar nugara",
        "Galvos skausmas dėl kaklo",
        "Sąnarių sustingimas po traumos, gipso ar operacijos",
        "Skausmas plinta į ranką ar koją: švelnios technikos ir nervo mobilizacija",
      ],
      links: {
        title: "Plačiau apie būkles",
        items: [
          "umus-nugaros-skausmas",
          "skausmas-nugaros-apacioje",
          "stuburo-isvarza",
          "uzstriges-kaklas",
          "cervikalgija",
          "galvos-skausmas-del-kaklo",
        ].map(conditionLink),
      },
    },
    {
      kind: "text",
      id: "tyrimai",
      title: "Ką rodo tyrimai",
      paragraphs: [
        "2026 m. Cochrane apžvalgoje (76 tyrimai, 11 866 dalyviai) stuburo manipuliacijos ir mobilizacijos lėtinį nugaros skausmą, palyginti su kitu konservatyviu gydymu, sumažino panašiai, o funkciją pagerino šiek tiek daugiau. Šių išvadų patikimumas žemas.",
        "Ūmaus nugaros skausmo (iki 6 savaičių) apžvalgoje manipuliacijos siejosi su nedideliu skausmo ir funkcijos pagerėjimu. Tyrimų rezultatų skirtumų nepaaiškino tai, kokios profesijos specialistas jas atliko. Todėl renkantis specialistą svarbiau ne pavadinimas, o išsamus ištyrimas, tinkamai parinkta technika ir pratimai.",
        "Kaklo skausmo apžvalgoje krūtinės stuburo manipuliacija trumpuoju laikotarpiu galėjo sumažinti skausmą ir pagerinti funkciją.",
      ],
    },
    {
      kind: "text",
      id: "saugumas",
      title: "Ar manipuliacijos saugios?",
      paragraphs: [
        "Dažniausi nepageidaujami reiškiniai yra lengvi ir laikini: padidėjęs skausmas, raumenų sustingimas, galvos skausmas. Didelėse pacientų grupėse jie pasitaikė 50–67 % atvejų.",
        "Sunkios komplikacijos aprašomos retai, bet tikslus jų dažnis nežinomas: apžvalgose įverčiai svyruoja nuo 1 iš 20 000 iki 1 iš 250 000 000 manipuliacijų.",
        "Atsargiausiai reikia vertinti kaklą. Amerikos širdies asociacija nurodo, kad kaklo manipuliacijos statistiškai siejamos su kaklo arterijų disekcija (sienelės atsisluoksniavimu), nors neįrodyta, kad jos šį pažeidimą sukelia, ir rekomenduoja apie tai informuoti pacientą prieš manipuliaciją.",
        "Todėl pas mus manipuliacija nėra privaloma: prieš ją klausiame apie simptomus, ištiriame ir taikome tik nesant kontraindikacijų ir jums sutikus. Jei ji netinka, renkamės švelnesnes mobilizacijas.",
      ],
    },
    {
      kind: "steps",
      id: "vizitas",
      title: "Kaip vyksta vizitas pas mus",
      items: manualineTerapija.visit,
    },
    {
      kind: "price",
      id: "kaina",
      title: "Kaina",
      note: "Manualinė terapija atliekama kineziterapijos vizito metu, todėl kaina ir paketai tokie patys. Osteopatiją atlieka Piotr Dubrovskij, jo vizitams paketai netaikomi.",
      lines: ["pirmasis-vizitas", "kineziterapija", "piotr"],
    },
    {
      kind: "warning",
      id: "netinka",
      title: "Kada manipuliacijos netinka?",
      note: manualineTerapija.limits.note,
      items: manualineTerapija.limits.items,
    },
    {
      kind: "team",
      id: "komanda-h",
      title: "Gydymą rankomis atlieka",
      specialists: ["mangirdas-kazacenko", "erikas-jatkauskas", "piotr-dubrovskij"],
    },
    {
      kind: "faq",
      id: "duk-h",
      title: "Dažniausi klausimai",
      items: [
        {
          q: "Ar ReaMed klinikoje dirba chiropraktikas?",
          a: "Ne. Chiropraktikų neturime. Nugaros ir kaklo skausmą gydome [manualine terapija](/paslaugos/manualine-terapija), [osteopatija](/paslaugos/osteopatija) ir [kineziterapija](/paslaugos/kineziterapija).",
        },
        {
          q: "Kuo chiropraktikas skiriasi nuo osteopato?",
          a: "Abu dirba rankomis ir taiko panašias technikas. Chiropraktika labiausiai remiasi stuburo manipuliacijomis, o osteopatija vertina platesnius kūno ryšius ir dažniau derina įvairias technikas.",
        },
        {
          q: "Ar slankstelį reikia „įstatyti“?",
          a: "Ne. Slanksteliai ir diskai neiššoka, todėl jų nereikia „įstatyti“. Manipuliacija mažina skausmą ir gerina judrumą, o traškesys yra tik dujų burbuliuko garsas sąnaryje. Mobilizacijos atliekamos be traškesio.",
        },
        {
          q: "Noriu būtent manipuliacijos. Ar galima?",
          a: "Galima, jei ištyrus nėra kontraindikacijų ir ji tinka jūsų būklei. Manipuliaciją taikome tik jums sutikus ir visada deriname su pratimais.",
        },
        {
          q: "Kaip išsirinkti specialistą?",
          a: "Paklauskite, kur jis mokėsi ir ar turi licenciją, ar prieš gydydamas išsamiai ištiria ir ar duoda pratimų. Mūsų specialistų licencijų numerius rasite puslapyje [Apie mus](/apie-mus).",
        },
        {
          q: "Kiek kainuoja?",
          a: `Pirmasis vizitas su ištyrimu ${eur("pirmasis-vizitas")} (${minutes("pirmasis-vizitas")}), pakartotinis ${eur("kineziterapija")} (${minutes("kineziterapija")}), pakete ${packEur("kineziterapija", 5)} arba ${packEur("kineziterapija", 10)}. Vizitas pas osteopatą Piotrą Dubrovskij kainuoja ${eur("piotr")} (${minutes("piotr")}).`,
        },
        { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
      ],
    },
    { kind: "reviews", condition: "nugaros-skausmas" },
  ],
  sources: [WFC_2013, DE_ZOETE_2026, PAIGE_2017, GROSS_2015, NIELSEN_2017, BILLER_2014],
  reviewed: null,
  related: [
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
    { href: "/paslaugos/osteopatija", label: "Osteopatija" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
    { href: "/duk", label: "Dažniausi klausimai" },
  ],
};
