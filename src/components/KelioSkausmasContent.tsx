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
    q: "Ar kelio skausmas visada reiškia rimtą traumą?",
    a: "Ne. Kelio skausmas gali būti susijęs ne tik su rimtesne trauma, bet ir su perkrova, dirginimu, jėgos ar kontrolės trūkumu. Vis dėlto po traumos svarbu įvertinti situaciją.",
  },
  {
    q: "Ką daryti, jei po traumos kelias ištino?",
    a: "Tinimas po traumos gali rodyti audinių dirginimą ar rimtesnį pažeidimą, todėl verta kuo greičiau atlikti įvertinimą ir suprasti, kokia tolesnė kryptis saugiausia.",
  },
  {
    q: "Ar galima sportuoti, jei kelio skausmas tai atsiranda, tai praeina?",
    a: "Kartais žmonės toliau sportuoja su pasikartojančiu skausmu, tačiau tai gali palaikyti problemą. Svarbu suprasti, kas provokuoja simptomus ir kaip koreguoti krūvį.",
  },
  {
    q: "Kiek vizitų dažniausiai prireikia?",
    a: "Tai priklauso nuo problemos pobūdžio, traumos stadijos ir jūsų tikslo. Kartais pakanka kelių vizitų, kitais atvejais reikia nuoseklesnio reabilitacijos plano.",
  },
  {
    q: "Ar po kelio traumos galima greitai grįžti į sportą?",
    a: "Tai priklauso nuo traumos pobūdžio ir funkcijos atkūrimo. Skausmo sumažėjimas dar nereiškia, kad kelias pilnai pasiruošęs sportiniam krūviui — todėl svarbus kryptingas grįžimo planas.",
  },
  {
    q: "Ar gydymo metu gausiu rekomendacijų namams?",
    a: "Taip. Jei reikia, gausite aiškias rekomendacijas dėl judesio, krūvio, pratimų ir grįžimo į aktyvumą.",
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
  "Kelio skausmas nepraeina ar kartojasi",
  "Po traumos atsirado tinimas, skausmas ar nestabilumas",
  "Sunku pilnai sulenkti ar ištiesti kelį",
  "Lipant laiptais, tupiant ar bėgant simptomai stiprėja",
  "Kelias jaučiasi silpnas, nepatikimas ar nelaikantis",
  "Po poilsio simptomai greitai grįžta",
  "Po sporto ar fizinio darbo pasikartoja dirginimas",
  "Norite saugiai grįžti į aktyvumą ir suprasti priežastį",
];

const relatedItems = [
  "Raiščių traumos ar dirginimas",
  "Menisko srities simptomai",
  "Girnelės ir priekinės kelio dalies skausmas",
  "Sausgyslių perkrova ar tendinopatija",
  "Kelio sąnario perkrova sporto ar fizinio darbo metu",
  "Būklės po kelio traumų",
  "Judesio kontrolės ir apkrovos paskirstymo problemos",
  "Būklės po kelio operacijų ar imobilizacijos",
];

const assessSteps = [
  { n: "01", title: "Nusiskundimų aptarimas", text: "Aptariame, kada simptomai prasidėjo, ar buvo trauma, kokie judesiai provokuoja skausmą ir kas riboja kasdienę ar sportinę veiklą." },
  { n: "02", title: "Būklės ir judesio įvertinimas", text: "Vertiname kelio judrumą, tinimą, kontrolę, jėgą, stabilumą ir bendrą kojos funkciją." },
  { n: "03", title: "Funkciniai testai", text: "Atliekame testus, padedančius geriau suprasti, ar simptomai susiję su raiščiais, menisku, perkrova ar jėgos ir kontrolės trūkumu." },
  { n: "04", title: "Problemos paaiškinimas", text: "Aiškiai paaiškiname, kas šiuo metu labiausiai tikėtina palaiko simptomus ir kokia gydymo kryptis būtų logiškiausia." },
  { n: "05", title: "Gydymo plano sudarymas", text: "Parenkame individualų planą — aktyvesnį, labiau reabilitacinį ar mišrų, pagal jūsų būklę ir tikslą." },
];

const appliedItems = [
  "Kineziterapija",
  "Sporto reabilitacija",
  "Pooperacinė reabilitacija",
  "Manualinis gydymas",
  "Judrumo gerinimas",
  "Stabilumo ir kontrolės lavinimas",
  "Raumenų aktyvavimo ir jėgos pratimai",
  "Krūvio tolerancijos didinimas",
  "Judesio technikos korekcija",
  "Namų programos ir krūvio rekomendacijos",
];

const goalItems = [
  "Mažinti kelio skausmą ir diskomfortą",
  "Mažinti tinimą ir sustingimą",
  "Atkurti pilnesnį judesį",
  "Gerinti jėgą, stabilumą ir kontrolę",
  "Didinti pasitikėjimą judesiu po traumos",
  "Mažinti simptomų pasikartojimo riziką",
  "Padėti grįžti prie darbo, aktyvumo ar sporto",
];

const redFlags = [
  "Po traumos negalite priminti kojos",
  "Kelias greitai ir ryškiai ištino",
  "Atsirado stiprus nestabilumas ar išėjimo pojūtis",
  "Negalite pilnai ištiesti ar sulenkti kelio",
  "Skausmas labai stiprus ir greitai progresuoja",
  "Simptomai atsirado po rimtesnės traumos ar kritimo",
];

const services = [
  { title: "Kineziterapija", text: "Tinka, kai svarbiausia atkurti judesį, funkciją, jėgą ir mažinti pasikartojančių simptomų riziką.", href: "/paslaugos/kineziterapija" },
  { title: "Sporto reabilitacija", text: "Tinka, kai problema susijusi su sportine trauma, grįžimu į treniruotes ar didesniu fiziniu krūviu.", href: "/paslaugos/sporto-reabilitacija" },
  { title: "Pooperacinė reabilitacija", text: "Tinka, kai reikia kryptingo atsistatymo po kelio operacijos pagal konkretų reabilitacijos etapą.", href: "/paslaugos/pooperacine-reabilitacija" },
  { title: "Manualinė terapija", text: "Gali būti naudinga kaip gydymo plano dalis, kai reikia mažinti skausmą ar gerinti kelio judrumą.", href: "/paslaugos/manualine-terapija" },
];

const specialists = [
  { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Kelio skausmas, sporto traumos, funkcijos atkūrimas ir sudėtingesnės pooperacinės būklės", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
  { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Kelio reabilitacija, sporto traumos, funkcinis atsigavimas po perkrovų", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
  { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Kelio traumos ir perkrovos, grįžimas į aktyvumą ir sportą", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
  { name: "Mangirdas Kazačenko", role: "Kineziterapeutas, manualinės terapijos specialistas", focus: "Kelio skausmas, funkcinis atkūrimas ir reabilitacija po traumų", photo: "/specialist-mangirdas.jpg", slug: "mangirdas-kazacenko" },
];

/* ═══════════════════════════════════════════════════════════════ */
export default function KelioSkausmasContent() {
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
            Kelio skausmas ir traumos Vilniuje
          </h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[560px]">
            Kelio skausmas, judesio ribotumas, nestabilumas ar diskomfortas po traumos gali trukdyti vaikščioti, sportuoti, lipti laiptais ir grįžti prie įprasto aktyvumo. Įvertiname problemos pobūdį ir parenkame tinkamiausią gydymo kryptį.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
            {["Įvertiname simptomų pobūdį ir galimas priežastis", "Gydymą parenkame pagal jūsų būklę", "Siekiame ne tik sumažinti skausmą, bet ir atkurti funkciją"].map((tp) => (
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
            <SectionTitle>Kas yra kelio skausmas ir traumos?</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              <p>Kelio problemos gali pasireikšti skausmu, tinimu, nestabilumo pojūčiu, judesio ribotumu, diskomfortu fizinio krūvio metu ar po traumos. Simptomai gali atsirasti staiga — pavyzdžiui po pasukimo, kritimo ar sportinės traumos — arba vystytis palaipsniui dėl perkrovos ar pasikartojančio dirginimo.</p>
              <p>Kelias yra viena dažniausiai apkraunamų kūno sričių, todėl simptomai gali būti susiję ne tik su pačiu sąnariu, bet ir su aplinkinių raumenų, klubų, čiurnų, judesio kontrolės ar bendros apkrovos tolerancijos pokyčiais.</p>
              <p>ReaMed klinikoje vertiname ne tik kur skauda, bet ir kaip kelias juda, kaip toleruoja krūvį, kokie judesiai provokuoja simptomus ir kokia gydymo kryptis būtų tinkamiausia būtent jūsų atveju.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { title: "Kelio skausmas gali būti ir ūmus, ir pasikartojantis", text: "Simptomai gali būti susiję su trauma, perkrova, judesio funkcija ar atsistatymo po operacijos eiga." },
              { title: "Svarbus ne tik kelias, bet ir visa grandinė", text: "Klubų, čiurnų, raumenų kontrolės ir judesio kokybės pokyčiai dažnai turi įtakos kelio apkrovai." },
              { title: "Tikslas — ne tik sumažinti skausmą", text: "Siekiame padėti vėl saugiai judėti, pasitikėti koja ir grįžti prie aktyvumo." },
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
            <SectionLabel>Galimos priežastys</SectionLabel>
            <SectionTitle>Su kuo gali būti susijęs kelio skausmas ir traumos?</SectionTitle>
            <BulletList items={relatedItems} />
          </div>
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8">
            <p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">Svarbu</p>
            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">
              Kelio simptomai gali būti susiję su skirtingomis struktūromis ir funkcijos sutrikimais, todėl svarbiausia ne spėlioti, o suprasti, kas konkrečiai šiuo metu palaiko problemą.
            </p>
            <a href="#registruotis" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200">
              Registruotis įvertinimui <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* ── 5. KAIP VERTINAME ── */}
        <div id="kaip-vertiname" className="scroll-mt-32">
          <SectionLabel>Įvertinimas</SectionLabel>
          <SectionTitle>Kaip vertiname kelio skausmą ir traumas?</SectionTitle>
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
                Nors dauguma kelio problemų yra susijusios su judėjimo sistema, kai kuriais atvejais svarbus greitesnis gydytojo įvertinimas. Nedelskite, jei:
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
          <SectionTitle>Kokios paslaugos gali tikti esant kelio skausmui ar po traumos?</SectionTitle>
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
              <span className="font-semibold text-foreground">Svarbu:</span> tinkamiausia paslauga priklauso nuo traumos pobūdžio, simptomų stadijos ir jūsų tikslo, todėl pirmiausia svarbus individualus įvertinimas.
            </p>
          </div>
        </div>

        {/* ── 10. KODĖL REAMED ── */}
        <div>
          <SectionLabel>ReaMed</SectionLabel>
          <SectionTitle>Kodėl pacientai kreipiasi į ReaMed dėl kelio skausmo ir traumų?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Vertiname ne tik skausmo vietą", text: "Svarbu ne tik kur skauda, bet ir kaip kelias juda, toleruoja krūvį ir kaip veikia visa kojos grandinė." },
              { title: "Aiškiai paaiškiname situaciją", text: "Po vizito suprasite, kas gali palaikyti simptomus ir kokia gydymo kryptis jums šiuo metu tinkamiausia." },
              { title: "Gydymą parenkame pagal būklę", text: "Vieniems labiau tinka aktyvus funkcijos atkūrimas, kitiems — labiau reabilitacinis ar mišrus požiūris." },
              { title: "Orientuojamės į funkciją", text: "Tikslas — ne tik sumažinti skausmą, bet ir padėti vėl saugiai judėti, pasitikėti koja ir grįžti į aktyvumą." },
              { title: "Galime derinti skirtingas paslaugas", text: "Esant poreikiui, gydymo planas gali apjungti kelias kryptis toje pačioje klinikoje." },
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
          <SectionTitle>Specialistai, dirbantys su kelio skausmu ir traumomis</SectionTitle>
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
            Norite suprasti, kas sukelia jūsų kelio skausmą ar kaip atsistatyti po traumos?
          </h2>
          <p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[500px] mx-auto">
            Registruokitės pirmajam vizitui — įvertinsime jūsų būklę, paaiškinsime galimas priežastis ir parinksime tinkamiausią gydymo kryptį.
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
