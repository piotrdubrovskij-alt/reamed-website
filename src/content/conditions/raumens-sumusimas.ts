import type { ConditionPage } from "./types";

// Batch 14 (08.11.2026): Piotr's text, moved by scripts/import-condition-texts.mjs. Wording is his: do not retype.
export const raumensSumusimas: ConditionPage = {
  slug: "raumens-sumusimas",
  section: "sporto-traumos",
  navTitle: "Raumens sumušimas",
  meta: {
    title: "Raumens sumušimas ir reabilitacija Vilniuje | ReaMed",
    description: "Skausmas, tinimas ar kraujosruva po smūgio į raumenį: kada reikia gydytojo ir kaip grįžti prie judėjimo. Įvertinimas ir reabilitacija ReaMed Vilniuje."
  },
  conditionName: "Raumens sumušimas",
  hero: {
    h1: "Raumens sumušimas",
    lead: "Smūgis į šlaunį per rungtynes ar stiprus atsitrenkimas į baldo kampą gali pažeisti raumenį, nors oda lieka sveika. Skausmas, tinimas ir sunkesnis judėjimas kartais vargina labiau nei pati mėlynė. ReaMed Vilniuje padedame įvertinti, kaip trauma riboja kasdienę veiklą, ir palaipsniui grąžinti krūvį. Jei požymiai kelia įtarimą dėl rimtesnio pažeidimo, pirmiausia rekomenduojame gydytojo apžiūrą.",
    specialist: "kotryna-kairyte"
  },
  about: {
    title: "Kas pažeidžiama sumušus raumenį",
    paragraphs: [
      "Sumušimas atsiranda nuo tiesioginio smūgio ar suspaudimo. Tai skiriasi nuo patempimo, kai raumuo pažeidžiamas pernelyg ištemptas ar staiga stipriai susitraukęs. Po stipraus smūgio gali būti sužalotas ne vien raumuo, todėl svarbu įvertinti ir galimą lūžį ar sąnario traumą.",
      "Pažeistoms smulkioms kraujagyslėms kraujuojant į audinius, atsiranda mėlynė. Kraujas gali susikaupti ir giliau raumenyje, sudarydamas hematomą. Tuomet juntamas patinimas ar guzas, raumenį sunkiau įtempti arba ištempti. Vien mėlynės spalva neparodo viso pažeidimo: svarbu, ar galite normaliai naudoti sužalotą ranką ar koją."
    ]
  },
  when: {
    items: [],
    paragraphs: [
      "Konsultacija naudinga, jei po sumušimo šlubuojate, negalite patogiai sulenkti greta esančio sąnario arba kasdieniai veiksmai vis dar skausmingi. Jei tinimas ar skausmas didėja, nereikėtų laukti suplanuoto kineziterapijos vizito: pirmiau reikalingas gydytojo įvertinimas.",
      "Po stipresnės traumos užsitęsęs skausmingas sukietėjimas ir mažėjantis judrumas taip pat verti pakartotinės apžiūros. Kartais pažeistame raumenyje susidaro kaulinio audinio; ši komplikacija vadinama osifikuojančiu miozitu. Tačiau ne kiekvienas guzas yra toks pakitimas, o diagnozės negalima nustatyti vien palietus."
    ]
  },
  assess: [
    {
      lead: "Išsiaiškiname, kur ir kaip",
      text: "pataikė smūgis, ar galėjote tęsti veiklą, kada atsirado tinimas. Pasakykite, jei vartojate kraujo krešėjimą mažinančius vaistus: tai svarbu vertinant kraujavimo riziką. Atsineškite jau atliktų tyrimų ar skubios pagalbos apžiūros išvadas."
    },
    {
      lead: "Vertiname judesius, kuriuos trauma apsunkina.",
      text: "Po šlaunies sumušimo tai gali būti ėjimas ir kelio lenkimas, po žasto traumos rankos kėlimas ar daikto laikymas. Pirmojo vizito tikslas nėra bet kokia kaina išgauti visą judesį ar patikrinti maksimalią jėgą."
    },
    {
      lead: "Jeigu kyla įtarimas",
      text: "dėl didesnės hematomos, kaulo ar kitų audinių pažeidimo, rekomenduojame gydytojo konsultaciją. Echoskopijos ar kitų tyrimų poreikį lemia apžiūra ir simptomų eiga. Kraujosruvos apimtis pirmomis valandomis gali būti dar neaiški, todėl ryškėjant tinimui ar skausmui gali reikėti pakartotinio įvertinimo."
    }
  ],
  services: [
    "sporto-reabilitacija",
    "kineziterapija",
    "pooperacine-reabilitacija",
    "gydomasis-masazas"
  ],
  treatment: {
    items: [],
    paragraphs: [
      "Iš pradžių svarbu apsaugoti sužalotą vietą nuo naujo smūgio ir sumažinti ją dirginantį krūvį. Tai nereiškia, kad kiekvieną sumušimą reikia ilgai laikyti visiškai nejudinamą. Leidžiamą veiklą deriname prie traumos sunkumo, tinimo ir gydytojo nustatytų apribojimų.",
      "Kai galima pradėti mankštą, parenkame lengvus judesius ir palaipsniui grąžiname raumens darbą. Užduotis keičiame pagal reakciją: jei po jų ryškiau tinsta ar sunkiau atlikti įprastus veiksmus, krūvis buvo per didelis. Namų programa turi būti suprantama, kad nereikėtų kiekvieną kartą spėlioti, kiek šiandien galima.",
      "Vėliau pereiname prie jūsų veiklai reikalingų užduočių. Sėdimam darbui ir grįžimui į kontaktinį sportą reikia skirtingo pasirengimo. Sportuojant svarbu atkurti judesį, jėgą ir ištvermę; kartais rekomenduojama papildomai apsaugoti buvusią smūgio vietą.",
      "Lengvesnis sumušimas gali nurimti gana greitai, o gilesniam pažeidimui prireikia savaičių ar ilgiau. Vienodo vizitų skaičiaus nėra. Pažangą vertiname pagal funkciją, ne vien praėjusį laiką ar išblukusią mėlynę. Jei būklė negerėja, peržiūrime planą ir sprendžiame dėl gydytojo konsultacijos."
    ]
  },
  beforeVisit: [
    "Nutraukite skausmą sukėlusią treniruotę. Pailsėdami galite patogiai pakelti sužalotą galūnę, o skausmui palengvinti trumpam pridėti per audinį suvyniotą šaltą kompresą. Ledo nedėkite tiesiai ant odos. Šaltis nėra leidimas nuskausminus sumuštą vietą tęsti žaidimą.",
    "Pirmomis dienomis venkite gilaus masažo, intensyvaus volavimo ir kaitinimo. Skausmingo raumens nereikia jėga tempti. Jei paskirta atramos apsauga ar įtvaras, laikykitės nurodymų; kitais atvejais palikite lengvą, patogų judėjimą, kuris nedidina simptomų.",
    "Dėl vaistų nuo skausmo pasitarkite su gydytoju ar vaistininku, ypač jei vartojate kitus vaistus. Nuskausminimo nereikėtų naudoti tam, kad galėtumėte atlikti įprastą krūvį per traumą."
  ],
  urgent: {
    note: "",
    items: [
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei skausmas staiga labai sustiprėjo, audiniai sparčiai tinsta ir įsitempia arba atsirado tirpimas ar silpnumas. Tai gali būti pavojingai padidėjusio slėgio raumenyse požymiai. Nelaukite, kol pasirodys visi simptomai.",
      "Skubi apžiūra būtina ir esant deformacijai, naujam jutimo praradimui ar šąlančiai, išblyškusiai galūnei. Dėl sunkios traumos, dusulio ar alpimo skambinkite 112.",
      "Jei vartojate kraujo krešėjimą mažinančius vaistus ir po smūgio atsirado didelė ar sparčiai didėjanti kraujosruva, nedelsdami kreipkitės medicininės pagalbos. Nelaukite, ar ji pati sumažės."
    ]
  },
  team: {
    title: "Su sporto traumomis dirba",
    specialists: [
      "kotryna-kairyte",
      "erikas-jatkauskas",
      "edmundas-zlatkus",
      "piotr-dubrovskij"
    ],
    note: "Po sporto traumų operacijų dažniausiai dirba Kotryna."
  },
  faq: [
    {
      q: "Ar išnykusi mėlynė reiškia, kad raumuo jau pasirengęs sportui?",
      a: "Ne visada. Odos spalva neparodo, ar atsikūrė jėga ir judesių toleravimas. Grįžimą vertiname pagal tai, kaip atliekate konkretaus sporto veiksmus."
    },
    {
      q: "Ar hematomą reikia išmasažuoti?",
      a: "Ne. Ypač anksti po traumos stiprus masažas gali dirginti pažeistus audinius. Hematomos vertinimas ir sprendimas dėl jos gydymo priklauso gydytojui."
    },
    {
      q: "Ar galima namie pradurti po sumušimo atsiradusį guzą?",
      a: "Ne. Nebandykite jo pradurti ar išspausti. Jei guzas didėja, yra skausmingas ar trukdo judėti, kreipkitės į gydytoją."
    },
    {
      q: "Ką daryti, jei mėlynės atsiranda be jokio smūgio?",
      a: "Pasitarkite su gydytoju, ypač jei jos kartojasi arba kartu kraujuoja iš kitų vietų. Tokios mėlynės neturėtų būti laikomos įprastu raumens sumušimu."
    }
  ],
  reviews: "sporto-traumos",
  sources: [
    {
      authors: "AAOS OrthoInfo.",
      title: "Muscle Contusion (Bruise)",
      url: "https://www.orthoinfo.org/diseases--conditions/sports-injuries/muscle-contusion-bruise/"
    },
    {
      authors: "MedlinePlus.",
      title: "Bruise",
      url: "https://medlineplus.gov/ency/article/007213.htm"
    },
    {
      authors: "Sherwood Forest Hospitals NHS.",
      title: "Soft tissue injury: early management",
      year: 2025,
      url: "https://www.sfh-tr.nhs.uk/media/wbfam3lz/pil202509-03-stiem-soft-tissue-injury-early-management.pdf"
    },
    {
      authors: "Hotfiel T. ir kt.",
      title: "Nonoperative treatment of muscle injuries: recommendations from the GOTS expert meeting",
      journal: "Journal of Experimental Orthopaedics",
      year: 2018,
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6013414/"
    },
    {
      authors: "NHS.",
      title: "Anticoagulant medicines: side effects",
      url: "https://www.nhs.uk/medicines/anticoagulants/side-effects/"
    },
    {
      authors: "NHS.",
      title: "Compartment syndrome",
      url: "https://www.nhs.uk/conditions/compartment-syndrome/"
    },
    {
      authors: "NHS.",
      title: "Sprains and strains",
      url: "https://www.nhs.uk/conditions/sprains-and-strains/"
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba: kada skambinti 112",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/"
    }
  ],
  reviewed: null,
  related: [
    {
      href: "/ka-gydome/sporto-traumos",
      label: "Sporto traumos"
    },
    {
      href: "/ka-gydome/raumenu-patempimas",
      label: "Raumenų patempimas"
    },
    {
      href: "/ka-gydome/grizimas-i-sporta-po-traumos",
      label: "Grįžimas į sportą po traumos"
    }
  ]
};
