"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Paslaugos",
    serviceLabel: "Paslauga",
    title: "Manualinė terapija Vilniuje",
    subtitle: "Tikslingai taikoma manualinė terapija, padedanti mažinti skausmą, gerinti sąnarių judrumą ir atkurti kokybišką judesį.",
    trustPoints: ["Individualus įvertinimas", "Gydymas pagal jūsų būklę", "Esant poreikiui derinama su kineziterapija"],
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
    aboutTitle: "Kas yra manualinė terapija?",
    aboutText: [
      "Manualinė terapija — tai tikslingas gydymas rankomis, taikomas siekiant sumažinti skausmą, gerinti sąnarių ir minkštųjų audinių judrumą bei padėti kūnui grįžti prie normalesnės funkcijos.",
      "Tai nėra vien tik trumpalaikis simptomų mažinimas. Manualinė terapija taikoma įvertinus jūsų būklę, judesio apribojimus, skausmo pobūdį ir bendrą funkcinę situaciją.",
      "Priklausomai nuo problemos, manualinė terapija gali būti derinama su kineziterapija, aktyviais pratimais ar kitomis gydymo priemonėmis. Tikslas — ne tik laikinai palengvinti būklę, bet ir padėti pasiekti stabilesnį rezultatą.",
    ],
    benefits: [
      { icon: "🎯", title: "Tikslinis poveikis", text: "Gydymas parenkamas pagal konkretų skausmo šaltinį ir judesio apribojimą." },
      { icon: "🔄", title: "Judrumo gerinimas", text: "Siekiame atkurti laisvesnį ir kokybiškesnį judesį." },
      { icon: "📋", title: "Aiški kryptis", text: "Po vizito suprasite, kas vyksta ir koks gydymo planas jums tinkamiausias." },
    ],
    whenLabel: "Indikacijos",
    whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Nugaros ar kaklo skausmas", "Pečių juostos įtampa ar skausmas", "Sąnarių judesio ribotumas",
      "Skausmas po fizinės perkrovos", "Diskomfortas po traumos", "Raumenų įtampa ar sustingimas",
      "Pasikartojantys judesio apribojimai", "Norisi greitesnio simptomų sumažinimo ir aiškaus plano",
    ],
    treatLabel: "Specialybė",
    treatTitle: "Su kokiomis būklėmis dirbame?",
    treatItems: [
      "Juosmens, kaklo ir krūtinės stuburo skausmai", "Pečių, klubo, kelio ar kitų sąnarių judrumo sutrikimai",
      "Raumenų įtampa ir minkštųjų audinių perkrova", "Skausmingi judesio apribojimai",
      "Būklės po traumų ar perkrovų", "Funkciniai stuburo ir sąnarių sutrikimai",
      "Pasikartojantis diskomfortas judesio metu",
    ],
    importantLabel: "Svarbu",
    importantText: "Jei nesate tikri, ar jūsų problemai labiausiai tinka manualinė terapija, registruokitės pirminiai konsultacijai. Vizito metu įvertinsime būklę ir parinksime tinkamiausią gydymo kryptį.",
    importantCta: "Registruotis konsultacijai",
    midCtaTitle: "Nežinote, ar manualinė terapija jums tinka?",
    midCtaText: "Registruokitės pirmajai konsultacijai — kartu pasirinkime tinkamiausią kryptį.",
    midCtaBtn: "Registruotis vizitui",
    visitLabel: "Vizito eiga",
    visitTitle: "Kaip vyksta pirmasis vizitas?",
    visitSteps: [
      { n: "01", title: "Nusiskundimų aptarimas", text: "Išklausome, kur jaučiate skausmą, kada jis atsirado, kas jį provokuoja ir kas padeda." },
      { n: "02", title: "Būklės ir judesio įvertinimas", text: "Vertiname laikyseną, judesių amplitudę, sąnarių funkciją, audinių būklę ir galimus ribojimus." },
      { n: "03", title: "Funkciniai testai", text: "Atliekame tikslinius testus, padedančius geriau suprasti skausmo kilmę ir judesio sutrikimą." },
      { n: "04", title: "Problemos paaiškinimas", text: "Aiškiai paaiškiname, kas gali kelti simptomus ir kodėl manualinė terapija gali būti naudinga." },
      { n: "05", title: "Gydymo krypties parinkimas", text: "Nusprendžiame, ar tikslinga taikyti manualinę terapiją, ar ją derinti su kitomis priemonėmis." },
      { n: "06", title: "Pirmos rekomendacijos", text: "Gaunate aiškias rekomendacijas dėl krūvio, judesio, laikysenos ar tolimesnio gydymo plano." },
    ],
    planLabel: "Procesas",
    planTitle: "Kaip sudaromas gydymo planas?",
    planText: [
      "Vizitų dažnis priklauso nuo jūsų būklės, simptomų trukmės ir to, kaip organizmas reaguoja į gydymą.",
      "Kai kuriais atvejais pakanka kelių vizitų simptomams sumažinti, kitais — manualinę terapiją tikslinga derinti su kineziterapija ar aktyviu funkcijos atkūrimu.",
      "Gydymo planas nėra šabloninis. Jis koreguojamas pagal jūsų progresą, būklės pokyčius ir tikslus.",
    ],
    planCards: [
      ["Individualus", "Gydymas derinamas prie jūsų būklės, tikslų ir simptomų pobūdžio."],
      ["Dinamiškas", "Planas koreguojamas pagal tai, kaip kinta jūsų būklė."],
      ["Kompleksiškas", "Esant poreikiui, manualinė terapija derinama su kitomis gydymo kryptimis."],
    ],
    appliedLabel: "Metodai",
    appliedTitle: "Kas gali būti taikoma gydymo metu?",
    appliedItems: [
      "Sąnarių mobilizacija", "Minkštųjų audinių atpalaidavimo technikos",
      "Skausmą mažinančios manualinės technikos", "Judesio amplitudės gerinimas",
      "Raumenų įtampos mažinimas", "Stuburo ir periferinių sąnarių manualinis gydymas",
      "Aktyvavimo ar stabilizavimo pratimai", "Rekomendacijos namams",
    ],
    goalsLabel: "Tikslai",
    goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti skausmą", "Gerinti sąnarių ir audinių judrumą",
      "Atkurti kokybiškesnį judesį", "Mažinti įtampą ir sustingimą",
      "Padėti grįžti prie kasdienės veiklos", "Sudaryti aiškų tolimesnio gydymo planą",
    ],
    forWhomLabel: "Tikslinė grupė",
    forWhomTitle: "Kam tinka manualinė terapija?",
    forWhomItems: [
      "Jaučiantiems nugaros, kaklo ar sąnarių skausmą", "Turintiems judesio ribotumą ar sustingimą",
      "Po fizinių perkrovų ar traumų", "Aktyviai sportuojantiems",
      "Dirbantiems sėdimą darbą ir jaučiantiems nuolatinę įtampą",
    ],
    whyLabel: "ReaMed",
    whyTitle: "Kodėl pacientai renkasi ReaMed?",
    whyItems: [
      { title: "Individualus požiūris", text: "Kiekvienam pacientui gydymas parenkamas pagal jo būklę, simptomus ir tikslus." },
      { title: "Priežasties paieška", text: "Dirbame ne tik su simptomu, bet ir su tuo, kas jį palaiko ar išprovokuoja." },
      { title: "Aiškus planas", text: "Po vizito žinosite, kas vyksta, ko tikėtis ir ką daryti toliau." },
      { title: "Funkcija grįstas vertinimas", text: "Vertiname ne tik skausmą, bet ir judesio kokybę, apribojimus bei bendrą funkciją." },
      { title: "Galimybė derinti paslaugas", text: "Manualinė terapija derinama su kineziterapija ar kitomis gydymo kryptimis pagal poreikį." },
    ],
    pricesLabel: "Kainodara",
    pricesTitle: "Kainos",
    priceFirst: "Pirminis vizitas",
    priceFirstDesc: "Įvertinimas + gydymo plano sudarymas",
    priceRepeat: "Pakartotinis vizitas",
    priceRepeatDesc: "Manualinė terapija pagal sudarytą planą",
    allPrices: "Visos kainos",
    packagesNote: "Galimi vizitų paketai",
    specialistsLabel: "Komanda",
    specialistsTitle: "Specialistai, teikiantys šią paslaugą",
    specialistCta: "Registruotis",
    beforeLabel: "Prieš pirmą vizitą",
    beforeItems: [
      "Atvykite 5–10 min. anksčiau.",
      "Vilkėkite patogią, judesių nevaržančią aprangą.",
      "Jei turite — atsineškite tyrimų atsakymus ar gydytojų rekomendacijas.",
    ],
    faqLabel: "Klausimai",
    faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar manualinė terapija tinka, jei jaučiu stiprų skausmą?", a: "Daugeliu atvejų taip, tačiau viskas priklauso nuo skausmo pobūdžio ir priežasties. Pirmojo vizito metu įvertiname, ar manualinė terapija šiuo metu yra tinkamiausias pasirinkimas." },
      { q: "Ar manualinė terapija visada taikoma pirmo vizito metu?", a: "Ne visada. Pirmiausia įvertiname būklę ir nusprendžiame, ar manualinė terapija konkrečiu atveju bus naudinga, ar geriau pradėti nuo kitų priemonių." },
      { q: "Kuo manualinė terapija skiriasi nuo masažo?", a: "Masažas dažniau taikomas bendram raumenų atpalaidavimui, o manualinė terapija — tikslingesnis gydymas, orientuotas į sąnarių, audinių ir judesio funkcijos gerinimą." },
      { q: "Ar manualinė terapija gali būti derinama su kineziterapija?", a: "Taip, dažnai geriausių rezultatų pasiekiama tuomet, kai manualinė terapija derinama su aktyviu gydymu, pratimais ir judesio korekcija." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo problemos pobūdžio, simptomų trukmės ir jūsų tikslų. Kartais pakanka kelių vizitų, o kartais reikalingas nuoseklesnis planas." },
      { q: "Ar po vizito gausiu rekomendacijų namams?", a: "Taip, jei reikia, gausite aiškias rekomendacijas dėl judesio, krūvio, laikysenos ar pratimų namuose." },
    ],
    ctaTitle: "Norite pradėti gydymą?",
    ctaText: "Registruokitės pirmajam vizitui — įvertinsime jūsų būklę ir parinksime, ar jums labiausiai tinka manualinė terapija, ar kompleksinis gydymo planas.",
    ctaBtn: "Registruotis vizitui",
    ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Nugaros ir sąnarių skausmai, manualinis gydymas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Nugaros skausmas, manualinis gydymas, funkcinis atkūrimas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← Services",
    serviceLabel: "Service",
    title: "Manual Therapy in Vilnius",
    subtitle: "Targeted manual therapy to reduce pain, improve joint mobility and restore quality movement.",
    trustPoints: ["Individual assessment", "Treatment based on your condition", "Combined with physiotherapy when needed"],
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
    aboutTitle: "What is manual therapy?",
    aboutText: [
      "Manual therapy is targeted hands-on treatment aimed at reducing pain, improving joint and soft tissue mobility, and helping the body return to normal function.",
      "It is not just short-term symptom relief. Manual therapy is applied after assessing your condition, movement restrictions, pain pattern and overall functional situation.",
      "Depending on the problem, manual therapy may be combined with physiotherapy, active exercises or other treatment methods. The goal is not just temporary relief, but achieving a more stable result.",
    ],
    benefits: [
      { icon: "🎯", title: "Targeted effect", text: "Treatment is chosen based on the specific source of pain and movement restriction." },
      { icon: "🔄", title: "Improved mobility", text: "We aim to restore freer and higher-quality movement." },
      { icon: "📋", title: "Clear direction", text: "After the visit you will understand what is happening and what treatment plan suits you best." },
    ],
    whenLabel: "Indications",
    whenTitle: "When is it worth seeking help?",
    whenItems: [
      "Back or neck pain", "Shoulder girdle tension or pain", "Limited joint mobility",
      "Pain after physical overload", "Discomfort after injury", "Muscle tension or stiffness",
      "Recurring movement restrictions", "Wanting faster symptom relief and a clear plan",
    ],
    treatLabel: "Specialisation",
    treatTitle: "What conditions do we work with?",
    treatItems: [
      "Lower back, neck and thoracic spine pain", "Shoulder, hip, knee or other joint mobility problems",
      "Muscle tension and soft tissue overload", "Painful movement restrictions",
      "Conditions after injuries or overload", "Functional spine and joint disorders",
      "Recurring discomfort during movement",
    ],
    importantLabel: "Note",
    importantText: "If you are unsure whether manual therapy is most appropriate for your problem, book an initial consultation. During the visit we will assess your condition and choose the most suitable treatment direction.",
    importantCta: "Book a consultation",
    midCtaTitle: "Not sure if manual therapy is right for you?",
    midCtaText: "Book your first consultation — together we will choose the most suitable direction.",
    midCtaBtn: "Book an appointment",
    visitLabel: "Visit flow",
    visitTitle: "How does the first visit work?",
    visitSteps: [
      { n: "01", title: "Discussion of complaints", text: "We listen to where you feel pain, when it started, what triggers it and what helps." },
      { n: "02", title: "Condition and movement assessment", text: "We assess posture, range of motion, joint function, tissue condition and any restrictions." },
      { n: "03", title: "Functional tests", text: "We perform targeted tests to better understand the origin of pain and movement disorder." },
      { n: "04", title: "Explanation of the problem", text: "We clearly explain what may be causing symptoms and why manual therapy may be helpful." },
      { n: "05", title: "Treatment direction", text: "We decide whether to apply manual therapy or combine it with other methods." },
      { n: "06", title: "Initial recommendations", text: "You receive clear recommendations regarding load, movement, posture or further treatment plan." },
    ],
    planLabel: "Process",
    planTitle: "How is the treatment plan created?",
    planText: [
      "Visit frequency depends on your condition, duration of symptoms and how your body responds to treatment.",
      "In some cases a few visits are enough to reduce symptoms; in others manual therapy should be combined with physiotherapy or active function recovery.",
      "The treatment plan is not a template. It is adjusted based on your progress, changes in condition and goals.",
    ],
    planCards: [
      ["Individual", "Treatment is tailored to your condition, goals and symptom pattern."],
      ["Dynamic", "Plan is adjusted according to how your condition changes."],
      ["Comprehensive", "When needed, manual therapy is combined with other treatment directions."],
    ],
    appliedLabel: "Methods",
    appliedTitle: "What may be applied during treatment?",
    appliedItems: [
      "Joint mobilisation", "Soft tissue release techniques",
      "Pain-reducing manual techniques", "Range of motion improvement",
      "Muscle tension reduction", "Spinal and peripheral joint manual treatment",
      "Activation or stabilisation exercises", "Home recommendations",
    ],
    goalsLabel: "Goals",
    goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce pain", "Improve joint and tissue mobility",
      "Restore quality movement", "Reduce tension and stiffness",
      "Help return to daily activities", "Create a clear further treatment plan",
    ],
    forWhomLabel: "Target group",
    forWhomTitle: "Who is manual therapy suitable for?",
    forWhomItems: [
      "Those with back, neck or joint pain", "Those with movement restriction or stiffness",
      "After physical overload or injuries", "Active individuals and athletes",
      "Those with sedentary jobs experiencing constant tension",
    ],
    whyLabel: "ReaMed",
    whyTitle: "Why do patients choose ReaMed?",
    whyItems: [
      { title: "Individual approach", text: "Each patient receives treatment tailored to their condition, symptoms and goals." },
      { title: "Root cause focus", text: "We work not only with the symptom, but with what maintains or triggers it." },
      { title: "Clear plan", text: "After the visit you will know what is happening, what to expect and what to do next." },
      { title: "Function-based assessment", text: "We assess not only pain, but movement quality, restrictions and overall function." },
      { title: "Combined services available", text: "Manual therapy is combined with physiotherapy or other treatment directions when needed." },
    ],
    pricesLabel: "Pricing",
    pricesTitle: "Prices",
    priceFirst: "Initial visit",
    priceFirstDesc: "Assessment + treatment plan",
    priceRepeat: "Follow-up visit",
    priceRepeatDesc: "Manual therapy according to the established plan",
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
      { q: "Is manual therapy suitable if I have severe pain?", a: "In most cases yes, but it depends on the nature and cause of the pain. During the first visit we assess whether manual therapy is currently the most appropriate choice." },
      { q: "Is manual therapy always applied during the first visit?", a: "Not always. First we assess the condition and decide whether manual therapy will be beneficial in this specific case, or whether it is better to start with other methods." },
      { q: "How does manual therapy differ from massage?", a: "Massage is more often applied for general muscle relaxation, while manual therapy is more targeted treatment oriented towards improving joint, tissue and movement function." },
      { q: "Can manual therapy be combined with physiotherapy?", a: "Yes, often the best results are achieved when manual therapy is combined with active treatment, exercises and movement correction." },
      { q: "How many visits are typically needed?", a: "It depends on the nature of the problem, duration of symptoms and your goals. Sometimes a few visits suffice, while other cases require a more systematic plan." },
      { q: "Will I receive home recommendations after the visit?", a: "Yes, if needed you will receive clear recommendations regarding movement, load, posture or home exercises." },
    ],
    ctaTitle: "Ready to start treatment?",
    ctaText: "Book your first appointment — we will assess your condition and determine whether manual therapy or a comprehensive treatment plan is most suitable for you.",
    ctaBtn: "Book an appointment",
    ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Back and joint pain, manual treatment", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Back pain, manual therapy, functional recovery", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
};

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

export default function ManualineTerapijaContent() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-6 pb-12 md:pt-10 md:pb-16">
          <a href="/#paslaugos" className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted/60 hover:text-[#7DB9B5] transition-colors duration-200 mb-4 block">{c.breadcrumb}</a>
          <SectionLabel>{c.serviceLabel}</SectionLabel>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-foreground leading-[1.1] mb-4 max-w-[640px]">{c.title}</h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[540px]">{c.subtitle}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
            {c.trustPoints.map((tp) => (<span key={tp} className="flex items-center gap-1.5 text-[0.8125rem] text-muted font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5]" />{tp}</span>))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#registruotis" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.3)] hover:-translate-y-0.5">{c.ctaRegister} <ArrowRight size={15} strokeWidth={2.5} /></a>
            <a href="tel:+37060134304" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#90CECA] text-foreground text-[0.9rem] font-semibold rounded-xl hover:bg-[#EEF5F4] transition-all duration-200"><Phone size={15} strokeWidth={2} className="text-[#7DB9B5]" />{c.ctaConsult}</a>
          </div>
        </div>
      </div>
      <AnchorNav links={c.anchor} />
      <div className="container-xl py-10 md:py-14 flex flex-col gap-14 md:gap-16">
        <div id="kas-tai" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-mt-32">
          <div>
            <SectionLabel>{c.aboutLabel}</SectionLabel>
            <SectionTitle>{c.aboutTitle}</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">{c.aboutText.map((p, i) => <p key={i}>{p}</p>)}</div>
          </div>
          <div className="rounded-2xl bg-white border border-[#DDE9E8] p-6 md:p-8 flex flex-col gap-4">
            {c.benefits.map(({ icon, title, text }) => (
              <div key={title} className="flex items-start gap-4"><span className="text-[1.375rem] leading-none flex-shrink-0">{icon}</span><div><p className="text-[0.9rem] font-bold text-foreground mb-0.5">{title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{text}</p></div></div>
            ))}
          </div>
        </div>
        <div id="kada-kreiptis" className="scroll-mt-32">
          <SectionLabel>{c.whenLabel}</SectionLabel>
          <SectionTitle>{c.whenTitle}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {c.whenItems.map((item) => (<div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200"><span className="w-2 h-2 rounded-full bg-[#7DB9B5] flex-shrink-0" /><span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span></div>))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div><SectionLabel>{c.treatLabel}</SectionLabel><SectionTitle>{c.treatTitle}</SectionTitle><BulletList items={c.treatItems} /></div>
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8">
            <p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">{c.importantLabel}</p>
            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">{c.importantText}</p>
            <a href="#registruotis" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200">{c.importantCta} <ArrowRight size={14} strokeWidth={2.5} /></a>
          </div>
        </div>
        <div className="rounded-2xl bg-[#7DB9B5] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><p className="text-white font-bold text-[1.0625rem] mb-1">{c.midCtaTitle}</p><p className="text-white/80 text-[0.875rem]">{c.midCtaText}</p></div>
          <a href="#registruotis" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7DB9B5] text-[0.875rem] font-bold rounded-xl hover:bg-[#EEF5F4] transition-colors duration-200 flex-shrink-0">{c.midCtaBtn} <ArrowRight size={14} strokeWidth={2.5} /></a>
        </div>
        <div id="pirmasis-vizitas" className="scroll-mt-32">
          <SectionLabel>{c.visitLabel}</SectionLabel>
          <SectionTitle>{c.visitTitle}</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.visitSteps.map((step) => (<div key={step.n} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200"><p className="text-[1.5rem] font-bold text-[#90CECA]/40 leading-none mb-3">{step.n}</p><p className="text-[0.9375rem] font-bold text-foreground mb-1.5 leading-snug">{step.title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{step.text}</p></div>))}
          </div>
        </div>
        <div id="gydymo-planas" className="grid md:grid-cols-2 gap-8 md:gap-12 items-start scroll-mt-32">
          <div><SectionLabel>{c.planLabel}</SectionLabel><SectionTitle>{c.planTitle}</SectionTitle><div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">{c.planText.map((p, i) => <p key={i}>{p}</p>)}</div></div>
          <div className="flex flex-col gap-3">{c.planCards.map(([title, text]) => (<div key={title} className="bg-white rounded-xl border border-[#DDE9E8] px-5 py-4 flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" /><div><p className="text-[0.9rem] font-bold text-foreground mb-0.5">{title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{text}</p></div></div>))}</div>
        </div>
        <div><SectionLabel>{c.appliedLabel}</SectionLabel><SectionTitle>{c.appliedTitle}</SectionTitle><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{c.appliedItems.map((item) => (<div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200"><span className="w-2 h-2 rounded-full bg-[#90CECA] flex-shrink-0" /><span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span></div>))}</div></div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8"><SectionLabel>{c.goalsLabel}</SectionLabel><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.goalsTitle}</h2><BulletList items={c.goalItems} /></div>
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8"><SectionLabel>{c.forWhomLabel}</SectionLabel><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.forWhomTitle}</h2><BulletList items={c.forWhomItems} /></div>
        </div>
        <div><SectionLabel>{c.whyLabel}</SectionLabel><SectionTitle>{c.whyTitle}</SectionTitle><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{c.whyItems.map(({ title, text }) => (<div key={title} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200"><p className="text-[0.9375rem] font-bold text-foreground mb-2">{title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{text}</p></div>))}</div></div>
        <div id="kainos" className="rounded-2xl border border-[#DDE9E8] bg-white p-6 md:p-8 scroll-mt-32">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex-1"><SectionLabel>{c.pricesLabel}</SectionLabel><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.pricesTitle}</h2><div className="flex flex-col sm:flex-row gap-5 sm:gap-8"><div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4"><p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">{c.priceFirst}</p><p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">70 €</p><p className="text-[0.78rem] text-muted/50 mb-3">60 min</p><p className="text-[0.8125rem] text-secondary leading-snug">{c.priceFirstDesc}</p></div><div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4"><p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">{c.priceRepeat}</p><p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">60 €</p><p className="text-[0.78rem] text-muted/50 mb-3">45 min</p><p className="text-[0.8125rem] text-secondary leading-snug">{c.priceRepeatDesc}</p></div></div></div>
            <div className="flex flex-col gap-2 sm:pt-8"><Link href="/kainos" className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200 whitespace-nowrap">{c.allPrices} <ArrowRight size={14} strokeWidth={2.5} /></Link><p className="text-[0.75rem] text-muted/40 text-center">{c.packagesNote}</p></div>
          </div>
        </div>
        <div id="specialistai" className="scroll-mt-32">
          <SectionLabel>{c.specialistsLabel}</SectionLabel>
          <SectionTitle>{c.specialistsTitle}</SectionTitle>
          <div className="grid sm:grid-cols-2 max-w-[640px] gap-5">
            {c.specialists.map((s) => (
              <div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col">
                <a href={`/specialistai/${s.slug}`} className="block h-[220px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden"><img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} /></a>
                <div className="p-4 flex flex-col flex-1"><a href={`/specialistai/${s.slug}`} className="text-[0.9375rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">{s.name}</a><p className="text-[0.78rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p><p className="text-[0.78rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p><a href={`/specialistai/${s.slug}#registruotis`} className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">{c.specialistCta} <ArrowRight size={13} strokeWidth={2.5} /></a></div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-6 md:p-8"><div className="flex items-start gap-4"><span className="text-[1.5rem] leading-none mt-0.5 flex-shrink-0">📋</span><div><h2 className="text-[1.125rem] font-bold text-foreground mb-2">{c.beforeLabel}</h2><ul className="flex flex-col gap-1.5">{c.beforeItems.map((item) => (<li key={item} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" /><span className="text-[0.9rem] text-secondary">{item}</span></li>))}</ul></div></div></div>
        <div id="duk" className="scroll-mt-32"><SectionLabel>{c.faqLabel}</SectionLabel><SectionTitle>{c.faqTitle}</SectionTitle><FAQ items={c.faqs} /></div>
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">{c.ctaTitle}</h2>
          <p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[460px] mx-auto">{c.ctaText}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a href="tel:+37060134304" className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]">{c.ctaBtn} <ArrowRight size={15} strokeWidth={2.5} /></a>
            <Link href="/kontaktai" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"><Phone size={14} strokeWidth={2} /> {c.ctaContact}</Link>
          </div>
          <p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p>
        </div>
      </div>
    </div>
  );
}
