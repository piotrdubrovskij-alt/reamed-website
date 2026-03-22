"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Ką gydome", conditionLabel: "Problema",
    title: "Sporto traumos Vilniuje",
    subtitle: "Sporto traumos, fizinės perkrovos ir pasikartojantis skausmas gali sustabdyti aktyvumą. Įvertiname traumą, parenkame kryptingą planą ir padedame saugiai grįžti į sportą.",
    trustPoints: ["Funkcinis traumos ir apkrovos tolerancijos įvertinimas", "Reabilitacija pagal traumą ir tikslą", "Kryptingas grįžimas į sportą ar aktyvią veiklą"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "kaip-vertiname", label: "Kaip vertiname?" }, { id: "metodai", label: "Metodai" },
      { id: "paslaugos", label: "Paslaugos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie problemą", aboutTitle: "Sporto traumos ir perkrovos",
    aboutText: [
      "Sporto traumos gali atsirasti staiga — dėl kritimo, susidūrimo ar netinkamo judesio — arba vystytis palaipsniui dėl pasikartojančio per didelio krūvio. Simptomai gali apimti ūmų skausmą, nestabilumą, tinimą, sustingimą ar pasikartojantį diskomfortą sportuojant.",
      "Grįžimas į aktyvumą po traumos ne visada yra intuityvus. Skausmo sumažėjimas dar nereiškia, kad kūnas pasiruošęs sportiniam krūviui. Svarbu etapinis, kryptingas procesas.",
      "ReaMed klinikoje sporto traumą vertiname funkciškai: svarbu ne tik audinių būklė, bet ir kaip kūnas toleruoja apkrovą, kokia jėga, stabilumas ir judesio kokybė šiuo metu.",
    ],
    keyPoints: [
      { title: "Funkcinis vertinimas", text: "Vertiname ne tik skausmingą vietą, bet ir tai, kaip kūnas juda ir toleruoja krūvį." },
      { title: "Etapinis grįžimas", text: "Reabilitacija vyksta palaipsniui — nuo simptomų mažinimo iki pilno grįžimo į sportą." },
      { title: "Sporto specifika", text: "Atsižvelgiame į jūsų sporto pobūdį, tikslus ir reikalingus judesius." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Po sporto traumos ar perkrovos", "Skausmas sportuojant ar po treniruotės",
      "Po traumos jaučiate, kad kūnas nepasiruošęs grįžti", "Reikia saugaus grįžimo į treniruotes",
      "Norisi ne tik mažinti simptomus, bet ir atkurti funkciją", "Pasikartojantis skausmas sporto metu",
      "Reikia aiškaus plano po traumos", "Norite grįžti į sportą kryptingai ir saugiai",
    ],
    relatedLabel: "Dažniausios sporto traumos", relatedTitle: "Su kokiomis traumomis dirbame?",
    relatedItems: [
      "Raiščių patempimai ir plyšimai", "Raumenų ir sausgyslių traumos",
      "Kelio, peties, čiurnos ar klubo traumos", "Perkrovos sindromai",
      "Pasikartojantis skausmas sportuojant", "Traumos po kritimų ar susidūrimų",
      "Daliniai sausgyslių plyšimai", "Potrauminis atsistatymas",
    ],
    assessLabel: "Vertinimo eiga", assessTitle: "Kaip vertiname sporto traumą?",
    assessSteps: [
      { n: "01", title: "Traumos aptarimas", text: "Aptariame traumos aplinkybę, simptomus, fizinį aktyvumą ir tikslą." },
      { n: "02", title: "Funkcinis ištyrimas", text: "Vertiname judesio kokybę, jėgą, stabilumą, mobilumą ir apkrovos toleranciją." },
      { n: "03", title: "Krūvio ir rizikos vertinimas", text: "Nustatome, kokie judesiai šiuo metu provokuoja simptomus ir riboja grįžimą." },
      { n: "04", title: "Reabilitacijos strategija", text: "Sudarome aiškią kryptį: nuo simptomų mažinimo iki grįžimo į sportinį krūvį." },
      { n: "05", title: "Pirmieji pratimai ir rekomendacijos", text: "Pagal būklę skiriami pirmieji aktyvavimo, stabilumo ar jėgos pratimai." },
    ],
    methodsLabel: "Metodai", methodsTitle: "Kas gali būti taikoma gydymo metu?",
    methodItems: [
      "Sporto reabilitacija", "Kineziterapija", "Manualinis gydymas",
      "Jėgos ir stabilumo lavinimas", "Apkrovos tolerancijos didinimas",
      "Grįžimo į sportą etapų planavimas", "Judesio technikos korekcija",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti skausmą po traumos", "Atkurti judesio kokybę ir funkciją",
      "Gerinti jėgą, stabilumą ir kontrolę", "Didinti pasitikėjimą judesiu po traumos",
      "Paruošti kūną grįžimui į aktyvumą", "Padėti saugiai grįžti į treniruotes ar sportą",
    ],
    redFlagsLabel: "Svarbu žinoti", redFlagsTitle: "Kada reikalingas skubesnis įvertinimas?",
    redFlagsIntro: "Nors dauguma sporto traumų gali būti vertinamos planine tvarka, kai kuriais atvejais svarbus greitesnis medicininis įvertinimas:",
    redFlagItems: [
      "Stiprus skausmas ir staigus funkcijos praradimas", "Neįmanoma stovėti ant kojos ar judėti galūne",
      "Aiškus deformacijos jautimas", "Ryškus tinimas greitai didėja",
      "Po traumos atsiranda stiprus silpnumas ar jutimo pokyčiai", "Žaizdos ar atviras sužalojimas",
    ],
    servicesLabel: "Paslaugos", servicesTitle: "Kokios paslaugos gali tikti esant sporto traumoms?",
    services: [
      { title: "Sporto reabilitacija", text: "Pagrindinė kryptis, kai svarbu kryptingai grįžti į fizinį aktyvumą ar sportą.", href: "/paslaugos/sporto-reabilitacija" },
      { title: "Kineziterapija", text: "Tinka, kai reikia atkurti judesį, funkciją ir apkrovos toleranciją.", href: "/paslaugos/kineziterapija" },
      { title: "Manualinė terapija", text: "Gali būti naudinga kaip pagalbinė priemonė tam tikrais reabilitacijos etapais.", href: "/paslaugos/manualine-terapija" },
      { title: "Pooperacinė reabilitacija", text: "Tinka, jei sporto trauma reikalavo operacinio gydymo.", href: "/paslaugos/pooperacine-reabilitacija" },
    ],
    servicesNote: "Tinkamiausia paslauga priklauso nuo traumos pobūdžio ir tikslų. Pirmiausia svarbus individualus įvertinimas.",
    specialistsLabel: "Specialistai", specialistsTitle: "Specialistai, dirbantys su sporto traumomis", specialistCta: "Registruotis",
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar sporto reabilitacija tik profesionaliems sportininkams?", a: "Ne. Ji tinka tiek profesionaliems, tiek mėgėjiškai sportuojantiems ar fiziškai aktyviems žmonėms." },
      { q: "Kada galima pradėti reabilitaciją po traumos?", a: "Daugeliu atvejų gana anksti — svarbu tik parinkti tinkamą krūvį konkretiam etapui." },
      { q: "Ar galima sportuoti, jei skausmas sumažėjo?", a: "Ne visada. Skausmo sumažėjimas dar nereiškia, kad kūnas pasiruošęs sportiniam krūviui." },
      { q: "Kiek vizitų dažniausiai prireikia?", a: "Tai priklauso nuo traumos, jos trukmės ir tikslų. Kai kuriais atvejais pakanka kelių vizitų, kitais reikia ilgesnio proceso." },
      { q: "Ar galima derinti su manualine terapija?", a: "Taip. Tam tikrais etapais kombinuotas gydymas gali duoti geresnius rezultatus." },
      { q: "Ar gausiu rekomendacijų dėl treniruočių?", a: "Taip — gausite aiškias rekomendacijas dėl krūvio, poilsio ir grįžimo į sportą." },
    ],
    ctaTitle: "Norite saugiai grįžti į sportą?", ctaText: "Registruokitės pirmajam vizitui — įvertinsime traumą, apkrovos toleranciją ir parinksime tinkamiausią reabilitacijos planą.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Sporto traumos, funkcinis atsistatymas", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Sporto reabilitacija, grįžimas į aktyvumą", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Sporto traumos, jėgos ir kontrolės atkūrimas", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Sporto traumos, manualinis gydymas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
    ],
  },
  en: {
    breadcrumb: "← What we treat", conditionLabel: "Condition",
    title: "Sports Injuries in Vilnius",
    subtitle: "Sports injuries, physical overload and recurring pain can stop activity. We assess the injury, create a targeted plan and help you safely return to sport.",
    trustPoints: ["Functional assessment of injury and load tolerance", "Rehabilitation based on injury and goal", "Targeted return to sport or active life"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "kaip-vertiname", label: "How we assess" }, { id: "metodai", label: "Methods" },
      { id: "paslaugos", label: "Services" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the condition", aboutTitle: "Sports injuries and overuse",
    aboutText: [
      "Sports injuries can occur suddenly — from a fall, collision or wrong movement — or develop gradually from repeated excessive load. Symptoms may include acute pain, instability, swelling, stiffness or recurring discomfort during sport.",
      "Returning to activity after injury is not always intuitive. Reduction of pain does not mean the body is ready for sporting load. A staged, targeted process is important.",
      "At ReaMed clinic we assess sports injuries functionally: not only the tissue condition but how the body tolerates load, what strength, stability and movement quality exist at present.",
    ],
    keyPoints: [
      { title: "Functional assessment", text: "We assess not only the painful area but how the body moves and tolerates load." },
      { title: "Staged return", text: "Rehabilitation proceeds gradually — from symptom reduction to full return to sport." },
      { title: "Sport specificity", text: "We consider your type of sport, goals and required movements." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "After sports injury or overload", "Pain during sport or after training",
      "After injury you feel the body is not ready to return", "Need safe return to training",
      "Want to not only reduce symptoms but restore function", "Recurring pain during sport",
      "Need a clear plan after injury", "Want to return to sport in a targeted and safe way",
    ],
    relatedLabel: "Common sports injuries", relatedTitle: "What injuries do we work with?",
    relatedItems: [
      "Ligament sprains and tears", "Muscle and tendon injuries",
      "Knee, shoulder, ankle or hip injuries", "Overuse syndromes",
      "Recurring pain during sport", "Injuries from falls or collisions",
      "Partial tendon ruptures", "Post-traumatic recovery",
    ],
    assessLabel: "Assessment flow", assessTitle: "How do we assess a sports injury?",
    assessSteps: [
      { n: "01", title: "Injury discussion", text: "We discuss the injury circumstances, symptoms, physical activity and goal." },
      { n: "02", title: "Functional assessment", text: "We assess movement quality, strength, stability, mobility and load tolerance." },
      { n: "03", title: "Load and risk assessment", text: "We identify which movements currently provoke symptoms and limit return." },
      { n: "04", title: "Rehabilitation strategy", text: "We create a clear direction: from symptom reduction to return to sporting load." },
      { n: "05", title: "First exercises and recommendations", text: "Based on condition, initial activation, stability or strength exercises are prescribed." },
    ],
    methodsLabel: "Methods", methodsTitle: "What may be applied during treatment?",
    methodItems: [
      "Sports rehabilitation", "Physiotherapy", "Manual treatment",
      "Strength and stability training", "Load tolerance progression",
      "Return to sport stage planning", "Movement technique correction",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce post-injury pain", "Restore movement quality and function",
      "Improve strength, stability and control", "Increase confidence in movement after injury",
      "Prepare body for return to activity", "Help safely return to training or sport",
    ],
    redFlagsLabel: "Important", redFlagsTitle: "When is more urgent assessment needed?",
    redFlagsIntro: "Although most sports injuries can be assessed as routine, some cases require faster medical assessment:",
    redFlagItems: [
      "Severe pain and sudden function loss", "Unable to stand on or move the limb",
      "Clear feeling of deformity", "Significant swelling rapidly increasing",
      "After injury significant weakness or sensory changes appear", "Open wound or visible injury",
    ],
    servicesLabel: "Services", servicesTitle: "What services may be suitable for sports injuries?",
    services: [
      { title: "Sports rehabilitation", text: "The main direction when targeted return to physical activity or sport is the goal.", href: "/paslaugos/sporto-reabilitacija" },
      { title: "Physiotherapy", text: "Suitable when restoring movement, function and load tolerance is the priority.", href: "/paslaugos/kineziterapija" },
      { title: "Manual therapy", text: "Can be helpful as a supporting tool at certain rehabilitation stages.", href: "/paslaugos/manualine-terapija" },
      { title: "Post-operative rehabilitation", text: "Suitable if the sports injury required surgical treatment.", href: "/paslaugos/pooperacine-reabilitacija" },
    ],
    servicesNote: "The most appropriate service depends on the injury type and goals. Individual assessment comes first.",
    specialistsLabel: "Specialists", specialistsTitle: "Specialists working with sports injuries", specialistCta: "Book",
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is sports rehabilitation only for professional athletes?", a: "No. It is suitable for both professional athletes, recreational sportspeople and physically active individuals." },
      { q: "When can rehabilitation start after injury?", a: "In many cases quite early — the key is choosing the appropriate load for the specific stage." },
      { q: "Can I exercise if pain has reduced?", a: "Not always. Reduced pain does not mean the body is ready for sporting load." },
      { q: "How many visits are typically needed?", a: "It depends on the injury, duration and goals. Some cases need a few visits, others a longer process." },
      { q: "Can it be combined with manual therapy?", a: "Yes. At certain stages combined treatment may give better results." },
      { q: "Will I receive training recommendations?", a: "Yes — you will receive clear recommendations regarding load, rest and return to sport." },
    ],
    ctaTitle: "Want to return to sport safely?", ctaText: "Book your first appointment — we will assess the injury, load tolerance and choose the most appropriate rehabilitation plan.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Piotr Dubrovskij", role: "Physiotherapist, osteopath, manual therapy specialist", focus: "Sports injuries, functional recovery", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
      { name: "Kotryna Kairytė", role: "Physiotherapist", focus: "Sports rehabilitation, return to activity", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Sports injuries, strength and control restoration", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Sports injuries, manual therapy", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
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

export default function SportoTraumosContent() {
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
