"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Ką gydome", conditionLabel: "Problema",
    title: "Atsistatymas po operacijų Vilniuje",
    subtitle: "Pooperacinė reabilitacija padeda saugiai atkurti judrumą, funkciją, jėgą ir pasitikėjimą judesiu — pagal konkretų gijimo etapą.",
    trustPoints: ["Reabilitacija pagal operacijos tipą ir gijimo stadiją", "Individualus būklės ir etapo įvertinimas", "Nuoseklus grįžimas į judėjimą, funkciją ir krūvį"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "kaip-vertiname", label: "Kaip vertiname?" }, { id: "metodai", label: "Metodai" },
      { id: "paslaugos", label: "Paslaugos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie problemą", aboutTitle: "Atsistatymas po ortopedinių ir stuburo operacijų",
    aboutText: [
      "Pooperacinė reabilitacija — tai kryptingas atsistatymo procesas, padedantis saugiai atkurti judrumą, funkciją, jėgą ir pasitikėjimą judesiu po ortopedinių ar stuburo operacijų.",
      "Po operacijos svarbu ne tik laukti, kol kūnas sugis. Skirtingais gijimo laikotarpiais kūnui reikia skirtingo krūvio ir tikslų. Tinkamu laiku pradėtas gydymas gali žymiai pagerinti atsistatymo kokybę.",
      "ReaMed klinikoje pooperacinė reabilitacija planuojama individualiai: atsižvelgiant į operacijos tipą, gijimo stadiją, gydytojo rekomendacijas ir jūsų tikslus.",
    ],
    keyPoints: [
      { title: "Gydymas pagal etapą", text: "Kiekvienais gijimo laikotarpiais kūnui reikia kitokio požiūrio ir kitokio krūvio." },
      { title: "Individualus planas", text: "Atsižvelgiama į operacijos pobūdį, būklę, apribojimus ir tikslus." },
      { title: "Saugus grįžimas", text: "Siekiame, kad atsistatymas būtų ne tik greitas, bet ir kokybiškas." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Po ortopedinių operacijų", "Po stuburo operacijų",
      "Jaučiate sustingimą ar judesio ribotumą", "Trūksta jėgos, kontrolės ar pasitikėjimo",
      "Neaišku, ką galima daryti ir ko vengti", "Norite pilnai atkurti funkciją",
      "Reikia aiškaus plano grįžimui į aktyvumą", "Gydytojas rekomendavo pradėti reabilitaciją",
    ],
    relatedLabel: "Po kokių operacijų dirbame", relatedTitle: "Su kokiomis operacijomis susiję",
    relatedItems: [
      "Kelio operacijos (raiščiai, meniskas, kremzlė)", "Peties operacijos",
      "Klubo sąnario operacijos", "Čiurnos ar kitos ortopedinės operacijos",
      "Stuburo operacijos", "Judesio ribotumas po operacijos",
      "Raumenų silpnumas po imobilizacijos", "Grįžimas į darbą ar aktyvumą",
    ],
    assessLabel: "Vertinimo eiga", assessTitle: "Kaip vertiname būklę po operacijos?",
    assessSteps: [
      { n: "01", title: "Operacijos aptarimas", text: "Aptariame, kokia operacija buvo atlikta, kada ir kokios pateiktos rekomendacijos." },
      { n: "02", title: "Funkcijos įvertinimas", text: "Vertiname judrumą, skausmą, tinimą, jėgą, kontrolę ir bendrą funkcinę situaciją." },
      { n: "03", title: "Reabilitacijos etapo nustatymas", text: "Nustatome, kuriame gijimo etape esate ir kokie tikslai dabar svarbiausi." },
      { n: "04", title: "Problemos paaiškinimas", text: "Pasakome, ko trūksta funkcijai ir kokia atsistatymo kryptis logiškiausia." },
      { n: "05", title: "Gydymo planas", text: "Sudarome individualų planą pagal operaciją, apribojimus ir tikslą." },
    ],
    methodsLabel: "Metodai", methodsTitle: "Kas gali būti taikoma gydymo metu?",
    methodItems: [
      "Pooperacinė reabilitacija", "Kineziterapija",
      "Judrumo atkūrimas", "Raumenų aktyvavimas ir kontrolė",
      "Jėgos didinimas pagal etapą", "Krūvio tolerancijos didinimas",
      "Grįžimo į kasdienę veiklą planavimas",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti skausmą ir diskomfortą", "Mažinti sustingimą ir judesio ribotumą",
      "Atkurti funkciją po operacijos", "Gerinti jėgą, kontrolę ir pasitikėjimą",
      "Padėti pereiti iš vieno etapo į kitą", "Paruošti grįžimui į kasdienę veiklą",
    ],
    redFlagsLabel: "Svarbu žinoti", redFlagsTitle: "Kada reikalingas skubesnis įvertinimas?",
    redFlagsIntro: "Dauguma pooperacinių būklių gali būti vertinamos planine tvarka, tačiau kai kuriais atvejais svarbus greitesnis gydytojo įvertinimas:",
    redFlagItems: [
      "Skausmas labai stiprus ir sparčiai didėja", "Sparčiai didėja tinimas",
      "Ryškus paraudimas, karštis ar žaizdos pokyčiai", "Pakyla temperatūra ar blogėja bendra savijauta",
      "Staiga ryškiai sumažėja funkcija", "Atsiranda neįprasti jutimo ar silpnumo simptomai",
    ],
    servicesLabel: "Paslaugos", servicesTitle: "Kokios paslaugos gali tikti atsistatant po operacijų?",
    services: [
      { title: "Pooperacinė reabilitacija", text: "Tinka, kai svarbiausia atsistatyti pagal konkretų gijimo ir reabilitacijos etapą.", href: "/paslaugos/pooperacine-reabilitacija" },
      { title: "Kineziterapija", text: "Tinka, kai pagrindinis tikslas — atkurti judesį, funkciją, kontrolę ir jėgą.", href: "/paslaugos/kineziterapija" },
      { title: "Manualinė terapija", text: "Tam tikrais etapais gali būti naudinga siekiant gerinti judrumą ar mažinti diskomfortą.", href: "/paslaugos/manualine-terapija" },
      { title: "Sporto reabilitacija", text: "Tinka, kai po operacijos siekiama grįžti į aktyvesnį fizinį krūvį ar sportą.", href: "/paslaugos/sporto-reabilitacija" },
    ],
    servicesNote: "Tinkamiausia paslauga priklauso nuo operacijos pobūdžio, gijimo stadijos ir tikslų. Pirmiausia svarbus individualus įvertinimas.",
    specialistsLabel: "Specialistai", specialistsTitle: "Specialistai, dirbantys su atsistatymu po operacijų", specialistCta: "Registruotis",
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Kada galima pradėti reabilitaciją po operacijos?", a: "Tai priklauso nuo operacijos tipo ir gijimo stadijos. Daugeliu atvejų galima pradėti gana anksti, pritaikant reikiamą krūvį." },
      { q: "Ar po operacijos normalu jausti sustingimą ir silpnumą?", a: "Taip. Po operacijos dėl skausmo, tinimo ir tausojimo dažnai sumažėja judrumas, jėga ir pasitikėjimas judesiu." },
      { q: "Kuo pooperacinė reabilitacija skiriasi nuo kineziterapijos?", a: "Ji labiau orientuota į audinių gijimo stadiją, saugų krūvio didinimą ir perėjimą per konkrečius reabilitacijos etapus." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo operacijos pobūdžio ir tikslų. Kai kuriais atvejais pakanka kelių vizitų, kitais reikia ilgesnio proceso." },
      { q: "Ar po operacijos galima greitai grįžti į sportą?", a: "Tai priklauso nuo operacijos ir funkcijos atkūrimo. Vien tik skausmo sumažėjimas dar nereiškia pasiruošimo dideliam krūviui." },
      { q: "Ar gydymo metu gausiu rekomendacijų namoms?", a: "Taip — gausite rekomendacijas dėl judesio, pratimų, krūvio ir kasdienės veiklos." },
    ],
    ctaTitle: "Norite kryptingai atsistatyti po operacijos?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime jūsų būklę, reabilitacijos etapą ir parinksime tinkamiausią atsistatymo kryptį.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Pooperacinė reabilitacija, funkcijos atkūrimas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Pooperacinė reabilitacija, sporto traumos", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Etapinis atsistatymas, grįžimas į aktyvumą", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Pooperacinis atsistatymas, judrumo atkūrimas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← What we treat", conditionLabel: "Condition",
    title: "Post-operative Recovery in Vilnius",
    subtitle: "Post-operative rehabilitation helps safely restore mobility, function, strength and confidence in movement — according to the specific healing stage.",
    trustPoints: ["Rehabilitation based on surgery type and healing stage", "Individual condition and stage assessment", "Gradual return to movement, function and load"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "kaip-vertiname", label: "How we assess" }, { id: "metodai", label: "Methods" },
      { id: "paslaugos", label: "Services" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the condition", aboutTitle: "Recovery after orthopaedic and spinal surgery",
    aboutText: [
      "Post-operative rehabilitation is a targeted recovery process that helps safely restore mobility, function, strength and confidence in movement after orthopaedic or spinal surgery.",
      "After surgery it is important not simply to wait for the body to heal. During different healing periods the body needs different load and different goals. Starting treatment at the right time can significantly improve recovery quality.",
      "At ReaMed clinic post-operative rehabilitation is planned individually: taking into account the type of surgery, healing stage, physician recommendations and your goals.",
    ],
    keyPoints: [
      { title: "Treatment by stage", text: "During each healing period the body needs a different approach and different load." },
      { title: "Individual plan", text: "We consider the surgery type, condition, restrictions and goals." },
      { title: "Safe return", text: "We aim for recovery that is not only fast but also high quality." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "After orthopaedic surgery", "After spinal surgery",
      "Feeling stiffness or restricted movement", "Lacking strength, control or confidence",
      "Unsure what you can do and what to avoid", "Want to fully restore function",
      "Need a clear plan for return to activity", "Physician recommended starting rehabilitation",
    ],
    relatedLabel: "Post-surgical conditions we work with", relatedTitle: "Surgery types we work with",
    relatedItems: [
      "Knee surgery (ligaments, meniscus, cartilage)", "Shoulder surgery",
      "Hip joint surgery", "Ankle or other orthopaedic surgery",
      "Spinal surgery", "Restricted movement after surgery",
      "Muscle weakness after immobilisation", "Return to work or activity",
    ],
    assessLabel: "Assessment flow", assessTitle: "How do we assess condition after surgery?",
    assessSteps: [
      { n: "01", title: "Surgery discussion", text: "We discuss what surgery was performed, when and what recommendations were given." },
      { n: "02", title: "Function assessment", text: "We assess mobility, pain, swelling, strength, control and overall functional situation." },
      { n: "03", title: "Rehabilitation stage identification", text: "We identify which healing stage you are at and what goals are most important now." },
      { n: "04", title: "Explanation", text: "We explain what is missing for function and what recovery direction is most logical." },
      { n: "05", title: "Treatment plan", text: "We create an individual plan based on surgery, restrictions and goals." },
    ],
    methodsLabel: "Methods", methodsTitle: "What may be applied during treatment?",
    methodItems: [
      "Post-operative rehabilitation", "Physiotherapy",
      "Mobility restoration", "Muscle activation and control",
      "Progressive strength building", "Load tolerance progression",
      "Return to daily activities planning",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce pain and discomfort", "Reduce stiffness and movement restriction",
      "Restore function after surgery", "Improve strength, control and confidence",
      "Help transition from one stage to the next", "Prepare return to daily activities",
    ],
    redFlagsLabel: "Important", redFlagsTitle: "When is more urgent assessment needed?",
    redFlagsIntro: "Most post-operative conditions can be assessed routinely, but some cases require faster medical assessment:",
    redFlagItems: [
      "Pain is very severe and rapidly increasing", "Swelling rapidly increasing",
      "Significant redness, heat or wound changes", "Temperature rises or general health worsens",
      "Sudden significant function loss", "Unusual sensory or severe weakness symptoms appear",
    ],
    servicesLabel: "Services", servicesTitle: "What services may be suitable for post-operative recovery?",
    services: [
      { title: "Post-operative rehabilitation", text: "Suitable when the priority is recovery according to the specific healing and rehabilitation stage.", href: "/paslaugos/pooperacine-reabilitacija" },
      { title: "Physiotherapy", text: "Suitable when the main goal is restoring movement, function, control and strength.", href: "/paslaugos/kineziterapija" },
      { title: "Manual therapy", text: "At certain stages can be helpful to improve mobility or reduce discomfort.", href: "/paslaugos/manualine-terapija" },
      { title: "Sports rehabilitation", text: "Suitable when after surgery you aim to return to more active physical load or sport.", href: "/paslaugos/sporto-reabilitacija" },
    ],
    servicesNote: "The most appropriate service depends on the surgery type, healing stage and goals. Individual assessment comes first.",
    specialistsLabel: "Specialists", specialistsTitle: "Specialists working with post-operative recovery", specialistCta: "Book",
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "When can rehabilitation start after surgery?", a: "It depends on the surgery type and healing stage. In many cases it can start quite early with appropriate load." },
      { q: "Is stiffness and weakness normal after surgery?", a: "Yes. After surgery due to pain, swelling and protective guarding, mobility, strength and movement confidence often decrease." },
      { q: "How does post-operative rehabilitation differ from physiotherapy?", a: "It focuses more on tissue healing stage, safe load progression and transition through specific rehabilitation stages." },
      { q: "How many visits are typically needed?", a: "It depends on surgery type and goals. Some cases need a few visits; others require a longer process." },
      { q: "Can I return to sport quickly after surgery?", a: "It depends on the surgery and function restoration. Reduced pain alone does not mean readiness for high load." },
      { q: "Will I receive home recommendations?", a: "Yes — you will receive recommendations regarding movement, exercises, load and daily activities." },
    ],
    ctaTitle: "Want to recover after surgery safely and in a targeted way?", ctaText: "Book your first appointment — we will assess your condition, rehabilitation stage and choose the most appropriate recovery direction.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Post-operative rehabilitation, function restoration", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Post-operative rehabilitation, sports injuries", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Staged recovery, return to activity", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Post-operative recovery, mobility restoration", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
};

function SL({ c }: { c: string }) { return <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-2">{c}</p>; }
function ST({ c }: { c: string }) { return <h2 className="text-[1.625rem] md:text-[2rem] font-bold text-foreground leading-tight mb-4">{c}</h2>; }
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

export default function AtsistataymasPoOperacijuContent() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-6 pb-12 md:pt-10 md:pb-16">
          <a href="/#ka-gydome" className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted/60 hover:text-[#7DB9B5] transition-colors duration-200 mb-4 block">{c.breadcrumb}</a>
          <SL c={c.conditionLabel} />
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-foreground leading-[1.1] mb-4 max-w-[640px]">{c.title}</h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[560px]">{c.subtitle}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">{c.trustPoints.map((tp) => (<span key={tp} className="flex items-center gap-1.5 text-[0.8125rem] text-muted font-medium"><span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5]" />{tp}</span>))}</div>
          <div className="flex flex-wrap gap-3">
            <a href="/registracija" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.3)] hover:-translate-y-0.5">{c.ctaRegister} <ArrowRight size={15} strokeWidth={2.5} /></a>
            <a href="tel:+37060134304" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#90CECA] text-foreground text-[0.9rem] font-semibold rounded-xl hover:bg-[#EEF5F4] transition-all duration-200"><Phone size={15} strokeWidth={2} className="text-[#7DB9B5]" />{c.ctaConsult}</a>
          </div>
        </div>
      </div>
      <AN links={c.anchor} />
      <div className="container-xl py-10 md:py-14 flex flex-col gap-14 md:gap-16">
        <div id="kas-tai" className="grid md:grid-cols-2 gap-8 md:gap-12 items-start scroll-mt-32">
          <div><SL c={c.aboutLabel} /><ST c={c.aboutTitle} /><div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">{c.aboutText.map((p, i) => <p key={i}>{p}</p>)}</div></div>
          <div className="flex flex-col gap-3">{c.keyPoints.map(({ title, text }) => (<div key={title} className="bg-white rounded-xl border border-[#DDE9E8] px-5 py-4"><p className="text-[0.9rem] font-bold text-foreground mb-1">{title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{text}</p></div>))}</div>
        </div>
        <div id="kada-kreiptis" className="scroll-mt-32"><SL c={c.whenLabel} /><ST c={c.whenTitle} /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{c.whenItems.map((item) => (<div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200"><span className="w-2 h-2 rounded-full bg-[#7DB9B5] flex-shrink-0" /><span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span></div>))}</div></div>
        <div><SL c={c.relatedLabel} /><ST c={c.relatedTitle} /><BL items={c.relatedItems} /></div>
        <div id="kaip-vertiname" className="scroll-mt-32"><SL c={c.assessLabel} /><ST c={c.assessTitle} /><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{c.assessSteps.map((s) => (<div key={s.n} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200"><p className="text-[1.5rem] font-bold text-[#90CECA]/40 leading-none mb-3">{s.n}</p><p className="text-[0.9375rem] font-bold text-foreground mb-1.5 leading-snug">{s.title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{s.text}</p></div>))}</div></div>
        <div id="metodai" className="grid md:grid-cols-2 gap-6 scroll-mt-32">
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8"><SL c={c.methodsLabel} /><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.methodsTitle}</h2><div className="grid grid-cols-1 gap-2">{c.methodItems.map((item) => (<div key={item} className="flex items-center gap-3 px-4 py-2.5 bg-[#F7FAF9] rounded-lg border border-[#DDE9E8]"><span className="w-2 h-2 rounded-full bg-[#7DB9B5] flex-shrink-0" /><span className="text-[0.875rem] text-secondary font-medium">{item}</span></div>))}</div></div>
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8"><SL c={c.goalsLabel} /><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.goalsTitle}</h2><BL items={c.goalItems} /></div>
        </div>
        <div className="rounded-2xl border border-amber-200/60 bg-amber-50/50 p-6 md:p-8"><div className="flex items-start gap-3 mb-4"><AlertTriangle size={20} strokeWidth={1.5} className="text-amber-500 flex-shrink-0 mt-0.5" /><div><p className="text-[0.8125rem] font-bold uppercase tracking-widest text-amber-600 mb-0.5">{c.redFlagsLabel}</p><h2 className="text-[1.125rem] font-bold text-foreground">{c.redFlagsTitle}</h2></div></div><p className="text-[0.9rem] text-secondary leading-relaxed mb-4">{c.redFlagsIntro}</p><ul className="grid sm:grid-cols-2 gap-2">{c.redFlagItems.map((item) => (<li key={item} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" /><span className="text-[0.875rem] text-secondary leading-relaxed">{item}</span></li>))}</ul></div>
        <div id="paslaugos" className="scroll-mt-32"><SL c={c.servicesLabel} /><ST c={c.servicesTitle} /><div className="grid sm:grid-cols-2 gap-4 mb-4">{c.services.map((s) => (<a key={s.title} href={s.href} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200 group"><p className="text-[0.9375rem] font-bold text-foreground mb-1.5 group-hover:text-[#7DB9B5] transition-colors duration-200">{s.title}</p><p className="text-[0.875rem] text-muted leading-relaxed mb-3">{s.text}</p><span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#7DB9B5]">{lang === "en" ? "Learn more" : "Sužinoti daugiau"} <ArrowRight size={12} strokeWidth={2.5} /></span></a>))}</div><p className="text-[0.8125rem] text-muted/60 italic">{c.servicesNote}</p></div>
        <div id="specialistai" className="scroll-mt-32"><SL c={c.specialistsLabel} /><ST c={c.specialistsTitle} /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{c.specialists.map((s) => (<div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col"><a href={`/specialistai/${s.slug}`} className="block h-[200px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden"><img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} /></a><div className="p-4 flex flex-col flex-1"><a href={`/specialistai/${s.slug}`} className="text-[0.875rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">{s.name}</a><p className="text-[0.75rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p><p className="text-[0.75rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p><a href="/registracija" className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">{c.specialistCta} <ArrowRight size={12} strokeWidth={2.5} /></a></div></div>))}</div></div>
        <div id="duk" className="scroll-mt-32"><SL c={c.faqLabel} /><ST c={c.faqTitle} /><FQ items={c.faqs} /></div>
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center"><h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">{c.ctaTitle}</h2><p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[460px] mx-auto">{c.ctaText}</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"><a href="/registracija" className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]">{c.ctaBtn} <ArrowRight size={15} strokeWidth={2.5} /></a><Link href="/kontaktai" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"><Phone size={14} strokeWidth={2} /> {c.ctaContact}</Link></div><p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p></div>
      </div>
    </div>
  );
}
