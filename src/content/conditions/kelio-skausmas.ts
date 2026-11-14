import type { ConditionPage } from "./types";
import { ACL_RUPTURE_RECOMMENDATIONS, ESSKA_DEGENERATIVE_MENISCUS, OARSI_2019, PFP_CPG } from "./sources";

// Section page «Kelias». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 2»).
// Visits (Piotr, 07.11): acute, a few; longer problems, usually at least 5.
export const kelioSkausmas: ConditionPage = {
  slug: "kelio-skausmas",
  section: "kelio-skausmas",
  navTitle: "Kelias",
  topicsTitle: "Su kuo dirbame",
  meta: {
    title: "Kelio skausmas: priežastys ir gydymas Vilniuje | ReaMed",
    description:
      "Skauda kelį lipant laiptais, tupiant ar po traumos? Raiščių ir menisko pažeidimai, bėgiko kelis, artrozė. Kineziterapija Vilniaus centre, be siuntimo.",
  },
  conditionName: "Kelio skausmas",
  hero: {
    h1: "Kelio skausmas",
    lead: "Kelio skausmą dažniausiai sukelia raiščių ar menisko trauma, girnelės ir sausgyslių perkrova arba sąnario artrozė. Daugeliu atvejų pirmasis gydymas yra kryptingi pratimai ir krūvio valdymas, o ne operacija. Kineziterapeutas ištiria kelį, paaiškina, kas greičiausiai skauda, ir sudaro planą; jei reikia tyrimų ar chirurgo, tai pasakome.",
    specialist: "kotryna-kairyte",
  },
  about: {
    title: "Kodėl skauda kelį",
    paragraphs: [
      "Kelis laiko visą kūno svorį, todėl jį vargina ir staigios traumos, ir ilgai kaupiama perkrova. Po traumos, ypač sukantis ar staiga sustojus, dažniausiai pažeidžiami kryžminiai ir šoniniai raiščiai bei meniskai. Be traumos skausmas dažniau kyla dėl girnelės ir šlaunikaulio sąnario perkrovos, sausgyslių tendinopatijos ar artrozės.",
      "Daug pasako, kur ir kada skauda. Skausmas priekyje aplink girnelę lipant laiptais ar ilgai sėdint būdingas patelofemoraliniam skausmui. Skausmas vidinėje kelio pusėje po sukamojo judesio gali būti menisko ar vidinio šoninio raiščio pažeidimas. Rytinis sustingimas ir skausmas po ilgesnio vaikščiojimo vyresniame amžiuje būdingi artrozei. Tikslią priežastį nustatome ištyrę.",
      "Net esant artrozei, tarptautinės OARSI gairės pagrindiniu gydymu laiko mokymą ir struktūruotus pratimus, prireikus kartu su svorio mažinimu.",
    ],
  },
  when: {
    items: [
      "Kelį skauda lipant laiptais, tupiant ar ilgai sėdint",
      "Po traumos kelis tinsta, „išslysta“ ar užstringa",
      "Kelis neišsitiesia ar nesulinksta iki galo",
      "Skauda bėgant ar po treniruotės",
      "Vargina rytinis sustingimas, skauda po ilgesnio ėjimo",
      "Laukiate kelio operacijos arba ką tik po jos",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kaip prasidėjo skausmas, ar buvo trauma, kas jį didina ir mažina." },
    { lead: "Tada ištiriame:", text: "kelio judesius, tinimą, raiščių ir menisko testus, girnelės judėjimą, klubo ir pėdos įtaką, raumenų jėgą." },
    { lead: "Peržiūrime tyrimus,", text: "jei juos turite, ir pasakome, ar jų reikia." },
    { lead: "Ir sudarome planą:", text: "pratimai ir krūvio keitimas; pasakome, kada reikia kreiptis į gydytoją ar ortopedą." },
  ],
  services: ["kineziterapija", "sporto-reabilitacija", "pooperacine-reabilitacija", "manualine-terapija"],
  treatment: {
    items: [
      { title: "Pratimai:", text: "keturgalvio, užpakalinių šlaunies ir klubo raumenų stiprinimas, pusiausvyra, judesio kontrolė." },
      { title: "Krūvio valdymas:", text: "kaip keisti bėgimą, treniruotes ar darbą, kad kelis atsigautų." },
      { title: "Judesio atkūrimas:", text: "kai kelis po traumos ar operacijos neišsitiesia ar nesulinksta." },
      { title: "Papildomai, jei tinka:", text: "manualinė terapija, kinezioteipavimas, gydomasis masažas skausmui mažinti." },
    ],
    paragraphs: [
      "Ūmiam skausmui po perkrovos dažnai pakanka kelių vizitų ir namų pratimų. Ilgiau trunkančiam skausmui ar artrozei paprastai reikia ne mažiau kaip 5 vizitų per kelias savaites, o pratimus tenka tęsti savarankiškai. Po raiščių traumų ir operacijų reabilitacija trunka mėnesius.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po traumos negalite atsiremti į koją, kelis deformuotas",
      "Kelis greitai ir stipriai patino po traumos",
      "Kelis karštas, paraudęs, karščiuojate",
      "Kelis užstrigo ir negalite jo ištiesti",
      "Staiga stipriai patino ir skauda blauzdą",
    ],
  },
  team: {
    title: "Su kelio skausmu dirba",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "mangirdas-kazacenko", "piotr-dubrovskij"],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Kodėl skauda kelį lipant laiptais žemyn?",
      a: "Dažniausiai taip pasireiškia girnelės ir šlaunikaulio sąnario perkrova: leidžiantis laiptais keturgalvis raumuo dirba stipriausiai. Paprastai padeda tikslingi šlaunies ir klubo raumenų pratimai.",
    },
    {
      q: "Ką reiškia kelio skausmas vidinėje pusėje?",
      a: "Tai gali būti menisko ar vidinio šoninio raiščio pažeidimas, sausgyslių dirginimas ar artrozė. Ką tiksliai, nustatome ištyrę.",
    },
    {
      q: "Ar reikia MRT?",
      a: "Ne visada. Po traumos, kai kelis nestabilus ar užstringa, MRT dažnai reikalinga. Esant ilgalaikiam skausmui be traumos dažniausiai pradedama nuo apžiūros ir pratimų: europinis sutarimas vidutinio amžiaus žmonėms su degeneraciniu menisko pažeidimu MRT pirmuoju tyrimu nelaiko.",
    },
    {
      q: "Ar su skaudančiu keliu galima sportuoti?",
      a: "Dažniausiai taip, pakeitus krūvį. Vidutinis skausmas per pratimus, kuris praeina per parą, paprastai nėra pavojingas. Kokį krūvį rinktis, pasakome per vizitą.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "kelio-skausmas",
  sources: [OARSI_2019, PFP_CPG, ACL_RUPTURE_RECOMMENDATIONS, ESSKA_DEGENERATIVE_MENISCUS],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/menisko-plysimas", label: "Menisko plyšimas" },
    { href: "/ka-gydome/priekinio-kryzminio-raiscio-plysimas", label: "Priekinio kryžminio raiščio plyšimas" },
    { href: "/ka-gydome/patelofemoralinis-skausmas", label: "Patelofemoralinis skausmas" },
    { href: "/ka-gydome/atsistatymas-po-operaciju", label: "Reabilitacija po operacijų" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
  ],
};
