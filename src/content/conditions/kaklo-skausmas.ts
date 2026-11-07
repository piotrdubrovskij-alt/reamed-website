import type { ConditionPage } from "./types";
import { CERVICAL_RADICULOPATHY_REVIEW, NECK_PAIN_CPG } from "./sources";

// Section page «Kaklas». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 3»).
export const kakloSkausmas: ConditionPage = {
  slug: "kaklo-skausmas",
  section: "kaklo-skausmas",
  navTitle: "Kaklas",
  topicsTitle: "Su kuo dirbame",
  meta: {
    title: "Kaklo skausmas: priežastys ir gydymas Vilniuje | ReaMed",
    description:
      "Skauda kaklą ar sprandą, negalite pasukti galvos, skausmas plinta į ranką ar galvą? Kaip gydome ir kada reikia pas gydytoją. Kineziterapija Vilniaus centre, be siuntimo.",
  },
  conditionName: "Kaklo skausmas",
  hero: {
    h1: "Kaklo skausmas",
    lead: "Kaklo skausmas dažniausiai kyla dėl raumenų įtampos, ilgo sėdėjimo vienoje padėtyje, staigaus judesio ar perkrovos ir dažnai per kelias savaites sumažėja. Kartais jis plinta į petį ir ranką ar sukelia galvos skausmą. Kineziterapeutas ištiria kaklą, atmeta pavojingas priežastis ir parenka gydymą: manualinę terapiją, pratimus ir patarimus darbui.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    title: "Kodėl skauda kaklą",
    paragraphs: [
      "Daugeliu atvejų kaklo skausmas yra nespecifinis: jį palaiko raumenų ir sąnarių jautrumas, laikysena, stresas ir miegas, o ne pavojinga liga. Kitos dažnos priežastys: nervo šaknelės dirginimas (tada skausmas ir tirpimas plinta į ranką), kaklo trauma po avarijos, galvos skausmas, kylantis iš kaklo.",
      "Amerikos kineziterapeutų gairės kaklo skausmui rekomenduoja derinti manualinę terapiją su pratimais ir likti aktyviam. Konkretus gydymas parenkamas pagal tai, kas vyrauja: judesio ribotumas, galvos skausmas, plintantis skausmas ar trauma.",
    ],
  },
  when: {
    items: [
      "Skauda kaklą ar sprandą, sunku pasukti galvą",
      "Skausmas plinta į petį, ranką, tirpsta pirštai",
      "Kartu skauda pakaušį ar galvą",
      "Kaklas „užstrigo“ ryte ar po staigaus judesio",
      "Po autoavarijos ar kritimo skauda kaklą",
      "Kaklas vargina dirbant kompiuteriu",
    ],
  },
  assess: [
    { lead: "Pirmiausia išklausome:", text: "kada prasidėjo, kur plinta skausmas, ar skauda galvą, kokia jūsų darbo diena." },
    { lead: "Tada ištiriame:", text: "kaklo ir krūtinės stuburo judesius, raumenų jautrumą ir jėgą, rankų jutimą ir refleksus." },
    { lead: "Atmetame pavojingas priežastis", text: "ir pasakome, ar reikia gydytojo ar tyrimų." },
    { lead: "Ir sudarome planą:", text: "gydymas klinikoje, pratimai namuose, darbo vietos patarimai." },
  ],
  services: ["manualine-terapija", "kineziterapija", "osteopatija", "gydomasis-masazas"],
  treatment: {
    items: [
      { title: "Manualinė terapija:", text: "kaklo ir krūtinės stuburo mobilizacija, minkštųjų audinių technikos." },
      { title: "Pratimai:", text: "gilieji kaklo raumenys, mentės ir pečių juosta, judrumas." },
      { title: "Darbas ir įpročiai:", text: "darbo vieta, pertraukos, miegas." },
      { title: "Papildomai, jei tinka:", text: "gydomasis masažas, kinezioteipavimas, osteopatija." },
    ],
    paragraphs: [
      "Ūmiam kaklo skausmui ar „užstrigusiam“ kaklui dažnai pakanka kelių vizitų. Pasikartojančiam skausmui paprastai reikia ne mažiau kaip 5 vizitų, o kai skausmas plinta į ranką, gydymas trunka ilgiau.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po traumos stipriai skauda kaklą, tirpsta rankos ar kojos",
      "Silpsta rankos, sutrinka eisena ar smulkūs judesiai",
      "Staiga prasidėjo labai stiprus galvos skausmas, kokio dar nebuvo",
      "Kartu karščiuojate, sunku palenkti galvą prie krūtinės",
      "Svaigsta galva, dvejinasi akyse, sunku kalbėti ar ryti",
    ],
  },
  team: {
    title: "Su kaklo skausmu dirba",
    specialists: ["piotr-dubrovskij", "mangirdas-kazacenko", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Kodėl skauda kaklą dešinėje ar kairėje pusėje?",
      a: "Vienpusis kaklo skausmas dažniausiai susijęs su raumenų įtampa ar tarpslankstelinių sąnarių dirginimu toje pusėje. Jei skausmas plinta į ranką ar tirpsta pirštai, gali būti dirginama nervo šaknelė.",
    },
    {
      q: "Ar kaklo skausmas gali sukelti galvos skausmą?",
      a: "Taip. Kaklo įtampa gali sukelti pakaušio ar galvos skausmą; dažnai kartu būna ir įtampos galvos skausmas.",
    },
    {
      q: "Ar reikia MRT ar rentgeno?",
      a: "Dažniausiai ne. Tyrimų reikia po traumos, kai silpsta ranka ar yra kitų pavojaus ženklų.",
    },
    {
      q: "Ar galima „atstatyti“ kaklą?",
      a: "Manualinė terapija nieko „neįstato“: ji mažina skausmą ir gerina judesį, o ilgalaikį poveikį duoda pratimai.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "kaklo-skausmas",
  sources: [NECK_PAIN_CPG, CERVICAL_RADICULOPATHY_REVIEW],
  reviewed: null,
  related: [
    { href: "/ka-gydome/cervikalgija", label: "Cervikalgija" },
    { href: "/ka-gydome/kaklo-radikulopatija", label: "Kaklo radikulopatija" },
    { href: "/ka-gydome/itampos-galvos-skausmas", label: "Įtampos galvos skausmas" },
    { href: "/ka-gydome/nugaros-skausmas", label: "Nugaros skausmas" },
    { href: "/paslaugos/manualine-terapija", label: "Manualinė terapija" },
  ],
};
