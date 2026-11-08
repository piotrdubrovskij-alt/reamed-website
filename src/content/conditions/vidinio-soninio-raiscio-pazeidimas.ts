import type { ConditionPage } from "./types";
import { MCL_ACL_META, MCL_MANAGEMENT } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 7»).
// Section «Kelias». Search: kelio skausmas vidinėje pusėje 260, kelio raiščių patempimas 110.
export const vidinioSoninioRaiscioPazeidimas: ConditionPage = {
  slug: "vidinio-soninio-raiscio-pazeidimas",
  section: "kelio-skausmas",
  navTitle: "Vidinio šoninio raiščio pažeidimas",
  meta: {
    title: "Kelio vidinio šoninio raiščio patempimas ir plyšimas",
    description:
      "Po traumos skauda kelio vidinę pusę? Vidinio šoninio raiščio patempimas ar plyšimas: simptomai, kiek gyja, kada reikia operacijos. Vilniaus centre, be siuntimo.",
  },
  conditionName: "Kelio vidinio šoninio raiščio pažeidimas",
  hero: {
    h1: "Kelio vidinio šoninio raiščio pažeidimas",
    lead: "Vidinis šoninis raištis saugo kelią, kad jis nesulinktų į vidų. Dažniausiai jis pažeidžiamas, kai smūgis ar posūkis išlenkia kelią į vidų: futbole, ledo ritulyje, slidinėjant. Skauda kelio vidinę pusę. Dauguma atskirų šio raiščio pažeidimų gyja be operacijos, su laipsniška reabilitacija; operacijos dažniau prireikia, kai kartu pažeisti ir kiti raiščiai.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Pažeidimai skirstomi į tris laipsnius. I laipsnis yra patempimas, kai kelias stabilus. II laipsnis yra dalinis plyšimas, kai kelias šiek tiek laisvesnis. III laipsnis yra visiškas plyšimas. Kartu gali būti pažeistas priekinis kryžminis raištis ar meniskas, todėl svarbu ištirti visą kelį.",
      "Apžvalga nurodo, kad daugumą atskirų vidinio šoninio raiščio pažeidimų galima gydyti be operacijos. Operacija dažniau svarstoma, kai lieka nuolatinis nestabilumas arba pažeisti keli raiščiai.",
      "Kai kartu plyšęs ir priekinis kryžminis raištis, 2024 m. metaanalizė nerado skirtumo tarp operuoto ir neoperuoto vidinio šoninio raiščio rezultatų: pacientų vertinimų, judesių amplitudės ir keturgalvio raumens jėgos.",
    ],
  },
  when: {
    items: [
      "Po smūgio ar posūkio skauda kelio vidinę pusę",
      "Skauda paspaudus kelio vidinį šoną, kelias patinęs",
      "Kelias atrodo nestabilus, ypač sukantis ar keičiant kryptį",
      "Sunku visiškai ištiesti ar sulenkti kelį",
      "Norite saugiai grįžti į sportą po traumos",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kaip įvyko trauma, ar girdėjote trakštelėjimą, ar kelias iškart tino.",
    },
    { lead: "Tada ištiriame:", text: "kelio stabilumą, raiščių ir menisko testus, judesius, tinimą ir eiseną." },
    {
      lead: "Įvertiname laipsnį",
      text: "ir ar kartu nepažeisti kiti raiščiai ar meniskas. Jei įtariame rimtesnį pažeidimą, patariame MRT ar ortopedo konsultaciją.",
    },
    { lead: "Ir sudarome planą:", text: "apsauga, judesiai, jėga ir grįžimas į sportą pagal etapus." },
  ],
  services: ["sporto-reabilitacija", "kineziterapija", "fizioterapija"],
  treatment: {
    items: [
      {
        title: "Pirmos dienos:",
        text: "kelio apsauga, tinimo mažinimas, judesys be skausmo. Esant II ar III laipsniui gydytojas gali skirti įtvarą su vyriais.",
      },
      {
        title: "Judesys ir jėga:",
        text: "kelio ištiesimas ir sulenkimas, keturgalvio ir šlaunies užpakalinių raumenų stiprinimas, pusiausvyra.",
      },
      {
        title: "Grįžimas į sportą:",
        text: "bėgimas, krypties keitimai, šuoliai ir testai prieš grįžtant į treniruotes ir rungtynes.",
      },
    ],
    paragraphs: [
      "Lengvas patempimas dažniausiai sugyja per kelias savaites, dalinis plyšimas ilgiau, o visiškas plyšimas gali trukti kelis mėnesius. Trukmę lemia laipsnis ir ar pažeisti kiti kelio dariniai.",
    ],
  },
  urgent: {
    note: "Šiais atvejais pirmiausia kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Kelias iškart stipriai patino, girdėjote trakštelėjimą",
      "Negalite atsiremti į koją",
      "Kelias deformuotas ar išniro girnelė",
      "Pėda tirpsta, šąla ar keičia spalvą",
      "Kelias užstrigo ir negalite jo ištiesti",
    ],
  },
  team: {
    title: "Su kelio raiščių traumomis dirba",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Ar vidinio šoninio raiščio plyšimą reikia operuoti?",
      a: "Dažniausiai ne: atskiri šio raiščio pažeidimai paprastai gyja be operacijos. Operacija svarstoma, kai lieka nestabilumas ar pažeisti keli raiščiai. Sprendžia ortopedas.",
    },
    {
      q: "Ar reikia įtvaro?",
      a: "Esant lengvam patempimui dažniausiai ne. Esant daliniam ar visiškam plyšimui gydytojas dažnai skiria įtvarą su vyriais: jis leidžia lenkti kelią, bet saugo nuo išlenkimo į vidų.",
    },
    {
      q: "Kada galima grįžti į sportą?",
      a: "Kai kelias stabilus, nebeskauda, o jėgos, šuolių ir krypties keitimo testai beveik tokie pat kaip sveikos kojos. Laikas priklauso nuo pažeidimo laipsnio.",
    },
    {
      q: "Kuo tai skiriasi nuo menisko pažeidimo?",
      a: "Abu skauda kelio vidinėje pusėje. Raištis dažniau skauda paspaudus kelio vidinį šoną ir išlenkiant kelią į vidų, meniskas sukant koją ir giliai pritūpus, kartais kelias užstringa. Juos atskiriame ištyrę.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "kelio-skausmas",
  sources: [MCL_MANAGEMENT, MCL_ACL_META],
  reviewed: { by: "kotryna-kairyte", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/kelio-skausmas", label: "Kelio skausmas" },
    { href: "/ka-gydome/priekinio-kryzminio-raiscio-plysimas", label: "Priekinio kryžminio raiščio plyšimas" },
    { href: "/ka-gydome/menisko-plysimas", label: "Menisko plyšimas" },
    { href: "/ka-gydome/grizimas-i-sporta-po-traumos", label: "Grįžimas į sportą po traumos" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
