import type { ConditionPage } from "./types";
import { ARDERN_2016, EKSTRAND_2011, LAUERSEN_2014, PEACE_LOVE_2020 } from "./sources";

// Section page «Sporto traumos». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 4»).
// Piotr, 07.11: after sports-injury surgery it is mostly Kotryna.
export const sportoTraumos: ConditionPage = {
  slug: "sporto-traumos",
  section: "sporto-traumos",
  navTitle: "Sporto traumos",
  topicsTitle: "Su kuo dirbame",
  meta: {
    title: "Sporto traumos: reabilitacija ir grįžimas į sportą Vilniuje",
    description:
      "Patempėte raumenį ar susižeidėte per treniruotę? Kaip gydome sporto traumas, kiek trunka atsistatymas ir kada saugu grįžti į sportą. Vilniuje, be siuntimo.",
  },
  conditionName: "Sporto traumos",
  hero: {
    h1: "Sporto traumos",
    lead: "Dažniausios sporto traumos yra raumenų patempimai ir plyšimai, raiščių patempimai, sausgyslių perkrova ir lūžiai. Daugumą jų galima gydyti be operacijos, o tikslas yra ne tik numalšinti skausmą, bet ir saugiai grįžti į buvusį sporto lygį. Kineziterapeutas įvertina traumą, sudaro planą etapais ir padeda nuspręsti, kada kūnas pasiruošęs krūviui. ReaMed yra privati klinika Vilniaus centre: siuntimo nereikia.",
    specialist: "kotryna-kairyte",
  },
  about: {
    title: "Kodėl atsiranda sporto traumos",
    paragraphs: [
      "Sporto traumos būna dviejų rūšių: ūmios, kai audinys pažeidžiamas staiga (sprintas, smūgis, nesėkmingas nusileidimas), ir perkrovos, kai krūvis ilgą laiką viršija tai, ką audinys spėja atlaikyti. Profesionalių futbolininkų tyrime raumenų traumos sudarė beveik trečdalį visų traumų, o 92 % jų teko keturioms kojų raumenų grupėms: šlaunies užpakalinei pusei, pritraukiamiesiems, keturgalviui ir blauzdos raumenims.",
      "Po traumos padeda ne ilgas poilsis, o teisingai dozuotas judėjimas. Pirmomis dienomis traumuotą vietą saugome, vėliau krūvį didiname palaipsniui, nes būtent krūvis padeda audiniams sugyti ir sustiprėti. Grįžimas į sportą vyksta etapais: nuo treniruočių su apribojimais iki pilno krūvio ir buvusio sportinio lygio.",
    ],
  },
  when: {
    items: [
      "Per treniruotę ar varžybas kažkas „trūktelėjo“ ir skauda",
      "Po traumos praėjo kelios dienos, bet bėgti, šokti ar mesti vis dar skauda",
      "Trauma kartojasi toje pačioje vietoje",
      "Skauda tik sportuojant ar po treniruotės",
      "Po operacijos norite grįžti į sportą",
      "Ruošiatės sezonui ir norite sumažinti traumų riziką",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kaip įvyko trauma, kokį sportą kultivuojate, kokie artimiausi tikslai ir varžybos." },
    { lead: "Tada ištiriame:", text: "pažeistą vietą, judesius, jėgą ir stabilumą, palyginame su sveikąja puse." },
    {
      lead: "Įvertiname,",
      text: "ar yra požymių, dėl kurių reikėtų įtarti lūžį, didesnį raumens ar raiščio pažeidimą. Tokiais atvejais prieš didinant krūvį rekomenduojame gydytojo apžiūrą ir, jei reikia, tyrimus.",
    },
    { lead: "Ir sudarome planą:", text: "etapai, krūvis kiekviename etape ir aiškūs kriterijai, kada pereiti prie kito." },
  ],
  services: ["sporto-reabilitacija", "kineziterapija", "pooperacine-reabilitacija", "gydomasis-masazas"],
  treatment: {
    items: [
      { title: "Pirmosios dienos:", text: "traumuotos vietos apsauga, patarimai, ką daryti ir ko vengti, švelnūs judesiai be skausmo." },
      { title: "Krūvio atkūrimas:", text: "jėgos, judrumo ir pusiausvyros pratimai, palaipsniui didinant krūvį." },
      { title: "Sportui būdingi judesiai:", text: "bėgimas, šuoliai, krypties keitimas, smūgiai ar metimai pagal jūsų sportą." },
      { title: "Grįžimas ir prevencija:", text: "testai prieš grįžtant ir pratimai, kurie mažina pakartotinės traumos riziką." },
    ],
    paragraphs: [
      "Lengvesnei traumai dažnai pakanka kelių vizitų ir savarankiškų pratimų tarp jų. Raumens ar raiščio plyšimui ir grįžimui į sportą po operacijos reikia ilgesnio, etapais suplanuoto gydymo. Jėgos, pusiausvyros ir judesių valdymo programos gali sumažinti tam tikrų sporto traumų riziką. Poveikis priklauso nuo sporto šakos, programos ir jos laikymosi, todėl vieno rizikos sumažėjimo procento negalima taikyti kiekvienam žmogui.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po traumos negalite atsiremti į koją ar pajudinti rankos",
      "Sąnarys ar kaulas deformuotas, stipriai ištino iš karto po traumos",
      "Po smūgio į galvą svaigsta, pykina, sutriko atmintis ar regėjimas",
      "Galūnė tirpsta, šąla ar pabąla",
      "Blauzda stipriai ištinusi, kieta, o skausmas didėja net ramybėje",
      "Girdėjote spragtelėjimą, atsirado didelė mėlynė ir nebegalite atlikti judesio",
    ],
  },
  team: {
    title: "Su sporto traumomis dirba",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "edmundas-zlatkus", "piotr-dubrovskij"],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna.",
  },
  faq: [
    {
      q: "Ar sporto reabilitacija tik profesionaliems sportininkams?",
      a: "Ne. Ji tinka visiems, kurie sportuoja ar aktyviai juda: nuo pradedančių bėgikų iki rinktinių žaidėjų.",
    },
    {
      q: "Ar dėti ledą po traumos?",
      a: "Ledas gali trumpam sumažinti skausmą, bet nėra įrodymų, kad jis pagreitintų gijimą. Svarbiau pirmomis dienomis traumuotą vietą saugoti, pakelti, prireikus sutvarstyti, o vėliau palaipsniui judėti.",
    },
    {
      q: "Ar galima vartoti vaistus nuo uždegimo?",
      a: "Dėl vaistų tarkitės su gydytoju ar vaistininku. Sporto medicinos specialistai atkreipia dėmesį, kad priešuždegiminiai vaistai pirmomis dienomis po traumos gali lėtinti audinių gijimą.",
    },
    {
      q: "Kada galima grįžti į sportą?",
      a: "Kai sportui būdingi judesiai nebeskauda, jėga ir judrumas beveik prilygsta sveikajai pusei, o pilnas treniruotes atlaikote be skausmo. Vien tai, kad kasdien nebeskauda, dar nereiškia, kad kūnas pasiruošęs varžyboms.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "sporto-traumos",
  sources: [EKSTRAND_2011, PEACE_LOVE_2020, LAUERSEN_2014, ARDERN_2016],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/grizimas-i-sporta-po-traumos", label: "Grįžimas į sportą po traumos" },
    { href: "/ka-gydome/priekinio-kryzminio-raiscio-plysimas", label: "Priekinio kryžminio raiščio plyšimas" },
    { href: "/ka-gydome/reabilitacija-po-kryzminio-raiscio-operacijos", label: "Po kryžminio raiščio rekonstrukcijos" },
    { href: "/ka-gydome/tendinopatijos", label: "Sausgyslių uždegimas ir tendinopatijos" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
