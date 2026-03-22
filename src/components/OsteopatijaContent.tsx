"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Paslaugos", serviceLabel: "Paslauga",
    title: "Osteopatija Vilniuje",
    subtitle: "Manualinis osteopatinis gydymas, orientuotas į kūno struktūrą, judrumą ir funkcinius ryšius, siekiant mažinti skausmą, įtampą ir gerinti bendrą funkciją.",
    trustPoints: ["Struktūrinis osteopatinis požiūris", "Individuali osteopatinė rutina", "Esant poreikiui visceraliniai ir kraniosakraliniai elementai"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "pirmasis-vizitas", label: "Pirmasis vizitas" }, { id: "gydymo-planas", label: "Gydymo planas" },
      { id: "kainos", label: "Kainos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie paslaugą", aboutTitle: "Kas yra osteopatija?",
    aboutText: [
      "Osteopatija – tai manualinis gydymas, paremtas kūno struktūros, judrumo ir skirtingų sistemų tarpusavio ryšių vertinimu. Gydymo metu siekiama ne tik sumažinti simptomus, bet ir suprasti, kaip konkreti problema susijusi su bendra kūno funkcija.",
      "ReaMed klinikoje osteopatija taikoma praktiškai ir tikslingai. Daugiausia dėmesio skiriama struktūriniam osteopatiniam gydymui — sąnarių, audinių, įtampos zonų ir funkcinių ryšių vertinimui bei korekcijai.",
      "Priklausomai nuo būklės, gydymo metu gali būti taikomi struktūriniai, visceraliniai ar kraniosakraliniai elementai. Tikslas — padėti kūnui judėti laisviau, mažinti įtampą ir gerinti bendrą funkciją.",
    ],
    benefits: [
      { icon: "🏗️", title: "Struktūrinis požiūris", text: "Dėmesys skiriamas ne tik simptomui, bet ir kūno mechanikai bei funkciniams ryšiams." },
      { icon: "🎯", title: "Individuali osteopatinė rutina", text: "Gydymas parenkamas pagal jūsų būklę, o ne taikomas pagal vieną schemą visiems." },
      { icon: "📋", title: "Aiška kryptis", text: "Vizito metu siekiama realaus funkcinio pokyčio, o ne tik trumpalaikio palengvėjimo." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Pasikartojantis nugaros ar kaklo skausmas", "Kūno įtampa, sustingimas ar judesio apribojimas",
      "Problema susijusi ne tik su viena vieta, bet ir bendru kūno disbalansu", "Po traumos ar perkrovos norisi platesnio funkcijos vertinimo",
      "Diskomfortas, kurio nepavyksta paaiškinti tik vienu lokaliu sutrikimu", "Manualinis gydymas su platesniu osteopatiniu vertinimu",
      "Svarbu ne tik simptomo mažinimas, bet ir bendras kūno funkcijos gerinimas",
    ],
    treatLabel: "Specialybė", treatTitle: "Su kokiomis būklėmis dirbame?",
    treatItems: [
      "Nugaros, kaklo ir pečių juostos skausmai", "Stuburo ir sąnarių judrumo sutrikimai",
      "Pasikartojanti kūno įtampa ar sustingimas", "Būklės po perkrovos ar traumų",
      "Funkciniai laikysenos ir judesio apribojimai", "Diskomfortas dėl audinių ar fascijų įtampos",
      "Situacijos, kai osteopatiją tikslinga derinti su kitomis gydymo priemonėmis",
    ],
    importantLabel: "Svarbu", importantText: "Jei nesate tikri, ar jums labiausiai tinka osteopatija, manualinė terapija ar kineziterapija, registruokitės pirmajai konsultacijai. Vizito metu įvertinsime ir parinksime tinkamiausią kryptį.", importantCta: "Registruotis konsultacijai",
    midCtaTitle: "Nežinote, ar osteopatija jums tinka?", midCtaText: "Registruokitės pirmajai konsultacijai — kartu pasirinkime tinkamiausią kryptį.", midCtaBtn: "Registruotis vizitui",
    visitLabel: "Vizito eiga", visitTitle: "Kaip vyksta pirmasis vizitas?",
    visitSteps: [
      { n: "01", title: "Nusiskundimų aptarimas", text: "Išklausome, kas jus vargina, kada simptomai atsirado ir kaip jie kinta." },
      { n: "02", title: "Būklės ir judesio įvertinimas", text: "Vertiname laikyseną, judesio kokybę, audinių įtampą ir bendrus kūno funkcinius ryšius." },
      { n: "03", title: "Osteopatinis vertinimas", text: "Ieškome, kaip probleminė zona susijusi su kitomis kūno sritimis ir kokie mechaniniai ryšiai gali palaikyti simptomus." },
      { n: "04", title: "Gydymo taikymas", text: "Parenkama individuali osteopatinė rutina su struktūriniu akcentu ir papildomais elementais pagal poreikį." },
      { n: "05", title: "Reakcijos įvertinimas", text: "Vertiname, kaip kūnas reaguoja į gydymą, ir aptariame tolimesnę kryptį." },
      { n: "06", title: "Rekomendacijos", text: "Jei reikia, gaunate rekomendacijas dėl krūvio, judesio ar kitų gydymo etapų." },
    ],
    planLabel: "Procesas", planTitle: "Kaip planuojamas osteopatinis gydymas?",
    planText: [
      "Vizitų dažnis priklauso nuo jūsų būklės, simptomų pobūdžio ir to, kaip kūnas reaguoja į gydymą.",
      "Gydymas nėra šabloninis. Kiekvieno vizito metu vertinama, kas tuo metu svarbiausia: struktūrinis gydymas, įtampos mažinimas ar funkcinių ryšių gerinimas.",
      "Prireikus osteopatija gali būti derinama su kineziterapija ar manualine terapija.",
    ],
    planCards: [
      ["Individualus", "Kiekviena osteopatinė rutina parenkama pagal konkrečią būklę ir jos dinamiką."],
      ["Struktūrinis", "Didžiausias dėmesys skiriamas kūno mechanikai, judrumui ir įtampos ryšiams."],
      ["Kompleksiškas", "Esant poreikiui įtraukiami visceraliniai ar kraniosakraliniai elementai."],
    ],
    appliedLabel: "Metodai", appliedTitle: "Kas gali būti taikoma gydymo metu?",
    appliedItems: [
      "Struktūrinės osteopatinės technikos", "Sąnarių ir audinių judrumo gerinimas",
      "Minkštųjų audinių ir fascinių ryšių korekcija", "Įtampos ir kompensacinių grandžių mažinimas",
      "Visceraliniai elementai pagal poreikį", "Kraniosakraliniai elementai pagal indikacijas",
      "Rekomendacijos dėl tolimesnės gydymo krypties",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti skausmą ir diskomfortą", "Gerinti sąnarių ir audinių judrumą",
      "Mažinti bendrą kūno įtampą", "Gerinti judesio kokybę ir funkciją",
      "Padėti kūnui lengviau prisitaikyti prie krūvio", "Parinkti aiškią tolimesnio gydymo kryptį",
    ],
    forWhomLabel: "Tikslinė grupė", forWhomTitle: "Kam tinka osteopatija?",
    forWhomItems: [
      "Jaučiantiems pasikartojančius nugaros ar kaklo skausmus", "Turintiems judesio ribotumą ar sustingimą",
      "Po traumų ar fizinių perkrovų", "Norintiems platesnio manualinio gydymo požiūrio",
      "Tiems, kuriems svarbu geriau suprasti bendrą kūno būklę",
    ],
    whyLabel: "ReaMed", whyTitle: "Kodėl pacientai renkasi ReaMed?",
    whyItems: [
      { title: "Praktinis osteopatinis požiūris", text: "Osteopatija taikoma remiantis aiškiu kūno funkcijos ir struktūros vertinimu." },
      { title: "Struktūrinis akcentas", text: "Didžiausias dėmesys skiriamas mechanikai, judrumui, įtampai ir probleminių zonų ryšiams." },
      { title: "Individuali osteopatinė rutina", text: "Gydymas nėra vienodas visiems — kiekvienam parenkama tai, kas tuo metu svarbiausia." },
      { title: "Aiškus planas po vizito", text: "Po vizito geriau suprasite, kas vyksta ir kokia kryptis jums tinkamiausia." },
      { title: "Galimybė derinti paslaugas", text: "Osteopatija gali būti derinama su kineziterapija ar manualine terapija." },
    ],
    pricesLabel: "Kainodara", pricesTitle: "Kainos",
    priceFirst: "Pirminis vizitas", priceFirstDesc: "Įvertinimas + gydymo plano sudarymas",
    priceRepeat: "Pakartotinis vizitas", priceRepeatDesc: "Osteopatinis gydymas pagal sudarytą planą",
    allPrices: "Visos kainos", packagesNote: "Galimi vizitų paketai",
    specialistsLabel: "Komanda", specialistsTitle: "Specialistai, teikiantys šią paslaugą", specialistCta: "Registruotis",
    beforeLabel: "Prieš pirmą vizitą",
    beforeItems: ["Atvykite 5–10 min. anksčiau.", "Vilkėkite patogią, laisvą aprangą.", "Jei turite — atsineškite tyrimų atsakymus ar gydytojų rekomendacijas."],
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Kuo osteopatija skiriasi nuo manualinės terapijos?", a: "Manualinė terapija dažniau orientuota į tikslingą darbą su konkrečiu sąnariu ar skausminga sritimi, o osteopatijoje vertinami platesni kūno struktūros ir funkcinių ryšių aspektai. Praktikoje šios kryptys gali persidengti ir būti derinamos." },
      { q: "Ar osteopatija visada yra švelni technika?", a: "Ne visada. Osteopatinio gydymo pobūdis priklauso nuo būklės ir audinių reakcijos. Kai kuriais atvejais taikomos švelnesnės technikos, kitais — labiau struktūrinis manualinis gydymas." },
      { q: "Ar gydymo metu taikomi tik kraniosakraliniai ar visceraliniai metodai?", a: "Ne. ReaMed klinikoje osteopatija daugiausia taikoma struktūriškai, o visceraliniai ar kraniosakraliniai elementai įtraukiami tik tada, kai tai tikslinga konkrečiai būklei." },
      { q: "Ar osteopatija tinka esant lėtinei įtampai ar pasikartojančiam skausmui?", a: "Dažnai taip. Osteopatinis požiūris gali būti naudingas tuomet, kai problema kartojasi ar apima daugiau nei vieną kūno sritį." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo simptomų pobūdžio ir jūsų reakcijos į gydymą. Kai kuriais atvejais pakanka kelių vizitų, kitais verta planuoti nuoseklesnį procesą." },
      { q: "Ar osteopatija gali būti derinama su kineziterapija?", a: "Taip, dažnai geriausias rezultatas pasiekiamas tada, kai manualinis osteopatinis gydymas derinamas su aktyvesniu funkcijos atkūrimu." },
    ],
    ctaTitle: "Norite pradėti gydymą?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime jūsų būklę ir parinksime, ar jums labiausiai tinka osteopatija, ar kita gydymo kryptis.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [{ name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Struktūrinis osteopatinis gydymas, kūno mechanikos vertinimas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" }],
  },
  en: {
    breadcrumb: "← Services", serviceLabel: "Service",
    title: "Osteopathy in Vilnius",
    subtitle: "Manual osteopathic treatment focused on body structure, mobility and functional connections to reduce pain, tension and improve overall function.",
    trustPoints: ["Structural osteopathic approach", "Individual osteopathic routine", "Visceral and craniosacral elements when indicated"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "pirmasis-vizitas", label: "First visit" }, { id: "gydymo-planas", label: "Treatment plan" },
      { id: "kainos", label: "Prices" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the service", aboutTitle: "What is osteopathy?",
    aboutText: [
      "Osteopathy is manual treatment based on assessing the body's structure, mobility and the relationships between different systems. The aim is not only to reduce symptoms, but to understand how a specific problem relates to overall body function.",
      "At ReaMed clinic, osteopathy is applied practically and purposefully. The main focus is on structural osteopathic treatment — assessment and correction of joints, tissues, tension zones and functional connections.",
      "Depending on the condition, visceral or craniosacral elements may be incorporated during treatment. The goal is to help the body move more freely, reduce tension and improve overall function.",
    ],
    benefits: [
      { icon: "🏗️", title: "Structural approach", text: "Focus is not only on the symptom, but on body mechanics and functional connections." },
      { icon: "🎯", title: "Individual osteopathic routine", text: "Treatment is chosen based on your condition, not a one-size-fits-all scheme." },
      { icon: "📋", title: "Clear direction", text: "During the visit we aim for real functional change, not just temporary relief." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "Recurring back or neck pain", "Body tension, stiffness or movement restriction",
      "Problem seems related not just to one area but overall body imbalance", "Wanting broader functional assessment after injury or overload",
      "Discomfort that cannot be explained by a single local condition", "Manual treatment with a wider osteopathic assessment",
      "Importance of improving overall body function, not just reducing symptoms",
    ],
    treatLabel: "Specialisation", treatTitle: "What conditions do we work with?",
    treatItems: [
      "Back, neck and shoulder girdle pain", "Spinal and joint mobility disorders",
      "Recurring body tension or stiffness", "Conditions after overload or injuries",
      "Functional postural and movement restrictions", "Discomfort due to tissue or fascial tension",
      "Situations where combining osteopathy with other treatment is appropriate",
    ],
    importantLabel: "Note", importantText: "If you are unsure whether osteopathy, manual therapy or physiotherapy is most suitable for you, book an initial consultation. During the visit we will assess your condition and choose the most appropriate direction.", importantCta: "Book a consultation",
    midCtaTitle: "Not sure if osteopathy is right for you?", midCtaText: "Book your first consultation — together we will choose the most suitable direction.", midCtaBtn: "Book an appointment",
    visitLabel: "Visit flow", visitTitle: "How does the first visit work?",
    visitSteps: [
      { n: "01", title: "Discussion of complaints", text: "We listen to what is bothering you, when symptoms started and how they change." },
      { n: "02", title: "Condition and movement assessment", text: "We assess posture, movement quality, tissue tension and overall body functional connections." },
      { n: "03", title: "Osteopathic assessment", text: "We look at how the problem area relates to other body regions and what mechanical connections may maintain symptoms." },
      { n: "04", title: "Treatment application", text: "An individual osteopathic routine is chosen with a structural focus and additional elements as needed." },
      { n: "05", title: "Response assessment", text: "We evaluate how the body responds to treatment and discuss the further direction." },
      { n: "06", title: "Recommendations", text: "If needed, you receive recommendations regarding load, movement or further treatment stages." },
    ],
    planLabel: "Process", planTitle: "How is osteopathic treatment planned?",
    planText: [
      "Visit frequency depends on your condition, symptom pattern and how the body responds to treatment.",
      "Treatment is not a template. Each visit focuses on what is most important at that moment: structural treatment, reducing tension or improving functional connections.",
      "When needed, osteopathy can be combined with physiotherapy or manual therapy.",
    ],
    planCards: [
      ["Individual", "Each osteopathic routine is chosen based on the specific condition and its dynamics."],
      ["Structural", "Primary focus is on body mechanics, mobility and tension connections."],
      ["Comprehensive", "Visceral or craniosacral elements incorporated when indicated."],
    ],
    appliedLabel: "Methods", appliedTitle: "What may be applied during treatment?",
    appliedItems: [
      "Structural osteopathic techniques", "Joint and tissue mobility improvement",
      "Soft tissue and fascial connection correction", "Tension and compensation chain reduction",
      "Visceral elements when appropriate", "Craniosacral elements when indicated",
      "Recommendations for further treatment direction",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce pain and discomfort", "Improve joint and tissue mobility",
      "Reduce overall body tension", "Improve movement quality and function",
      "Help the body adapt to load more easily", "Establish a clear further treatment direction",
    ],
    forWhomLabel: "Target group", forWhomTitle: "Who is osteopathy suitable for?",
    forWhomItems: [
      "Those with recurring back or neck pain", "Those with movement restriction or stiffness",
      "After injuries or physical overload", "Those wanting a broader manual treatment approach",
      "Those wanting to better understand their overall body condition",
    ],
    whyLabel: "ReaMed", whyTitle: "Why do patients choose ReaMed?",
    whyItems: [
      { title: "Practical osteopathic approach", text: "Osteopathy is applied based on clear assessment of body function and structure." },
      { title: "Structural emphasis", text: "Primary focus is on mechanics, mobility, tension and problem area connections." },
      { title: "Individual osteopathic routine", text: "Treatment is not the same for everyone — each patient gets what is most relevant at that time." },
      { title: "Clear plan after the visit", text: "After the visit you will better understand what is happening and what direction suits you best." },
      { title: "Combined services available", text: "Osteopathy can be combined with physiotherapy or manual therapy when needed." },
    ],
    pricesLabel: "Pricing", pricesTitle: "Prices",
    priceFirst: "Initial visit", priceFirstDesc: "Assessment + treatment plan",
    priceRepeat: "Follow-up visit", priceRepeatDesc: "Osteopathic treatment according to the established plan",
    allPrices: "All prices", packagesNote: "Visit packages available",
    specialistsLabel: "Team", specialistsTitle: "Specialists providing this service", specialistCta: "Book",
    beforeLabel: "Before the first visit",
    beforeItems: ["Arrive 5–10 minutes early.", "Wear comfortable, loose-fitting clothing.", "If available — bring test results or doctor's recommendations."],
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "How does osteopathy differ from manual therapy?", a: "Manual therapy is more often focused on targeted work with a specific joint or painful area, while osteopathy takes a broader view of body structure and functional connections. In practice these approaches can overlap and be combined." },
      { q: "Is osteopathy always a gentle technique?", a: "Not always. The nature of osteopathic treatment depends on the condition and tissue response. In some cases gentler techniques are used, in others a more structural manual approach." },
      { q: "Is treatment only craniosacral or visceral methods?", a: "No. At ReaMed clinic osteopathy is primarily applied structurally, and visceral or craniosacral elements are incorporated only when specifically indicated for the condition." },
      { q: "Is osteopathy suitable for chronic tension or recurring pain?", a: "Often yes. An osteopathic approach can be helpful when the problem recurs or involves more than one body area." },
      { q: "How many visits are typically needed?", a: "It depends on the symptom pattern and your response to treatment. In some cases a few visits suffice, in others a more systematic process is worthwhile." },
      { q: "Can osteopathy be combined with physiotherapy?", a: "Yes, often the best results are achieved when manual osteopathic treatment is combined with more active function recovery." },
    ],
    ctaTitle: "Ready to start treatment?", ctaText: "Book your first appointment — we will assess your condition and determine whether osteopathy or another treatment direction is most suitable for you.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [{ name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Structural osteopathic treatment, body mechanics assessment", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" }],
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

export default function OsteopatijaContent() {
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
        <div id="kainos" className="rounded-2xl border border-[#DDE9E8] bg-white p-6 md:p-8 scroll-mt-32"><div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6"><div className="flex-1"><SL>{c.pricesLabel}</SL><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.pricesTitle}</h2><div className="flex flex-col sm:flex-row gap-5 sm:gap-8"><div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4"><p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">{c.priceFirst}</p><p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">100 €</p><p className="text-[0.78rem] text-muted/50 mb-3">60 min</p><p className="text-[0.8125rem] text-secondary leading-snug">{c.priceFirstDesc}</p></div><div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4"><p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">{c.priceRepeat}</p><p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">100 €</p><p className="text-[0.78rem] text-muted/50 mb-3">60 min</p><p className="text-[0.8125rem] text-secondary leading-snug">{c.priceRepeatDesc}</p></div></div></div><div className="flex flex-col gap-2 sm:pt-8"><Link href="/kainos" className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200 whitespace-nowrap">{c.allPrices} <ArrowRight size={14} strokeWidth={2.5} /></Link><p className="text-[0.75rem] text-muted/40 text-center">{c.packagesNote}</p></div></div></div>
        <div id="specialistai" className="scroll-mt-32"><SL>{c.specialistsLabel}</SL><ST>{c.specialistsTitle}</ST><div className="grid sm:grid-cols-2 max-w-[320px] gap-5">{c.specialists.map((s) => (<div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col"><a href={`/specialistai/${s.slug}`} className="block h-[220px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden"><img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} /></a><div className="p-4 flex flex-col flex-1"><a href={`/specialistai/${s.slug}`} className="text-[0.9375rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">{s.name}</a><p className="text-[0.78rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p><p className="text-[0.78rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p><a href={`/specialistai/${s.slug}#registruotis`} className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">{c.specialistCta} <ArrowRight size={13} strokeWidth={2.5} /></a></div></div>))}</div></div>
        <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-6 md:p-8"><div className="flex items-start gap-4"><span className="text-[1.5rem] leading-none mt-0.5 flex-shrink-0">📋</span><div><h2 className="text-[1.125rem] font-bold text-foreground mb-2">{c.beforeLabel}</h2><ul className="flex flex-col gap-1.5">{c.beforeItems.map((item) => (<li key={item} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" /><span className="text-[0.9rem] text-secondary">{item}</span></li>))}</ul></div></div></div>
        <div id="duk" className="scroll-mt-32"><SL>{c.faqLabel}</SL><ST>{c.faqTitle}</ST><FQ items={c.faqs} /></div>
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center"><h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">{c.ctaTitle}</h2><p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[460px] mx-auto">{c.ctaText}</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"><a href="tel:+37060134304" className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]">{c.ctaBtn} <ArrowRight size={15} strokeWidth={2.5} /></a><Link href="/kontaktai" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"><Phone size={14} strokeWidth={2} /> {c.ctaContact}</Link></div><p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p></div>
      </div>
    </div>
  );
}
