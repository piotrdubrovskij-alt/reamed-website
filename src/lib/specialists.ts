export interface Specialist {
  slug: string;
  name: string;
  initials: string;
  photo: string | null;
  role: string;
  roleEn: string;
  tagline: string;
  taglineEn: string;
  about: string[];
  aboutEn: string[];
  expertise: string[];
  expertiseEn: string[];
  education: string[];
  educationEn: string[];
}

export const specialists: Specialist[] = [
  {
    slug: "piotr-dubrovskij",
    name: "Piotr Dubrovskij",
    initials: "PD",
    photo: "/specialist-piotr.jpg",
    role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas",
    roleEn: "Physiotherapist, osteopath, manual therapy specialist",
    tagline: "Stuburo ir kaklo problemos, sudėtingos judamojo aparato būklės, osteopatija",
    taglineEn: "Spine and neck conditions, complex musculoskeletal cases, osteopathy",
    about: [
      "Piotr specializuojasi sudėtingesnių judamojo aparato sutrikimų gydyme, derinant kineziterapiją, osteopatiją ir manualinę terapiją.",
      "Ypač dažnai dirba su stuburo ir kaklo skausmais, nervų dirginimo simptomais, pooperaciniu atsistatatymu bei ūmiomis būklėmis.",
      "Kiekvieno paciento atveju formuoja individualų gydymo planą, integruodamas kelis metodus pagal konkrečią būklę ir etapą.",
    ],
    aboutEn: [
      "Piotr specialises in complex musculoskeletal conditions, combining physiotherapy, osteopathy and manual therapy.",
      "He frequently works with spinal and neck pain, nerve irritation symptoms, post-surgical recovery and acute conditions.",
      "For each patient he builds an individual treatment plan, integrating multiple methods according to the specific condition and stage.",
    ],
    expertise: [
      "Stuburo ir kaklo skausmas",
      "Osteopatija",
      "Manualinė terapija",
      "Pooperacinė reabilitacija",
      "Nervų dirginimo simptomai",
      "Ūmios judamojo aparato būklės",
    ],
    expertiseEn: [
      "Spine and neck pain",
      "Osteopathy",
      "Manual therapy",
      "Post-surgical rehabilitation",
      "Nerve irritation symptoms",
      "Acute musculoskeletal conditions",
    ],
    education: [
      "Kineziterapijos bakalauras",
      "Osteopatijos magistras",
      "Manualinės terapijos specializacija",
    ],
    educationEn: [
      "Bachelor's in Physiotherapy",
      "Master's in Osteopathy",
      "Manual therapy specialisation",
    ],
  },
  {
    slug: "kotryna-kairyte",
    name: "Kotryna Kairytė",
    initials: "KK",
    photo: "/specialist-kotryna.jpg",
    role: "Kineziterapeutė",
    roleEn: "Physiotherapist",
    tagline: "Sporto traumos, ortopedinės problemos, grįžimas į sportą",
    taglineEn: "Sports injuries, orthopaedic problems, return to sport",
    about: [
      "Kotryna specializuojasi sporto traumų reabilitacijoje ir ortopedinių problemų gydyme.",
      "Dirba su pacientais, kurie nori saugiai ir veiksmingai grįžti į sportą ar aktyvų gyvenimą po traumos ar operacijos.",
      "Taiko šiuolaikines aktyviosios reabilitacijos metodikas, pritaikydama kiekvienam pacientui individualų atsistatymo planą.",
    ],
    aboutEn: [
      "Kotryna specialises in sports injury rehabilitation and orthopaedic problem treatment.",
      "She works with patients who want to safely and effectively return to sport or active life after injury or surgery.",
      "She applies modern active rehabilitation methods, tailoring an individual recovery plan for each patient.",
    ],
    expertise: [
      "Sporto traumos",
      "Pooperacinė reabilitacija",
      "Ortopedinės problemos",
      "Grįžimas į sportą",
      "Kelio ir peties sutrikimai",
      "Perkrovų sindromai",
    ],
    expertiseEn: [
      "Sports injuries",
      "Post-surgical rehabilitation",
      "Orthopaedic problems",
      "Return to sport",
      "Knee and shoulder conditions",
      "Overuse syndromes",
    ],
    education: [
      "Kineziterapijos bakalauras",
      "Sporto reabilitacijos specializacija",
    ],
    educationEn: [
      "Bachelor's in Physiotherapy",
      "Sports rehabilitation specialisation",
    ],
  },
  {
    slug: "erikas-jatkauskas",
    name: "Erikas Jatkauskas",
    initials: "EJ",
    photo: "/specialist-erikas.jpg",
    role: "Kineziterapeutas",
    roleEn: "Physiotherapist",
    tagline: "Kasdienės judamojo aparato problemos, skausmo mažinimas, funkcijos atkūrimas",
    taglineEn: "Everyday musculoskeletal problems, pain relief, function restoration",
    about: [
      "Erikas dirba su plačiu kasdienių judamojo aparato problemų spektru — nuo ūmių skausmų iki lėtinių perkrovos sindromų.",
      "Orientuojasi į aiškų problemos įvertinimą, skausmo mažinimą ir ilgalaikį funkcijos atkūrimą.",
      "Pacientams pateikia ne tik gydymą, bet ir suprantamus paaiškinimus apie problemos priežastis ir tolimesnius žingsnius.",
    ],
    aboutEn: [
      "Erikas works with a wide range of everyday musculoskeletal problems — from acute pain to chronic overuse syndromes.",
      "He focuses on clear problem assessment, pain reduction and long-term function restoration.",
      "He provides patients not only with treatment but also with understandable explanations of the problem's causes and next steps.",
    ],
    expertise: [
      "Nugaros ir kaklo skausmas",
      "Perkrovos sindromas",
      "Skausmo mažinimas",
      "Funkcinis atsistatymas",
      "Sąnarių problemos",
      "Raumenų sutrikimai",
    ],
    expertiseEn: [
      "Back and neck pain",
      "Overuse syndrome",
      "Pain reduction",
      "Functional recovery",
      "Joint problems",
      "Muscle disorders",
    ],
    education: [
      "Kineziterapijos bakalauras",
    ],
    educationEn: [
      "Bachelor's in Physiotherapy",
    ],
  },
  {
    slug: "mangirdas-kazacenko",
    name: "Mangirdas Kazačenko",
    initials: "MK",
    photo: "/specialist-mangirdas.jpg",
    role: "Kineziterapeutas, manualinės terapijos specialistas",
    roleEn: "Physiotherapist, manual therapy specialist",
    tagline: "Judamojo aparato problemos, manualinė terapija, funkcinis atsistatymas",
    taglineEn: "Musculoskeletal problems, manual therapy, functional recovery",
    about: [
      "Mangirdas derina kineziterapiją su manualinės terapijos technikomis, siekdamas efektyviau pašalinti skausmo priežastis ir atkurti judesio amplitudę.",
      "Dirba su nugaros, kaklo, sąnarių problemomis bei potrauminio atsistatymo atvejais.",
      "Kiekvienam pacientui parenka tinkamiausią metodų derinį pagal konkrečią būklę.",
    ],
    aboutEn: [
      "Mangirdas combines physiotherapy with manual therapy techniques to more effectively address the causes of pain and restore range of motion.",
      "He works with back, neck and joint problems as well as post-traumatic recovery cases.",
      "He selects the most suitable combination of methods for each patient according to their specific condition.",
    ],
    expertise: [
      "Manualinė terapija",
      "Nugaros ir kaklo problemos",
      "Sąnarių mobilizacija",
      "Funkcinis atsistatymas",
      "Potrauminė reabilitacija",
      "Raumenų ir fascijų darbas",
    ],
    expertiseEn: [
      "Manual therapy",
      "Back and neck problems",
      "Joint mobilisation",
      "Functional recovery",
      "Post-traumatic rehabilitation",
      "Muscle and fascia work",
    ],
    education: [
      "Kineziterapijos bakalauras",
      "Manualinės terapijos specializacija",
    ],
    educationEn: [
      "Bachelor's in Physiotherapy",
      "Manual therapy specialisation",
    ],
  },
];

export function getSpecialistBySlug(slug: string): Specialist | undefined {
  return specialists.find((s) => s.slug === slug);
}
