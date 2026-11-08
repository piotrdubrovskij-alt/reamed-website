import type { ConditionPage } from "./types";

// Batch 10 (08.11.2026): Piotr's text, moved by scripts/import-condition-texts.mjs. Wording is his: do not retype.
export const nugarosSkausmasSedint: ConditionPage = {
  slug: "nugaros-skausmas-sedint",
  section: "nugaros-skausmas",
  navTitle: "Nugaros skausmas sėdint",
  meta: {
    title: "Nugaros skausmas sėdint ir jo gydymas | ReaMed Vilnius",
    description: "Skauda nugarą sėdint prie kompiuterio ar vairuojant? Įvertiname simptomus, pritaikome krūvį ir pratimus bei aptariame darbo įpročius ReaMed Vilniuje."
  },
  conditionName: "Nugaros skausmas sėdint",
  hero: {
    h1: "Nugaros skausmas sėdint",
    lead: "Nugarą pradeda mausti įpusėjus darbo dienai, vairuojant ar ilgiau sėdint prie kompiuterio? Svarbu įvertinti ne tik kėdę, bet ir tai, kada atsiranda simptomai, kaip juos keičia judėjimas ir kokį krūvį pakeliate. ReaMed klinikoje Vilniuje padedame rasti patogesnį darbo ritmą, parenkame pratimus ir planuojame grįžimą prie jums svarbios veiklos.",
    specialist: "piotr-dubrovskij"
  },
  about: {
    title: "Kodėl nugarą gali skaudėti sėdint",
    paragraphs: [
      "Sėdėjimas gali sustiprinti jau esamą skausmą, tačiau vien šis ryšys neparodo jo priežasties. Ilgai išbūti vienoje padėtyje gali būti nepatogu net ant geros kėdės. Savijautai taip pat svarbūs fizinis pasirengimas, miegas, įtampa ir bendras dienos aktyvumas.",
      "Nėra vienos sėdėjimo pozos, tinkamos visiems ir visai darbo dienai. Pasilenkimas ar susikūprinimas savaime neįrodo stuburo pažeidimo. Vertingiau pastebėti, kokios padėtys patogios dabar ir kada norisi jas pakeisti. Jei kartu skauda koją, tirpsta pėda ar atsiranda silpnumas, vertinimas turi apimti ir šiuos simptomus."
    ]
  },
  when: {
    items: [
      "Skausmas kartojasi dirbant, susitikimuose ar kelionėse.",
      "Vis sunkiau išsėdėti tiek, kiek reikia kasdienėms užduotims.",
      "Darbo vietos pakeitimai nepadėjo arba neaišku, ką keisti.",
      "Dėl skausmo vengiate judėti, sportuoti ar išeiti pasivaikščioti.",
      "Simptomai nepraeina per kelias savaites, dažnėja arba trukdo miegui."
    ],
    note: "Jei skausmas naujas ir stiprus arba yra toliau išvardytų pavojaus požymių, pirmiausia reikalinga medicininė pagalba."
  },
  assess: [
    {
      lead: "Aptariame darbo dieną:",
      text: "kiek laiko sėdite, ar vairuojate, kada prasideda maudimas ir kas jį palengvina. Galite atsinešti savo darbo vietos nuotrauką. Ji padeda suprasti aplinką, tačiau vien iš nuotraukos skausmo priežasties nenustatome."
    },
    {
      lead: "Įvertiname judesius, jėgą, kasdienes užduotis",
      text: "ir simptomų reakciją keičiant padėtį. Jei skausmas plinta į koją, pagal poreikį tikriname jutimus bei raumenų jėgą. Įvertiname, ar yra požymių, dėl kurių reikia gydytojo. Esant nespecifiniam juosmens skausmui, magnetinio rezonanso ar rentgeno tyrimas įprastai nėra būtinas prieš pradedant pagalbą."
    }
  ],
  services: [
    "kineziterapija",
    "manualine-terapija",
    "osteopatija",
    "gydomasis-masazas"
  ],
  treatment: {
    items: [
      {
        title: "Pritaikome darbo dieną.",
        text: "Ieškome patogaus kėdės aukščio, atramos nugarai ir pasiekiamos klaviatūros padėties. Ekraną patogu matyti nesistiebiant ir ilgai nesukant galvos. Šie pakeitimai yra pradinis bandymas pagerinti komfortą, todėl juos vertiname pagal jūsų savijautą."
      },
      {
        title: "Sudarome judėjimo planą.",
        text: "Pagal galimybes deriname ėjimą, judesių pratimus ir laipsnišką jėgos bei ištvermės lavinimą. Jei juosmens skausmas užsitęsęs, svarbi individualiai pritaikyta aktyvi programa ir supratimas, kaip valdyti simptomus. Vien kėdės pakeitimo gali nepakakti."
      },
      {
        title: "Didiname toleranciją kasdienėms užduotims.",
        text: "Susitariame dėl konkretaus tikslo, pavyzdžiui, patogiau dalyvauti susitikime ar vairuoti į darbą. Stebime ne tik skausmo balą, bet ir veiklą, kurią galite atlikti. Planą koreguojame, jei po krūvio savijauta nuosekliai blogėja."
      }
    ],
    paragraphs: [
      "Dalis nugaros skausmo epizodų pagerėja per kelias savaites, tačiau pasikartojantys simptomai gali užtrukti ilgiau. Vizitų dažnis priklauso nuo pažangos ir savarankiškumo. Jei pokyčio nėra arba simptomai keičiasi, peržiūrime vertinimą bei tolesnės pagalbos poreikį."
    ]
  },
  beforeVisit: [
    "Keiskite sėdėjimą trumpu pasivaikščiojimu ar kita užduotimi. Pertraukų ritmą pritaikykite darbui ir savijautai; visiems vienodo, skausmą panaikinančio minučių intervalo nėra. Priminimas telefone gali padėti neužsisėdėti.",
    "Pabandykite atlošą ar nedidelę atramą, patogiai atremkite pėdas. Keiskite po vieną dalyką, kad suprastumėte, kas naudinga. Užsirašykite, po kokios veiklos pradeda skaudėti ir kas palengvina. Pagal galimybes tęskite įprastą judėjimą, užuot visą dieną gulėję."
  ],
  urgent: {
    note: "",
    items: [
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei naujai nepavyksta pasišlapinti, sunku pradėti šlapintis, sutrinka šlapimo ar išmatų kontrolė, nutirpsta tarpvietė arba sparčiai silpsta viena ar abi kojos. Nelaukite kineziterapijos vizito. Jei negalite saugiai nuvykti, skambinkite 112.",
      "Tą pačią dieną kreipkitės į gydytoją, jei skausmą lydi karščiavimas, ryški bloga savijauta ar skausmas greitai stiprėja. Po sunkios traumos arba kartu atsiradus krūtinės skausmui ar dusuliui skambinkite 112."
    ]
  },
  team: {
    title: "Su nugaros skausmu dirba",
    specialists: [
      "piotr-dubrovskij",
      "mangirdas-kazacenko",
      "erikas-jatkauskas",
      "kotryna-kairyte"
    ],
    note: "Ūmaus skausmo ir išialgijos atvejais dažniausiai dirba Piotr."
  },
  faq: [
    {
      q: "Ar būtina pirkti ergonominę kėdę?",
      a: "Nebūtinai. Pirmiausia verta išbandyti turimos kėdės reguliavimą, atramą ir darbo ritmo pakeitimus. Brangi kėdė savaime negarantuoja, kad nugaros nebeskaudės."
    },
    {
      q: "Ar geriau visą dieną dirbti stovint?",
      a: "Ilgai išbūti vienoje padėtyje gali būti nepatogu ir stovint. Jei stalas reguliuojamas, jį naudokite padėčių kaitai, kartu palikdami vietos judėjimui."
    },
    {
      q: "Ar vairuojant galioja tie patys patarimai?",
      a: "Sėdynę sureguliuokite taip, kad patogiai pasiektumėte vairą ir pedalus. Ilgesnėje kelionėje suplanuokite saugias sustojimo vietas. Padėtį keiskite ir išlipkite tik saugiai sustoję."
    },
    {
      q: "Ar skausmas sėdint reiškia disko išvaržą?",
      a: "Ne, vien šio simptomo diagnozei nepakanka. Svarbūs lydintys požymiai ir ištyrimas. Tyrimų poreikį sprendžiame pagal klinikinę situaciją."
    }
  ],
  reviews: "nugaros-skausmas",
  sources: [
    {
      authors: "Guy’s and St Thomas’ NHS Foundation Trust.",
      title: "Low back pain",
      url: "https://www.guysandstthomas.nhs.uk/health-information/low-back-pain"
    },
    {
      authors: "NICE.",
      title: "Low back pain and sciatica in over 16s: assessment and management, NG59: Recommendations",
      year: 2020,
      url: "https://www.nice.org.uk/guidance/ng59/chapter/recommendations"
    },
    {
      authors: "Health and Safety Executive.",
      title: "Good posture when using display screen equipment",
      url: "https://www.hse.gov.uk/msd/dse/good-posture.htm"
    },
    {
      authors: "World Health Organization.",
      title: "WHO releases guidelines on chronic low back pain",
      year: 2023,
      url: "https://www.who.int/news/item/07-12-2023-who-releases-guidelines-on-chronic-low-back-pain"
    },
    {
      authors: "NHS.",
      title: "Back pain",
      url: "https://www.nhs.uk/conditions/back-pain/"
    },
    {
      authors: "Health and Safety Executive.",
      title: "Working safely with display screen equipment: Work routine and breaks",
      url: "https://www.hse.gov.uk/msd/dse/work-routine.htm"
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Kada skambinti: greitoji medicinos pagalba",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/"
    },
    {
      authors: "Worcestershire Acute Hospitals NHS Trust.",
      title: "Lower Back Pain: A Self-Management Guide",
      url: "https://www.worcsacute.nhs.uk/leaflets/lower-back-pain-a-self-management-guide/"
    }
  ],
  reviewed: { by: "erikas-jatkauskas", date: "2026-11-08" },
  related: [
    {
      href: "/ka-gydome/nugaros-skausmas",
      label: "Nugaros skausmas"
    },
    {
      href: "/ka-gydome/skausmas-nugaros-apacioje",
      label: "Skausmas nugaros apačioje"
    },
    {
      href: "/ka-gydome/umus-nugaros-skausmas",
      label: "Ūmus nugaros skausmas"
    }
  ]
};
