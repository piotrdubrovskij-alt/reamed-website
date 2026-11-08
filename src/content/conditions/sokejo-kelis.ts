import type { ConditionPage } from "./types";

// Batch 12 (08.11.2026): Piotr's text, moved by scripts/import-condition-texts.mjs. Wording is his: do not retype.
export const sokejoKelis: ConditionPage = {
  slug: "sokejo-kelis",
  section: "kelio-skausmas",
  navTitle: "Šokėjo kelis",
  meta: {
    title: "Šokėjo kelis ir jo gydymas Vilniuje | ReaMed",
    description: "Skausmas ties girnelės sausgysle šokinėjant ar sportuojant. Šokėjo kelio įvertinimas, krūvio pritaikymas ir laipsniškas grįžimas į sportą ReaMed Vilniuje."
  },
  conditionName: "Šokėjo kelis",
  hero: {
    h1: "Šokėjo kelis",
    lead: "Skausmas tiesiai po girnele, atsirandantis šokant, leidžiantis ant žemės ar bėgant, gali būti girnelės sausgyslės tendinopatijos požymis. Ši būklė dažnai vadinama šokėjo keliu, nors pasitaiko ir nešokinėjantiems žmonėms. ReaMed Vilniuje įvertiname, kas provokuoja skausmą, ir padedame suderinti treniruotes su palaipsniui didinamu sausgyslės krūviu. Svarbu, kad gerėtų ir savijauta, ir gebėjimas sportuoti.",
    specialist: "kotryna-kairyte"
  },
  about: {
    title: "Kodėl skauda po girnele",
    paragraphs: [
      "Girnelės sausgyslė jungia girnelę su blauzdikauliu ir perduoda šlaunies raumenų jėgą tiesiant kelį. Jai tenka didelis krūvis atsispiriant, stabdant ir nusileidžiant po šuolio. Kai krūvio padaugėja greičiau, nei sausgyslė spėja prie jo prisitaikyti, gali atsirasti skausmas ir sumažėti jos pakantumas fizinei veiklai.",
      "Dažniausiai galima gana tiksliai parodyti skaudamą vietą ties apatiniu girnelės kraštu. Pradžioje ją gali mausti tik treniruotės pradžioje ar po jos, vėliau skausmas ima trukdyti ir lipant laiptais. Vien tai, kad apšilus pasidaro lengviau, dar nereiškia, jog sausgyslė toleruoja visą treniruotės krūvį.",
      "Tendinopatija nėra vien uždegimas, kurį pakanka nuslopinti. Gydant svarbu palaipsniui atkurti gebėjimą atlaikyti krūvį."
    ]
  },
  when: {
    items: [],
    paragraphs: [
      "Verta pasikonsultuoti, kai skausmas kartojasi kelias treniruotes iš eilės, nepraeina sumažinus krūvį arba dėl jo keičiate bėgimą ar nusileidimą po šuolio. Nelaukite, kol skaudės kiekvieną žingsnį.",
      "Kreiptis naudinga ir tada, kai po poilsio jaučiatės geriau, bet grįžus į aikštelę viskas prasideda iš naujo. Tokiu atveju reikia įvertinti ir pratimus, ir bendrą savaitės krūvį. Kineziterapijos vizito pakanka pradėti vertinimą, jei nebuvo ūmios traumos ar toliau nurodytų pavojaus požymių."
    ]
  },
  assess: [
    {
      lead: "Pirmiausia išsiaiškiname, kur tiksliai skauda,",
      text: "kada prasidėjo simptomai ir kas pasikeitė treniruotėse. Apžiūrime kelį, vertiname judesius, šlaunies raumenų jėgą ir reakciją į pasirinktą krūvį. Pritūpimus ar šuolius tikriname tik tiek, kiek leidžia būklė."
    },
    {
      lead: "Skausmas aplink girnelę",
      text: "ar už jos gali būti patelofemoralinis skausmas, todėl vien vietos „kelio priekyje“ diagnozei neužtenka. Įvertiname ir požymius, dėl kurių reikėtų gydytojo. Echoskopija ar MRT nėra būtina sąlyga pirmajam vizitui; tyrimų poreikis priklauso nuo apžiūros, traumos aplinkybių ir simptomų eigos."
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
      "Pradžioje susitariame, kurį krūvį laikinai sumažinti. Dažnai pirmiausia tenka riboti šuolių skaičių, staigius pagreitėjimus ar sunkių treniruočių dažnį. Kartu parenkame jėgos pratimus, kuriuos sausgyslė šiuo metu toleruoja. Visiškas poilsis savaime neparuošia jos grįžti į sportą.",
      "Pratimai gali apimti raumens įtempimą išlaikant padėtį ir lėtus judesius su pasipriešinimu. Vėliau didiname svorį, įtraukiame atsispyrimus, nusileidimus ir konkrečios sporto šakos veiksmus. Šiuos pratimus deriname pagal jūsų galimybes ir treniruočių poreikius.",
      "Krūvį koreguojame pagal savijautą atliekant pratimus ir kitą dieną. Jei skausmas po treniruotės aiškiai sustiprėjo ir nenurimo, ankstesnė užduotis galėjo būti per sunki. Mažiname jos apimtį ar pasipriešinimą, o ne bandome skausmą „pralaužti“.",
      "Atsistatymas dažnai trunka kelis mėnesius. Į visą sportinį krūvį grįžtama, kai pakanka jėgos ir pakartotiniai sporto judesiai nebesukelia ryškaus paūmėjimo. Vien geresnė savaitė dar nėra tas pats, kas pasirengimas varžyboms."
    ]
  },
  beforeVisit: [
    "Laikinai sumažinkite labiausiai skausmą provokuojančią veiklą. Rinkitės judėjimą, po kurio kelis lieka ramus, ir nepradėkite iš karto kelių internete rastų pratimų programų. Jei net paprasti judesiai labai skausmingi, jų nebandykite įveikti per jėgą.",
    "Užsirašykite, kiek treniravotės ir kaip kelis jautėsi kitą rytą. Į vizitą atsineškite turimus tyrimus bei gydytojo išvadas. Naujų tyrimų vien dėl registracijos atlikti nereikia."
  ],
  urgent: {
    note: "",
    items: [
      "Jei šuolio ar traumos metu pajutote pokštelėjimą ir nebegalite aktyviai ištiesti kelio, tą pačią dieną vykite į skubios pagalbos ar traumatologijos skyrių. Tai gali būti sausgyslės plyšimas.",
      "Staiga labai skausmingas, karštas ir patinęs kelis taip pat turi būti įvertintas skubiai. Nelaukite planinio vizito, net jei nekarščiuojate. Jei po traumos pėda šąla, blykšta ar ryškiai tirpsta, reikia neatidėliotinos pagalbos; įtariant kraujotakos sutrikimą skambinkite 112."
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
      q: "Ar šokėjo kelis pasitaiko tik sportininkams?",
      a: "Ne. Pasikartojantys pritūpimai ar staigiai padidėjęs fizinis krūvis gali sudirginti sausgyslę ir nesportuojančiam žmogui. Vis dėlto ne kiekvienas skausmas po girnele yra tendinopatija."
    },
    {
      q: "Ar galima toliau žaisti krepšinį?",
      a: "Kartais galima išlaikyti dalį treniruočių, tačiau sumažinti šuolių, sprintų ir žaidimo laiką. Sprendžiame pagal simptomų stiprumą, jėgą ir kitos dienos reakciją."
    },
    {
      q: "Ar pratimas, po kurio iškart neskauda, jau išgydė sausgyslę?",
      a: "Ne. Trumpalaikis palengvėjimas neparodo, kad atsistatė gebėjimas pakartotinai šokti ar bėgti. Reikia nuosekliai didinamo krūvio, o vienas pratimas neprivalo iš karto sumažinti skausmo."
    },
    {
      q: "Ar paauglio skausmas po girnele gydomas taip pat?",
      a: "Ne automatiškai. Augant gali skaudėti sausgyslės prisitvirtinimo prie kaulo vietas, pavyzdžiui, sergant Osgood–Schlatter ar Sinding–Larsen–Johansson liga. Pasikartojantį paauglio skausmą pirmiausia reikia įvertinti, o suaugusiojo programos jam tiesiog perkelti nereikėtų."
    }
  ],
  reviews: "kelio-skausmas",
  sources: [
    {
      authors: "Swansea Bay University Health Board.",
      title: "Patella tendinopathy",
      url: "https://swanseabay.nhs.wales/hospitals/a-z-services/physiotherapy/musculoskeletal-physiotherapy/knee-pain/patella-tendinopathy/"
    },
    {
      authors: "Breda SJ ir kt.",
      title: "Effectiveness of progressive tendon-loading exercise therapy in patients with patellar tendinopathy: a randomised clinical trial",
      journal: "British Journal of Sports Medicine",
      year: 2021,
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8070614/"
    },
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Patellofemoral Pain Syndrome",
      url: "https://www.orthoinfo.org/bodypart/kneelower-leg/patellofemoral-pain-syndrome/"
    },
    {
      authors: "Kingston and Richmond NHS Foundation Trust.",
      title: "Patellar tendinopathy",
      url: "https://www.kingstonandrichmond.nhs.uk/patients-and-families/patient-leaflets/patellar-tendinopathy/"
    },
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Patellar Tendon Tear",
      url: "https://www.orthoinfo.org/bodypart/kneelower-leg/patellar-tendon-tear/"
    },
    {
      authors: "NHS.",
      title: "Septic arthritis",
      url: "https://www.nhs.uk/conditions/septic-arthritis/"
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba. Kada skambinti?",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/"
    },
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Overuse Injuries in Children",
      url: "https://www.orthoinfo.org/diseases--conditions/sports-injuries/overuse-injuries-in-children/"
    }
  ],
  reviewed: null,
  related: [
    {
      href: "/ka-gydome/patelofemoralinis-skausmas",
      label: "Patelofemoralinis skausmas"
    },
    {
      href: "/ka-gydome/kelio-skausmas",
      label: "Kelio skausmas"
    },
    {
      href: "/ka-gydome/tendinopatijos",
      label: "Tendinopatijos"
    },
    {
      href: "/ka-gydome/grizimas-i-sporta-po-traumos",
      label: "Grįžimas į sportą po traumos"
    }
  ]
};
