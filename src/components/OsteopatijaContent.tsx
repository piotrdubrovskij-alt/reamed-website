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
  { id: "specialistai", label: "Specialistas" },
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
    q: "Kuo osteopatija skiriasi nuo manualinės terapijos?",
    a: "Manualinė terapija dažniau orientuota į tikslingą darbą su konkrečiu sąnariu ar skausminga sritimi, o osteopatijoje vertinami platesni kūno struktūros ir funkcinių ryšių aspektai. Praktikoje šios kryptys gali persidengti ir būti derinamos pagal poreikį.",
  },
  {
    q: "Ar osteopatija visada yra švelni technika?",
    a: "Ne visada. Osteopatinio gydymo pobūdis priklauso nuo būklės, audinių reakcijos ir gydymo tikslo. Kai kuriais atvejais taikomos švelnesnės technikos, kitais — labiau struktūrinis ir aiškesnis manualinis gydymas.",
  },
  {
    q: "Ar gydymo metu taikomi tik kraniosakraliniai ar visceraliniai metodai?",
    a: "Ne. ReaMed klinikoje osteopatija daugiausia taikoma struktūriškai, o visceraliniai ar kraniosakraliniai elementai įtraukiami tik tada, kai tai tikslinga konkrečiai būklei.",
  },
  {
    q: "Ar osteopatija tinka, jei jaučiu lėtinę įtampą ar pasikartojantį skausmą?",
    a: "Dažnai taip. Osteopatinis požiūris gali būti naudingas tuomet, kai problema kartojasi, apima daugiau nei vieną kūno sritį arba kai svarbu įvertinti platesnius kūno ryšius.",
  },
  {
    q: "Kiek vizitų dažniausiai prireikia?",
    a: "Tai priklauso nuo simptomų pobūdžio, jų trukmės ir jūsų reakcijos į gydymą. Kai kuriais atvejais pakanka kelių vizitų, kitais verta planuoti nuoseklesnį procesą. Tikslų planą aptarsime po pirmojo vizito.",
  },
  {
    q: "Ar osteopatija gali būti derinama su kineziterapija?",
    a: "Taip, dažnai geriausias rezultatas pasiekiamas tada, kai manualinis osteopatinis gydymas derinamas su aktyvesniu funkcijos atkūrimu, judesiu ar pratimais.",
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

/* ── DATA ─────────────────────────────────────────────────────── */
const whenItems = [
  "Pasikartojantis nugaros ar kaklo skausmas",
  "Kūno įtampa, sustingimas ar judesio apribojimas",
  "Disbalansas, apimantis daugiau nei vieną sritį",
  "Po traumos ar perkrovos — platesniam vertinimui",
  "Diskomfortas, nepaiškinamas vienu lokaliu sutrikimu",
  "Poreikis manualiniam gydymui su osteopatiniu vertinimu",
  "Svarbus ne tik simptomo, bet ir bendros funkcijos gerinimas",
  "Osteopatija kaip platesnio gydymo plano dalis",
];

const treatItems = [
  "Nugaros, kaklo ir pečių juostos skausmai",
  "Stuburo ir sąnarių judrumo sutrikimai",
  "Pasikartojanti kūno įtampa ar sustingimas",
  "Būklės po fizinės perkrovos ar traumų",
  "Funkciniai laikysenos ir judesio apribojimai",
  "Diskomfortas susijęs su audinių ir fascijų įtampa",
  "Būklės, kai svarbu vertinti platesnius kūno ryšius",
  "Situacijos, kai osteopatiją tikslinga derinti su kitu gydymu",
];

const visitSteps = [
  { n: "01", title: "Nusiskundimų aptarimas", text: "Išklausome, kas vargina, kada simptomai atsirado, kaip kinta ir kas labiausiai riboja kasdienę veiklą." },
  { n: "02", title: "Būklės ir judesio įvertinimas", text: "Vertiname laikyseną, judesio kokybę, audinių įtampą, sąnarių mobilumą ir bendrus kūno funkcinius ryšius." },
  { n: "03", title: "Osteopatinis vertinimas", text: "Ieškome, kaip probleminė zona susijusi su kitomis kūno sritimis ir kokie funkciniai ryšiai gali palaikyti simptomus." },
  { n: "04", title: "Osteopatinio gydymo taikymas", text: "Parenkama individuali osteopatinė rutina — dažniausiai struktūrinis akcentas, prireikus su visceraliniais ar kraniosakraliniais elementais." },
  { n: "05", title: "Reakcijos ir krypties įvertinimas", text: "Vertiname, kaip kūnas reaguoja į gydymą, ir aptariame, kokia tolimesnė kryptis būtų naudingiausia." },
  { n: "06", title: "Rekomendacijos po vizito", text: "Gaunate rekomendacijas dėl krūvio, judesio, savijautos stebėjimo ar kitų gydymo etapų." },
];

const appliedItems = [
  "Struktūrinės osteopatinės technikos",
  "Sąnarių ir audinių judrumo gerinimas",
  "Fascijų ryšių vertinimas ir korekcija",
  "Įtampos ir kompensacinių grandžių mažinimas",
  "Funkcinių ryšių tarp kūno sričių vertinimas",
  "Visceraliniai elementai pagal indikacijas",
  "Kraniosakraliniai elementai pagal indikacijas",
  "Rekomendacijos dėl tolimesnės gydymo krypties",
];

const goalItems = [
  "Mažinti skausmą ir diskomfortą",
  "Gerinti sąnarių ir audinių judrumą",
  "Mažinti bendrą kūno įtampą",
  "Gerinti judesio kokybę ir funkciją",
  "Padėti kūnui lengviau prisitaikyti prie krūvio",
  "Parinkti aiškią tolimesnio gydymo kryptį",
];

const forWhomItems = [
  "Jaučiantiems pasikartojančius nugaros ar kaklo skausmus",
  "Turintiems judesio ribotumą ar bendrą sustingimą",
  "Po traumų ar fizinių perkrovų",
  "Norintiems platesnio manualinio gydymo požiūrio",
  "Ieškantiems struktūriškai taikomo osteopatinio gydymo",
  "Tiems, kuriems svarbu geriau suprasti bendrą kūno būklę",
];

const whyItems = [
  { title: "Praktinis osteopatinis požiūris", text: "Osteopatija taikoma ne abstrakčiai, o remiantis aiškiu kūno funkcijos ir struktūros vertinimu." },
  { title: "Struktūrinis akcentas", text: "Didžiausias dėmesys skiriamas mechanikai, judrumui, įtampai ir probleminių zonų ryšiams." },
  { title: "Individuali osteopatinė rutina", text: "Gydymas nėra vienodas visiems — kiekvienam parenkama tai, kas tuo metu svarbiausia." },
  { title: "Aiškus planas po vizito", text: "Po vizito geriau suprasite, kas vyksta, ką verta stebėti ir kokia kryptis jums tinkamiausia." },
  { title: "Galimybė derinti paslaugas", text: "Osteopatija gali būti derinama su kineziterapija ar manualine terapija toje pačioje klinikoje." },
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
          Nesate tikri, ar osteopatija jums tinka?
        </p>
        <p className="text-white/80 text-[0.875rem]">
          Registruokitės pirmajai konsultacijai — kartu įvertinsime ir parinksime tinkamiausią kryptį.
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
export default function OsteopatijaContent() {
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* ── 1. HERO ───────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-10 pb-12 md:pt-14 md:pb-16">
          <SectionLabel>Paslauga</SectionLabel>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-foreground leading-[1.1] mb-4 max-w-[640px]">
            Osteopatija Vilniuje
          </h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[560px]">
            Manualinis osteopatinis gydymas, orientuotas į kūno struktūrą, judrumą ir funkcinius ryšius, siekiant mažinti skausmą, įtampą ir gerinti bendrą funkciją.
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
            {["Struktūrinis osteopatinis požiūris", "Individualiai parenkama osteopatinė rutina", "Esant poreikiui visceraliniai ir kraniosakraliniai elementai"].map((tp) => (
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

        {/* ── 2. KAS YRA OSTEOPATIJA ────────────────────────── */}
        <div id="kas-tai" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-mt-32">
          <div>
            <SectionLabel>Apie paslaugą</SectionLabel>
            <SectionTitle>Kas yra osteopatija?</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              <p>
                Osteopatija Vilniuje — tai manualinis gydymas, paremtas kūno struktūros, judrumo ir skirtingų sistemų tarpusavio ryšių vertinimu. Gydymo metu siekiama ne tik sumažinti simptomus, bet ir suprasti, kaip konkreti problema susijusi su bendra kūno funkcija.
              </p>
              <p>
                ReaMed klinikoje osteopatija taikoma praktiškai ir tikslingai. Daugiausia dėmesio skiriama struktūriniam osteopatiniam gydymui — sąnarių, audinių, įtampos zonų ir funkcinių ryšių vertinimui bei korekcijai.
              </p>
              <p>
                Priklausomai nuo būklės, osteopatinio gydymo metu gali būti taikomi ne tik struktūriniai, bet ir visceraliniai ar kraniosakraliniai elementai. Pagrindinis tikslas — padėti kūnui judėti laisviau, mažinti įtampą ir gerinti bendrą funkciją.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-[#DDE9E8] p-6 md:p-8 flex flex-col gap-4">
            {[
              { icon: "🏗️", title: "Struktūrinis požiūris", text: "Dėmesys skiriamas ne tik simptomui, bet ir kūno mechanikai bei funkciniams ryšiams." },
              { icon: "🔄", title: "Individuali osteopatinė rutina", text: "Gydymas parenkamas pagal jūsų būklę, o ne taikomas pagal vieną schemą visiems." },
              { icon: "🎯", title: "Aiška kryptis", text: "Vizito metu siekiama realaus funkcinio pokyčio, o ne tik trumpalaikio palengvėjimo." },
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

        {/* ── 4. SU KOKIOMIS BŪKLĖMIS DIRBAME ─────────────── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <SectionLabel>Specialybė</SectionLabel>
            <SectionTitle>Su kokiomis būklėmis dirbame?</SectionTitle>
            <BulletList items={treatItems} />
          </div>
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8">
            <p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">Svarbu</p>
            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">
              Jei nesate tikri, ar jums labiausiai tinka osteopatija, manualinė terapija ar kineziterapija, registruokitės pirmajai konsultacijai. Vizito metu įvertinsime jūsų būklę ir parinksime tinkamiausią kryptį.
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
            <SectionTitle>Kaip planuojamas osteopatinis gydymas?</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              <p>
                Vizitų dažnis priklauso nuo jūsų būklės, simptomų pobūdžio ir to, kaip kūnas reaguoja į gydymą. Kai kuriais atvejais pakanka kelių vizitų, kitais osteopatinis gydymas tampa platesnio plano dalimi.
              </p>
              <p>
                Gydymas nėra šabloninis. Kiekvieno vizito metu vertinama, kas tuo metu svarbiausia: struktūrinis osteopatinis gydymas, įtampos mažinimas ar funkcinių ryšių gerinimas.
              </p>
              <p>
                Prireikus osteopatija gali būti derinama su kineziterapija ar manualine terapija — visa tai galima toje pačioje klinikoje.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              ["Individualus", "Kiekviena osteopatinė rutina parenkama pagal konkrečią būklę ir jos dinamiką."],
              ["Struktūrinis", "Didžiausias dėmesys skiriamas kūno mechanikai, judrumui ir įtampos ryšiams."],
              ["Kompleksiškas", "Esant poreikiui įtraukiami visceraliniai ar kraniosakraliniai elementai, derinamos kitos paslaugos."],
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
            <h2 className="text-[1.25rem] font-bold text-foreground mb-5">Kam tinka osteopatija?</h2>
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
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4">
                  <p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">Pirminė konsultacija</p>
                  <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">70 €</p>
                  <p className="text-[0.78rem] text-muted/50 mb-3">60 min</p>
                  <p className="text-[0.8125rem] text-secondary leading-snug">Įvertinimas + osteopatinio gydymo plano sudarymas</p>
                </div>
                <div className="flex-1 bg-[#F7FAF9] rounded-xl border border-[#DDE9E8] p-4">
                  <p className="text-[0.75rem] font-semibold text-muted/60 uppercase tracking-wide mb-2">Osteopatija (vizitas)</p>
                  <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">100 €</p>
                  <p className="text-[0.78rem] text-muted/50 mb-3">60 min</p>
                  <p className="text-[0.8125rem] text-secondary leading-snug">Individualus gydymo vizitas pas Piotr Dubrovskij</p>
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
            </div>
          </div>
        </div>

        {/* ── 12. SPECIALISTAS ─────────────────────────────── */}
        <div id="specialistai" className="scroll-mt-32">
          <SectionLabel>Komanda</SectionLabel>
          <SectionTitle>Specialistas, teikiantis šią paslaugą</SectionTitle>
          <div className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.1)] transition-all duration-300 max-w-[780px]">
            <div className="flex flex-col sm:flex-row">
              <a href="/specialistai/piotr-dubrovskij" className="sm:w-[220px] flex-shrink-0 h-[260px] sm:h-auto bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden">
                <img
                  src="/specialist-piotr.jpg"
                  alt="Piotr Dubrovskij"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              </a>
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div>
                  <a href="/specialistai/piotr-dubrovskij" className="text-[1.125rem] font-bold text-foreground hover:text-[#7DB9B5] transition-colors duration-200">
                    Piotr Dubrovskij
                  </a>
                  <p className="text-[0.8125rem] text-[#7DB9B5] font-medium mt-0.5 mb-1">Kineziterapeutas, osteopatas, manualinės terapijos specialistas</p>
                  <p className="text-[0.78rem] text-muted/60 mb-4">Nugaros ir sąnarių skausmai, funkcinis ištyrimas</p>
                  <div className="flex flex-col gap-2 text-[0.875rem] text-secondary leading-relaxed">
                    <p>
                      Piotr Dubrovskij savo darbe taiko daugiausia struktūrinį osteopatinį požiūrį, orientuotą į kūno mechaniką, judrumą ir funkcinius ryšius. Priklausomai nuo paciento būklės, gydymo metu gali būti įtraukiami ir visceraliniai bei kraniosakraliniai elementai.
                    </p>
                    <p>
                      Savo osteopatinę praktiką grindžia integruotu manualiniu gydymu, paremtu klinikiniu vertinimu ir individualiai parenkama osteopatine rutina. Yra baigęs mokymus Barral Institute.
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <a
                    href="/specialistai/piotr-dubrovskij#registruotis"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7DB9B5] text-white text-[0.875rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_3px_12px_rgba(125,185,181,0.25)]"
                  >
                    Registruotis <ArrowRight size={14} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>
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
                  "Vilkėkite patogią, laisvą aprangą.",
                  "Jei turite — atsineškite tyrimų atsakymus, gydytojų rekomendacijas ar kitą su būkle susijusią informaciją.",
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
            Registruokitės pirmajam vizitui — įvertinsime jūsų būklę ir parinksime, ar jums labiausiai tinka osteopatija, ar kita gydymo kryptis.
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
