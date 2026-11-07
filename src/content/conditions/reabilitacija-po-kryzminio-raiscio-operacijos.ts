import type { ConditionPage } from "./types";
import { ARDERN_2016, GRINDEM_2016, VAN_MELICK_2016 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 2»). "Running at about 3–4 months" is
// marked in the doc for Piotr to confirm: it is the usual protocol figure, not one the sources state.
export const reabilitacijaPoKryzminioRaiscioOperacijos: ConditionPage = {
  slug: "reabilitacija-po-kryzminio-raiscio-operacijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po kryžminio raiščio rekonstrukcijos",
  meta: {
    title: "Reabilitacija po kryžminio raiščio operacijos: etapai ir trukmė | ReaMed",
    description:
      "Kiek trunka reabilitacija po priekinio kryžminio raiščio rekonstrukcijos, kada galima bėgti ir grįžti į sportą. Etapai pagal tikslus. Privati klinika Vilniuje, be siuntimo.",
  },
  conditionName: "Būklė po priekinio kryžminio raiščio rekonstrukcijos",
  hero: {
    h1: "Reabilitacija po kryžminio raiščio operacijos",
    lead: "Po priekinio kryžminio raiščio (PKR) rekonstrukcijos reabilitacija paprastai trunka 9–12 mėnesių. Ją verta pradėti anksti, dar iki operacijos arba pirmą savaitę po jos, ir vesti etapais: kitas žingsnis žengiamas tik pasiekus aiškius jėgos ir judesio tikslus. Į sportą su krypties keitimais dažniausiai grįžtama ne anksčiau kaip po 9 mėnesių, kai praeinami grįžimo į sportą testai.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Rekonstrukcijos metu chirurgas plyšusį raištį pakeičia transplantatu, dažniausiai iš paties paciento sausgyslės. Transplantatas prigyja ir stiprėja kelis mėnesius, todėl iš pradžių svarbiausia atkurti kelio ištiesimą, sumažinti tinimą ir sugrąžinti keturgalvio raumens jėgą, neperkraunant gyjančio raiščio.",
      "Olandų kineziterapeutų gairės rekomenduoja priešoperacinį etapą ir tris pooperacinius etapus, pereinant iš vieno į kitą pagal jėgos, šuolių ir judesio kokybės testus, o ne pagal kalendorių. Norvegijos ir JAV tyrime tie, kurie grįžo į sportą ne anksčiau kaip po 9 mėnesių ir turėjo simetrišką keturgalvio raumens jėgą, pakartotinių kelio traumų patyrė gerokai rečiau.",
    ],
  },
  when: {
    items: [
      "Laukiate operacijos: gairės rekomenduoja priešoperacinį etapą",
      "Ką tik po operacijos ir norite pradėti teisingai",
      "Kelis neišsitiesia iki galo, tinsta",
      "Šlubuojate, keturgalvis raumuo „neklauso“",
      "Praėjo keli mėnesiai, bet nežinote, ar jau galima bėgti",
      "Ruošiatės grįžti į krepšinį, futbolą, ledo ritulį ar slidinėjimą",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "koks transplantatas, ar buvo operuotas ir meniskas, ką nurodė chirurgas (atsineškite išrašą)." },
    { lead: "Tada ištiriame:", text: "kelio ištiesimą ir lenkimą, tinimą, keturgalvio raumens aktyvumą ir jėgą, eiseną." },
    { lead: "Vėlesniuose etapuose vertiname:", text: "jėgos ir šuolių simetriją tarp kojų, nusileidimo ir pasisukimo kokybę." },
    { lead: "Ir sudarome planą:", text: "tikslai kiekvienam etapui, pratimai klinikoje ir namuose." },
  ],
  services: ["pooperacine-reabilitacija", "sporto-reabilitacija", "kineziterapija"],
  treatment: {
    items: [
      {
        title: "Pirmos savaitės:",
        text: "tinimo mažinimas, pilnas kelio ištiesimas, lenkimas pagal chirurgo nurodymus, keturgalvio raumens „įjungimas“, eisena su ramentais ir be jų.",
      },
      { title: "Jėgos etapas:", text: "kojos ir klubo raumenų stiprinimas, pusiausvyra, laiptai, pritūpimai." },
      { title: "Bėgimas ir šuoliai:", text: "kai pasiekti jėgos ir judesio tikslai, pradedame bėgimą, šuolius ir mokomės nusileisti." },
      {
        title: "Grįžimas į sportą:",
        text: "krypties keitimai, sporto šakos judesiai, testai prieš grįžtant į treniruotes ir rungtynes.",
      },
    ],
    paragraphs: [
      "Reabilitaciją pradedame anksti: maždaug po savaitės po operacijos arba kai leidžia chirurgas. Pirmaisiais mėnesiais vizitai dažniausiai būna dažnesni, vėliau retesni, o namų pratimai kasdieniai. Bėgti dažniausiai pradedama maždaug po 3–4 mėnesių, bet ne pagal datą, o kai kelis pasiruošęs: nėra tinimo, ištiesimas pilnas, jėgos pakanka.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į operavusį gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Karščiuojate, žaizda parausta, šyla ar iš jos teka",
      "Staiga stipriai patino ir skauda blauzdą",
      "Atsirado dusulys ar skausmas krūtinėje",
      "Kelis staiga „užstrigo“ ir negalite jo ištiesti",
      "Po naujos traumos kelis vėl išslydo ir stipriai patino",
    ],
  },
  team: {
    title: "Su reabilitacija po kryžminio raiščio operacijos dirba",
    specialists: ["kotryna-kairyte", "edmundas-zlatkus", "piotr-dubrovskij", "mangirdas-kazacenko"],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Kiek trunka reabilitacija po kryžminio raiščio operacijos?",
      a: "Paprastai 9–12 mėnesių iki grįžimo į sportą su krypties keitimais. Kasdienei veiklai ir darbui pasiruošiama gerokai anksčiau.",
    },
    {
      q: "Kada galima bėgti?",
      a: "Kai kelis pasiruošęs: nėra tinimo, ištiesimas pilnas ir pakanka keturgalvio raumens jėgos. Dažniausiai tai būna maždaug po 3–4 mėnesių.",
    },
    {
      q: "Kada galima grįžti į sportą?",
      a: "Į sportą su šuoliais ir krypties keitimais dažniausiai ne anksčiau kaip po 9 mėnesių ir tik praėjus testus. Tyrimuose ankstesnis grįžimas buvo susijęs su didesne pakartotinės traumos rizika.",
    },
    {
      q: "Ar priklauso kompensuojama reabilitacija?",
      a: "Kompensuojamą reabilitaciją skiria gydytojas pagal nustatytus kriterijus. ReaMed yra privati klinika: galite pradėti be siuntimo ir be eilės, kai tik leidžia chirurgas.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [VAN_MELICK_2016, GRINDEM_2016, ARDERN_2016],
  reviewed: null,
  related: [
    { href: "/ka-gydome/priekinio-kryzminio-raiscio-plysimas", label: "Priekinio kryžminio raiščio plyšimas" },
    { href: "/ka-gydome/kelio-skausmas", label: "Kelio skausmas" },
    { href: "/ka-gydome/atsistatymas-po-operaciju", label: "Reabilitacija po operacijų" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
