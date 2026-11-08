import type { ServicePage } from "./types";
import { ANKLE_FRACTURE_REHAB, MAZUQUIN_2021, OOSTERHUIS_2014, VAN_MELICK_2016 } from "@/content/conditions/sources";

// Batch 6, draft of 07.11.2026. The service page: how it works, stages, price, who leads it.
// The conditions themselves live in the «Po operacijų» section; this page links there and does not copy it.
export const pooperacineReabilitacija: ServicePage = {
  slug: "pooperacine-reabilitacija",
  navTitle: "Pooperacinė reabilitacija",
  meta: {
    title: "Reabilitacija po operacijos Vilniuje: privati, be siuntimo",
    description:
      "Privati reabilitacija po kelio, peties, čiurnos ir stuburo operacijų Vilniaus centre. Pradedame anksti, pagal chirurgo nurodymus, be siuntimo ir be eilių. Etapai, kaina, specialistai.",
  },
  therapyName: "Pooperacinė reabilitacija",
  hero: {
    h1: "Reabilitacija po operacijos",
    lead: "Po ortopedinės ar stuburo operacijos reabilitaciją verta pradėti anksti: dažniausiai maždaug po savaitės arba kai leidžia chirurgas. Pirmiausia saugiai atkuriame judesį ir mažiname tinimą, vėliau stipriname raumenis ir ruošiame grįžti prie darbo bei sporto. ReaMed yra privati klinika: reabilitacija be siuntimo ir be eilių.",
  },
  about: {
    paragraphs: [
      "Operacija sutvarko pažeistą struktūrą: susiuva raištį, sausgyslę ar meniską, sutvirtina lūžį. Judesys, jėga ir pasitikėjimas koja ar ranka grįžta per reabilitaciją. Kuo anksčiau ir nuosekliau ji pradedama, tuo mažiau sustingimo ir raumenų silpnumo.",
      "Reabilitacija įmanoma ir su gipsu ar įtvaru: dirbame su laisvais sąnariais, mažiname tinimą, mokome saugiai judėti ir vaikščioti su ramentais.",
      "Visada laikomės chirurgo nurodymų: kiek leidžiama apkrauti koją, kokia amplitude galima judinti, kiek laiko nešioti įtvarą. Jei chirurgas davė reabilitacijos protokolą, dirbame pagal jį.",
      "Reabilitacija mūsų klinikoje yra privati ir mokama: siuntimo nereikia, eilių nėra, su ligonių kasomis nedirbame. Jei turite sveikatos draudimą, išrašome sąskaitą faktūrą draudimo bendrovei.",
    ],
  },
  helps: {
    items: [
      "Po kryžminio raiščio rekonstrukcijos",
      "Po menisko operacijos ar kelio artroskopijos",
      "Po peties artroskopijos, rotatorių manžetės siūlės ar stabilizacijos",
      "Po lūžių: riešo, žastikaulio, kelio, čiurnos",
      "Po Achilo sausgyslės plyšimo",
      "Po disko išvaržos operacijos ar stuburo stabilizacijos",
      "Su gipsu ar įtvaru, kol koja ar ranka dar negali būti pilnai apkrauta",
    ],
    note: "Pradėti galima ir praėjus mėnesiams po operacijos, jei judesys ar jėga negrįžo.",
    pages: [
      "atsistatymas-po-operaciju",
      "ankstyva-reabilitacija-po-operacijos",
      "reabilitacija-po-kryzminio-raiscio-operacijos",
      "reabilitacija-po-menisko-operacijos",
    ],
  },
  visit: [
    { lead: "Peržiūrime operacijos išrašą", text: "ir chirurgo nurodymus: kas jau leidžiama, o ko dar negalima." },
    { lead: "Įvertiname:", text: "tinimą, randą, judesių amplitudę, raumenų darbą, ėjimą." },
    { lead: "Sudarome planą", text: "pagal gijimo etapus, su aiškiais kiekvieno etapo tikslais." },
    { lead: "Parodome pratimus namams,", text: "nes didžiąją darbo dalį atliekate tarp vizitų." },
  ],
  visitNote:
    "Atsineškite operacijos aprašymą, išrašą ir chirurgo rekomendacijas. Jei nešiojate įtvarą, ateikite su juo.",
  methods: {
    items: [
      {
        title: "Ankstyvas etapas:",
        text: "tinimo ir skausmo mažinimas, judesiai leistinoje amplitudėje, raumenų aktyvavimas, ėjimas su ramentais.",
      },
      { title: "Vidurinis etapas:", text: "visos amplitudės atkūrimas, jėgos pratimai, pusiausvyra, normalus ėjimas." },
      { title: "Vėlyvas etapas:", text: "bėgimas, šuoliai, krypties keitimas, pasiruošimas darbui ir sportui." },
      { title: "Grįžimas į sportą", text: "pagal jėgos, šuolių ir funkcinius testus, o ne vien pagal laiką." },
      {
        title: "Papildomai, kai tikslinga:",
        text: "manualinė terapija sustingusiems sąnariams, elektrostimuliacija raumenims aktyvuoti, kineziologinis teipavimas.",
      },
    ],
    paragraphs: [
      "Ankstyvi judesiai po peties sausgyslės siūlės pagerina judesių amplitudę ir, tyrimų duomenimis, nedidina pakartotinio plyšimo rizikos, palyginti su vėlesne reabilitacijos pradžia.",
      "Po disko išvaržos operacijos pratimai, pradėti po 4–6 savaičių, skausmą ir negalią sumažina greičiau nei gydymo nebuvimas ir nedidina pakartotinės operacijos rizikos.",
      "Trukmė priklauso nuo operacijos: po menisko dalies pašalinimo prie kasdienės veiklos dažniausiai grįžtama per kelias savaites, o po priekinio kryžminio raiščio rekonstrukcijos reabilitacija iki grįžimo į sportą paprastai trunka 9–12 mėnesių.",
    ],
  },
  price: {
    lines: ["pirmasis-vizitas", "kineziterapija", "kompleksine"],
    note: "Ilgesnei reabilitacijai patogiausias 10 vizitų paketas: jis galioja 84 dienas nuo pirkimo.",
  },
  limits: {
    title: "Kada skubiai kreiptis į chirurgą?",
    items: [
      "Žaizda parausta, šyla, iš jos teka skystis",
      "Karščiuojate",
      "Blauzda tinsta, skauda ir kaista: tai gali būti kraujo krešulys",
      "Atsirado dusulys ar krūtinės skausmas",
      "Skausmas ar tinimas staiga stipriai padidėjo, sąnarys užsiblokavo",
      "Atsirado naujas tirpimas ar silpnumas",
    ],
    note: "Tokiais atvejais nedelsdami susisiekite su chirurgu arba skubiosios pagalbos skyriumi. Dusulys ar krūtinės skausmas po operacijos yra skubi būklė: skambinkite 112.",
  },
  team: {
    title: "Reabilitaciją po operacijų veda",
    specialists: ["kotryna-kairyte", "mangirdas-kazacenko", "piotr-dubrovskij", "erikas-jatkauskas"],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna Kairytė, vyresnio amžiaus pacientų reabilitaciją dažniau veda Mangirdas Kazačenko.",
  },
  faq: [
    {
      q: "Kada po operacijos galima pradėti reabilitaciją?",
      a: "Dažniausiai maždaug po savaitės arba kai leidžia chirurgas. Pirmieji vizitai būna švelnūs: patarimai, tinimo mažinimas, judesiai leistinoje amplitudėje. Laukti mėnesių nereikia.",
    },
    {
      q: "Ar priklauso nemokama reabilitacija po operacijos?",
      a: "Dėl valstybės apmokamos reabilitacijos sprendžia jūsų gydytojas: ji skiriama su siuntimu pagal nustatytas indikacijas. ReaMed yra privati klinika ir su ligonių kasomis nedirba, todėl reabilitacija mokama, bet siuntimo nereikia ir pradėti galite iš karto.",
    },
    {
      q: "Ar galima pradėti su gipsu ar įtvaru?",
      a: "Taip. Dirbame su laisvais sąnariais, mažiname tinimą, mokome vaikščioti ir judėti saugiai. Kai gipsą ar įtvarą nuima, judesį atkurti būna lengviau.",
    },
    {
      q: "Kiek laiko truks reabilitacija?",
      a: "Priklauso nuo operacijos ir jūsų tikslų: nuo kelių savaičių po artroskopijos iki 9–12 mėnesių po kryžminio raiščio rekonstrukcijos. Po pirmojo vizito pasakome planą.",
    },
    {
      q: "Ar dirbate pagal chirurgo protokolą?",
      a: "Taip. Jei chirurgas davė reabilitacijos protokolą, laikomės jo. Jei ne, planą sudarome pagal operacijos tipą ir tarptautines rekomendacijas.",
    },
    {
      q: "Ką atsinešti į pirmąjį vizitą?",
      a: "Operacijos aprašymą, išrašą, chirurgo rekomendacijas ir įtvarą, jei jį nešiojate. Vilkėkite drabužius, kuriuose patogu atidengti operuotą vietą.",
    },
  ],
  reviews: "pooperacine-reabilitacija",
  sources: [VAN_MELICK_2016, MAZUQUIN_2021, OOSTERHUIS_2014, ANKLE_FRACTURE_REHAB],
  reviewed: null,
  related: [
    { href: "/ka-gydome/atsistatymas-po-operaciju", label: "Po operacijų: visos temos" },
    { href: "/ka-gydome/reabilitacija-po-kryzminio-raiscio-operacijos", label: "Po kryžminio raiščio rekonstrukcijos" },
    { href: "/ka-gydome/reabilitacija-po-menisko-operacijos", label: "Po menisko operacijos" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
