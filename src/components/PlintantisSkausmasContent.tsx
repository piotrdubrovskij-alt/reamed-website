"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Ką gydome", conditionLabel: "Problema",
    title: "Plintantis skausmas ir tirpimas Vilniuje",
    subtitle: "Skausmas, plintantis į ranką ar koją, tirpimas, dilgčiojimas ar tempimo pojūtis gali būti susiję su nervinių struktūrų dirginimu ar kitais judėjimo sistemos sutrikimais. Įvertiname simptomų pobūdį ir parenkame tinkamiausią kryptį.",
    trustPoints: ["Įvertiname simptomų pobūdį ir galimas priežastis", "Gydymą parenkame pagal jūsų būklę", "Siekiame mažinti simptomus ir atkurti funkciją"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "kaip-vertiname", label: "Kaip vertiname?" }, { id: "metodai", label: "Metodai" },
      { id: "paslaugos", label: "Paslaugos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie problemą", aboutTitle: "Kas yra plintantis skausmas ir tirpimas?",
    aboutText: [
      "Plintantis skausmas ir tirpimas — simptomai, kai diskomfortas jaučiamas ne tik vienoje vietoje, bet plinta tam tikra kryptimi: iš kaklo į petį ar ranką arba iš nugaros į sėdmenį ar koją.",
      "Kartu gali būti jaučiamas dilgčiojimas, tempimas, deginimo pojūtis, jautrumo pakitimas ar silpnumas. Tokie simptomai ne visada reiškia rimtą pažeidimą, bet rodo, kad svarbu tiksliau įvertinti situaciją.",
      "ReaMed klinikoje svarbu ne tik kur simptomas plinta, bet ir kada jis atsiranda, kokie judesiai jį provokuoja ir kokia gydymo kryptis būtų logiškiausia jūsų atveju.",
    ],
    keyPoints: [
      { title: "Ne visada nervo pažeidimas", text: "Dažnai simptomai susiję su dirginimu ar funkciniu jautrumu, o ne su rimtu pažeidimu." },
      { title: "Svarbus pobūdis", text: "Ar simptomas plinta, tirpsta, tempia, degina, ar atsiranda silpnumas — visa tai svarbu." },
      { title: "Tikslas — ne tik malšinti", text: "Siekiame suprasti, kas palaiko simptomus, ir padėti laisviau judėti." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Skausmas plinta į ranką ar koją", "Jaučiate tirpimą, dilgčiojimą ar deginimą",
      "Simptomai kartojasi ar stiprėja", "Kaklo ar nugaros skausmą lydi plintantys pojūčiai",
      "Judesiai aiškiai provokuoja simptomų plitimą", "Sunku suprasti, kas padeda ar blogina",
      "Simptomai trukdo dirbti, miegoti ar judėti", "Norite suprasti, ar tai susiję su nervo dirgimu",
    ],
    relatedLabel: "Galimos priežastys", relatedTitle: "Su kuo gali būti susiję simptomai?",
    relatedItems: [
      "Nervinių struktūrų dirginimas kaklo ar nugaros srityje", "Kaklo skausmas su plitimu į petį ar ranką",
      "Nugaros skausmas su plitimu į sėdmenį ar koją", "Audinių perkrova ir padidėjęs jautrumas",
      "Judesio sistemos funkcijos sutrikimai", "Sumažėjęs kaklo ar nugaros judrumas",
      "Nervinių audinių jautrumo padidėjimas", "Laikysenos ar perkrovos provokuojami simptomai",
    ],
    assessLabel: "Vertinimo eiga", assessTitle: "Kaip vertiname plintantį skausmą ir tirpimą?",
    assessSteps: [
      { n: "01", title: "Nusiskundimų aptarimas", text: "Aptariame, kur simptomai prasidėjo, kur plinta, kaip jaučiami ir kas juos provokuoja." },
      { n: "02", title: "Judesio ir funkcijos vertinimas", text: "Vertiname kaklo, nugaros, pečių juostos judrumą ir judesio kokybę." },
      { n: "03", title: "Funkciniai testai", text: "Atliekame testus, padedančius suprasti, ar simptomai susiję su nervinių struktūrų dirginimu." },
      { n: "04", title: "Problemos paaiškinimas", text: "Aiškiai paaiškiname, kas tikėtina palaiko simptomus ir kokia gydymo kryptis logiškiausia." },
      { n: "05", title: "Gydymo planas", text: "Parenkame individualų planą pagal simptomų pobūdį ir tikslą." },
    ],
    methodsLabel: "Metodai", methodsTitle: "Kas gali būti taikoma gydymo metu?",
    methodItems: [
      "Kineziterapija", "Manualinis gydymas", "Osteopatinis gydymas",
      "Kaklo ir nugaros judrumo gerinimas", "Nervinių audinių jautrumo mažinimas",
      "Stabilumo ir kontrolės lavinimas", "Namų programos rekomendacijos",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti plintantį skausmą ir diskomfortą", "Mažinti tirpimą ir dilgčiojimą",
      "Gerinti judrumą ir judesio kokybę", "Mažinti nervinių struktūrų dirginimą",
      "Atkurti funkciją ir pasitikėjimą judesiu", "Saugiai grįžti prie kasdienės veiklos",
    ],
    redFlagsLabel: "Svarbu žinoti", redFlagsTitle: "Kada reikalingas skubesnis įvertinimas?",
    redFlagsIntro: "Nors dauguma tokių simptomų susiję su judėjimo sistema, kai kuriais atvejais svarbus greitesnis medicininis įvertinimas:",
    redFlagItems: [
      "Atsiranda ryškus rankos ar kojos silpnumas", "Tirpimas ar jutimo pokyčiai greitai didėja",
      "Sutrinka šlapinimosi ar tuštinimosi kontrolė", "Simptomai atsirado po rimtesnės traumos",
      "Skausmas labai stiprus ir greitai progresuoja", "Kartu pasireiškia karščiavimas ar bendra būklės pablogėjimas",
    ],
    servicesLabel: "Paslaugos", servicesTitle: "Kokios paslaugos gali tikti?",
    services: [
      { title: "Kineziterapija", text: "Tinka, kai svarbiausia gerinti judesį, funkciją ir mažinti simptomus provokuojančius veiksnius.", href: "/paslaugos/kineziterapija" },
      { title: "Manualinė terapija", text: "Tinka, kai reikia tikslingo rankinio gydymo skausmui mažinti ir judrumui gerinti.", href: "/paslaugos/manualine-terapija" },
      { title: "Osteopatija", text: "Tinka, kai svarbus platesnis kūno ryšių vertinimas ir struktūrinis osteopatinis požiūris.", href: "/paslaugos/osteopatija" },
      { title: "Pooperacinė reabilitacija", text: "Gali būti aktuali, jei panašūs simptomai susiję su atsistatymu po operacijos.", href: "/paslaugos/pooperacine-reabilitacija" },
    ],
    servicesNote: "Tinkamiausia paslauga priklauso nuo to, kas palaiko simptomus. Individualus įvertinimas — pirmiausia.",
    specialistsLabel: "Specialistai", specialistsTitle: "Specialistai, dirbantys su plintančiu skausmu ir tirpimu", specialistCta: "Registruotis",
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar tirpimas visada reiškia nervo pažeidimą?", a: "Ne. Tirpimas gali būti susijęs su nervinių struktūrų dirginimu ar funkciniu jautrumu. Vis dėlto svarbu įvertinti tiksliau." },
      { q: "Ar plintantis skausmas iš nugaros į koją visada reiškia išvaržą?", a: "Ne visada. Tokie simptomai gali turėti skirtingus mechanizmus, todėl svarbus individualus ištyrimas." },
      { q: "Ar galima judėti, jei jaučiu plintantį skausmą?", a: "Dažnai taip, tačiau svarbu suprasti, kokie judesiai šiuo metu tinkami. Tai nustato individualus įvertinimas." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo simptomų trukmės ir tikslų. Kartais pakanka kelių, kitais reikia nuoseklesnio plano." },
      { q: "Ar plintantis skausmas iš kaklo į ranką susijęs su laikysena?", a: "Kartais taip — pečių perkrova, sumažėjęs judrumas ir nervinių audinių jautrumas gali prisidėti." },
      { q: "Ar gydymo metu gausiu rekomendacijų namoms?", a: "Taip — gausite rekomendacijas dėl judesio, krūvio ir kasdienės veiklos." },
    ],
    ctaTitle: "Norite suprasti plintančio skausmo priežastį?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime jūsų būklę, paaiškinsime galimas priežastis ir parinksime tinkamiausią gydymo kryptį.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Plintantys simptomai, nervinių struktūrų dirginimas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Funkcinė korekcija, kaklo ir nugaros problemos", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Judesio kontrolė, funkcinis atkūrimas", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Plintantis skausmas, manualinis gydymas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← What we treat", conditionLabel: "Condition",
    title: "Radiating Pain and Numbness in Vilnius",
    subtitle: "Pain radiating to the arm or leg, numbness, tingling or pulling sensation may be related to neural structure irritation or other musculoskeletal disorders. We assess symptoms and choose the most appropriate direction.",
    trustPoints: ["We assess symptom pattern and possible causes", "Treatment chosen based on your condition", "We aim to reduce symptoms and restore function"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "kaip-vertiname", label: "How we assess" }, { id: "metodai", label: "Methods" },
      { id: "paslaugos", label: "Services" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the condition", aboutTitle: "What is radiating pain and numbness?",
    aboutText: [
      "Radiating pain and numbness are symptoms where discomfort is felt not only in one location but spreads in a certain direction: from the neck to the shoulder or arm, or from the back to the buttock or leg.",
      "Tingling, pulling, burning sensation, sensory changes or weakness may also be present. Such symptoms do not always mean serious damage, but indicate that a more accurate assessment is important.",
      "At ReaMed clinic we focus not only on where the symptom radiates but also when it appears, which movements provoke it and what treatment direction would be most logical for your case.",
    ],
    keyPoints: [
      { title: "Not always nerve damage", text: "Symptoms are often related to irritation or functional sensitivity rather than serious damage." },
      { title: "Pattern matters", text: "Whether symptoms radiate, tingle, pull, burn or cause weakness — all are important." },
      { title: "Goal beyond symptom relief", text: "We aim to understand what maintains symptoms and help move more freely." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "Pain radiates to arm or leg", "Feeling numbness, tingling or burning",
      "Symptoms recur or intensify", "Neck or back pain accompanied by radiating sensations",
      "Movements clearly provoke symptom radiation", "Difficult to understand what helps or worsens",
      "Symptoms interfere with work, sleep or movement", "Want to understand if related to nerve irritation",
    ],
    relatedLabel: "Possible causes", relatedTitle: "What may symptoms be related to?",
    relatedItems: [
      "Neural structure irritation in neck or back", "Neck pain with radiation to shoulder or arm",
      "Back pain with radiation to buttock or leg", "Tissue overuse and increased sensitivity",
      "Musculoskeletal function disorders", "Reduced neck or back mobility",
      "Increased neural tissue sensitivity", "Posture or overuse provoking symptoms",
    ],
    assessLabel: "Assessment flow", assessTitle: "How do we assess radiating pain and numbness?",
    assessSteps: [
      { n: "01", title: "Discussion of complaints", text: "We discuss where symptoms started, where they radiate, how they feel and what provokes them." },
      { n: "02", title: "Movement and function assessment", text: "We assess neck, back and shoulder girdle mobility and movement quality." },
      { n: "03", title: "Functional tests", text: "We perform tests to understand whether symptoms are related to neural structure irritation." },
      { n: "04", title: "Explanation", text: "We clearly explain what is likely maintaining symptoms and what treatment direction is most logical." },
      { n: "05", title: "Treatment plan", text: "We choose an individual plan based on symptom pattern and goals." },
    ],
    methodsLabel: "Methods", methodsTitle: "What may be applied during treatment?",
    methodItems: [
      "Physiotherapy", "Manual treatment", "Osteopathic treatment",
      "Neck and back mobility improvement", "Neural tissue sensitivity reduction",
      "Stability and control training", "Home programme recommendations",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce radiating pain and discomfort", "Reduce numbness and tingling",
      "Improve mobility and movement quality", "Reduce neural structure irritation",
      "Restore function and confidence in movement", "Safely return to daily activities",
    ],
    redFlagsLabel: "Important", redFlagsTitle: "When is more urgent assessment needed?",
    redFlagsIntro: "Although most such symptoms are musculoskeletal, some cases require faster medical assessment:",
    redFlagItems: [
      "Significant arm or leg weakness appears", "Numbness or sensory changes rapidly increase",
      "Bladder or bowel control is affected", "Symptoms started after serious trauma",
      "Pain is very severe and rapidly progressing", "Accompanied by fever or general health deterioration",
    ],
    servicesLabel: "Services", servicesTitle: "What services may be suitable?",
    services: [
      { title: "Physiotherapy", text: "Suitable when improving movement, function and reducing symptom-provoking factors is the priority.", href: "/paslaugos/kineziterapija" },
      { title: "Manual therapy", text: "Suitable when targeted manual treatment is needed to reduce pain and improve mobility.", href: "/paslaugos/manualine-terapija" },
      { title: "Osteopathy", text: "Suitable when a broader body connections assessment and structural approach is important.", href: "/paslaugos/osteopatija" },
      { title: "Post-operative rehabilitation", text: "May be relevant if similar symptoms are related to post-operative recovery.", href: "/paslaugos/pooperacine-reabilitacija" },
    ],
    servicesNote: "The most appropriate service depends on what is maintaining symptoms. Individual assessment comes first.",
    specialistsLabel: "Specialists", specialistsTitle: "Specialists working with radiating pain and numbness", specialistCta: "Book",
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Does numbness always mean nerve damage?", a: "No. Numbness can be related to neural structure irritation or functional sensitivity. Still, more accurate assessment is important." },
      { q: "Does radiating pain from back to leg always mean a disc herniation?", a: "Not always. Such symptoms can have different mechanisms, so individual assessment is important." },
      { q: "Can I move if I feel radiating pain?", a: "Often yes, but understanding which movements are currently appropriate is important. Individual assessment determines this." },
      { q: "How many visits are typically needed?", a: "It depends on symptom duration and goals. Sometimes a few visits suffice; others need a more systematic plan." },
      { q: "Is radiating pain from neck to arm related to posture?", a: "Sometimes yes — shoulder girdle overuse, reduced mobility and neural tissue sensitivity may contribute." },
      { q: "Will I receive home recommendations?", a: "Yes — you will receive recommendations regarding movement, load and daily activities." },
    ],
    ctaTitle: "Want to understand the cause of your radiating pain?", ctaText: "Book your first appointment — we will assess your condition, explain possible causes and choose the most appropriate treatment direction.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Radiating symptoms, neural structure irritation", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Functional correction, neck and back problems", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Movement control, functional recovery", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Radiating pain, manual therapy", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
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

export default function PlintantisSkausmasContent() {
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
            <a href="#registruotis" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.3)] hover:-translate-y-0.5">{c.ctaRegister} <ArrowRight size={15} strokeWidth={2.5} /></a>
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
        <div id="specialistai" className="scroll-mt-32"><SL c={c.specialistsLabel} /><ST c={c.specialistsTitle} /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{c.specialists.map((s) => (<div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col"><a href={`/specialistai/${s.slug}`} className="block h-[200px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden"><img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} /></a><div className="p-4 flex flex-col flex-1"><a href={`/specialistai/${s.slug}`} className="text-[0.875rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">{s.name}</a><p className="text-[0.75rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p><p className="text-[0.75rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p><a href={`/specialistai/${s.slug}#registruotis`} className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">{c.specialistCta} <ArrowRight size={12} strokeWidth={2.5} /></a></div></div>))}</div></div>
        <div id="duk" className="scroll-mt-32"><SL c={c.faqLabel} /><ST c={c.faqTitle} /><FQ items={c.faqs} /></div>
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center"><h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">{c.ctaTitle}</h2><p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[460px] mx-auto">{c.ctaText}</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"><a href="tel:+37060134304" className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]">{c.ctaBtn} <ArrowRight size={15} strokeWidth={2.5} /></a><a href="/kontaktai" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"><Phone size={14} strokeWidth={2} /> {c.ctaContact}</a></div><p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p></div>
      </div>
    </div>
  );
}
