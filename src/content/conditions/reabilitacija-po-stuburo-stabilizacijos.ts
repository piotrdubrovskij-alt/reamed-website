import type { ConditionPage } from "./types";

// Batch 9 (08.11.2026): Piotr's text for «Po operacijų», laid out on template G with its wording kept.
// Section «Po operacijų», listed again in «Nugara». Sources as in his text: hospital pages by link, studies by DOI.
export const reabilitacijaPoStuburoStabilizacijos: ConditionPage = {
  slug: "reabilitacija-po-stuburo-stabilizacijos",
  section: "atsistatymas-po-operaciju",
  navTitle: "Po stuburo stabilizacijos",
  meta: {
    title: "Reabilitacija po stuburo stabilizacijos Vilniuje | ReaMed",
    description:
      "Atsistatymas po stuburo stabilizacijos ir spondilodezės. Saugus judėjimas, kasdienė veikla ir krūvio didinimas pagal chirurgo planą. Privati reabilitacija Vilniuje be siuntimo.",
  },
  conditionName: "Būklė po stuburo stabilizacijos operacijos",
  hero: {
    h1: "Reabilitacija po stuburo stabilizacijos",
    lead: "Po stuburo stabilizacijos svarbu atkurti kasdienį savarankiškumą ir kartu apsaugoti gyjančią operuotą sritį. Kai atliekamas slankstelių sujungimas, geresnė savijauta dar nereiškia, kad kaulai jau suaugo. ReaMed klinikoje Vilniuje reabilitaciją deriname su chirurgo planu: nuo saugaus vaikščiojimo ir buitinių veiksmų iki laipsniško jėgos, ištvermės ir darbingumo atkūrimo, atsižvelgdami į operacijos apimtį ir jūsų tikslus.",
    specialist: "mangirdas-kazacenko",
  },
  about: {
    title: "Kuo stabilizacija skiriasi nuo disko operacijos?",
    paragraphs: [
      "Stabilizacijos metu stuburo segmentas gali būti sutvirtinamas varžtais, strypais ar kitais implantais. Atliekant spondilodezę siekiama, kad du ar daugiau slankstelių suaugtų. Implantai padeda išlaikyti padėtį, kol vyksta kaulinis gijimas; jie nepakeičia šio proceso. Kartais kartu atlaisvinamas nervas, pašalinant jį spaudžiančius audinius.",
      "Todėl planas po vien disko dalies pašalinimo ir po stabilizacijos gali skirtis. Svarbu, kiek segmentų operuota, kokiu būdu prie jų prieita, kokia kaulų būklė ir ar buvo papildomų procedūrų. Šiame puslapyje daugiausia kalbama apie juosmeninę dalį; po kaklo, krūtininės dalies ar plačios deformacijos korekcijos reikia atskiro plano.",
    ],
  },
  when: {
    items: [
      "Operacija dar tik numatyta ir norite aptarti pasiruošimą kasdienybei namuose.",
      "Grįžote iš ligoninės, bet neaišku, kaip saugiai atsikelti, apsirengti ar naudotis laiptais.",
      "Gydytojas leido plėsti aktyvumą ir reikia individualios pratimų programos.",
      "Po pradinio gijimo liko silpnumas, greitas nuovargis ar judesio baimė.",
      "Ruošiatės grįžti į darbą ar norite žinoti, kokiam sporto krūviui jau esate pasirengę.",
    ],
    note: "Pirmoji konsultacija gali būti skirta nurodymams paaiškinti ir buitiniams veiksmams pritaikyti. Tai nebūtinai reiškia, kad jau laikas intensyviai mankštinti nugarą.",
  },
  assess: [
    {
      lead: "Atsineškite operacijos išrašą,",
      text: "chirurgo apribojimus ir turimą kontrolinio vizito išvadą. Patiksliname operuotą sritį, stabilizacijos tipą, ar atlikta spondilodezė, ar paskirtas korsetas ir kada numatyta kita kontrolė.",
    },
    {
      lead: "Vertiname,",
      text: "kaip atsistojate, vaikštote ir keičiate padėtį, kiek ištveriate kasdienį krūvį. Pagal būklę tikriname kojų jėgą, jutimą, pusiausvyrą, liemens kontrolę. Aptariame, kas trukdo savarankiškai gyventi: skausmas, nuovargis, baimė ar konkreti užduotis.",
    },
    {
      lead: "Kaulinio suaugimo nenustatome",
      text: "vien judesio testu ar pagal skausmo sumažėjimą. Jį ir leidimą didesniam krūviui vertina chirurgas, prireikus pasitelkdamas tyrimus.",
    },
  ],
  services: ["pooperacine-reabilitacija", "kineziterapija"],
  treatment: {
    items: [
      {
        title: "Ankstyvas etapas: judėti laikantis apsaugos režimo.",
        text: "Paprastai pradedama nuo ligoninėje išmokto atsikėlimo, ėjimo ir kasdienių veiksmų. Palaipsniui didiname toleruojamą aktyvumą, keičiame padėtį, planuojame poilsį. Tai skiriasi nuo pratimų su dideliu pasipriešinimu ar intensyvaus nugaros tempimo.",
      },
      {
        title: "Jėgos etapas: kai leidžia operavusi komanda.",
        text: "Pridedame liemens kontrolės, kojų ir klubų raumenų pratimus, pusiausvyrą bei ištvermę. Krūvis didėja tada, kai užduotis atliekama valdomai, toleruojama ir nepažeidžia chirurginių apribojimų. Interneto protokole nurodyta savaitė nėra leidimas automatiškai pereiti į kitą etapą.",
      },
      {
        title: "Grįžimas prie darbo ir laisvalaikio.",
        text: "Treniruojame reikalingus veiksmus: ilgesnį vaikščiojimą, atsistojimą, vėliau ir leistiną kėlimą ar nešimą. Grįžimą į darbą galima planuoti dalimis. Sporto pasirinkimą deriname su operacijos apimtimi, gijimu ir chirurgo leidimu.",
      },
    ],
    paragraphs: [
      "Kauliniam suaugimui reikia mėnesių. Aktyvumas ir savijauta gali gerėti anksčiau, tačiau sunkesnės veiklos atnaujinimas vertinamas atskirai. Vizitų skaičių nustatome pagal poreikį, pažangą ir gebėjimą saugiai tęsti programą namuose. Po didesnės apimties operacijos reabilitacija gali būti ilgesnė.",
    ],
  },
  beforeVisit: [
    "Laikykitės išraše nurodytų kėlimo, lenkimosi, sukimosi ir korseto naudojimo taisyklių. Jei jos neaiškios, patikslinkite su operavusia komanda.",
    "Kasdienius daiktus laikykite lengvai pasiekiamai. Iš anksto susitarkite dėl pagalbos apsiperkant ir atliekant sunkesnius namų darbus.",
    "Tęskite ligoninėje parodytą ėjimo ir judėjimo planą, derinkite aktyvumą su poilsiu. Ilgai neužsibūkite vienoje padėtyje.",
    "Nekeiskite vaistų ar jų dozių savarankiškai. Dėl papildomų nuskausminamųjų pasitarkite su gydytoju.",
    "Nepradėkite priverstinių nugaros tempimų ar manipuliacijų. Jei rūkote, aptarkite metimo pagalbą su gydytoju.",
  ],
  urgent: {
    note: "",
    items: [
      "Skambinkite 112, jeigu staiga atsiranda dusulys, krūtinės skausmas, alpimas arba nebegalite pajudinti kojos.",
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei naujai sutrinka šlapinimasis ar tuštinimosi kontrolė, atsiranda tarpvietės nejautra arba sparčiai didėja kojos silpnumas. Nelaukite reabilitacijos vizito; negalėdami saugiai nuvykti kvieskite pagalbą.",
      "Tą pačią dieną kreipkitės į chirurgą ar operavusį skyrių, jei žaizda pradeda šlapiuoti, prasiskiria, didėja paraudimas, karščiuojate ar skausmas nevaldomas paskirtu gydymu. Jei jų pasiekti nepavyksta, vykite į skubiosios pagalbos skyrių.",
    ],
  },
  team: {
    title: "Su atsistatymu po stuburo operacijos dirba",
    specialists: [
      "mangirdas-kazacenko",
      "piotr-dubrovskij",
      "kotryna-kairyte",
      "erikas-jatkauskas",
    ],
    note: "Vyresniems pacientams po operacijų dažniausiai padeda Mangirdas, nugaros ir išialgijos atvejais dirba Piotr.",
  },
  faq: [
    {
      q: "Jei yra varžtai, ar jau galima kelti sunkiau?",
      a: "Ne pagal vien šį faktą. Implantai stabilizuoja, bet po spondilodezės dar turi įvykti kaulinis suaugimas. Leidžiamą krūvį nustato chirurgas, įvertinęs jūsų operaciją ir gijimą.",
    },
    {
      q: "Ar reikės visą laiką nešioti korsetą?",
      a: "Korsetas skiriamas ne visiems. Jei paskirtas, laikykitės individualių dėvėjimo taisyklių. Jo atsisakymo nesprendžiame vien pagal tai, kad mažiau skauda.",
    },
    {
      q: "Kada pradėti kineziterapiją?",
      a: "Mokymas saugiai judėti paprastai prasideda ligoninėje. Platesnė stiprinimo programa pradedama vėliau, chirurgui leidus. Šie etapai neturi vienos visiems tinkamos pradžios datos.",
    },
    {
      q: "Ar galima „atlaisvinti“ sujungtus slankstelius?",
      a: "Spondilodezės tikslas yra panaikinti judesį pasirinktame segmente. Jo nemėginame grąžinti tempimu ar manipuliacijomis. Kasdienę funkciją geriname stiprindami ir mokydamiesi valdyti leistinus judesius.",
    },
    {
      q: "Ar galėsiu grįžti į sportą?",
      a: "Galimybės priklauso nuo operuotos srities, sujungtų segmentų ir sporto pobūdžio. Tikslą aptariame su chirurgu, o pasirengimą vertiname pagal jėgą, ištvermę bei konkrečių užduočių toleravimą.",
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
      title: "Spinal Fusion",
      url: "https://www.orthoinfo.org/bodypart/back/spinal-fusion/?topic=A00348",
    },
    {
      authors: "Royal National Orthopaedic Hospital.",
      title: "A Patient’s Guide to Low Back Fusion Surgery",
      year: 2024,
      url: "https://www.rnoh.nhs.uk/patients-and-visitors/patient-information-guides/low-back-fusion-surgery",
    },
    {
      authors: "Ohio State University Wexner Medical Center.",
      title:
        "TLIF/Posterior Lumbar Fusion Post-Operative Rehabilitation Guidelines",
      year: 2022,
      url: "https://wexnermedical.osu.edu/-/media/files/wexnermedical/patient-care/healthcare-services/neurological-institute/ohio-state-spine-care/lumbar-fusion-april-2022-branded.pdf?hash=01886DA468C30F939792BFA6A4BC1A15&rev=8a6d63e2f0894a9881a2313bac816993",
    },
    {
      authors: "Royal Devon University Healthcare.",
      title: "Lumbar Fusion: Post-operative Physiotherapy Advice",
      year: 2022,
      url: "https://www.royaldevon.nhs.uk/media/mv2dz2fb/patient-information-leaflet-lumbar-fusion-post-operative-physiotherapy-advice-rde-22-040-001.pdf",
    },
    {
      authors: "MyHealth Alberta.",
      title: "Lumbar Spinal Fusion: What to Expect at Home",
      year: 2024,
      url: "https://myhealth.alberta.ca/Health/aftercareinformation/pages/conditions.aspx?hwid=zx4099",
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Greitoji medicinos pagalba: kada skambinti 112?",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/",
    },
    {
      authors: "Cambridge University Hospitals.",
      title: "Post-operative recovery following lumbar decompression surgery",
      url: "https://www.cuh.nhs.uk/patient-information/post-operative-recovery-following-lumbar-decompression-surgery/",
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
    { href: "/paslaugos/kineziterapija", label: "Kineziterapija" },
    { href: "/ka-gydome/stuburo-isvarza", label: "Stuburo išvarža" },
  ],
};
