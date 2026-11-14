import type { ConditionPage } from "./types";

// Batch 11 (08.11.2026): Piotr's text, moved by scripts/import-condition-texts.mjs. Wording is his: do not retype.
export const acSanarioTrauma: ConditionPage = {
  slug: "ac-sanario-trauma",
  section: "peties-problemos",
  navTitle: "AC sąnario trauma",
  meta: {
    title: "AC sąnario trauma ir reabilitacija Vilniuje | ReaMed",
    description: "Skausmas peties viršuje po kritimo ar smūgio. AC sąnario traumos įvertinimas, saugus krūvio didinimas ir grįžimas į kasdienę veiklą ReaMed Vilniuje."
  },
  conditionName: "AC sąnario trauma",
  hero: {
    h1: "AC sąnario trauma",
    lead: "Po kritimo ant peties skauda jo viršų, sunku pakelti ranką ar ties raktikaulio galu atsirado iškilimas? Tai gali būti akromioklavikulinio, trumpiau AC, sąnario trauma. ReaMed klinikoje Vilniuje padedame atkurti judesius ir jėgą, kai trauma jau įvertinta gydytojo. Reabilitacijos planas priklauso nuo raiščių pažeidimo, sąnario stabilumo ir veiklos, į kurią norite grįžti.",
    specialist: "piotr-dubrovskij"
  },
  about: {
    title: "Kas pažeidžiama per AC sąnario traumą",
    paragraphs: [
      "AC sąnarys jungia išorinį raktikaulio galą su mentės petine atauga, akromionu. Kritus tiesiai ant peties ar patyrus smūgį, šią jungtį stabilizuojantys raiščiai gali būti patempti arba plyšti. Skausmas dažniausiai juntamas peties viršuje; gali būti sunku siekti skersai kūno ar gulėti ant pažeistos pusės.",
      "Ši trauma skiriasi nuo įprasto peties išnirimo: pastaruoju atveju žastikaulio galva pasislenka iš mentės sąnarinės duobės. AC traumos metu pažeidžiama raktikaulio ir petinės ataugos jungtis. Po stipraus smūgio kartu gali būti ir kitų pažeidimų, todėl vien iš iškilimo išvaizdos diagnozės nenustatome.",
      "Lengvesnės I–II tipo traumos dažniausiai gydomos be operacijos. III tipo traumai sprendimas individualus. Ryškesnis ar neįprastos krypties poslinkis, įskaitant IV–VI tipus, reikalauja ortopedo vertinimo ir operacinio gydymo svarstymo. Tipą nustato gydytojas pagal apžiūrą ir rentgenogramas."
    ]
  },
  when: {
    items: [
      "Trauma jau diagnozuota, bet neaišku, kada ir kaip pradėti pratimus.",
      "Skauda rengiantis, siekiant lentynos ar nešant daiktus.",
      "Po rankos prilaikymo įtvaru trūksta judrumo ir jėgos.",
      "Grįžus į darbą ar treniruotes peties viršų vėl skauda.",
      "Norite saugiai grįžti prie atsispaudimų, svorių ar kontaktinio sporto."
    ],
    note: "Jei po naujos traumos dar nebuvote apžiūrėti ir petys deformuotas, labai skauda ar negalite naudotis ranka, pirmiausia reikalingas medicininis įvertinimas."
  },
  assess: [
    {
      lead: "Aptariame traumos aplinkybes,",
      text: "nustatytą tipą ir gydytojo rekomendacijas. Atsineškite išrašą bei tyrimų atsakymus. Svarbu žinoti, ar nėra lūžio, ar paskirtas įtvaras ir kokie judesiai bei krūviai leidžiami."
    },
    {
      lead: "Įvertiname skausmo vietą, odos būklę,",
      text: "rankos judesius ir mentės darbą. Jėgą bei atramą ranka tikriname tada, kai tai saugu pagal gijimo etapą. Pažangą siejame su jums svarbiomis užduotimis: apsirengti, dirbti, pakelti daiktą ar atlikti sporto judesį. Jei simptomai neatitinka tikėtinos eigos, rekomenduojame gydytojo kontrolę."
    }
  ],
  services: [
    "kineziterapija",
    "manualine-terapija",
    "sporto-reabilitacija",
    "pooperacine-reabilitacija"
  ],
  treatment: {
    items: [
      {
        title: "Pradžioje mažiname dirginimą.",
        text: "Laikinai ribojame skausmingą kėlimą, sunkių daiktų nešimą ir atramą ranka. Įtvarą naudojame pagal paskyrimą; jo trukmė priklauso nuo traumos ir savijautos. Leidžiamus plaštakos, riešo ir alkūnės judesius išlaikome, o petį pradedame judinti palaipsniui."
      },
      {
        title: "Atkuriame judesius ir jėgą.",
        text: "Nuo patogių judesių pereiname prie pasipriešinimo pratimų. Laviname peties ir mentės raumenis, stebime reakciją po krūvio. Didesnės amplitudės, sunkesni nešimai ir pratimai remiantis rankomis grąžinami tada, kai ankstesnes užduotis atliekate pakankamai patogiai."
      },
      {
        title: "Ruošiame darbui ir sportui.",
        text: "Atskirai įvertiname darbą virš galvos, metimą, stūmimą ir galimo kontakto riziką. Grįžimą lemia ne vien kalendorius: svarbūs judesiai, jėga ir veiklos toleravimas. Po operacijos vadovaujamės chirurgo nustatytais apribojimais."
      }
    ],
    paragraphs: [
      "Lengvesnės traumos gali pradėti rimti per pirmąsias savaites, tačiau raiščių gijimas ir grįžimas prie didelių krūvių trunka ilgiau, neretai kelis mėnesius. Skausmo sumažėjimas nereiškia, kad raiščiai jau visiškai sugiję. Vizitų dažnį pritaikome prie pažangos.",
      "Esant III tipo traumai, operacija nėra automatinis pasirinkimas. Tyrimai neparodė aiškaus operacijos pranašumo visiems pacientams pagal pagrindinius funkcijos rodiklius. Sprendžiant svarbūs išliekantys simptomai, darbo ir sporto reikalavimai bei ortopedo vertinimas."
    ]
  },
  beforeVisit: [
    "Laikykitės gydytojo nurodymų, ranką prilaikykite patogiai. Skausmui trumpam sumažinti galima šaldyti per audinį, saugant odą; nešaldykite nejautrios vietos. Dėl tinkamų vaistų pasitarkite su vaistininku ar gydytoju.",
    "Kol krūvio ribos neaiškios, venkite sunkių nešimų, atsispaudimų ir skausmingo rankos tempimo skersai krūtinės. Nebandykite iškilimo įspausti ar „atstatyti“ patys. Su ranką ribojančiu įtvaru nevairuokite. Pasiruoškite klausimus apie darbą, miegą ir treniruotes."
  ],
  urgent: {
    note: "",
    items: [
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei kaulas stipriai tempia odą, atsirado žaizda virš deformacijos, ranka naujai tirpsta ar silpsta. Nelaukite kineziterapijos vizito.",
      "Skambinkite 112, jei plaštaka šalta, blyški ar mėlsta, po traumos trūksta oro, skauda krūtinę arba negalite saugiai pasiekti ligoninės. Tai gali būti rimtesnio pažeidimo požymiai.",
      "Nedelsdami vykite į skubiosios pagalbos skyrių, jei petys karštas, patinęs, stipriai skauda ir karščiuojate. Tai gali būti sąnario infekcijos požymiai.",
      "Tą pačią dieną kreipkitės į gydytoją, jei skausmas sparčiai stiprėja, nors laikotės paskirto režimo."
    ]
  },
  team: {
    title: "Su peties skausmu dirba",
    specialists: [
      "piotr-dubrovskij",
      "kotryna-kairyte",
      "mangirdas-kazacenko"
    ],
    note: "Peties skausmo sindromų atvejais dažniausiai dirba Piotr, po sporto traumų operacijų Kotryna."
  },
  faq: [
    {
      q: "Ar iškilimas virš peties turi išnykti?",
      a: "Nebūtinai. Jis gali išlikti ir tada, kai rankos funkcija gera. Sprendimą dėl tolesnio gydymo lemia ne vien išvaizda, bet ir skausmas bei veikla."
    },
    {
      q: "Kiek laiko nešioti įtvarą?",
      a: "Tiek, kiek rekomendavo traumą įvertinęs gydytojas. Vieno termino visoms AC traumoms nėra; po operacijos režimas gali būti kitoks."
    },
    {
      q: "Ar III tipas būtinai reiškia operaciją?",
      a: "Ne. Galimas gydymas be operacijos, tačiau pasirinkimą reikia aptarti su ortopedu. Išliekantis skausmas ar veiklos ribotumas yra priežastis peržiūrėti planą."
    },
    {
      q: "Kada vėl galima daryti atsispaudimus?",
      a: "Kai tam pasirengęs gyjantis petys. Pradedame nuo lengvesnės atramos ir didiname krūvį pagal toleravimą, judesius bei jėgą. Skausmingas pilnas atsispaudimas nėra tinkamas pirmasis patikrinimas."
    }
  ],
  reviews: "peties-problemos",
  sources: [
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Shoulder Separation",
      url: "https://www.orthoinfo.org/bodypart/shoulder/shoulder-separation/"
    },
    {
      authors: "AO Foundation, Surgery Reference.",
      title: "Ligament reconstruction: Introduction",
      url: "https://surgeryreference.aofoundation.org/orthopedic-trauma/adult-trauma/scapula/further-reading/ligament-reconstruction"
    },
    {
      authors: "Tauber M ir kt.",
      title: "Prospective Multicenter Randomized Controlled Trial of Surgical Versus Nonsurgical Treatment for Acute Rockwood Type 3 Acromioclavicular Injury",
      journal: "Orthopaedic Journal of Sports Medicine",
      year: 2023,
      url: "https://pubmed.ncbi.nlm.nih.gov/37655239/"
    },
    {
      authors: "Cambridge University Hospitals NHS Foundation Trust.",
      title: "Shoulder sprain (acromio clavicular joint)",
      url: "https://www.cuh.nhs.uk/patient-information/shoulder-sprain-acromio-clavicular-joint/"
    },
    {
      authors: "Gloucestershire Hospitals NHS Foundation Trust.",
      title: "Fractured clavicle and acromioclavicular (AC) joint injuries",
      url: "https://www.gloshospitals.nhs.uk/your-visit/patient-information-leaflets/fractured-clavicle-and-acromioclavicular-ac-joint-injuries/"
    },
    {
      authors: "Walsh J, Hartz C, Weinstock MB.",
      title: "Urgent Care Evaluation and Management of Acromioclavicular Separation",
      journal: "Journal of Urgent Care Medicine",
      year: 2026,
      url: "https://www.jucm.com/urgent-care-evaluation-and-management-of-acromioclavicular-separation/"
    },
    {
      authors: "Bendrasis pagalbos centras.",
      title: "Kada skambinti: greitoji medicinos pagalba",
      url: "https://112.lt/kada-skambinti-greitoji-medicinos-pagalba/"
    },
    {
      authors: "American Academy of Orthopaedic Surgeons.",
      title: "Shoulder Dislocation",
      url: "https://www.orthoinfo.org/bodypart/shoulder/dislocated-shoulder/"
    },
    {
      authors: "British Elbow & Shoulder Society / British Orthopaedic Association.",
      title: "Shoulder Pain: Diagnosis, Treatment and Referral Guidelines for Primary, Community and Intermediate Care",
      url: "https://bess.ac.uk/download/1421/primary-intermediate-care-guidelines/6238/shoulder-pain-primary-community-and-intermediate-care-guidelines.pdf"
    }
  ],
  reviewed: { by: "erikas-jatkauskas", date: "2026-11-08" },
  related: [
    {
      href: "/ka-gydome/peties-problemos",
      label: "Peties problemos"
    },
    {
      href: "/ka-gydome/reabilitacija-po-zastikaulio-luzio",
      label: "Reabilitacija po žastikaulio lūžio"
    },
    {
      href: "/ka-gydome/grizimas-i-sporta-po-traumos",
      label: "Grįžimas į sportą po traumos"
    }
  ]
};
