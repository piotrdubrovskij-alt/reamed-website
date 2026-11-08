import type { ConditionPage } from "./types";
import { OOSTERHUIS_2014 } from "./sources";

// Batch 9 (08.11.2026): Piotr's text for «Po operacijų», laid out on template G with its wording kept.
// Section «Po operacijų», listed again in «Nugara». Sources as in his text: hospital pages by link, studies by DOI.
// Plus the Cochrane paragraph and source from the batch 8 draft (Piotr's choice, 08.11.2026).
export const reabilitacijaPoDiskoIsvarzosOperacijos: ConditionPage = {
  slug: "reabilitacija-po-disko-isvarzos-operacijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po disko išvaržos operacijos",
  meta: {
    title: "Reabilitacija po disko išvaržos operacijos | ReaMed",
    description:
      "Reabilitacija po juosmens disko išvaržos operacijos. Kaip judėti, atkurti jėgą ir grįžti į darbą; kada kreiptis skubiai. Privati reabilitacija Vilniuje be siuntimo.",
  },
  conditionName: "Būklė po juosmens disko išvaržos operacijos",
  hero: {
    h1: "Reabilitacija po disko išvaržos operacijos",
    lead: "Po juosmens disko išvaržos operacijos kojos skausmas gali sumažėti anksčiau, nei atsikuria jėga, jutimas ir pasitikėjimas judesiu. Reabilitacija padeda grįžti prie vaikščiojimo, darbo ir fizinio krūvio pagal operacijos apimtį bei chirurgo nurodymus. ReaMed klinikoje Vilniuje sudarome planą, kuris atsižvelgia į gijimą, likusius simptomus ir jūsų kasdienybės poreikius, o ne vien į praėjusį laiką.",
    specialist: "piotr-dubrovskij",
  },
  about: {
    title: "Ką pakeičia diskektomija?",
    paragraphs: [
      "Atliekant diskektomiją ar mikrodiskektomiją pašalinama nervą spaudžianti disko dalis. Operacija sudaro daugiau vietos nervui, tačiau savaime neatkuria dėl skausmo sumažėjusio fizinio pajėgumo. Taip pat turi sugyti operuoti audiniai.",
      "Šis puslapis skirtas juosmens disko išvaržos operacijai be slankstelių sujungimo. Jeigu kartu atlikta stabilizacija ar spondilodezė, taikomas kitoks planas: svarbus ir kaulinio suaugimo procesas. Po kaklo operacijos šių rekomendacijų taip pat negalima tiesiogiai perkelti.",
      "Iki operacijos buvęs tirpimas nebūtinai išnyksta iš karto. Stebime, ar simptomai palaipsniui gerėja, ar atsirado naujų pokyčių. Naujo ar stiprėjančio silpnumo negalima laikyti vien įprastu raumenų nuovargiu.",
      "Cochrane apžvalga apėmė 22 tyrimus ir 2503 žmones po disko operacijų. Pratimų programos, pradėtos 4–6 savaitę po operacijos, trumpuoju laikotarpiu greičiau sumažino skausmą ir negalią nei gydymo nebuvimas, o intensyvesnės programos šiek tiek greičiau nei lengvos. Nė viename tyrime pratimai nepadidino pakartotinės operacijos rizikos. Tyrimų kokybė nedidelė, bet kryptis aiški: judėti ir palaipsniui stiprėti verta.",
    ],
  },
  when: {
    items: [
      "Grįžote iš ligoninės ir neaišku, kiek judėti bei kaip derinti poilsį su aktyvumu.",
      "Gydytojas leido kineziterapiją, bet nežinote, nuo ko pradėti.",
      "Sunku ilgiau vaikščioti, sėdėti ar grįžti prie darbo.",
      "Išliko kojos silpnumas, pakitusi eisena ar baimė pasilenkti.",
      "Norite pasiruošti fiziniam darbui, sporto salei ar bėgimui.",
    ],
    note: "Konsultacijos laiką parenkame pagal išrašą. Ankstyvas mokymas, kaip judėti namuose, ir intensyvesnė pratimų programa gali prasidėti skirtingu metu.",
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname,",
      text: "kokiame stuburo lygyje ir kokia operacija atlikta, ar buvo komplikacijų, kokius apribojimus nustatė chirurgas. Svarbu žinoti, kokie simptomai buvo iki operacijos ir kas pasikeitė po jos.",
    },
    {
      lead: "Vertiname",
      text: "kojų jėgą, jutimus, eiseną, gebėjimą atsistoti, sėdėti ir atlikti leistinus kasdienius judesius. Aptariame miegą, nuovargį, vartojamų vaistų poveikį ir darbo pobūdį. Ištyrimo apimtį pritaikome gijimo etapui; nereikia specialiai išprovokuoti skausmo, kad įvertintume pažangą.",
    },
    {
      lead: "Susitariame dėl konkrečių rodiklių:",
      text: "kiek nueinate, kiek laiko patogiai sėdite, ar lengviau apsirengiate. Juos peržiūrime kartu su simptomų dinamika.",
    },
  ],
  services: [
    "pooperacine-reabilitacija",
    "kineziterapija",
    "gydomasis-masazas",
  ],
  treatment: {
    items: [
      {
        title: "Pirmasis etapas: savarankiškas judėjimas.",
        text: "Mokomės patogiai atsikelti, keisti padėtį ir vaikščioti pagal ligoninėje gautus nurodymus. Geriau toleruojami trumpesni aktyvumo laikotarpiai palaipsniui ilgėja. Žaizdos priežiūros ir paskirtų judesio ar kėlimo apribojimų laikomės net tada, kai koją jau skauda mažiau.",
      },
      {
        title: "Toliau atkuriame jėgą ir ištvermę.",
        text: "Kai leidžia chirurgas ir būklė, įtraukiame liemens bei kojų raumenų pratimus, pusiausvyrą ir kasdienius judesius su pasipriešinimu. Krūvį didiname, kai judesys atliekamas kontroliuojamai ir neatsiranda naujų neurologinių simptomų. Pratimai parenkami pagal jūsų ištyrimą, ne vien pagal operacijos pavadinimą.",
      },
      {
        title: "Grįžtame prie konkrečių užduočių.",
        text: "Sėdimam darbui svarbu ištverti darbo dieną su pertraukomis. Fiziniam darbui reikia pasirengti kelti, nešti ar stumti. Sportui atkuriame jo reikalaujamą jėgą ir krūvio toleravimą, iš pradžių išbandydami lengvesnes užduotis.",
      },
    ],
    paragraphs: [
      "Kasdienės funkcijos dažnai gerėja per pirmąsias savaites, o platesnis atsistatymas trunka mėnesius. Nervo simptomai gali keistis ilgiau. Vienodo visiems tinkamo vizitų skaičiaus nėra: planą koreguojame pagal kontrolinį ištyrimą ir jūsų tikslus. Jei pažanga sustoja ar būklė blogėja, tariamės su operavusia komanda.",
    ],
  },
  beforeVisit: [
    "Išsaugokite išrašą ir aiškiai pasižymėkite leidžiamą aktyvumą bei kontrolinio vizito datą.",
    "Vaikščiokite taip, kaip nurodyta išrašant, keiskite padėtį ir paskirstykite buitinius darbus, kad nereikėtų visko atlikti vienu kartu.",
    "Pasirūpinkite pagalba nešant pirkinius ar tvarkant namus, kol galioja apribojimai.",
    "Užrašykite, ar skausmas jaučiamas nugaroje, ar plinta į koją, ir kas jį pakeičia.",
    "Savarankiškai nepradėkite stiprių nervo tempimo pratimų ar stuburo manipuliacijų. Tęskite ligoninėje parodytus pratimus pagal gautas rekomendacijas.",
  ],
  urgent: {
    note: "",
    items: [
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei naujai sutrinka šlapinimasis ar tuštinimosi kontrolė, nutirpsta tarpvietė arba atsiranda naujas ar greitai didėjantis kojos silpnumas. Nelaukite planinio vizito. Jei negalite saugiai nuvykti, kvieskite pagalbą telefonu 112.",
      "Skambinkite 112, jeigu staiga atsiranda dusulys, krūtinės skausmas ar alpimas.",
      "Tą pačią dieną susisiekite su operavusia komanda, jei didėja žaizdos paraudimas, ji šlapiuoja, karščiuojate ar ryškiai stiprėja skausmas. Jei susisiekti nepavyksta, kreipkitės į skubiosios pagalbos skyrių. Skaidraus skysčio tekėjimas iš žaizdos kartu su galvos skausmu ar karščiavimu reikalauja neatidėliotino įvertinimo ligoninėje.",
    ],
  },
  team: {
    title: "Su atsistatymu po stuburo operacijos dirba",
    specialists: [
      "piotr-dubrovskij",
      "mangirdas-kazacenko",
      "kotryna-kairyte",
      "erikas-jatkauskas",
    ],
    note: "Nugaros ir išialgijos atvejais dažniausiai dirba Piotr, vyresniems pacientams po operacijų padeda Mangirdas.",
  },
  faq: [
    {
      q: "Ar likęs tirpimas reiškia, kad operacija nepavyko?",
      a: "Nebūtinai. Jutimo atsistatymas gali būti lėtesnis nei skausmo sumažėjimas ir ne visada būna visiškas. Vertiname jo kitimą, o apie naują tirpimą ar silpnumą būtina pranešti gydytojui.",
    },
    {
      q: "Ar reikia laukti, kol visai nebeskaudės?",
      a: "Ne visada. Leidžiamas judėjimas paprastai pradedamas dar ligoninėje. Tačiau naujas plintantis skausmas ar neurologiniai pokyčiai yra priežastis peržiūrėti planą, o ne tiesiog tęsti pratimus.",
    },
    {
      q: "Kada galima vairuoti?",
      a: "Kai tai suderinta su gydytoju, galite saugiai sėdėti, valdyti pedalus ir atlikti avarinį stabdymą, o vaistai neslopina reakcijos. Vien praėjusių savaičių skaičius nepatvirtina pasirengimo.",
    },
    {
      q: "Kada grįšiu į darbą?",
      a: "Tai priklauso nuo operacijos ir užduočių. Galima aptarti laipsnišką grįžimą, trumpesnes darbo valandas ir pertraukas; sunkus fizinis darbas reikalauja atskiro pasirengimo bei gydytojo leidimo.",
    },
    {
      q: "Ar pratimai garantuoja, kad išvarža nepasikartos?",
      a: "Tokios garantijos nėra. Reabilitacijos tikslas yra atkurti funkciją, padėti dozuoti krūvį ir išmokti reaguoti į simptomus. Vienos „apsauginės“ mankštos visiems nėra.",
    },
    {
      q: "Ar reikia siuntimo?",
      a: "Ne. ReaMed yra privati klinika, registruojatės tiesiogiai.",
    },
  ],
  reviews: "atsistatymas-po-operaciju",
  sources: [
    {
      authors: "Guy’s and St Thomas’ NHS Foundation Trust.",
      title:
        "Recovering from lumbar spine decompression or discectomy: overview",
      url: "https://www.guysandstthomas.nhs.uk/health-information/recovering-lumbar-spine-decompression-or-discectomy",
    },
    {
      authors: "Cambridge University Hospitals.",
      title: "Post-operative recovery following lumbar decompression surgery",
      url: "https://www.cuh.nhs.uk/patient-information/post-operative-recovery-following-lumbar-decompression-surgery/",
    },
    {
      authors: "Ohio State University Wexner Medical Center.",
      title: "Lumbar Discectomy Post-Operative Rehabilitation Guidelines",
      year: 2022,
      url: "https://wexnermedical.osu.edu/-/media/files/wexnermedical/patient-care/healthcare-services/neurological-institute/ohio-state-spine-care/lumbar-discectomy-april-2022-branded.pdf?hash=4450C271F894727CBD57A25C0C6EE4CF&rev=947d014469384a1cbe29a482c4f82a82",
    },
    {
      authors: "Guy’s and St Thomas’ NHS Foundation Trust.",
      title: "Advice to help your recovery",
      url: "https://www.guysandstthomas.nhs.uk/health-information/recovering-lumbar-spine-decompression-or-discectomy/advice-help-your-recovery",
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba: kada skambinti 112?",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/",
    },
    {
      authors: "Royal Berkshire NHS Foundation Trust.",
      title: "Lumbar decompression or discectomy",
      year: 2025,
      url: "https://www.royalberkshire.nhs.uk/media/ufwnawa3/lumbar-decompression-or-discectomy_feb25.pdf",
    },
    OOSTERHUIS_2014,
  ],
  reviewed: null,
  related: [
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
    {
      href: "/ka-gydome/isialgija-radikulopatija",
      label: "Išialgija ir radikulopatija",
    },
    {
      href: "/ka-gydome/atsistatymas-po-operaciju",
      label: "Atsistatymas po operacijų",
    },
    {
      href: "/paslaugos/pooperacine-reabilitacija",
      label: "Pooperacinė reabilitacija",
    },
  ],
};
