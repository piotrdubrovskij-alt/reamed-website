import type { ConditionPage } from "./types";
import { BACK_PAIN_CPG, BRINJIKJI_2015 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 1»).
export const osteochondroze: ConditionPage = {
  slug: "osteochondroze",
  section: "nugaros-skausmas",
  navTitle: "Osteochondrozė",
  meta: {
    title: "Osteochondrozė: ką reiškia diagnozė ir kaip gydoma | ReaMed",
    description:
      "Gavote stuburo ar kaklo osteochondrozės diagnozę? Ką ji reiškia, kodėl tai ne nuosprendis ir kaip kineziterapija padeda mažinti skausmą.",
  },
  conditionName: "Stuburo osteochondrozė",
  hero: {
    h1: "Osteochondrozė: ką reiškia ši diagnozė",
    lead: "Stuburo osteochondrozė reiškia su amžiumi atsirandančius tarpslankstelinių diskų ir slankstelių pakitimus. Tokie pakitimai labai dažni ir žmonėms, kuriems visai neskauda, todėl diagnozė savaime nepaaiškina skausmo ir nėra nuosprendis. Gydome ne nuotrauką, o tai, ką jaučiate: nugaros ar kaklo skausmą, sustingimą, plintančius simptomus.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Ligų klasifikacijoje TLK-10 yra kodas M42 (stuburo osteochondrozė), todėl ši diagnozė dažnai rašoma išrašuose po rentgeno ar MRT. Ji apibūdina, kad diskai tapo žemesni ir sausesni, o slankstelių kraštuose atsirado kaulinių ataugų. Panašūs procesai vyksta ir odoje ar sąnariuose: tai natūralus kūno senėjimas.",
      "Tyrimų apžvalga parodė, kad disko degeneracija MRT matoma 37 % 20-mečių ir net 96 % 80-mečių žmonių, kuriems visai neskauda. Todėl tas pats vaizdas vienam žmogui sukelia skausmą, o kitam ne. Svarbiau yra tai, kaip juda jūsų kūnas, koks krūvis, miegas ir stresas.",
    ],
  },
  when: {
    items: [
      "Gavote osteochondrozės diagnozę ir nežinote, ką daryti toliau",
      "Skauda nugarą ar kaklą, sustingsta rytais",
      "Skausmas plinta į ranką ar koją, tirpsta pirštai",
      "Bijote judėti ar sportuoti, kad „nepablogintumėte“",
      "Skausmas kartojasi kelis kartus per metus",
    ],
  },
  assess: [
    { lead: "Pirmiausia išklausome:", text: "kas jus vargina, kada skauda ir ką jau bandėte." },
    { lead: "Peržiūrime tyrimus", text: "ir paaiškiname žodžiais, ką reiškia jūsų MRT ar rentgeno aprašymas." },
    { lead: "Tada ištiriame:", text: "stuburo judesius, raumenų jėgą ir kontrolę, nervų funkciją." },
    { lead: "Ir sudarome planą:", text: "kaip sumažinti skausmą dabar ir kaip sustiprinti nugarą ar kaklą ateičiai." },
  ],
  services: ["kineziterapija", "manualine-terapija", "osteopatija", "gydomasis-masazas"],
  treatment: {
    items: [
      { title: "Paaiškinimas ir baimės mažinimas:", text: "pakitimai tyrime nereiškia, kad stuburas „trupa“ ar kad reikia vengti judesių." },
      { title: "Pratimai", text: "judrumui ir jėgai: reguliarus judėjimas yra veiksmingiausia ilgalaikė priemonė nuo pasikartojančio nugaros skausmo." },
      { title: "Manualinė terapija ir masažas", text: "trumpam sumažina skausmą ir sustingimą, kad būtų lengviau judėti ir sportuoti." },
      { title: "Kasdienybės pritaikymas:", text: "darbo vieta, pertraukos, miegas, laipsniškas sporto krūvis." },
    ],
    paragraphs: [
      "Pakitimų tyrime pratimai nepanaikins, bet skausmą ir funkciją galima gerokai pagerinti. Pirmąjį pagerėjimą dažniausiai pajuntate per kelias savaites reguliaraus darbo.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją.",
    items: [
      "Sutriko šlapinimasis ar tuštinimasis, nejaučiate tarpvietės",
      "Greitai silpnėja ranka ar koja",
      "Svaigsta galva, dvejinasi akyse ar sunku kalbėti kartu su kaklo skausmu",
      "Karščiuojate, krenta svoris ar sirgote onkologine liga",
    ],
  },
  team: {
    title: "Su osteochondroze dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "kotryna-kairyte", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Ar osteochondrozę galima išgydyti?",
      a: "Pakitimų tyrime panaikinti negalima, ir to nereikia. Galima sumažinti skausmą, atgauti judrumą ir jėgą, kad pakitimai netrukdytų gyventi.",
    },
    {
      q: "Kuo skiriasi kaklo osteochondrozė?",
      a: "Tai tie patys pakitimai kaklo srityje. Jie gali būti susiję su kaklo skausmu, galvos skausmu pakaušyje ar tirpimu rankoje, bet dažnai būna ir be jokių simptomų.",
    },
    { q: "Ar galima sportuoti?", a: "Taip, ir tai svarbu. Krūvį parenkame pagal simptomus ir didiname palaipsniui." },
    {
      q: "Ar padeda tepalai ar papildai?",
      a: "Įrodymų, kad papildai „atstato“ diskus, nėra. Vaistus nuo skausmo aptarkite su gydytoju.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "nugaros-skausmas",
  sources: [BRINJIKJI_2015, BACK_PAIN_CPG],
  reviewed: { by: "mangirdas-kazacenko", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/skausmas-nugaros-apacioje", label: "Skausmas nugaros apačioje" },
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
  ],
};
