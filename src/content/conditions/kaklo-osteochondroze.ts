import type { ConditionPage } from "./types";
import { NAKASHIMA_2015, NECK_PAIN_CPG } from "./sources";

// Draft of 08.11.2026, waiting for Piotr's review (Claude Doc «Пачка 8»).
// Section «Kaklas». Search: kaklo osteochondrozė 170.
export const kakloOsteochondroze: ConditionPage = {
  slug: "kaklo-osteochondroze",
  section: "kaklo-skausmas",
  navTitle: "Kaklo osteochondrozė",
  meta: {
    title: "Kaklo osteochondrozė: ką reiškia diagnozė ir kas padeda",
    description:
      "Gavote kaklo osteochondrozės diagnozę? Ką ji reiškia, kodėl pakitimai MRT dažni ir be skausmo, kas padeda nuo kaklo skausmo ir sustingimo. Be siuntimo.",
  },
  conditionName: "Kaklo osteochondrozė",
  hero: {
    h1: "Kaklo osteochondrozė",
    lead: "Kaklo osteochondrozė reiškia su amžiumi atsirandančius kaklo tarpslankstelinių diskų ir slankstelių pakitimus. Didelis tyrimas parodė, kad disko išsipūtimų MRT turi beveik 9 iš 10 žmonių, kuriems kaklas visai neskauda, todėl diagnozė savaime nepaaiškina skausmo. Gydome tai, ką jaučiate: kaklo skausmą, sustingimą, galvos skausmą ar tirpimą rankoje.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Osteochondrozės diagnozė dažnai rašoma po rentgeno ar MRT. Ji apibūdina, kad diskai tapo žemesni ir sausesni, o slankstelių kraštuose atsirado kaulinių ataugų. Tai natūralus senėjimas, panašus į raukšles odoje.",
      "Japonų tyrime MRT ištyrė 1211 žmonių, kuriems kaklas neskaudėjo. Disko išsipūtimų turėjo 87,6 %, ir net tarp 20–29 metų žmonių tokių buvo 73–78 %. Todėl tas pats vaizdas vienam skauda, o kitam ne.",
      "Kineziterapeutų kaklo skausmo gairės kaklo skausmui rekomenduoja pratimus ir manualinę terapiją. Svarbiausia ne pakitimai nuotraukoje, o tai, kaip kaklas juda, kiek jis apkraunamas ir ar nėra pavojaus ženklų.",
    ],
  },
  when: {
    items: [
      "Gavote kaklo osteochondrozės diagnozę ir nežinote, ką daryti toliau",
      "Skauda ir stingsta kaklas, sunku pasukti galvą",
      "Skauda galvą pakaušyje, ypač po darbo prie kompiuterio",
      "Skausmas plinta į petį ar ranką, tirpsta pirštai",
      "Kaklo skausmas kartojasi kelis kartus per metus",
    ],
  },
  assess: [
    { lead: "Pirmiausia išklausome:", text: "kas vargina, kada skauda ir ką jau bandėte." },
    { lead: "Peržiūrime tyrimus", text: "ir paaiškiname žodžiais, ką reiškia jūsų MRT ar rentgeno aprašymas." },
    { lead: "Tada ištiriame:", text: "kaklo ir krūtinės stuburo judesius, giliųjų kaklo raumenų darbą, rankų jėgą ir jutimą." },
    { lead: "Ir sudarome planą:", text: "kaip sumažinti skausmą dabar ir kaip sustiprinti kaklą ateičiai." },
  ],
  services: ["kineziterapija", "manualine-terapija", "osteopatija", "gydomasis-masazas"],
  treatment: {
    items: [
      {
        title: "Paaiškinimas:",
        text: "pakitimai tyrime nereiškia, kad kaklas „trupa“ ar kad reikia vengti judesių.",
      },
      { title: "Pratimai:", text: "giliųjų kaklo, mentės ir viršutinės nugaros raumenų stiprinimas, judrumas." },
      { title: "Manualinė terapija:", text: "švelnios kaklo ir krūtinės stuburo mobilizacijos skausmui mažinti ir judesiui gerinti." },
      { title: "Darbo vietos ir įpročių pritaikymas:", text: "ekrano aukštis, pertraukos, miegas." },
    ],
    paragraphs: [
      "Pakitimų tyrime pratimai nepanaikins, bet skausmą ir judrumą galima gerokai pagerinti. Mūsų klinikoje paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites ir kasdienių pratimų namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją.",
    items: [
      "Tirpsta abi rankos, pirštai tapo nerangūs (sunku užsisegti sagas), eisena nestabili",
      "Greitai silpnėja ranka",
      "Kartu su kaklo skausmu svaigsta galva, dvejinasi akyse ar sunku kalbėti",
      "Kaklo skausmas po traumos ar avarijos",
      "Karščiuojate, be priežasties krenta svoris ar sirgote onkologine liga",
    ],
  },
  team: {
    title: "Su kaklo osteochondroze dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Ar kaklo osteochondrozę galima išgydyti?",
      a: "Pakitimų tyrime panaikinti negalima, ir to nereikia. Galima sumažinti skausmą, atgauti judrumą ir jėgą, kad pakitimai netrukdytų gyventi.",
    },
    {
      q: "Ar kaklo osteochondrozė gali sukelti galvos svaigimą?",
      a: "Kaklo skausmas kartais būna kartu su nestabilumo jausmu, bet svaigimą gali sukelti ir kitos, rimtesnės priežastys. Jei svaigsta galva, dvejinasi akyse ar sunku kalbėti, pirmiausia kreipkitės į gydytoją.",
    },
    {
      q: "Ar reikia MRT?",
      a: "Dažniausiai ne: MRT reikia, jei yra pavojaus ženklų ar silpsta ranka. Pakitimai MRT labai dažni ir be skausmo, todėl vaizdas gydymo dažniausiai nepakeičia.",
    },
    {
      q: "Ar manualinė terapija kaklui saugi?",
      a: "Kaklui dažniausiai taikome švelnias mobilizacijas. Prieš bet kokią manualinę terapiją ištiriame ir patikriname, ar nėra priežasčių jos netaikyti.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "kaklo-skausmas",
  sources: [NAKASHIMA_2015, NECK_PAIN_CPG],
  reviewed: { by: "mangirdas-kazacenko", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
    { href: "/ka-gydome/cervikalgija", label: "Cervikalgija" },
    { href: "/ka-gydome/kaklo-radikulopatija", label: "Kaklo radikulopatija" },
    { href: "/ka-gydome/osteochondroze", label: "Osteochondrozė" },
  ],
};
