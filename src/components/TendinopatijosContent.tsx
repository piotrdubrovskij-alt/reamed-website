"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Ką gydome", conditionLabel: "Problema",
    title: "Tendinopatijos ir perkrovos Vilniuje",
    subtitle: "Pasikartojantis skausmas fizinio krūvio metu ar po jo, jautrumas ir sumažėjusi apkrovos tolerancija gali būti susiję su sausgyslių perkrova ar ilgiau besitęsiančiais dirginimo procesais. Įvertiname ir parenkame tinkamiausią gydymo kryptį.",
    trustPoints: ["Įvertiname simptomų pobūdį ir apkrovos toleranciją", "Gydymą parenkame pagal jūsų būklę ir etapą", "Siekiame atkurti funkciją ir grąžinti toleranciją krūviui"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "kaip-vertiname", label: "Kaip vertiname?" }, { id: "metodai", label: "Metodai" },
      { id: "paslaugos", label: "Paslaugos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie problemą", aboutTitle: "Kas yra tendinopatijos ir perkrovos?",
    aboutText: [
      "Tendinopatijos ir perkrovos — būklės, kai dėl pasikartojančio ar per didelio krūvio atsiranda skausmas, jautrumas ir sumažėjusi funkcija. Dažniausiai jos vystosi palaipsniui, o ne po vienos aiškios traumos.",
      "Simptomai dažnai pasireiškia sportuojant, po treniruočių, dirbant fiziškai aktyvų darbą ar atliekant pasikartojančius judesius. Iš pradžių skausmas gali būti juntamas tik po krūvio, vėliau — jo metu ar net kasdienėje veikloje.",
      "ReaMed klinikoje svarbu ne tik nustatyti galimą perkrovą, bet ir suprasti, kaip jūsų kūnas toleruoja apkrovą, kokie judesiai provokuoja simptomus ir kokia gydymo kryptis tinkamiausia šiuo metu.",
    ],
    keyPoints: [
      { title: "Perkrova ne visada trauma", text: "Simptomai dažnai vystosi palaipsniui, kai audiniai nespėja prisitaikyti prie krūvio." },
      { title: "Poilsis ne visada sprendžia", text: "Poilsis laikinai mažina simptomus, bet problema grįžta, jei nekeičiama apkrova." },
      { title: "Tikslas — tolerancija krūviui", text: "Siekiame padėti audiniams geriau toleruoti apkrovą ir saugiai grįžti prie aktyvumo." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Skausmas kartojasi sportuojant ar po krūvio", "Problema nepraeina ar grįžta",
      "Skausmas toje pačioje vietoje atliekant tam tikrus judesius", "Po poilsio pagerėja, bet simptomai grįžta",
      "Jaučiate jautrumą ar sustingimą tam tikroje srityje", "Fizinis aktyvumas pradeda provokuoti simptomus",
      "Norite suprasti, kaip koreguoti krūvį", "Norite grįžti į aktyvumą saugiai",
    ],
    relatedLabel: "Galimos priežastys", relatedTitle: "Su kuo gali būti susijusios perkrovos?",
    relatedItems: [
      "Sausgyslių perkrova ir dirginimas", "Pasikartojantis sportinis ar darbinis krūvis",
      "Per greitai padidintas fizinis aktyvumas", "Nepakankamas audinių pasirengimas krūviui",
      "Judesio kontrolės ir jėgos trūkumas", "Sumažėjęs apkrovos toleravimas po pertraukos",
      "Raumenų ir sausgyslių disbalansas", "Pasikartojantis vieno tipo dirginimas",
    ],
    assessLabel: "Vertinimo eiga", assessTitle: "Kaip vertiname tendinopatijas ir perkrovas?",
    assessSteps: [
      { n: "01", title: "Nusiskundimų aptarimas", text: "Aptariame, kada simptomai prasidėjo, kokio krūvio metu atsiranda ir kas juos stiprina." },
      { n: "02", title: "Funkcijos ir apkrovos vertinimas", text: "Vertiname skausmo vietą, judrumą, jėgą, kontrolę ir apkrovos toleranciją." },
      { n: "03", title: "Funkciniai testai", text: "Atliekame testus, padedančius suprasti, kaip paveikta sritis reaguoja į krūvį." },
      { n: "04", title: "Problemos paaiškinimas", text: "Paaiškiname, kas palaiko problemą ir kokia gydymo kryptis logiškiausia." },
      { n: "05", title: "Gydymo planas", text: "Parenkame individualų planą pagal simptomų stadiją ir tikslą." },
    ],
    methodsLabel: "Metodai", methodsTitle: "Kas gali būti taikoma gydymo metu?",
    methodItems: [
      "Kineziterapija", "Sporto reabilitacija",
      "Individualiai parinkti jėgos pratimai", "Judesio technikos korekcija",
      "Palaipsnis apkrovos tolerancijos didinimas", "Krūvio valdymo rekomendacijos",
      "Namų programos rekomendacijos",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti skausmą ir dirginimą", "Gerinti audinių toleranciją krūviui",
      "Atkurti jėgą, kontrolę ir funkciją", "Mažinti simptomų pasikartojimo riziką",
      "Padėti saugiai grįžti prie sporto ar aktyvumo", "Parinkti aiškią krūvio didinimo kryptį",
    ],
    redFlagsLabel: "Svarbu žinoti", redFlagsTitle: "Kada reikalingas skubesnis įvertinimas?",
    redFlagsIntro: "Dauguma tendinopatijų ir perkrovų nėra skubios būklės, tačiau kai kuriais atvejais svarbu greičiau įvertinti situaciją:",
    redFlagItems: [
      "Skausmas atsirado staiga ir labai stipriai", "Po įvykio negalite normaliai naudoti galūnės",
      "Ryškus silpnumas ar staigus funkcijos praradimas", "Aiškus plyšimo pojūtis traumos metu",
      "Greitai didėja tinimas ar skausmas", "Neįprastai blogėja bendra būklė",
    ],
    servicesLabel: "Paslaugos", servicesTitle: "Kokios paslaugos gali tikti?",
    services: [
      { title: "Kineziterapija", text: "Tinka, kai svarbiausia atkurti funkciją, judesį ir mažinti simptomus palaikančius veiksnius.", href: "/paslaugos/kineziterapija" },
      { title: "Sporto reabilitacija", text: "Tinka, kai problema susijusi su sportu ar grįžimu į didesnį fizinį krūvį.", href: "/paslaugos/sporto-reabilitacija" },
      { title: "Manualinė terapija", text: "Gali būti naudinga kaip pagalbinė priemonė mažinti diskomfortą ar gerinti judrumą.", href: "/paslaugos/manualine-terapija" },
      { title: "Gydomasis masažas", text: "Gali būti aktualus, kai vyrauja ryški raumenų įtampa ar aplinkinių audinių perkrova.", href: "/paslaugos/gydomasis-masazas" },
    ],
    servicesNote: "Tinkamiausia paslauga priklauso nuo simptomų pobūdžio, stadijos ir tikslų. Individualus įvertinimas — pirmiausia.",
    specialistsLabel: "Specialistai", specialistsTitle: "Specialistai, dirbantys su tendinopatijomis ir perkrovomis", specialistCta: "Registruotis",
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar tendinopatija reiškia uždegimą?", a: "Ne visada. Daugeliu atvejų tai labiau susiję su audinio reakcija į apkrovą ir sumažėjusia tolerancija, o ne tik su klasikiniu uždegimu." },
      { q: "Ar pakanka tiesiog pailsėti?", a: "Kartais poilsis sumažina simptomus, tačiau problema dažnai grįžta, jei nekeičiama apkrova ir neatkuriama funkcija." },
      { q: "Ar galima sportuoti, jei skauda tik po treniruotės?", a: "Tai priklauso nuo simptomų. Kartais aktyvumą galima tęsti koreguojant krūvį." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo trukmės ir tikslų. Kartais pakanka kelių, kitais atvejais reikia nuoseklesnio proceso." },
      { q: "Ar gydymo metu reikės pratimų?", a: "Dažniausiai taip. Tinkamai dozuotas krūvis dažnai yra viena svarbiausių gydymo dalių." },
      { q: "Ar gausiu rekomendacijų namoms?", a: "Taip — gausite rekomendacijas dėl pratimų, krūvio ir grįžimo į aktyvumą." },
    ],
    ctaTitle: "Norite suprasti, kodėl skausmas kartojasi krūvio metu?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime jūsų būklę, paaiškinsime galimas priežastis ir parinksime tinkamiausią gydymo kryptį.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Tendinopatijos, pasikartojančios perkrovos", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Sporto reabilitacija, perkrovų gydymas", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Apkrovos tolerancija, grįžimas į sportą", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Perkrovos, manualinis gydymas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← What we treat", conditionLabel: "Condition",
    title: "Tendinopathy and Overuse in Vilnius",
    subtitle: "Recurring pain during or after physical load, tenderness and reduced load tolerance may be related to tendon overuse or prolonged irritation processes. We assess and choose the most appropriate treatment direction.",
    trustPoints: ["We assess symptom pattern and load tolerance", "Treatment chosen based on your condition and stage", "We aim to restore function and return load tolerance"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "kaip-vertiname", label: "How we assess" }, { id: "metodai", label: "Methods" },
      { id: "paslaugos", label: "Services" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the condition", aboutTitle: "What are tendinopathy and overuse?",
    aboutText: [
      "Tendinopathy and overuse are conditions where due to repeated or excessive load, pain, tenderness and reduced function appear. They typically develop gradually rather than after one clear injury.",
      "Symptoms often appear during sport, after training, during physically active work or with repetitive movements. Initially pain may only be felt after load, later during it or even in daily activities.",
      "At ReaMed clinic it is important not only to identify possible overuse but to understand how your body tolerates load, which movements provoke symptoms and what treatment direction is most appropriate now.",
    ],
    keyPoints: [
      { title: "Overuse is not always trauma", text: "Symptoms often develop gradually as tissues cannot adapt to the load placed on them." },
      { title: "Rest does not always solve it", text: "Rest temporarily reduces symptoms but the problem often returns if load is unchanged." },
      { title: "Goal — load tolerance", text: "We aim to help tissues better tolerate load and safely return to activity." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "Pain recurs during or after sport", "Problem does not pass or keeps returning",
      "Pain in the same place with certain movements", "Improves with rest but symptoms return with activity",
      "Feeling tenderness or stiffness in a certain area", "Physical activity starts provoking symptoms",
      "Want to understand how to modify load", "Want to return to activity safely",
    ],
    relatedLabel: "Possible causes", relatedTitle: "What may overuse be related to?",
    relatedItems: [
      "Tendon overuse and irritation", "Recurring sport or work load",
      "Too rapid increase of physical activity", "Insufficient tissue readiness for load",
      "Lack of movement control and strength", "Reduced load tolerance after a break",
      "Muscle and tendon imbalance", "Repeated same-type irritation",
    ],
    assessLabel: "Assessment flow", assessTitle: "How do we assess tendinopathy and overuse?",
    assessSteps: [
      { n: "01", title: "Discussion of complaints", text: "We discuss when symptoms started, during what load they appear and what increases them." },
      { n: "02", title: "Function and load assessment", text: "We assess pain location, mobility, strength, control and load tolerance." },
      { n: "03", title: "Functional tests", text: "We perform tests to understand how the affected area responds to load." },
      { n: "04", title: "Explanation", text: "We explain what is maintaining the problem and what treatment direction is most logical." },
      { n: "05", title: "Treatment plan", text: "We choose an individual plan based on symptom stage and goals." },
    ],
    methodsLabel: "Methods", methodsTitle: "What may be applied during treatment?",
    methodItems: [
      "Physiotherapy", "Sports rehabilitation",
      "Individually chosen strength exercises", "Movement technique correction",
      "Progressive load tolerance building", "Load management recommendations",
      "Home programme recommendations",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce pain and irritation", "Improve tissue load tolerance",
      "Restore strength, control and function", "Reduce risk of symptom recurrence",
      "Help safely return to sport or activity", "Choose a clear load progression direction",
    ],
    redFlagsLabel: "Important", redFlagsTitle: "When is more urgent assessment needed?",
    redFlagsIntro: "Most tendinopathies and overuse conditions are not urgent, but some cases warrant faster assessment:",
    redFlagItems: [
      "Pain appeared suddenly and very severely", "Unable to normally use the limb after an event",
      "Significant weakness or sudden function loss", "Clear tearing sensation during injury",
      "Swelling or pain rapidly increasing", "Unusually deteriorating general health",
    ],
    servicesLabel: "Services", servicesTitle: "What services may be suitable?",
    services: [
      { title: "Physiotherapy", text: "Suitable when restoring function, movement and reducing symptom-maintaining factors is the priority.", href: "/paslaugos/kineziterapija" },
      { title: "Sports rehabilitation", text: "Suitable when the problem is sport-related or aims for return to higher physical load.", href: "/paslaugos/sporto-reabilitacija" },
      { title: "Manual therapy", text: "Can be helpful as a supporting tool to reduce discomfort or improve mobility.", href: "/paslaugos/manualine-terapija" },
      { title: "Therapeutic massage", text: "Can be relevant when significant muscle tension or surrounding tissue overuse is present.", href: "/paslaugos/gydomasis-masazas" },
    ],
    servicesNote: "The most appropriate service depends on symptom nature, stage and goals. Individual assessment comes first.",
    specialistsLabel: "Specialists", specialistsTitle: "Specialists working with tendinopathy and overuse", specialistCta: "Book",
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Does tendinopathy mean inflammation?", a: "Not always. In most cases it is more related to tissue response to load and reduced tolerance rather than classic inflammation." },
      { q: "Is rest enough?", a: "Sometimes rest reduces symptoms, but the problem often returns if load is unchanged and function is not restored." },
      { q: "Can I exercise if pain only appears after training?", a: "It depends on symptoms. Sometimes activity can continue with load modification." },
      { q: "How many visits are typically needed?", a: "It depends on duration and goals. Sometimes a few visits suffice; others need a more systematic process." },
      { q: "Will I need exercises during treatment?", a: "Usually yes. Appropriately dosed load is often one of the most important treatment elements." },
      { q: "Will I receive home recommendations?", a: "Yes — you will receive recommendations regarding exercises, load and return to activity." },
    ],
    ctaTitle: "Want to understand why pain recurs during load?", ctaText: "Book your first appointment — we will assess your condition, explain possible causes and choose the most appropriate treatment direction.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Tendinopathy, recurring overuse", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Sports rehabilitation, overuse management", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Load tolerance, return to sport", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Overuse, manual therapy", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
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

export default function TendinopatijosContent() {
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
