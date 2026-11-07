import type { ConditionPage } from "./types";
import { OOSTERHUIS_2014 } from "./sources";

// Draft of 08.11.2026, waiting for Piotr's review (Claude Doc «Пачка 8»).
// Section «Po operacijų», listed again in «Nugara». Search: kodėl skauda po stuburo išvaržos operacijos 90,
// reabilitacija po stuburo operacijos 40; «reabilitacija po disko išvaržos operacijos» no data.
export const reabilitacijaPoDiskoIsvarzosOperacijos: ConditionPage = {
  slug: "reabilitacija-po-disko-isvarzos-operacijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po disko išvaržos operacijos",
  meta: {
    title: "Reabilitacija po disko išvaržos operacijos: etapai ir pratimai | ReaMed",
    description:
      "Kaip atsistatyti po stuburo išvaržos operacijos: kada pradėti pratimus, kodėl dar skauda ar tirpsta koja, kada grįžti į darbą ir sportą. Privati reabilitacija Vilniaus centre be siuntimo ir be eilės.",
  },
  conditionName: "Būklė po juosmens disko išvaržos operacijos",
  hero: {
    h1: "Reabilitacija po disko išvaržos operacijos",
    lead: "Operacija pašalina disko dalį, kuri spaudė nervą, bet nugarai ir nervui atsistatyti reikia laiko. Cochrane apžvalga parodė, kad pratimai, pradėti 4–6 savaitę po operacijos, greičiau sumažina skausmą ir negalią nei gydymo nebuvimas ir nedidina pakartotinės operacijos rizikos. Pirmomis savaitėmis svarbiausia vaikščioti, saugiai judėti ir laikytis chirurgo nurodymų.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Dažniausia juosmens disko išvaržos operacija yra mikrodiskektomija: chirurgas pašalina disko dalį, kuri spaudė nervo šaknelę. Skausmas kojoje po operacijos dažnai sumažėja greitai, bet tirpimas ar silpnumas gali trukti savaites ar mėnesius, nes nervas gyja lėtai. Nugaros raumenims ir judėjimo įpročiams atsistatyti taip pat reikia laiko.",
      "Cochrane apžvalga apėmė 22 tyrimus ir 2503 žmones po disko operacijų. Pratimų programos, pradėtos 4–6 savaitę po operacijos, trumpuoju laikotarpiu greičiau sumažino skausmą ir negalią nei gydymo nebuvimas, o intensyvesnės programos šiek tiek greičiau nei lengvos. Nė viename tyrime pratimai nepadidino pakartotinės operacijos rizikos. Tyrimų kokybė nedidelė, bet kryptis aiški: judėti ir palaipsniui stiprėti verta.",
    ],
  },
  when: {
    items: [
      "Neseniai buvote operuoti ir norite žinoti, kaip saugiai judėti",
      "Praėjo 4–6 savaitės, ir chirurgas leido pradėti pratimus",
      "Vis dar skauda nugarą ar tirpsta koja",
      "Bijote lenktis, kelti ar sportuoti",
      "Norite grįžti prie darbo ir sporto",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kokia buvo operacija, kada ir ką nurodė chirurgas (atsineškite išrašą)." },
    { lead: "Tada ištiriame:", text: "nugaros judesius, kojų jėgą, jutimą ir refleksus, eiseną, kaip keliatės ir sėdite." },
    { lead: "Nustatome etapą", text: "ir tikslus, kuriuos reikia pasiekti prieš didinant krūvį." },
    { lead: "Ir sudarome planą:", text: "pratimai klinikoje ir namuose, grįžimas prie darbo ir sporto." },
  ],
  services: ["pooperacine-reabilitacija", "kineziterapija", "gydomasis-masazas"],
  treatment: {
    items: [
      {
        title: "Pirmos savaitės:",
        text: "vaikščiojimas, saugūs judesiai, kaip keltis iš lovos, sėdėti ir dirbti. Laikomės chirurgo nurodytų apribojimų.",
      },
      {
        title: "Nuo 4–6 savaitės:",
        text: "liemens, sėdmenų ir kojų raumenų stiprinimas, judrumas, laipsniškai didinamas krūvis.",
      },
      { title: "Grįžimas prie darbo ir sporto:", text: "kėlimas, ilgas sėdėjimas, bėgimas ir sporto judesiai pagal etapus." },
    ],
    paragraphs: [
      "Tyrimuose pratimų programos dažniausiai truko 6–12 savaičių. Kiek vizitų reikės, pasakome po pirmojo vizito; namų pratimai yra tokia pat svarbi gydymo dalis kaip vizitai.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į operavusį gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Karščiuojate, žaizda parausta, šyla ar iš jos teka",
      "Vėl atsirado ar stiprėja skausmas kojoje, silpsta koja ar pėda",
      "Sutriko šlapinimasis ar tuštinimasis, nutirpo tarpvietė",
      "Stipriai skauda galvą atsistojus, o atsigulus praeina",
      "Staiga patino ir skauda blauzdą, atsirado dusulys",
    ],
  },
  team: {
    title: "Su atsistatymu po stuburo operacijos dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "kotryna-kairyte", "erikas-jatkauskas"],
    note: "Nugaros ir išialgijos atvejais dažniausiai dirba Piotr, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Kodėl po operacijos vis dar skauda ar tirpsta koja?",
      a: "Nervas gyja lėtai, todėl tirpimas ir dalis skausmo gali trukti savaites ar mėnesius. Jei skausmas ar silpnumas ne mažėja, o stiprėja, kreipkitės į operavusį gydytoją.",
    },
    {
      q: "Kada pradėti reabilitaciją?",
      a: "Pirmą konsultaciją galima atlikti netrukus po operacijos: patariame, kaip saugiai judėti. Pratimų programą dažniausiai pradedame 4–6 savaitę arba kai leidžia chirurgas.",
    },
    {
      q: "Ar pratimai gali sukelti pakartotinę išvaržą?",
      a: "Tyrimuose pratimai, pradėti 4–6 savaitę, pakartotinės operacijos rizikos nedidino. Krūvį didiname palaipsniui ir deriname su chirurgo nurodymais.",
    },
    {
      q: "Ar priklauso kompensuojama reabilitacija po stuburo operacijos?",
      a: "Kompensuojamą reabilitaciją skiria gydytojas pagal nustatytus kriterijus. ReaMed yra privati klinika: galite pradėti be siuntimo ir be eilės, kai tik leidžia chirurgas.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [OOSTERHUIS_2014],
  reviewed: null,
  related: [
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Išialgija ir radikulopatija" },
    { href: "/ka-gydome/atsistatymas-po-operaciju", label: "Reabilitacija po operacijų" },
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Pooperacinė reabilitacija" },
  ],
};
