import type { ConditionPage } from "./types";

// Batch 10 (08.11.2026): Piotr's text, moved by scripts/import-condition-texts.mjs. Wording is his: do not retype.
export const kakloTraumaPoAvarijos: ConditionPage = {
  slug: "kaklo-trauma-po-avarijos",
  section: "kaklo-skausmas",
  navTitle: "Kaklo trauma po avarijos",
  meta: {
    title: "Kaklo trauma po avarijos ir reabilitacija | ReaMed",
    description: "Kaklo skausmas po eismo įvykio ar staigaus galvos judesio. Kada būtina gydytojo apžiūra ir kaip vyksta reabilitacija po traumos ReaMed Vilniuje."
  },
  conditionName: "Kaklo trauma po avarijos",
  hero: {
    h1: "Kaklo trauma po avarijos",
    lead: "Po eismo įvykio kaklą gali pradėti skaudėti iš karto arba tik po kelių valandų. Pirmiausia svarbu mediciniškai įvertinti traumą ir nustatyti, ar nereikia skubios pagalbos. Kai gydytojo įvertinimas leidžia pradėti reabilitaciją, ReaMed klinikoje Vilniuje padedame palaipsniui grįžti prie judėjimo, darbo ir įprastos veiklos pagal jūsų simptomus bei nustatytus apribojimus.",
    specialist: "piotr-dubrovskij"
  },
  about: {
    title: "Kas yra botaginė kaklo trauma?",
    paragraphs: [
      "Staigus galvos ir kaklo judesys avarijos metu gali sukelti vadinamąją botaginę traumą, angliškai „whiplash“. Po jos pasitaiko kaklo skausmas, sustingimas, sunkumas pasukti galvą, pečių srities skausmas ar galvos skausmas. Simptomų pradžia gali vėluoti.",
      "Tačiau skausmas po avarijos nėra automatiškai nesudėtinga botaginė trauma. Gydytojas turi įvertinti galimo lūžio, nestabilumo, nervinių struktūrų ar galvos pažeidimo požymius. Tyrimų poreikį lemia įvykio aplinkybės, simptomai ir apžiūra. Nereikia savarankiškai tikrinti, kiek laipsnių galite pasukti kaklą, kad nuspręstumėte, ar jis saugus.",
      "Toliau aprašytas aktyvus atsistatymas tinka tada, kai nenustatyta trauma, kuriai reikia kitokios apsaugos ar gydymo. Po lūžio, operacijos arba paskyrus imobilizaciją laikomasi konkrečių gydytojo nurodymų."
    ]
  },
  when: {
    items: [
      "Po medicininio įvertinimo lieka skausmas ar ribotas judrumas.",
      "Sunku sėdėti, dirbti, miegoti ar grįžti prie įprastos veiklos.",
      "Neaišku, kaip pradėti judėti ir ką daryti namuose.",
      "Baisu pasukti galvą arba po lengvo krūvio simptomai ryškiai padidėja.",
      "Per pirmą savaitę būklė negerėja arba atsistatymas vėliau sustoja."
    ],
    note: "Nauji ar stiprėjantys simptomai gali reikalauti pakartotinio gydytojo įvertinimo. Kineziterapijos vizitas neatstoja traumos ištyrimo."
  },
  assess: [
    {
      lead: "Atsineškite išrašą",
      text: "ir atliktų tyrimų aprašymus. Aptariame avarijos laiką, pirminį įvertinimą, paskirtus apribojimus ir simptomų kitimą. Svarbu pasakyti apie galvos smūgį, sąmonės sutrikimą, galvos svaigimą ar pykinimą: jų nepriskiriame vien kaklo raumenims."
    },
    {
      lead: "Kai saugu, vertiname kaklo judesius,",
      text: "pečių juostos funkciją, rankų jėgą ir jutimus. Taip pat aptariame miegą, kasdienę veiklą ir baimę judėti. Pažangai sekti naudojame skausmo bei funkcijos įvertinimus, prireikus, kaklo funkcijos klausimyną."
    },
    {
      lead: "Pasirenkame praktinius tikslus:",
      text: "patogiau persirengti, ilgiau dirbti ar apsidairyti be ryškaus skausmo. Pagal juos vertiname plano naudą."
    }
  ],
  services: [
    "manualine-terapija",
    "kineziterapija",
    "osteopatija",
    "gydomasis-masazas"
  ],
  treatment: {
    items: [
      {
        title: "Išlaikome įmanomą aktyvumą.",
        text: "Nekomplikuotos botaginės traumos atveju ilgas visiškas poilsis ir įprastos veiklos vengimas nėra pagrindinis gydymas. Padėdami judėti, pritaikome užduotis, kad krūvis būtų toleruojamas. Minkšti kaklo įtvarai įprastai nerekomenduojami, tačiau gydytojo paskirtos imobilizacijos savarankiškai nutraukti negalima."
      },
      {
        title: "Palaipsniui laviname judesį ir raumenų darbą.",
        text: "Pagal būklę įtraukiame kaklo judrumo, lengvo pasipriešinimo, koordinacijos bei ištvermės pratimus. Papildomas rankinis gydymas gali būti svarstomas tik kartu su aktyviu planu, stebint jo naudą."
      },
      {
        title: "Grįžtame prie kasdienio krūvio.",
        text: "Darbui ar sportui ruošiame mažesniais žingsniais: trumpesnė veikla, lengvesnė užduotis, vėliau ilgesnė trukmė ar didesnis pasipriešinimas. Nerimas po avarijos ir prastas miegas taip pat verti dėmesio; prireikus aptariame papildomą pagalbą."
      }
    ],
    paragraphs: [
      "Daugeliui simptomai sumažėja per du–tris mėnesius, tačiau daliai žmonių išlieka ilgiau. Gerėjimo tempas nevienodas. Vizitų dažnį deriname pagal funkciją ir savarankiškumą; jei pažangos nėra, peržiūrime planą ir gydytojo konsultacijos poreikį."
    ]
  },
  beforeVisit: [
    "Jei trauma dar neįvertinta, pirmiausia kreipkitės į medikus. Po įvertinimo laikykitės išrašo, paskirtų vaistų ir įtvaro nurodymų. Neprašykite stipriai masažuoti ar „trakštelėti“ kaklo ir nepradėkite intensyvaus tempimo.",
    "Kai judėti leista, išlaikykite lengvas kasdienes veiklas, paskirstykite buitinius darbus, darykite pertraukas. Grįžimą prie sunkesnio darbo ar sporto aptarkite individualiai. Jei nepatogu apsidairyti, svaigsta galva ar vaistai slopina reakciją, nevairuokite. Užsirašykite, kaip kinta simptomai ir kokias užduotis jau atliekate lengviau."
  ],
  urgent: {
    note: "",
    items: [
      "Skambinkite 112, jei po avarijos sutrinka sąmonė, kvėpavimas, atsiranda galūnių silpnumas, naujas ryškus tirpimas, sunku eiti arba kalbėti. Skubiai vertinamas ir stiprus kaklo skausmas po reikšmingo smūgio; nebandykite jo „išmankštinti“.",
      "Skambinkite 112, jei atsiranda neįprastai stiprus staigus galvos skausmas, dvejinimasis, veido asimetrija ar ryškus pusiausvyros sutrikimas. Nevairuokite patys.",
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei po galvos traumos prasidėjo vėmimas. Vykite su lydinčiu žmogumi; jei saugiai nuvykti neįmanoma, skambinkite 112.",
      "Kaklo sustingimas su karščiavimu ir stipriu galvos skausmu, ypač su šviesos baime ar sumišimu, taip pat reikalauja skubios pagalbos telefonu 112.",
      "Tą pačią dieną kreipkitės į gydytoją, jei skausmas ryškiai stiprėja, naujai dilgčioja ranka ar atsirado galvos svaigimas be aukščiau išvardytų skubių požymių."
    ]
  },
  team: {
    title: "Su kaklo skausmu dirba",
    specialists: [
      "piotr-dubrovskij",
      "mangirdas-kazacenko",
      "erikas-jatkauskas"
    ]
  },
  faq: [
    {
      q: "Kodėl skausmas prasidėjo tik kitą rytą?",
      a: "Po botaginės traumos simptomai gali atsirasti po kelių valandų. Vėlesnė pradžia neatstoja medicininio įvertinimo ir savaime neparodo traumos sunkumo."
    },
    {
      q: "Tyrimai geri, bet vis tiek skauda. Ar tai įmanoma?",
      a: "Taip. Rentgenograma neparodo visų minkštųjų audinių pažeidimų. Gydymą planuojame pagal ištyrimą ir funkciją, o naujiems simptomams atsiradus situaciją vertiname iš naujo."
    },
    {
      q: "Ar reikia laukti, kol visai nebeskaudės?",
      a: "Nekomplikuotos traumos atveju dažnai galima pradėti lengvą leistiną veiklą anksčiau. Krūvis turi būti pritaikytas; nauji neurologiniai simptomai nėra įprastas pratimo diskomfortas."
    },
    {
      q: "Ar baimė judėti reiškia, kad skausmas išgalvotas?",
      a: "Ne. Skausmas ir nerimas gali egzistuoti kartu. Po avarijos svarbu suprantamas paaiškinimas, pasiekiami judėjimo tikslai ir, jei reikia, psichologinė pagalba."
    }
  ],
  reviews: "kaklo-skausmas",
  sources: [
    {
      authors: "NHS.",
      title: "Whiplash",
      url: "https://www.nhs.uk/conditions/whiplash/"
    },
    {
      authors: "NICE.",
      title: "Spinal injury: assessment and initial management: recommendations",
      url: "https://www.nice.org.uk/guidance/ng41/chapter/recommendations"
    },
    {
      authors: "State Insurance Regulatory Authority (SIRA).",
      title: "Quick reference guide for the management of whiplash associated disorders",
      url: "https://www.sira.nsw.gov.au/resources-library/motor-accident-resources/publications/for-professionals/whiplash-resources/quick-reference-guide-for-the-management-of-whiplash-associated-disorders"
    },
    {
      authors: "Jull G, Sterling M; University of Queensland / Motor Accident Insurance Commission.",
      title: "Whiplash injury recovery: a self-help guide",
      year: 2019,
      url: "https://maic.qld.gov.au/wp-content/uploads/2020/01/MAIC-Whiplash-Booklet-2019.pdf"
    },
    {
      authors: "NHS.",
      title: "Head injury and concussion",
      url: "https://www.nhs.uk/conditions/head-injury-and-concussion/"
    },
    {
      authors: "NHS.",
      title: "Symptoms of a stroke",
      url: "https://www.nhs.uk/conditions/stroke/symptoms/"
    },
    {
      authors: "NHS.",
      title: "Meningitis",
      url: "https://www.nhs.uk/conditions/meningitis/"
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba: kada skambinti?",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/"
    },
    {
      authors: "NICE.",
      title: "Head injury: assessment and early management: recommendations",
      url: "https://www.nice.org.uk/guidance/ng232/chapter/Recommendations"
    }
  ],
  reviewed: { by: "erikas-jatkauskas", date: "2026-11-08" },
  related: [
    {
      href: "/ka-gydome/kaklo-skausmas",
      label: "Kaklo skausmas"
    },
    {
      href: "/ka-gydome/cervikalgija",
      label: "Cervikalgija"
    },
    {
      href: "/ka-gydome/kaklo-radikulopatija",
      label: "Kaklo radikulopatija"
    },
    {
      href: "/paslaugos/kineziterapija",
      label: "Kineziterapija"
    }
  ]
};
