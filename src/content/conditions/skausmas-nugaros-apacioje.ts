import type { ConditionPage } from "./types";
import { BACK_PAIN_CPG, BRINJIKJI_2015 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 1»).
export const skausmasNugarosApacioje: ConditionPage = {
  slug: "skausmas-nugaros-apacioje",
  meta: {
    title: "Skauda nugaros apačią: priežastys ir gydymas Vilniuje | ReaMed",
    description:
      "Juosmens skausmas, lumbago ar skausmas nugaros apačioje: dažniausios priežastys, ką daryti pirmomis dienomis, kada kreiptis skubiai. Kineziterapija Vilniaus centre, siuntimo nereikia.",
  },
  conditionName: "Juosmens skausmas (skausmas nugaros apačioje)",
  hero: {
    h1: "Skauda nugaros apačią: ką daryti",
    lead: "Skausmas nugaros apačioje (juosmens skausmas, lumbago) yra viena dažniausių priežasčių, kodėl žmonės kreipiasi pagalbos. Dažniausiai jis nėra pavojingas ir susijęs su perkrova, ilgu sėdėjimu ar staigiu judesiu, o ne su rimtu pažeidimu. Geriausiai padeda išlikti aktyviam, o kineziterapeutas padeda parinkti, kokie judesiai ir pratimai tinka būtent jums.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    paragraphs: [
      "Daugumai žmonių juosmens skausmas yra vadinamasis nespecifinis: jį sukelia raumenų, raiščių, sąnarių ir disko jautrumas, o ne viena aiški pažaida. Skausmą stiprina ilgas sėdėjimas, mažas judėjimas, staigus krūvis, prastas miegas ir stresas. Rečiau priežastis yra disko išvarža su plintančiu skausmu į koją, stuburo kanalo susiaurėjimas ar slankstelio poslinkis (spondilolistezė).",
      "MRT ar rentgeno pakitimai, tokie kaip „dėvėjimasis“ ar disko išsipūtimas, dažni ir žmonėms, kuriems visai neskauda, todėl vien tyrimo aprašymas nepaaiškina skausmo.",
    ],
  },
  when: {
    items: [
      "Skausmas nepraeina per 1–2 savaites ar kartojasi",
      "„Užstrigo nugara“ ir sunku atsitiesti",
      "Skauda ilgiau sėdint darbe ar vairuojant",
      "Skausmas trukdo miegoti, sportuoti ar kelti vaiką",
      "Skausmas plinta į sėdmenį ar koją",
      "Nežinote, kokie pratimai padės, o kokie pakenks",
    ],
  },
  assess: [
    { lead: "Pirmiausia išklausome:", text: "kada prasidėjo, kokiose padėtyse skauda, kaip dirbate, sportuojate, miegate." },
    { lead: "Tada ištiriame:", text: "stuburo ir dubens judesius, raumenų jėgą ir kontrolę, nervų funkciją." },
    { lead: "Paaiškiname,", text: "kas palaiko simptomus ir ko nereikia bijoti." },
    { lead: "Ir sudarome planą:", text: "aktyvų, manualinį ar mišrų, su aiškiais tikslais." },
  ],
  services: ["kineziterapija", "manualine-terapija", "osteopatija", "gydomasis-masazas"],
  treatment: {
    items: [
      { title: "Pirmomis dienomis:", text: "judėti tiek, kiek leidžia skausmas, trumpai keisti padėtį, vaikščioti. Lovos režimas nepadeda." },
      { title: "Pratimai", text: "yra pagrindinis gydymas, ypač kai skausmas trunka ilgiau nei 3 mėnesius: judrumui, liemens ir klubų jėgai, ištvermei." },
      { title: "Manualinė terapija ir masažas", text: "gali trumpai sumažinti skausmą ir palengvinti judėjimą; deriname juos su pratimais." },
      { title: "Darbo ir sporto pritaikymas:", text: "sėdėjimo laikas, pertraukos, kėlimo technika, laipsniškas grįžimas prie treniruočių." },
    ],
    paragraphs: [
      "Ūmus juosmens skausmas daugeliui žmonių aiškiai sumažėja per kelias savaites. Jei skausmas kartojasi ar tęsiasi ilgiau, dirbame nuosekliau, kol sugrįžtate prie įprastos veiklos be baimės judėti.",
    ],
  },
  urgent: {
    items: [
      "Sutriko šlapinimasis ar tuštinimasis, nejaučiate tarpvietės",
      "Greitai silpnėja koja ar pėda",
      "Skausmas po kritimo ar rimtos traumos",
      "Karščiuojate, skauda šlapinantis, krenta svoris",
      "Stiprus skausmas naktį, nemažėjantis jokioje padėtyje",
      "Moterims: skausmą lydi kraujavimas, skausmas pilvo apačioje ar nėštumas",
    ],
  },
  team: {
    title: "Su nugaros apačios skausmu dirba",
    specialists: ["piotr-dubrovskij", "kotryna-kairyte", "mangirdas-kazacenko", "erikas-jatkauskas"],
  },
  faq: [
    {
      q: "Kaip atskirti nugaros skausmą nuo inkstų skausmo?",
      a: "Inkstų skausmas dažniau būna šone, mažai priklauso nuo judesių ir lydimas karščiavimo ar šlapinimosi sutrikimų. Nugaros skausmas dažniausiai keičiasi keičiant padėtį ir judant. Jei abejojate, ypač karščiuojant, pirmiausia kreipkitės į šeimos gydytoją.",
    },
    {
      q: "Kodėl skauda nugaros apačią sėdint?",
      a: "Ilgai sėdint jautrūs audiniai apkraunami vienodai, o raumenys mažai dirba. Dažniau keisti padėtį, atsistoti ir trumpai pajudėti padeda labiau nei „taisyklinga“ sėdėsena.",
    },
    { q: "Ar reikia MRT?", a: "Dažniausiai ne. MRT reikalingas, kai yra skubaus įvertinimo požymių, silpnėja kojos ar svarstoma operacija." },
    {
      q: "Kokie pratimai geriausi?",
      a: "Tie, kuriuos galite daryti reguliariai ir kurie neblogina simptomų. Pirmojo vizito metu parenkame 2–4 pratimus ir parodome, kaip didinti krūvį.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "nugaros-skausmas",
  sources: [BACK_PAIN_CPG, BRINJIKJI_2015],
  reviewed: null,
  related: [
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
    { href: "/ka-gydome/isialgija-radikulopatija", label: "Radikulopatija ir išialgija" },
    { href: "/ka-gydome/osteochondroze", label: "Osteochondrozė" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
  ],
};
