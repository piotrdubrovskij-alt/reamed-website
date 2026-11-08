import type { ConditionPage } from "./types";
import { KISE_2016, KNEE_ARTHROSCOPY_GUIDELINE, MENISCUS_CONSENSUS } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 7»).
// Operation: lives in «Po operacijų», listed again in «Kelias». Search: skausmas po kelio sąnario operacijos 260,
// kelio artroskopija 30. Piotr, 07.11: rehab starts early, about a week after surgery or as the surgeon allows.
export const reabilitacijaPoKelioArtroskopijos: ConditionPage = {
  slug: "reabilitacija-po-kelio-artroskopijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po kelio artroskopijos",
  meta: {
    title: "Reabilitacija po kelio artroskopijos Vilniuje | ReaMed",
    description:
      "Kodėl po kelio operacijos skauda ir tinsta, kada galima vaikščioti, vairuoti ir sportuoti. Kineziterapija Vilniaus centre, be siuntimo.",
  },
  conditionName: "Būklė po kelio artroskopijos",
  hero: {
    h1: "Reabilitacija po kelio artroskopijos",
    lead: "Kelio artroskopija yra operacija per kelis nedidelius pjūvius: chirurgas apžiūri sąnarį ir sutvarko pažeidimą, pavyzdžiui, meniską, kremzlę ar raištį. Po jos kelias kurį laiką tinsta ir skauda, trūksta judesio ir šlaunies raumenų jėgos. Reabilitacija padeda tai atgauti: pradedame anksti, pagal chirurgo nurodymus, be siuntimo ir be eilių.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Kas vyksta po operacijos, priklauso nuo to, kas buvo padaryta. Po apžiūros ar menisko dalies pašalinimo dažniausiai galima remtis į koją iš karto. Po menisko siūlės, kremzlės ar raiščių operacijos chirurgas dažnai riboja apkrovą ir kelio sulenkimą.",
      "Po kelio operacijos dažniausiai susilpnėja šlaunies keturgalvis raumuo: jis tarsi neklauso, todėl sunku visiškai ištiesti kelią ir užtikrintai vaikščioti. Todėl pirmi reabilitacijos tikslai yra mažinti tinimą, atgauti kelio ištiesimą ir vėl įjungti šį raumenį.",
      "Degeneracinei kelio ligai, pavyzdžiui, artrozei ar su amžiumi atsiradusiam menisko plyšimui, tarptautinės BMJ rekomendacijos artroskopijos nerekomenduoja beveik niekam. Tyrime su vidutinio amžiaus žmonėmis 12 savaičių pratimų programa po 2 metų davė panašų rezultatą kaip menisko dalies pašalinimas, o šlaunies raumenų jėga, bent pirmus mėnesius, padidėjo labiau. Jei operacija jums dar tik siūloma, verta pasitarti.",
    ],
  },
  when: {
    items: [
      "Ką tik po operacijos ir norite pradėti teisingai",
      "Kelias vis dar tinsta ir skauda praėjus kelioms savaitėms",
      "Negalite visiškai ištiesti ar sulenkti kelio",
      "Šlubuojate, sunku lipti laiptais",
      "Norite grįžti prie bėgimo ar komandinio sporto",
      "Artroskopija tik siūloma ir norite sužinoti, ar galima be jos",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kas buvo padaryta operacijos metu ir ką nurodė chirurgas (atsineškite išrašą)." },
    { lead: "Tada ištiriame:", text: "tinimą, kelio ištiesimą ir sulenkimą, keturgalvio raumens aktyvumą, eiseną." },
    { lead: "Nustatome etapą", text: "ir tikslus, kuriuos reikia pasiekti prieš kitą žingsnį." },
    {
      lead: "Ir sudarome planą:",
      text: "pratimai klinikoje ir namuose, krūvio didinimas, grįžimas prie darbo ir sporto.",
    },
  ],
  services: ["pooperacine-reabilitacija", "sporto-reabilitacija", "kineziterapija", "fizioterapija"],
  treatment: {
    items: [
      {
        title: "Pirmos savaitės:",
        text: "tinimo mažinimas, kelio ištiesimas, keturgalvio raumens aktyvavimas, jei reikia, su elektrostimuliacija, eisena su ramentais ar be jų.",
      },
      { title: "Jėgos etapas:", text: "kojos ir klubo raumenų stiprinimas, pusiausvyra, laiptai, pritūpimai." },
      { title: "Grįžimas prie sporto:", text: "bėgimas, šuoliai, krypties keitimai ir testai prieš treniruotes." },
    ],
    paragraphs: [
      "Po paprastos artroskopijos ar menisko dalies pašalinimo prie kasdienės veiklos dažniausiai grįžtama per kelias savaites. Po menisko siūlės, kremzlės ar raiščių operacijų atsistatymas trunka mėnesius; tikslų laiką nustato chirurgas ir pasiekti funkcijos tikslai.",
      "Reabilitaciją pradedame anksti: maždaug po savaitės po operacijos arba kai leidžia chirurgas. Nuo pirmų dienų patariame, ką daryti namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į operavusį gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Karščiuojate, žaizda parausta, šyla ar iš jos teka",
      "Kelias staiga stipriai patino, paraudo ir kaista",
      "Staiga stipriai patino ir skauda blauzdą",
      "Atsirado dusulys ar skausmas krūtinėje",
      "Kelias staiga užstrigo ir negalite jo ištiesti",
    ],
  },
  team: {
    title: "Su atsistatymu po kelio operacijos dirba",
    specialists: ["kotryna-kairyte", "mangirdas-kazacenko", "piotr-dubrovskij", "erikas-jatkauskas"],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Kodėl po kelio operacijos vis dar skauda ir tinsta?",
      a: "Pirmas savaites tai dažna: sąnarys reaguoja į operaciją. Tinimas mažėja palaipsniui, jei krūvis didinamas tinkamai. Jei kelias po kiekvieno krūvio vis labiau tinsta, krūvį reikia sumažinti. Jei kartu karščiuojate ar kelias paraudęs, skubiai kreipkitės į chirurgą.",
    },
    {
      q: "Kada galima vaikščioti be ramentų?",
      a: "Kai galite vaikščioti nešlubuodami ir be stipraus skausmo, jei chirurgas neribojo apkrovos. Po menisko siūlės ar kremzlės operacijos ramentų dažnai reikia ilgiau.",
    },
    {
      q: "Kada galima vairuoti?",
      a: "Kai galite saugiai ir greitai stabdyti operuota koja, o vaistai nemažina dėmesio. Sprendimą derinkite su chirurgu.",
    },
    {
      q: "Ar artroskopija padeda nuo kelio artrozės?",
      a: "Ne. Tarptautinės rekomendacijos degeneracinei kelio ligai artroskopijos nerekomenduoja: pratimai ir kineziterapija padeda panašiai, be operacijos rizikos.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [KNEE_ARTHROSCOPY_GUIDELINE, KISE_2016, MENISCUS_CONSENSUS],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/kelio-skausmas", label: "Kelio skausmas" },
    { href: "/ka-gydome/reabilitacija-po-menisko-operacijos", label: "Reabilitacija po menisko operacijos" },
    { href: "/ka-gydome/menisko-plysimas", label: "Menisko plyšimas" },
    { href: "/ka-gydome/atsistatymas-po-operaciju", label: "Reabilitacija po operacijų" },
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Pooperacinė reabilitacija" },
  ],
};
