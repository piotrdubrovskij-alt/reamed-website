import type { ConditionPage } from "./types";
import { GRIMALDI_2015, MELLOR_2018, TENDINOPATHY_NRDP_2021 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 5»).
// Own section Klubas ir kirkšnis (section page since batch 7): topic «Šoninis klubo skausmas (trochanterinis bursitas)»;
// also listed in Sausgyslės as «Sėdmenų sausgyslių tendinopatija». Search: trochanterinis bursitas 210.
export const soninisKlubo: ConditionPage = {
  slug: "soninis-klubo-skausmas",
  section: "klubo-ir-kirksnies-skausmas",
  navTitle: "Šoninis klubo skausmas",
  meta: {
    title: "Šoninis klubo skausmas (trochanterinis bursitas): gydymas",
    description:
      "Skauda klubo šoną gulint ant šono, lipant laiptais ar sukryžiavus kojas? Trochanterinis bursitas ir sėdmenų sausgyslių tendinopatija: kas padeda. Be siuntimo.",
  },
  conditionName: "Didžiojo trochanterio skausmo sindromas (trochanterinis bursitas)",
  hero: {
    h1: "Šoninis klubo skausmas (trochanterinis bursitas)",
    lead: "Skausmas klubo šone, kurį dažnai vadina trochanteriniu bursitu, dažniausiai kyla iš vidurinio ir mažojo sėdmens raumenų sausgyslių, todėl vadinamas sėdmenų tendinopatija. Skauda gulint ant šono, lipant laiptais, ilgai stovint ar sukryžiavus kojas. Dažniau serga vidutinio amžiaus moterys. Tyrime 8 savaičių pratimų ir mokymo programa padėjo daugiau nei kortikosteroidų injekcija.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    paragraphs: [
      "Ties šlaunikaulio didžiuoju gumburu, vadinamuoju trochanteriu, prisitvirtina sėdmenų raumenų sausgyslės, o šalia yra gleivinis maišelis (bursa). Sausgysles labiausiai dirgina ne tik tempimas, bet ir spaudimas: kai klubas nusvyra į šoną, pavyzdžiui, stovint ant vienos kojos, sukryžiavus kojas ar gulint ant šono, sausgyslė prispaudžiama prie kaulo.",
      "Didelis australų tyrimas palygino tris būdus. Po 8 savaičių pagerėjimą nurodė 77 % pratimų ir mokymo programos dalyvių, 58 % gavusių injekciją ir 29 % tik laukusių. Po metų pratimų grupėje pagerėjimas išliko dažniau: 78 %, palyginti su 57 % po injekcijos.",
    ],
  },
  when: {
    items: [
      "Skauda klubo šoną gulint ant to šono, skausmas pažadina naktį",
      "Skauda lipant laiptais, einant į kalną ar ilgai vaikštant",
      "Skauda stovint ant vienos kojos ar sėdint sukryžiavus kojas",
      "Klubo šoną skauda paspaudus",
      "Skausmas trunka mėnesius ir negerėja",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kada skauda, kaip miegate, sėdite ir stovite, kokie judesiai skausmą sukelia.",
    },
    {
      lead: "Tada ištiriame:",
      text: "skausmingą vietą, sėdmenų raumenų jėgą, stovėjimą ant vienos kojos ir skausmo provokacijos testus.",
    },
    {
      lead: "Atskiriame",
      text: "nuo klubo sąnario artrozės ir skausmo, plintančio iš nugaros, kurie gali skaudėti panašioje vietoje.",
    },
    { lead: "Ir sudarome planą:", text: "kokių padėčių vengti, kokie pratimai ir kaip juos sunkinti." },
  ],
  services: ["kineziterapija", "manualine-terapija"],
  treatment: {
    items: [
      {
        title: "Mokymas:",
        text: "kaip stovėti, sėdėti ir gulėti, kad sausgyslė nebūtų spaudžiama: nesukryžiuoti kojų, gulint ant šono pasidėti pagalvę tarp kelių.",
      },
      { title: "Sėdmenų raumenų pratimai:", text: "nuo statinių įtempimų iki jėgos pratimų stovint ir einant." },
      {
        title: "Laipsniškas krūvis:",
        text: "vaikščiojimas, laiptai, ėjimas į kalną ir sportas, kai sausgyslė tai atlaiko.",
      },
      { title: "Papildomai, jei tinka:", text: "manualinė terapija ir gydomasis masažas skausmui mažinti." },
    ],
    paragraphs: [
      "Tyrime programa truko 8 savaites ir apėmė 14 vizitų. Mūsų klinikoje paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites, o tarp jų kasdienių pratimų namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po kritimo skauda klubą ir sunku atsiremti į koją",
      "Klubas karštas, paraudęs, karščiuojate",
      "Skausmas stiprus ramybėje ir naktį, kartu be priežasties krenta svoris",
      "Kartu tirpsta ar silpsta koja",
    ],
  },
  team: {
    title: "Su klubo skausmu dirba",
    specialists: ["mangirdas-kazacenko", "erikas-jatkauskas", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Ar tai bursitas?",
      a: "Bursa gali būti dirginama, bet dažniausiai skausmą sukelia sėdmenų raumenų sausgyslės. Todėl gydymas skirtas sausgyslėms: spaudimo mažinimas ir pratimai.",
    },
    {
      q: "Kaip miegoti, kai skauda klubo šoną?",
      a: "Gulėkite ant sveikojo šono su pagalve tarp kelių arba ant nugaros. Taip skaudama sausgyslė mažiau spaudžiama.",
    },
    {
      q: "Ar padeda injekcija?",
      a: "Tyrime po 8 savaičių injekcija padėjo mažiau nei pratimai, o po metų pagerėjimas po jos išliko rečiau. Ją galima svarstyti kartu su gydytoju, jei skausmas labai stiprus.",
    },
    {
      q: "Ar reikia tempti klubą?",
      a: "Stiprus klubo šono tempimas, kai koja kryžiuojama per kitą, dar labiau spaudžia sausgyslę, todėl jo vengiame.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "tendinopatijos",
  sources: [MELLOR_2018, GRIMALDI_2015, TENDINOPATHY_NRDP_2021],
  reviewed: { by: "erikas-jatkauskas", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/tendinopatijos", label: "Sausgyslių uždegimas ir tendinopatija" },
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Išialgija ir radikulopatija" },
    { href: "/ka-gydome/skausmas-nugaros-apacioje", label: "Skausmas nugaros apačioje" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
  ],
};
