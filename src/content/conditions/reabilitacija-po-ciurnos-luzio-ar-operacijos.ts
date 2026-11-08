import type { ConditionPage } from "./types";

// Batch 9 (08.11.2026): Piotr's text for «Po operacijų», laid out on template G with its wording kept.
// Section «Po operacijų», listed again in «Čiurna, pėda ir kulnas». Sources as in his text: hospital pages by link, studies by DOI.
export const reabilitacijaPoCiurnosLuzioArOperacijos: ConditionPage = {
  slug: "reabilitacija-po-ciurnos-luzio-ar-operacijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po čiurnos lūžio ar operacijos",
  meta: {
    title: "Reabilitacija po čiurnos lūžio ar operacijos | ReaMed",
    description:
      "Kaip atkurti čiurnos judesius, eiseną ir pusiausvyrą po lūžio ar operacijos. Krūvis pagal gijimą ir chirurgo nurodymus. Kineziterapija Vilniuje, be siuntimo.",
  },
  conditionName: "Būklė po čiurnos lūžio ar operacijos",
  hero: {
    h1: "Reabilitacija po čiurnos lūžio ar operacijos",
    lead: "Po čiurnos lūžio ar operacijos dažnai lieka tinimas, sustingimas ir silpnesnė blauzda. Reabilitacija padeda atkurti eiseną, pusiausvyrą ir kojos pajėgumą, tačiau pradžia priklauso nuo gydytų audinių. ReaMed klinikoje Vilniuje pirmiausia išsiaiškiname leistiną atramą bei judesius, tada sudarome planą grįžti prie kasdienės veiklos, darbo ar sporto pagal chirurgo nurodymus ir jūsų pažangą.",
    specialist: "kotryna-kairyte",
  },
  about: {
    title: "Kodėl svarbu žinoti, kas buvo operuota",
    paragraphs: [
      "Po čiurnos lūžio kaulo dalys gali būti sutvirtintos plokštelėmis ir varžtais. Kartais kartu sutvarkoma sindesmozė, jungtis tarp blauzdikaulio ir šeivikaulio. Krūvio planą lemia lūžio pobūdis, sutvirtinimo stabilumas, minkštųjų audinių būklė ir chirurgo sprendimas.",
      "Po raiščių rekonstrukcijos saugomi gyjantys raiščiai, o po sausgyslės operacijos saugoma sutvarkyta sausgyslė. Čiurnos artroskopijos metu gali būti pašalintos ataugos, laisvi fragmentai ar gydyta kremzlė. Todėl užrašo „čiurnos operacija“ neužtenka parinkti pratimus: skirtingoms procedūroms gali reikėti skirtingo įtvaro, atramos ir judesių režimo.",
    ],
  },
  when: {
    items: [
      "Po išrašymo neaišku, kaip saugiai judėti su ramentais.",
      "Nuėmus gipsą ar įtvarą čiurna sustingusi, sunku žengti įprastą žingsnį.",
      "Leidžiama didinti atramą, tačiau vis dar šlubuojate.",
      "Tinimas ir silpnumas trukdo ilgiau stovėti, vaikščioti ar lipti laiptais.",
      "Norite grįžti į fizinį darbą, bėgimą ar sportą, bet nežinote, ar koja pasiruošusi.",
    ],
  },
  assess: [
    {
      lead: "Peržiūrime išrašą,",
      text: "paskutinės chirurgo konsultacijos išvadą ir nurodymus dėl atramos. Patiksliname, ar galima nusiimti įtvarą pratimams, kokie judesiai leidžiami ir kada numatyta kontrolė. Jei šios informacijos trūksta, prieš didindami krūvį kreipiamės į operavusią komandą.",
    },
    {
      lead: "Įvertiname",
      text: "tinimą, odos būklę, leidžiamus judesius ir eiseną. Vėlesniuose etapuose tikriname blauzdos jėgą, pusiausvyrą, laiptų įveikimą ir reakciją į ilgesnį ėjimą. Aptariame jūsų tikslą: saugiai pasiekti parduotuvę, išdirbti pamainą ar grįžti į treniruotes.",
    },
  ],
  services: [
    "pooperacine-reabilitacija",
    "sporto-reabilitacija",
    "kineziterapija",
  ],
  treatment: {
    items: [
      {
        title: "Apsauga ir saugus judėjimas.",
        text: "Mokomės naudotis ramentais, valdyti tinimą ir išlaikyti leidžiamą aktyvumą. Pratimai parenkami taip, kad nepažeistų atramos ir judesių apribojimų. Lūžio vietos ar susiūtų audinių netempiame per jėgą.",
      },
      {
        title: "Judesio ir eisenos atkūrimas.",
        text: "Kai leidžiama, didiname čiurnos judesius bei atramą ir mokomės tolygiai perkelti svorį. Ramentai padeda išlaikyti saugų žingsnį, kol jėgos dar nepakanka. Svarbu ne vien nueitas atstumas, bet ir eisena bei simptomai po veiklos.",
      },
      {
        title: "Jėga ir pusiausvyra.",
        text: "Pereiname prie pasistiebimų, pusiausvyros užduočių, laiptų ir ilgesnio ėjimo. Krūvį pritaikome pagal operacijos pobūdį ir kojos reakciją. Po raiščių operacijos ypač svarbu pasiruošti nelygiam paviršiui ir krypties keitimams.",
      },
      {
        title: "Grįžimas į didesnį krūvį.",
        text: "Bėgimą ir šuolius pradedame tik kai tai leidžia gijimas ir pakanka judesio, jėgos bei kontrolės. Grįžimas į sportą paprastai užtrunka ilgiau nei grįžimas prie kasdienio vaikščiojimo. Po sudėtingų traumų jėga ir ištvermė gali atsistatyti daugelį mėnesių.",
      },
    ],
    paragraphs: [
      "Ankstesnė atrama kai kuriems pacientams po stabiliai sutvirtinto čiurnos lūžio gali būti tinkama: tai patvirtina ir WAX tyrimas. Tačiau jo rezultatai nėra leidimas savarankiškai pradėti remtis koja po bet kurios čiurnos operacijos. Jūsų atramos režimą patvirtina chirurgas.",
      "Vizitų skaičių parenkame pagal pažangą ir savarankišką darbą namuose, o ne vienodą kursą visiems.",
    ],
  },
  beforeVisit: [
    "Laikykitės išraše nurodyto įtvaro ir atramos režimo. Ilsėdamiesi pakelkite koją taip, kaip rekomenduota ligoninėje, o gipsą ir žaizdos tvarstį saugokite nuo drėgmės. Darykite tik jums parodytus, leistus pratimus. Savavališkai nepradėkite čiurnos sukimo, tempimo ar pasistiebimų.",
    "Pašalinkite kliūtis namuose, pasirūpinkite neslidžia avalyne sveikai kojai ir pagalba nešant daiktus. Užsirašykite, kaip keičiasi tinimas bei skausmas po veiklos. Paskirtus vaistus trombozės profilaktikai vartokite pagal gydytojo nurodymus.",
  ],
  urgent: {
    note: "",
    items: [
      "Skambinkite 112, jei staiga atsirado dusulys, krūtinės skausmas ar alpimas. Skubios pagalbos reikia ir staiga atšalus, pabąlus ar pamėlus pėdai, ypač jei sutrinka jutimas arba judesiai.",
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei po gipsu ar įtvaru atsiranda labai stiprus, neįprastas skausmas, kurio nesumažina paskirtas gydymas, ypač jei skausmas sparčiai didėja ar pirštus sunku judinti. Nelaukite, kol pasikeis pėdos spalva.",
      "Tą pačią dieną kreipkitės į chirurgą arba skubiosios pagalbos skyrių, jei naujai patino ir skauda vieną blauzdą, karščiuojate, žaizda labiau parausta ar iš jos teka, gipsas stipriai spaudžia arba ryškiai didėja skausmas. Nelaukite planinio kineziterapijos vizito.",
    ],
  },
  team: {
    title: "Su atsistatymu po čiurnos traumos dirba",
    specialists: [
      "kotryna-kairyte",
      "mangirdas-kazacenko",
      "edmundas-zlatkus",
      "erikas-jatkauskas",
    ],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Kada galima visiškai remtis koja?",
      a: "Kai leidžia chirurgas, įvertinęs operaciją ir gijimą. Vieniems atrama leidžiama anksčiau, kitiems ją riboti reikia ilgiau. Vadovaukitės savo išrašu, o ne vien skausmu ar kito paciento patirtimi.",
    },
    {
      q: "Ar normalu, kad vakare čiurna labiau patinsta?",
      a: "Tinimas po čiurnos lūžio gali išlikti mėnesius, ypač padidinus veiklą. Svarbi jo kitimo tendencija. Staigus ryškus tinimo padidėjimas, blauzdos skausmas ar paraudimas turi būti įvertinti gydytojo.",
    },
    {
      q: "Ar galima sukti čiurną, kai nuimamas įtvaras?",
      a: "Tik jei tokie judesiai leidžiami. Įtvaro nuėmimas higienai nebūtinai reiškia, kad galima judinti čiurną visomis kryptimis, ypač po raiščių ar sausgyslių operacijos.",
    },
    {
      q: "Kada galėsiu vairuoti?",
      a: "Kai saugiai valdote pedalus ir galite staigiai stabdyti, o įtvaras bei vaistai tam netrukdo. Sprendimą derinkite su gydytoju; svarbi operuota pusė ir automobilio pavaros.",
    },
    {
      q: "Kodėl dar negaliu bėgti, nors vaikštau be skausmo?",
      a: "Bėgimui reikia didesnės blauzdos jėgos, ištvermės ir gebėjimo valdyti nusileidimą. Tai įvertiname atskirai, prieš įtraukdami smūginį krūvį į programą.",
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
      title: "Ankle Fractures (Broken Ankle)",
      url: "https://www.orthoinfo.org/bodypart/foot-ankle/ankle-fractures-broken-ankle/",
    },
    {
      authors: "British Orthopaedic Association.",
      title: "BOASt – The Management of Ankle Fractures",
      year: 2016,
      url: "https://www.boa.ac.uk/resource/boast-12-pdf.html",
    },
    {
      authors: "Bretherton CP ir kt.",
      title:
        "Early versus delayed weight-bearing following operatively treated ankle fracture (WAX): a non-inferiority, multicentre, randomised controlled trial.",
      journal: "Lancet",
      year: 2024,
      doi: "10.1016/S0140-6736(24)00710-4",
    },
    {
      authors: "Royal National Orthopaedic Hospital.",
      title:
        "A Patient’s guide to Lateral Ligament Reconstruction of the Ankle",
      url: "https://www.rnoh.nhs.uk/patients-and-visitors/patient-information-guides/lateral-ligament-reconstruction-ankle",
    },
    {
      authors: "Royal National Orthopaedic Hospital.",
      title: "A Patient’s guide to Ankle Arthroscopy",
      url: "https://www.rnoh.nhs.uk/patients-and-visitors/patient-information-guides/ankle-arthroscopy",
    },
    {
      authors: "NHS.",
      title: "DVT (deep vein thrombosis)",
      url: "https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/",
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba: kada skambinti 112?",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/",
    },
    {
      authors: "University College London Hospitals.",
      title: "Walking boot – advice for patients",
      url: "https://www.uclh.nhs.uk/patients-and-visitors/patient-information-pages/walking-boot-advice-patients",
    },
  ],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    {
      href: "/ka-gydome/ciurnos-ir-pedos-skausmas",
      label: "Čiurnos ir pėdos skausmas",
    },
    {
      href: "/ka-gydome/atsistatymas-po-operaciju",
      label: "Reabilitacija po operacijų",
    },
    {
      href: "/paslaugos/pooperacine-reabilitacija",
      label: "Pooperacinė reabilitacija",
    },
    {
      href: "/ka-gydome/grizimas-i-sporta-po-traumos",
      label: "Grįžimas į sportą po traumos",
    },
  ],
};
