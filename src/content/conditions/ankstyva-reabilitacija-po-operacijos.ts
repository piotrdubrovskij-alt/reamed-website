import type { ConditionPage } from "./types";
import { ANKLE_FRACTURE_REHAB } from "./sources";

// Draft of 07.11.2026, waiting for Piotr's review (Claude Doc «Пачка 2»).
// Piotr, 07.11: almost every orthopaedic operation brings a cast or a brace; gentle, passive work belongs here.
export const ankstyvaReabilitacijaPoOperacijos: ConditionPage = {
  slug: "ankstyva-reabilitacija-po-operacijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Ankstyva reabilitacija su gipsu ar įtvaru",
  meta: {
    title: "Gipsas ar įtvaras po operacijos: ankstyva reabilitacija",
    description:
      "Po operacijos ar lūžio nešiojate gipsą, įtvarą ar ortezę? Ką jau galima daryti, kaip išsaugoti judesį ir jėgą, kada pradėti kineziterapiją. Be siuntimo.",
  },
  conditionName: "Imobilizacija po operacijos ar lūžio",
  hero: {
    h1: "Ankstyva reabilitacija su gipsu ar įtvaru",
    lead: "Po daugelio ortopedinių operacijų ir lūžių kurį laiką tenka nešioti gipsą, įtvarą ar ortezę. Tai saugo gyjančius audinius, bet kartu silpnina raumenis ir stingdo sąnarius, todėl reabilitaciją verta pradėti jau tuo metu, kai leidžia chirurgas. Kineziterapeutas parodo, ką galima daryti saugiai: švelnūs judesiai, tinimo mažinimas, raumenų darbas ir judėjimas su ramentais.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    paragraphs: [
      "Imobilizacija reiškia, kad sąnarys ar galūnė kurį laiką laikoma nejudinama arba judesys ribojamas gipsu, įtvaru ar ortoze. Ji reikalinga, kad lūžis ar susiūti audiniai sugytų. Tačiau be judesio raumenys greitai silpsta, sąnario kapsulė ir aplinkiniai audiniai stingsta, sutrinka pusiausvyra.",
      "Švelni, dažnai pasyvi kineziterapija šiuo laikotarpiu nepakeičia imobilizacijos, o ją papildo: dirbame su tuo, kas leidžiama, ir saugome tai, ko dar negalima apkrauti. Cochrane apžvalga apie čiurnos lūžius rodo, kad ankstyvesnis apkrovimas ir nuimamas įtvaras po operacijos gali šiek tiek pagerinti čiurnos funkciją ir nedidina pakartotinės operacijos rizikos. Kada ir kiek apkrauti, visada sprendžia chirurgas.",
    ],
  },
  when: {
    items: [
      "Nešiojate gipsą, įtvarą ar ortezę po operacijos ar lūžio",
      "Nežinote, ką jau galima judinti, o ko dar ne",
      "Galūnė tinsta, pirštai stingsta",
      "Sunku vaikščioti su ramentais, lipti laiptais, atsikelti iš lovos",
      "Gipsą ką tik nuėmė, o sąnarys sustingęs ir silpnas",
    ],
  },
  assess: [
    { lead: "Pirmiausia išsiaiškiname:", text: "kokia buvo operacija ar lūžis, kiek laiko nešioti imobilizaciją ir kokius apribojimus nurodė chirurgas." },
    { lead: "Tada ištiriame:", text: "tinimą, pirštų spalvą ir jutimą, laisvų sąnarių judesius, raumenų aktyvumą, kaip judate su ramentais." },
    { lead: "Paaiškiname,", text: "kas šiuo metu leidžiama, o ko reikia saugotis." },
    { lead: "Ir sudarome planą:", text: "kasdieniai pratimai namuose ir vizitai, kol nuimsite imobilizaciją ir pereisite prie aktyvaus etapo." },
  ],
  services: ["pooperacine-reabilitacija", "kineziterapija", "gydomasis-masazas"],
  treatment: {
    items: [
      {
        title: "Švelnūs judesiai:",
        text: "sąnariams, kurių imobilizacija neriboja, ir, kai leidžia chirurgas, operuotam sąnariui. Iš pradžių dažnai pasyvūs: juos atlieka kineziterapeutas.",
      },
      { title: "Tinimo mažinimas:", text: "padėtis, judesiai, švelnus masažas aplink operacijos vietą, kur tai leidžia žaizda." },
      { title: "Raumenų darbas be judesio:", text: "izometriniai pratimai, kad raumenys „neišsijungtų“." },
      { title: "Judėjimas su ramentais:", text: "eisena, laiptai, atsistojimas, persikėlimas." },
      { title: "Nuėmus imobilizaciją:", text: "judesio amplitudės atkūrimas ir pirmieji jėgos pratimai." },
    ],
    paragraphs: [
      "Šis etapas dažniausiai trunka iki 6 savaičių, priklausomai nuo operacijos ar lūžio ir chirurgo nurodymų. Vizitai gali būti retesni, o pratimai namuose kasdieniai.",
    ],
  },
  urgent: {
    note: "Šiais atvejais nedelsdami kreipkitės į operavusį gydytoją ar skubiosios pagalbos skyrių.",
    items: [
      "Po gipsu stiprėja skausmas, kurio nemažina vaistai",
      "Pirštai tirpsta, pabąla, pamėlynuoja ar tampa šalti",
      "Gipsas ar įtvaras staiga tampa per ankštas",
      "Karščiuojate, žaizda parausta, šyla ar iš jos teka",
      "Staiga stipriai patino ir skauda blauzdą, atsirado dusulys ar skausmas krūtinėje",
    ],
  },
  team: {
    title: "Su ankstyva reabilitacija dirba",
    specialists: ["mangirdas-kazacenko", "kotryna-kairyte", "piotr-dubrovskij"],
  },
  faq: [
    {
      q: "Ar galima daryti pratimus, kol nešioju gipsą?",
      a: "Dažniausiai taip: judinami gretimi sąnariai, daromi raumenų įtempimo pratimai. Ką tiksliai galima, priklauso nuo operacijos ir chirurgo nurodymų.",
    },
    {
      q: "Kodėl nuėmus gipsą sąnarys sustingęs ir silpnas?",
      a: "Tai įprasta po imobilizacijos: raumenys nusilpo, audiniai sustingo. Judesys ir jėga grįžta palaipsniui, kai juos atkuriame kryptingai.",
    },
    {
      q: "Ar masažas padeda nuo tinimo?",
      a: "Švelnus masažas ir judesiai gali padėti sumažinti tinimą ir diskomfortą, bet tik ten, kur leidžia žaizda ir chirurgas.",
    },
    { q: "Ar reikia siuntimo?", a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai." },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [ANKLE_FRACTURE_REHAB],
  reviewed: { by: "kotryna-kairyte", date: "2026-11-08" },
  related: [
    { href: "/ka-gydome/atsistatymas-po-operaciju", label: "Reabilitacija po operacijų" },
    { href: "/ka-gydome/reabilitacija-po-kryzminio-raiscio-operacijos", label: "Reabilitacija po kryžminio raiščio operacijos" },
    { href: "/ka-gydome/reabilitacija-po-menisko-operacijos", label: "Reabilitacija po menisko operacijos" },
    { href: "/paslaugos/pooperacine-reabilitacija", label: "Pooperacinė reabilitacija" },
  ],
};
