"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Ką gydome", conditionLabel: "Problema",
    title: "Nugaros skausmas Vilniuje",
    subtitle: "Ūmus ar pasikartojantis nugaros skausmas, sustingimas ir judesio ribotumas gali trukdyti kasdienei veiklai, darbui ar sportui. Įvertiname problemos pobūdį ir parenkame tinkamiausią gydymo kryptį.",
    trustPoints: ["Įvertiname skausmo pobūdį ir galimas priežastis", "Gydymą parenkame pagal jūsų būklę", "Siekiame ne tik sumažinti simptomus, bet ir atkurti funkciją"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "kaip-vertiname", label: "Kaip vertiname?" }, { id: "metodai", label: "Metodai" },
      { id: "paslaugos", label: "Paslaugos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie problemą", aboutTitle: "Kas yra nugaros skausmas?",
    aboutText: [
      "Nugaros skausmas – viena dažniausių priežasčių, dėl kurių žmonės kreipiasi pagalbos dėl judėjimo sistemos problemų. Jis gali būti ūmus ar pasikartojantis, trunkantis ilgiau ir ribojantis kasdienę veiklą.",
      "Skausmas gali būti susijęs su raumenų įtampa, perkrova, sumažėjusiu judrumu, ilgalaike sėdėsena, fiziniu darbu, sportu ar kitais funkciniais veiksniais. Kartais jis plinta į sėdmenį ar koją.",
      "ReaMed klinikoje nugaros skausmą vertiname ne tik kaip simptomą vienoje vietoje. Mums svarbu suprasti, kaip juda jūsų kūnas, kas provokuoja simptomus ir kokia gydymo kryptis šiuo metu tinkamiausia.",
    ],
    keyPoints: [
      { title: "Ne visada rimta problema", text: "Dažnai skausmas susijęs su perkrova ar funkciniu dirginimu, o ne su rimtu pažeidimu." },
      { title: "Svarbus pobūdis", text: "Kada atsiranda, kur plinta, kas didina ir kas mažina — visa tai leidžia tiksliau įvertinti." },
      { title: "Tikslas — ne tik mažinti skausmą", text: "Siekiame padėti judėti laisviau ir saugiau." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Skausmas nepraeina ar kartojasi", "Jaučiate sustingimą ir judesio ribotumą",
      "Skausmas trukdo dirbti, sportuoti ar ilsėtis", "Skausmas plinta į sėdmenį ar koją",
      "Po fizinio krūvio ar sėdėjimo simptomai stiprėja", "Nebežinote, kokie judesiai padeda",
      "Po poilsio problema greitai atsinaujina", "Norite suprasti problemos priežastį",
    ],
    relatedLabel: "Galimos priežastys", relatedTitle: "Su kuo gali būti susijęs nugaros skausmas?",
    relatedItems: [
      "Raumenų įtampa ir perkrova", "Stuburo ar aplinkinių audinių dirginimas",
      "Judesio kontrolės ar laikysenos problemos", "Ilgalaikė sėdėsena ar fizinis darbas",
      "Sumažėjęs stuburo ir dubens judrumas", "Skausmas po fizinio krūvio ar sporto",
      "Pasikartojantys juosmens ar krūtinės dalies simptomai", "Nervinių struktūrų dirginimo požymiai",
    ],
    assessLabel: "Vertinimo eiga", assessTitle: "Kaip vertiname nugaros skausmą?",
    assessSteps: [
      { n: "01", title: "Nusiskundimų aptarimas", text: "Aptariame, kada prasidėjo skausmas, kur lokalizuotas, ar plinta, kas jį didina ir kas palengvina." },
      { n: "02", title: "Judesio ir būklės įvertinimas", text: "Vertiname laikyseną, stuburo judrumą, judesio kokybę ir audinių įtampą." },
      { n: "03", title: "Funkciniai testai", text: "Atliekame testus, padedančius suprasti skausmo kilmę ir funkcinį sutrikimą." },
      { n: "04", title: "Problemos paaiškinimas", text: "Suprantamai paaiškiname, kas gali palaikyti simptomus ir kokia gydymo kryptis logiškiausia." },
      { n: "05", title: "Gydymo plano sudarymas", text: "Parenkame tinkamiausią planą: aktyvesnį, manualinį ar mišrų." },
    ],
    methodsLabel: "Metodai", methodsTitle: "Kas gali būti taikoma gydymo metu?",
    methodItems: [
      "Kineziterapija", "Manualinis gydymas", "Osteopatinis gydymas",
      "Judesio ir laikysenos korekcija", "Mobilumo ir stabilumo lavinimas",
      "Raumenų aktyvavimo pratimai", "Namų programos rekomendacijos",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti skausmą ir diskomfortą", "Mažinti sustingimą",
      "Gerinti stuburo ir aplinkinių sričių judrumą", "Atkurti judesio kokybę",
      "Didinti pasitikėjimą judesiu", "Mažinti pasikartojančių simptomų riziką",
    ],
    redFlagsLabel: "Svarbu žinoti", redFlagsTitle: "Kada reikalingas skubesnis įvertinimas?",
    redFlagsIntro: "Nors dauguma nugaros skausmo atvejų yra susiję su judėjimo sistema, kai kuriais atvejais reikalingas greitesnis gydytojo įvertinimas. Svarbu nedelsti, jei:",
    redFlagItems: [
      "Skausmas labai stiprus ir greitai progresuoja", "Atsirado ryškus kojos silpnumas",
      "Atsirado ryškus tirpimas ar jutimo pokyčiai", "Sutriko šlapinimosi ar tuštinimosi kontrolė",
      "Simptomai prasidėjo po rimtos traumos", "Kartu pasireiškia karščiavimas ar labai prasta savijauta",
    ],
    servicesLabel: "Paslaugos", servicesTitle: "Kokios paslaugos gali tikti esant nugaros skausmui?",
    services: [
      { title: "Kineziterapija", text: "Tinka, kai svarbiausia atkurti judesį, funkciją ir mažinti pasikartojančių simptomų riziką.", href: "/paslaugos/kineziterapija" },
      { title: "Manualinė terapija", text: "Tinka, kai reikia tikslingo manualinio gydymo skausmui mažinti ir judrumui gerinti.", href: "/paslaugos/manualine-terapija" },
      { title: "Osteopatija", text: "Tinka, kai svarbus platesnis kūno ryšių vertinimas ir struktūrinis osteopatinis požiūris.", href: "/paslaugos/osteopatija" },
      { title: "Gydomasis masažas", text: "Gali būti naudingas, kai vyrauja ryški raumenų įtampa ar sustingimas.", href: "/paslaugos/gydomasis-masazas" },
    ],
    servicesNote: "Tinkamiausia paslauga priklauso ne nuo pavadinimo, o nuo jūsų konkrečios būklės. Todėl pirmiausia svarbus įvertinimas.",
    specialistsLabel: "Specialistai", specialistsTitle: "Specialistai, dirbantys su nugaros skausmu", specialistCta: "Registruotis",
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar nugaros skausmas visada reiškia rimtą problemą?", a: "Ne. Daugeliu atvejų skausmas susijęs su perkrova, įtampa ar funkcijos pokyčiais. Vis dėlto svarbu įvertinti simptomų pobūdį." },
      { q: "Ką daryti, jei skauda nugarą ir bijau judėti?", a: "Dažnai visiškas nejudėjimas nepadeda. Svarbiausia suprasti, kokie judesiai šiuo metu saugūs. Tai padeda įvertinti specialistas." },
      { q: "Ar galima kreiptis, jei skausmas plinta į koją?", a: "Taip. Plintantis skausmas su tirpimu ar tempimo pojūčiu verta įvertinti, ar nėra nervinių struktūrų dirginimo." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo trukmės, pobūdžio ir tikslų. Kartais pakanka kelių, kitais atvejais reikalingas nuoseklesnis planas." },
      { q: "Kas geriau — kineziterapija ar manualinė terapija?", a: "Tai priklauso nuo situacijos. Dažnai geriausias rezultatas pasiekiamas derinant abu metodus." },
      { q: "Ar gydymo metu gausiu rekomendacijų namoms?", a: "Taip — gausite rekomendacijas dėl judesio, krūvio, pratimų ar kasdienės veiklos." },
    ],
    ctaTitle: "Norite suprasti, kas sukelia jūsų nugaros skausmą?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime, paaiškinsime galimas priežastis ir parinksime tinkamiausią gydymo kryptį.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Nugaros ir sąnarių skausmai, funkcinis ištyrimas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Sporto reabilitacija, atsistatymas po traumų", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Judesio kontrolė, perkrovų gydymas", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Nugaros skausmas, manualinis gydymas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← What we treat", conditionLabel: "Condition",
    title: "Back Pain in Vilnius",
    subtitle: "Acute or recurring back pain, stiffness and movement restriction can interfere with daily activities, work or sport. We assess the nature of the problem and choose the most appropriate treatment direction.",
    trustPoints: ["We assess pain pattern and possible causes", "Treatment chosen based on your condition", "We aim not only to reduce symptoms but to restore function"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "kaip-vertiname", label: "How we assess" }, { id: "metodai", label: "Methods" },
      { id: "paslaugos", label: "Services" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the condition", aboutTitle: "What is back pain?",
    aboutText: [
      "Back pain is one of the most common reasons people seek help for musculoskeletal problems. It can be acute or recurring, lasting longer and limiting daily activity.",
      "Pain may be related to muscle tension, overuse, reduced mobility, prolonged sitting, physical work, sport or other functional factors. Sometimes it radiates to the buttock or leg.",
      "At ReaMed clinic we assess back pain not only as a symptom in one location. It is important for us to understand how your body moves, what provokes symptoms and what treatment direction is currently most appropriate.",
    ],
    keyPoints: [
      { title: "Not always a serious problem", text: "Pain is often related to overuse or functional irritation rather than serious damage." },
      { title: "Pattern matters", text: "When it appears, where it radiates, what increases and decreases it — all this allows more accurate assessment." },
      { title: "Goal beyond symptom relief", text: "We aim to help you move more freely and safely." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "Pain does not pass or keeps recurring", "Feeling stiffness and movement restriction",
      "Pain interferes with work, sport or rest", "Pain radiates to buttock or leg",
      "Symptoms worsen after physical load or sitting", "Unsure which movements help",
      "Problem returns quickly after rest", "Want to understand the cause of the problem",
    ],
    relatedLabel: "Possible causes", relatedTitle: "What may back pain be related to?",
    relatedItems: [
      "Muscle tension and overuse", "Spinal or surrounding tissue irritation",
      "Movement control or postural problems", "Prolonged sitting or physical work",
      "Reduced spinal and pelvic mobility", "Pain after physical load or sport",
      "Recurring lumbar or thoracic symptoms", "Signs of neural structure irritation",
    ],
    assessLabel: "Assessment flow", assessTitle: "How do we assess back pain?",
    assessSteps: [
      { n: "01", title: "Discussion of complaints", text: "We discuss when pain started, location, whether it radiates, what increases and decreases it." },
      { n: "02", title: "Movement and condition assessment", text: "We assess posture, spinal mobility, movement quality and tissue tension." },
      { n: "03", title: "Functional tests", text: "We perform tests to understand pain origin and functional disorder." },
      { n: "04", title: "Explanation of the problem", text: "We clearly explain what may be maintaining symptoms and what treatment direction is most logical." },
      { n: "05", title: "Treatment plan", text: "We choose the most appropriate plan: active, manual or mixed." },
    ],
    methodsLabel: "Methods", methodsTitle: "What may be applied during treatment?",
    methodItems: [
      "Physiotherapy", "Manual treatment", "Osteopathic treatment",
      "Movement and posture correction", "Mobility and stability training",
      "Muscle activation exercises", "Home programme recommendations",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce pain and discomfort", "Reduce stiffness",
      "Improve spinal and surrounding area mobility", "Restore movement quality",
      "Increase confidence in movement", "Reduce risk of recurring symptoms",
    ],
    redFlagsLabel: "Important", redFlagsTitle: "When is more urgent assessment needed?",
    redFlagsIntro: "Although most back pain is related to the musculoskeletal system, some cases require faster medical assessment. Do not delay if:",
    redFlagItems: [
      "Pain is very severe and progressing rapidly", "Significant leg weakness appears",
      "Significant numbness or sensory changes appear", "Bladder or bowel control is affected",
      "Symptoms started after serious trauma", "Accompanied by fever or very poor general health",
    ],
    servicesLabel: "Services", servicesTitle: "What services may be suitable for back pain?",
    services: [
      { title: "Physiotherapy", text: "Suitable when the priority is restoring movement, function and reducing recurrence risk.", href: "/paslaugos/kineziterapija" },
      { title: "Manual therapy", text: "Suitable when targeted manual treatment is needed to reduce pain and improve mobility.", href: "/paslaugos/manualine-terapija" },
      { title: "Osteopathy", text: "Suitable when a broader assessment of body connections and structural approach is important.", href: "/paslaugos/osteopatija" },
      { title: "Therapeutic massage", text: "Can be helpful when significant muscle tension or stiffness is present.", href: "/paslaugos/gydomasis-masazas" },
    ],
    servicesNote: "The most appropriate service depends not on the name but on your specific condition. Assessment comes first.",
    specialistsLabel: "Specialists", specialistsTitle: "Specialists working with back pain", specialistCta: "Book",
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Does back pain always mean a serious problem?", a: "No. In most cases pain is related to overuse, tension or functional changes. Still, it is important to assess the symptom pattern." },
      { q: "What to do if my back hurts and I am afraid to move?", a: "Complete rest usually does not help. The key is understanding which movements are currently safe. A specialist helps assess this." },
      { q: "Can I seek help if pain radiates to the leg?", a: "Yes. Radiating pain with tingling or pulling sensation should be assessed for possible neural structure irritation." },
      { q: "How many visits are typically needed?", a: "It depends on duration, pattern and goals. Sometimes a few visits suffice; other cases need a more systematic plan." },
      { q: "Which is better — physiotherapy or manual therapy?", a: "It depends on the situation. Often the best results are achieved by combining both methods." },
      { q: "Will I receive home recommendations?", a: "Yes — you will receive recommendations regarding movement, load, exercises or daily activities." },
    ],
    ctaTitle: "Want to understand what causes your back pain?", ctaText: "Book your first appointment — we will assess, explain possible causes and choose the most appropriate treatment direction.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Back and joint pain, functional assessment", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Sports rehabilitation, recovery from injuries", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Movement control, overuse management", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Back pain, manual therapy", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
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

export default function NugarosSkausmasContent() {
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
        {/* KAS TAI */}
        <div id="kas-tai" className="grid md:grid-cols-2 gap-8 md:gap-12 items-start scroll-mt-32">
          <div>
            <SL c={c.aboutLabel} /><ST c={c.aboutTitle} />
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">{c.aboutText.map((p, i) => <p key={i}>{p}</p>)}</div>
          </div>
          <div className="flex flex-col gap-3">
            {c.keyPoints.map(({ title, text }) => (<div key={title} className="bg-white rounded-xl border border-[#DDE9E8] px-5 py-4"><p className="text-[0.9rem] font-bold text-foreground mb-1">{title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{text}</p></div>))}
          </div>
        </div>
        {/* KADA KREIPTIS */}
        <div id="kada-kreiptis" className="scroll-mt-32">
          <SL c={c.whenLabel} /><ST c={c.whenTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">{c.whenItems.map((item) => (<div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200"><span className="w-2 h-2 rounded-full bg-[#7DB9B5] flex-shrink-0" /><span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span></div>))}</div>
        </div>
        {/* SU KUO SUSIJE */}
        <div>
          <SL c={c.relatedLabel} /><ST c={c.relatedTitle} /><BL items={c.relatedItems} />
        </div>
        {/* KAIP VERTINAME */}
        <div id="kaip-vertiname" className="scroll-mt-32">
          <SL c={c.assessLabel} /><ST c={c.assessTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{c.assessSteps.map((s) => (<div key={s.n} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200"><p className="text-[1.5rem] font-bold text-[#90CECA]/40 leading-none mb-3">{s.n}</p><p className="text-[0.9375rem] font-bold text-foreground mb-1.5 leading-snug">{s.title}</p><p className="text-[0.875rem] text-muted leading-relaxed">{s.text}</p></div>))}</div>
        </div>
        {/* METODAI + TIKSLAI */}
        <div id="metodai" className="grid md:grid-cols-2 gap-6 scroll-mt-32">
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8"><SL c={c.methodsLabel} /><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.methodsTitle}</h2><div className="grid grid-cols-1 gap-2">{c.methodItems.map((item) => (<div key={item} className="flex items-center gap-3 px-4 py-2.5 bg-[#F7FAF9] rounded-lg border border-[#DDE9E8]"><span className="w-2 h-2 rounded-full bg-[#7DB9B5] flex-shrink-0" /><span className="text-[0.875rem] text-secondary font-medium">{item}</span></div>))}</div></div>
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8"><SL c={c.goalsLabel} /><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.goalsTitle}</h2><BL items={c.goalItems} /></div>
        </div>
        {/* RED FLAGS */}
        <div className="rounded-2xl border border-amber-200/60 bg-amber-50/50 p-6 md:p-8">
          <div className="flex items-start gap-3 mb-4"><AlertTriangle size={20} strokeWidth={1.5} className="text-amber-500 flex-shrink-0 mt-0.5" /><div><p className="text-[0.8125rem] font-bold uppercase tracking-widest text-amber-600 mb-0.5">{c.redFlagsLabel}</p><h2 className="text-[1.125rem] font-bold text-foreground">{c.redFlagsTitle}</h2></div></div>
          <p className="text-[0.9rem] text-secondary leading-relaxed mb-4">{c.redFlagsIntro}</p>
          <ul className="grid sm:grid-cols-2 gap-2">{c.redFlagItems.map((item) => (<li key={item} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" /><span className="text-[0.875rem] text-secondary leading-relaxed">{item}</span></li>))}</ul>
        </div>
        {/* PASLAUGOS BRIDGE */}
        <div id="paslaugos" className="scroll-mt-32">
          <SL c={c.servicesLabel} /><ST c={c.servicesTitle} />
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {c.services.map((s) => (<a key={s.title} href={s.href} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200 group"><p className="text-[0.9375rem] font-bold text-foreground mb-1.5 group-hover:text-[#7DB9B5] transition-colors duration-200">{s.title}</p><p className="text-[0.875rem] text-muted leading-relaxed mb-3">{s.text}</p><span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#7DB9B5]">{lang === "en" ? "Learn more" : "Sužinoti daugiau"} <ArrowRight size={12} strokeWidth={2.5} /></span></a>))}
          </div>
          <p className="text-[0.8125rem] text-muted/60 italic">{c.servicesNote}</p>
        </div>
        {/* SPECIALISTAI */}
        <div id="specialistai" className="scroll-mt-32">
          <SL c={c.specialistsLabel} /><ST c={c.specialistsTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{c.specialists.map((s) => (<div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col"><a href={`/specialistai/${s.slug}`} className="block h-[200px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden"><img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} /></a><div className="p-4 flex flex-col flex-1"><a href={`/specialistai/${s.slug}`} className="text-[0.875rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">{s.name}</a><p className="text-[0.75rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p><p className="text-[0.75rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p><a href={`/specialistai/${s.slug}#registruotis`} className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">{c.specialistCta} <ArrowRight size={12} strokeWidth={2.5} /></a></div></div>))}</div>
        </div>
        {/* DUK */}
        <div id="duk" className="scroll-mt-32"><SL c={c.faqLabel} /><ST c={c.faqTitle} /><FQ items={c.faqs} /></div>
        {/* FINAL CTA */}
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center"><h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">{c.ctaTitle}</h2><p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[460px] mx-auto">{c.ctaText}</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"><a href="tel:+37060134304" className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]">{c.ctaBtn} <ArrowRight size={15} strokeWidth={2.5} /></a><Link href="/kontaktai" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"><Phone size={14} strokeWidth={2} /> {c.ctaContact}</Link></div><p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p></div>
      </div>
    </div>
  );
}
