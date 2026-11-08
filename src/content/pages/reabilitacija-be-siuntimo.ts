import type { InfoPage } from "./types";
import { VLK_FAQ } from "@/content/conditions/sources";
import { getConditionPage } from "@/content/conditions";
import { atsistatymasPoOperaciju } from "@/content/conditions/atsistatymas-po-operaciju";
import { eur, minutes, packEur } from "@/content/services/price-text";

// Batch 15. Plan of 07.11.2026: an honest page for people looking for rehabilitation. «su siuntimu» stays out of the title on
// purpose (Piotr does not want referral-seeking patients): the page says plainly that a referral cannot be used here.
// The rules of compensated rehabilitation are from the State Patient Fund's FAQ (VLK_FAQ); nothing else is claimed about them.
const conditionLink = (slug: string) => {
  const p = getConditionPage(slug);
  if (!p) throw new Error(`reabilitacija-be-siuntimo: missing page ${slug}`);
  return { href: `/ka-gydome/${slug}`, label: p.navTitle };
};

export const reabilitacijaBeSiuntimo: InfoPage = {
  path: "/reabilitacija-be-siuntimo",
  navTitle: "Privati reabilitacija be siuntimo",
  schema: "MedicalWebPage",
  therapyName: "Privati reabilitacija",
  meta: {
    title: "Privati reabilitacija Vilniuje be siuntimo ir be eilių",
    description:
      "Privati reabilitacija Vilniaus centre po operacijų ir traumų: gydytojo siuntimo nereikia, eilių nėra. Kuo skiriasi nuo kompensuojamos, kaina, kaip pradėti.",
  },
  back: { href: "/#paslaugos", label: "Paslaugos" },
  hero: {
    h1: "Privati reabilitacija Vilniuje be siuntimo",
    lead: "ReaMed yra privati kineziterapijos klinika Vilniaus centre: gydytojo siuntimo nereikia, ligonių kasų eilių nėra, o paslaugos mokamos. Padedame atsigauti po operacijų ir traumų, gydome nugaros, kaklo ir sąnarių skausmą. Su ligonių kasomis nedirbame, todėl kompensuojamos reabilitacijos siuntimo pas mus panaudoti negalima.",
  },
  blocks: [
    {
      kind: "compare",
      id: "kuo-skiriasi",
      title: "Privati ir kompensuojama reabilitacija",
      columns: [
        {
          title: "Privati reabilitacija ReaMed klinikoje",
          ours: true,
          rows: [
            { label: "Siuntimas", value: "Nereikia, registruojatės patys." },
            { label: "Kas moka", value: "Pacientas. Jei turite sveikatos draudimą, išrašome sąskaitą faktūrą draudimo bendrovei." },
            { label: "Kada pradėti", value: "Artimiausiu laisvu laiku, o po operacijos, kai leidžia chirurgas." },
            { label: "Kas sudaro planą", value: "Kineziterapeutas po ištyrimo. Vizitų skaičius priklauso nuo būklės." },
            { label: "Kur vyksta", value: "Olimpiečių g. 1A-7, Vilniuje." },
          ],
        },
        {
          title: "Kompensuojama reabilitacija",
          rows: [
            { label: "Siuntimas", value: "Reikia. Reabilitaciją skiria ir siuntimą išrašo fizinės medicinos ir reabilitacijos gydytojas." },
            { label: "Kas moka", value: "Ligonių kasos, jei gydymo įstaiga turi sutartį su teritorine ligonių kasa." },
            { label: "Kada pradėti", value: "Po gydytojo konsultacijos, kai pasirinktoje įstaigoje yra laisvų vietų." },
            { label: "Kas sudaro planą", value: "Gydytojas nustato, ar reabilitacijos reikia, kiek ji truks ir kokia forma vyks." },
            { label: "Kur vyksta", value: "Įstaigą visoje Lietuvoje galite pasirinkti patys, ambulatoriškai arba stacionare." },
          ],
        },
      ],
    },
    {
      kind: "items",
      id: "ar-priklauso",
      title: "Ar man priklauso kompensuojama reabilitacija?",
      intro: "Savaime ji nepriklauso, net ir po operacijos: ją skiria gydytojas pagal indikacijas. Kelias toks:",
      items: [
        { title: "Pirmiausia kreipiatės", text: "į šeimos gydytoją, o jei gulite ligoninėje, į gydantį gydytoją." },
        { title: "Jei reabilitacija reikalinga,", text: "jis išrašo siuntimą pas fizinės medicinos ir reabilitacijos gydytoją." },
        { title: "Reabilitacijos gydytojas įvertina", text: "jūsų būklę ir nusprendžia, ar reabilitacijos reikia, kiek ji truks ir kur vyks: ambulatoriškai ar stacionare." },
        { title: "Įstaigą renkatės patys", text: "iš tų, kurios turi sutartį su ligonių kasa ir laisvų vietų." },
      ],
      paragraphs: [
        "Dėl tos pačios ligos suaugusieji į reabilitaciją siunčiami tik kartą per kalendorinius metus. Kilus klausimų dėl gydytojo sprendimo, pirmiausia kreipkitės į gydymo įstaigos administraciją, o jei atsakymas netenkina, į artimiausią teritorinę ligonių kasą.",
      ],
    },
    {
      kind: "text",
      id: "reabilitologas",
      title: "Reabilitologas ar kineziterapeutas?",
      paragraphs: [
        "Reabilitologas, tiksliau fizinės medicinos ir reabilitacijos gydytojas, yra gydytojas: jis įvertina būklę, skiria reabilitaciją ir išrašo siuntimą. Kineziterapeutas yra licencijuotas specialistas, kuris ištiria judesius, sudaro pratimų planą ir gydo.",
        "ReaMed klinikoje dirba kineziterapeutai, gydytojų reabilitologų neturime. Todėl siuntimų, vaistų receptų ar nedarbingumo pažymėjimų neišrašome.",
      ],
    },
    {
      kind: "dots",
      id: "kam-tinka",
      title: "Kam tinka privati reabilitacija",
      items: [
        "Po ortopedinės ar stuburo operacijos, kai norite pradėti anksti",
        "Kai po gipso ar įtvaro sąnarys sustingęs",
        "Po sporto traumos, kai reikia saugiai grįžti į krūvį",
        "Kai kompensuojama reabilitacija nepriklauso arba jau ją panaudojote",
        "Kai po kompensuojamos reabilitacijos norite tęsti gydymą",
        "Kai skauda nugarą, kaklą ar sąnarius ir siuntimo laukti nenorite",
      ],
      links: {
        title: "Plačiau",
        items: [
          "atsistatymas-po-operaciju",
          "reabilitacija-po-kryzminio-raiscio-operacijos",
          "reabilitacija-po-menisko-operacijos",
          "reabilitacija-po-peties-artroskopijos",
          "reabilitacija-po-disko-isvarzos-operacijos",
          "sporto-traumos",
        ].map(conditionLink),
      },
    },
    {
      kind: "steps",
      id: "kaip-pradeti",
      title: "Kaip pradėti",
      items: [
        { lead: "Užsiregistruokite:", text: "paskambinkite arba palikite užklausą. Siuntimo nereikia." },
        { lead: "Atsineškite", text: "operacijos išrašą, tyrimų atsakymus ir chirurgo nurodymus, jei jų turite." },
        { lead: "Per pirmąjį vizitą", text: "ištiriame, sudarome planą ir pradedame gydymą." },
        { lead: "Toliau", text: "vizitus ir krūvį koreguojame pagal tai, kaip sekasi." },
      ],
    },
    {
      kind: "price",
      id: "kaina",
      title: "Kaina",
      note: "Ilgesnei reabilitacijai patogiausias 10 vizitų paketas: jis galioja 84 dienas nuo pirkimo.",
      lines: ["pirmasis-vizitas", "kineziterapija", "kompleksine"],
    },
    {
      kind: "warning",
      id: "gydytojas",
      title: "Kada pirmiausia reikia gydytojo?",
      note: atsistatymasPoOperaciju.urgent.note ?? "",
      items: atsistatymasPoOperaciju.urgent.items,
    },
    {
      kind: "team",
      id: "komanda-h",
      title: "Reabilitaciją veda",
      specialists: ["kotryna-kairyte", "mangirdas-kazacenko", "piotr-dubrovskij", "erikas-jatkauskas"],
    },
    {
      kind: "faq",
      id: "duk-h",
      title: "Dažniausi klausimai",
      items: [
        { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
        {
          q: "Ar galiu pas jus panaudoti ligonių kasų siuntimą?",
          a: "Ne. Su ligonių kasomis nedirbame, todėl kompensuojamos reabilitacijos siuntimo priimti negalime. Su tokiu siuntimu kreipkitės į įstaigą, turinčią sutartį su ligonių kasa.",
        },
        {
          q: "Ar po operacijos priklauso reabilitacija?",
          a: "Savaime ne. Kompensuojamą reabilitaciją pagal indikacijas skiria fizinės medicinos ir reabilitacijos gydytojas. Paklauskite operavusio ar šeimos gydytojo. Privačiai pradėti galite ir be siuntimo, kai leidžia chirurgas.",
        },
        {
          q: "Kaip greitai galima pradėti po operacijos?",
          a: "Kai leidžia chirurgas. Po kryžminio raiščio ir menisko operacijų paprastai pradedame maždaug po savaitės: pirmiausia patarimai ir pasyvūs judesiai.",
        },
        {
          q: "Kiek kainuoja?",
          a: `Pirmasis vizitas su ištyrimu ${eur("pirmasis-vizitas")} (${minutes("pirmasis-vizitas")}), kineziterapija ${eur("kineziterapija")} (${minutes("kineziterapija")}), pakete ${packEur("kineziterapija", 5)} arba ${packEur("kineziterapija", 10)} už vizitą. [Visos kainos](/kainos).`,
        },
        {
          q: "Ar kompensuoja draudimas?",
          a: "Jei turite sveikatos draudimą, po vizito išrašome sąskaitą faktūrą draudimo bendrovei. Ar ir kiek ji kompensuos, priklauso nuo jūsų sutarties.",
        },
      ],
    },
    { kind: "reviews", service: "pooperacine-reabilitacija" },
  ],
  sources: [VLK_FAQ],
  reviewed: null,
  related: [
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Pooperacinė reabilitacija" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
    { href: "/duk", label: "Dažniausi klausimai" },
  ],
};
