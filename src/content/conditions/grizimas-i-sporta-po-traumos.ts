import type { ConditionPage } from "./types";
import { ARDERN_2016, GRINDEM_2016, LAUERSEN_2014, SERNER_2020 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 4»).
// The 9 months after ACL reconstruction match the batch 2 pages.
export const grizimasISportaPoTraumos: ConditionPage = {
  slug: "grizimas-i-sporta-po-traumos",
  section: "sporto-traumos",
  navTitle: "Grįžimas į sportą po traumos",
  meta: {
    title: "Grįžimas į sportą po traumos ar operacijos: kada saugu",
    description:
      "Kada saugu grįžti į sportą po traumos ar operacijos? Etapai, testai ir kriterijai, kurie mažina pakartotinės traumos riziką. Sporto reabilitacija Vilniuje.",
  },
  conditionName: "Grįžimas į sportą po traumos",
  hero: {
    h1: "Grįžimas į sportą po traumos",
    lead: "Grįžimas į sportą yra ne viena diena, o keli etapai: pirmiausia treniruojatės su apribojimais, tada grįžtate į savo sportą ir galiausiai pasiekiate buvusį lygį. Sprendimą, kada pereiti prie kito etapo, priimame pagal testus, o ne vien pagal laiką ar tai, kad nebeskauda. Taip mažėja rizika susižeisti dar kartą.",
    specialist: "kotryna-kairyte",
  },
  about: {
    paragraphs: [
      "Tarptautinis sporto kineziterapeutų sutarimas grįžimą į sportą aprašo kaip tęstinį procesą, kuris vyksta kartu su reabilitacija. Sprendimas priimamas kartu: sportininkas, kineziterapeutas, gydytojas ir treneris įvertina, kokia pakartotinės traumos rizika ir ką ji reikštų.",
      "Svarbūs ir laikas, ir kriterijai. Po priekinio kryžminio raiščio rekonstrukcijos kiekvienas mėnuo, kuriuo grįžimas į sportą buvo atidėtas iki 9 mėnesio po operacijos, pakartotinės kelio traumos riziką sumažino maždaug perpus, o simetriškesnė šlaunies keturgalvio raumens jėga ją dar mažino. Po pritraukiamųjų raumenų traumos sportininkai, kurie prieš grįždami pasiekė būklę be skausmo, susižeidė rečiau.",
    ],
  },
  when: {
    items: [
      "Skausmas praėjo, bet nežinote, ar jau galima sportuoti visu krūviu",
      "Po operacijos chirurgas leido sportuoti ir norite tai daryti saugiai",
      "Grįžote į sportą, bet trauma pasikartojo",
      "Bijote vėl susižeisti ir nepasitikite koja ar ranka",
      "Ruošiatės varžyboms po ilgesnės pertraukos",
    ],
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname:",
      text: "kokia buvo trauma ar operacija, kiek laiko praėjo, koks jūsų sportas ir tikslas.",
    },
    { lead: "Tada ištiriame:", text: "jėgą, judrumą, pusiausvyrą ir šuolius, palyginame su sveikąja puse." },
    {
      lead: "Įvertiname",
      text: "sportui būdingus judesius: bėgimą, krypties keitimą, nusileidimą po šuolio, metimus ar smūgius.",
    },
    { lead: "Ir sudarome planą:", text: "kas jau galima, ko dar ne, kokie kriterijai leis pereiti prie kito etapo." },
  ],
  services: ["sporto-reabilitacija", "pooperacine-reabilitacija", "kineziterapija"],
  treatment: {
    items: [
      { title: "Treniruotės su apribojimais:", text: "dalyvaujate dalyje treniruotės, kol atkuriama jėga ir judesiai." },
      { title: "Grįžimas į savo sportą:", text: "pilnos treniruotės ir sportui būdingi judesiai be apribojimų." },
      { title: "Buvęs lygis:", text: "greitis, jėga ir ištvermė kaip prieš traumą, varžybų krūvis." },
      { title: "Prevencija:", text: "jėgos pratimai, kurie lieka treniruočių plane ir grįžus į sportą." },
    ],
    paragraphs: [
      "Kiek tai trunka, priklauso nuo traumos: po raumens patempimo dažnai kelios savaitės, po kryžminio raiščio rekonstrukcijos ne mažiau kaip 9 mėnesiai. Vizitų skaičius priklauso nuo etapo, o tarp vizitų dirbate savarankiškai pagal programą.",
    ],
  },
  urgent: {
    note: "Šiais atvejais sustabdykite treniruotes ir kreipkitės į gydytoją.",
    items: [
      "Grįžus į sportą sąnarys ištino ar pradėjo „išslysti“",
      "Po operacijos žaizda parausta, šyla ar karščiuojate",
      "Atsirado naujas stiprus skausmas, kuris nepraeina ramybėje",
      "Po smūgio į galvą svaigsta, pykina ar sutriko atmintis",
    ],
  },
  team: {
    title: "Grįžti į sportą padeda",
    specialists: ["kotryna-kairyte", "erikas-jatkauskas", "edmundas-zlatkus"],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna.",
  },
  faq: [
    {
      q: "Kada galima grįžti į sportą po traumos?",
      a: "Kai sportui būdingi judesiai nebeskauda, jėga ir šuolių testai beveik prilygsta sveikajai pusei, o pilnas treniruotes atlaikote be skausmo ir tinimo. Tikslų laiką lemia trauma: po operacijų jis ilgesnis.",
    },
    {
      q: "Ar užtenka, kad nebeskauda?",
      a: "Ne. Skausmas praeina anksčiau, nei atsistato jėga ir judesių kontrolė, todėl grįžimą tikriname testais.",
    },
    {
      q: "Kokie testai daromi?",
      a: "Dažniausiai jėgos palyginimas su sveikąja puse, šuoliai ant vienos kojos, bėgimas ir krypties keitimas, pusiausvyra. Testus parenkame pagal traumą ir sportą.",
    },
    {
      q: "Kaip sumažinti pakartotinės traumos riziką?",
      a: "Svarbiausia yra jėgos pratimai. Jėgos, pusiausvyros ir judesių valdymo programos gali sumažinti tam tikrų sporto traumų riziką, o vien tempimas traumų nesumažina. Poveikis priklauso nuo sporto šakos, programos ir jos laikymosi, todėl vieno rizikos sumažėjimo procento negalima taikyti kiekvienam žmogui.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "sporto-traumos",
  sources: [ARDERN_2016, GRINDEM_2016, SERNER_2020, LAUERSEN_2014],
  reviewed: { by: "kotryna-kairyte", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/reabilitacija-po-kryzminio-raiscio-operacijos", label: "Po kryžminio raiščio rekonstrukcijos" },
    { href: "/ka-gydome/sporto-traumos", label: "Sporto traumos" },
    { href: "/ka-gydome/slaunies-dvigalvio-raumens-patempimas", label: "Šlaunies dvigalvio raumens patempimas" },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
  ],
};
