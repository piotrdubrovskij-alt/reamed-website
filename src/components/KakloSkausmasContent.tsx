"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Ką gydome", conditionLabel: "Problema",
    title: "Kaklo skausmas Vilniuje",
    subtitle: "Kaklo įtampa, skausmas, judesio ribotumas ar plintantys pojūčiai į petį ar ranką gali trukdyti dirbti, sportuoti ir kasdienei veiklai. Įvertiname ir parenkame tinkamiausią gydymo kryptį.",
    trustPoints: ["Įvertiname skausmo pobūdį ir galimas priežastis", "Gydymą parenkame pagal jūsų būklę", "Dirbame tiek su ūminiais, tiek su lėtiniais simptomais"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "kaip-vertiname", label: "Kaip vertiname?" }, { id: "metodai", label: "Metodai" },
      { id: "paslaugos", label: "Paslaugos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie problemą", aboutTitle: "Kas yra kaklo skausmas?",
    aboutText: [
      "Kaklo skausmas – dažna problema, kuri gali pasireikšti kaip ūmus skausmas, lėtinė įtampa, judėjimo ribotumas ar plintantys pojūčiai į pečių juostą ar ranką.",
      "Skausmas dažnai susijęs su raumenų perkrova, sumažėjusiu judrumu, ilgalaike sėdėsena, darbu prie kompiuterio ar kitais laikysenos ir krūvio veiksniais. Kartais kartu pasireiškia galvos skausmas ar galvos svaigimas.",
      "ReaMed klinikoje kaklo skausmą vertiname ne tik kaip vietinę problemą. Svarbu suprasti, kas provokuoja simptomus, kaip juda kaklo sritis ir kokia gydymo kryptis šiuo metu logiškiausia.",
    ],
    keyPoints: [
      { title: "Svarbus pirkrovos kontekstas", text: "Darbas, laikysena, stresas ir fizinis aktyvumas gali stipriai veikti kaklo simptomus." },
      { title: "Plintantys pojūčiai reikalauja dėmesio", text: "Skausmas, plintantis į petį ar ranką, gali rodyti nervinių struktūrų dirginimą." },
      { title: "Tikslas — ne tik mažinti įtampą", text: "Siekiame atkurti laisvą kaklo judesį ir sumažinti simptomų pasikartojimo riziką." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Kaklo skausmas nepraeina ar kartojasi", "Jaučiate sustingimą ar judėjimo ribotumą",
      "Skausmas plinta į petį ar ranką", "Atsiranda tirpimas ar dilgčiojimas rankoje",
      "Ilgai dirbate prie kompiuterio ir jaučiate įtampą", "Galvos skausmas susijęs su kaklo įtampa",
      "Po aktyvumo simptomai greitai grįžta", "Norite suprasti problemos priežastį",
    ],
    relatedLabel: "Galimos priežastys", relatedTitle: "Su kuo gali būti susijęs kaklo skausmas?",
    relatedItems: [
      "Raumenų ir pečių juostos perkrova", "Sumažėjęs kaklo judrumas",
      "Laikysenos ir darbo aplinkos veiksniai", "Nervinių struktūrų dirginimas",
      "Ilgalaikis statinis darbas ar vienoda padėtis", "Stresas ir bendras kūno įsitempimas",
      "Sąnarių ir minkštųjų audinių sutrikimai", "Perkrovos po fizinio aktyvumo",
    ],
    assessLabel: "Vertinimo eiga", assessTitle: "Kaip vertiname kaklo skausmą?",
    assessSteps: [
      { n: "01", title: "Nusiskundimų aptarimas", text: "Aptariame simptomus, jų trukmę, plitimą, kas juos stiprina ar palengvina." },
      { n: "02", title: "Kaklo ir pečių juostos vertinimas", text: "Vertiname kaklo judrumą, raumenų įtampą, laikyseną ir sąnarių funkciją." },
      { n: "03", title: "Neurologiniai ir funkciniai testai", text: "Tikriname, ar nėra nervinių struktūrų dirginimo požymių." },
      { n: "04", title: "Problemos paaiškinimas", text: "Aiškiai pasakome, kas gali palaikyti simptomus ir kokia kryptis logiškiausia." },
      { n: "05", title: "Gydymo planas", text: "Parenkame tinkamiausią planą pagal jūsų būklę ir tikslus." },
    ],
    methodsLabel: "Metodai", methodsTitle: "Kas gali būti taikoma gydymo metu?",
    methodItems: [
      "Kineziterapija", "Manualinis gydymas", "Osteopatinis gydymas",
      "Kaklo ir pečių juostos mobilizacija", "Raumenų atpalaidavimo technikos",
      "Laikysenos ir judesio korekcija", "Namų programos rekomendacijos",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti kaklo skausmą ir įtampą", "Gerinti kaklo judesių amplitudę",
      "Mažinti plintančius simptomus", "Atkurti kaklo ir pečių juostos funkciją",
      "Mažinti galvos skausmo epizodus", "Mažinti pasikartojančių simptomų riziką",
    ],
    redFlagsLabel: "Svarbu žinoti", redFlagsTitle: "Kada reikalingas skubesnis įvertinimas?",
    redFlagsIntro: "Dauguma kaklo skausmų atvejų susiję su judėjimo sistema, tačiau kai kuriais atvejais reikalingas greitesnis gydytojo įvertinimas. Svarbu nedelsti, jei:",
    redFlagItems: [
      "Atsirado ryškus rankos silpnumas", "Tirpimas ar jutimo pokyčiai greitai didėja",
      "Skausmas atsirado po traumos (pvz., nelaimingo atsitikimo)", "Stiprus skausmas naktį ar be aiškios priežasties",
      "Kartu pasireiškia rijimo sunkumai ar stiprus galvos svaigimas", "Labai prasta bendra savijauta ar karščiavimas",
    ],
    servicesLabel: "Paslaugos", servicesTitle: "Kokios paslaugos gali tikti esant kaklo skausmui?",
    services: [
      { title: "Kineziterapija", text: "Tinka, kai svarbiausia atkurti judesį, funkciją ir mažinti pasikartojančių simptomų riziką.", href: "/paslaugos/kineziterapija" },
      { title: "Manualinė terapija", text: "Tinka, kai reikia tikslingo rankinio gydymo skausmui mažinti ir judrumui gerinti.", href: "/paslaugos/manualine-terapija" },
      { title: "Osteopatija", text: "Tinka, kai svarbus platesnis kūno ryšių vertinimas ir struktūrinis požiūris.", href: "/paslaugos/osteopatija" },
      { title: "Gydomasis masažas", text: "Gali būti naudingas, kai vyrauja raumenų įtampa ar pečių juostos sustingimas.", href: "/paslaugos/gydomasis-masazas" },
    ],
    servicesNote: "Tinkamiausia paslauga priklauso nuo jūsų būklės. Pirmiausia svarbus individualus įvertinimas.",
    specialistsLabel: "Specialistai", specialistsTitle: "Specialistai, dirbantys su kaklo skausmu", specialistCta: "Registruotis",
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar kaklo įtampa gali sukelti galvos skausmą?", a: "Taip, kaklo raumenų ir sąnarių perkrova dažnai siejama su vadinamaisiais kaklinės kilmės galvos skausmais." },
      { q: "Ar galima kreiptis, jei kaklo skausmas plinta į ranką?", a: "Taip. Plintantis skausmas su tirpimu ar dilgčiojimu verta įvertinti, ar nėra nervinių struktūrų dirginimo." },
      { q: "Ar kompiuterio darbas gali sukelti lėtinį kaklo skausmą?", a: "Taip, ilgalaikis statinis darbas yra vienas dažniausių kaklo ir pečių juostos simptomų provokuojančių veiksnių." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo trukmės, pobūdžio ir tikslų. Kartais pakanka kelių vizitų, kitais atvejais reikia nuoseklesnio plano." },
      { q: "Kas geriau — manualinė terapija ar kineziterapija?", a: "Dažnai geriausias rezultatas pasiekiamas derinant abu metodus, priklausomai nuo jūsų būklės." },
      { q: "Ar gydymo metu gausiu rekomendacijų namoms?", a: "Taip — gausite rekomendacijas dėl laikysenos, judesio, darbo aplinkos ar pratimų." },
    ],
    ctaTitle: "Norite suprasti kaklo skausmo priežastį?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime, paaiškinsime ir parinksime tinkamiausią gydymo kryptį.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Kaklo ir nugaros skausmai, nervinių struktūrų dirginimas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Funkcinė korekcija, kaklo ir pečių juostos problemos", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Judesio kontrolė, laikysenos korekcija", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Kaklo skausmas, manualinis gydymas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← What we treat", conditionLabel: "Condition",
    title: "Neck Pain in Vilnius",
    subtitle: "Neck tension, pain, restricted movement or sensations radiating to the shoulder or arm can interfere with work, sport and daily activities. We assess and choose the most appropriate treatment direction.",
    trustPoints: ["We assess pain pattern and possible causes", "Treatment chosen based on your condition", "We work with both acute and chronic symptoms"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "kaip-vertiname", label: "How we assess" }, { id: "metodai", label: "Methods" },
      { id: "paslaugos", label: "Services" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the condition", aboutTitle: "What is neck pain?",
    aboutText: [
      "Neck pain is a common condition that may manifest as acute pain, chronic tension, restricted movement or sensations radiating to the shoulder area or arm.",
      "Pain is often related to muscle overuse, reduced mobility, prolonged sitting, computer work or other postural and load factors. Headache or dizziness may also be present.",
      "At ReaMed clinic we assess neck pain not only as a local problem. It is important to understand what provokes symptoms, how the neck area moves and what treatment direction is currently most logical.",
    ],
    keyPoints: [
      { title: "Load context matters", text: "Work, posture, stress and physical activity can strongly influence neck symptoms." },
      { title: "Radiating sensations need attention", text: "Pain radiating to the shoulder or arm may indicate neural structure irritation." },
      { title: "Goal beyond reducing tension", text: "We aim to restore free neck movement and reduce risk of symptom recurrence." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "Neck pain does not pass or keeps recurring", "Feeling stiffness or restricted movement",
      "Pain radiates to shoulder or arm", "Numbness or tingling appears in the hand",
      "Long computer work causes persistent tension", "Headache related to neck tension",
      "Symptoms return quickly after activity", "Want to understand the cause of the problem",
    ],
    relatedLabel: "Possible causes", relatedTitle: "What may neck pain be related to?",
    relatedItems: [
      "Muscle and shoulder girdle overuse", "Reduced neck mobility",
      "Postural and work environment factors", "Neural structure irritation",
      "Prolonged static work or fixed position", "Stress and general body tension",
      "Joint and soft tissue disorders", "Overload after physical activity",
    ],
    assessLabel: "Assessment flow", assessTitle: "How do we assess neck pain?",
    assessSteps: [
      { n: "01", title: "Discussion of complaints", text: "We discuss symptoms, duration, radiation pattern, what increases and decreases them." },
      { n: "02", title: "Neck and shoulder assessment", text: "We assess neck mobility, muscle tension, posture and joint function." },
      { n: "03", title: "Neurological and functional tests", text: "We check for signs of neural structure irritation." },
      { n: "04", title: "Explanation of the problem", text: "We clearly state what may be maintaining symptoms and what direction is most logical." },
      { n: "05", title: "Treatment plan", text: "We choose the most appropriate plan based on your condition and goals." },
    ],
    methodsLabel: "Methods", methodsTitle: "What may be applied during treatment?",
    methodItems: [
      "Physiotherapy", "Manual treatment", "Osteopathic treatment",
      "Neck and shoulder girdle mobilisation", "Muscle relaxation techniques",
      "Posture and movement correction", "Home programme recommendations",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce neck pain and tension", "Improve range of neck movement",
      "Reduce radiating symptoms", "Restore neck and shoulder girdle function",
      "Reduce headache episodes", "Reduce risk of recurring symptoms",
    ],
    redFlagsLabel: "Important", redFlagsTitle: "When is more urgent assessment needed?",
    redFlagsIntro: "Most neck pain cases are related to the musculoskeletal system, but some require faster medical assessment. Do not delay if:",
    redFlagItems: [
      "Significant arm weakness appears", "Numbness or sensory changes rapidly increase",
      "Pain started after trauma (e.g., road accident)", "Severe pain at night or without clear cause",
      "Swallowing difficulty or severe dizziness accompanies symptoms", "Very poor general health or fever",
    ],
    servicesLabel: "Services", servicesTitle: "What services may be suitable for neck pain?",
    services: [
      { title: "Physiotherapy", text: "Suitable when the priority is restoring movement, function and reducing recurrence risk.", href: "/paslaugos/kineziterapija" },
      { title: "Manual therapy", text: "Suitable when targeted manual treatment is needed to reduce pain and improve mobility.", href: "/paslaugos/manualine-terapija" },
      { title: "Osteopathy", text: "Suitable when a broader assessment of body connections and structural approach is important.", href: "/paslaugos/osteopatija" },
      { title: "Therapeutic massage", text: "Can be helpful when significant muscle tension or shoulder stiffness is present.", href: "/paslaugos/gydomasis-masazas" },
    ],
    servicesNote: "The most appropriate service depends on your condition. Individual assessment comes first.",
    specialistsLabel: "Specialists", specialistsTitle: "Specialists working with neck pain", specialistCta: "Book",
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Can neck tension cause headaches?", a: "Yes, neck muscle and joint overload is often associated with cervicogenic headaches." },
      { q: "Can I seek help if neck pain radiates to the arm?", a: "Yes. Radiating pain with tingling should be assessed for possible neural structure irritation." },
      { q: "Can computer work cause chronic neck pain?", a: "Yes, prolonged static work is one of the most common factors provoking neck and shoulder symptoms." },
      { q: "How many visits are typically needed?", a: "It depends on duration, pattern and goals. Sometimes a few visits are enough; other cases need a more systematic plan." },
      { q: "Which is better — manual therapy or physiotherapy?", a: "Often the best results are achieved by combining both methods depending on your condition." },
      { q: "Will I receive home recommendations?", a: "Yes — you will receive recommendations regarding posture, movement, work environment or exercises." },
    ],
    ctaTitle: "Want to understand the cause of your neck pain?", ctaText: "Book your first appointment — we will assess, explain and choose the most appropriate treatment direction.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Neck and back pain, neural structure irritation", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Functional correction, neck and shoulder problems", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Movement control, posture correction", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Neck pain, manual therapy", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
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

export default function KakloSkausmasContent() {
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
