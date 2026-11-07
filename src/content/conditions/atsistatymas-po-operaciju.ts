import type { ConditionPage } from "./types";
import { ANKLE_FRACTURE_REHAB, ARDERN_2016, MENISCUS_CONSENSUS, VAN_MELICK_2016 } from "./sources";

// Section page «Po operacijų». Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 2»).
// Piotr, 07.11: rehab starts early, about a week after surgery or as the surgeon allows;
// sports cases after surgery mostly Kotryna, older patients Mangirdas.
export const atsistatymasPoOperaciju: ConditionPage = {
  slug: "atsistatymas-po-operaciju",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po operacijų",
  topicsTitle: "Po kokių operacijų ir lūžių padedame",
  meta: {
    title: "Reabilitacija po operacijų Vilniuje: kelis, petys, čiurna, stuburas | ReaMed",
    description:
      "Privati reabilitacija po kelio, peties, čiurnos, klubo ir stuburo operacijų bei lūžių. Pradedame anksti, kai leidžia chirurgas, be siuntimo ir be eilės.",
  },
  conditionName: "Būklė po ortopedinės ar stuburo operacijos",
  hero: {
    h1: "Reabilitacija po operacijų",
    lead: "Po ortopedinės ar stuburo operacijos reabilitaciją verta pradėti anksti: dažniausiai jau pirmosiomis savaitėmis, kai leidžia chirurgas. ReaMed kineziterapeutai veda ją pagal jūsų operaciją ir gijimo etapą: nuo patarimų ir švelnių judesių, kol dar nešiojate gipsą ar įtvarą, iki grįžimo prie darbo ir sporto. Tai privati klinika Vilniaus centre: siuntimo nereikia, eilės nėra.",
    specialist: "kotryna-kairyte",
  },
  about: {
    title: "Kodėl pradėti anksti",
    paragraphs: [
      "Operacija sutvarko pažeistą struktūrą: atkuria raištį, susiuva meniską ar sausgyslę, sutvirtina lūžį, pašalina išvaržą. Judesį, jėgą ir pasitikėjimą koja ar ranka grąžina tai, kas daroma po jos. Gipsas ar įtvaras saugo gyjančius audinius, bet kartu silpnina raumenis ir stingdo sąnarį, todėl reabilitacija prasideda ne tada, kai viskas sugijo, o kai tik leidžia chirurgas.",
      "Kiekvienas etapas turi savo tikslą. Iš pradžių svarbiausia sumažinti tinimą ir skausmą, išsaugoti judesį ir neperkrauti gyjančių audinių. Vėliau atkuriame jėgą ir kontrolę, galiausiai ruošiamės darbui, sportui ar kasdieniam krūviui. Tarptautinės rekomendacijos, pavyzdžiui, po kryžminio raiščio rekonstrukcijos, siūlo pereiti į kitą etapą tik pasiekus aiškius funkcijos tikslus, ne vien pagal kalendorių.",
    ],
  },
  when: {
    items: [
      "Operacija suplanuota: verta pasiruošti iš anksto ir sustiprinti raumenis",
      "Ką tik išėjote iš ligoninės, nešiojate gipsą, įtvarą ar ortezę ir nežinote, ką jau galima daryti",
      "Sąnarys tinsta, stingsta, sunku jį ištiesti ar sulenkti",
      "Trūksta jėgos, šlubuojate, nepasitikite koja ar ranka",
      "Praėjo keli mėnesiai, o judesys vis dar ribotas",
      "Norite grįžti prie darbo ar sporto ir reikia aiškaus plano",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kokia operacija atlikta, kada ir ką nurodė chirurgas (atsineškite išrašą)." },
    { lead: "Tada ištiriame:", text: "tinimą, skausmą, judesių amplitudę, raumenų jėgą ir kontrolę, eiseną ar rankos funkciją." },
    { lead: "Nustatome etapą", text: "ir tikslus, kuriuos reikia pasiekti prieš kitą žingsnį." },
    { lead: "Ir sudarome planą:", text: "ką darome klinikoje, ką namuose ir kada didinsime krūvį." },
  ],
  services: ["pooperacine-reabilitacija", "sporto-reabilitacija", "kineziterapija", "gydomasis-masazas"],
  treatment: {
    items: [
      {
        title: "Pirmos savaitės:",
        text: "patarimai, kaip judėti, gulėti ir miegoti, švelnūs pasyvūs ir aktyvūs judesiai, tinimo mažinimas, raumenų „įjungimas“. Laikomės chirurgo nurodytų apribojimų.",
      },
      { title: "Jėgos ir kontrolės etapas:", text: "pratimai su vis didesniu krūviu, pusiausvyra, eisena, kasdieniai judesiai." },
      { title: "Grįžimas prie darbo ir sporto:", text: "specifiniai pratimai ir testai, kurie parodo, ar galima didinti krūvį." },
    ],
    paragraphs: [
      "Reabilitaciją dažniausiai pradedame maždaug po savaitės po operacijos arba kai leidžia chirurgas. Nelaukiame kelių mėnesių: nuo pirmųjų dienų patariame, ką daryti namuose, ir pradedame švelnius judesius.",
      "Trukmė priklauso nuo operacijos. Po menisko dalies pašalinimo prie kasdienės veiklos dažniausiai grįžtama per kelias savaites, o po kryžminio raiščio rekonstrukcijos reabilitacija paprastai trunka 9–12 mėnesių. Vizitų dažnį ir skaičių pasakome po pirmojo vizito; namų pratimai yra tokia pat svarbi gydymo dalis kaip vizitai.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į operavusį gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Karščiuojate, žaizda parausta, šyla ar iš jos teka",
      "Staiga stipriai patino ir skauda blauzdą",
      "Atsirado dusulys ar skausmas krūtinėje",
      "Po gipsu stiprėja skausmas, pirštai tirpsta, pabąla ar pamėlynuoja",
      "Staiga labai sumažėjo judesys ar jėga, atsirado naujas tirpimas",
    ],
  },
  team: {
    title: "Su atsistatymu po operacijų dirba",
    specialists: ["kotryna-kairyte", "mangirdas-kazacenko", "piotr-dubrovskij", "edmundas-zlatkus"],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Kada pradėti reabilitaciją po operacijos?",
      a: "Kuo anksčiau, tuo geriau: dažniausiai maždaug po savaitės po operacijos arba kai leidžia chirurgas. Pirmasis vizitas gali vykti ir tada, kai dar nešiojate įtvarą.",
    },
    {
      q: "Ar priklauso kompensuojama reabilitacija po operacijos?",
      a: "Kompensuojamą reabilitaciją skiria gydytojas pagal nustatytus kriterijus, dažnai jos tenka laukti. ReaMed yra privati klinika: galite pradėti be siuntimo ir be eilės, kai tik leidžia chirurgas.",
    },
    {
      q: "Kaip miegoti po peties operacijos?",
      a: "Pirmosiomis savaitėmis daugeliui patogiau miegoti pusiau sėdint, su įtvaru ir pagalve po alkūne. Tikslią padėtį ir kiek laiko nešioti įtvarą nurodo chirurgas; per vizitą parodome, kaip saugiai atsigulti ir atsikelti.",
    },
    {
      q: "Ar galima atvykti su gipsu ar įtvaru?",
      a: "Taip. Tuo metu dirbame su sąnariais ir raumenimis, kurių imobilizacija nevaržo, mokome judėti saugiai ir mažinti tinimą.",
    },
    { q: "Kiek vizitų reikės?", a: "Priklauso nuo operacijos ir tikslų. Po pirmojo vizito pasakome planą ir apytikslę trukmę." },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
    { q: "Ką atsinešti?", a: "Operacijos išrašą ir chirurgo nurodymus, tyrimų atsakymus, jei turite, ir patogius drabužius." },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [VAN_MELICK_2016, ANKLE_FRACTURE_REHAB, MENISCUS_CONSENSUS, ARDERN_2016],
  reviewed: null,
  related: [
    { href: "/ka-gydome/kelio-skausmas", label: "Kelio skausmas" },
    { href: "/ka-gydome/ankstyva-reabilitacija-po-operacijos", label: "Ankstyva reabilitacija su gipsu ar įtvaru" },
    { href: "/ka-gydome/reabilitacija-po-kryzminio-raiscio-operacijos", label: "Reabilitacija po kryžminio raiščio operacijos" },
    { href: "/ka-gydome/reabilitacija-po-menisko-operacijos", label: "Reabilitacija po menisko operacijos" },
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Pooperacinė reabilitacija" },
  ],
};
