export type Language = "lt" | "en";

// Home page and shared blocks (header, footer).
// Lithuanian copy is verbatim from docs/design/redesign-g/index.html; later changes by Piotr: hero title and lead,
// first visit statement, the services block and the specialists title.
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
      call: "Skambinti",
      book: "Registruotis vizitui",
    },
    hero: {
      title: "Kineziterapijos klinika Vilniuje",
      lead: "ReaMed klinikoje padedame žmonėms, kuriems skauda nugarą, kaklą ar sąnarius, taip pat atsigaunantiems po traumų ir operacijų. Jau per pirmąjį vizitą įvertiname jūsų būklę, sudarome planą ir pradedame gydymą.",
      cta: "Registruotis vizitui",
    },
    areas: {
      title: "Kada galime padėti?",
      register: "Registruotis",
      more: "Plačiau apie tai",
      items: [
        {
          slug: "nugaros-skausmas",
          title: "Nugaros skausmas",
          text: "Ūmus ar pasikartojantis skausmas, sustingimas, judesio ribotumas. Įvertiname problemos pobūdį ir parenkame tinkamiausią gydymo kryptį.",
        },
        {
          slug: "kaklo-skausmas",
          title: "Kaklo skausmas",
          text: "Įtampa, skausmas, judesio ribotumas ar pojūčiai, plintantys į petį ar ranką. Įvertiname ir parenkame tinkamiausią gydymo kryptį.",
        },
        {
          slug: "peties-problemos",
          title: "Peties problemos",
          text: "Skausmas, ribotas judesys, trauminė ar lėtinė būklė, trukdanti dirbti, sportuoti ir ilsėtis.",
        },
        {
          slug: "kelio-skausmas",
          title: "Kelio skausmas ir traumos",
          text: "Raiščių ir menisko problemos, perkrovos, atsistatymas po kelio operacijos.",
        },
        {
          slug: "sporto-traumos",
          title: "Sporto traumos",
          text: "Traumos, perkrovos ir pasikartojantis skausmas, kurie sustabdo treniruotes. Planas grįžti į krūvį saugiai.",
        },
        {
          slug: "atsistatymas-po-operaciju",
          title: "Atsistatymas po operacijų",
          text: "Saugiai atkuriame judrumą, jėgą ir pasitikėjimą judesiu pagal konkretų gijimo etapą.",
        },
        {
          slug: "plintantis-skausmas",
          title: "Plintantis skausmas ir tirpimas",
          text: "Skausmas, plintantis į ranką ar koją, tirpimas, dilgčiojimas. Įvertiname simptomų pobūdį ir parenkame kryptį.",
        },
        {
          slug: "tendinopatijos",
          title: "Tendinopatijos ir perkrovos",
          text: "Skausmas krūvio metu ar po jo, jautrumas, sumažėjusi apkrovos tolerancija.",
        },
      ],
    },
    services: {
      title: "Kineziterapija, manualinė terapija ir osteopatija",
      items: [
        { slug: "kineziterapija", title: "Kineziterapija", text: "Skausmui mažinti, judesio kokybei gerinti ir funkcijai atkurti." },
        { slug: "manualine-terapija", title: "Manualinė terapija", text: "Skausmui mažinti ir sąnarių judrumui gerinti." },
        { slug: "osteopatija", title: "Osteopatija", text: "Gydymas, orientuotas į kūno struktūrą ir funkcinius ryšius." },
        { slug: "gydomasis-masazas", title: "Gydomasis masažas", text: "Raumenų įtampai ir diskomfortui mažinti." },
        { slug: "sporto-reabilitacija", title: "Sporto reabilitacija", text: "Po traumų ir perkrovų, grįžtant į sportą." },
        { slug: "pooperacine-reabilitacija", title: "Pooperacinė reabilitacija", text: "Po ortopedinių ir stuburo operacijų, pagal gijimo etapą." },
      ],
    },
    team: {
      title: "ReaMed specialistai",
      lead: "Trys mūsų kineziterapeutai dirba su Lietuvos ledo ritulio ir futbolo rinktinėmis.",
    },
    visit: {
      title: "Pirmasis vizitas",
      statement: "Išklausome, ištiriame judesį ir paaiškiname, kas vyksta. Sudarome planą ir pradedame gydymą.",
      facts: ["60 min", "80 €"],
      cta: "Registruotis vizitui",
      prices: "Visos kainos ir paketai",
      photoAlt: "Kineziterapeutas dirba su paciente",
    },
    reviews: {
      title: "Atsiliepimai",
      stars: "5 iš 5 žvaigždučių",
      about: "apie",
      // `name`: the specialist after `about` (accusative in LT).
      // `sentences`: cut after whole sentences, never paraphrase.
      quotes: [
        { review: "dominykas-d-2026-10", specialist: "erikas-jatkauskas", name: "Eriką Jatkauską", sentences: 3 },
        { review: "ilja-c-2024", specialist: "kotryna-kairyte", name: "Kotryną Kairytę", sentences: 2 },
      ],
    },
    booking: {
      online: "Registruotis internetu",
      phone: "Telefonas",
      address: "Adresas",
      hours: "Darbo laikas",
      hoursValue: "I–V 8:00–19:00",
      email: "El. paštas",
    },
    footer: {
      menu: "Apačios meniu",
      privacy: "Privatumo politika",
      map: "Atidaryti žemėlapį",
      mapLabel: "Atidaryti ReaMed vietą Google Maps",
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
      call: "Call",
      book: "Book a visit",
    },
    hero: {
      title: "Physiotherapy clinic in Vilnius",
      lead: "At ReaMed we help people with back, neck or joint pain, and people recovering after injuries and surgery. Already at the first visit we assess your condition, make a plan and start treatment.",
      cta: "Book a visit",
    },
    areas: {
      title: "When can we help?",
      register: "Book a visit",
      more: "Read more",
      items: [
        {
          slug: "nugaros-skausmas",
          title: "Back pain",
          text: "Acute or recurring pain, stiffness, restricted movement. We assess the nature of the problem and choose the most suitable treatment direction.",
        },
        {
          slug: "kaklo-skausmas",
          title: "Neck pain",
          text: "Tension, pain, restricted movement or sensations spreading to the shoulder or arm. We assess and choose the most suitable treatment direction.",
        },
        {
          slug: "peties-problemos",
          title: "Shoulder problems",
          text: "Pain, restricted movement, an injury or a long-standing condition that gets in the way of work, sport and rest.",
        },
        {
          slug: "kelio-skausmas",
          title: "Knee pain and injuries",
          text: "Ligament and meniscus problems, overuse, recovery after knee surgery.",
        },
        {
          slug: "sporto-traumos",
          title: "Sports injuries",
          text: "Injuries, overuse and recurring pain that stop your training. A plan to return to load safely.",
        },
        {
          slug: "atsistatymas-po-operaciju",
          title: "Recovery after surgery",
          text: "We safely rebuild mobility, strength and confidence in movement, matched to your stage of healing.",
        },
        {
          slug: "plintantis-skausmas",
          title: "Radiating pain and numbness",
          text: "Pain spreading to the arm or leg, numbness, tingling. We assess the nature of the symptoms and choose a direction.",
        },
        {
          slug: "tendinopatijos",
          title: "Tendinopathies and overuse",
          text: "Pain during or after load, tenderness, lower tolerance to load.",
        },
      ],
    },
    services: {
      title: "Physiotherapy, manual therapy and osteopathy",
      items: [
        { slug: "kineziterapija", title: "Physiotherapy", text: "To reduce pain, improve movement quality and restore function." },
        { slug: "manualine-terapija", title: "Manual therapy", text: "To reduce pain and improve joint mobility." },
        { slug: "osteopatija", title: "Osteopathy", text: "Treatment focused on the body's structure and functional connections." },
        { slug: "gydomasis-masazas", title: "Therapeutic massage", text: "To ease muscle tension and discomfort." },
        { slug: "sporto-reabilitacija", title: "Sports rehabilitation", text: "After injuries and overload, on the way back to sport." },
        { slug: "pooperacine-reabilitacija", title: "Post-surgical rehabilitation", text: "After orthopaedic and spinal surgery, matched to the healing stage." },
      ],
    },
    team: {
      title: "ReaMed specialists",
      lead: "Three of our physiotherapists work with Lithuania's national ice hockey and football teams.",
    },
    visit: {
      title: "First visit",
      statement: "We listen, assess how you move and explain what is going on. We make a plan and start treatment.",
      facts: ["60 min", "€80"],
      cta: "Book a visit",
      prices: "All prices and packages",
      photoAlt: "A physiotherapist working with a patient",
    },
    reviews: {
      title: "Reviews",
      stars: "5 out of 5 stars",
      about: "about",
      quotes: [
        { review: "dominykas-d-2026-10", specialist: "erikas-jatkauskas", name: "Erikas Jatkauskas", sentences: 3 },
        { review: "ilja-c-2024", specialist: "kotryna-kairyte", name: "Kotryna Kairytė", sentences: 2 },
      ],
    },
    booking: {
      online: "Book online",
      phone: "Phone",
      address: "Address",
      hours: "Opening hours",
      hoursValue: "Mon–Fri 8:00–19:00",
      email: "Email",
    },
    footer: {
      menu: "Footer menu",
      privacy: "Privacy policy",
      map: "Open map",
      mapLabel: "Open ReaMed on Google Maps",
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
