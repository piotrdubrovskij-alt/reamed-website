"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Phone, AlertTriangle } from "lucide-react";

/* ── ANCHOR NAV ───────────────────────────────────────────────── */
const anchorLinks = [
  { id: "kas-tai", label: "Kas tai?" },
  { id: "kada-kreiptis", label: "Kada kreiptis?" },
  { id: "kaip-vertiname", label: "Kaip vertiname?" },
  { id: "metodai", label: "Metodai" },
  { id: "paslaugos", label: "Paslaugos" },
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
    q: "Kada galima pradėti atsistatymą po operacijos?",
    a: "Tai priklauso nuo operacijos tipo, gijimo stadijos ir gydytojo rekomendacijų. Daugeliu atvejų tam tikrą reabilitaciją galima pradėti gana anksti, tačiau ji turi būti pritaikyta pagal konkretų etapą.",
  },
  {
    q: "Ar po operacijos normalu jausti sustingimą ir silpnumą?",
    a: "Taip, tai gana dažna. Po operacijos dėl skausmo, tinimo, tausojimo ar imobilizacijos dažnai sumažėja judrumas, jėga ir pasitikėjimas judesiu — tai yra natūrali gijimo proceso dalis.",
  },
  {
    q: "Kuo atsistatymas po operacijos skiriasi nuo įprastos kineziterapijos?",
    a: "Pooperaciniame atsistatyme daugiau dėmesio skiriama audinių gijimo stadijai, saugiam krūvio didinimui ir perėjimui per konkrečius reabilitacijos etapus pagal gydytojo nurodymus.",
  },
  {
    q: "Kiek vizitų dažniausiai prireikia?",
    a: "Tai priklauso nuo operacijos pobūdžio, gijimo eigos ir jūsų tikslo. Kai kuriais atvejais pakanka kelių vizitų su aiškiu planu, kitais reikia ilgesnio ir nuoseklesnio proceso.",
  },
  {
    q: "Ar po operacijos galima greitai grįžti į sportą ar aktyvų gyvenimą?",
    a: "Tai priklauso nuo operacijos, gijimo ir funkcijos atkūrimo. Vien tik skausmo sumažėjimas dar nereiškia, kad kūnas pilnai pasiruošęs didesniam krūviui.",
  },
  {
    q: "Ar gydymo metu gausiu rekomendacijų namams?",
    a: "Taip. Jei reikia, gausite aiškias rekomendacijas dėl judesio, pratimų, krūvio ir kasdienės veiklos.",
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
              : <ChevronDown size={16} strokeWidth={2} className="text-muted/40 flex-shrink-0" />}
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

/* ── DATA ─────────────────────────────────────────────────────── */
const whenItems = [
  "Po ortopedinių operacijų",
  "Po stuburo operacijų",
  "Jaučiate sustingimą ar judesio ribotumą po operacijos",
  "Trūksta jėgos, kontrolės ar pasitikėjimo judesiu",
  "Neaišku, ką šiuo metu galima daryti ir kokio krūvio vengti",
  "Norite pilnai atkurti funkciją, ne tik sugijti",
  "Reikia aiškaus plano grįžimui į aktyvumą ar darbą",
  "Gydytojas rekomendavo pradėti reabilitaciją",
];

const relatedItems = [
  "Būklės po kelio operacijų",
  "Būklės po peties operacijų",
  "Būklės po klubo operacijų",
  "Būklės po čiurnos ar kitų ortopedinių operacijų",
  "Būklės po stuburo operacijų",
  "Judesio ribotumas po operacijos",
  "Raumenų silpnumas po imobilizacijos ar tausojimo",
  "Sumažėjusi funkcija ir nepasitikėjimas judesiu",
];

const assessSteps = [
  { n: "01", title: "Operacijos ir situacijos aptarimas", text: "Aptariame, kokia operacija buvo atlikta, kada ji įvyko, kokios rekomendacijos pateiktos ir kaip jaučiatės dabar." },
  { n: "02", title: "Būklės ir funkcijos įvertinimas", text: "Vertiname judrumą, skausmą, tinimą, audinių būklę, jėgą, kontrolę ir bendrą funkcinę situaciją." },
  { n: "03", title: "Reabilitacijos etapo nustatymas", text: "Įvertiname, kuriame gijimo etape šiuo metu esate ir kokie tikslai dabar svarbiausi." },
  { n: "04", title: "Problemos paaiškinimas", text: "Aiškiai paaiškiname, ko šiuo metu labiausiai trūksta funkcijai ir kokia atsistatymo kryptis būtų logiškiausia." },
  { n: "05", title: "Gydymo plano sudarymas", text: "Parenkame individualų planą pagal operacijos pobūdį, apribojimus, gijimo stadiją ir jūsų tikslą." },
];

const appliedItems = [
  "Pooperacinė reabilitacija",
  "Kineziterapija",
  "Judrumo atkūrimas",
  "Raumenų aktyvavimo ir kontrolės lavinimas",
  "Jėgos didinimas pagal reabilitacijos etapą",
  "Judesio kokybės ir funkcijos gerinimas",
  "Krūvio tolerancijos didinimas",
  "Rekomendacijos dėl kasdienės veiklos",
  "Grįžimo į darbą ar sportą planavimas",
  "Derinimas su manualiniu gydymu pagal poreikį",
];

const goalItems = [
  "Mažinti skausmą ir diskomfortą",
  "Mažinti sustingimą ir judesio ribotumą",
  "Atkurti funkciją po operacijos",
  "Gerinti jėgą, kontrolę ir pasitikėjimą judesiu",
  "Padėti saugiai pereiti iš vieno reabilitacijos etapo į kitą",
  "Paruošti kūną grįžimui į kasdienę veiklą, darbą ar aktyvumą",
];

const redFlags = [
  "Skausmas labai stiprus ir ryškiai didėja",
  "Sparčiai didėja tinimas",
  "Ryškus paraudimas, karštis ar žaizdos pokyčiai",
  "Pakyla temperatūra ar pablogėja bendra savijauta",
  "Staiga ryškiai sumažėja galūnės funkcija",
  "Neįprasti jutimo ar stipraus silpnumo simptomai",
];

const services = [
  { title: "Pooperacinė reabilitacija", text: "Tinka, kai svarbiausia atsistatyti pagal konkretų gijimo ir reabilitacijos etapą.", href: "/paslaugos/pooperacine-reabilitacija" },
  { title: "Kineziterapija", text: "Tinka, kai pagrindinis tikslas — atkurti judesį, funkciją, kontrolę ir jėgą.", href: "/paslaugos/kineziterapija" },
  { title: "Manualinė terapija", text: "Gali būti naudinga kaip gydymo plano dalis, kai reikia gerinti judrumą ar mažinti diskomfortą tinkamai etapui.", href: "/paslaugos/manualine-terapija" },
  { title: "Sporto reabilitacija", text: "Tinka, kai po operacijos siekiama grįžti į aktyvesnį fizinį krūvį, treniruotes ar sportą.", href: "/paslaugos/sporto-reabilitacija" },
];

const specialists = [
  { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Sudėtingesnės pooperacinės būklės, funkcijos atkūrimas ir kryptingas grįžimas į aktyvumą", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
  { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Pooperacinė reabilitacija, judesio ir jėgos atkūrimas, grįžimas į kasdienę veiklą", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
  { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Atsistatymas po ortopedinių operacijų, etapinis krūvio didinimas ir funkcijos atkūrimas", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
  { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Pooperacinė reabilitacija, judrumo atkūrimas ir nuoseklus grįžimas į aktyvumą", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
];

/* ═══════════════════════════════════════════════════════════════ */
export default function AtsistataymasPoOperacijuContent() {
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* breadcrumb */}
      <div className="container-xl pt-5">
        <a href="/#ka-gydome" className="inline-flex items-center gap-1.5 text-[0.8rem] text-muted/60 hover:text-[#7DB9B5] transition-colors duration-200">
          ← Ką gydome
        </a>
      </div>

      {/* ── 1. HERO ── */}
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-6 pb-12 md:pt-10 md:pb-16">
          <SectionLabel>Ką gydome</SectionLabel>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-foreground leading-[1.1] mb-4 max-w-[640px]">
            Atsistatymas po operacijų Vilniuje
          </h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[560px]">
            Judesio ribotumas, silpnumas, sustingimas ar neaiškus grįžimas į aktyvumą po operacijos gali stipriai riboti kasdienę veiklą ir savijautą. Įvertiname jūsų būklę ir parenkame tinkamiausią atsistatymo kryptį pagal konkretų reabilitacijos etapą.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
            {["Įvertiname būklę po operacijos ir gijimo stadiją", "Gydymą parenkame pagal operacijos tipą ir tikslus", "Siekiame saugaus grįžimo į judėjimą ir funkciją"].map((tp) => (
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
        <div id="kas-tai" className="grid md:grid-cols-2 gap-8 md:gap-12 items-start scroll-mt-32">
          <div>
            <SectionLabel>Apie problemą</SectionLabel>
            <SectionTitle>Kas yra atsistatymas po operacijų?</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              <p>Atsistatymas po operacijų — tai kryptingas procesas, kurio metu po chirurginio gydymo palaipsniui atkuriamas judesys, funkcija, jėga, kontrolė ir pasitikėjimas judesiu. Po operacijos svarbu ne tik laukti gijimo, bet ir tinkamu metu pradėti taikyti reikiamą gydymą pagal konkretų reabilitacijos etapą.</p>
              <p>Pooperacinė būklė gali skirtis priklausomai nuo operacijos pobūdžio, audinių gijimo, gydytojo nurodymų ir jūsų bendros fizinės būklės. Todėl atsistatymas negali būti vienodas visiems.</p>
              <p>ReaMed klinikoje vertiname ne tik kur buvo atlikta operacija, bet ir kaip šiuo metu juda kūnas, kokie ribojimai išlikę, ko labiausiai trūksta funkcijai ir kokia kryptis šiuo etapu būtų saugiausia bei naudingiausia.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { title: "Po operacijos svarbus ne tik sugijimas, bet ir funkcija", text: "Net jei audiniai gyja gerai, judesys, jėga ir kontrolė gali būti ženkliai sumažėję." },
              { title: "Skirtingais etapais reikia skirtingo gydymo", text: "Vienu laikotarpiu svarbiausia saugiai judėti ir mažinti sustingimą, kitu — atkurti jėgą ir grįžti į aktyvumą." },
              { title: "Tikslas — pilnavertiškas grįžimas į gyvenimą", text: "Siekiame padėti saugiai grįžti prie kasdienės veiklos, darbo, sporto ar kito jums svarbaus aktyvumo." },
            ].map(({ title, text }) => (
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

        {/* ── 4. SU KUO SUSIJĘ ── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <SectionLabel>Galimos būklės</SectionLabel>
            <SectionTitle>Su kuo gali būti susijęs atsistatymas po operacijų?</SectionTitle>
            <BulletList items={relatedItems} />
          </div>
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8">
            <p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">Svarbu</p>
            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">
              Po operacijos simptomai ir atsistatymo eiga gali labai skirtis, todėl svarbiausia suprasti ne tik kokia operacija buvo atlikta, bet ir kokiame reabilitacijos etape šiuo metu esate.
            </p>
            <a href="#registruotis" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200">
              Registruotis įvertinimui <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* ── 5. KAIP VERTINAME ── */}
        <div id="kaip-vertiname" className="scroll-mt-32">
          <SectionLabel>Įvertinimas</SectionLabel>
          <SectionTitle>Kaip vertiname būklę po operacijos?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {assessSteps.map((step) => (
              <div key={step.n} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200">
                <p className="text-[1.5rem] font-bold text-[#90CECA]/40 leading-none mb-3">{step.n}</p>
                <p className="text-[0.9375rem] font-bold text-foreground mb-1.5 leading-snug">{step.title}</p>
                <p className="text-[0.875rem] text-muted leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 6+7. METODAI + TIKSLAI ── */}
        <div id="metodai" className="grid md:grid-cols-2 gap-6 scroll-mt-32">
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <SectionLabel>Metodai</SectionLabel>
            <h2 className="text-[1.25rem] font-bold text-foreground mb-5">Kas gali būti taikoma gydymo metu?</h2>
            <div className="grid grid-cols-2 gap-2">
              {appliedItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#90CECA] flex-shrink-0" />
                  <span className="text-[0.875rem] text-secondary leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <SectionLabel>Tikslai</SectionLabel>
            <h2 className="text-[1.25rem] font-bold text-foreground mb-5">Ko siekiame gydymo metu?</h2>
            <BulletList items={goalItems} />
          </div>
        </div>

        {/* ── 8. RED FLAGS ── */}
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle size={20} strokeWidth={2} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-[1.0625rem] font-bold text-foreground mb-1.5">Kada reikalingas skubesnis įvertinimas?</h2>
              <p className="text-[0.875rem] text-secondary mb-4 leading-relaxed">
                Nors dauguma pooperacinių būklių gali būti vertinamos planine tvarka, kai kuriais atvejais svarbus greitesnis gydytojo įvertinimas. Nedelskite, jei:
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {redFlags.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0 text-[0.8rem]">!</span>
                    <span className="text-[0.875rem] text-secondary leading-snug">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[0.8125rem] text-muted mt-4 leading-relaxed">
                Tokiais atvejais pirmiausia svarbus medicininis įvertinimas.
              </p>
            </div>
          </div>
        </div>

        {/* ── 9. PASLAUGOS ── */}
        <div id="paslaugos" className="scroll-mt-32">
          <SectionLabel>Gydymo kryptys</SectionLabel>
          <SectionTitle>Kokios paslaugos gali tikti atsistatant po operacijų?</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map(({ title, text, href }) => (
              <a key={title} href={href} className="group bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200 flex flex-col gap-2">
                <p className="text-[0.9375rem] font-bold text-foreground group-hover:text-[#7DB9B5] transition-colors duration-200">{title}</p>
                <p className="text-[0.875rem] text-muted leading-relaxed flex-1">{text}</p>
                <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-[#7DB9B5] mt-1">
                  Sužinoti daugiau <ArrowRight size={13} strokeWidth={2.5} />
                </span>
              </a>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-[#EEF5F4] border border-[#D8E6E4] px-5 py-4">
            <p className="text-[0.875rem] text-muted leading-relaxed">
              <span className="font-semibold text-foreground">Svarbu:</span> tinkamiausia paslauga priklauso nuo operacijos pobūdžio, gijimo stadijos ir jūsų tikslo, todėl pirmiausia svarbus individualus įvertinimas.
            </p>
          </div>
        </div>

        {/* ── 10. KODĖL REAMED ── */}
        <div>
          <SectionLabel>ReaMed</SectionLabel>
          <SectionTitle>Kodėl pacientai kreipiasi į ReaMed dėl atsistatymo po operacijų?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Vertiname pagal konkretų etapą", text: "Svarbu ne tik kokia operacija buvo atlikta, bet ir kokiame atsistatymo etape šiuo metu esate." },
              { title: "Aiškiai paaiškiname situaciją", text: "Po vizito suprasite, ką šiuo metu galima daryti, ko dar vengti ir kokia kryptis būtų naudingiausia." },
              { title: "Gydymą parenkame pagal funkciją", text: "Tikslas — ne tik sugijimas, bet ir realus judėjimo, jėgos bei kontrolės atkūrimas." },
              { title: "Orientuojamės į grįžimą į gyvenimą", text: "Siekiame padėti saugiai grįžti prie kasdienės veiklos, darbo, aktyvumo ar sporto." },
              { title: "Galime derinti skirtingas paslaugas", text: "Esant poreikiui, atsistatymo planas gali apjungti kelias kryptis toje pačioje klinikoje." },
            ].map(({ title, text }) => (
              <div key={title} className="bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200">
                <p className="text-[0.9375rem] font-bold text-foreground mb-2">{title}</p>
                <p className="text-[0.875rem] text-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 11. SPECIALISTAI ── */}
        <div id="specialistai" className="scroll-mt-32">
          <SectionLabel>Komanda</SectionLabel>
          <SectionTitle>Specialistai, dirbantys su atsistatymu po operacijų</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialists.map((s) => (
              <div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col">
                <a href={`/specialistai/${s.slug}`} className="block h-[200px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden">
                  <img src={s.photo} alt={s.name} className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} />
                </a>
                <div className="p-4 flex flex-col flex-1">
                  <a href={`/specialistai/${s.slug}`} className="text-[0.875rem] font-bold text-foreground mb-0.5 hover:text-[#7DB9B5] transition-colors duration-200 leading-snug">{s.name}</a>
                  <p className="text-[0.75rem] text-[#7DB9B5] font-medium leading-snug mb-1">{s.role}</p>
                  <p className="text-[0.75rem] text-muted/60 leading-snug mb-3 flex-1">{s.focus}</p>
                  <a href={`/specialistai/${s.slug}#registruotis`} className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200">
                    Registruotis <ArrowRight size={12} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 12. FAQ ── */}
        <div id="duk" className="scroll-mt-32">
          <SectionLabel>Klausimai</SectionLabel>
          <SectionTitle>Dažniausiai užduodami klausimai</SectionTitle>
          <FAQ />
        </div>

        {/* ── 13. FINAL CTA ── */}
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">
            Norite saugiai ir kryptingai atsistatyti po operacijos?
          </h2>
          <p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[500px] mx-auto">
            Registruokitės pirmajam vizitui — įvertinsime jūsų būklę, reabilitacijos etapą ir parinksime tinkamiausią atsistatymo kryptį.
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
