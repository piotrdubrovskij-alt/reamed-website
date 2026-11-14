import type { ConditionPage } from "./types";

// Batch 13 (08.11.2026): Piotr's text, moved by scripts/import-condition-texts.mjs. Wording is his: do not retype.
export const piriformioSindromas: ConditionPage = {
  slug: "piriformio-sindromas",
  section: "klubo-ir-kirksnies-skausmas",
  navTitle: "Piriformio sindromas",
  meta: {
    title: "Piriformio sindromas ir sėdmens skausmas | ReaMed",
    description: "Skauda sėdmenį, skausmas plinta į koją? Piriformio sindromo ir kitų priežasčių įvertinimas, judėjimo pritaikymas bei kineziterapija ReaMed Vilniuje."
  },
  conditionName: "Piriformio sindromas",
  hero: {
    h1: "Piriformio sindromas",
    lead: "Ilgiau sėdint ima skaudėti giliai sėdmenyje, o kartais skausmas ar dilgčiojimas nusileidžia į koją. Internete tokie simptomai dažnai pavadinami piriformio sindromu, tačiau priežastis gali būti ir kita. ReaMed Vilniuje vertiname ne tik skausmingą vietą, bet ir juosmens, klubo bei nervų funkciją. Tai padeda pasirinkti tinkamą pagalbą ir nepradėti nuo netinkančio tempimo.",
    specialist: "mangirdas-kazacenko"
  },
  about: {
    title: "Kas vadinama piriformio sindromu",
    paragraphs: [
      "Piriformis, arba kriaušinis raumuo, yra giliai sėdmens srityje. Greta jo eina sėdimasis nervas. Piriformio sindromu vadinama būklė, kai šio raumens srityje dirginamas ar spaudžiamas nervas ir atsiranda sėdmens bei į koją plintančių simptomų. Vis dėlto vien sėdmens skausmas tokios diagnozės nepatvirtina.",
      "Šiandien vartojamas ir platesnis terminas: gilusis sėdmens sindromas. Jis apima ne tik kriaušinio raumens, bet ir kitų giliųjų struktūrų srityje galintį atsirasti sėdimojo nervo dirginimą ar įstrigimą. Šių būklių diagnostika nėra paprasta, o tyrimų kokybė nevienoda.",
      "Panašius pojūčius gali sukelti nervo šaknelės dirginimas juosmenyje, klubo ar aplinkinių sausgyslių problemos. Todėl nereikėtų iš anksto nuspręsti, kad nervą būtinai spaudžia vienas raumuo."
    ]
  },
  when: {
    items: [],
    paragraphs: [
      "Verta pasikonsultuoti, jei sėdmens skausmas kartojasi sėdint, vairuojant, bėgant ar lipant laiptais ir trukdo įprastai veiklai. Pasakykite, jei skausmas leidžiasi žemyn, atsiranda dilgčiojimas, tirpimas ar pasikeičia kojos jėga.",
      "Jeigu po sumažinto krūvio simptomai neslūgsta, nereikia savaites vis stipriau masažuoti tos pačios vietos. Skausmas po traumos, nuolatinis naktinis maudimas ar bloga bendra savijauta yra priežastis kreiptis ir į gydytoją."
    ]
  },
  assess: [
    {
      lead: "Klausiame apie simptomų pradžią,",
      text: "jų plitimą, sėdėjimo bei fizinio krūvio poveikį. Svarbu, ar keičiasi pojūčiai judinant juosmenį, ar buvo trauma, kokie gydymo būdai jau išbandyti."
    },
    {
      lead: "Vertiname juosmens ir klubo judesius,",
      text: "raumenų jėgą, jutimus bei kitus nervų funkcijos požymius. Pasirinkti klubo testai gali padėti susidaryti vaizdą, bet vien skausmingas paspaudimas ar tempimas nepatvirtina piriformio sindromo. Net tyrimuose aprašyti testai vertinti atrinktose pacientų grupėse, todėl jų rezultatus reikia interpretuoti platesniame kontekste."
    },
    {
      lead: "Jei požymiai kelia įtarimą",
      text: "dėl nervo pažeidimo ar kitos ligos, rekomenduojame gydytojo konsultaciją. MRT ar kiti tyrimai gali būti reikalingi priežasčiai patikslinti, tačiau nėra vieno tyrimo, kuris visais atvejais patvirtintų šį sindromą."
    }
  ],
  services: [
    "kineziterapija",
    "manualine-terapija",
    "sporto-reabilitacija",
    "pooperacine-reabilitacija"
  ],
  treatment: {
    items: [],
    paragraphs: [
      "Jei po įvertinimo tinka kineziterapija, pradedame nuo toleruojamo judėjimo ir provokuojančių krūvių koregavimo. Vienam svarbiau pertraukti ilgą sėdėjimą, kitam sumažinti bėgimo apimtį ar laikinai pakeisti pratimą. Visiškas nejudėjimas paprastai nėra naudingas.",
      "Pagal galimybes įtraukiame klubo ir liemens jėgos, judesio kontrolės bei judrumo pratimus. Tempimas parenkamas individualiai: jis neturėtų didinti į koją plintančio skausmo ar tirpimo. Tikslas: kad galėtumėte daugiau ir patogiau judėti, o ne kuo stipriau „ištempti nervą“.",
      "Pratimų programos tiriamos, tačiau nedideli tyrimai neleidžia pažadėti vieno geriausio metodo ar tikslios gydymo trukmės. Pavyzdžiui, 2023 m. lyginamajame tyrime pagerėjo pratimų programą atlikusių pacientų savijauta, bet tyrimo dydis ir grupių skirtumai riboja išvadas.",
      "Pokyčius vertiname pagal sėdėjimo, ėjimo ar sportavimo toleranciją, jėgą ir simptomų plitimą. Gydymas gali užtrukti savaites ar mėnesius. Jei pažangos nėra arba atsiranda naujas tirpimas ar silpnumas, priežastį vertiname iš naujo. Gydytojas prireikus aptaria kitus gydymo būdus; operacija nėra įprastas pirmasis žingsnis."
    ]
  },
  beforeVisit: [
    "Keiskite sėdėjimo padėtį ir darykite judėjimo pertraukas pagal savijautą. Nesėdėkite ant storos piniginės ar kito daikto, spaudžiančio sėdmenį. Rinkitės trumpesnius pasivaikščiojimus, jei jie nedidina simptomų.",
    "Nespauskite skausmingos vietos kietu kamuoliuku, jei nuo to skausmas šauna į koją ar stiprėja tirpimas. Nutraukite ir tokį tempimą. Užsirašykite, kiek laiko galite sėdėti ar eiti iki simptomų, kad per vizitą galėtume aptarti konkrečius pokyčius."
  ],
  urgent: {
    note: "",
    items: [
      "Nedelsdami vykite į skubios pagalbos skyrių, jei naujai nutirpo tarpvietė, tapo sunku pradėti šlapintis, nepavyksta ištuštinti šlapimo pūslės arba praradote šlapimo ar išmatų kontrolę. Tai gali būti skubiai gydytino nervų suspaudimo požymiai. Nelaukite, kol atsiras visi išvardyti simptomai.",
      "Skubiai vykite į ligoninę ir dėl staigaus ar greitai didėjančio kojos silpnumo, ypač jei nebevaldote pėdos ir už jos kliūvate. Staigus stiprus klubo skausmas su labai ribotu judėjimu, patinimu ar karščiu sąnario srityje taip pat reikalauja įvertinimo skubios pagalbos skyriuje tą pačią dieną, net jei nekarščiuojate. Sunkios būklės atveju skambinkite 112."
    ]
  },
  team: {
    title: "Su klubo ir kirkšnies skausmu dirba",
    specialists: [
      "mangirdas-kazacenko",
      "kotryna-kairyte",
      "erikas-jatkauskas",
      "piotr-dubrovskij"
    ],
    note: "Vyresniems pacientams ir po operacijų dažniausiai padeda Mangirdas, sportininkams Kotryna."
  },
  faq: [
    {
      q: "Ar kiekvienas skausmas sėdmenyje yra piriformio sindromas?",
      a: "Ne. Vertiname ir juosmenį, klubo sąnarį bei aplinkinius audinius. Skausmo vieta padeda orientuotis, bet nepasako visos priežasties."
    },
    {
      q: "Ar MRT gali tiksliai patvirtinti diagnozę?",
      a: "Jis gali padėti nustatyti kai kurias priežastis ar atmesti įtariamus pakitimus. Tačiau vieno universalaus piriformio sindromo patvirtinimo tyrimo nėra."
    },
    {
      q: "Ar reikia kasdien tempti sėdmenį?",
      a: "Ne kiekvienam. Jei tempimas palengvina simptomus, jis gali būti programos dalis. Jeigu skausmas plinta toliau į koją, tempimą sustabdykite ir aptarkite su specialistu."
    },
    {
      q: "Kada galima vėl bėgti?",
      a: "Kai kasdienis krūvis toleruojamas, simptomai valdomi ir nėra progresuojančių nervų funkcijos sutrikimų. Bėgimą grąžiname mažomis dalimis, stebėdami reakciją, o ne pagal vieną visiems nustatytą datą."
    }
  ],
  sources: [
    {
      authors: "Kizaki K ir kt.",
      title: "Deep gluteal syndrome is defined as a non-discogenic sciatic nerve disorder with entrapment in the deep gluteal space: a systematic review",
      journal: "Knee Surgery, Sports Traumatology, Arthroscopy",
      year: 2020,
      url: "https://pubmed.ncbi.nlm.nih.gov/32246173/"
    },
    {
      authors: "Healthdirect Australia.",
      title: "Piriformis syndrome",
      url: "https://www.healthdirect.gov.au/conditions/joint-and-muscle-diseases/piriformis-syndrome"
    },
    {
      authors: "MedlinePlus.",
      title: "Piriformis syndrome",
      url: "https://www.medlineplus.gov/ency/patientinstructions/000776.htm"
    },
    {
      authors: "Martin HD ir kt.",
      title: "Diagnostic accuracy of clinical tests for sciatic nerve entrapment in the gluteal region",
      journal: "Knee Surgery, Sports Traumatology, Arthroscopy",
      year: 2014,
      url: "https://pubmed.ncbi.nlm.nih.gov/24217716/"
    },
    {
      authors: "Guner D, Ozcete ZA.",
      title: "Evaluation of the Efficacy of Ultrasound-Guided Dry Needling Therapy and Exercise in Piriformis Muscle Syndrome",
      journal: "Cureus",
      year: 2023,
      url: "https://pubmed.ncbi.nlm.nih.gov/37731410/"
    },
    {
      authors: "NHS.",
      title: "Sciatica",
      url: "https://www.nhs.uk/conditions/sciatica/"
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
    }
  ],
  reviewed: { by: "piotr-dubrovskij", date: "2026-11-08" },
  related: [
    {
      href: "/ka-gydome/klubo-ir-kirksnies-skausmas",
      label: "Klubo ir kirkšnies skausmas"
    },
    {
      href: "/ka-gydome/isialgija-radikulopatija",
      label: "Išialgija ir radikulopatija"
    },
    {
      href: "/ka-gydome/soninis-klubo-skausmas",
      label: "Šoninis klubo skausmas"
    },
    {
      href: "/ka-gydome/grizimas-i-sporta-po-traumos",
      label: "Grįžimas į sportą po traumos"
    }
  ]
};
