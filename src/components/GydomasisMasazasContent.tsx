"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    breadcrumb: "← Paslaugos", serviceLabel: "Paslauga",
    title: "Gydomasis masažas Vilniuje",
    subtitle: "Tikslingai taikomas gydomasis masažas, padedantis mažinti raumenų įtampą, skausmą ir diskomfortą bei gerinti bendrą savijautą.",
    trustPoints: ["Mažinti raumenų įtampą", "Palaikyti atsistatymą po krūvio", "Derinama su kitomis paslaugomis pagal poreikį"],
    ctaRegister: "Registruotis vizitui", ctaConsult: "Pasikonsultuoti",
    anchor: [
      { id: "kas-tai", label: "Kas tai?" }, { id: "kada-kreiptis", label: "Kada kreiptis?" },
      { id: "pirmasis-vizitas", label: "Pirmasis vizitas" }, { id: "gydymo-planas", label: "Gydymo planas" },
      { id: "kainos", label: "Kainos" }, { id: "specialistai", label: "Specialistai" }, { id: "duk", label: "DUK" },
    ],
    aboutLabel: "Apie paslaugą", aboutTitle: "Kas yra gydomasis masažas?",
    aboutText: [
      "Gydomasis masažas — tai tikslinga rankomis atliekama procedūra, skirta mažinti raumenų įtampą, gerinti audinių būklę, mažinti diskomfortą ir padėti kūnui lengviau atsistatyti.",
      "Tai nėra tik atsipalaidavimui skirtas masažas. Gydomasis masažas taikomas atsižvelgiant į jūsų savijautą, skausmo vietą, raumenų įtampą ir bendrą fizinę būklę.",
      "Priklausomai nuo situacijos, gydomasis masažas gali būti taikomas kaip savarankiška paslauga arba kaip platesnio gydymo plano dalis, derinant jį su kineziterapija ar kitomis procedūromis.",
    ],
    benefits: [
      { icon: "🎯", title: "Tikslingas poveikis", text: "Dėmesys skiriamas probleminėms, įtemptoms ar perkrautoms sritims." },
      { icon: "💆", title: "Raumenų atpalaidavimas", text: "Siekiame mažinti įtampą, sustingimą ir diskomfortą." },
      { icon: "✨", title: "Geresnė savijauta", text: "Procedūra padeda lengviau judėti, atsistatyti ir jaustis komfortiškiau." },
    ],
    whenLabel: "Indikacijos", whenTitle: "Kada verta kreiptis?",
    whenItems: [
      "Raumenų įtampa ar sustingimas", "Nugaros, kaklo ar pečių juostos diskomfortas",
      "Po fizinės perkrovos ar intensyvesnio sporto", "Atsistatymo laikotarpiu po didesnio krūvio",
      "Pasikartojantis raumenų nuovargis", "Judesiai tapo nemalonesni dėl įtampos",
      "Noras sumažinti kūno įsitempimą", "Gydomąjį masažą rekomenduoja derinti su kitu gydymu",
    ],
    treatLabel: "Specialybė", treatTitle: "Su kokiomis būklėmis dirbame?",
    treatItems: [
      "Kaklo, pečių juostos ir nugaros raumenų įtampa", "Raumenų perkrova po fizinio aktyvumo",
      "Minkštųjų audinių jautrumas ir sustingimas", "Pasikartojantis raumenų nuovargis",
      "Diskomfortas dėl ilgalaikės sėdimos padėties", "Padidėjusi raumenų įtampa po treniruočių",
      "Atsistatymo poreikis po didesnio fizinio krūvio",
    ],
    importantLabel: "Svarbu", importantText: "Jei nesate tikri, ar jums labiau tinka gydomasis masažas, kineziterapija ar kita paslauga — registruokitės pirminei konsultacijai. Įvertinsime ir padėsime pasirinkti tinkamiausią kryptį.", importantCta: "Registruotis konsultacijai",
    midCtaTitle: "Nežinote, ar gydomasis masažas jums tinka?", midCtaText: "Registruokitės pirmajai konsultacijai — kartu pasirinkime tinkamiausią kryptį.", midCtaBtn: "Registruotis vizitui",
    visitLabel: "Vizito eiga", visitTitle: "Kaip vyksta pirmasis vizitas?",
    visitSteps: [
      { n: "01", title: "Nusiskundimų aptarimas", text: "Aptariame, kur jaučiate įtampą, skausmą ar diskomfortą, kada tai atsirado." },
      { n: "02", title: "Būklės įvertinimas", text: "Įvertiname problemines zonas, audinių jautrumą, raumenų tonusą ir bendrą savijautą." },
      { n: "03", title: "Tinkamiausio poveikio parinkimas", text: "Sprendžiame, kokio intensyvumo ir pobūdžio masažas jums tinkamiausias." },
      { n: "04", title: "Procedūros atlikimas", text: "Dirbama su įtemptomis, perkrautomis ar jautriomis sritimis." },
      { n: "05", title: "Reakcijos įvertinimas", text: "Aptariame, kaip jaučiatės po procedūros ir į ką svarbu atkreipti dėmesį." },
      { n: "06", title: "Rekomendacijos po vizito", text: "Jei reikia, gaunate rekomendacijas dėl poilsio, krūvio ar tolimesnio plano." },
    ],
    planLabel: "Procesas", planTitle: "Kaip planuojamas gydymas?",
    planText: [
      "Vizitų dažnis priklauso nuo savijautos, simptomų pobūdžio, fizinio krūvio ir to, kokio rezultato siekiate.",
      "Kai kuriais atvejais pakanka kelių procedūrų įtampai sumažinti, kitais gydomasis masažas taikomas kaip reguliari palaikomoji priemonė.",
      "Jei reikia, masažas gali būti derinamas su kineziterapija ar kitomis ReaMed paslaugomis.",
    ],
    planCards: [
      ["Individualus", "Procedūros intensyvumas ir kryptis parenkamas pagal jūsų būklę."],
      ["Pritaikytas savijautai", "Atsižvelgiame į jautrumą, įtampą ir bendrą organizmo reakciją."],
      ["Kompleksiškas", "Prireikus masažas derinamas su kitomis paslaugomis."],
    ],
    appliedLabel: "Metodai", appliedTitle: "Kas gali būti taikoma gydymo metu?",
    appliedItems: [
      "Raumenų atpalaidavimo technikos", "Tikslingas darbas su įtemptomis sritimis",
      "Minkštųjų audinių masažas", "Perkrovos paveiktų zonų apdorojimas",
      "Audinių elastingumo gerinimas", "Atsistatymą palaikantis masažas",
      "Švelnesnės ar intensyvesnės technikos pagal poreikį",
    ],
    goalsLabel: "Tikslai", goalsTitle: "Ko siekiame gydymo metu?",
    goalItems: [
      "Mažinti raumenų įtampą", "Mažinti skausmą ir diskomfortą",
      "Gerinti audinių būklę", "Lengvinti judėjimą ir savijautą",
      "Padėti organizmui atsistatyti po krūvio",
    ],
    forWhomLabel: "Tikslinė grupė", forWhomTitle: "Kam tinka gydomasis masažas?",
    forWhomItems: [
      "Dirbantiems sėdimą ar fiziškai monotonišką darbą", "Jaučiantiems kaklo, pečių ar nugaros įtampą",
      "Aktyviai sportuojantiems", "Po didesnio fizinio krūvio ar perkrovų",
      "Norintiems sumažinti raumenų sustingimą",
    ],
    whyLabel: "ReaMed", whyTitle: "Kodėl pacientai renkasi ReaMed?",
    whyItems: [
      { title: "Tikslingas požiūris", text: "Gydomasis masažas taikomas pagal jūsų savijautą ir konkrečią problemą." },
      { title: "Dėmesys ne tik įtampai", text: "Jei matome, kad vien masažo nepakanka, padedame pasirinkti tolimesnę kryptį." },
      { title: "Aiškus planas", text: "Po vizito suprasite, ar masažas jums tinkamas kaip pagrindinė ar pagalbinė priemonė." },
      { title: "Derinimas su kitomis paslaugomis", text: "Masažą galima derinti su kineziterapija ar kitais gydymo metodais." },
    ],
    pricesLabel: "Kainodara", pricesTitle: "Kainos",
    priceFirst: "Masažas (30 min)", priceFirstDesc: "Tikslingas gydomasis masažas",
    priceRepeat: "Masažas (60 min)", priceRepeatDesc: "Pilnas gydomasis masažas",
    allPrices: "Visos kainos", packagesNote: "Galimi procedūrų paketai",
    specialistsLabel: "Komanda", specialistsTitle: "Specialistai, teikiantys šią paslaugą", specialistCta: "Registruotis",
    beforeLabel: "Prieš pirmą vizitą",
    beforeItems: ["Atvykite 5–10 min. anksčiau.", "Vilkėkite patogią aprangą.", "Informuokite specialistą apie jautrias vietas ar ūmų skausmą."],
    faqLabel: "Klausimai", faqTitle: "Dažniausiai užduodami klausimai",
    faqs: [
      { q: "Ar gydomasis masažas tinka, jei jaučiu skausmą?", a: "Daugeliu atvejų taip, tačiau viskas priklauso nuo skausmo pobūdžio. Jei simptomai ūmūs ar neaiškūs, pirmiausia įvertiname, ar masažas šiuo metu tinkamas." },
      { q: "Kuo gydomasis masažas skiriasi nuo atpalaiduojančio?", a: "Gydomasis masažas taikomas tikslingiau — orientuojantis į problemines, įtemptas ar perkrautas sritis, o ne tik į bendrą atsipalaidavimą." },
      { q: "Ar masažas gali būti derinamas su kineziterapija?", a: "Taip, dažnai masažas taikomas kaip pagalbinė priemonė kartu su kineziterapija ar kitu aktyviu gydymu." },
      { q: "Kiek procedūrų dažniausiai prireikia?", a: "Tai priklauso nuo simptomų pobūdžio ir tikslų. Kartais pakanka kelių procedūrų, o kartais masažas taikomas reguliariai kaip atsistatymą palaikanti priemonė." },
      { q: "Ar po procedūros galiu jausti jautrumą?", a: "Taip, po procedūros gali būti jaučiamas laikinas jautrumas ar lengvas maudimas, kuris paprastai greitai praeina." },
      { q: "Ar gydomasis masažas tinka po sporto?", a: "Taip, jis gali būti naudingas atsistatymui po fizinės perkrovos, jei taikomas tinkamu metu ir pagal jūsų būklę." },
    ],
    ctaTitle: "Norite pagerinti savijautą?", ctaText: "Registruokitės vizitui — įvertinsime jūsų būklę ir parinksime tinkamiausią gydymo kryptį.",
    ctaBtn: "Registruotis vizitui", ctaContact: "Susisiekti",
    specialists: [
      { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Raumenų perkrovos, atsistatymas, gydomasis masažas", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
      { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Gydomasis masažas, perkrovų gydymas, atsistatymas po krūvio", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
    ],
  },
  en: {
    breadcrumb: "← Services", serviceLabel: "Service",
    title: "Therapeutic Massage in Vilnius",
    subtitle: "Targeted therapeutic massage to reduce muscle tension, pain and discomfort and improve overall wellbeing.",
    trustPoints: ["Reduce muscle tension", "Support recovery after load", "Combined with other services when needed"],
    ctaRegister: "Book an appointment", ctaConsult: "Get in touch",
    anchor: [
      { id: "kas-tai", label: "What is it?" }, { id: "kada-kreiptis", label: "When to seek?" },
      { id: "pirmasis-vizitas", label: "First visit" }, { id: "gydymo-planas", label: "Treatment plan" },
      { id: "kainos", label: "Prices" }, { id: "specialistai", label: "Specialists" }, { id: "duk", label: "FAQ" },
    ],
    aboutLabel: "About the service", aboutTitle: "What is therapeutic massage?",
    aboutText: [
      "Therapeutic massage is a purposeful hands-on procedure designed to reduce muscle tension, improve tissue condition, reduce discomfort and help the body recover more easily.",
      "This is not just a relaxation massage. Therapeutic massage is applied taking into account your wellbeing, pain location, muscle tension and overall physical condition.",
      "Depending on the situation, therapeutic massage can be used as a standalone service or as part of a broader treatment plan, combined with physiotherapy or other procedures.",
    ],
    benefits: [
      { icon: "🎯", title: "Targeted effect", text: "Focus is on problematic, tense or overloaded areas." },
      { icon: "💆", title: "Muscle relaxation", text: "We aim to reduce tension, stiffness and discomfort." },
      { icon: "✨", title: "Better wellbeing", text: "The procedure helps you move more easily, recover and feel more comfortable." },
    ],
    whenLabel: "Indications", whenTitle: "When is it worth seeking help?",
    whenItems: [
      "Muscle tension or stiffness", "Back, neck or shoulder girdle discomfort",
      "After physical overload or intense sport", "Recovery period after significant physical load",
      "Recurring muscle fatigue", "Movement became uncomfortable due to tension",
      "Wanting to reduce body tension", "Massage recommended as part of another treatment",
    ],
    treatLabel: "Specialisation", treatTitle: "What conditions do we work with?",
    treatItems: [
      "Neck, shoulder girdle and back muscle tension", "Muscle overload after physical activity",
      "Soft tissue sensitivity and stiffness", "Recurring muscle fatigue",
      "Discomfort due to prolonged sitting", "Increased muscle tension after training",
      "Recovery need after significant physical load",
    ],
    importantLabel: "Note", importantText: "If you are unsure whether therapeutic massage, physiotherapy or another service is more suitable for you — book an initial consultation. We will assess and help choose the most appropriate direction.", importantCta: "Book a consultation",
    midCtaTitle: "Not sure if therapeutic massage is right for you?", midCtaText: "Book your first consultation — together we will choose the most suitable direction.", midCtaBtn: "Book an appointment",
    visitLabel: "Visit flow", visitTitle: "How does the first visit work?",
    visitSteps: [
      { n: "01", title: "Discussion of complaints", text: "We discuss where you feel tension, pain or discomfort and when it started." },
      { n: "02", title: "Condition assessment", text: "We assess problem areas, tissue sensitivity, muscle tone and general wellbeing." },
      { n: "03", title: "Selecting the right approach", text: "We decide what intensity and type of massage is most appropriate for you." },
      { n: "04", title: "Procedure", text: "Work is done on tense, overloaded or sensitive areas." },
      { n: "05", title: "Response assessment", text: "We discuss how you feel after the procedure and what to pay attention to." },
      { n: "06", title: "Post-visit recommendations", text: "If needed, you receive recommendations regarding rest, load or further plan." },
    ],
    planLabel: "Process", planTitle: "How is treatment planned?",
    planText: [
      "Visit frequency depends on your wellbeing, symptom pattern, physical load and the result you are aiming for.",
      "In some cases a few procedures are enough to reduce tension; in others therapeutic massage is used as a regular maintenance measure.",
      "If needed, massage can be combined with physiotherapy or other ReaMed services.",
    ],
    planCards: [
      ["Individual", "Procedure intensity and direction is chosen based on your condition."],
      ["Adapted to wellbeing", "We take into account sensitivity, tension and overall body response."],
      ["Comprehensive", "When needed, massage is combined with other services."],
    ],
    appliedLabel: "Methods", appliedTitle: "What may be applied during treatment?",
    appliedItems: [
      "Muscle relaxation techniques", "Targeted work on tense areas",
      "Soft tissue massage", "Treatment of overloaded zones",
      "Tissue elasticity improvement", "Recovery-supporting massage",
      "Gentler or deeper techniques based on need",
    ],
    goalsLabel: "Goals", goalsTitle: "What do we aim to achieve?",
    goalItems: [
      "Reduce muscle tension", "Reduce pain and discomfort",
      "Improve tissue condition", "Ease movement and wellbeing",
      "Help the body recover after load",
    ],
    forWhomLabel: "Target group", forWhomTitle: "Who is therapeutic massage suitable for?",
    forWhomItems: [
      "Those with sedentary or physically monotonous work", "Those with neck, shoulder or back tension",
      "Active individuals and athletes", "After significant physical load or overuse",
      "Those wanting to reduce muscle stiffness",
    ],
    whyLabel: "ReaMed", whyTitle: "Why do patients choose ReaMed?",
    whyItems: [
      { title: "Targeted approach", text: "Therapeutic massage is applied based on your wellbeing and specific problem." },
      { title: "Focus beyond tension", text: "If we see that massage alone is not enough, we help choose a further treatment direction." },
      { title: "Clear plan", text: "After the visit you will understand whether massage is your primary or supporting treatment." },
      { title: "Combined services available", text: "Massage can be combined with physiotherapy or other treatment methods." },
    ],
    pricesLabel: "Pricing", pricesTitle: "Prices",
    priceFirst: "Massage (30 min)", priceFirstDesc: "Targeted therapeutic massage",
    priceRepeat: "Massage (60 min)", priceRepeatDesc: "Full therapeutic massage",
    allPrices: "All prices", packagesNote: "Procedure packages available",
    specialistsLabel: "Team", specialistsTitle: "Specialists providing this service", specialistCta: "Book",
    beforeLabel: "Before the first visit",
    beforeItems: ["Arrive 5–10 minutes early.", "Wear comfortable clothing.", "Inform the specialist about sensitive areas or acute pain."],
    faqLabel: "Questions", faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is therapeutic massage suitable if I am in pain?", a: "In most cases yes, but it depends on the nature of the pain. If symptoms are acute or unclear, we first assess whether massage is currently the right choice." },
      { q: "How does therapeutic massage differ from relaxation massage?", a: "Therapeutic massage is more targeted — focused on problematic, tense or overloaded areas rather than general relaxation." },
      { q: "Can massage be combined with physiotherapy?", a: "Yes, massage is often used as a supporting measure alongside physiotherapy or other active treatment." },
      { q: "How many procedures are typically needed?", a: "It depends on the symptom pattern and goals. Sometimes a few procedures suffice; at other times massage is used regularly as a maintenance measure." },
      { q: "Can I feel sensitivity after the procedure?", a: "Yes, some temporary sensitivity or mild soreness after the procedure is normal and usually passes quickly." },
      { q: "Is therapeutic massage suitable after sport?", a: "Yes, it can be beneficial for recovery after physical overload, if applied at the right time and based on your condition." },
    ],
    ctaTitle: "Want to improve your wellbeing?", ctaText: "Book an appointment — we will assess your condition and choose the most appropriate treatment direction.",
    ctaBtn: "Book an appointment", ctaContact: "Contact us",
    specialists: [
      { name: "Mangirdas Kazačenko", role: "Physiotherapist, manual therapy specialist", focus: "Muscle overload, recovery, therapeutic massage", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
      { name: "Erikas Jatkauskas", role: "Physiotherapist", focus: "Therapeutic massage, overuse management, recovery after load", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
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

export default function GydomasisMasazasContent() {
  const { lang } = useLanguage();
  const c = content[lang];
  const specGrid = c.specialists.length <= 2 ? "grid sm:grid-cols-2 max-w-[640px] gap-5" : "grid sm:grid-cols-2 lg:grid-cols-4 gap-5";
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
        <div id="kainos" className="rounded-2xl border border-[#DDE9E8] bg-white p-6 md:p-8 scroll-mt-32"><div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6"><div className="flex-1"><SL>{c.pricesLabel}</SL><h2 className="text-[1.25rem] font-bold text-foreground mb-5">{c.pricesTitle}</h2><div className="flex flex-col sm:flex-row gap-5 sm:gap-8"><div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4"><p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">{c.priceFirst}</p><p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">40 €</p><p className="text-[0.8125rem] text-secondary leading-snug">{c.priceFirstDesc}</p></div><div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4"><p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">{c.priceRepeat}</p><p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">65 €</p><p className="text-[0.8125rem] text-secondary leading-snug">{c.priceRepeatDesc}</p></div></div></div><div className="flex flex-col gap-2 sm:pt-8"><Link href="/kainos" className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200 whitespace-nowrap">{c.allPrices} <ArrowRight size={14} strokeWidth={2.5} /></Link><p className="text-[0.75rem] text-muted/40 text-center">{c.packagesNote}</p></div></div></div>
        <div id="specialistai" className="scroll-mt-32"><SL>{c.specialistsLabel}</SL><ST>{c.specialistsTitle}</ST><div className={specGrid}>{c.specialists.map((s) => (<div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col"><a href={`/specialistai/${s.slug}`} className="block h-[220px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden"><img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} /></a><div className="p-4 flex flex-col flex-1"><a href={`/specialistai/${s.slug}`} className="text-[0.9375rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">{s.name}</a><p className="text-[0.78rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p><p className="text-[0.78rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p><a href={`/specialistai/${s.slug}#registruotis`} className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">{c.specialistCta} <ArrowRight size={13} strokeWidth={2.5} /></a></div></div>))}</div></div>
        <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-6 md:p-8"><div className="flex items-start gap-4"><span className="text-[1.5rem] leading-none mt-0.5 flex-shrink-0">📋</span><div><h2 className="text-[1.125rem] font-bold text-foreground mb-2">{c.beforeLabel}</h2><ul className="flex flex-col gap-1.5">{c.beforeItems.map((item) => (<li key={item} className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" /><span className="text-[0.9rem] text-secondary">{item}</span></li>))}</ul></div></div></div>
        <div id="duk" className="scroll-mt-32"><SL>{c.faqLabel}</SL><ST>{c.faqTitle}</ST><FQ items={c.faqs} /></div>
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center"><h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">{c.ctaTitle}</h2><p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[460px] mx-auto">{c.ctaText}</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4"><a href="tel:+37060134304" className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]">{c.ctaBtn} <ArrowRight size={15} strokeWidth={2.5} /></a><Link href="/kontaktai" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"><Phone size={14} strokeWidth={2} /> {c.ctaContact}</Link></div><p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p></div>
      </div>
    </div>
  );
}
