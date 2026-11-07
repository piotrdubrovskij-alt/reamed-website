import type { ConditionPage } from "./types";
import { EKSTRAND_2011, MUNICH_2013, PEACE_LOVE_2020 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 4»).
// The time ranges sum up the sourced figures of the three muscle pages (hamstring, adductor, calf).
export const raumenuPatempimas: ConditionPage = {
  slug: "raumenu-patempimas",
  section: "sporto-traumos",
  navTitle: "Raumenų patempimai ir plyšimai",
  meta: {
    title: "Raumens patempimas ir plyšimas: simptomai, gydymas, trukmė | ReaMed",
    description:
      "Patempėte raumenį? Kaip atskirti patempimą nuo plyšimo, ką daryti pirmomis dienomis, kiek trunka gijimas ir kada grįžti į sportą. Kineziterapija Vilniaus centre.",
  },
  conditionName: "Raumens patempimas ir plyšimas",
  hero: {
    h1: "Raumenų patempimai ir plyšimai",
    lead: "Raumens patempimas yra raumens skaidulų pažeidimas, kai raumuo staiga per daug ištempiamas ar susitraukia didele jėga, dažniausiai sprintuojant, šokant ar keičiant kryptį. Skausmas atsiranda iš karto, kartais kartu su mėlyne ir silpnumu. Lengvas patempimas sugyja greičiau, plyšimui reikia daugiau laiko, o abiem atvejais svarbiausia gydymo dalis yra palaipsniui sunkinami pratimai.",
    specialist: "erikas-jatkauskas",
  },
  about: {
    paragraphs: [
      "Sporto medicinos specialistai raumenų pažeidimus skirsto į dvi grupes: funkcinius sutrikimus, kai raumuo įsitempęs ir skauda, bet skaidulos nesuplyšusios, ir struktūrinius pažeidimus, kai skaidulos plyšta iš dalies ar visiškai. Kasdien jie vadinami patempimu ir plyšimu, nors riba tarp jų ne visada aiški.",
      "Dažniausiai pažeidžiami kojų raumenys, kurie greitai keičia ilgį sprintuojant ir šokant: šlaunies užpakalinės pusės, pritraukiamieji, keturgalvis ir blauzdos raumenys. Profesionalių futbolininkų tyrime šios keturios grupės sudarė 92 % visų raumenų traumų, o 16 % traumų buvo pakartotinės ir užtruko ilgiau nei pirmoji.",
    ],
  },
  when: {
    items: [
      "Staiga sutraukus raumenį pajutote dūrį ar „trūktelėjimą“",
      "Raumuo skauda liečiant, tempiant ar įtempiant",
      "Atsirado mėlynė ar patinimas",
      "Sunku bėgti, šokti ar visa jėga įtempti raumenį",
      "Tas pats raumuo patempiamas ne pirmą kartą",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kaip įvyko trauma, ar girdėjote spragtelėjimą, ar galėjote tęsti treniruotę." },
    {
      lead: "Tada ištiriame:",
      text: "skausmingą vietą, raumens jėgą ir ilgį, kaip skauda įtempiant ir tempiant, palyginame su sveikąja koja.",
    },
    {
      lead: "Įvertiname,",
      text: "ar reikia echoskopijos ar MRT: dažniausiai jų reikia, kai įtariamas didelis plyšimas ar sausgyslės atplyšimas.",
    },
    { lead: "Ir sudarome planą:", text: "krūvio etapai ir kriterijai, kada grįžti į treniruotes ir varžybas." },
  ],
  services: ["sporto-reabilitacija", "kineziterapija", "gydomasis-masazas"],
  treatment: {
    items: [
      {
        title: "Pirmosios 1–3 dienos:",
        text: "raumenį saugome nuo skausmą didinančių judesių, bet ilgai nesiilsime; pakelta ir sutvarstyta koja mažiau tinsta.",
      },
      { title: "Pratimai be skausmo:", text: "nuo lengvų raumens įtempimų iki jėgos pratimų, kai raumuo dirba ilgėdamas." },
      { title: "Bėgimas ir greitis:", text: "palaipsniui didiname greitį, šuolius ir krypties keitimą." },
      { title: "Prieš grįžtant:", text: "jėgos ir judesių testai, palyginti su sveikąja koja." },
    ],
    paragraphs: [
      "Sportininkų tyrimuose po raumens patempimo į pilnas treniruotes dažniausiai grįžtama per 2–6 savaites, po didelio plyšimo per du ar tris mėnesius; trukmė priklauso nuo raumens ir pažeidimo dydžio. Dažniausiai pakanka kelių vizitų, o tarp jų pratimai namuose ar sporto salėje.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Girdėjote spragtelėjimą, raumenyje jaučiama įduba ir atsirado didelė mėlynė",
      "Negalite atsiremti į koją ar paeiti",
      "Blauzda ištinusi, kieta, karšta, o skausmas didėja net ramybėje",
      "Po smūgio raumuo labai ištino, o skausmas vis stiprėja",
      "Koja tirpsta, šąla ar pabąla",
    ],
  },
  team: {
    title: "Su raumenų traumomis dirba",
    specialists: ["erikas-jatkauskas", "kotryna-kairyte", "edmundas-zlatkus"],
  },
  faq: [
    {
      q: "Kuo patempimas skiriasi nuo plyšimo?",
      a: "Patempus raumenį skaidulos pažeidžiamos nedaug arba tik funkciškai, plyšimo metu dalis skaidulų ar visas raumuo suplyšta. Plyšimą dažniau lydi spragtelėjimas, didelė mėlynė ir ryškus silpnumas, bet tiksliai atskirti padeda ištyrimas, kartais echoskopija ar MRT.",
    },
    {
      q: "Ar dėti ledą?",
      a: "Ledas gali trumpam sumažinti skausmą, bet nėra įrodymų, kad jis pagreitintų gijimą. Svarbiau saugoti raumenį nuo skausmą didinančių judesių ir anksti pradėti švelnius pratimus.",
    },
    {
      q: "Ar galima tempti patemptą raumenį?",
      a: "Pirmomis dienomis stipriai tempti nereikia: tai gali padidinti pažeidimą. Švelnų tempimą be skausmo pridedame vėliau, kai raumuo pradeda gyti.",
    },
    {
      q: "Ar padeda masažas?",
      a: "Pirmosiomis dienomis gilus masažas netinka. Vėliau gydomasis masažas gali sumažinti įtampą ir palengvinti judesį, bet pagrindinis gydymas yra pratimai.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "sporto-traumos",
  sources: [MUNICH_2013, EKSTRAND_2011, PEACE_LOVE_2020],
  reviewed: null,
  related: [
    { href: "/ka-gydome/slaunies-dvigalvio-raumens-patempimas", label: "Šlaunies dvigalvio raumens patempimas" },
    { href: "/ka-gydome/pritraukiamuju-raumenu-patempimas", label: "Pritraukiamųjų raumenų patempimas" },
    { href: "/ka-gydome/blauzdos-raumens-plysimas", label: "Blauzdos raumens plyšimas" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
  ],
};
