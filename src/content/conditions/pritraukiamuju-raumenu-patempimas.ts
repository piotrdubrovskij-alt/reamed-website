import type { ConditionPage } from "./types";
import { DOHA_2015, EKSTRAND_2011, HAROY_2019, SERNER_2020 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 4»).
// Visits: acute a few, long-lasting groin pain at least 5 (Piotr's rule of 07.11).
export const pritraukiamujuRaumenuPatempimas: ConditionPage = {
  slug: "pritraukiamuju-raumenu-patempimas",
  section: "sporto-traumos",
  navTitle: "Pritraukiamųjų raumenų patempimas",
  meta: {
    title: "Pritraukiamųjų raumenų patempimas ir kirkšnies skausmas",
    description:
      "Skauda kirkšnį ar šlaunies vidinę pusę po spyrio, čiuožimo ar krypties keitimo? Kaip gydomas pritraukiamųjų raumenų patempimas ir kiek trunka grįžimas į sportą.",
  },
  conditionName: "Pritraukiamųjų raumenų patempimas",
  hero: {
    h1: "Pritraukiamųjų raumenų patempimas",
    lead: "Pritraukiamieji raumenys yra šlaunies vidinėje pusėje ir dirba spiriant, čiuožiant ar staigiai keičiant kryptį, todėl jų traumos dažnos futbolininkams ir ledo ritulininkams. Patempus skauda kirkšnį ir šlaunies vidinę pusę, ypač suglaudžiant kojas. Tyrime, kuriame taikyta kriterijais pagrįsta reabilitacija, sportininkai po nedidelio patempimo į pilnas komandos treniruotes grįžo maždaug per 3 savaites, po visiško plyšimo per 3 mėnesius.",
    specialist: "erikas-jatkauskas",
  },
  about: {
    paragraphs: [
      "Kirkšnies skausmą sportininkams gali sukelti kelios priežastys. Tarptautinis sutarimas jas skirsto pagal tai, iš kur skausmas kyla: pritraukiamieji raumenys, klubinis juosmens raumuo, kirkšnies kanalas, gaktos sąvarža arba klubo sąnarys. Viena dažniausių priežasčių yra pritraukiamieji raumenys: profesionalių futbolininkų tyrime jų traumos sudarė 23 % visų raumenų traumų.",
      "Ūmus patempimas įvyksta staiga, o perkrovos skausmas didėja palaipsniui per savaites. Abiem atvejais gydymo pagrindas yra pritraukiamųjų raumenų jėgos pratimai. Norvegų futbolininkų tyrime vienas jėgos pratimas, vadinamasis Kopenhagos pritraukimo pratimas, kirkšnies problemų riziką sumažino 41 %.",
    ],
  },
  when: {
    items: [
      "Spiriant, čiuožiant ar keičiant kryptį pajutote dūrį kirkšnyje",
      "Skauda šlaunies vidinę pusę suglaudžiant kojas",
      "Kirkšnį skauda bėgant, ypač pradedant ar stabdant",
      "Kirkšnies skausmas didėja per sezoną ir nepraeina po poilsio",
      "Kirkšnies trauma kartojasi",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "ar skausmas prasidėjo staiga ar palaipsniui, kokie judesiai jį sukelia." },
    {
      lead: "Tada ištiriame:",
      text: "skausmingą vietą, pritraukiamųjų raumenų jėgą (kojų suglaudimo testą), klubo judesius, pilvo raumenis.",
    },
    { lead: "Atskiriame", text: "nuo klubo sąnario, kirkšnies kanalo ir gaktos sąvaržos skausmo, kurių gydymas skiriasi." },
    {
      lead: "Ir sudarome planą:",
      text: "pratimų etapai, bėgimo ir sporto judesių grąžinimas, jėgos testai prieš grįžtant.",
    },
  ],
  services: ["sporto-reabilitacija", "kineziterapija"],
  treatment: {
    items: [
      { title: "Pirmosios dienos:", text: "vengiame skausmingų judesių, bet vaikštome ir judame tiek, kiek leidžia skausmas." },
      {
        title: "Jėgos pratimai:",
        text: "nuo kojų suglaudimo su kamuoliu iki Kopenhagos pritraukimo pratimo, krūvį didinant etapais.",
      },
      { title: "Bėgimas ir sporto judesiai:", text: "krypties keitimas, spyriai, čiuožimas pagal jūsų sportą." },
      {
        title: "Prieš grįžtant:",
        text: "neturi skaudėti liečiant ir įtempiant raumenis, o jėga turi prilygti sveikajai pusei.",
      },
    ],
    paragraphs: [
      "Tyrime tie sportininkai, kurie prieš grįždami pasiekė būklę be skausmo, per metus vėl susižeidė rečiau: 5 %, palyginti su 21 % tų, kurie tokios būklės nepasiekė. Ūmiam patempimui dažniausiai pakanka kelių vizitų, o užsitęsusiam kirkšnies skausmui gydyti paprastai reikia ne mažiau kaip 5 vizitų.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Kirkšnyje atsirado guzas, kuris didėja kosint ar įtempiant pilvą",
      "Staiga be traumos prasidėjo stiprus kirkšnies ar sėklidės skausmas",
      "Kirkšnį skauda kartu su karščiavimu ar skausmu šlapinantis",
      "Po kritimo skauda kirkšnį ir sunku eiti",
      "Po traumos negalite atsiremti į koją",
    ],
  },
  team: {
    title: "Su kirkšnies traumomis dirba",
    specialists: ["erikas-jatkauskas", "kotryna-kairyte", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Kiek laiko gyja pritraukiamųjų raumenų patempimas?",
      a: "Tyrime po nedidelio patempimo sportininkams nebeskaudėjo maždaug po 2 savaičių, o į pilnas treniruotes jie grįžo maždaug po 3 savaičių. Po visiško plyšimo ar sausgyslės atplyšimo gijimas užtruko iki 3 mėnesių.",
    },
    {
      q: "Ar tai išvarža?",
      a: "Dažniausiai ne. Vadinamoji sportininko išvarža yra kirkšnies kanalo srities skausmas, o ne tikra išvarža. Jei kirkšnyje atsiranda guzas, kreipkitės į gydytoją.",
    },
    {
      q: "Ar galima treniruotis su skausmu?",
      a: "Nedidelis skausmas, kuris greitai praeina, ne visada trukdo treniruotis, bet jei jis didėja per treniruotę ar kitą dieną, krūvį reikia mažinti. Kokį krūvį galima, pasakome ištyrę.",
    },
    {
      q: "Kaip išvengti kirkšnies traumų?",
      a: "Reguliariai darykite pritraukiamųjų raumenų jėgos pratimus, pavyzdžiui, Kopenhagos pratimą: prieš sezoną tris kartus per savaitę, sezono metu bent kartą per savaitę.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "sporto-traumos",
  sources: [SERNER_2020, HAROY_2019, DOHA_2015, EKSTRAND_2011],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/raumenu-patempimas", label: "Raumenų patempimai ir plyšimai" },
    { href: "/ka-gydome/slaunies-dvigalvio-raumens-patempimas", label: "Šlaunies dvigalvio raumens patempimas" },
    { href: "/ka-gydome/grizimas-i-sporta-po-traumos", label: "Grįžimas į sportą po traumos" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
