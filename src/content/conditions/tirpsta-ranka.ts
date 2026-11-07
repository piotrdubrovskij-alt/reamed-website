import type { ConditionPage } from "./types";
import { BOGDUK_2009, CERVICAL_RADICULOPATHY_REVIEW, PADUA_2016 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 5»).
// A symptom page in Plintantis skausmas. Search: tirpsta ranka 320. Stroke signs come first in the lead.
export const tirpstaRanka: ConditionPage = {
  slug: "tirpsta-ranka",
  section: "plintantis-skausmas",
  navTitle: "Tirpsta ranka ar pirštai",
  meta: {
    title: "Tirpsta ranka ar pirštai: priežastys ir ką daryti | ReaMed",
    description:
      "Tirpsta ranka naktį, dilgčioja pirštai ar ranka silpsta? Dažniausios priežastys: riešo kanalas, kaklas, alkūnė. Kada skubiai kviesti 112, kaip gydome. Vilniaus centre.",
  },
  conditionName: "Rankos ir pirštų tirpimas",
  hero: {
    h1: "Tirpsta ranka ar pirštai",
    lead: "Rankos ar pirštų tirpimą dažniausiai sukelia suspaustas ar sudirgintas nervas: riešo kanale, ties alkūne arba kaklo stubure, kur nervų šaknelės išeina į ranką. Kuris nervas kaltas, dažnai parodo tai, kurie pirštai tirpsta. Staigus vienos kūno pusės rankos ir veido tirpimas, sunkumas kalbėti yra insulto požymiai: tada nedelsdami kvieskite 112.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    title: "Kodėl tirpsta ranka",
    paragraphs: [
      "Jei tirpsta nykštys, smilius ir didysis pirštas, ypač naktį, dažniausia priežastis yra riešo kanalo sindromas. Jei tirpsta mažasis ir pusė bevardžio piršto, dažniau dirginamas alkūninis nervas ties alkūne, pavyzdžiui, ilgai laikant ranką sulenktą. Jei tirpimą lydi kaklo skausmas, plintantis į petį ir ranką, priežastis gali būti kaklo radikulopatija.",
      "Kitos priežastys gali būti cukrinis diabetas, vitamino B12 trūkumas, skydliaukės ligos ar kai kurie vaistai. Jei tirpsta abi rankos ir kojos, tirpimas plinta ar atsiranda silpnumas, reikia gydytojo ištyrimo.",
    ],
  },
  when: {
    items: [
      "Ranka ar pirštai tirpsta naktį ir pažadina",
      "Tirpsta dirbant kompiuteriu, vairuojant ar laikant telefoną",
      "Tirpimą lydi kaklo ar alkūnės skausmas",
      "Iš rankų krenta daiktai, sunkiau atlikti smulkius judesius",
      "Tirpimas kartojasi kelias savaites",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kurie pirštai tirpsta, kada ir kokiose padėtyse, ar kartu skauda kaklą, alkūnę ar riešą.",
    },
    {
      lead: "Tada ištiriame:",
      text: "jutimą, raumenų jėgą ir refleksus, kaklo judesius, nervų įtempimo ir spaudimo testus.",
    },
    { lead: "Nustatome,", text: "kurioje nervo kelio vietoje greičiausiai kyla tirpimas: kakle, ties alkūne ar riešu." },
    {
      lead: "Ir sudarome planą:",
      text: "gydymas, pratimai, įpročiai; jei reikia, siūlome pasitarti su gydytoju dėl kraujo tyrimų ar ENMG.",
    },
  ],
  services: ["manualine-terapija", "kineziterapija", "osteopatija"],
  treatment: {
    items: [
      {
        title: "Kai priežastis kakle:",
        text: "padėtys ir judesiai, švelni kaklo mobilizacija, nervų slydimo pratimai.",
      },
      { title: "Kai priežastis riešo kanale:", text: "naktinis riešo įtvaras, manualinė terapija, slydimo pratimai." },
      {
        title: "Kai priežastis ties alkūne:",
        text: "ranka nelaikoma ilgai sulenkta, mažinamas spaudimas į alkūnę, švelnūs nervo judesiai.",
      },
      { title: "Įpročiai:", text: "darbo vieta, miego padėtis, pertraukos." },
    ],
    paragraphs: [
      "Ūmiam tirpimui dažnai pakanka kelių vizitų. Jei tirpimas nuolatinis, silpsta ranka ar per kelias savaites negerėja, siūlome ENMG ir gydytojo konsultaciją.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kvieskite 112 arba kreipkitės į skubiosios pagalbos skyrių.",
    items: [
      "Staiga nutirpo vienos pusės ranka, koja ar veidas, sunku kalbėti, nukrypo burnos kampas",
      "Tirpimą lydi skausmas krūtinėje, dusulys ar prakaitavimas",
      "Tirpsta ar silpsta abi rankos ar kojos, sutrinka eisena",
      "Tirpimas atsirado po traumos, ypač kaklo",
      "Ranka šalta, pabalusi ar pamėlynavusi",
    ],
  },
  team: {
    title: "Su rankos tirpimu dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Ar tirpstanti ranka gali būti insultas?",
      a: "Gali, jei tirpimas staigus, vienoje kūno pusėje ir kartu sutrinka kalba, regėjimas ar veido judesiai. Tada nedelsdami kvieskite 112. Lėtai atsirandantis, nuo padėties ar naktį kintantis tirpimas dažniausiai susijęs su nervo suspaudimu.",
    },
    {
      q: "Kodėl ranka tirpsta naktį?",
      a: "Dažniausiai dėl miegant sulenkto riešo ar alkūnės. Padeda tiesus riešas, naktinis įtvaras ir patogesnė padėtis.",
    },
    {
      q: "Kurie pirštai tirpsta ir ką tai reiškia?",
      a: "Nykštys, smilius ir didysis pirštas dažniau rodo riešo kanalą, mažasis pirštas alkūninį nervą, o tirpimas kartu su kaklo skausmu kaklo nervo šaknelę. Tai tik užuomina: tiksliau parodo ištyrimas.",
    },
    {
      q: "Ar reikia ENMG?",
      a: "Ne visada. ENMG naudinga, kai tirpimas nuolatinis, silpsta raumenys ar svarstoma operacija.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  sources: [PADUA_2016, CERVICAL_RADICULOPATHY_REVIEW, BOGDUK_2009],
  reviewed: null,
  related: [
    { href: "/ka-gydome/rieso-kanalo-sindromas", label: "Riešo kanalo sindromas" },
    { href: "/ka-gydome/kaklo-radikulopatija", label: "Kaklo radikulopatija" },
    { href: "/ka-gydome/plintantis-skausmas", label: "Plintantis skausmas ir tirpimas" },
    { href: "/ka-gydome/kaklo-skausmas", label: "Kaklo skausmas" },
  ],
};
