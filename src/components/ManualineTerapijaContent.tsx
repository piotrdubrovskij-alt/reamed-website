"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react";

/* ── ANCHOR NAV ───────────────────────────────────────────────── */
const anchorLinks = [
  { id: "kas-tai", label: "Kas tai?" },
  { id: "kada-kreiptis", label: "Kada kreiptis?" },
  { id: "pirmasis-vizitas", label: "Pirmasis vizitas" },
  { id: "gydymo-planas", label: "Gydymo planas" },
  { id: "kainos", label: "Kainos" },
  { id: "specialistai", label: "Specialistai" },
  { id: "duk", label: "DUK" },
];

function AnchorNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    anchorLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => { if (e.isIntersecting) setActive(id); });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div
      className="sticky z-30 bg-white/96 backdrop-blur-sm border-b border-[#DDE9E8] shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
      style={{ top: "104px" }}
    >
      <div className="container-xl">
        <nav className="flex gap-0 overflow-x-auto" style={{ scrollbarWidth: "none" }} aria-label="Puslapio navigacija">
          {anchorLinks.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`whitespace-nowrap px-4 py-3.5 text-[0.8rem] font-semibold border-b-2 transition-colors duration-200 flex-shrink-0 ${
                active === id
                  ? "border-[#7DB9B5] text-[#7DB9B5]"
                  : "border-transparent text-muted/70 hover:text-foreground hover:border-[#DDE9E8]"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ── FAQ ──────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Ar manualinė terapija tinka, jei jaučiu stiprų skausmą?",
    a: "Daugeliu atvejų taip, tačiau viskas priklauso nuo skausmo pobūdžio ir priežasties. Pirmojo vizito metu įvertiname situaciją ir nusprendžiame, ar manualinė terapija šiuo metu yra tinkamiausias pasirinkimas, ar geriau pradėti nuo kitų priemonių.",
  },
  {
    q: "Ar manualinė terapija visada taikoma pirmojo vizito metu?",
    a: "Ne visada. Pirmiausia įvertiname jūsų būklę ir nusprendžiame, ar manualinė terapija konkrečiu atveju bus naudinga. Kartais tikslingiau pradėti nuo kitų priemonių ir manualinę terapiją įtraukti vėliau.",
  },
  {
    q: "Kuo manualinė terapija skiriasi nuo masažo?",
    a: "Masažas dažniau taikomas bendram raumenų atpalaidavimui ir kraujotakos gerinimui. Manualinė terapija yra tikslingesnis gydymas: ji orientuota į konkrečius sąnarius, audinius ir judesio funkcijos gerinimą. Abi priemonės puikiai papildo viena kitą.",
  },
  {
    q: "Ar manualinė terapija gali būti derinama su kineziterapija?",
    a: "Taip, ir dažnai tai yra geriausias sprendimas. Manualinė terapija padeda sumažinti simptomus ir gerinti judrumą, o kineziterapija stiprina funkcijos atkūrimą per aktyvų gydymą ir pratimus. Tokio derinio galimybė yra vienas iš ReaMed pranašumų.",
  },
  {
    q: "Kiek vizitų dažniausiai prireikia?",
    a: "Tai priklauso nuo problemos pobūdžio, simptomų trukmės ir jūsų tikslų. Kartais pakanka kelių vizitų simptomus stabilizuoti, o kartais reikalingas nuoseklesnis planas. Tikslų rekomenduojamą kryptį aptarsime po pirmojo vizito.",
  },
  {
    q: "Ar po vizito gausiu rekomendacijų namams?",
    a: "Taip. Jei reikia, gausite aiškias rekomendacijas dėl judesio, krūvio, laikysenos ar pratimų namuose. Tikslas — ne tik palengvinti būklę vizito metu, bet ir padėti išlaikyti pažangą.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="flex flex-col gap-2">
      {faqs.map((item, i) => (
        <div key={i} className="bg-white rounded-xl border border-[#DDE9E8] overflow-hidden">
          <button
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-[#F7FAF9] transition-colors duration-150"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-[0.9rem] font-semibold text-foreground leading-snug">{item.q}</span>
            {open === i ? (
              <ChevronUp size={16} strokeWidth={2} className="text-[#7DB9B5] flex-shrink-0" />
            ) : (
              <ChevronDown size={16} strokeWidth={2} className="text-muted/40 flex-shrink-0" />
            )}
          </button>
          {open === i && (
            <div className="px-5 pb-4 pt-0.5">
              <p className="text-[0.875rem] text-muted leading-relaxed">{item.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── WHEN TO SEEK ─────────────────────────────────────────────── */
const whenItems = [
  "Nugaros ar kaklo skausmas",
  "Pečių juostos įtampa ar skausmas",
  "Sąnarių judesio ribotumas",
  "Skausmas po fizinės perkrovos",
  "Diskomfortas po traumos",
  "Raumenų įtampa ar sustingimas",
  "Pasikartojantys judesio apribojimai",
  "Poreikis greičiau sumažinti simptomus",
];

/* ── WHAT WE TREAT ────────────────────────────────────────────── */
const treatItems = [
  "Juosmens, kaklo ir krūtinės stuburo skausmai",
  "Pečių, klubo, kelio ar kitų sąnarių judrumo sutrikimai",
  "Raumenų įtampa ir minkštųjų audinių perkrova",
  "Skausmingi judesio apribojimai",
  "Būklės po traumų ar perkrovų",
  "Funkciniai stuburo ir sąnarių sutrikimai",
  "Pasikartojantis diskomfortas judesio metu",
  "Būklės, kai manualinę terapiją tikslinga derinti su aktyviu gydymu",
];

/* ── FIRST VISIT STEPS ────────────────────────────────────────── */
const visitSteps = [
  { n: "01", title: "Nusiskundimų aptarimas", text: "Išklausome, kur jaučiate skausmą, kada jis atsirado, kas jį provokuoja ir kas padeda." },
  { n: "02", title: "Būklės ir judesio įvertinimas", text: "Vertiname laikyseną, judesių amplitudę, sąnarių funkciją, audinių būklę ir galimus ribojimus." },
  { n: "03", title: "Funkciniai testai", text: "Atliekame tikslinius testus, padedančius geriau suprasti skausmo kilmę ir judesio sutrikimą." },
  { n: "04", title: "Problemos paaiškinimas", text: "Aiškiai paaiškiname, kas gali kelti simptomus ir kodėl manualinė terapija šiuo atveju gali būti naudinga." },
  { n: "05", title: "Gydymo krypties parinkimas", text: "Nusprendžiame, ar tikslinga taikyti manualinę terapiją, ar ją derinti su kitomis priemonėmis." },
  { n: "06", title: "Pirmos rekomendacijos", text: "Gaunate aiškias rekomendacijas dėl krūvio, judesio, laikysenos ar tolimesnio gydymo plano." },
];

/* ── WHAT IS APPLIED ─────────────────────────────────────────── */
const appliedItems = [
  "Sąnarių mobilizacija",
  "Minkštųjų audinių atpalaidavimo technikos",
  "Skausmą mažinančios manualinės technikos",
  "Judesio amplitudės gerinimas",
  "Raumenų įtampos mažinimas",
  "Stuburo ir periferinių sąnarių gydymas",
  "Trumpi aktyvavimo ar stabilizavimo pratimai",
  "Rekomendacijos namams ir krūvio korekcijai",
];

/* ── GOALS ───────────────────────────────────────────────────── */
const goalItems = [
  "Mažinti skausmą",
  "Gerinti sąnarių ir audinių judrumą",
  "Atkurti kokybiškesnį judesį",
  "Mažinti įtampą ir sustingimą",
  "Padėti grįžti prie kasdienės veiklos",
  "Sudaryti aiškų tolimesnio gydymo planą",
];

/* ── FOR WHOM ─────────────────────────────────────────────────── */
const forWhomItems = [
  "Jaučiantiems nugaros, kaklo ar sąnarių skausmą",
  "Turintiems judesio ribotumą ar sustingimą",
  "Po fizinių perkrovų ar traumų",
  "Aktyviai sportuojantiems",
  "Dirbantiems sėdimą darbą ir jaučiantiems nuolatinę įtampą",
  "Norintiems tikslingo rankinio gydymo kaip gydymo plano dalies",
];

/* ── WHY REAMED ──────────────────────────────────────────────── */
const whyItems = [
  { title: "Individualus požiūris", text: "Kiekvienam pacientui gydymas parenkamas pagal jo būklę, simptomus ir tikslus." },
  { title: "Priežasties paieška", text: "Dirbame ne tik su simptomu, bet ir su tuo, kas jį palaiko ar išprovokuoja." },
  { title: "Aiškus planas", text: "Po vizito žinosite, kas vyksta, ko tikėtis ir ką daryti toliau." },
  { title: "Funkcija grįstas vertinimas", text: "Vertiname ne tik skausmą, bet ir judesio kokybę, apribojimus bei bendrą funkciją." },
  { title: "Galimybė derinti paslaugas", text: "Manualinę terapiją galima derinti su kineziterapija ar kitomis gydymo kryptimis." },
];

/* ── SPECIALISTS ─────────────────────────────────────────────── */
const specialists = [
  {
    name: "Piotr Dubrovskij",
    role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas",
    focus: "Nugaros ir sąnarių skausmai, funkcinis ištyrimas",
    photo: "/specialist-piotr.jpg",
    slug: "piotr-dubrovskij",
  },
  {
    name: "Mangirdas Kazačenko",
    role: "Kineziterapeutas, manualinės terapijos specialistas",
    focus: "Pooperacinė reabilitacija, manualinė terapija",
    photo: "/specialist-mangirdas.jpg",
    slug: "mangirdas-kazacenko",
  },
];

/* ── HELPERS ─────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-2">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[1.625rem] md:text-[2rem] font-bold text-foreground leading-tight mb-4">
      {children}
    </h2>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#90CECA] mt-1.5 flex-shrink-0" />
          <span className="text-[0.9rem] text-secondary leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MidCTA() {
  return (
    <div className="rounded-2xl bg-[#7DB9B5] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <p className="text-white font-bold text-[1.0625rem] mb-1">
          Nežinote, ar manualinė terapija jums tinka?
        </p>
        <p className="text-white/80 text-[0.875rem]">
          Registruokitės pirmajai konsultacijai — kartu pasirinkime tinkamiausią gydymo kryptį.
        </p>
      </div>
      <a
        href="#registruotis"
        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7DB9B5] text-[0.875rem] font-bold rounded-xl hover:bg-[#EEF5F4] transition-colors duration-200 flex-shrink-0 shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
      >
        Registruotis vizitui <ArrowRight size={14} strokeWidth={2.5} />
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function ManualineTerapijaContent() {
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* ── 1. HERO ───────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-10 pb-12 md:pt-14 md:pb-16">
          <SectionLabel>Paslauga</SectionLabel>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-foreground leading-[1.1] mb-4 max-w-[640px]">
            Manualinė terapija Vilniuje
          </h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[540px]">
            Tikslingai taikoma manualinė terapija, padedanti mažinti skausmą, gerinti sąnarių judrumą ir atkurti kokybišką judesį.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
            {["Individualus įvertinimas", "Gydymas pagal jūsų būklę", "Esant poreikiui derinama su kineziterapija"].map((tp) => (
              <span key={tp} className="flex items-center gap-1.5 text-[0.8125rem] text-muted font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5]" aria-hidden="true" />
                {tp}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#registruotis"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.3)] hover:-translate-y-0.5"
            >
              Registruotis vizitui <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a
              href="tel:+37060134304"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#90CECA] text-foreground text-[0.9rem] font-semibold rounded-xl hover:bg-[#EEF5F4] transition-all duration-200"
            >
              <Phone size={15} strokeWidth={2} className="text-[#7DB9B5]" />
              Pasikonsultuoti
            </a>
          </div>
        </div>
      </div>

      {/* ── ANCHOR NAV ────────────────────────────────────────── */}
      <AnchorNav />

      <div className="container-xl py-10 md:py-14 flex flex-col gap-14 md:gap-16">

        {/* ── 2. APIE PASLAUGĄ ──────────────────────────────── */}
        <div id="kas-tai" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-mt-32">
          <div>
            <SectionLabel>Apie paslaugą</SectionLabel>
            <SectionTitle>Kas yra manualinė terapija?</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              <p>
                Manualinė terapija Vilniuje — tai tikslingas gydymas rankomis, taikomas siekiant sumažinti skausmą, gerinti sąnarių ir minkštųjų audinių judrumą bei padėti kūnui grįžti prie normalesnės funkcijos.
              </p>
              <p>
                Tai nėra vien tik trumpalaikis simptomų mažinimas. Manualinė terapija taikoma įvertinus jūsų būklę, judesio apribojimus, skausmo pobūdį ir bendrą funkcinę situaciją.
              </p>
              <p>
                Priklausomai nuo problemos, manualinė terapija gali būti derinama su kineziterapija, aktyviais pratimais ar kitomis gydymo priemonėmis. Tikslas — ne tik laikinai palengvinti būklę, bet ir padėti pasiekti stabilesnį rezultatą.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-[#DDE9E8] p-6 md:p-8 flex flex-col gap-4">
            {[
              { icon: "🎯", title: "Tikslinis poveikis", text: "Gydymas parenkamas pagal konkretų skausmo šaltinį ir judesio apribojimą." },
              { icon: "🔄", title: "Judrumo gerinimas", text: "Siekiame atkurti laisvesnį ir kokybiškesnį judesį." },
              { icon: "📋", title: "Aiški kryptis", text: "Po vizito suprasite, kas vyksta ir koks gydymo planas jums tinkamiausias." },
            ].map(({ icon, title, text }) => (
              <div key={title} className="flex items-start gap-4">
                <span className="text-[1.375rem] leading-none flex-shrink-0">{icon}</span>
                <div>
                  <p className="text-[0.9rem] font-bold text-foreground mb-0.5">{title}</p>
                  <p className="text-[0.875rem] text-muted leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. KADA VERTA KREIPTIS ────────────────────────── */}
        <div id="kada-kreiptis" className="scroll-mt-32">
          <SectionLabel>Indikacijos</SectionLabel>
          <SectionTitle>Kada verta kreiptis?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {whenItems.map((item) => (
              <div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200">
                <span className="w-2 h-2 rounded-full bg-[#7DB9B5] flex-shrink-0" aria-hidden="true" />
                <span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. SU KOKIOMIS PROBLEMOMIS DIRBAME ───────────── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <SectionLabel>Specialybė</SectionLabel>
            <SectionTitle>Su kokiomis būklėmis dirbame?</SectionTitle>
            <BulletList items={treatItems} />
          </div>
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8">
            <p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">Svarbu</p>
            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">
              Jei nesate tikri, ar jūsų problemai labiausiai tinka manualinė terapija, registruokitės pirminei konsultacijai. Vizito metu įvertinsime būklę ir parinksime tinkamiausią gydymo kryptį.
            </p>
            <a
              href="#registruotis"
              className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200"
            >
              Registruotis konsultacijai <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* ── MID CTA ───────────────────────────────────────── */}
        <MidCTA />

        {/* ── 5. PIRMASIS VIZITAS ───────────────────────────── */}
        <div id="pirmasis-vizitas" className="scroll-mt-32">
          <SectionLabel>Vizito eiga</SectionLabel>
          <SectionTitle>Kaip vyksta pirmasis vizitas?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visitSteps.map((step) => (
              <div key={step.n} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200">
                <p className="text-[1.5rem] font-bold text-[#90CECA]/40 leading-none mb-3">{step.n}</p>
                <p className="text-[0.9375rem] font-bold text-foreground mb-1.5 leading-snug">{step.title}</p>
                <p className="text-[0.875rem] text-muted leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. GYDYMO PLANAS ─────────────────────────────── */}
        <div id="gydymo-planas" className="grid md:grid-cols-2 gap-8 md:gap-12 items-start scroll-mt-32">
          <div>
            <SectionLabel>Procesas</SectionLabel>
            <SectionTitle>Kaip sudaromas gydymo planas?</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              <p>
                Vizitų dažnis priklauso nuo jūsų būklės, simptomų trukmės ir to, kaip organizmas reaguoja į gydymą. Kai kuriais atvejais pakanka kelių vizitų simptomams sumažinti, kitais — manualinę terapiją tikslinga derinti su kineziterapija ar aktyviu funkcijos atkūrimu.
              </p>
              <p>
                Gydymo planas nėra šabloninis — jis koreguojamas pagal jūsų progresą, būklės pokyčius ir tikslus.
              </p>
              <p>
                Prireikus manualinė terapija gali būti derinama su kineziterapija, osteopatija ar kitomis ReaMed paslaugomis toje pačioje klinikoje.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              ["Individualus", "Gydymas derinamas prie jūsų būklės, tikslų ir simptomų pobūdžio."],
              ["Dinamiškas", "Planas koreguojamas pagal tai, kaip kinta jūsų būklė."],
              ["Kompleksiškas", "Esant poreikiui, manualinė terapija derinama su kitomis gydymo kryptimis."],
            ].map(([title, text]) => (
              <div key={title} className="bg-white rounded-xl border border-[#DDE9E8] px-5 py-4 flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" />
                <div>
                  <p className="text-[0.9rem] font-bold text-foreground mb-0.5">{title}</p>
                  <p className="text-[0.875rem] text-muted leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 7. KAS TAIKOMA ──────────────────────────────── */}
        <div>
          <SectionLabel>Metodai</SectionLabel>
          <SectionTitle>Kas gali būti taikoma gydymo metu?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {appliedItems.map((item) => (
              <div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200">
                <span className="w-2 h-2 rounded-full bg-[#90CECA] flex-shrink-0" />
                <span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 8. TIKSLAI + 9. KAM TINKA ───────────────────── */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <SectionLabel>Tikslai</SectionLabel>
            <h2 className="text-[1.25rem] font-bold text-foreground mb-5">Ko siekiame gydymo metu?</h2>
            <BulletList items={goalItems} />
          </div>
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <SectionLabel>Tikslinė grupė</SectionLabel>
            <h2 className="text-[1.25rem] font-bold text-foreground mb-5">Kam tinka manualinė terapija?</h2>
            <BulletList items={forWhomItems} />
          </div>
        </div>

        {/* ── 10. KODĖL REAMED ─────────────────────────────── */}
        <div>
          <SectionLabel>ReaMed</SectionLabel>
          <SectionTitle>Kodėl pacientai renkasi ReaMed?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyItems.map(({ title, text }) => (
              <div key={title} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200">
                <p className="text-[0.9375rem] font-bold text-foreground mb-2">{title}</p>
                <p className="text-[0.875rem] text-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 11. KAINOS ───────────────────────────────────── */}
        <div id="kainos" className="rounded-2xl border border-[#DDE9E8] bg-white p-6 md:p-8 scroll-mt-32">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex-1">
              <SectionLabel>Kainodara</SectionLabel>
              <h2 className="text-[1.25rem] font-bold text-foreground mb-5">Kainos</h2>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
                <div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4">
                  <p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">Pirminis vizitas</p>
                  <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">70 €</p>
                  <p className="text-[0.78rem] text-muted/50 mb-3">60 min</p>
                  <p className="text-[0.8125rem] text-secondary leading-snug">Įvertinimas + gydymo plano sudarymas</p>
                </div>
                <div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4">
                  <p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">Pakartotinis vizitas</p>
                  <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">nuo 60 €</p>
                  <p className="text-[0.78rem] text-muted/50 mb-3">45–60 min</p>
                  <p className="text-[0.8125rem] text-secondary leading-snug">Gydymas pagal sudarytą planą</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:pt-8">
              <a
                href="/kainos"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200 whitespace-nowrap"
              >
                Visos kainos <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <p className="text-[0.75rem] text-muted/40 text-center">Galimi vizitų paketai</p>
            </div>
          </div>
        </div>

        {/* ── 12. SPECIALISTAI ─────────────────────────────── */}
        <div id="specialistai" className="scroll-mt-32">
          <SectionLabel>Komanda</SectionLabel>
          <SectionTitle>Specialistai, teikiantys šią paslaugą</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-5 max-w-[640px]">
            {specialists.map((s) => (
              <div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col">
                <a href={`/specialistai/${s.slug}`} className="block h-[240px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden">
                  <img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} />
                </a>
                <div className="p-4 flex flex-col flex-1">
                  <a href={`/specialistai/${s.slug}`} className="text-[0.9375rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">
                    {s.name}
                  </a>
                  <p className="text-[0.78rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p>
                  <p className="text-[0.78rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p>
                  <a
                    href={`/specialistai/${s.slug}#registruotis`}
                    className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200"
                  >
                    Registruotis <ArrowRight size={13} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 13. PRIEŠ VIZITĄ ─────────────────────────────── */}
        <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="text-[1.5rem] leading-none mt-0.5 flex-shrink-0">📋</span>
            <div>
              <h2 className="text-[1.125rem] font-bold text-foreground mb-2">Prieš pirmą vizitą</h2>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Atvykite 5–10 min. anksčiau.",
                  "Vilkėkite patogią, judesių nevaržančią aprangą.",
                  "Jei turite — atsineškite tyrimų atsakymus ar gydytojų rekomendacijas.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" />
                    <span className="text-[0.9rem] text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── 14. FAQ ──────────────────────────────────────── */}
        <div id="duk" className="scroll-mt-32">
          <SectionLabel>Klausimai</SectionLabel>
          <SectionTitle>Dažniausiai užduodami klausimai</SectionTitle>
          <FAQ />
        </div>

        {/* ── 15. FINAL CTA ────────────────────────────────── */}
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">
            Norite pradėti gydymą?
          </h2>
          <p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[500px] mx-auto">
            Registruokitės pirmajam vizitui — įvertinsime jūsų būklę ir parinksime, ar jums labiausiai tinka manualinė terapija, ar kompleksinis gydymo planas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a
              href="tel:+37060134304"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]"
            >
              Registruotis vizitui <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a
              href="/kontaktai"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
            >
              <Phone size={14} strokeWidth={2} /> Susisiekti
            </a>
          </div>
          <p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p>
        </div>

      </div>
    </div>
  );
}
