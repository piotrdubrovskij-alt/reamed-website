import type { ServicePage } from "./types";
import { BACK_PAIN_CPG, BAGAGIOLO_2022, FRANKE_2014, GUILLAUD_2016 } from "@/content/conditions/sources";
import { eur, minutes } from "./price-text";

// Batch 6, draft of 07.11.2026. Plan: a separate block on structural osteopathy, without "miracles".
export const osteopatija: ServicePage = {
  slug: "osteopatija",
  navTitle: "Osteopatija",
  meta: {
    title: "Osteopatas Vilniuje: kas yra osteopatija ir kada ji padeda | ReaMed",
    description:
      "Struktūrinė osteopatija Vilniaus centre: nugaros, kaklo ir sąnarių skausmo gydymas rankomis, be pažadų išgydyti viską. Ką rodo tyrimai, kaip vyksta vizitas, kaina.",
  },
  therapyName: "Osteopatinis manualinis gydymas",
  hero: {
    h1: "Osteopatija Vilniuje",
    lead: "Osteopatija yra gydymas rankomis: osteopatas ištiria, kaip juda stuburas, sąnariai ir raumenys, o mobilizacijomis, manipuliacijomis ir minkštųjų audinių technikomis mažina skausmą ir gerina judrumą. ReaMed klinikoje osteopatija yra struktūrinė: dirbame su judamuoju aparatu ir nežadame gydyti vidaus organų. Tyrimai rodo naudą nugaros ir kaklo skausmui.",
  },
  about: {
    paragraphs: [
      "Osteopatija atsirado XIX amžiaus pabaigoje JAV. Šiandien Europoje osteopatai daugiausia dirba su judamojo aparato skausmu: nugaros, kaklo ir sąnarių.",
      "Struktūrinė osteopatija remiasi tuo, ką galima ištirti ir patikrinti: sąnarių judrumu, raumenų įtampa, judesio kokybe. Taikome sąnarių mobilizacijas ir manipuliacijas, raumenų energijos ir minkštųjų audinių technikas, o gydymą deriname su pratimais.",
      "Apie kitas kryptis sakome atvirai. Kraniosakralinės osteopatijos diagnostika tyrimuose nepatikima, o jos poveikio patikimų įrodymų beveik nėra. Vidaus organų ligų osteopatija negydo. Todėl šių metodų kaip atskiro gydymo nesiūlome.",
      "Tyrimų apžvalgos rodo, kad osteopatinis gydymas mažina skausmą ir gerina funkciją esant ūmiam ir lėtiniam nugaros skausmui bei lėtiniam kaklo skausmui. Vaikų ligų, galvos skausmo ir žarnyno sutrikimų atveju įrodymai prieštaringi.",
    ],
  },
  helps: {
    items: [
      "Nugaros ir juosmens skausmas",
      "Kaklo skausmas ir įtampa",
      "Galvos skausmas dėl kaklo",
      "Skausmas tarp mentių, sustingusi krūtinės stuburo dalis",
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
    { lead: "Gydome rankomis:", text: "mobilizacijos, manipuliacijos, raumenų ir minkštųjų audinių technikos." },
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
      a: "Ne. Vidaus organų ligas gydo gydytojai. Galvos skausmui dėl kaklo ir įtampos galvos skausmui rankų terapija kartu su pratimais gali padėti, o migrenos atveju įrodymų mažai.",
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
  sources: [FRANKE_2014, BAGAGIOLO_2022, GUILLAUD_2016, BACK_PAIN_CPG],
  reviewed: null,
  related: [
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
    { href: "/ka-gydome/nugaros-skausmas", label: "Nugaros skausmas" },
    { href: "/specialistai/piotr-dubrovskij", label: "Piotr Dubrovskij" },
  ],
};
