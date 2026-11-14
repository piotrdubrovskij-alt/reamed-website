import type { ConditionPage } from "./types";
import { ASKLING_2013, EKSTRAND_2011, VAN_DYK_2019 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 4»).
// "Go to a doctor at once" for a tendon torn off the sitting bone is marked in the doc for Piotr to confirm.
export const slauniesDvigalvioRaumensPatempimas: ConditionPage = {
  slug: "slaunies-dvigalvio-raumens-patempimas",
  section: "sporto-traumos",
  navTitle: "Šlaunies dvigalvio raumens patempimas",
  meta: {
    title: "Šlaunies užpakalinės pusės raumens patempimas: gydymas",
    description:
      "Sprintuojant „trūktelėjo“ šlaunies užpakalinėje pusėje? Kaip gydomas dvigalvio raumens patempimas, kiek tai trunka ir kaip sumažinti pasikartojimo riziką.",
  },
  conditionName: "Šlaunies užpakalinės pusės raumenų patempimas",
  hero: {
    h1: "Šlaunies dvigalvio raumens patempimas",
    lead: "Šlaunies užpakalinės pusės raumenų, dažniausiai dvigalvio, patempimas yra viena dažniausių traumų sporto šakose, kur sprintuojama: futbole, lengvojoje atletikoje, krepšinyje. Jis įvyksta bėgant dideliu greičiu arba labai ištempus koją, pavyzdžiui, spiriant ar atliekant špagatą. Gydymo pagrindas yra pratimai, kai raumuo dirba ilgėdamas: futbolininkų tyrime tokia programa grįžimą į treniruotes sutrumpino nuo 51 iki 28 dienų.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Šlaunies užpakalinėje pusėje yra trys raumenys: dvigalvis, pusgyslinis ir pusplėvinis. Profesionalių futbolininkų tyrime jie sudarė 37 % visų raumenų traumų. Trauma būna dviejų tipų: sprintuojant, kai koja greitai tiesiasi, ir labai ištempus koją. Šis skirtumas svarbus: ištempimo tipo traumos gijo beveik dvigubai ilgiau nei sprinto.",
      "Šios traumos dažnai kartojasi, todėl svarbu ne tik sugydyti, bet ir sustiprinti raumenį. Programos su vadinamuoju Nordic hamstring pratimu šlaunies užpakalinės pusės traumų skaičių sumažina maždaug perpus.",
    ],
  },
  when: {
    items: [
      "Sprintuojant ar spiriant pajutote dūrį šlaunies užpakalinėje pusėje",
      "Skauda lenkiant koją per kelį ar keliant tiesią koją",
      "Atsirado mėlynė šlaunies užpakalinėje pusėje ar po keliu",
      "Lėtai bėgti jau galite, bet greičiau vis dar skauda",
      "Šlaunies užpakalinės pusės raumuo patempiamas ne pirmą kartą",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kaip įvyko trauma: sprintuojant ar labai ištempus koją, ar tai pirma trauma.",
    },
    {
      lead: "Tada ištiriame:",
      text: "skausmingą vietą ir jos ilgį, raumens jėgą, kaip skauda keliant tiesią koją, palyginame su sveikąja.",
    },
    {
      lead: "Atmetame",
      text: "sausgyslės atplyšimą nuo sėdynkaulio ir skausmą, plintantį iš nugaros; jei reikia, siūlome MRT ar gydytojo konsultaciją.",
    },
    { lead: "Ir sudarome planą:", text: "pratimų etapai, bėgimo programa ir testai prieš grįžtant." },
  ],
  services: ["sporto-reabilitacija", "kineziterapija"],
  treatment: {
    items: [
      { title: "Pirmosios dienos:", text: "vaikščiojimas be skausmo, švelnūs raumens įtempimai, patarimai, ko vengti." },
      {
        title: "Pratimai raumeniui ilgėjant:",
        text: "tokie pratimai yra gydymo pagrindas ir į sportą grąžina greičiau nei įprasti jėgos pratimai.",
      },
      { title: "Bėgimo programa:", text: "nuo lėto bėgimo iki sprinto, greitį didinant etapais." },
      { title: "Prevencija:", text: "Nordic hamstring ir kiti jėgos pratimai lieka treniruočių plane ir grįžus į sportą." },
    ],
    paragraphs: [
      "Švedų futbolininkų tyrime po sprinto traumos į pilnas treniruotes grįžo vidutiniškai per 3–6 savaites, po ištempimo traumos per 6–11 savaičių, priklausomai nuo programos. Dažniausiai pakanka kelių vizitų, o tarp jų pratimai namuose ar sporto salėje.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po traumos sėdmens apačioje atsirado didelė mėlynė, sunku eiti ir sėdėti",
      "Girdėjote spragtelėjimą ir nebegalite sulenkti kojos per kelį",
      "Kartu silpsta pėda ar tirpsta koja",
      "Šlaunis ar blauzda ištinusi, kieta, o skausmas didėja net ramybėje",
    ],
  },
  team: {
    title: "Su šlaunies raumenų traumomis dirba",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "edmundas-zlatkus"],
  },
  faq: [
    {
      q: "Ar galima bėgti su patemptu šlaunies raumeniu?",
      a: "Lėtai bėgti dažnai galima anksčiau, nei manoma, jei neskauda. Greitį didiname palaipsniui, o sprintas grįžta paskutinis.",
    },
    {
      q: "Ar padeda tempimas?",
      a: "Švelnus tempimas be skausmo gali būti programos dalis, tačiau vien tempimas traumų nesumažina. Svarbiausia yra jėgos pratimai, kai raumuo dirba ilgėdamas.",
    },
    {
      q: "Kas yra Nordic hamstring pratimas?",
      a: "Tai pratimas klūpant: kitas žmogus prilaiko kulnus, o jūs lėtai leidžiatės į priekį, stabdydami judesį šlaunies užpakalinės pusės raumenimis. Jis tinka prevencijai ir vėlesniems reabilitacijos etapams, ne pirmosioms dienoms po traumos.",
    },
    {
      q: "Kodėl ši trauma kartojasi?",
      a: "Dažna priežastis yra per ankstyvas grįžimas, kai raumuo dar silpnesnis už sveikąjį. Todėl prieš grįžtant tikriname jėgą ir bėgimą pilnu greičiu.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "sporto-traumos",
  sources: [ASKLING_2013, VAN_DYK_2019, EKSTRAND_2011],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/raumenu-patempimas", label: "Raumenų patempimai ir plyšimai" },
    { href: "/ka-gydome/pritraukiamuju-raumenu-patempimas", label: "Pritraukiamųjų raumenų patempimas" },
    { href: "/ka-gydome/grizimas-i-sporta-po-traumos", label: "Grįžimas į sportą po traumos" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
