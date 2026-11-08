import type { ConditionPage } from "./types";
import { ESSKA_DEGENERATIVE_MENISCUS, KISE_2016 } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 2»). "Progress check after 4–6 weeks"
// is marked in the doc for Piotr to confirm: it is a suggestion, the sources give no such figure.
export const meniskoPlysimas: ConditionPage = {
  slug: "menisko-plysimas",
  section: "kelio-skausmas",
  navTitle: "Menisko plyšimas",
  meta: {
    title: "Menisko plyšimas: simptomai ir gydymas be operacijos",
    description:
      "Menisko plyšimas po traumos ar dėl dėvėjimosi: kada padeda pratimai, kada reikia operacijos, kiek trunka gijimas. Kineziterapija Vilniaus centre, be siuntimo.",
  },
  conditionName: "Menisko plyšimas",
  hero: {
    h1: "Menisko plyšimas",
    lead: "Menisko plyšimas būna dviejų rūšių: trauminis, dažniausiai jauniems sportuojantiems po sukamojo judesio, ir degeneracinis, kuris vyresniems nei 35 metų žmonėms atsiranda palaipsniui, dažnai be aiškios traumos. Degeneraciniam plyšimui pirmiausia rekomenduojami kryptingi pratimai, o ne operacija. Kineziterapeutas ištiria kelį ir padeda nuspręsti, kuris kelias jums tinka.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    paragraphs: [
      "Meniskai yra du pusmėnulio formos kremzliniai „amortizatoriai“ tarp šlaunikaulio ir blauzdikaulio. Plyšęs meniskas gali sukelti skausmą vidinėje ar išorinėje kelio pusėje, tinimą, skausmą tupiant ar sukantis, kartais kelio „užstrigimą“.",
      "Norvegijos tyrime vidutinio amžiaus žmonės su degeneraciniu menisko plyšimu, 12 savaičių darę prižiūrimus pratimus, po 2 metų jautėsi taip pat gerai kaip operuotieji, o šlaunies raumenų jėga po pratimų buvo didesnė. Europos ortopedų (ESSKA) sutarimas teigia, kad artroskopinė menisko dalies pašalinimo operacija neturi būti pirmasis gydymas, o MRT dažniausiai nėra pirmasis tyrimas.",
      "Trauminiam plyšimui jaunam žmogui, ypač jei kelis užstringa, dažniau svarstoma operacija, kai įmanoma, meniską susiuvant. Po operacijos reabilitaciją vedame pagal tai, kas buvo padaryta.",
    ],
  },
  when: {
    items: [
      "Skauda kelio vidinę ar išorinę pusę, ypač tupiant ar sukantis",
      "MRT parodė menisko plyšimą ir nežinote, ar operuotis",
      "Kelis tinsta po krūvio",
      "Kelis kartais „užkliūva“",
      "Laukiate menisko operacijos arba ką tik po jos",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "ar buvo trauma, kaip ilgai skauda, kas skausmą didina." },
    { lead: "Tada ištiriame:", text: "kelio judesius, tinimą, menisko ir raiščių testus, raumenų jėgą, eiseną." },
    { lead: "Peržiūrime tyrimus", text: "ir paaiškiname, ką jie reiškia." },
    { lead: "Ir sudarome planą:", text: "pratimų programa ir krūvio valdymas; pasakome, kada verta pasitarti su ortopedu." },
  ],
  services: ["kineziterapija", "sporto-reabilitacija", "pooperacine-reabilitacija", "manualine-terapija"],
  treatment: {
    items: [
      { title: "Krūvio valdymas:", text: "kaip trumpam pakeisti bėgimą, tupimą ar darbą." },
      {
        title: "Pratimai:",
        text: "keturgalvio, užpakalinių šlaunies ir klubo raumenų stiprinimas, pusiausvyra, palaipsniui sunkėjantys pratimai.",
      },
      { title: "Judesio atkūrimas:", text: "jei kelis neišsitiesia ar nesulinksta iki galo." },
      { title: "Jei skausmas stiprus:", text: "papildomai manualinė terapija ar kinezioteipavimas." },
    ],
    paragraphs: [
      "Norvegijos tyrime pratimų programa truko 12 savaičių. Bendrą pažangą dažniausiai įvertiname po 4–6 savaičių: jei kelis gerėja, tęsiame; jei ne arba kelis užstringa, siūlome pasitarti su ortopedu. Dažniausiai reikia ne mažiau kaip 5 vizitų ir kasdienių pratimų namuose.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Kelis užstrigo ir negalite jo ištiesti",
      "Po traumos negalite atsiremti į koją",
      "Kelis greitai ir stipriai patino, yra karštas, karščiuojate",
    ],
  },
  team: {
    title: "Su menisko pažeidimais dirba",
    specialists: ["mangirdas-kazacenko", "kotryna-kairyte", "erikas-jatkauskas", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Ar menisko plyšimas užgyja pats?",
      a: "Išorinė menisko dalis turi kraujotaką ir gali sugyti, vidinė beveik ne. Tačiau ir neužgijęs degeneracinis plyšimas dažnai nustoja skaudėti, kai sustiprėja raumenys ir kelis pripranta prie krūvio.",
    },
    {
      q: "Ar galima sportuoti su plyšusiu menisku?",
      a: "Dažnai galima, pakeitus krūvį ir stiprinant raumenis. Jei kelis užstringa ar tinsta, sporto su sukamaisiais judesiais reikėtų vengti, kol pasitarsite su specialistu.",
    },
    {
      q: "Kada reikia operacijos?",
      a: "Kai kelis užstringa, plyšimas trauminis ir tinka susiūti arba kai po kryptingos pratimų programos kelis negerėja. Sprendimą priima ortopedas.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "kelio-skausmas",
  sources: [KISE_2016, ESSKA_DEGENERATIVE_MENISCUS],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/reabilitacija-po-menisko-operacijos", label: "Reabilitacija po menisko operacijos" },
    { href: "/ka-gydome/kelio-skausmas", label: "Kelio skausmas" },
    { href: "/ka-gydome/priekinio-kryzminio-raiscio-plysimas", label: "Priekinio kryžminio raiščio plyšimas" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
  ],
};
