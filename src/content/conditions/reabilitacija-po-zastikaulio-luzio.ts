import type { ConditionPage } from "./types";

// Batch 9 (08.11.2026): Piotr's text for «Po operacijų», laid out on template G with its wording kept.
// Section «Po operacijų», listed again in «Petys». Sources as in his text: hospital pages by link, studies by DOI.
export const reabilitacijaPoZastikaulioLuzio: ConditionPage = {
  slug: "reabilitacija-po-zastikaulio-luzio",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po žastikaulio lūžio",
  meta: {
    title: "Reabilitacija po žastikaulio lūžio Vilniuje | ReaMed",
    description:
      "Žastikaulio lūžis ties petimi, kaulo viduryje ar prie alkūnės: reabilitacijos etapai, judesio atkūrimas ir saugus krūvis. Privati reabilitacija Vilniuje be siuntimo.",
  },
  conditionName: "Būklė po žastikaulio lūžio",
  hero: {
    h1: "Reabilitacija po žastikaulio lūžio",
    lead: "Po žastikaulio lūžio gali būti sunku pakelti ranką, sulenkti alkūnę ar savarankiškai apsirengti. Atsistatymo eiga priklauso nuo lūžio vietos ir gydymo: lūžis ties petimi, kaulo viduryje ar prie alkūnės nėra ta pati trauma. ReaMed Vilniuje reabilitaciją deriname prie traumatologo nurodymų ir gijimo, nesvarbu, ar buvo atlikta operacija, ar taikytas gydymas įtvaru.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    title: "Kuo skiriasi žastikaulio lūžiai?",
    paragraphs: [
      "Žastikaulis jungia petį su alkūne. Proksimalinis lūžis yra viršutinėje jo dalyje, ties petimi. Priklausomai nuo fragmentų padėties, jis gali būti gydomas be operacijos, sutvirtinamas metalo konstrukcijomis arba, tam tikrais atvejais, gydomas keičiant peties sąnarį.",
      "Žastikaulio kūno lūžis yra kaulo viduryje. Šalia eina stipininis nervas, todėl svarbu stebėti ne tik skausmą, bet ir plaštakos jutimą bei gebėjimą tiesti riešą ir pirštus. Gydant specialiu funkciniu įtvaru, jo padėtis ir naudojimo taisyklės turi didelę reikšmę.",
      "Distalinis lūžis yra prie alkūnės ir gali apimti sąnarinį paviršių. Po jo dažnai svarbiausia problema būna alkūnės sustingimas. Pratimų pradžia ir leidžiama apkrova priklauso nuo lūžio sudėtingumo bei sutvirtinimo stabilumo.",
      "Todėl kito žmogaus „rankos lūžio pratimai“ gali jums netikti, net jei nuo traumos praėjo tiek pat laiko.",
    ],
  },
  when: {
    items: [
      "Lūžis nesenas ir norite suprasti, ką leidžiama daryti su įtvaru.",
      "Nuėmus imobilizaciją, sunku pasiekti burną, susišukuoti ar apsirengti.",
      "Alkūnė neišsitiesia, ranka silpna, bijote ja naudotis.",
      "Skausmas ir judesio ribotumas trukdo miegoti ar dirbti.",
      "Norite palaipsniui grįžti prie fizinio darbo, sporto ar pomėgių.",
    ],
    note: "Reabilitacijos konsultacija gali būti naudinga ir dar neleidus judinti lūžio srities: tuomet aptariame apsaugą, leistiną kasdienę veiklą ir artimiausius tikslus.",
  },
  assess: [
    {
      lead: "Atsineškite išrašą,",
      text: "naujausių tyrimų aprašymus ir traumatologo nurodymus. Išsiaiškiname, kur lūžo kaulas, kaip jis gydytas, ar pažeistos kitos struktūros ir kada numatyta kontrolė. Vien pagal savijautą spręsti, kad kaulas jau suaugęs, negalima.",
    },
    {
      lead: "Vertiname",
      text: "skausmą, tinimą, odos būklę prie įtvaro, rankos jutimą ir leidžiamus judesius. Jėgos testus atliekame tik tada, kai apkrova saugi. Po žastikaulio kūno lūžio ypač atkreipiame dėmesį į riešo ir pirštų tiesimą.",
    },
    {
      lead: "Aptariame, ko šiuo metu labiausiai trūksta:",
      text: "savarankiškai pavalgyti, pasiekti galvą ar grįžti prie darbo įrankių. Šios užduotys padeda planuoti reabilitaciją ir matyti jos pažangą.",
    },
  ],
  services: ["pooperacine-reabilitacija", "kineziterapija"],
  treatment: {
    items: [
      {
        title: "Apsauga ir kasdienė veikla.",
        text: "Mokomės laikytis įtvaro režimo, saugiai rengtis ir patogiai įsitaisyti. Judiname tik tas sritis ir tokia apimtimi, kokią leidžia gydanti komanda. Po skirtingų lūžių net rankos atramos padėtis gali skirtis.",
      },
      {
        title: "Judesio atkūrimas.",
        text: "Gavus leidimą, palaipsniui atkuriame peties, alkūnės ir dilbio judesius. Parenkame tokį krūvį, po kurio simptomai neblogėja. Sustingusios alkūnės nelaužiame per jėgą; judesio pažanga vertinama nuosekliai.",
      },
      {
        title: "Raumenų stiprinimas.",
        text: "Pasipriešinimą ir svorių kėlimą pradedame tik pagal traumatologo leidžiamą apkrovą. Operacijos metu įdėta plokštelė ar vinis savaime nereiškia, kad ranką jau galima apkrauti neribotai.",
      },
      {
        title: "Grįžimas prie darbo ir sporto.",
        text: "Pratimai tampa panašesni į konkrečias užduotis: siekimą, nešimą, stūmimą ar darbą virš galvos. Prieš didesnį krūvį svarbu, kad gijimą būtų įvertinęs gydytojas, judesių pakaktų užduočiai, o ranka ją atliktų patikimai.",
      },
    ],
    paragraphs: [
      "Kaulo gijimas ir rankos funkcijos atkūrimas nėra tas pats. Judesys bei jėga gali gerėti dar mėnesius. Tyrimuose po proksimalinių lūžių taikomi nevienodi režimai, todėl vienos visiems tinkamos pradžios datos ar vizitų skaičiaus nėra.",
    ],
  },
  beforeVisit: [
    "Laikykitės paskirto įtvaro naudojimo. Jei gydotės funkciniu žasto įtvaru, jo savarankiškai nenuimkite ir nekeiskite atramos padėties; pasitikslinkite, kaip rūpintis oda ir higiena. Jei įtvaras slysta ar spaudžia, kreipkitės į jį pritaikiusią komandą.",
    "Atlikite tik jau leistus pratimus. Nebandykite patikrinti kaulo tvirtumo keldami svorį ar remdamiesi ranka. Paprašykite pagalbos apsiperkant ir ruošiantis maistą, saugokite gipsą nuo drėgmės. Užsirašykite skausmo pokyčius ir klausimus kitai gydytojo konsultacijai.",
  ],
  urgent: {
    note: "",
    items: [
      "Skambinkite 112, jei atsiranda stiprus dusulys, krūtinės skausmas, prarandate sąmonę ar gausiai kraujuojate.",
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei plaštaka tampa šalta, balta ar mėlyna, sparčiai didėja tinimas bei skausmas arba staiga prarandate jutimą. Nelaukite kineziterapijos vizito; jei negalite saugiai nuvykti, skambinkite 112.",
      "Tą pačią dieną kreipkitės į traumatologą ar operavusią komandą, jei naujai nusilpo riešo ar pirštų tiesimas, žaizda paraudo, šlapiuoja, karščiuojate arba įtvaras spaudžia odą.",
    ],
  },
  team: {
    title: "Su atsistatymu po žastikaulio lūžio dirba",
    specialists: [
      "mangirdas-kazacenko",
      "kotryna-kairyte",
      "piotr-dubrovskij",
      "erikas-jatkauskas",
    ],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Ar reabilitacija reikalinga, jei operacijos nebuvo?",
      a: "Gali būti reikalinga. Ilgesnis nejudinimas veikia judrumą ir jėgą, tačiau programą bei priežiūros poreikį parenkame individualiai.",
    },
    {
      q: "Ar jau galima kelti ranką, jei beveik neskauda?",
      a: "Skausmas nėra vienintelis saugumo kriterijus. Vadovaukitės traumatologo leidimu ir nurodytomis judesio ribomis.",
    },
    {
      q: "Kodėl po lūžio prie alkūnės ranka neišsitiesia?",
      a: "Alkūnė po traumos linkusi sustingti. Judesį atkuriame palaipsniui; kartais dalis ribotumo išlieka ir kaului sugijus.",
    },
    {
      q: "Kada galėsiu nešti pirkinius ar vairuoti?",
      a: "Kai gydytojas leis atitinkamą apkrovą ir ranka saugiai atliks reikalingus veiksmus. Vairuoti su valdymui trukdančiu įtvaru ar reakciją slopinančiais vaistais negalima.",
    },
    {
      q: "Ar dilgčiojimą galima tiesiog išmankštinti?",
      a: "Ne. Naują ar stiprėjantį jutimo pasikeitimą pirmiausia turi įvertinti gydytojas, ypač jei silpsta riešas ar pirštai.",
    },
    {
      q: "Ar reikia siuntimo?",
      a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai.",
    },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Shoulder Trauma (Fractures and Dislocations)",
      url: "https://www.orthoinfo.org/bodypart/shoulder/shoulder-trauma-fractures-and-dislocations/",
    },
    {
      authors: "Cambridge University Hospitals NHS Foundation Trust.",
      title: "Humeral shaft fractures",
      year: 2026,
      url: "https://www.cuh.nhs.uk/patient-information/humeral-shaft-fractures/",
    },
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Distal Humerus Fractures of the Elbow",
      url: "https://www.orthoinfo.org/bodypart/elbow/distal-humerus-fractures-of-the-elbow/",
    },
    {
      authors: "Budharaju A ir kt.",
      title:
        "Rehabilitation protocols in proximal humerus fracture management: A systematic review.",
      journal: "Shoulder Elbow",
      year: 2024,
      doi: "10.1177/17585732231182374",
    },
    {
      authors: "NHS.",
      title: "Broken arm or wrist",
      url: "https://www.nhs.uk/conditions/broken-arm-or-wrist/",
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba: kada skambinti 112?",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/",
    },
  ],
  reviewed: null,
  related: [
    {
      href: "/ka-gydome/atsistatymas-po-operaciju",
      label: "Reabilitacija po operacijų ir lūžių",
    },
    {
      href: "/ka-gydome/ankstyva-reabilitacija-po-operacijos",
      label: "Ankstyva reabilitacija po operacijos ir imobilizacijos",
    },
    { href: "/ka-gydome/peties-problemos", label: "Peties problemos" },
    {
      href: "/ka-gydome/alkunes-ir-rieso-skausmas",
      label: "Alkūnės ir riešo skausmas",
    },
  ],
};
