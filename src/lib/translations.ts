export type Language = "lt" | "en";

// Home page and shared blocks (header, footer).
// Lithuanian copy is verbatim from docs/design/redesign-g/index.html; the hero title and lead were changed later by Piotr.
// Reviews are referenced by id from src/data/reviews.ts and shown in their original language.

export const translations = {
  lt: {
    nav: {
      whatWeTreat: "Ką gydome",
      services: "Paslaugos",
      specialists: "Specialistai",
      prices: "Kainos",
      contacts: "Kontaktai",
    },
    header: {
      register: "Registruotis",
      home: "ReaMed, pradžia",
      mainMenu: "Pagrindinis meniu",
      mobileMenu: "Mobilusis meniu",
      openMenu: "Atidaryti meniu",
      closeMenu: "Uždaryti meniu",
      language: "Kalba",
    },
    hero: {
      title: "Kineziterapijos klinika Vilniuje",
      lead: "ReaMed klinikoje padedame žmonėms, kuriems skauda nugarą, kaklą ar sąnarius, taip pat atsigaunantiems po traumų ir operacijų. Jau per pirmąjį vizitą įvertiname jūsų būklę, sudarome planą ir pradedame gydymą.",
      cta: "Registruotis vizitui",
    },
    areas: {
      title: "Kur skauda?",
      register: "Registruotis",
      more: "Plačiau apie tai",
      servicesLabel: "Paslaugos:",
      reviewInOriginal: "",
      items: [
        {
          slug: "nugaros-skausmas",
          title: "Nugaros skausmas",
          text: "Ūmus ar pasikartojantis skausmas, sustingimas, judesio ribotumas. Įvertiname problemos pobūdį ir parenkame tinkamiausią gydymo kryptį.",
          review: "urte-2026-10",
          specialist: null,
        },
        {
          slug: "kaklo-skausmas",
          title: "Kaklo skausmas",
          text: "Įtampa, skausmas, judesio ribotumas ar pojūčiai, plintantys į petį ar ranką. Įvertiname ir parenkame tinkamiausią gydymo kryptį.",
          review: null,
          specialist: { slug: "piotr-dubrovskij", note: "stuburo ir kaklo problemos" },
        },
        {
          slug: "peties-problemos",
          title: "Peties problemos",
          text: "Skausmas, ribotas judesys, trauminė ar lėtinė būklė, trukdanti dirbti, sportuoti ir ilsėtis.",
          review: "roman-2025-12",
          specialist: null,
        },
        {
          slug: "kelio-skausmas",
          title: "Kelio skausmas ir traumos",
          text: "Raiščių ir menisko problemos, perkrovos, atsistatymas po kelio operacijos.",
          review: "vita-a-2026-07",
          specialist: null,
        },
        {
          slug: "sporto-traumos",
          title: "Sporto traumos",
          text: "Traumos, perkrovos ir pasikartojantis skausmas, kurie sustabdo treniruotes. Planas grįžti į krūvį saugiai.",
          review: "ramunas-k-2020",
          specialist: null,
        },
        {
          slug: "atsistatymas-po-operaciju",
          title: "Atsistatymas po operacijų",
          text: "Saugiai atkuriame judrumą, jėgą ir pasitikėjimą judesiu pagal konkretų gijimo etapą.",
          review: "tevas-2025",
          specialist: null,
        },
        {
          slug: "plintantis-skausmas",
          title: "Plintantis skausmas ir tirpimas",
          text: "Skausmas, plintantis į ranką ar koją, tirpimas, dilgčiojimas. Įvertiname simptomų pobūdį ir parenkame kryptį.",
          review: null,
          specialist: { slug: "piotr-dubrovskij", note: "nervų dirginimo simptomai" },
        },
        {
          slug: "tendinopatijos",
          title: "Tendinopatijos ir perkrovos",
          text: "Skausmas krūvio metu ar po jo, jautrumas, sumažėjusi apkrovos tolerancija.",
          review: null,
          specialist: { slug: "kotryna-kairyte", note: "perkrovų sindromai" },
        },
      ],
      services: [
        { slug: "kineziterapija", title: "Kineziterapija" },
        { slug: "manualine-terapija", title: "Manualinė terapija" },
        { slug: "osteopatija", title: "Osteopatija" },
        { slug: "gydomasis-masazas", title: "Gydomasis masažas" },
        { slug: "sporto-reabilitacija", title: "Sporto reabilitacija" },
        { slug: "pooperacine-reabilitacija", title: "Pooperacinė reabilitacija" },
      ],
    },
    team: {
      title: "Dirbame su Lietuvos rinktinėmis",
      lead: "Trys mūsų kineziterapeutai dirba su Lietuvos ledo ritulio ir futbolo rinktinėmis.",
      people: [
        {
          slug: "piotr-dubrovskij",
          fact: "Ledo ritulio rinktinių vyr. kineziterapeutas nuo 2012 m. Dėsto VU Medicinos fakultete.",
        },
        {
          slug: "kotryna-kairyte",
          fact: "Moterų futbolo rinktinė nuo 2022 m., ledo ritulio rinktinės nuo 2019 m.",
        },
        {
          slug: "erikas-jatkauskas",
          fact: "Jaunimo ledo ritulio rinktinė nuo 2022 m.",
        },
        {
          slug: "mangirdas-kazacenko",
          fact: "Kineziterapija, manualinė terapija ir masažas.",
        },
      ],
    },
    visit: {
      title: "Pirmasis vizitas",
      statement: "Išklausome, ištiriame judesį ir paaiškiname, kas vyksta. Išeinate su aiškiu gydymo planu.",
      facts: ["60 min", "80 €", "I–V 8–19 val."],
      prices: "Visos kainos ir paketai",
      photoAlt: "Kineziterapeutas dirba su paciente",
    },
    reviews: {
      title: "Atsiliepimai",
      stars: "5 iš 5 žvaigždučių",
      // `sentences`: cut after whole sentences, never paraphrase.
      quotes: [
        { review: "dominykas-d-2026-10", specialist: "erikas-jatkauskas", about: "apie Eriką Jatkauską", sentences: 3 },
        { review: "ilja-c-2024", specialist: "kotryna-kairyte", about: "apie Kotryną Kairytę", sentences: 2 },
      ],
    },
    booking: {
      title: "Registruokitės vizitui",
      online: "Registruotis internetu",
      address: "Adresas",
      hours: "Darbo laikas",
      hoursValue: "I–V 8:00–19:00",
      firstVisit: "Pirmasis vizitas",
      firstVisitValue: "60 min, 80 €",
    },
    footer: {
      menu: "Apačios meniu",
      privacy: "Privatumo politika",
      otherLanguage: "English",
      otherLanguageCode: "en",
      company: "UAB Modernios manualinės terapijos klinika",
    },
    contact: {
      address: "Olimpiečių g. 1A-7, Vilnius",
      phone: "+370 601 34304",
      phoneHref: "tel:+37060134304",
      email: "info@reamed.lt",
    },
  },
  en: {
    nav: {
      whatWeTreat: "What we treat",
      services: "Services",
      specialists: "Specialists",
      prices: "Prices",
      contacts: "Contacts",
    },
    header: {
      register: "Book a visit",
      home: "ReaMed, home",
      mainMenu: "Main menu",
      mobileMenu: "Mobile menu",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      language: "Language",
    },
    hero: {
      title: "Physiotherapy clinic in Vilnius",
      lead: "At ReaMed we help people with back, neck or joint pain, and people recovering after injuries and surgery. Already at the first visit we assess your condition, make a plan and start treatment.",
      cta: "Book a visit",
    },
    areas: {
      title: "Where does it hurt?",
      register: "Book a visit",
      more: "Read more",
      servicesLabel: "Services:",
      reviewInOriginal: "review in Lithuanian",
      items: [
        {
          slug: "nugaros-skausmas",
          title: "Back pain",
          text: "Acute or recurring pain, stiffness, restricted movement. We assess the nature of the problem and choose the most suitable treatment direction.",
          review: "urte-2026-10",
          specialist: null,
        },
        {
          slug: "kaklo-skausmas",
          title: "Neck pain",
          text: "Tension, pain, restricted movement or sensations spreading to the shoulder or arm. We assess and choose the most suitable treatment direction.",
          review: null,
          specialist: { slug: "piotr-dubrovskij", note: "spine and neck problems" },
        },
        {
          slug: "peties-problemos",
          title: "Shoulder problems",
          text: "Pain, restricted movement, an injury or a long-standing condition that gets in the way of work, sport and rest.",
          review: "roman-2025-12",
          specialist: null,
        },
        {
          slug: "kelio-skausmas",
          title: "Knee pain and injuries",
          text: "Ligament and meniscus problems, overuse, recovery after knee surgery.",
          review: "vita-a-2026-07",
          specialist: null,
        },
        {
          slug: "sporto-traumos",
          title: "Sports injuries",
          text: "Injuries, overuse and recurring pain that stop your training. A plan to return to load safely.",
          review: "ramunas-k-2020",
          specialist: null,
        },
        {
          slug: "atsistatymas-po-operaciju",
          title: "Recovery after surgery",
          text: "We safely rebuild mobility, strength and confidence in movement, matched to your stage of healing.",
          review: "tevas-2025",
          specialist: null,
        },
        {
          slug: "plintantis-skausmas",
          title: "Radiating pain and numbness",
          text: "Pain spreading to the arm or leg, numbness, tingling. We assess the nature of the symptoms and choose a direction.",
          review: null,
          specialist: { slug: "piotr-dubrovskij", note: "nerve irritation symptoms" },
        },
        {
          slug: "tendinopatijos",
          title: "Tendinopathies and overuse",
          text: "Pain during or after load, tenderness, lower tolerance to load.",
          review: null,
          specialist: { slug: "kotryna-kairyte", note: "overuse syndromes" },
        },
      ],
      services: [
        { slug: "kineziterapija", title: "Physiotherapy" },
        { slug: "manualine-terapija", title: "Manual therapy" },
        { slug: "osteopatija", title: "Osteopathy" },
        { slug: "gydomasis-masazas", title: "Therapeutic massage" },
        { slug: "sporto-reabilitacija", title: "Sports rehabilitation" },
        { slug: "pooperacine-reabilitacija", title: "Post-surgical rehabilitation" },
      ],
    },
    team: {
      title: "We work with Lithuania's national teams",
      lead: "Three of our physiotherapists work with Lithuania's national ice hockey and football teams.",
      people: [
        {
          slug: "piotr-dubrovskij",
          fact: "Head physiotherapist of the national ice hockey teams since 2012. Teaches at the Vilnius University Faculty of Medicine.",
        },
        {
          slug: "kotryna-kairyte",
          fact: "Women's national football team since 2022, ice hockey teams since 2019.",
        },
        {
          slug: "erikas-jatkauskas",
          fact: "Youth national ice hockey team since 2022.",
        },
        {
          slug: "mangirdas-kazacenko",
          fact: "Physiotherapy, manual therapy and massage.",
        },
      ],
    },
    visit: {
      title: "First visit",
      statement: "We listen, assess how you move and explain what is going on. You leave with a clear treatment plan.",
      facts: ["60 min", "€80", "Mon–Fri 8–19"],
      prices: "All prices and packages",
      photoAlt: "A physiotherapist working with a patient",
    },
    reviews: {
      title: "Reviews",
      stars: "5 out of 5 stars",
      quotes: [
        { review: "dominykas-d-2026-10", specialist: "erikas-jatkauskas", about: "about Erikas Jatkauskas", sentences: 3 },
        { review: "ilja-c-2024", specialist: "kotryna-kairyte", about: "about Kotryna Kairytė", sentences: 2 },
      ],
    },
    booking: {
      title: "Book a visit",
      online: "Book online",
      address: "Address",
      hours: "Opening hours",
      hoursValue: "Mon–Fri 8:00–19:00",
      firstVisit: "First visit",
      firstVisitValue: "60 min, €80",
    },
    footer: {
      menu: "Footer menu",
      privacy: "Privacy policy",
      otherLanguage: "Lietuviškai",
      otherLanguageCode: "lt",
      company: "UAB Modernios manualinės terapijos klinika",
    },
    contact: {
      address: "Olimpiečių g. 1A-7, Vilnius",
      phone: "+370 601 34304",
      phoneHref: "tel:+37060134304",
      email: "info@reamed.lt",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.lt;
