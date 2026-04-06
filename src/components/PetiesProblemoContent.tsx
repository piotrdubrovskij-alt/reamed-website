"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Ką gydome", conditionLabel: "Problema",
    title: "Peties problemos Vilniuje",
    subtitle: "Peties skausmas, ribotas judesys, trauminė ar lėtinė būklė gali trukdyti kasdienei veiklai, darbui ir sportui. Įvertiname būklę ir parenkame tinkamiausią gydymo kryptį.",
    trustPoints: ["Įvertiname peties judesio ribotumą ir skausmo pobūdį", "Gydymą parenkame pagal jūsų būklę", "Dirbame tiek su ūminėmis, tiek su lėtinėmis peties problemomis"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "kaip-vertiname", label: "Kaip vertiname?" }, { id: "metodai", label: "Metodai" },
      { id: "paslaugos", label: "Paslaugos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie problemą", aboutTitle: "Peties skausmas ir ribotas judesys",
    aboutText: [
      "Peties problemos — viena dažniausių priežasčių, dėl kurių žmonės kreipiasi dėl judėjimo sistemos sutrikimų. Tai gali būti ūmus skausmas, lėtinis diskomfortas, ribotas judesys ar jautimas, kad petys nefunkcionuoja taip, kaip turėtų.",
      "Peties simptomai gali kilti dėl raumenų ar sausgyslių perkrovos, sumažėjusio sąnarinio judrumo, traumos, potrauminio ar pooperacinio atsistatymo, ilgalaikio tausojimo ar kitų funkcinių veiksnių.",
      "ReaMed klinikoje peties problemą vertiname kompleksiškai: svarbu ne tik kur skauda, bet ir kodėl atsirado skausmas, kaip juda petys ir kokia gydymo kryptis šiuo metu logiškiausia.",
    ],
    keyPoints: [
      { title: "Peties sudėtingumas", text: "Petys yra vienas judriausių kūno sąnarių, todėl jo problemos gali būti labai įvairios." },
      { title: "Tausojimas ne visada padeda", text: "Ilgai vengtis judėti gali pabloginti judrumo ir jėgos atsistatymą." },
      { title: "Individuali diagnostika", text: "Įvertinsime tikslią peties funkciją ir parinkime gydymą pagal jūsų būklę." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Petys skauda keldamas ranką ar judant", "Judesio amplitudė sumažėjusi",
      "Skausmas trukdo miegoti ant paveikto peties", "Po traumos ar perkrovos skausmas nepraeina",
      "Jaučiate silpnumą ar niežulį petyje", "Po operacijos norite kryptingo atsistatymo",
      "Skausmas plinta į ranką ar kaklą", "Norite suprasti, kas sukelia simptomus",
    ],
    relatedLabel: "Galimos priežastys", relatedTitle: "Su kuo gali būti susijusios peties problemos?",
    relatedItems: [
      "Rotatorių manžetės perkrova ar sausgyslių sutrikimai", "Sumažėjęs peties sąnarinis judrumas",
      "Raumenų disbalansas ar jėgos trūkumas", "Peties impingement sindromai",
      "Trauma ar daliniai sausgyslių plyšimai", "Potrauminis ar pooperacinis atsistatymas",
      "Perkrovos po sporto ar fizinio darbo", "Laikysenos veiksniai, darantys įtaką petiui",
    ],
    assessLabel: "Vertinimo eiga", assessTitle: "Kaip vertiname peties problemą?",
    assessSteps: [
      { n: "01", title: "Nusiskundimų aptarimas", text: "Aptariame simptomus, jų trukmę, plitimą ir kas juos stiprina." },
      { n: "02", title: "Peties funkcijos vertinimas", text: "Vertiname judesių amplitudę, jėgą, stabilumą ir audinių būklę." },
      { n: "03", title: "Specialūs testai", text: "Atliekame tikslinius testus sausgyslėms, raiščiams ir sąnariniams audinims įvertinti." },
      { n: "04", title: "Problemos paaiškinimas", text: "Suprantamai paaiškiname galimas priežastis ir logiškiausią gydymo kryptį." },
      { n: "05", title: "Gydymo planas", text: "Sudarome individualų planą pagal jūsų būklę, tikslus ir reabilitacijos etapą." },
    ],
    methodsLabel: "Metodai", methodsTitle: "Kas gali būti taikoma gydymo metu?",
    methodItems: [
      "Kineziterapija", "Manualinis gydymas", "Osteopatinis gydymas",
      "Peties stabilizavimo pratimai", "Jėgos ir kontrolės lavinimas",
      "Judesio amplitudės gerinimas", "Pooperacinė reabilitacija",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti peties skausmą ir diskomfortą", "Gerinti judesių amplitudę",
      "Atkurti jėgą ir stabilumą", "Sumažinti perkrovos riziką",
      "Padėti grįžti prie aktyvumo ar sporto", "Užtikrinti kryptingą pooperacinį atsistatymą",
    ],
    redFlagsLabel: "Svarbu žinoti", redFlagsTitle: "Kada reikalingas skubesnis įvertinimas?",
    redFlagsIntro: "Dauguma peties problemų gali būti vertinamos planine tvarka, tačiau kai kuriais atvejais svarbus greitesnis medicininis įvertinimas:",
    redFlagItems: [
      "Ryškus ir staiga atsiradęs peties silpnumas", "Stiprus skausmas po traumos su judesio praradimu",
      "Ryškus tinimas, paraudimas ar karštis ties sąnariu", "Skausmas, plintantis į krūtinę ar kairiąją ranką",
      "Po operacijos žaizdos pokyčiai ar temperatūra", "Labai prasta bendra savijauta",
    ],
    servicesLabel: "Paslaugos", servicesTitle: "Kokios paslaugos gali tikti esant peties problemoms?",
    services: [
      { title: "Kineziterapija", text: "Tinka, kai svarbiausia atkurti jėgą, stabilumą, judesio amplitudę ir funkciją.", href: "/paslaugos/kineziterapija" },
      { title: "Manualinė terapija", text: "Tinka, kai reikia tikslingo rankinio gydymo judrumui gerinti ir skausmui mažinti.", href: "/paslaugos/manualine-terapija" },
      { title: "Sporto reabilitacija", text: "Tinka, kai petys susijęs su sportu ir norite kryptingo grįžimo į aktyvumą.", href: "/paslaugos/sporto-reabilitacija" },
      { title: "Pooperacinė reabilitacija", text: "Tinka, kai po peties operacijos reikalingas kryptingas etapinis atsistatymas.", href: "/paslaugos/pooperacine-reabilitacija" },
    ],
    servicesNote: "Tinkamiausia paslauga priklauso nuo jūsų būklės ir reabilitacijos etapo. Pirmiausia svarbus individualus įvertinimas.",
    specialistsLabel: "Specialistai", specialistsTitle: "Specialistai, dirbantys su peties problemomis", specialistCta: "Registruotis",
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar peties skausmas visada reikalauja operacijos?", a: "Ne, dauguma peties problemų gali būti sėkmingai gydomos konservatyviai — kineziterapija, manualiniu gydymu ar reabilitacija." },
      { q: "Ar galima pradėti reabilitaciją iš karto po peties traumos?", a: "Tai priklauso nuo traumos pobūdžio. Daugeliu atvejų tam tikrą gydymą galima pradėti anksti, parinkus tinkamą krūvį." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo problemos pobūdžio, trukmės ir tikslų. Kai kuriais atvejais pakanka kelių, kitais reikia nuoseklesnio plano." },
      { q: "Ar galima sportuoti su peties skausmu?", a: "Tai priklauso nuo skausmo pobūdžio ir intensyvumo. Svarbu suprasti, kokie judesiai šiuo metu saugūs." },
      { q: "Ar po peties operacijos reikalinga reabilitacija?", a: "Taip, kryptinga reabilitacija po operacijos padeda atkurti judrumą, jėgą ir funkciją efektyviau." },
      { q: "Ar gydymo metu gausiu rekomendacijų namoms?", a: "Taip — gausite rekomendacijas dėl pratimų, krūvio ir kasdienės veiklos." },
    ],
    ctaTitle: "Norite suprasti peties skausmo priežastį?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime jūsų būklę ir parinksime tinkamiausią gydymo kryptį.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Peties problemos, pooperacinis atsistatymas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Sporto reabilitacija, peties traumos", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Judesio kontrolė, jėgos atkūrimas", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Peties skausmas, manualinis gydymas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← What we treat", conditionLabel: "Condition",
    title: "Shoulder Problems in Vilnius",
    subtitle: "Shoulder pain, restricted movement, traumatic or chronic condition can interfere with daily activities, work and sport. We assess the condition and choose the most appropriate treatment direction.",
    trustPoints: ["We assess shoulder movement restriction and pain pattern", "Treatment chosen based on your condition", "We work with both acute and chronic shoulder problems"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "kaip-vertiname", label: "How we assess" }, { id: "metodai", label: "Methods" },
      { id: "paslaugos", label: "Services" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the condition", aboutTitle: "Shoulder pain and restricted movement",
    aboutText: [
      "Shoulder problems are one of the most common reasons people seek help for musculoskeletal disorders. This may be acute pain, chronic discomfort, restricted movement or a feeling that the shoulder is not functioning as it should.",
      "Shoulder symptoms may arise from muscle or tendon overuse, reduced joint mobility, trauma, post-traumatic or post-operative recovery, prolonged protective guarding or other functional factors.",
      "At ReaMed clinic we assess shoulder problems comprehensively: not only where it hurts but why pain appeared, how the shoulder moves and what treatment direction is currently most logical.",
    ],
    keyPoints: [
      { title: "Shoulder complexity", text: "The shoulder is one of the most mobile joints in the body, so its problems can be very varied." },
      { title: "Avoidance not always helpful", text: "Long-term avoidance of movement can worsen mobility and strength recovery." },
      { title: "Individual assessment", text: "We will assess exact shoulder function and choose treatment based on your condition." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "Shoulder hurts when raising arm or moving", "Range of motion has decreased",
      "Pain prevents sleeping on the affected shoulder", "Pain persists after trauma or overuse",
      "Feeling weakness or aching in the shoulder", "Want guided recovery after surgery",
      "Pain radiates to arm or neck", "Want to understand what causes symptoms",
    ],
    relatedLabel: "Possible causes", relatedTitle: "What may shoulder problems be related to?",
    relatedItems: [
      "Rotator cuff overuse or tendon disorders", "Reduced shoulder joint mobility",
      "Muscle imbalance or strength deficit", "Shoulder impingement syndromes",
      "Trauma or partial tendon tears", "Post-traumatic or post-operative recovery",
      "Overload from sport or physical work", "Postural factors affecting the shoulder",
    ],
    assessLabel: "Assessment flow", assessTitle: "How do we assess shoulder problems?",
    assessSteps: [
      { n: "01", title: "Discussion of complaints", text: "We discuss symptoms, duration, radiation pattern and what increases them." },
      { n: "02", title: "Shoulder function assessment", text: "We assess range of motion, strength, stability and tissue condition." },
      { n: "03", title: "Special tests", text: "We perform targeted tests for tendons, ligaments and joint tissues." },
      { n: "04", title: "Explanation of the problem", text: "We clearly explain possible causes and the most logical treatment direction." },
      { n: "05", title: "Treatment plan", text: "We create an individual plan based on your condition, goals and rehabilitation stage." },
    ],
    methodsLabel: "Methods", methodsTitle: "What may be applied during treatment?",
    methodItems: [
      "Physiotherapy", "Manual treatment", "Osteopathic treatment",
      "Shoulder stabilisation exercises", "Strength and control training",
      "Range of motion improvement", "Post-operative rehabilitation",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce shoulder pain and discomfort", "Improve range of motion",
      "Restore strength and stability", "Reduce overload risk",
      "Help return to activity or sport", "Ensure targeted post-operative recovery",
    ],
    redFlagsLabel: "Important", redFlagsTitle: "When is more urgent assessment needed?",
    redFlagsIntro: "Most shoulder problems can be assessed as routine, but some cases require faster medical assessment:",
    redFlagItems: [
      "Sudden significant shoulder weakness", "Severe pain after trauma with loss of movement",
      "Significant swelling, redness or heat at the joint", "Pain radiating to chest or left arm",
      "Post-operative wound changes or temperature", "Very poor general health",
    ],
    servicesLabel: "Services", servicesTitle: "What services may be suitable for shoulder problems?",
    services: [
      { title: "Physiotherapy", text: "Suitable when the priority is restoring strength, stability, range of motion and function.", href: "/paslaugos/kineziterapija" },
      { title: "Manual therapy", text: "Suitable when targeted manual treatment is needed to improve mobility and reduce pain.", href: "/paslaugos/manualine-terapija" },
      { title: "Sports rehabilitation", text: "Suitable when the shoulder is sport-related and you want targeted return to activity.", href: "/paslaugos/sporto-reabilitacija" },
      { title: "Post-operative rehabilitation", text: "Suitable when after shoulder surgery a targeted staged recovery is needed.", href: "/paslaugos/pooperacine-reabilitacija" },
    ],
    servicesNote: "The most appropriate service depends on your condition and rehabilitation stage. Individual assessment comes first.",
    specialistsLabel: "Specialists", specialistsTitle: "Specialists working with shoulder problems", specialistCta: "Book",
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Does shoulder pain always require surgery?", a: "No, most shoulder problems can be successfully treated conservatively — with physiotherapy, manual therapy or rehabilitation." },
      { q: "Can rehabilitation start immediately after shoulder trauma?", a: "It depends on the type of trauma. In many cases some treatment can start early with appropriate loading." },
      { q: "How many visits are typically needed?", a: "It depends on the nature, duration and goals. Sometimes a few visits suffice; others need a more systematic plan." },
      { q: "Can I exercise with shoulder pain?", a: "It depends on the nature and intensity of pain. Understanding which movements are currently safe is important." },
      { q: "Is rehabilitation needed after shoulder surgery?", a: "Yes, targeted rehabilitation after surgery helps restore mobility, strength and function more effectively." },
      { q: "Will I receive home recommendations?", a: "Yes — you will receive recommendations regarding exercises, load and daily activities." },
    ],
    ctaTitle: "Want to understand the cause of your shoulder pain?", ctaText: "Book your first appointment — we will assess your condition and choose the most appropriate treatment direction.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Shoulder problems, post-operative recovery", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Sports rehabilitation, shoulder injuries", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Movement control, strength restoration", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Shoulder pain, manual therapy", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
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

export default function PetiesProblemoContent() {
  const { lang } = useLanguage();
  const c = content[lang];
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-6 pb-12 md:pt-10 md:pb-16">
          <Link href="/#ka-gydome" className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted/60 hover:text-[#7DB9B5] transition-colors duration-200 mb-4 block">{c.breadcrumb}</Link>
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
