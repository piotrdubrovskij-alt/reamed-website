import type { ConditionPage } from "./types";
import { ACL_RUPTURE_RECOMMENDATIONS, FROBELL_2010, VAN_MELICK_2016 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 2»).
export const priekinioKryzminioRaiscioPlysimas: ConditionPage = {
  slug: "priekinio-kryzminio-raiscio-plysimas",
  section: "kelio-skausmas",
  navTitle: "Priekinio kryžminio raiščio plyšimas",
  meta: {
    title: "Priekinio kryžminio raiščio plyšimas: gydymas su operacija ir be jos | ReaMed",
    description:
      "Plyšo priekinis kryžminis raištis? Kada reikia operacijos, kada užtenka reabilitacijos, ką daryti iki operacijos. Kineziterapija Vilniaus centre, be siuntimo.",
  },
  conditionName: "Priekinio kryžminio raiščio plyšimas",
  hero: {
    h1: "Priekinio kryžminio raiščio plyšimas",
    lead: "Priekinis kryžminis raištis (PKR) dažniausiai plyšta sportuojant: staiga sustojus, pasisukus ar nusileidus po šuolio. Gydymas būna dvejopas: reabilitacija be operacijos arba rekonstrukcija ir reabilitacija po jos; abiem atvejais pagrindas yra ta pati kryptinga reabilitacija. Kineziterapeutas padeda pasirinkti kelią kartu su ortopedu ir pradėti jau pirmosiomis savaitėmis po traumos.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "PKR jungia šlaunikaulį ir blauzdikaulį ir neleidžia blauzdai slysti į priekį bei suktis. Plyšus raiščiui kelis dažnai greitai patinsta, vėliau gali „išslysti“ sukantis ar keičiant kryptį. Kartu neretai pažeidžiamas meniskas ar kiti raiščiai.",
      "Švedų atsitiktinių imčių tyrime jauni aktyvūs žmonės su ūmiu PKR plyšimu, kurie pradėjo nuo struktūruotos reabilitacijos ir buvo operuoti tik prireikus, po 2 metų jautėsi taip pat gerai kaip operuoti iš karto; daugiau nei pusei jų operacijos neprireikė. Operacija dažniau siūloma, kai kelis lieka nestabilus, kartu pažeistas meniskas arba žmogus nori grįžti į sportą su krypties keitimais. Sprendimą priimate kartu su ortopedu.",
    ],
  },
  when: {
    items: [
      "Ką tik po traumos: kelis patino, sunku jį ištiesti",
      "Gydytojas nustatė PKR plyšimą ir svarstote, operuotis ar ne",
      "Laukiate operacijos: verta pasiruošti",
      "Kelis „išslysta“ sukantis ar keičiant kryptį",
      "Norite grįžti į sportą",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kaip įvyko trauma, ką rodo tyrimai, ką siūlo ortopedas." },
    { lead: "Tada ištiriame:", text: "tinimą, kelio ištiesimą ir lenkimą, stabilumą, keturgalvio raumens aktyvumą, eiseną." },
    { lead: "Paaiškiname", text: "gydymo galimybes ir kas svarbu jūsų sporto šakai ar darbui." },
    { lead: "Ir sudarome planą:", text: "reabilitacija be operacijos arba pasiruošimas operacijai." },
  ],
  services: ["sporto-reabilitacija", "kineziterapija", "pooperacine-reabilitacija"],
  treatment: {
    items: [
      { title: "Pirmos savaitės po traumos:", text: "tinimo mažinimas, pilnas kelio ištiesimas, keturgalvio raumens „įjungimas“, eisena." },
      { title: "Jėga ir kontrolė:", text: "kojos ir klubo raumenų stiprinimas, pusiausvyra, nusileidimo ir pasisukimo technika." },
      {
        title: "Jei pasirenkama operacija:",
        text: "priešoperacinis etapas, kad iki operacijos kelis būtų ramus, pilnai išsitiestų ir raumenys būtų stipresni; po operacijos tęsiame reabilitaciją.",
      },
      { title: "Grįžimas į sportą:", text: "tik praėjus jėgos ir šuolių testus." },
    ],
    paragraphs: [
      "Pirmųjų savaičių tikslai: mažesnis tinimas, pilnas ištiesimas ir įprasta eisena. Reabilitacija be operacijos ar po jos trunka mėnesius; vizitų dažnį pasakome po pirmojo vizito.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po traumos negalite atsiremti į koją, kelis deformuotas",
      "Kelis užstrigo ir negalite jo ištiesti",
      "Pėda po traumos tirpsta, šąla ar pabąla",
      "Staiga stipriai patino ir skauda blauzdą, atsirado dusulys",
    ],
  },
  team: {
    title: "Su kryžminio raiščio traumomis dirba",
    specialists: ["kotryna-kairyte", "edmundas-zlatkus", "piotr-dubrovskij"],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna.",
  },
  faq: [
    {
      q: "Ar būtina operacija?",
      a: "Ne visada. Dalis žmonių, ypač tie, kurių veikla nereikalauja staigių posūkių ir šuolių, gerai gyvena be operacijos. Jei kelis lieka nestabilus, operaciją galima atlikti ir vėliau.",
    },
    {
      q: "Ką daryti iki operacijos?",
      a: "Mažinti tinimą, atkurti pilną ištiesimą ir stiprinti raumenis. Gairės rekomenduoja priešoperacinį reabilitacijos etapą.",
    },
    {
      q: "Ar galima vaikščioti su plyšusiu raiščiu?",
      a: "Dažniausiai taip, kai nuslūgsta tinimas ir skausmas; pirmomis dienomis gali prireikti ramentų. Sporto su krypties keitimais reikėtų vengti, kol kelis ištirtas.",
    },
    {
      q: "Kiek laiko trunka grįžimas į sportą?",
      a: "Po rekonstrukcijos dažniausiai ne mažiau kaip 9 mėnesiai. Be operacijos laikas priklauso nuo kelio stabilumo ir sporto šakos.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "kelio-skausmas",
  sources: [FROBELL_2010, ACL_RUPTURE_RECOMMENDATIONS, VAN_MELICK_2016],
  reviewed: null,
  related: [
    { href: "/ka-gydome/reabilitacija-po-kryzminio-raiscio-operacijos", label: "Reabilitacija po kryžminio raiščio operacijos" },
    { href: "/ka-gydome/menisko-plysimas", label: "Menisko plyšimas" },
    { href: "/ka-gydome/kelio-skausmas", label: "Kelio skausmas" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
  ],
};
