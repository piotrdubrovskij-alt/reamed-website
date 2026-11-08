import type { ConditionPage } from "./types";

// Batch 9 (08.11.2026): Piotr's text for «Po operacijų», laid out on template G with its wording kept.
// Section «Po operacijų», listed again in «Čiurna, pėda ir kulnas». Sources as in his text: hospital pages by link, studies by DOI.
export const reabilitacijaPoAchiloSausgyslesPlysimo: ConditionPage = {
  slug: "reabilitacija-po-achilo-sausgysles-plysimo",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po Achilo sausgyslės plyšimo",
  meta: {
    title: "Reabilitacija po Achilo sausgyslės plyšimo | ReaMed",
    description:
      "Atsistatymas po Achilo sausgyslės plyšimo su operacija ar be jos. Įtvaras, eisena, blauzdos jėga ir grįžimas į sportą. Privati reabilitacija Vilniuje be siuntimo.",
  },
  conditionName: "Būklė po Achilo sausgyslės plyšimo",
  hero: {
    h1: "Reabilitacija po Achilo sausgyslės plyšimo",
    lead: "Po Achilo sausgyslės plyšimo reikia laiko ir audiniams sugyti, ir blauzdos jėgai atkurti. Reabilitacija reikalinga tiek po operacijos, tiek pasirinkus gydymą be jos. ReaMed klinikoje Vilniuje planą deriname su jus gydančio ortopedo nurodymais: padedame saugiai pereiti nuo įtvaro ir ramentų prie vaikščiojimo, o vėliau prie darbo ar sporto, pagal jūsų tikslus.",
    specialist: "kotryna-kairyte",
  },
  about: {
    title: "Kodėl neužtenka, kad sausgyslė sugytų?",
    paragraphs: [
      "Achilo sausgyslė jungia blauzdos raumenis su kulnakauliu. Ji perduoda jėgą atsispiriant: žengiant žingsnį, lipant laiptais, bėgant ar šokant. Po plyšimo ir laikotarpio įtvare blauzda susilpnėja, todėl net sumažėjus skausmui koja dar gali būti nepasirengusi ankstesniam krūviui.",
      "Operuojant sausgyslės galai sujungiami siūlėmis. Gydant be operacijos jų gijimui sudaromos sąlygos specialiu įtvaru ir nustatyta pėdos padėtimi. Abiem atvejais reikalinga apsauga ir nuoseklus krūvio didinimas, tačiau įtvaro režimas, leidimas minti ir čiurnos judesiai gali skirtis. Vieno žmogaus planas netinka kitam vien todėl, kad trauma vadinasi taip pat.",
    ],
  },
  when: {
    items: [
      "Jau turite ortopedo gydymo planą, bet neaišku, kaip jo laikytis namuose.",
      "Artėja perėjimas nuo įtvaro prie avalynės ir norite pasiruošti.",
      "Vaikštant šlubuojate, silpnai atsispiriate ar nepasitikite koja.",
      "Po leisto krūvio vis didėja tinimas ar sunku suprasti, kada sumažinti aktyvumą.",
      "Kasdien vaikštote patogiai, tačiau dar negalite grįžti į bėgimą ar komandinį sportą.",
    ],
    note: "Jeigu plyšimą tik įtariate ir gydytojas dar neapžiūrėjo, pirmiausia reikalingas skubus traumos įvertinimas. Reabilitacijos konsultacija nepakeičia pradinio ištyrimo.",
  },
  assess: [
    {
      lead: "Pirmiausia peržiūrime išrašą:",
      text: "kada įvyko trauma, ar atlikta operacija, kokia sausgyslės dalis pažeista, kiek leidžiama apkrauti koją ir kada numatyta kontrolė. Atsineškite įtvarą, naudojamus ramentus ir turimus nurodymus.",
    },
    {
      lead: "Pagal gijimo etapą vertiname",
      text: "tinimą, eiseną, pėdos ir čiurnos judesius, blauzdos bei kitų kojos raumenų darbą. Vėliau stebime pasistiebimo aukštį, ištvermę, pusiausvyrą ir sportui svarbius judesius. Ankstyvu etapu stipriu tempimu ar pasistiebimais sausgyslės nebandome.",
    },
    {
      lead: "Kartu sutariame artimiausią tikslą:",
      text: "pavyzdžiui, saugiai naudotis laiptais ar nueiti iki darbo. Taip pažangą matuojame ne vien praėjusiomis savaitėmis.",
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
        text: "Pradžioje mokomės naudotis ramentais, dozuoti leistiną ėjimą ir valdyti tinimą. Galima palaikyti kitų kūno dalių aktyvumą, kai tai nepažeidžia paskirto režimo. Įtvaro kampo, pakulnių ir leidžiamos atramos savarankiškai nekeičiame.",
      },
      {
        title: "Ėjimas ir jėgos atkūrimas.",
        text: "Gydytojui leidus palaipsniui didiname čiurnos judesius bei blauzdos apkrovą. Tikslas: kontroliuojamas žingsnis ir stiprėjantis atsispyrimas. Nuėmus įtvarą sausgyslė dar nėra pasirengusi bet kokiam judesiui: ypač svarbu saugotis staigaus jos ištempimo ir neplanuoto šuolio.",
      },
      {
        title: "Pasirengimas sportui.",
        text: "Bėgimą, šuolius ir krypties keitimą įtraukiame, kai leidžia gijimas, pakanka jėgos bei ištvermės, o ankstesnis krūvis toleruojamas. Vertiname abi kojas, judesio kokybę ir konkretaus sporto reikalavimus. Grįžimas prasideda nuo atskirų užduočių, vėliau pereinama prie treniruotės dalių ir viso krūvio.",
      },
    ],
    paragraphs: [
      "Atsistatymas trunka mėnesius. Visavertis jėgos bei sportinio pajėgumo atkūrimas gali užtrukti apie metus ar ilgiau. Mažesnis skausmas ir gebėjimas vaikščioti nėra automatinis leidimas grįžti į varžybas. Vizitų dažnį deriname su pažanga ir savarankiško darbo galimybėmis.",
    ],
  },
  beforeVisit: [
    "Laikykitės savo įtvaro ir kojos apkrovimo nurodymų, net jei jau beveik neskauda.",
    "Pasirūpinkite laisvu praėjimu namuose ir pagalba nešant daiktus, kai naudojate ramentus.",
    "Tinimui mažinti ilsėkitės pakėlę koją, išlaikydami paskirtą jos padėtį.",
    "Užsirašykite, po kokios veiklos tinimas ar skausmas didėja ir kaip jaučiatės kitą rytą.",
    "Atlikite tik jau parodytus, jūsų etapui leistus pratimus. Netempkite blauzdos pagal bendrą interneto programą.",
  ],
  urgent: {
    note: "",
    items: [
      "Skambinkite 112, jeigu staiga atsiranda dusulys, krūtinės skausmas ar alpimas. Nelaukite kineziterapijos vizito ir nevairuokite patys.",
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei pėda staiga atšąla, išbąla ar ryškiai nutirpsta. Tai gali rodyti kraujotakos ar nervų problemą.",
      "Tą pačią dieną kreipkitės į gydantį ortopedą arba skubiosios pagalbos skyrių, jeigu naujai stipriai skauda ar tinsta blauzda, žaizda ryškiai paraudo, pradėjo šlapiuoti ar karščiuojate. Naujas trakštelėjimas ir staiga prarastas atsispyrimas taip pat reikalauja skubaus įvertinimo. Nutraukite krūvį; blauzdos nemasažuokite.",
    ],
  },
  team: {
    title: "Su atsistatymu po Achilo sausgyslės plyšimo dirba",
    specialists: [
      "kotryna-kairyte",
      "edmundas-zlatkus",
      "erikas-jatkauskas",
      "piotr-dubrovskij",
    ],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Ar reabilitacija reikalinga, jeigu manęs neoperavo?",
      a: "Taip. Gydymas be operacijos turi savo apsaugos ir aktyvumo planą. Jėgos bei eisenos atkūrimas svarbus abiem atvejais; skiriasi konkrečios gydytojo nustatytos ribos.",
    },
    {
      q: "Kada galima nusiimti įtvarą?",
      a: "Pagal jūsų gydymo planą ir kontrolinio įvertinimo rezultatus. Vien skausmo sumažėjimo nepakanka. Su gydytoju išsiaiškinkite ir atskiras taisykles miegui, prausimuisi bei vaikščiojimui.",
    },
    {
      q: "Ar sustingusią čiurną reikia stipriai tempti?",
      a: "Ne. Ankstyvas intensyvus tempimas gali pakenkti gijimui. Judesių amplitudę atkuriame palaipsniui; tempimo poreikis priklauso nuo etapo ir ištyrimo.",
    },
    {
      q: "Kada galėsiu bėgioti?",
      a: "Kai gydytojas leidžia, atsikuria pakankama blauzdos funkcija ir toleruojate parengiamąjį krūvį. Vien kalendorinė data ar neskausmingas ėjimas šio sprendimo nenulemia.",
    },
    {
      q: "Ką atsinešti į pirmą vizitą?",
      a: "Traumos ar operacijos išrašą, gydytojo nurodymus, įtvarą, ramentus ir patogius drabužius. Užrašykite svarbiausias veiklas, prie kurių norite grįžti.",
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
      title: "Achilles Tendon Rupture (Tear)",
      url: "https://www.orthoinfo.org/bodypart/foot-ankle/achilles-tendon-rupture-tear/",
    },
    {
      authors: "Cambridge University Hospitals.",
      title: "Achilles tendon rupture: management and rehabilitation",
      url: "https://www.cuh.nhs.uk/patient-information/achilles-tendon-rupture-management-and-rehabilitation/",
    },
    {
      authors: "Marrone W ir kt.",
      title:
        "Rehabilitation and Return to Sports after Achilles Tendon Repair.",
      journal: "Int J Sports Phys Ther",
      year: 2024,
      doi: "10.26603/001c.122643",
    },
    {
      authors: "University Hospitals Plymouth NHS Trust.",
      title: "Achilles Tendon Rupture Rehabilitation",
      year: 2025,
      url: "https://www.plymouthhospitals.nhs.uk/display-pil/pil-achilles-tendon-rupture-rehabilitation-8516",
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba: kada skambinti 112?",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/",
    },
    {
      authors: "University College London Hospitals.",
      title: "Walking Boot – Advice for Patients",
      url: "https://www.uclh.nhs.uk/patients-and-visitors/patient-information-pages/walking-boot-advice-patients",
    },
  ],
  reviewed: null,
  related: [
    {
      href: "/ka-gydome/atsistatymas-po-operaciju",
      label: "Atsistatymas po operacijų",
    },
    {
      href: "/paslaugos/pooperacine-reabilitacija",
      label: "Pooperacinė reabilitacija",
    },
    { href: "/paslaugos/sporto-reabilitacija", label: "Sporto reabilitacija" },
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
  ],
};
