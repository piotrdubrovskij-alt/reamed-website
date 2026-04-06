"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Paslaugos", serviceLabel: "Paslauga",
    title: "Pooperacinė reabilitacija Vilniuje",
    subtitle: "Atsistatymas po ortopedinių ir stuburo operacijų, parenkant gydymą pagal konkretų reabilitacijos etapą.",
    trustPoints: ["Individualus būklės ir etapo įvertinimas", "Gydymas pagal operacijos tipą ir gijimo stadiją", "Nuoseklus grįžimas į judėjimą ir funkciją"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "pirmasis-vizitas", label: "Įvertinimas" }, { id: "gydymo-planas", label: "Planas" },
      { id: "kainos", label: "Kainos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie paslaugą", aboutTitle: "Kas yra pooperacinė reabilitacija?",
    aboutText: [
      "Pooperacinė reabilitacija – tai kryptingas atsistatymo procesas po ortopedinių ir stuburo operacijų, padedantis saugiai atkurti judrumą, funkciją, jėgą ir pasitikėjimą judesiu.",
      "Po operacijos svarbu ne tik laukti, kol kūnas sugis, bet ir tinkamu metu pradėti taikyti reikiamą gydymą pagal konkretų reabilitacijos etapą. Skirtingais gijimo laikotarpiais kūnui reikia skirtingo krūvio ir skirtingų priemonių.",
      "ReaMed klinikoje pooperacinė reabilitacija planuojama individualiai, atsižvelgiant į atliktą operaciją, gijimo stadiją, gydytojo rekomendacijas ir jūsų tikslus.",
    ],
    benefits: [
      { icon: "📊", title: "Reabilitacija pagal etapą", text: "Gydymas parenkamas pagal konkretų gijimo laikotarpį ir tai, ko tuo metu labiausiai reikia." },
      { icon: "🎯", title: "Individualus planas", text: "Atsižvelgiama į operacijos pobūdį, būklę, apribojimus ir jūsų tikslus." },
      { icon: "🛡️", title: "Saugus grįžimas į funkciją", text: "Siekiame, kad atsistatymas būtų ne tik greitas, bet ir kokybiškas bei pagrįstas." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Po ortopedinių operacijų", "Po stuburo operacijų",
      "Jaučiant sustingimą ar judesio ribotumą", "Trūksta jėgos, kontrolės ar pasitikėjimo",
      "Neaišku, ką galima daryti ir kokio krūvio vengti", "Norint ne tik sugijti, bet ir atkurti funkciją",
      "Reikia aiškaus grįžimo į aktyvumą plano", "Gydytojas rekomendavo reabilitaciją",
    ],
    treatLabel: "Specialybė", treatTitle: "Su kokiomis būklėmis dirbame?",
    treatItems: [
      "Būklės po kelio operacijų", "Būklės po peties operacijų",
      "Būklės po klubo operacijų", "Būklės po čiurnos operacijų",
      "Būklės po stuburo operacijų", "Raumenų silpnumas po imobilizacijos",
      "Sumažėjusi funkcija ir nepasitikėjimas judesiu",
    ],
    importantLabel: "Svarbu", importantText: "Po operacijos simptomai ir atsistatymo eiga gali labai skirtis, todėl svarbiausia suprasti ne tik kokia operacija buvo atlikta, bet ir kokiame reabilitacijos etape šiuo metu esate.", importantCta: "Registruotis konsultacijai",
    midCtaTitle: "Nežinote, kaip pradėti atsistatymą po operacijos?", midCtaText: "Registruokitės pirmajai konsultacijai — kartu pasirinkime tinkamiausią kryptį.", midCtaBtn: "Registruotis vizitui",
    visitLabel: "Vertinimo eiga", visitTitle: "Kaip vertiname būklę po operacijos?",
    visitSteps: [
      { n: "01", title: "Operacijos ir situacijos aptarimas", text: "Aptariame, kokia operacija atlikta, kada, kokios rekomendacijos pateiktos ir kaip jaučiatės dabar." },
      { n: "02", title: "Būklės ir funkcijos įvertinimas", text: "Vertiname judrumą, skausmą, tinimą, jėgą, kontrolę ir bendrą funkciją." },
      { n: "03", title: "Etapo nustatymas", text: "Įvertiname, kuriame gijimo etape esate ir kokie tikslai dabar svarbiausi." },
      { n: "04", title: "Problemos paaiškinimas", text: "Aiškiai paaiškiname, ko trūksta ir kokia kryptis būtų logiškiausia." },
      { n: "05", title: "Gydymo plano sudarymas", text: "Parenkame planą pagal operacijos pobūdį, apribojimus ir tikslą." },
    ],
    planLabel: "Procesas", planTitle: "Kaip planuojama pooperacinė reabilitacija?",
    planText: [
      "Reabilitacijos planas priklauso nuo operacijos pobūdžio, gijimo eigos, gydytojo rekomendacijų ir jūsų tikslo.",
      "Reabilitacija vyksta etapais: simptomų mažinimas, judrumo atkūrimas, jėgos ir kontrolės lavinimas, krūvio tolerancijos didinimas.",
      "Planas koreguojamas pagal progresą. Tikslas — padėti saugiai pereiti iš vieno etapo į kitą ir grįžti prie kasdienės veiklos, darbo ar aktyvumo.",
    ],
    planCards: [
      ["Pagal etapą", "Gydymas pritaikomas prie konkretaus gijimo laikotarpio."],
      ["Individualus", "Atsižvelgiama į operacijos tipą, apribojimus ir tikslus."],
      ["Nuoseklus", "Kiekvienas etapas ruošia sekančiam — ne per greitai, ne per lėtai."],
    ],
    appliedLabel: "Metodai", appliedTitle: "Kas gali būti taikoma gydymo metu?",
    appliedItems: [
      "Kineziterapija", "Judrumo atkūrimas",
      "Raumenų aktyvavimas ir kontrolė", "Jėgos didinimas pagal etapą",
      "Krūvio tolerancijos didinimas", "Manualinis gydymas pagal poreikį",
      "Grįžimo į aktyvumą planavimas",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti skausmą ir diskomfortą", "Mažinti sustingimą ir judesio ribotumą",
      "Atkurti funkciją po operacijos", "Gerinti jėgą, kontrolę ir pasitikėjimą",
      "Saugiai pereiti iš etapo į etapą", "Grįžti prie kasdienės veiklos, darbo ar aktyvumo",
    ],
    forWhomLabel: "Tikslinė grupė", forWhomTitle: "Kam skirta pooperacinė reabilitacija?",
    forWhomItems: [
      "Po bet kokios ortopedinės operacijos", "Po stuburo operacijos",
      "Norintiems ne tik sugijti, bet ir atkurti pilną funkciją", "Tiems, kuriems trūksta aiškaus atsistatymo plano",
      "Norintiems grįžti į aktyvumą ar sportą",
    ],
    whyLabel: "ReaMed", whyTitle: "Kodėl pacientai kreipiasi į ReaMed?",
    whyItems: [
      { title: "Vertiname pagal etapą", text: "Svarbu ne tik operacijos tipas, bet ir konkretus reabilitacijos etapas." },
      { title: "Aiški situacijos analizė", text: "Po vizito suprasite, ką galima daryti, ko vengti ir kokia kryptis tinkamiausia." },
      { title: "Funkcija kaip tikslas", text: "Tikslas — ne tik sugijimas, bet ir realus judėjimo ir jėgos atkūrimas." },
      { title: "Orientacija į gyvenimą", text: "Siekiame padėti grįžti prie kasdienės veiklos, darbo ar sporto." },
      { title: "Paslaugų derinimas", text: "Planas gali apjungti kineziterapiją, manualinę terapiją ar kitas kryptis." },
    ],
    pricesLabel: "Kainodara", pricesTitle: "Kainos",
    priceFirst: "Pirminis vizitas", priceFirstDesc: "Įvertinimas + reabilitacijos planas",
    priceRepeat: "Pakartotinis vizitas", priceRepeatDesc: "Pooperacinė reabilitacija pagal planą",
    allPrices: "Visos kainos", packagesNote: "Galimi vizitų paketai",
    specialistsLabel: "Komanda", specialistsTitle: "Specialistai, dirbantys su atsistatymu po operacijų", specialistCta: "Registruotis",
    beforeLabel: "Prieš pirmą vizitą",
    beforeItems: ["Atvykite 5–10 min. anksčiau.", "Vilkėkite patogią aprangą.", "Atsineškite operacijos dokumentus ar gydytojo rekomendacijas."],
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Kada galima pradėti pooperacinę reabilitaciją?", a: "Tai priklauso nuo operacijos tipo, gijimo stadijos ir gydytojo rekomendacijų. Kai kuriais atvejais reabilitaciją galima pradėti gana anksti — svarbu, kad ji būtų pritaikyta pagal konkretų etapą." },
      { q: "Ar po operacijos galima judėti, jei dar jaučiu skausmą?", a: "Dažnai taip, tačiau judesys ir krūvis turi būti parinkti tinkamai. Skausmas po operacijos nebūtinai reiškia, kad judėti negalima." },
      { q: "Kuo pooperacinė reabilitacija skiriasi nuo kineziterapijos?", a: "Pooperacinėje reabilitacijoje daugiau dėmesio gijimo etapui, audinių apsaugai ir nuosekliam perėjimui iš vienos stadijos į kitą." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo operacijos, gijimo eigos ir tikslo. Kartais pakanka kelių vizitų su aiškiu planu, kitais atvejais reikia ilgesnio proceso." },
      { q: "Ar galima derinti su manualine terapija?", a: "Kai kuriais etapais taip, tačiau viskas priklauso nuo operacijos tipo ir gijimo stadijos." },
      { q: "Ar pooperacinė reabilitacija tik sportininkams?", a: "Ne. Ji skirta visiems, kurie po operacijos nori saugiai atkurti judėjimą ir grįžti prie kasdienės veiklos ar darbo." },
    ],
    ctaTitle: "Norite kryptingai atsistatyti po operacijos?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime jūsų būklę, reabilitacijos etapą ir parinksime tinkamiausią atsistatymo kryptį.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Sudėtingos pooperacinės būklės, funkcijos atkūrimas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Pooperacinė reabilitacija, grįžimas į funkciją", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Judesio atkūrimas, atsistatymas po traumų ir operacijų", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Pooperacinė reabilitacija, manualinė terapija", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← Services", serviceLabel: "Service",
    title: "Post-operative Rehabilitation in Vilnius",
    subtitle: "Recovery after orthopaedic and spinal surgeries, with treatment tailored to the specific rehabilitation stage.",
    trustPoints: ["Individual condition and stage assessment", "Treatment based on surgery type and healing stage", "Systematic return to movement and function"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "pirmasis-vizitas", label: "Assessment" }, { id: "gydymo-planas", label: "Plan" },
      { id: "kainos", label: "Prices" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the service", aboutTitle: "What is post-operative rehabilitation?",
    aboutText: [
      "Post-operative rehabilitation is a purposeful recovery process after orthopaedic and spinal surgeries, helping safely restore mobility, function, strength and confidence in movement.",
      "After surgery it is important not just to wait for the body to heal, but to start applying the right treatment at the right time based on the specific rehabilitation stage. At different healing periods the body needs different load and different methods.",
      "At ReaMed clinic, post-operative rehabilitation is planned individually, taking into account the surgery performed, healing stage, doctor's recommendations and your goals.",
    ],
    benefits: [
      { icon: "📊", title: "Stage-based rehabilitation", text: "Treatment is chosen based on the specific healing period and current needs." },
      { icon: "🎯", title: "Individual plan", text: "Accounts for surgery type, condition, restrictions and your goals." },
      { icon: "🛡️", title: "Safe return to function", text: "We aim for recovery that is not just fast, but quality and well-founded." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "After orthopaedic surgery", "After spinal surgery",
      "Feeling stiffness or movement restriction", "Lacking strength, control or confidence in movement",
      "Unclear what can be done and what load to avoid", "Wanting full function recovery, not just healing",
      "Need a clear plan for returning to activity", "Doctor recommended rehabilitation",
    ],
    treatLabel: "Specialisation", treatTitle: "What conditions do we work with?",
    treatItems: [
      "Conditions after knee surgery", "Conditions after shoulder surgery",
      "Conditions after hip surgery", "Conditions after ankle surgery",
      "Conditions after spinal surgery", "Muscle weakness after immobilisation",
      "Reduced function and lack of confidence in movement",
    ],
    importantLabel: "Note", importantText: "After surgery, symptoms and recovery progress can vary greatly, so it is most important to understand not only what surgery was performed, but at which rehabilitation stage you currently are.", importantCta: "Book a consultation",
    midCtaTitle: "Not sure how to start recovery after surgery?", midCtaText: "Book your first consultation — together we will choose the most suitable direction.", midCtaBtn: "Book an appointment",
    visitLabel: "Assessment flow", visitTitle: "How do we assess post-operative condition?",
    visitSteps: [
      { n: "01", title: "Surgery and situation review", text: "We discuss what surgery was performed, when, what recommendations were given and how you feel now." },
      { n: "02", title: "Condition and function assessment", text: "We assess mobility, pain, swelling, strength, control and overall function." },
      { n: "03", title: "Stage determination", text: "We assess which healing stage you are at and what goals are most important now." },
      { n: "04", title: "Problem explanation", text: "We clearly explain what is lacking and what direction would be most logical." },
      { n: "05", title: "Treatment plan creation", text: "We create a plan based on surgery type, restrictions and goal." },
    ],
    planLabel: "Process", planTitle: "How is post-operative rehabilitation planned?",
    planText: [
      "The rehabilitation plan depends on surgery type, healing progress, doctor's recommendations and your goal.",
      "Rehabilitation typically proceeds in stages: symptom reduction, mobility restoration, strength and control development, load tolerance increase.",
      "The plan is adjusted based on progress. The goal is to help safely move from one stage to the next and return to daily activities, work or physical activity.",
    ],
    planCards: [
      ["Stage-based", "Treatment is adapted to the specific healing period."],
      ["Individual", "Accounts for surgery type, restrictions and goals."],
      ["Systematic", "Each stage prepares for the next — not too fast, not too slow."],
    ],
    appliedLabel: "Methods", appliedTitle: "What may be applied during treatment?",
    appliedItems: [
      "Physiotherapy", "Mobility restoration",
      "Muscle activation and control", "Strength building based on stage",
      "Load tolerance increase", "Manual therapy when appropriate",
      "Return-to-activity planning",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce pain and discomfort", "Reduce stiffness and movement restriction",
      "Restore function after surgery", "Improve strength, control and confidence",
      "Safely progress from stage to stage", "Return to daily activities, work or physical activity",
    ],
    forWhomLabel: "Target group", forWhomTitle: "Who is post-operative rehabilitation for?",
    forWhomItems: [
      "After any orthopaedic surgery", "After spinal surgery",
      "Those wanting full function recovery, not just healing", "Those lacking a clear recovery plan",
      "Those wanting to return to activity or sport",
    ],
    whyLabel: "ReaMed", whyTitle: "Why do patients come to ReaMed?",
    whyItems: [
      { title: "Stage-based assessment", text: "What matters is not only the surgery type but the specific rehabilitation stage." },
      { title: "Clear situation analysis", text: "After the visit you will understand what can be done, what to avoid and what direction is best." },
      { title: "Function as the goal", text: "The goal is not just healing, but real restoration of movement and strength." },
      { title: "Life-oriented approach", text: "We aim to help return to daily activities, work or sport." },
      { title: "Combined services", text: "The plan may include physiotherapy, manual therapy or other directions." },
    ],
    pricesLabel: "Pricing", pricesTitle: "Prices",
    priceFirst: "Initial visit", priceFirstDesc: "Assessment + rehabilitation plan",
    priceRepeat: "Follow-up visit", priceRepeatDesc: "Post-operative rehabilitation according to plan",
    allPrices: "All prices", packagesNote: "Visit packages available",
    specialistsLabel: "Team", specialistsTitle: "Specialists working with post-operative recovery", specialistCta: "Book",
    beforeLabel: "Before the first visit",
    beforeItems: ["Arrive 5–10 minutes early.", "Wear comfortable clothing.", "Bring surgery documents or doctor's recommendations."],
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "When can post-operative rehabilitation begin?", a: "It depends on surgery type, healing stage and doctor's recommendations. In some cases rehabilitation can begin quite early — what matters is that it is adapted to the specific stage." },
      { q: "Can I move if I still have pain after surgery?", a: "Often yes, but movement and load must be appropriately selected. Pain after surgery does not necessarily mean movement is not possible." },
      { q: "How does post-operative rehabilitation differ from physiotherapy?", a: "Post-operative rehabilitation gives much more attention to the healing stage, tissue protection and systematic progression from one stage to the next." },
      { q: "How many visits are typically needed?", a: "It depends on surgery, healing progress and goal. Sometimes a few visits with a clear plan suffice; other cases require a longer process." },
      { q: "Can it be combined with manual therapy?", a: "At certain stages yes, but it depends on surgery type and healing stage." },
      { q: "Is post-operative rehabilitation only for athletes?", a: "No. It is for anyone who wants to safely restore movement and return to daily activities or work after surgery." },
    ],
    ctaTitle: "Want to recover purposefully after surgery?", ctaText: "Book your first appointment — we will assess your condition, rehabilitation stage and choose the most appropriate recovery direction.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Complex post-operative conditions, function recovery", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Post-operative rehabilitation, return to function", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Movement restoration, recovery after injuries and surgery", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Post-operative rehabilitation, manual therapy", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
};

function SL({ children }: { children: React.ReactNode }) { return <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-2">{children}</p>; }
function ST({ children }: { children: React.ReactNode }) { return <h2 className="text-[1.625rem] md:text-[2rem] font-bold text-foreground leading-tight mb-4">{children}</h2>; }
function BL({ items }: { items: string[] }) { return <ul className="flex flex-col gap-2">{items.map((i) => (<li key={i} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#90CECA] mt-1.5 flex-shrink-0" /><span className="text-[0.9rem] text-secondary leading-relaxed">{i}</span></li>))}</ul>; }
function AN({ links }: { links: { id: string; label: string }[] }) {
  const [active, setActive] = useState("");
  useEffect(() => { const obs: IntersectionObserver[] = []; links.forEach(({ id }) => { const el = document.getElementById(id); if (!el) return; const o = new IntersectionObserver((e) => { e.forEach((x) => { if (x.isIntersecting) setActive(id); }); }, { rootMargin: "-30% 0px -60% 0px" }); o.observe(el); obs.push(o); }); return () => obs.forEach((o) => o.disconnect()); }, [links]);
  return <div className="sticky z-30 bg-white/96 backdrop-blur-sm border-b border-[#DDE9E8] shadow-[0_1px_8px_rgba(0,0,0,0.04)]" style={{ top: "104px" }}><div className="container-xl"><nav className="flex gap-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>{links.map(({ id, label }) => (<a key={id} href={`#${id}`} className={`whitespace-nowrap px-4 py-3.5 text-[0.8rem] font-semibold border-b-2 transition-colors duration-200 flex-shrink-0 ${active === id ? "border-[#7DB9B5] text-[#7DB9B5]" : "border-transparent text-muted/70 hover:text-foreground hover:border-[#DDE9E8]"}`}>{label}</a>))}</nav></div></div>;
}
function FQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="flex flex-col gap-2">{items.map((item, i) => (<div key={i} className="bg-white rounded-xl border border-[#DDE9E8] overflow-hidden"><button className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#F7FAF9] transition-colors duration-150" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}><span className="text-[0.9rem] font-semibold text-foreground leading-snug">{item.q}</span>{open === i ? <ChevronUp size={16} strokeWidth={2} className="text-[#7DB9B5] flex-shrink-0" /> : <ChevronDown size={16} strokeWidth={2} className="text-muted/40 flex-shrink-0" />}</button>{open === i && <div className="px-5 pb-4 pt-0.5"><p className="text-[0.875rem] text-muted leading-relaxed">{item.a}</p></div>}</div>))}</div>;
}

export default function PooperacineReabilitacijaContent() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-6 pb-12 md:pt-10 md:pb-16">
          <Link href="/#paslaugos" className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted/60 hover:text-[#7DB9B5] transition-colors duration-200 mb-4 block">{c.breadcrumb}</Link>
          <SL>{c.serviceLabel}</SL>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-foreground leading-[1.1] mb-4 max-w-[640px]">{c.title}</h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[540px]">{c.subtitle}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">{c.trustPoints.map((tp) => (<span key={tp} className="flex items-center gap-1.5 text-[0.8125rem] text-muted font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5]" />{tp}</span>))}</div>
          <div className="flex flex-wrap gap-3">
            <a href="/registracija" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.3)] hover:-translate-y-0.5">{c.ctaRegister} <ArrowRight size={15} strokeWidth={2.5} /></a>
            <a href="tel:+37060134304" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#90CECA] text-foreground text-[0.9rem] font-semibold rounded-xl hover:bg-[#EEF5F4] transition-all duration-200"><Phone size={15} strokeWidth={2} className="text-[#7DB9B5]" />{c.ctaConsult}</a>
          </div>
        </div>
      </div>
      <AN links={c.anchor} />
      <div className="container-xl py-10 md:py-14 flex flex-col gap-14 md:gap-16">
        <div id="kas-tai" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-mt-32">
          <div><SL>{c.aboutLabel}</SL><ST>{c.aboutTitle}</ST><div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">{c.aboutText.map((p, i) => <p key={i}>{p}</p>)}</div></div>
          <div className="rounded-2xl bg-white border border-[#DDE9E8] p-6 md:p-8 flex flex-col gap-4">{c.benefits.map(({ icon, title, text }) => (<div key={title} className="flex items-start gap-4"><span className="text-[1.375rem] leading-none flex-shrink-0">{icon}</span><div><p className="text-[0.9rem] font-bold text-foreground mb-0.5">{title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{text}</p></div></div>))}</div>
        </div>
        <div id="kada-kreiptis" className="scroll-mt-32"><SL>{c.whenLabel}</SL><ST>{c.whenTitle}</ST><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{c.whenItems.map((item) => (<div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200"><span className="w-2 h-2 rounded-full bg-[#7DB9B5] flex-shrink-0" /><span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span></div>))}</div></div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div><SL>{c.treatLabel}</SL><ST>{c.treatTitle}</ST><BL items={c.treatItems} /></div>
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8"><p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">{c.importantLabel}</p><p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">{c.importantText}</p><a href="/registracija" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200">{c.importantCta} <ArrowRight size={14} strokeWidth={2.5} /></a></div>
        </div>
        <div className="rounded-2xl bg-[#7DB9B5] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><p className="text-white font-bold text-[1.0625rem] mb-1">{c.midCtaTitle}</p><p className="text-white/80 text-[0.875rem]">{c.midCtaText}</p></div><a href="/registracija" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7DB9B5] text-[0.875rem] font-bold rounded-xl hover:bg-[#EEF5F4] transition-colors duration-200 flex-shrink-0">{c.midCtaBtn} <ArrowRight size={14} strokeWidth={2.5} /></a></div>
        <div id="pirmasis-vizitas" className="scroll-mt-32"><SL>{c.visitLabel}</SL><ST>{c.visitTitle}</ST><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{c.visitSteps.map((s) => (<div key={s.n} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200"><p className="text-[1.5rem] font-bold text-[#90CECA]/40 leading-none mb-3">{s.n}</p><p className="text-[0.9375rem] font-bold text-foreground mb-1.5 leading-snug">{s.title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{s.text}</p></div>))}</div></div>
        <div id="gydymo-planas" className="grid md:grid-cols-2 gap-8 md:gap-12 items-start scroll-mt-32">
          <div><SL>{c.planLabel}</SL><ST>{c.planTitle}</ST><div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">{c.planText.map((p, i) => <p key={i}>{p}</p>)}</div></div>
          <div className="flex flex-col gap-3">{c.planCards.map(([t, tx]) => (<div key={t} className="bg-white rounded-xl border border-[#DDE9E8] px-5 py-4 flex items-start gap-4"><span className="w-2 h-2 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" /><div><p className="text-[0.9rem] font-bold text-foreground mb-0.5">{t}</p><p className="text-[0.875rem] text-muted leading-relaxed">{tx}</p></div></div>))}</div>
        </div>
        <div><SL>{c.appliedLabel}</SL><ST>{c.appliedTitle}</ST><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{c.appliedItems.map((item) => (<div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200"><span className="w-2 h-2 rounded-full bg-[#90CECA] flex-shrink-0" /><span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span></div>))}</div></div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8"><SL>{c.goalsLabel}</SL><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.goalsTitle}</h2><BL items={c.goalItems} /></div>
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8"><SL>{c.forWhomLabel}</SL><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.forWhomTitle}</h2><BL items={c.forWhomItems} /></div>
        </div>
        <div><SL>{c.whyLabel}</SL><ST>{c.whyTitle}</ST><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{c.whyItems.map(({ title, text }) => (<div key={title} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200"><p className="text-[0.9375rem] font-bold text-foreground mb-2">{title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{text}</p></div>))}</div></div>
        <div id="kainos" className="rounded-2xl border border-[#DDE9E8] bg-white p-6 md:p-8 scroll-mt-32"><div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6"><div className="flex-1"><SL>{c.pricesLabel}</SL><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.pricesTitle}</h2><div className="flex flex-col sm:flex-row gap-5 sm:gap-8"><div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4"><p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">{c.priceFirst}</p><p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">70 €</p><p className="text-[0.78rem] text-muted/50 mb-3">60 min</p><p className="text-[0.8125rem] text-secondary leading-snug">{c.priceFirstDesc}</p></div><div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4"><p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">{c.priceRepeat}</p><p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">60 €</p><p className="text-[0.78rem] text-muted/50 mb-3">45 min</p><p className="text-[0.8125rem] text-secondary leading-snug">{c.priceRepeatDesc}</p></div></div></div><div className="flex flex-col gap-2 sm:pt-8"><Link href="/kainos" className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200 whitespace-nowrap">{c.allPrices} <ArrowRight size={14} strokeWidth={2.5} /></Link><p className="text-[0.75rem] text-muted/40 text-center">{c.packagesNote}</p></div></div></div>
        <div id="specialistai" className="scroll-mt-32"><SL>{c.specialistsLabel}</SL><ST>{c.specialistsTitle}</ST><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{c.specialists.map((s) => (<div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col"><a href={`/specialistai/${s.slug}`} className="block h-[200px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden"><img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} /></a><div className="p-4 flex flex-col flex-1"><a href={`/specialistai/${s.slug}`} className="text-[0.875rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">{s.name}</a><p className="text-[0.75rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p><p className="text-[0.75rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p><a href="/registracija" className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">{c.specialistCta} <ArrowRight size={12} strokeWidth={2.5} /></a></div></div>))}</div></div>
        <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-6 md:p-8"><div className="flex items-start gap-4"><span className="text-[1.5rem] leading-none mt-0.5 flex-shrink-0">📋</span><div><h2 className="text-[1.125rem] font-bold text-foreground mb-2">{c.beforeLabel}</h2><ul className="flex flex-col gap-1.5">{c.beforeItems.map((item) => (<li key={item} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" /><span className="text-[0.9rem] text-secondary">{item}</span></li>))}</ul></div></div></div>
        <div id="duk" className="scroll-mt-32"><SL>{c.faqLabel}</SL><ST>{c.faqTitle}</ST><FQ items={c.faqs} /></div>
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center"><h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">{c.ctaTitle}</h2><p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[460px] mx-auto">{c.ctaText}</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"><a href="/registracija" className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]">{c.ctaBtn} <ArrowRight size={15} strokeWidth={2.5} /></a><Link href="/kontaktai" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"><Phone size={14} strokeWidth={2} /> {c.ctaContact}</Link></div><p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p></div>
      </div>
    </div>
  );
}
