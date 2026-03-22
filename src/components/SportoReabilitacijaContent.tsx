"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone } from "lucide-react";

/* ── ANCHOR NAV ───────────────────────────────────────────────── */
const anchorLinks = [
  { id: "kas-tai", label: "Kas tai?" },
  { id: "kada-kreiptis", label: "Kada kreiptis?" },
  { id: "pirmasis-vizitas", label: "Pirmasis vizitas" },
  { id: "gydymo-planas", label: "Planas" },
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
        (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(id); }); },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="sticky z-30 bg-white/96 backdrop-blur-sm border-b border-[#DDE9E8] shadow-[0_1px_8px_rgba(0,0,0,0.04)]" style={{ top: "104px" }}>
      <div className="container-xl">
        <nav className="flex gap-0 overflow-x-auto" style={{ scrollbarWidth: "none" }} aria-label="Puslapio navigacija">
          {anchorLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`}
              className={`whitespace-nowrap px-4 py-3.5 text-[0.8rem] font-semibold border-b-2 transition-colors duration-200 flex-shrink-0 ${
                active === id ? "border-[#7DB9B5] text-[#7DB9B5]" : "border-transparent text-muted/70 hover:text-foreground hover:border-[#DDE9E8]"
              }`}
            >{label}</a>
          ))}
        </nav>
      </div>
    </div>
  );
}

/* ── FAQ ──────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Ar sporto reabilitacija skirta tik profesionaliems sportininkams?",
    a: "Ne. Ji tinka ir profesionaliai, ir mėgėjiškai sportuojantiems, taip pat fiziškai aktyviems žmonėms, norintiems grįžti į judėjimą po traumos ar perkrovos.",
  },
  {
    q: "Kada galima pradėti sporto reabilitaciją po traumos?",
    a: "Tai priklauso nuo traumos pobūdžio ir stadijos. Daugeliu atvejų reabilitaciją galima pradėti gana anksti, tačiau svarbu tinkamai įvertinti būklę ir parinkti tinkamą krūvį.",
  },
  {
    q: "Kuo sporto reabilitacija skiriasi nuo paprastos kineziterapijos?",
    a: "Sporto reabilitacija labiau orientuota į grįžimą į fizinį aktyvumą, treniruotes ar sportui būdingus judesius. Daugiau dėmesio skiriama krūvio tolerancijai, jėgai, kontrolei ir etapiniam grįžimui į aktyvumą.",
  },
  {
    q: "Ar po traumos galima iš karto grįžti į sportą, jei skausmas sumažėjo?",
    a: "Ne visada. Skausmo sumažėjimas dar nereiškia, kad audiniai ir funkcija pilnai pasiruošę sportiniam krūviui. Būtent todėl svarbus kryptingas grįžimo planas.",
  },
  {
    q: "Kiek vizitų dažniausiai prireikia?",
    a: "Tai priklauso nuo traumos, jos trukmės, jūsų sporto pobūdžio ir tikslo. Kai kuriais atvejais pakanka kelių vizitų, kitais reikia ilgesnio nuoseklaus proceso.",
  },
  {
    q: "Ar sporto reabilitacija gali būti derinama su manualine terapija?",
    a: "Taip. Kai kuriais atvejais geriausias rezultatas pasiekiamas derinant aktyvią reabilitaciją su manualiniu gydymu ar kitomis priemonėmis — visa tai galima toje pačioje klinikoje.",
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
            {open === i
              ? <ChevronUp size={16} strokeWidth={2} className="text-[#7DB9B5] flex-shrink-0" />
              : <ChevronDown size={16} strokeWidth={2} className="text-muted/40 flex-shrink-0" />
            }
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

/* ── DATA ─────────────────────────────────────────────────────── */
const whenItems = [
  "Po sportinės traumos",
  "Po fizinės perkrovos ar pasikartojančio skausmo",
  "Kūnas nepasiruošęs grįžti į sportą",
  "Reikia saugaus grįžimo į treniruotes",
  "Norima atkurti ne tik simptomą, bet ir funkciją",
  "Po kelio, peties, čiurnos ar kitų sričių traumų",
  "Sportuojant kartojasi skausmas ar diskomfortas",
  "Po gydymo trūksta aiškios grįžimo krypties",
];

const treatItems = [
  "Raiščių, raumenų ir sausgyslių traumos",
  "Sąnarių perkrovos ir dirginimai",
  "Kelio, peties, čiurnos, klubo ar nugaros problemos",
  "Būklės po patempimų, sumušimų ar dalinių plyšimų",
  "Pasikartojantis skausmas sporto metu",
  "Perkrovos sindromai dėl treniruočių ar fizinio darbo",
  "Būklės po operacijų, kai reikia grįžimo į krūvį",
  "Funkciniai judesio sutrikimai, ribojantys sportą",
];

const visitSteps = [
  { n: "01", title: "Nusiskundimų ir situacijos aptarimas", text: "Aptariame traumą, simptomus, fizinį aktyvumą, sporto pobūdį ir tai, kokį tikslą norite pasiekti." },
  { n: "02", title: "Funkcinis ištyrimas", text: "Vertiname judesio kokybę, jėgą, stabilumą, mobilumą, apkrovos toleranciją ir probleminės srities būklę." },
  { n: "03", title: "Krūvio ir rizikos įvertinimas", text: "Analizuojame, kokie judesiai ar krūviai šiuo metu provokuoja simptomus ir kas riboja grįžimą į aktyvumą." },
  { n: "04", title: "Reabilitacijos krypties parinkimas", text: "Sudaroma aiški strategija: nuo simptomų mažinimo ir bazinės funkcijos atkūrimo iki grįžimo į sportinį krūvį." },
  { n: "05", title: "Pirmieji pratimai ir rekomendacijos", text: "Pagal būklę gali būti skiriami pirmieji aktyvavimo, stabilumo, jėgos ar kontrolės pratimai." },
  { n: "06", title: "Tolimesnio plano aptarimas", text: "Paaiškiname, kaip gali atrodyti reabilitacijos eiga, kokio tempo tikėtis ir į ką svarbiausia atkreipti dėmesį." },
];

const appliedItems = [
  "Funkcinis būklės vertinimas",
  "Individualiai parinkti pratimai",
  "Stabilumo ir kontrolės lavinimas",
  "Jėgos ir ištvermės atkūrimas",
  "Mobilumo gerinimas",
  "Krūvio tolerancijos didinimas",
  "Judesio technikos korekcija",
  "Grįžimo į sportą etapų planavimas",
  "Rekomendacijos dėl treniruočių ir krūvio",
  "Derinimas su manualine terapija pagal poreikį",
];

const goalItems = [
  "Mažinti skausmą ir diskomfortą",
  "Atkurti judesio kokybę ir funkciją",
  "Gerinti jėgą, stabilumą ir kontrolę",
  "Didinti pasitikėjimą judesiu po traumos",
  "Paruošti kūną saugiam grįžimui į aktyvumą",
  "Grįžti į treniruotes nuosekliai ir kryptingai",
];

const forWhomItems = [
  "Profesionaliai sportuojantiems",
  "Aktyviai laisvalaikiu sportuojantiems",
  "Po traumų ar fizinių perkrovų",
  "Norintiems saugiai grįžti į treniruotes",
  "Tiems, kuriems sportuojant kartojasi skausmas",
  "Norintiems aiškaus, struktūruoto atsistatymo plano",
];

const whyItems = [
  { title: "Funkcinis požiūris", text: "Vertiname ne tik skausmingą vietą, bet ir tai, kaip kūnas juda, kompensuoja ir toleruoja krūvį." },
  { title: "Individualus planas", text: "Sporto reabilitacija pritaikoma pagal jūsų traumą, sporto šaką ir konkretų tikslą." },
  { title: "Kryptingas grįžimas", text: "Siekiame, kad grįžimas į sportą būtų ne tik greitas, bet ir saugus bei pagrįstas." },
  { title: "Aiškus procesas", text: "Po vizito suprasite, kurioje stadijoje esate ir ką reikia daryti toliau." },
  { title: "Galimybė derinti paslaugas", text: "Sporto reabilitacija gali būti derinama su manualine terapija, osteopatija ar kitomis paslaugomis." },
];

const specialists = [
  { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Sporto traumos, funkcinis ištyrimas, grįžimas į krūvį", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
  { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Sporto reabilitacija, atsistatymas po traumų", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
  { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Judesio kontrolė, perkrovų gydymas", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
  { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Pooperacinė reabilitacija, manualinė terapija", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
];

/* ── HELPERS ─────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-2">{children}</p>;
}
function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[1.625rem] md:text-[2rem] font-bold text-foreground leading-tight mb-4">{children}</h2>;
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
        <p className="text-white font-bold text-[1.0625rem] mb-1">Nesate tikri, nuo ko pradėti?</p>
        <p className="text-white/80 text-[0.875rem]">Registruokitės pirmajai konsultacijai — kartu įvertinsime traumą ir parinksime kryptį.</p>
      </div>
      <a href="#registruotis" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#7DB9B5] text-[0.875rem] font-bold rounded-xl hover:bg-[#EEF5F4] transition-colors duration-200 flex-shrink-0 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
        Registruotis vizitui <ArrowRight size={14} strokeWidth={2.5} />
      </a>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════ */
export default function SportoReabilitacijaContent() {
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* ── 1. HERO ── */}
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-10 pb-12 md:pt-14 md:pb-16">
          <SectionLabel>Paslauga</SectionLabel>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-foreground leading-[1.1] mb-4 max-w-[640px]">
            Sporto reabilitacija Vilniuje
          </h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[540px]">
            Reabilitacija po traumų, perkrovų ir kryptingas grįžimas į aktyvumą ar sportą — su individualiu planu ir laipsnišku krūvio didinimu.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
            {["Individualus funkcinis įvertinimas", "Reabilitacija pagal traumą, krūvį ir tikslą", "Kryptingas grįžimas į sportą ar aktyvią veiklą"].map((tp) => (
              <span key={tp} className="flex items-center gap-1.5 text-[0.8125rem] text-muted font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5]" aria-hidden="true" />{tp}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#registruotis" className="inline-flex items-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.3)] hover:-translate-y-0.5">
              Registruotis vizitui <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a href="tel:+37060134304" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#90CECA] text-foreground text-[0.9rem] font-semibold rounded-xl hover:bg-[#EEF5F4] transition-all duration-200">
              <Phone size={15} strokeWidth={2} className="text-[#7DB9B5]" />Pasikonsultuoti
            </a>
          </div>
        </div>
      </div>

      <AnchorNav />

      <div className="container-xl py-10 md:py-14 flex flex-col gap-14 md:gap-16">

        {/* ── 2. KAS TAI ── */}
        <div id="kas-tai" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-mt-32">
          <div>
            <SectionLabel>Apie paslaugą</SectionLabel>
            <SectionTitle>Kas yra sporto reabilitacija?</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              <p>Sporto reabilitacija Vilniuje — tai kryptingas gydymo ir atsistatymo procesas po traumų, fizinių perkrovų ar pasikartojančių skausmų, siekiant saugiai ir nuosekliai grįžti į aktyvumą ar sportą.</p>
              <p>Ši paslauga skirta ne tik profesionaliems sportininkams. Ji taip pat tinka fiziškai aktyviems žmonėms, sportuojantiems mėgėjiškai, grįžtantiems po traumos ar norintiems vėl judėti be skausmo ir apribojimų.</p>
              <p>ReaMed klinikoje sporto reabilitacija remiasi funkciniu įvertinimu, individualiu planu ir laipsnišku krūvio didinimu. Tikslas — ne tik sumažinti simptomus, bet ir paruošti kūną grįžti į judesį saugiau ir užtikrinčiau.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-[#DDE9E8] p-6 md:p-8 flex flex-col gap-4">
            {[
              { icon: "🎯", title: "Kryptingas procesas", text: "Reabilitacija planuojama pagal traumą, jūsų fizinį pasirengimą ir aiškų tikslą." },
              { icon: "📈", title: "Individualus krūvio valdymas", text: "Krūvis didinamas palaipsniui, atsižvelgiant į jūsų būklę ir progresą." },
              { icon: "🏃", title: "Tikslas — grįžimas į aktyvumą", text: "Siekiame ne tik sumažinti skausmą, bet ir paruošti jus grįžti į sportą ar aktyvų gyvenimą." },
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

        {/* ── 3. KADA KREIPTIS ── */}
        <div id="kada-kreiptis" className="scroll-mt-32">
          <SectionLabel>Indikacijos</SectionLabel>
          <SectionTitle>Kada verta kreiptis?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {whenItems.map((item) => (
              <div key={item} className="bg-white rounded-xl border border-[#DDE9E8] px-4 py-3.5 flex items-center gap-3 hover:border-[#90CECA] transition-colors duration-200">
                <span className="w-2 h-2 rounded-full bg-[#7DB9B5] flex-shrink-0" />
                <span className="text-[0.875rem] text-secondary font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. SU KOKIOMIS BŪKLĖMIS ── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <SectionLabel>Specialybė</SectionLabel>
            <SectionTitle>Su kokiomis būklėmis dirbame?</SectionTitle>
            <BulletList items={treatItems} />
          </div>
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8">
            <p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">Svarbu</p>
            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">
              Jei nesate tikri, ar jums labiau tinka sporto reabilitacija, kineziterapija ar manualinė terapija, registruokitės pirmajai konsultacijai. Įvertinsime jūsų būklę ir parinksime tinkamiausią kryptį.
            </p>
            <a href="#registruotis" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200">
              Registruotis konsultacijai <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        <MidCTA />

        {/* ── 5. PIRMASIS VIZITAS ── */}
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

        {/* ── 6. PLANAS ── */}
        <div id="gydymo-planas" className="grid md:grid-cols-2 gap-8 md:gap-12 items-start scroll-mt-32">
          <div>
            <SectionLabel>Procesas</SectionLabel>
            <SectionTitle>Kaip planuojama sporto reabilitacija?</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              <p>Sporto reabilitacijos planas priklauso nuo traumos pobūdžio, simptomų trukmės, jūsų sporto šakos, fizinio pasirengimo ir galutinio tikslo.</p>
              <p>Reabilitacija dažniausiai vyksta etapais: simptomų mažinimas, bazinės funkcijos atkūrimas, jėgos ir kontrolės gerinimas, tolerancijos krūviui didinimas ir grįžimas į sportui artimus judesius.</p>
              <p>Planas koreguojamas pagal progresą. Tikslas — ne skubėti, o grįžti prie aktyvumo taip, kad kūnas būtų tam realiai pasiruošęs.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              ["Individuali", "Programa sudaroma pagal jūsų traumą, sporto pobūdį ir asmeninį tikslą."],
              ["Laipsniška", "Krūvis didinamas nuosekliai, atsižvelgiant į organizmo reakciją."],
              ["Funkcinė", "Reabilitacija orientuota ne tik į simptomų mažinimą, bet ir į realų pasirengimą grįžti į sportą."],
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

        {/* ── 7. KAS TAIKOMA ── */}
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

        {/* ── 8+9. TIKSLAI + KAM TINKA ── */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <SectionLabel>Tikslai</SectionLabel>
            <h2 className="text-[1.25rem] font-bold text-foreground mb-5">Ko siekiame gydymo metu?</h2>
            <BulletList items={goalItems} />
          </div>
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <SectionLabel>Tikslinė grupė</SectionLabel>
            <h2 className="text-[1.25rem] font-bold text-foreground mb-5">Kam tinka sporto reabilitacija?</h2>
            <BulletList items={forWhomItems} />
          </div>
        </div>

        {/* ── 10. KODĖL REAMED ── */}
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

        {/* ── 11. KAINOS ── */}
        <div id="kainos" className="rounded-2xl border border-[#DDE9E8] bg-white p-6 md:p-8 scroll-mt-32">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex-1">
              <SectionLabel>Kainodara</SectionLabel>
              <h2 className="text-[1.25rem] font-bold text-foreground mb-5">Kainos</h2>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4">
                  <p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">Pirminis vizitas</p>
                  <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">70 €</p>
                  <p className="text-[0.78rem] text-muted/50 mb-3">60 min</p>
                  <p className="text-[0.8125rem] text-secondary leading-snug">Funkcinis įvertinimas + reabilitacijos plano sudarymas</p>
                </div>
                <div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4">
                  <p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">Pakartotinis vizitas</p>
                  <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">nuo 60 €</p>
                  <p className="text-[0.78rem] text-muted/50 mb-3">45–60 min</p>
                  <p className="text-[0.8125rem] text-secondary leading-snug">Reabilitacija pagal sudarytą planą</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:pt-8">
              <a href="/kainos" className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200 whitespace-nowrap">
                Visos kainos <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <p className="text-[0.75rem] text-muted/40 text-center">Galimi vizitų paketai</p>
            </div>
          </div>
        </div>

        {/* ── 12. SPECIALISTAI ── */}
        <div id="specialistai" className="scroll-mt-32">
          <SectionLabel>Komanda</SectionLabel>
          <SectionTitle>Specialistai, teikiantys šią paslaugą</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialists.map((s) => (
              <div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col">
                <a href={`/specialistai/${s.slug}`} className="block h-[220px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden">
                  <img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} />
                </a>
                <div className="p-4 flex flex-col flex-1">
                  <a href={`/specialistai/${s.slug}`} className="text-[0.9375rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200">{s.name}</a>
                  <p className="text-[0.78rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p>
                  <p className="text-[0.78rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p>
                  <a href={`/specialistai/${s.slug}#registruotis`} className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">
                    Registruotis <ArrowRight size={13} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 13. PRIEŠ VIZITĄ ── */}
        <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="text-[1.5rem] leading-none mt-0.5 flex-shrink-0">📋</span>
            <div>
              <h2 className="text-[1.125rem] font-bold text-foreground mb-2">Prieš pirmą vizitą</h2>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Atvykite 5–10 min. anksčiau.",
                  "Vilkėkite patogią sportinę arba judesių nevaržančią aprangą.",
                  "Jei turite — atsineškite tyrimų atsakymus, gydytojų išvadas ar kitą su trauma susijusią informaciją.",
                  "Verta pagalvoti, kokie judesiai ar krūviai šiuo metu labiausiai provokuoja simptomus.",
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

        {/* ── 14. FAQ ── */}
        <div id="duk" className="scroll-mt-32">
          <SectionLabel>Klausimai</SectionLabel>
          <SectionTitle>Dažniausiai užduodami klausimai</SectionTitle>
          <FAQ />
        </div>

        {/* ── 15. FINAL CTA ── */}
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">
            Norite grįžti į aktyvumą saugiau?
          </h2>
          <p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[500px] mx-auto">
            Registruokitės pirmajam vizitui — įvertinsime jūsų būklę, krūvio toleranciją ir parinksime tinkamiausią sporto reabilitacijos planą.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <a href="tel:+37060134304" className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]">
              Registruotis vizitui <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a href="/kontaktai" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200">
              <Phone size={14} strokeWidth={2} /> Susisiekti
            </a>
          </div>
          <p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p>
        </div>

      </div>
    </div>
  );
}
