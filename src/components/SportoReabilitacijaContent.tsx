"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Paslaugos", serviceLabel: "Paslauga",
    title: "Sporto reabilitacija Vilniuje",
    subtitle: "Reabilitacija po traumų, perkrovų ir kryptingas grįžimas į aktyvumą ar sportą.",
    trustPoints: ["Individualus funkcinis įvertinimas", "Reabilitacija pagal traumą, krūvį ir tikslą", "Kryptingas grįžimas į sportą ar aktyvią veiklą"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "pirmasis-vizitas", label: "Pirmasis vizitas" }, { id: "gydymo-planas", label: "Gydymo planas" },
      { id: "kainos", label: "Kainos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie paslaugą", aboutTitle: "Kas yra sporto reabilitacija?",
    aboutText: [
      "Sporto reabilitacija – tai kryptingas gydymo ir atsistatymo procesas po traumų, fizinių perkrovų ar pasikartojančių skausmų, siekiant saugiai ir nuosekliai grįžti į aktyvumą ar sportą.",
      "Ši paslauga skirta ne tik profesionaliems sportininkams — ji taip pat tinka fiziškai aktyviems žmonėms, sportuojantiems mėgėjiškai, grįžtantiems po traumos ar norintiems vėl judėti be skausmo.",
      "ReaMed klinikoje sporto reabilitacija remiasi funkciniu įvertinimu, individualiu planu ir laipsnišku krūvio didinimu. Tikslas — ne tik sumažinti simptomus, bet ir paruošti kūną grįžti į judesį saugiau ir užtikrinčiau.",
    ],
    benefits: [
      { icon: "🎯", title: "Kryptingas procesas", text: "Reabilitacija planuojama pagal traumą, fizinį pasirengimą ir aiškų tikslą." },
      { icon: "📈", title: "Individualus krūvio valdymas", text: "Krūvis didinamas palaipsniui, atsižvelgiant į būklę ir progresą." },
      { icon: "🏃", title: "Tikslas – grįžimas į aktyvumą", text: "Siekiame ne tik sumažinti skausmą, bet ir paruošti grįžti į sportą." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Po sportinės traumos", "Po fizinės perkrovos ar pasikartojančio skausmo",
      "Kai po traumos kūnas nepasiruošęs grįžti į sportą", "Kai reikia saugaus grįžimo į treniruotes",
      "Norint ne tik sumažinti simptomus, bet ir atkurti funkciją", "Po kelio, peties, čiurnos ar kitų traumų",
      "Kai sportuojant kartojasi skausmas", "Trūksta krypties, kaip grįžti prie krūvio",
    ],
    treatLabel: "Specialybė", treatTitle: "Su kokiomis būklėmis dirbame?",
    treatItems: [
      "Raiščių, raumenų ir sausgyslių traumos", "Sąnarių perkrovos ir dirginimai",
      "Kelio, peties, čiurnos, klubo ar nugaros problemos", "Patempimų, sumušimų ar dalinių plyšimų būklės",
      "Pasikartojantis skausmas sporto metu", "Perkrovos sindromai",
      "Pooperacinės būklės su grįžimu į krūvį",
    ],
    importantLabel: "Svarbu", importantText: "Jei nesate tikri, ar jums labiau tinka sporto reabilitacija, kineziterapija ar manualinė terapija — registruokitės pirmajai konsultacijai. Įvertinsime ir parinksime tinkamiausią kryptį.", importantCta: "Registruotis konsultacijai",
    midCtaTitle: "Nežinote, ar sporto reabilitacija jums tinka?", midCtaText: "Registruokitės pirmajai konsultacijai — kartu pasirinkime tinkamiausią kryptį.", midCtaBtn: "Registruotis vizitui",
    visitLabel: "Vizito eiga", visitTitle: "Kaip vyksta pirmasis vizitas?",
    visitSteps: [
      { n: "01", title: "Nusiskundimų ir situacijos aptarimas", text: "Aptariame traumą, simptomus, sporto pobūdį ir tikslą." },
      { n: "02", title: "Funkcinis ištyrimas", text: "Vertiname judesio kokybę, jėgą, stabilumą, mobilumą ir apkrovos toleranciją." },
      { n: "03", title: "Krūvio ir rizikos įvertinimas", text: "Analizuojame, kokie judesiai provokuoja simptomus ir kas riboja grįžimą." },
      { n: "04", title: "Reabilitacijos krypties parinkimas", text: "Sudarome strategiją: nuo simptomų mažinimo iki grįžimo į sportinį krūvį." },
      { n: "05", title: "Pirmieji pratimai", text: "Pagal būklę skiriami pirmieji aktyvavimo, stabilumo ar jėgos pratimai." },
      { n: "06", title: "Plano aptarimas", text: "Paaiškiname reabilitacijos eigą, tempą ir ką svarbiausia stebėti." },
    ],
    planLabel: "Procesas", planTitle: "Kaip planuojama sporto reabilitacija?",
    planText: [
      "Planas priklauso nuo traumos pobūdžio, simptomų trukmės, sporto šakos ir galutinio tikslo. Vieniems svarbiausia grįžti prie kasdienio aktyvumo, kitiems — į treniruotes ar varžybas.",
      "Reabilitacija dažniausiai vyksta etapais: simptomų mažinimas, bazinės funkcijos atkūrimas, jėgos ir kontrolės gerinimas, tolerancijos krūviui didinimas.",
      "Planas koreguojamas pagal progresą. Tikslas — ne skubėti, o grįžti taip, kad kūnas būtų tam realiai pasiruošęs.",
    ],
    planCards: [
      ["Individuali", "Programa sudaroma pagal traumą, sporto pobūdį ir tikslą."],
      ["Laipsniška", "Krūvis didinamas nuosekliai, atsižvelgiant į organizmo reakciją."],
      ["Funkcinė", "Orientuota į realų pasirengimą grįžti į judesį bei sportą."],
    ],
    appliedLabel: "Metodai", appliedTitle: "Kas gali būti taikoma gydymo metu?",
    appliedItems: [
      "Funkcinis įvertinimas", "Individualiai parinkti pratimai",
      "Stabilumo ir kontrolės lavinimas", "Jėgos ir ištvermės atkūrimas",
      "Mobilumo gerinimas", "Krūvio tolerancijos didinimas",
      "Judesio technikos korekcija", "Grįžimo į sportą etapų planavimas",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti skausmą ir diskomfortą", "Atkurti judesio kokybę ir funkciją",
      "Gerinti jėgą, stabilumą ir kontrolę", "Didinti pasitikėjimą judesiu",
      "Paruošti saugiam grįžimui į aktyvumą", "Grįžti į sportą nuosekliai ir kryptingai",
    ],
    forWhomLabel: "Tikslinė grupė", forWhomTitle: "Kam tinka sporto reabilitacija?",
    forWhomItems: [
      "Profesionaliai sportuojantiems", "Aktyviai laisvalaikiu sportuojantiems",
      "Po traumų ar fizinių perkrovų", "Norintiems saugiai grįžti į treniruotes",
      "Tiems, kuriems sportuojant kartojasi skausmas",
    ],
    whyLabel: "ReaMed", whyTitle: "Kodėl pacientai renkasi ReaMed?",
    whyItems: [
      { title: "Funkcinis požiūris", text: "Vertiname ne tik skausmingą vietą, bet ir kaip kūnas juda ir toleruoja krūvį." },
      { title: "Individualus planas", text: "Sporto reabilitacija pritaikoma pagal traumą, sporto šaką ir konkretų tikslą." },
      { title: "Kryptingas grįžimas", text: "Siekiame, kad grįžimas į sportą būtų ne tik greitas, bet ir saugus bei pagrįstas." },
      { title: "Aiškus procesas", text: "Po vizito suprasite, kurioje stadijoje esate ir ką reikia daryti toliau." },
      { title: "Galimybė derinti paslaugas", text: "Sporto reabilitacija gali būti derinama su manualine terapija ar osteopatija." },
    ],
    pricesLabel: "Kainodara", pricesTitle: "Kainos",
    priceFirst: "Pirminis vizitas", priceFirstDesc: "Funkcinis įvertinimas + reabilitacijos planas",
    priceRepeat: "Pakartotinis vizitas", priceRepeatDesc: "Sporto reabilitacija pagal sudarytą planą",
    allPrices: "Visos kainos", packagesNote: "Galimi vizitų paketai",
    specialistsLabel: "Komanda", specialistsTitle: "Specialistai, teikiantys šią paslaugą", specialistCta: "Registruotis",
    beforeLabel: "Prieš pirmą vizitą",
    beforeItems: ["Atvykite 5–10 min. anksčiau.", "Vilkėkite sportinę ar judesių nevaržančią aprangą.", "Atsineškite tyrimų ar gydytojų išvadas, jei turite."],
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar sporto reabilitacija skirta tik profesionaliems sportininkams?", a: "Ne. Ji tinka ir profesionaliai, ir mėgėjiškai sportuojantiems, taip pat fiziškai aktyviems žmonėms, norintiems grįžti į judėjimą po traumos." },
      { q: "Kada galima pradėti sporto reabilitaciją po traumos?", a: "Tai priklauso nuo traumos pobūdžio ir stadijos. Daugeliu atvejų galima pradėti gana anksti, tačiau svarbu tinkamai įvertinti būklę ir parinkti krūvį." },
      { q: "Kuo sporto reabilitacija skiriasi nuo kineziterapijos?", a: "Sporto reabilitacija labiau orientuota į grįžimą į fizinį aktyvumą ir sportui būdingus judesius — daugiau dėmesio krūvio tolerancijai, jėgai ir etapiniam grįžimui." },
      { q: "Ar galima grįžti į sportą, jei skausmas sumažėjo?", a: "Ne visada. Skausmo sumažėjimas dar nereiškia, kad kūnas pasiruošęs sportiniam krūviui. Todėl svarbus kryptingas grįžimo planas." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo traumos, sporto pobūdžio ir tikslo. Kai kuriais atvejais pakanka kelių vizitų, kitais reikia ilgesnio proceso." },
      { q: "Ar sporto reabilitacija gali būti derinama su manualine terapija?", a: "Taip. Kai kuriais atvejais geriausias rezultatas pasiekiamas derinant aktyvią reabilitaciją su manualiniu gydymu." },
    ],
    ctaTitle: "Norite grįžti į aktyvumą saugiau?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime jūsų būklę ir parinksime tinkamiausią sporto reabilitacijos planą.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Sudėtingos traumos, funkcinis atkūrimas, grįžimas į aktyvumą", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Sporto reabilitacija, atsistatymas po traumų", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Perkrovos, grįžimas į sportą, judesio kontrolė", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Sporto traumos, manualinis gydymas, funkcinis atkūrimas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← Services", serviceLabel: "Service",
    title: "Sports Rehabilitation in Vilnius",
    subtitle: "Rehabilitation after injuries, overuse and a purposeful return to activity or sport.",
    trustPoints: ["Individual functional assessment", "Rehabilitation based on injury, load and goal", "Purposeful return to sport or active life"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "pirmasis-vizitas", label: "First visit" }, { id: "gydymo-planas", label: "Treatment plan" },
      { id: "kainos", label: "Prices" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the service", aboutTitle: "What is sports rehabilitation?",
    aboutText: [
      "Sports rehabilitation is a purposeful treatment and recovery process after injuries, physical overuse or recurring pain, aimed at safely and systematically returning to activity or sport.",
      "This service is not only for professional athletes — it is also suitable for physically active people who exercise recreationally, are returning after an injury, or want to move again without pain.",
      "At ReaMed clinic, sports rehabilitation is based on functional assessment, an individual plan and gradual load increase. The goal is not only to reduce symptoms, but to prepare the body for a safer and more confident return to movement.",
    ],
    benefits: [
      { icon: "🎯", title: "Purposeful process", text: "Rehabilitation is planned based on the injury, physical readiness and a clear goal." },
      { icon: "📈", title: "Individual load management", text: "Load is increased gradually, taking into account condition and progress." },
      { icon: "🏃", title: "Goal: return to activity", text: "We aim not just to reduce pain, but to prepare you for return to sport." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "After a sports injury", "After physical overload or recurring pain",
      "When body is not ready to return to sport after injury", "When safe return to training is needed",
      "Wanting to restore function, not just reduce symptoms", "After knee, shoulder, ankle or other injuries",
      "Recurring pain during sport", "Lacking a clear direction for returning to load",
    ],
    treatLabel: "Specialisation", treatTitle: "What conditions do we work with?",
    treatItems: [
      "Ligament, muscle and tendon injuries", "Joint overuse and irritation",
      "Knee, shoulder, ankle, hip or back problems", "Sprains, contusions or partial tears",
      "Recurring pain during sport", "Overuse syndromes",
      "Post-operative conditions with return to load",
    ],
    importantLabel: "Note", importantText: "If you are unsure whether sports rehabilitation, physiotherapy or manual therapy is more suitable — book an initial consultation. We will assess and choose the most appropriate direction.", importantCta: "Book a consultation",
    midCtaTitle: "Not sure if sports rehabilitation is right for you?", midCtaText: "Book your first consultation — together we will choose the most suitable direction.", midCtaBtn: "Book an appointment",
    visitLabel: "Visit flow", visitTitle: "How does the first visit work?",
    visitSteps: [
      { n: "01", title: "Discussion of complaints", text: "We discuss the injury, symptoms, sport type and goal." },
      { n: "02", title: "Functional assessment", text: "We assess movement quality, strength, stability, mobility and load tolerance." },
      { n: "03", title: "Load and risk assessment", text: "We analyse which movements trigger symptoms and what limits return to activity." },
      { n: "04", title: "Rehabilitation direction", text: "We create a strategy: from symptom reduction to return to sports load." },
      { n: "05", title: "Initial exercises", text: "Based on condition, initial activation, stability or strength exercises are prescribed." },
      { n: "06", title: "Plan discussion", text: "We explain the rehabilitation progression, pace and key things to monitor." },
    ],
    planLabel: "Process", planTitle: "How is sports rehabilitation planned?",
    planText: [
      "The plan depends on injury type, duration, sport and ultimate goal. For some, the priority is returning to daily activity; for others it is returning to training or competition.",
      "Rehabilitation typically proceeds in stages: symptom reduction, basic function restoration, strength and control improvement, load tolerance increase.",
      "The plan is adjusted based on progress. The goal is not to rush, but to return when the body is truly ready.",
    ],
    planCards: [
      ["Individual", "Programme created based on injury, sport type and goal."],
      ["Progressive", "Load increased systematically, based on body response."],
      ["Functional", "Focused on real readiness to return to movement and sport."],
    ],
    appliedLabel: "Methods", appliedTitle: "What may be applied during treatment?",
    appliedItems: [
      "Functional assessment", "Individually selected exercises",
      "Stability and control training", "Strength and endurance restoration",
      "Mobility improvement", "Load tolerance increase",
      "Movement technique correction", "Return-to-sport stage planning",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce pain and discomfort", "Restore movement quality and function",
      "Improve strength, stability and control", "Increase confidence in movement",
      "Prepare for safe return to activity", "Return to sport systematically and purposefully",
    ],
    forWhomLabel: "Target group", forWhomTitle: "Who is sports rehabilitation suitable for?",
    forWhomItems: [
      "Professional athletes", "Recreational sport enthusiasts",
      "After injuries or physical overuse", "Those wanting safe return to training",
      "Those experiencing recurring pain during sport",
    ],
    whyLabel: "ReaMed", whyTitle: "Why do patients choose ReaMed?",
    whyItems: [
      { title: "Functional approach", text: "We assess not only the painful area but how the body moves and tolerates load." },
      { title: "Individual plan", text: "Sports rehabilitation is tailored to the injury, sport type and specific goal." },
      { title: "Purposeful return", text: "We aim for a return to sport that is not just fast, but safe and well-founded." },
      { title: "Clear process", text: "After the visit you will know at which stage you are and what to do next." },
      { title: "Combined services available", text: "Sports rehabilitation can be combined with manual therapy or osteopathy." },
    ],
    pricesLabel: "Pricing", pricesTitle: "Prices",
    priceFirst: "Initial visit", priceFirstDesc: "Functional assessment + rehabilitation plan",
    priceRepeat: "Follow-up visit", priceRepeatDesc: "Sports rehabilitation according to the established plan",
    allPrices: "All prices", packagesNote: "Visit packages available",
    specialistsLabel: "Team", specialistsTitle: "Specialists providing this service", specialistCta: "Book",
    beforeLabel: "Before the first visit",
    beforeItems: ["Arrive 5–10 minutes early.", "Wear sports or comfortable loose-fitting clothing.", "Bring test results or doctor's conclusions if available."],
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is sports rehabilitation only for professional athletes?", a: "No. It is suitable for both professional and recreational athletes, as well as physically active people wanting to return to movement after an injury." },
      { q: "When can sports rehabilitation begin after an injury?", a: "It depends on the injury type and stage. In most cases rehabilitation can begin fairly early, but it is important to properly assess the condition and select appropriate load." },
      { q: "How does sports rehabilitation differ from physiotherapy?", a: "Sports rehabilitation is more focused on returning to physical activity and sport-specific movements — more emphasis on load tolerance, strength and staged return." },
      { q: "Can I return to sport once pain decreases?", a: "Not always. Reduced pain does not mean the body is ready for sports load. That is why a purposeful return plan is important." },
      { q: "How many visits are typically needed?", a: "It depends on the injury, sport type and goal. In some cases a few visits suffice; others require a longer systematic process." },
      { q: "Can sports rehabilitation be combined with manual therapy?", a: "Yes. In some cases the best results are achieved by combining active rehabilitation with manual treatment." },
    ],
    ctaTitle: "Want to return to activity more safely?", ctaText: "Book your first appointment — we will assess your condition and choose the most appropriate sports rehabilitation plan.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Complex injuries, functional recovery, return to activity", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Sports rehabilitation, recovery from injuries", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Overuse injuries, return to sport, movement control", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Sports injuries, manual therapy, functional recovery", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
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

export default function SportoReabilitacijaContent() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-6 pb-12 md:pt-10 md:pb-16">
          <a href="/#paslaugos" className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted/60 hover:text-[#7DB9B5] transition-colors duration-200 mb-4 block">{c.breadcrumb}</a>
          <SL>{c.serviceLabel}</SL>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-foreground leading-[1.1] mb-4 max-w-[640px]">{c.title}</h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[540px]">{c.subtitle}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">{c.trustPoints.map((tp) => (<span key={tp} className="flex items-center gap-1.5 text-[0.8125rem] text-muted font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5]" />{tp}</span>))}</div>
          <div className="flex flex-wrap gap-3">
            <a href="#registruotis" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.3)] hover:-translate-y-0.5">{c.ctaRegister} <ArrowRight size={15} strokeWidth={2.5} /></a>
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
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8"><p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">{c.importantLabel}</p><p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">{c.importantText}</p><a href="#registruotis" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200">{c.importantCta} <ArrowRight size={14} strokeWidth={2.5} /></a></div>
        </div>
        <div className="rounded-2xl bg-[#7DB9B5] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4"><div><p className="text-white font-bold text-[1.0625rem] mb-1">{c.midCtaTitle}</p><p className="text-white/80 text-[0.875rem]">{c.midCtaText}</p></div><a href="#registruotis" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7DB9B5] text-[0.875rem] font-bold rounded-xl hover:bg-[#EEF5F4] transition-colors duration-200 flex-shrink-0">{c.midCtaBtn} <ArrowRight size={14} strokeWidth={2.5} /></a></div>
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
        <div id="specialistai" className="scroll-mt-32"><SL>{c.specialistsLabel}</SL><ST>{c.specialistsTitle}</ST><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{c.specialists.map((s) => (<div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col"><a href={`/specialistai/${s.slug}`} className="block h-[200px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden"><img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} /></a><div className="p-4 flex flex-col flex-1"><a href={`/specialistai/${s.slug}`} className="text-[0.875rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">{s.name}</a><p className="text-[0.75rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p><p className="text-[0.75rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p><a href={`/specialistai/${s.slug}#registruotis`} className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">{c.specialistCta} <ArrowRight size={12} strokeWidth={2.5} /></a></div></div>))}</div></div>
        <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-6 md:p-8"><div className="flex items-start gap-4"><span className="text-[1.5rem] leading-none mt-0.5 flex-shrink-0">📋</span><div><h2 className="text-[1.125rem] font-bold text-foreground mb-2">{c.beforeLabel}</h2><ul className="flex flex-col gap-1.5">{c.beforeItems.map((item) => (<li key={item} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" /><span className="text-[0.9rem] text-secondary">{item}</span></li>))}</ul></div></div></div>
        <div id="duk" className="scroll-mt-32"><SL>{c.faqLabel}</SL><ST>{c.faqTitle}</ST><FQ items={c.faqs} /></div>
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center"><h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">{c.ctaTitle}</h2><p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[460px] mx-auto">{c.ctaText}</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"><a href="tel:+37060134304" className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]">{c.ctaBtn} <ArrowRight size={15} strokeWidth={2.5} /></a><Link href="/kontaktai" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"><Phone size={14} strokeWidth={2} /> {c.ctaContact}</Link></div><p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p></div>
      </div>
    </div>
  );
}
