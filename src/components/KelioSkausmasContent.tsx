"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Ką gydome", conditionLabel: "Problema",
    title: "Kelio skausmas ir traumos Vilniuje",
    subtitle: "Kelio skausmas, raiščių ir menisko problemos, perkrovos ar pooperacinis atsistatymas — įvertiname būklę ir parenkame tinkamiausią gydymo kryptį.",
    trustPoints: ["Įvertiname kelio funkcijos ir apkrovos toleranciją", "Gydymą parenkame pagal jūsų būklę ir etapą", "Dirbame tiek su ūminėmis, tiek su lėtinėmis kelio būklėmis"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "kaip-vertiname", label: "Kaip vertiname?" }, { id: "metodai", label: "Metodai" },
      { id: "paslaugos", label: "Paslaugos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie problemą", aboutTitle: "Kelio skausmas ir traumos",
    aboutText: [
      "Kelio skausmas — viena dažniausių judėjimo sistemos problemų, su kuriomis susiduria tiek sportininkai, tiek žmonės su sėdamu darbu. Simptomai gali pasireikšti kaip ūmus skausmas po traumos, pasikartojantis diskomfortas krūvio metu ar lėtinis dirginimas.",
      "Kelio problemos gali būti susijusios su raiščių ar meniskų pažeidimais, sąnarinio kremzlės dirgimu, perkrovos sindromais, raumenų disbalansu ar pooperaciniu atsistatymu.",
      "ReaMed klinikoje kelio skausmą vertiname kompleksiškai: svarbu ne tik struktūriniai pokyčiai, bet ir kaip kelis funkcionuoja, toleruoja apkrovą ir kaip reaguoja į judesį.",
    ],
    keyPoints: [
      { title: "Kelio funkcija, ne tik skausmas", text: "Svarbu įvertinti, kaip kelis juda, toleruoja apkrovą ir dirba kaip sistema." },
      { title: "Skausmas ne visada lygus pažeidimui", text: "Dažnai kelio skausmas susijęs su funkciniais veiksniais, ne tik su strukturiniu pažeidimu." },
      { title: "Kryptingas atsistatymas po traumų", text: "Tinkamas gydymas padeda saugiai grįžti į aktyvumą ar sportą." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Kelio skausmas sportuojant ar po krūvio", "Nestabilumo jautimas keliant arba einant",
      "Skausmas po raiščių ar menisko traumos", "Kelis tinsta ar jaučiamas karštis",
      "Ribotas kelio judesys ar sustingimas", "Po operacijos siekiate kryptingo atsistatymo",
      "Skausmas kartojasi einant laiptais", "Norite grįžti į sportą saugiai",
    ],
    relatedLabel: "Galimos priežastys", relatedTitle: "Su kuo gali būti susijęs kelio skausmas?",
    relatedItems: [
      "Raiščių patempimai ar plyšimai", "Menisko pažeidimai ar dirginimas",
      "Patellofemuralinio sąnario sindromai", "Sausgyslių perkrovos ir tendinopatijos",
      "Bursito ar kremzlės dirginimo simptomai", "Raumenų disbalansas tarp keturgalvio ir užpakalinių šlaunies raumenų",
      "Perkrovos po sporto ar fizinio darbo", "Pooperacinė būklė ir atsistatymas",
    ],
    assessLabel: "Vertinimo eiga", assessTitle: "Kaip vertiname kelio skausmą?",
    assessSteps: [
      { n: "01", title: "Nusiskundimų aptarimas", text: "Aptariame simptomus, jų trukmę, krūvio pobūdį ir kas juos provokuoja." },
      { n: "02", title: "Kelio funkcijos vertinimas", text: "Vertiname judesio amplitudę, jėgą, stabilumą ir apkrovos toleranciją." },
      { n: "03", title: "Specialūs funkciniai testai", text: "Atliekame testus raiščiams, meniskui, sąnariniams audiniams ir raumenų funkcijai." },
      { n: "04", title: "Problemos paaiškinimas", text: "Pasakome, kas gali palaikyti simptomus ir kokia gydymo kryptis logiškiausia." },
      { n: "05", title: "Gydymo planas", text: "Sudarome individualų planą pagal traumos pobūdį, reabilitacijos etapą ir tikslus." },
    ],
    methodsLabel: "Metodai", methodsTitle: "Kas gali būti taikoma gydymo metu?",
    methodItems: [
      "Kineziterapija", "Sporto reabilitacija", "Manualinis gydymas",
      "Jėgos ir stabilumo lavinimas", "Apkrovos tolerancijos didinimas",
      "Judesio technikos korekcija", "Grįžimo į sportą planavimas",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti kelio skausmą ir diskomfortą", "Atkurti judrumą ir jėgą",
      "Gerinti kelio stabilumą", "Didinti apkrovos toleranciją",
      "Padėti saugiai grįžti į sportą ar aktyvumą", "Sumažinti traumos pasikartojimo riziką",
    ],
    redFlagsLabel: "Svarbu žinoti", redFlagsTitle: "Kada reikalingas skubesnis įvertinimas?",
    redFlagsIntro: "Dauguma kelio problemų gali būti vertinamos planine tvarka, tačiau kai kuriais atvejais reikalingas greitesnis medicininis įvertinimas:",
    redFlagItems: [
      "Stiprus skausmas ir tinimas po traumos", "Neįmanoma atsistoti ar stovėti ant kojos",
      "Aiškus kelio deformacijos jautimas", "Ryškus nestabilumo jautimas po traumos",
      "Žaizdos, paraudimas ar karštis ties keliu po operacijos", "Labai prasta bendra savijauta",
    ],
    servicesLabel: "Paslaugos", servicesTitle: "Kokios paslaugos gali tikti esant kelio problemoms?",
    services: [
      { title: "Kineziterapija", text: "Tinka, kai svarbiausia atkurti funkciją, jėgą, judrumą ir apkrovos toleranciją.", href: "/paslaugos/kineziterapija" },
      { title: "Sporto reabilitacija", text: "Tinka, kai problema susijusi su sportu ir siekiama kryptingo grįžimo į aktyvumą.", href: "/paslaugos/sporto-reabilitacija" },
      { title: "Pooperacinė reabilitacija", text: "Tinka po kelio operacijų, kai reikalingas etapinis kryptingas atsistatymas.", href: "/paslaugos/pooperacine-reabilitacija" },
      { title: "Manualinė terapija", text: "Gali būti naudinga kaip gydymo plano dalis, siekiant mažinti diskomfortą ar gerinti judrumą.", href: "/paslaugos/manualine-terapija" },
    ],
    servicesNote: "Tinkamiausia paslauga priklauso nuo jūsų būklės ir etapo. Individualus įvertinimas — pirmiausia.",
    specialistsLabel: "Specialistai", specialistsTitle: "Specialistai, dirbantys su kelio skausmu", specialistCta: "Registruotis",
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar kelio skausmas po bėgimo visada reiškia traumą?", a: "Ne visada. Dažnai tai susiję su perkrova, apkrovos pokyčiu ar raumenų funkcijos trūkumais. Vis dėlto svarbu įvertinti simptomus." },
      { q: "Ar galima pradėti reabilitaciją iš karto po kelio operacijos?", a: "Taip, dažnai galima pradėti anksti pagal operacijos protokolą. Svarbu parinkti tinkamą krūvį konkrečiam etapui." },
      { q: "Ar raiščių patempimai gydomos be operacijos?", a: "Daugeliu atvejų taip. Kineziterapija ir sporto reabilitacija padeda atkurti stabilumą ir funkciją konservatyviai." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo problemos pobūdžio ir tikslų. Kai kuriais atvejais pakanka kelių, kitais reikia nuoseklesnio proceso." },
      { q: "Ar su kelio skausmu galima sportuoti?", a: "Priklauso nuo skausmo pobūdžio. Kartais galima tęsti koreguojant krūvį, tačiau svarbu suprasti, kokie judesiai šiuo metu tinkami." },
      { q: "Ar gydymo metu gausiu pratimų namoms?", a: "Taip — gausite namų programos rekomendacijas, padėsiančias greičiau pasiekti rezultatą." },
    ],
    ctaTitle: "Norite suprasti kelio skausmo priežastį?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime jūsų būklę ir parinksime tinkamiausią gydymo kryptį.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Kelio problemos, pooperacinis atsistatymas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Sporto reabilitacija, kelio traumos", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Apkrovos valdymas, grįžimas į sportą", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Kelio skausmas, jėgos atkūrimas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← What we treat", conditionLabel: "Condition",
    title: "Knee Pain and Injuries in Vilnius",
    subtitle: "Knee pain, ligament and meniscus problems, overuse or post-operative recovery — we assess the condition and choose the most appropriate treatment direction.",
    trustPoints: ["We assess knee function and load tolerance", "Treatment chosen based on your condition and stage", "We work with both acute and chronic knee conditions"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "kaip-vertiname", label: "How we assess" }, { id: "metodai", label: "Methods" },
      { id: "paslaugos", label: "Services" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the condition", aboutTitle: "Knee pain and injuries",
    aboutText: [
      "Knee pain is one of the most common musculoskeletal problems for both athletes and people with sedentary work. Symptoms may appear as acute pain after injury, recurring discomfort during load or chronic irritation.",
      "Knee problems may be related to ligament or meniscus damage, articular cartilage irritation, overuse syndromes, muscle imbalance or post-operative recovery.",
      "At ReaMed clinic we assess knee pain comprehensively: not only structural changes but how the knee functions, tolerates load and responds to movement.",
    ],
    keyPoints: [
      { title: "Knee function, not just pain", text: "It is important to assess how the knee moves, tolerates load and works as a system." },
      { title: "Pain does not equal damage", text: "Often knee pain is related to functional factors, not only structural damage." },
      { title: "Guided recovery from injuries", text: "Appropriate treatment helps safely return to activity or sport." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "Knee pain during sport or after load", "Feeling instability when squatting or walking",
      "Pain after ligament or meniscus injury", "Knee swelling or feeling of heat",
      "Restricted knee movement or stiffness", "Want guided recovery after surgery",
      "Pain when climbing stairs recurs", "Want to return to sport safely",
    ],
    relatedLabel: "Possible causes", relatedTitle: "What may knee pain be related to?",
    relatedItems: [
      "Ligament sprains or tears", "Meniscus damage or irritation",
      "Patellofemoral joint syndromes", "Tendon overuse and tendinopathy",
      "Bursitis or cartilage irritation symptoms", "Muscle imbalance between quadriceps and hamstrings",
      "Overload from sport or physical work", "Post-operative condition and recovery",
    ],
    assessLabel: "Assessment flow", assessTitle: "How do we assess knee pain?",
    assessSteps: [
      { n: "01", title: "Discussion of complaints", text: "We discuss symptoms, duration, load pattern and what provokes them." },
      { n: "02", title: "Knee function assessment", text: "We assess range of motion, strength, stability and load tolerance." },
      { n: "03", title: "Special functional tests", text: "We perform tests for ligaments, meniscus, joint tissues and muscle function." },
      { n: "04", title: "Explanation of the problem", text: "We explain what may be maintaining symptoms and what treatment direction is most logical." },
      { n: "05", title: "Treatment plan", text: "We create an individual plan based on injury type, rehabilitation stage and goals." },
    ],
    methodsLabel: "Methods", methodsTitle: "What may be applied during treatment?",
    methodItems: [
      "Physiotherapy", "Sports rehabilitation", "Manual treatment",
      "Strength and stability training", "Load tolerance progression",
      "Movement technique correction", "Return to sport planning",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce knee pain and discomfort", "Restore mobility and strength",
      "Improve knee stability", "Increase load tolerance",
      "Help safely return to sport or activity", "Reduce risk of injury recurrence",
    ],
    redFlagsLabel: "Important", redFlagsTitle: "When is more urgent assessment needed?",
    redFlagsIntro: "Most knee problems can be assessed as routine, but some cases require faster medical assessment:",
    redFlagItems: [
      "Severe pain and swelling after trauma", "Unable to stand or bear weight on the leg",
      "Obvious feeling of knee deformity", "Significant instability feeling after trauma",
      "Wound changes, redness or heat at knee after surgery", "Very poor general health",
    ],
    servicesLabel: "Services", servicesTitle: "What services may be suitable for knee problems?",
    services: [
      { title: "Physiotherapy", text: "Suitable when the priority is restoring function, strength, mobility and load tolerance.", href: "/paslaugos/kineziterapija" },
      { title: "Sports rehabilitation", text: "Suitable when the problem is sport-related and you aim for guided return to activity.", href: "/paslaugos/sporto-reabilitacija" },
      { title: "Post-operative rehabilitation", text: "Suitable after knee surgery when staged guided recovery is needed.", href: "/paslaugos/pooperacine-reabilitacija" },
      { title: "Manual therapy", text: "Can be helpful as part of the treatment plan to reduce discomfort or improve mobility.", href: "/paslaugos/manualine-terapija" },
    ],
    servicesNote: "The most appropriate service depends on your condition and stage. Individual assessment comes first.",
    specialistsLabel: "Specialists", specialistsTitle: "Specialists working with knee pain", specialistCta: "Book",
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Does knee pain after running always mean injury?", a: "Not always. It is often related to overuse, load changes or muscle function deficits. Still, it is important to assess symptoms." },
      { q: "Can rehabilitation start immediately after knee surgery?", a: "Yes, often early start is possible following the operation protocol. Appropriate load for the specific stage is key." },
      { q: "Are ligament sprains treated without surgery?", a: "In most cases yes. Physiotherapy and sports rehabilitation help restore stability and function conservatively." },
      { q: "How many visits are typically needed?", a: "It depends on the nature and goals. Sometimes a few visits suffice; others need a more systematic process." },
      { q: "Can I exercise with knee pain?", a: "It depends on the pain pattern. Sometimes activity can continue with load modification, but understanding which movements are safe is important." },
      { q: "Will I receive home exercise recommendations?", a: "Yes — you will receive home programme recommendations to help achieve results faster." },
    ],
    ctaTitle: "Want to understand the cause of your knee pain?", ctaText: "Book your first appointment — we will assess your condition and choose the most appropriate treatment direction.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Knee problems, post-operative recovery", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Sports rehabilitation, knee injuries", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Load management, return to sport", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Knee pain, strength restoration", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
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

export default function KelioSkausmasContent() {
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
