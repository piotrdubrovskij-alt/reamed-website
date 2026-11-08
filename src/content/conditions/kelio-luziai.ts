import type { ConditionPage } from "./types";

// Batch 12 (08.11.2026): Piotr's text, moved by scripts/import-condition-texts.mjs. Wording is his: do not retype.
export const kelioLuziai: ConditionPage = {
  slug: "kelio-luziai",
  section: "kelio-skausmas",
  navTitle: "Kelio lūžiai",
  meta: {
    title: "Kelio lūžiai ir reabilitacija Vilniuje | ReaMed",
    description: "Reabilitacija po kelio srities lūžių: leidžiama atrama, judesių atkūrimas ir grįžimas prie kasdienės veiklos pagal gydytojo nurodymus. ReaMed Vilniuje."
  },
  conditionName: "Kelio lūžiai",
  hero: {
    h1: "Kelio lūžiai",
    lead: "Po lūžio dažnai labiausiai rūpi paprasti dalykai: ar jau galima remtis koja, sulenkti kelį, savarankiškai užlipti laiptais? ReaMed Vilniuje padedame tai išsiaiškinti ir palaipsniui grįžti į kasdienybę. Reabilitaciją planuojame pagal konkretų lūžį bei gydytojo nurodymus. Girnelės, blauzdikaulio ir šlaunikaulio lūžiams vienodas krūvis netinka, net jeigu visais atvejais skauda tą pačią kelio sritį.",
    specialist: "kotryna-kairyte"
  },
  about: {
    title: "Ką reiškia „kelio lūžis“",
    paragraphs: [
      "Tai nėra vienos konkrečios traumos pavadinimas. Kelio srityje gali lūžti skirtingi kaulai, todėl svarbu perskaityti tikslią diagnozę.",
      "Girnelė yra kelio priekyje. Ji dalyvauja tiesiant koją, todėl jos lūžis gali sutrikdyti aktyvų kelio tiesimą. Gydytojas vertina, ar fragmentai pasislinkę ir ar išlikęs tiesimo mechanizmas.",
      "Blauzdikaulio viršutinės dalies lūžis gali pažeisti kelio sąnarinį paviršių. Šiai sričiai tenka kūno svoris, todėl leidimas remtis koja ypač priklauso nuo lūžio pobūdžio ir stabilumo.",
      "Šlaunikaulio apatinės dalies lūžis yra virš kelio, bet taip pat gali siekti sąnarį. Po stiprios traumos dažnai reikia įvertinti ir kitus sužalojimus; silpnesniam kaului pažeisti kartais pakanka paprasto kritimo.",
      "Dalis lūžių gydomi įtvaru ar gipsu, daliai reikia operacijos. Šis puslapis skirtas abiem situacijoms: bendras reabilitacijos tikslas panašus, tačiau apsaugos ir krūvio ribos skiriasi."
    ]
  },
  when: {
    items: [
      "Gydytojas jau nustatė lūžį ir leido pradėti reabilitaciją.",
      "Sunku suprasti, kaip praktiškai laikytis nurodyto atramos režimo.",
      "Po nejudrumo kelis sunkiai lankstosi, koja nusilpusi.",
      "Kaulas gyja, bet vaikštant vis dar ryškiai šlubuojate.",
      "Reikia pasiruošti darbui, kuriame tenka ilgai stovėti ar daug vaikščioti."
    ],
    note: "Jei po naujo kritimo kelis stipriai skauda, tinsta ar negalite atsistoti, pirmiausia reikia medicininio ištyrimo. Kineziterapijos vizitas nepakeičia galimo lūžio diagnostikos."
  },
  assess: [
    {
      lead: "Atsineškite gydytojo išrašą",
      text: "ir naujausią kontrolės išvadą. Mums svarbu žinoti, kuris kaulas lūžęs, ar pažeistas sąnarinis paviršius, kaip lūžis stabilizuotas ir kokie judesiai leidžiami. Jei nurodymai neaiškūs, juos patiksliname prieš didindami krūvį."
    },
    {
      lead: "Pagal gijimo etapą vertiname",
      text: "tinimą, leidžiamus judesius, šlaunies raumenų darbą ir vaikščiojimą su pagalbine priemone. Aptariame namų aplinką: laiptus, vonios kambarį, atstumą iki darbo. Kartais pirmasis naudingas pokytis yra saugesnis atsistojimas nuo kėdės, o ne dar vienas sudėtingesnis pratimas."
    }
  ],
  services: [
    "kineziterapija",
    "sporto-reabilitacija",
    "pooperacine-reabilitacija",
    "manualine-terapija"
  ],
  treatment: {
    items: [],
    paragraphs: [
      "Reabilitacija gali prasidėti dar neleidus visu svoriu remtis koja. Tuo metu mokomės saugiai judėti su ramentais, atliekame leidžiamus pratimus ir stengiamės išsaugoti raumenų darbą. Kelio lenkimo nepradedame anksčiau, nei leidžia lūžio gydymo planas.",
      "Kai leidžiama daugiau judėti, palaipsniui grąžiname lenkimą ir tiesimą. Nereikia bandyti vienu užsiėmimu „atsigriebti“ už savaites įtvare. Pratimų apimtį deriname pagal savijautą ir tai, ar vėliau nepadidėja tinimas.",
      "Atramos didinimą siejame su gydytojo leidimu bei kontroliniais tyrimais. Mažesnis skausmas pats savaime nepatvirtina, kad lūžis jau atlaikys visą kūno svorį. Gavę leidimą, mokomės tolygiai perkelti svorį, vėliau dirbame su laiptais, ištverme ir konkrečiomis darbo užduotimis.",
      "Vieno gijimo termino visiems kelio lūžiams nėra. Atsistatymas dažnai trunka kelis mėnesius, o sudėtingesnių lūžių pasekmės gali būti juntamos ilgiau. Kaulo suaugimas ir ankstesnės jėgos susigrąžinimas nėra tas pats etapas. Vizitų dažnį parenkame pagal leidžiamą krūvį ir pažangą."
    ]
  },
  beforeVisit: [
    "Naudokite paskirtas pagalbines priemones ir laikykitės atramos apribojimų, net jei trumpam atsistoti neskauda. Neatlaisvinkite įtvaro vyrių ir nenuimkite gipso savarankiškai. Jei priemonė spaudžia ar su ja sunku saugiai judėti, kreipkitės į ją paskyrusią komandą.",
    "Namie pašalinkite daiktus, už kurių galima užkliūti, o dažniausiai naudojamus reikmenis laikykite pasiekiamai. Užsirašykite klausimus kitai gydytojo kontrolei: kiek galima remtis koja, kiek lenkti kelį ir kada peržiūrėti apribojimus. Tęskite jums jau paskirtus pratimus, o naujų nepradėkite vien pagal kito žmogaus patirtį."
  ],
  urgent: {
    note: "",
    items: [
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei po traumos yra atvira žaizda ties galimu lūžiu, ryški deformacija arba staiga stiprėja, nepraeina skausmas, ypač po gipsu ar kartu su įtemptu tinimu. Šąlanti, blyški pėda, naujas jutimo ar judesių praradimas taip pat reikalauja neatidėliotinos pagalbos; skambinkite 112, jei negalite saugiai pasiekti ligoninės.",
      "Staiga karštą, patinusį ir labai skausmingą kelį reikia skubiai įvertinti ligoninėje. Karščiavimas ar bloga savijauta sustiprina įtarimą dėl infekcijos, bet jos neatmeta ir normali temperatūra.",
      "Naujai patinus ar skaudant vienai blauzdai, kreipkitės į gydytoją tą pačią dieną. Prisidėjus dusuliui ar krūtinės skausmui, skambinkite 112."
    ]
  },
  team: {
    title: "Su kelio skausmu dirba",
    specialists: [
      "kotryna-kairyte",
      "erikas-jatkauskas",
      "mangirdas-kazacenko",
      "piotr-dubrovskij"
    ],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna, vyresniems pacientams po operacijų padeda Mangirdas."
  },
  faq: [
    {
      q: "Ar visi kelio lūžiai operuojami?",
      a: "Ne. Sprendimas priklauso nuo lūžio stabilumo, fragmentų padėties ir sąnario pažeidimo. Jį priima traumą gydantis ortopedas."
    },
    {
      q: "Ar galima pradėti, kol dar naudoju ramentus?",
      a: "Dažnai taip, jei gydytojas leidžia. Reabilitacija tuo metu pritaikoma apsaugos etapui ir nereiškia leidimo pilnai apkrauti koją."
    },
    {
      q: "Nuėmus įtvarą kelis beveik nesilenkia. Ar reikia lenkti jėga?",
      a: "Ne. Po nejudrumo sustingimas dažnas, tačiau judesių grąžinimą reikia suderinti su lūžio gijimu. Stiprus spaudimas nėra saugus savarankiškas sprendimas."
    },
    {
      q: "Kodėl dar šlubuoju, nors gydytojas sako, kad kaulas suaugo?",
      a: "Gali būti likęs raumenų silpnumas, tinimas ar judesių stoka. Tai įvertiname ir dirbame su eisena; didėjantis skausmas yra priežastis grįžti pas gydytoją."
    }
  ],
  reviews: "kelio-skausmas",
  sources: [
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Patellar (Kneecap) Fractures",
      url: "https://www.orthoinfo.org/bodypart/kneelower-leg/patellar-kneecap-fractures/"
    },
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Fractures of the Proximal Tibia (Shinbone)",
      url: "https://www.orthoinfo.org/bodypart/kneelower-leg/fractures-of-the-proximal-tibia-shinbone/"
    },
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Distal Femur (Thighbone) Fractures of the Knee",
      url: "https://www.orthoinfo.org/bodypart/kneelower-leg/distal-femur-thighbone-fractures-of-the-knee/"
    },
    {
      authors: "NHS.",
      title: "Compartment syndrome",
      url: "https://www.nhs.uk/conditions/compartment-syndrome/"
    },
    {
      authors: "NHS.",
      title: "Septic arthritis",
      url: "https://www.nhs.uk/conditions/septic-arthritis/"
    },
    {
      authors: "NHS.",
      title: "DVT (deep vein thrombosis)",
      url: "https://www.nhs.uk/conditions/deep-vein-thrombosis-dvt/"
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Kada skambinti: greitoji medicinos pagalba",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/"
    }
  ],
  reviewed: { by: "mangirdas-kazacenko", date: "2026-11-08" },
  related: [
    {
      href: "/ka-gydome/reabilitacija-po-kelio-luzio-operacijos",
      label: "Reabilitacija po kelio lūžio operacijos"
    },
    {
      href: "/paslaugos/kineziterapija",
      label: "Kineziterapija"
    },
    {
      href: "/ka-gydome/grizimas-i-sporta-po-traumos",
      label: "Grįžimas į sportą po traumos"
    }
  ]
};
