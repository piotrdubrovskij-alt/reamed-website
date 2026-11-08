import type { ServicePage } from "./types";
import {
  BAGAGIOLO_2022,
  FRANKE_2014,
  GUILLAUD_2016,
  GUILLAUD_2018,
  HALLER_2020,
  PANAGOPOULOS_2015,
} from "@/content/conditions/sources";
import { eur, minutes } from "./price-text";

// Batch 6, draft of 07.11.2026. Plan: a separate block on structural osteopathy, without "miracles".
// Piotr, 07.11.2026: cranial and visceral techniques are used too, as gentle palpation and mobility work, told plainly.
export const osteopatija: ServicePage = {
  slug: "osteopatija",
  navTitle: "Osteopatija",
  meta: {
    title: "Osteopatas Vilniuje: kas yra osteopatija ir kada ji padeda",
    description:
      "Osteopatija Vilniaus centre: struktūrinės, kraniosakralinės ir visceralinės technikos nugaros, kaklo ir sąnarių skausmui, be pažadų išgydyti viską. Ką rodo tyrimai, kaina.",
  },
  therapyName: "Osteopatinis manualinis gydymas",
  hero: {
    h1: "Osteopatija Vilniuje",
    lead: "Osteopatija yra gydymas rankomis: osteopatas ištiria, kaip juda stuburas, sąnariai ir raumenys, o mobilizacijomis, manipuliacijomis ir minkštųjų audinių technikomis mažina skausmą ir gerina judrumą. ReaMed klinikoje pagrindas yra struktūrinė osteopatija, o kraniosakralines ir visceralines technikas taikome kaip švelnų papildymą, nežadėdami gydyti vidaus organų ligų. Tyrimai rodo naudą nugaros ir kaklo skausmui.",
  },
  about: {
    paragraphs: [
      "Osteopatija atsirado XIX amžiaus pabaigoje JAV. Šiandien Europoje osteopatai daugiausia dirba su judamojo aparato skausmu: nugaros, kaklo ir sąnarių.",
      "Struktūrinė osteopatija remiasi tuo, ką galima ištirti ir patikrinti: sąnarių judrumu, raumenų įtampa, judesio kokybe. Taikome sąnarių mobilizacijas ir manipuliacijas, raumenų energijos ir minkštųjų audinių technikas, o gydymą deriname su pratimais.",
      "Kraniosakralinės technikos yra švelnus darbas rankomis galvos, kaklo ir kryžkaulio srityje: lengvu prisilietimu jaučiame audinių įtampą ir judrumą (tai vadinama „klausymu“) ir švelniai jį koreguojame. Apžvalgoje, kurią sudarė 10 tyrimų su 681 lėtinį skausmą jaučiančiu pacientu, šios technikos skausmą sumažino, o funkciją pagerino labiau nei įprastinis ar imitacinis gydymas, ir poveikis išliko iki 6 mėnesių. Kaip jos veikia, tiksliai nežinoma, o „kaukolės ritmą“ skirtingi specialistai jaučia nevienodai, todėl juo nediagnozuojame.",
      "Visceralinės technikos yra švelni pilvo ir krūtinės srities audinių mobilizacija, kai jų įtampa riboja liemens judesius ar kvėpavimą. Tai judamojo aparato gydymo dalis, o ne vidaus organų ligų gydymas. Įrodymų nedaug: tyrime su nugaros skausmu visceralinės technikos, pridėtos prie kineziterapijos, po 6 savaičių skausmo nesumažino, o po metų skausmas buvo vidutiniškai 1,6 balo iš 10 mažesnis. Apžvalgos šių technikų įrodymus vertina kaip silpnus.",
      "Tyrimų apžvalgos rodo, kad osteopatinis gydymas mažina skausmą ir gerina funkciją esant ūmiam ir lėtiniam nugaros skausmui bei lėtiniam kaklo skausmui. Vaikų ligų, galvos skausmo ir žarnyno sutrikimų atveju įrodymai prieštaringi.",
    ],
  },
  helps: {
    items: [
      "Nugaros ir juosmens skausmas",
      "Kaklo skausmas ir įtampa",
      "Galvos skausmas dėl kaklo",
      "Skausmas tarp menčių, sustingusi krūtinės stuburo dalis",
      "Sąnarių sustingimas, ribotas judrumas",
      "Pasikartojantis skausmas, kai vieni pratimai nepadeda",
    ],
    note: "Ūmus skausmas, kai sunku pajudėti, irgi tinka: tada pradedame švelniomis technikomis.",
    pages: [
      "nugaros-skausmas",
      "skausmas-nugaros-apacioje",
      "isialgija-radikulopatija",
      "osteochondroze",
      "kaklo-skausmas",
      "cervikalgija",
      "itampos-galvos-skausmas",
    ],
  },
  visit: [
    { lead: "Išklausome ir ištiriame:", text: "laikyseną, stuburo ir sąnarių judesius, raumenų įtampą, o kai skausmas plinta, ir nervų funkciją." },
    { lead: "Paaiškiname, ką radome,", text: "ir ar osteopatija jums tinka, ar geriau rinktis kitą gydymą." },
    { lead: "Gydome rankomis:", text: "mobilizacijos, manipuliacijos, minkštųjų audinių, o prireikus kraniosakralinės ir visceralinės technikos." },
    { lead: "Baigiame pratimais:", text: "parodome, ką daryti namuose, kad pagerėjimas išliktų." },
  ],
  visitNote: `Vizitas trunka ${minutes("piotr")}. Osteopatiją atlieka Piotr Dubrovskij, kineziterapeutas ir osteopatas.`,
  methods: {
    items: [
      { title: "Sąnarių mobilizacijos:", text: "lėti ritmiški judesiai, kurie mažina skausmą ir didina judrumą." },
      {
        title: "Manipuliacijos:",
        text: "greitas mažos amplitudės judesys sąnaryje. Taikome tik ištyrę, jei nėra kontraindikacijų ir jums sutikus.",
      },
      {
        title: "Raumenų energijos technikos:",
        text: "švelniai įtempiate raumenį prieš osteopato pasipriešinimą, o po to sąnarys juda lengviau.",
      },
      { title: "Minkštųjų audinių technikos:", text: "raumenų ir fascijų atpalaidavimas, kai įtampa riboja judesį." },
      {
        title: "Kraniosakralinės technikos:",
        text: "lengvu prisilietimu jaučiame ir švelniai koreguojame galvos, kaklo ir kryžkaulio srities audinių įtampą ir judrumą.",
      },
      {
        title: "Visceralinės technikos:",
        text: "švelni pilvo ir krūtinės srities audinių mobilizacija, kai jų įtampa riboja liemens judesius ar kvėpavimą.",
      },
      { title: "Pratimai ir patarimai", text: "kasdienybei ir darbui, kad skausmas nesikartotų." },
    ],
    paragraphs: [
      "Ūmiam skausmui dažnai pakanka kelių vizitų. Jei skausmas kartojasi, osteopatiją deriname su kineziterapija ir pratimais. Jei po kelių vizitų pokyčio nėra, peržiūrime planą ir siūlome kitą gydymą.",
      "Apžvalgoje nugaros skausmas po osteopatinio gydymo praėjus 3 mėnesiams buvo vidutiniškai maždaug 13 balų iš 100 mažesnis nei palyginimo grupėse. Tačiau apžvalgų kokybė vertinama kaip žema, todėl rezultatus vertiname atsargiai ir nežadame stebuklų.",
    ],
  },
  price: {
    lines: ["piotr"],
    note: "Osteopatiją atlieka Piotr Dubrovskij. Vizito kaina nepriklauso nuo metodo, paketai jo vizitams netaikomi.",
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
    note: "Tokiais atvejais pirmiausia reikia gydytojo. Jei vartojate kraujo krešėjimą mažinančius vaistus ar turite sąnario protezą, pasakykite per ištyrimą: tada parenkame švelnesnes technikas.",
  },
  team: {
    title: "Osteopatiją atlieka",
    specialists: ["piotr-dubrovskij"],
    note: "Piotr Dubrovskij nuo 2012 m. yra Lietuvos nacionalinės ir jaunimo ledo ritulio rinktinių vyr. kineziterapeutas, nuo 2020 m. dėsto Vilniaus universiteto Medicinos fakultete.",
  },
  faq: [
    {
      q: "Kas yra osteopatas?",
      a: "Specialistas, kuris rankomis gydo judamojo aparato skausmą ir ribotą judrumą. ReaMed klinikoje osteopatiją atlieka kineziterapeutas ir osteopatas Piotr Dubrovskij.",
    },
    {
      q: "Kuo osteopatija skiriasi nuo manualinės terapijos ir chiropraktikos?",
      a: "Visos trys gydo rankomis ir naudoja panašias technikas. Manualinė terapija dažniau dirba su konkrečiu sąnariu ar sritimi, osteopatija vertina platesnius kūno ryšius, o chiropraktika labiausiai remiasi stuburo manipuliacijomis.",
    },
    {
      q: "Ar osteopatija gydo vidaus organus ar migreną?",
      a: "Ne. Vidaus organų ligas gydo gydytojai. Visceralines technikas taikome tik tam, kad pilvo ir krūtinės srities audiniai judėtų laisviau. Galvos skausmui dėl kaklo ir įtampos galvos skausmui rankų terapija kartu su pratimais gali padėti, o migrenos atveju įrodymų mažai.",
    },
    {
      q: "Kas yra kraniosakralinė terapija?",
      a: "Švelnios rankų technikos galvos, kaklo ir kryžkaulio srityje. Tyrimuose jos mažino lėtinį skausmą, bet kaip jos veikia, neaišku, o „kaukolės ritmo“ jutimas nėra patikimas diagnozės būdas. Todėl jas taikome kaip gydymo dalį, ne diagnozei nustatyti.",
    },
    {
      q: "Ar sąnarių traškinimas būtinas?",
      a: "Ne. Traškesys yra dujų burbuliuko garsas sąnaryje, jis nereiškia, kad kažkas buvo „įstatyta“. Manipuliaciją taikome tik tada, kai ji tikslinga, ir tik jums sutikus.",
    },
    {
      q: "Kiek kainuoja osteopato vizitas?",
      a: `Vizitas kainuoja ${eur("piotr")} ir trunka ${minutes("piotr")}. Kaina nepriklauso nuo to, kokius metodus taikome.`,
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
    {
      q: "Ar po vizito gali skaudėti?",
      a: "Kitą dieną gali jaustis nedidelis maudimas ar nuovargis. Toks diskomfortas dažniausiai būna laikinas ir greitai praeina.",
    },
  ],
  reviews: "osteopatija",
  sources: [FRANKE_2014, BAGAGIOLO_2022, HALLER_2020, GUILLAUD_2016, GUILLAUD_2018, PANAGOPOULOS_2015],
  reviewed: null,
  related: [
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
    { href: "/ka-gydome/nugaros-skausmas", label: "Nugaros skausmas" },
    { href: "/specialistai/piotr-dubrovskij", label: "Piotr Dubrovskij" },
  ],
};
