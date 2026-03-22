"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── BILINGUAL CONTENT ───────────────────────────────────────── */
const content = {
  lt: {
    breadcrumb: "← Paslaugos",
    serviceLabel: "Paslauga",
    title: "Kineziterapija Vilniuje",
    subtitle: "Individualiai pritaikytas gydymas, padedantis mažinti skausmą, gerinti judesių kokybę ir atkurti funkciją — po traumų, operacijų ar dėl lėtinių judamojo aparato problemų.",
    trustPoints: ["Individualus įvertinimas", "Gydymo planas pagal jūsų būklę", "Suaugusiesiems ir sportuojantiems"],
    ctaRegister: "Registruotis vizitui",
    ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" },
      { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "pirmasis-vizitas", label: "Pirmasis vizitas" },
      { id: "gydymo-planas", label: "Gydymo planas" },
      { id: "kainos", label: "Kainos" },
      { id: "specialistai", label: "Specialistai" },
      { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie paslaugą",
    aboutTitle: "Kas yra kineziterapija?",
    aboutText: [
      "Kineziterapija Vilniuje — tai ne tik pratimai. Tai individualiai pritaikytas judėjimo gydymas, kurio tikslas — rasti problemos priežastį ir sistemingai ją šalinti.",
      "Kiekvieno paciento programa sudaroma atskirai: pagal būklę, judesio apribojimus, skausmo kilmę ir gyvenimo aktyvumą. Programa gali keistis priklausomai nuo to, kaip progresuoja gydymas.",
      "Tikslas — sumažinti skausmą, atkurti funkciją ir padėti grįžti prie to, ką mėgstate: darbo, sporto ar kasdienės veiklos. Kineziterapija nugaros skausmui, po traumos ar operacijos — visa tai yra mūsų kasdienė praktika.",
    ],
    benefits: [
      { icon: "🎯", title: "Individualus planas", text: "Kiekvienas vizitas ir programa sudaromi pagal jūsų konkrečią būklę." },
      { icon: "🔍", title: "Priežasties paieška", text: "Vertiname ne tik skausmą, bet ir judesio kokybę bei raumenų darbą." },
      { icon: "📈", title: "Aiškus progresas", text: "Kiekvienas žingsnis — kryptingas, su aiškiu tikslu ir rezultatu." },
    ],
    whenLabel: "Indikacijos",
    whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Nugaros ar kaklo skausmas", "Pečių juostos įtampa", "Sąnarių judesių ribotumas",
      "Skausmas po traumos", "Atsistatymas po operacijos", "Pasikartojantys perkrovos simptomai",
      "Laikysenos ar judesio kontrolės problemos", "Grįžimas į sportą ar aktyvumą",
    ],
    treatLabel: "Specialybė",
    treatTitle: "Su kokiais sutrikimais dirbame?",
    treatItems: [
      "Juosmens, kaklo, krūtinės stuburo skausmai", "Peties, kelio, klubo problemos",
      "Raumenų disbalansas", "Sausgyslių perkrovos (tendinopatijos)",
      "Būklės po raiščių, meniskų, lūžių ar operacijų", "Sportinės traumos",
      "Funkciniai judėjimo sutrikimai",
    ],
    importantLabel: "Svarbu",
    importantText: "Jei nesate tikri, ar jūsų problema tinka kineziterapijai — registruokitės pirminei konsultacijai. Pirmojo vizito metu nustatysime, kokia pagalba jums labiausiai tinka.",
    importantCta: "Registruotis konsultacijai",
    midCtaTitle: "Nežinote, ar kineziterapija jums tinka?",
    midCtaText: "Registruokitės pirmajai konsultacijai — kartu pasirinkime tinkamiausią kryptį.",
    midCtaBtn: "Registruotis vizitui",
    visitLabel: "Vizito eiga",
    visitTitle: "Kaip vyksta pirmasis vizitas?",
    visitSteps: [
      { n: "01", title: "Nusiskundimų aptarimas", text: "Išklausome, kada atsirado problema, kaip ji kinta, kas mažina ar didina skausmą." },
      { n: "02", title: "Būklės ir judesio įvertinimas", text: "Tikriname laikyseną, judesio amplitudę, raumenų jėgą ir simetrijos rodiklius." },
      { n: "03", title: "Funkciniai testai", text: "Atliekame specifinius testus, leidžiančius tiksliau nustatyti problemos kilmę." },
      { n: "04", title: "Problemos priežasčių paaiškinimas", text: "Suprantamai paaiškiname, kas vyksta ir kodėl — be nereikalingų medicininių terminų." },
      { n: "05", title: "Gydymo plano sudarymas", text: "Kartu su pacientu aptariame realistiškus tikslus ir numatome gydymo kryptį." },
      { n: "06", title: "Pirmos rekomendacijos", text: "Gausite konkrečius pratimus ar elgesio rekomendacijas, kurias galėsite taikyti iš karto." },
    ],
    planLabel: "Procesas",
    planTitle: "Kaip sudaromas gydymo planas?",
    planText: [
      "Vizitų dažnis priklauso nuo būklės. Kartais pakanka kelių vizitų, kitiems atvejams reikia nuoseklesnio proceso — tai aptariame po pirmojo įvertinimo.",
      "Planas nėra statiškas — jis koreguojamas pagal tai, kaip jums sekasi ir kaip kinta simptomai.",
      "Prireikus kineziterapiją galima derinti su manualine terapija, osteopatija, masažu ar fizioterapija — visa tai galima toje pačioje klinikoje.",
    ],
    planCards: [
      ["Individualus", "Programa derinama prie jūsų būklės ir tikslų."],
      ["Dinamiškas", "Planas keičiamas pagal progresą — ne pagal šabloną."],
      ["Kompleksiškas", "Galima derinti su kitomis paslaugomis pagal poreikį."],
    ],
    appliedLabel: "Metodai",
    appliedTitle: "Kas gali būti taikoma gydymo metu?",
    appliedItems: [
      "Gydomieji pratimai", "Mobilumo ir stabilumo lavinimas", "Raumenų aktyvacijos pratimai",
      "Laikysenos ir judesio korekcija", "Kvėpavimo ar koordinacijos pratimai",
      "Grįžimo į krūvį planavimas", "Namų programos rekomendacijos",
    ],
    goalsLabel: "Tikslai",
    goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti skausmą", "Gerinti judesių kokybę", "Atkurti funkciją",
      "Didinti pasitikėjimą judesiu", "Grįžti prie kasdienės veiklos", "Pasirengti grįžimui į sportą ar darbą",
    ],
    forWhomLabel: "Tikslinė grupė",
    forWhomTitle: "Kam tinka kineziterapija?",
    forWhomItems: [
      "Sėdimą darbą dirbantiems", "Aktyviai sportuojantiems", "Po traumų ar operacijų",
      "Jaučiantiems pasikartojančius skausmus", "Norintiems spręsti ne tik simptomą, bet ir priežastį",
    ],
    whyLabel: "ReaMed",
    whyTitle: "Kodėl pacientai renkasi ReaMed?",
    whyItems: [
      { title: "Individualus požiūris", text: "Kiekvienam pacientui sudaromas atskiras planas — pagal būklę, tikslus ir gyvenimo ritmą." },
      { title: "Priežasties paieška", text: "Dirbame ne tik su simptomu, bet ir su tuo, kas jį sukelia." },
      { title: "Aiškus planas", text: "Po pirmojo vizito žinosite, kas vyksta ir ką daryti toliau." },
      { title: "Funkcija grįstas įvertinimas", text: "Vertiname ne tik skausmą, bet ir judesio kokybę, raumenų darbą ir kasdienę funkciją." },
      { title: "Galimybė derinti paslaugas", text: "Prireikus kineziterapiją galima derinti su manualine terapija, osteopatija ar masažu." },
    ],
    pricesLabel: "Kainodara",
    pricesTitle: "Kainos",
    priceFirst: "Pirminis vizitas",
    priceFirstDesc: "Įvertinimas + gydymo plano sudarymas",
    priceRepeat: "Pakartotinis vizitas",
    priceRepeatDesc: "Kineziterapija pagal sudarytą planą",
    allPrices: "Visos kainos",
    packagesNote: "Galimi vizitų paketai",
    specialistsLabel: "Komanda",
    specialistsTitle: "Specialistai, teikiantys šią paslaugą",
    specialistCta: "Registruotis",
    beforeLabel: "Prieš pirmą vizitą",
    beforeItems: [
      "Atvykite 5–10 min. anksčiau.",
      "Vilkėkite patogią, laisvą aprangą.",
      "Jei turite — atsineškite tyrimų atsakymus ar gydytojų rekomendacijas.",
    ],
    faqLabel: "Klausimai",
    faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar kineziterapija tinka, jei jaučiu skausmą?", a: "Taip — ir dažniausiai būtent dėl skausmo ir pradedama. Mes neskubame \u201eper prievartą judinti\u201c: pirmojo vizito metu įvertiname, kokio intensyvumo ir pobūdžio jūsų skausmas, ir pagal tai parenkame saugų, kryptingą gydymo tempą." },
      { q: "Ar reikia siuntimo iš gydytojo?", a: "Ne, siuntimo nereikia — galite registruotis tiesiogiai. Jei turite gydytojo rekomendacijas, tyrimų rezultatus ar MRT nuotraukas — atsineškite, tai leidžia tiksliau įvertinti situaciją ir sutaupyti laiko." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo problemos pobūdžio, trukmės ir jūsų tikslo. Ūminė būklė gali išsispręsti per 4–6 vizitus, lėtinė ar pooperacinė — reikalauja nuoseklesnio proceso. Tikslų planą aptariame po pirmojo vizito, kai aiškiau matome, su kuo dirbame." },
      { q: "Ar kineziterapija tinka po operacijos?", a: "Taip, ir tai — viena iš svarbiausių mūsų krypčių. Pooperacinė reabilitacija turi savo etapus: kas tinka trečią savaitę, nėra tinkama antrą mėnesį. Dirbame pagal etapą, ne pagal šabloną." },
      { q: "Kuo kineziterapija skiriasi nuo masažo?", a: "Masažas — tai pasyvus poveikis audiniams: atsipalaidavimas, kraujotaka. Kineziterapija Vilniuje — tai aktyvus judesio atkūrimo procesas: raumenų aktyvacija, judesio kontrolė, funkcija. Jos viena kitą puikiai papildo, todėl prireikus jas ir deriname." },
      { q: "Ar reikės atlikti pratimus namuose?", a: "Dažniausiai — taip, bet ne dėl to, kad taip \u201eprivalu\u201c. Namų programa padeda greičiau pasiekti rezultatą ir išlaikyti pažangą tarp vizitų. Pratimai parenkami pagal jūsų realų laiką ir galimybes — ne per sudėtingi, ne per daug." },
    ],
    ctaTitle: "Norite pradėti gydymą?",
    ctaText: "Registruokitės pirmajam vizitui — įvertinsime jūsų būklę ir parinksime tinkamiausią gydymo kryptį.",
    ctaBtn: "Registruotis vizitui",
    ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Nugaros ir sąnarių skausmai, funkcinis ištyrimas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Sporto reabilitacija, atsistatymas po traumų", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Judesio kontrolė, perkrovų gydymas", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Pooperacinė reabilitacija, manualinė terapija", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← Services",
    serviceLabel: "Service",
    title: "Physiotherapy in Vilnius",
    subtitle: "Individually tailored treatment to reduce pain, improve movement quality and restore function — after injuries, surgeries or due to chronic musculoskeletal problems.",
    trustPoints: ["Individual assessment", "Treatment plan based on your condition", "For adults and active individuals"],
    ctaRegister: "Book an appointment",
    ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" },
      { id: "kada-kreiptis", label: "When to seek?" },
      { id: "pirmasis-vizitas", label: "First visit" },
      { id: "gydymo-planas", label: "Treatment plan" },
      { id: "kainos", label: "Prices" },
      { id: "specialistai", label: "Specialists" },
      { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the service",
    aboutTitle: "What is physiotherapy?",
    aboutText: [
      "Physiotherapy in Vilnius is not just exercises. It is individually tailored movement-based treatment aimed at finding the root cause of the problem and systematically addressing it.",
      "Each patient's programme is created individually: based on condition, movement limitations, pain origin and lifestyle activity. The programme can be adjusted as treatment progresses.",
      "The goal is to reduce pain, restore function and help you return to what you love: work, sport or daily activity. Physiotherapy for back pain, after injury or surgery — all of this is our everyday practice.",
    ],
    benefits: [
      { icon: "🎯", title: "Individual plan", text: "Every visit and programme is designed according to your specific condition." },
      { icon: "🔍", title: "Root cause focus", text: "We assess not just the pain, but movement quality and muscle function." },
      { icon: "📈", title: "Clear progress", text: "Every step is purposeful, with a clear goal and measurable result." },
    ],
    whenLabel: "Indications",
    whenTitle: "When is it worth seeking help?",
    whenItems: [
      "Back or neck pain", "Shoulder girdle tension", "Limited joint mobility",
      "Pain after injury", "Recovery after surgery", "Recurring overuse symptoms",
      "Postural or movement control problems", "Return to sport or physical activity",
    ],
    treatLabel: "Specialisation",
    treatTitle: "What conditions do we work with?",
    treatItems: [
      "Lower back, neck and thoracic spine pain", "Shoulder, knee and hip problems",
      "Muscle imbalance", "Tendon overload (tendinopathy)",
      "Conditions after ligament, meniscus, fracture or surgery", "Sports injuries",
      "Functional movement disorders",
    ],
    importantLabel: "Note",
    importantText: "If you are unsure whether your problem is suitable for physiotherapy — book an initial consultation. During the first visit we will determine what type of help is most appropriate for you.",
    importantCta: "Book a consultation",
    midCtaTitle: "Not sure if physiotherapy is right for you?",
    midCtaText: "Book your first consultation — together we will choose the most suitable direction.",
    midCtaBtn: "Book an appointment",
    visitLabel: "Visit flow",
    visitTitle: "How does the first visit work?",
    visitSteps: [
      { n: "01", title: "Discussion of complaints", text: "We listen to when the problem started, how it changes, and what reduces or increases the pain." },
      { n: "02", title: "Condition and movement assessment", text: "We assess posture, range of motion, muscle strength and symmetry." },
      { n: "03", title: "Functional tests", text: "We perform specific tests to more accurately identify the origin of the problem." },
      { n: "04", title: "Explanation of causes", text: "We clearly explain what is happening and why — without unnecessary medical jargon." },
      { n: "05", title: "Treatment plan creation", text: "Together with the patient we discuss realistic goals and outline the treatment direction." },
      { n: "06", title: "Initial recommendations", text: "You will receive specific exercises or behavioural recommendations to apply right away." },
    ],
    planLabel: "Process",
    planTitle: "How is the treatment plan created?",
    planText: [
      "Visit frequency depends on the condition. Sometimes a few visits are enough; other cases require a more systematic process — we discuss this after the initial assessment.",
      "The plan is not static — it is adjusted according to how you are progressing and how symptoms change.",
      "If needed, physiotherapy can be combined with manual therapy, osteopathy, massage or physical therapy — all available at the same clinic.",
    ],
    planCards: [
      ["Individual", "The programme is tailored to your condition and goals."],
      ["Dynamic", "The plan changes based on progress — not a fixed template."],
      ["Comprehensive", "Can be combined with other services as needed."],
    ],
    appliedLabel: "Methods",
    appliedTitle: "What may be applied during treatment?",
    appliedItems: [
      "Therapeutic exercises", "Mobility and stability training", "Muscle activation exercises",
      "Posture and movement correction", "Breathing or coordination exercises",
      "Return-to-load planning", "Home programme recommendations",
    ],
    goalsLabel: "Goals",
    goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce pain", "Improve movement quality", "Restore function",
      "Increase confidence in movement", "Return to daily activities", "Prepare for return to sport or work",
    ],
    forWhomLabel: "Target group",
    forWhomTitle: "Who is physiotherapy suitable for?",
    forWhomItems: [
      "Those with sedentary jobs", "Physically active individuals", "After injuries or surgeries",
      "Those experiencing recurring pain", "Those wanting to address the cause, not just the symptom",
    ],
    whyLabel: "ReaMed",
    whyTitle: "Why do patients choose ReaMed?",
    whyItems: [
      { title: "Individual approach", text: "Each patient receives a separate plan — based on their condition, goals and lifestyle." },
      { title: "Root cause focus", text: "We work not only with the symptom, but with what causes it." },
      { title: "Clear plan", text: "After the first visit you will know what is happening and what to do next." },
      { title: "Function-based assessment", text: "We assess not only pain, but movement quality, muscle function and daily performance." },
      { title: "Combined services available", text: "When needed, physiotherapy can be combined with manual therapy, osteopathy or massage." },
    ],
    pricesLabel: "Pricing",
    pricesTitle: "Prices",
    priceFirst: "Initial visit",
    priceFirstDesc: "Assessment + treatment plan",
    priceRepeat: "Follow-up visit",
    priceRepeatDesc: "Physiotherapy according to the established plan",
    allPrices: "All prices",
    packagesNote: "Visit packages available",
    specialistsLabel: "Team",
    specialistsTitle: "Specialists providing this service",
    specialistCta: "Book",
    beforeLabel: "Before the first visit",
    beforeItems: [
      "Arrive 5–10 minutes early.",
      "Wear comfortable, loose-fitting clothing.",
      "If available — bring test results or doctor's recommendations.",
    ],
    faqLabel: "Questions",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is physiotherapy suitable if I am in pain?", a: "Yes — and in most cases that is exactly why people start. We do not rush into 'forced movement': during the first visit we assess the intensity and nature of your pain, and based on that we choose a safe, focused treatment pace." },
      { q: "Is a doctor's referral required?", a: "No referral is needed — you can register directly. If you have medical recommendations, test results or MRI scans — bring them along, as they help us assess the situation more accurately and save time." },
      { q: "How many visits are typically needed?", a: "It depends on the nature of the problem, its duration, and your goal. An acute condition may resolve in 4–6 visits; a chronic or post-operative case requires a more systematic process. We discuss the exact plan after the first visit, once we have a clearer picture." },
      { q: "Is physiotherapy suitable after surgery?", a: "Yes, and this is one of our most important areas. Post-operative rehabilitation has its own stages: what is appropriate in week three is not necessarily right in month two. We work according to the stage, not a template." },
      { q: "How does physiotherapy differ from massage?", a: "Massage is passive treatment of tissues: relaxation, circulation. Physiotherapy is an active process of restoring movement: muscle activation, movement control, function. They complement each other well, which is why we combine them when needed." },
      { q: "Will I need to do exercises at home?", a: "Usually yes, but not because it is 'obligatory'. A home programme helps achieve results faster and maintain progress between visits. Exercises are chosen to fit your real schedule and capabilities — not too complex, not too many." },
    ],
    ctaTitle: "Ready to start treatment?",
    ctaText: "Book your first appointment — we will assess your condition and choose the most appropriate treatment direction.",
    ctaBtn: "Book an appointment",
    ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Back and joint pain, functional assessment", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Sports rehabilitation, recovery from injuries", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Movement control, overuse injury management", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Post-operative rehabilitation, manual therapy", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
};

/* ── HELPERS ─────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-2">{children}</p>;
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[1.625rem] md:text-[2rem] font-bold text-foreground leading-tight mb-4">{children}</h2>;
}
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#90CECA] mt-1.5 flex-shrink-0" />
          <span className="text-[0.9rem] text-secondary leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── ANCHOR NAV ───────────────────────────────────────────────── */
function AnchorNav({ links }: { links: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(id); }); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [links]);
  return (
    <div className="sticky z-30 bg-white/96 backdrop-blur-sm border-b border-[#DDE9E8] shadow-[0_1px_8px_rgba(0,0,0,0.04)]" style={{ top: "104px" }}>
      <div className="container-xl">
        <nav className="flex gap-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`}
              className={`whitespace-nowrap px-4 py-3.5 text-[0.8rem] font-semibold border-b-2 transition-colors duration-200 flex-shrink-0 ${active === id ? "border-[#7DB9B5] text-[#7DB9B5]" : "border-transparent text-muted/70 hover:text-foreground hover:border-[#DDE9E8]"}`}
            >{label}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ── FAQ ──────────────────────────────────────────────────────── */
function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-xl border border-[#DDE9E8] overflow-hidden">
          <button className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#F7FAF9] transition-colors duration-150"
            onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className="text-[0.9rem] font-semibold text-foreground leading-snug">{item.q}</span>
            {open === i ? <ChevronUp size={16} strokeWidth={2} className="text-[#7DB9B5] flex-shrink-0" /> : <ChevronDown size={16} strokeWidth={2} className="text-muted/40 flex-shrink-0" />}
          </button>
          {open === i && <div className="px-5 pb-4 pt-0.5"><p className="text-[0.875rem] text-muted leading-relaxed">{item.a}</p></div>}
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function KineziterapijaContent() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* HERO */}
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-6 pb-12 md:pt-10 md:pb-16">
          <a href={lang === "en" ? "/#paslaugos" : "/#paslaugos"} className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted/60 hover:text-[#7DB9B5] transition-colors duration-200 mb-4 block">{c.breadcrumb}</a>
          <SectionLabel>{c.serviceLabel}</SectionLabel>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-foreground leading-[1.1] mb-4 max-w-[640px]">{c.title}</h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[540px]">{c.subtitle}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
            {c.trustPoints.map((tp) => (
              <span key={tp} className="flex items-center gap-1.5 text-[0.8125rem] text-muted font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5]" aria-hidden="true" />{tp}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#registruotis" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.3)] hover:-translate-y-0.5">
              {c.ctaRegister} <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a href="tel:+37060134304" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#90CECA] text-foreground text-[0.9rem] font-semibold rounded-xl hover:bg-[#EEF5F4] transition-all duration-200">
              <Phone size={15} strokeWidth={2} className="text-[#7DB9B5]" />{c.ctaConsult}
            </a>
          </div>
        </div>
      </div>

      <AnchorNav links={c.anchor} />

      <div className="container-xl py-10 md:py-14 flex flex-col gap-14 md:gap-16">

        {/* KAS YRA */}
        <div id="kas-tai" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-mt-32">
          <div>
            <SectionLabel>{c.aboutLabel}</SectionLabel>
            <SectionTitle>{c.aboutTitle}</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              {c.aboutText.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-[#DDE9E8] p-6 md:p-8 flex flex-col gap-4">
            {c.benefits.map(({ icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="text-[1.375rem] leading-none flex-shrink-0">{icon}</span>
                <div>
                  <p className="text-[0.9rem] font-bold text-foreground mb-0.5">{title}</p>
                  <p className="text-[0.875rem] text-muted leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KADA KREIPTIS */}
        <div id="kada-kreiptis" className="scroll-mt-32">
          <SectionLabel>{c.whenLabel}</SectionLabel>
          <SectionTitle>{c.whenTitle}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {c.whenItems.map((item) => (
              <div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200">
                <span className="w-2 h-2 rounded-full bg-[#7DB9B5] flex-shrink-0" /><span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SU KOKIAIS SUTRIKIMAIS */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <SectionLabel>{c.treatLabel}</SectionLabel>
            <SectionTitle>{c.treatTitle}</SectionTitle>
            <BulletList items={c.treatItems} />
          </div>
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8">
            <p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">{c.importantLabel}</p>
            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">{c.importantText}</p>
            <a href="#registruotis" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200">
              {c.importantCta} <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* MID CTA */}
        <div className="rounded-2xl bg-[#7DB9B5] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-[1.0625rem] mb-1">{c.midCtaTitle}</p>
            <p className="text-white/80 text-[0.875rem]">{c.midCtaText}</p>
          </div>
          <a href="#registruotis" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7DB9B5] text-[0.875rem] font-bold rounded-xl hover:bg-[#EEF5F4] transition-colors duration-200 flex-shrink-0 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
            {c.midCtaBtn} <ArrowRight size={14} strokeWidth={2.5} />
          </a>
        </div>

        {/* PIRMASIS VIZITAS */}
        <div id="pirmasis-vizitas" className="scroll-mt-32">
          <SectionLabel>{c.visitLabel}</SectionLabel>
          <SectionTitle>{c.visitTitle}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.visitSteps.map((step) => (
              <div key={step.n} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200">
                <p className="text-[1.5rem] font-bold text-[#90CECA]/40 leading-none mb-3">{step.n}</p>
                <p className="text-[0.9375rem] font-bold text-foreground mb-1.5 leading-snug">{step.title}</p>
                <p className="text-[0.875rem] text-muted leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GYDYMO PLANAS */}
        <div id="gydymo-planas" className="grid md:grid-cols-2 gap-8 md:gap-12 items-start scroll-mt-32">
          <div>
            <SectionLabel>{c.planLabel}</SectionLabel>
            <SectionTitle>{c.planTitle}</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              {c.planText.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {c.planCards.map(([title, text]) => (
              <div key={title} className="bg-white rounded-xl border border-[#DDE9E8] px-5 py-4 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[0.9rem] font-bold text-foreground mb-0.5">{title}</p>
                  <p className="text-[0.875rem] text-muted leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KAS TAIKOMA */}
        <div>
          <SectionLabel>{c.appliedLabel}</SectionLabel>
          <SectionTitle>{c.appliedTitle}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {c.appliedItems.map((item) => (
              <div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200">
                <span className="w-2 h-2 rounded-full bg-[#90CECA] flex-shrink-0" /><span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TIKSLAI + KAM TINKA */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <SectionLabel>{c.goalsLabel}</SectionLabel>
            <h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.goalsTitle}</h2>
            <BulletList items={c.goalItems} />
          </div>
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <SectionLabel>{c.forWhomLabel}</SectionLabel>
            <h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.forWhomTitle}</h2>
            <BulletList items={c.forWhomItems} />
          </div>
        </div>

        {/* KODĖL REAMED */}
        <div>
          <SectionLabel>{c.whyLabel}</SectionLabel>
          <SectionTitle>{c.whyTitle}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.whyItems.map(({ title, text }) => (
              <div key={title} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200">
                <p className="text-[0.9375rem] font-bold text-foreground mb-2">{title}</p>
                <p className="text-[0.875rem] text-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KAINOS */}
        <div id="kainos" className="rounded-2xl border border-[#DDE9E8] bg-white p-6 md:p-8 scroll-mt-32">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex-1">
              <SectionLabel>{c.pricesLabel}</SectionLabel>
              <h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.pricesTitle}</h2>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
                <div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4">
                  <p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">{c.priceFirst}</p>
                  <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">70 €</p>
                  <p className="text-[0.78rem] text-muted/50 mb-3">60 min</p>
                  <p className="text-[0.8125rem] text-secondary leading-snug">{c.priceFirstDesc}</p>
                </div>
                <div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4">
                  <p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">{c.priceRepeat}</p>
                  <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">60 €</p>
                  <p className="text-[0.78rem] text-muted/50 mb-3">45 min</p>
                  <p className="text-[0.8125rem] text-secondary leading-snug">{c.priceRepeatDesc}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:pt-8">
              <Link href="/kainos" className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200 whitespace-nowrap">
                {c.allPrices} <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
              <p className="text-[0.75rem] text-muted/40 text-center">{c.packagesNote}</p>
            </div>
          </div>
        </div>

        {/* SPECIALISTAI */}
        <div id="specialistai" className="scroll-mt-32">
          <SectionLabel>{c.specialistsLabel}</SectionLabel>
          <SectionTitle>{c.specialistsTitle}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {c.specialists.map((s) => (
              <div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col">
                <a href={`/specialistai/${s.slug}`} className="block h-[220px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden">
                  <img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} />
                </a>
                <div className="p-4 flex flex-col flex-1">
                  <a href={`/specialistai/${s.slug}`} className="text-[0.9375rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">{s.name}</a>
                  <p className="text-[0.78rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p>
                  <p className="text-[0.78rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p>
                  <a href={`/specialistai/${s.slug}#registruotis`} className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">
                    {c.specialistCta} <ArrowRight size={13} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRIEŠ VIZITĄ */}
        <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="text-[1.5rem] leading-none mt-0.5 flex-shrink-0">📋</span>
            <div>
              <h2 className="text-[1.125rem] font-bold text-foreground mb-2">{c.beforeLabel}</h2>
              <ul className="flex flex-col gap-1.5">
                {c.beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" />
                    <span className="text-[0.9rem] text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div id="duk" className="scroll-mt-32">
          <SectionLabel>{c.faqLabel}</SectionLabel>
          <SectionTitle>{c.faqTitle}</SectionTitle>
          <FAQ items={c.faqs} />
        </div>

        {/* FINAL CTA */}
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">{c.ctaTitle}</h2>
          <p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[460px] mx-auto">{c.ctaText}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a href="tel:+37060134304" className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]">
              {c.ctaBtn} <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <Link href="/kontaktai" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200">
              <Phone size={14} strokeWidth={2} /> {c.ctaContact}
            </Link>
          </div>
          <p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p>
        </div>

      </div>
    </div>
  );
}
