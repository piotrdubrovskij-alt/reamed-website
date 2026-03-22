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
    q: "Ar kineziterapija tinka, jei jaučiu skausmą?",
    a: "Taip — ir dažniausiai būtent dėl skausmo ir pradedama. Mes neskubame „per prievartą judinti": pirmojo vizito metu įvertiname, kokio intensyvumo ir pobūdžio jūsų skausmas, ir pagal tai parenkame saugų, kryptingą gydymo tempą.",
  },
  {
    q: "Ar reikia siuntimo iš gydytojo?",
    a: "Ne, siuntimo nereikia — galite registruotis tiesiogiai. Jei turite gydytojo rekomendacijas, tyrimų rezultatus ar MRT nuotraukas — atsineškite, tai leidžia tiksliau įvertinti situaciją ir sutaupyti laiko.",
  },
  {
    q: "Kiek vizitų dažniausiai prireikia?",
    a: "Tai priklauso nuo problemos pobūdžio, trukmės ir jūsų tikslo. Ūminė būklė gali išsispręsti per 4–6 vizitus, lėtinė ar pooperacinė — reikalauja nuoseklesnio proceso. Tikslų planą aptariame po pirmojo vizito, kai aiškiau matome, su kuo dirbame.",
  },
  {
    q: "Ar kineziterapija tinka po operacijos?",
    a: "Taip, ir tai — viena iš svarbiausių mūsų krypčių. Pooperacinė reabilitacija turi savo etapus: kas tinka trečią savaitę, nėra tinkama antrą mėnesį. Dirbame pagal etapą, ne pagal šabloną.",
  },
  {
    q: "Kuo kineziterapija skiriasi nuo masažo?",
    a: "Masažas — tai pasyvus poveikis audiniams: atsipalaidavimas, kraujotaka. Kineziterapija Vilniuje — tai aktyvus judesio atkūrimo procesas: raumenų aktyvacija, judesio kontrolė, funkcija. Jos viena kitą puikiai papildo, todėl prireikus jas ir deriname.",
  },
  {
    q: "Ar reikės atlikti pratimus namuose?",
    a: "Dažniausiai — taip, bet ne dėl to, kad taip „privalu". Namų programa padeda greičiau pasiekti rezultatą ir išlaikyti pažangą tarp vizitų. Pratimai parenkami pagal jūsų realų laiką ir galimybes — ne per sudėtingi, ne per daug.",
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
  "Pečių juostos įtampa",
  "Sąnarių judesių ribotumas",
  "Skausmas po traumos",
  "Atsistatymas po operacijos",
  "Pasikartojantys perkrovos simptomai",
  "Laikysenos ar judesio kontrolės problemos",
  "Grįžimas į sportą ar aktyvumą",
];

/* ── WHAT WE TREAT ────────────────────────────────────────────── */
const treatItems = [
  "Juosmens, kaklo, krūtinės stuburo skausmai",
  "Peties, kelio, klubo problemos",
  "Raumenų disbalansas",
  "Sausgyslių perkrovos (tendinopatijos)",
  "Būklės po raiščių, meniskų, lūžių ar operacijų",
  "Sportinės traumos",
  "Funkciniai judėjimo sutrikimai",
];

/* ── FIRST VISIT STEPS ────────────────────────────────────────── */
const visitSteps = [
  { n: "01", title: "Nusiskundimų aptarimas", text: "Išklausome, kada atsirado problema, kaip ji kinta, kas mažina ar didina skausmą." },
  { n: "02", title: "Būklės ir judesio įvertinimas", text: "Tikriname laikyseną, judesio amplitudę, raumenų jėgą ir simetrijos rodiklius." },
  { n: "03", title: "Funkciniai testai", text: "Atliekame specifinius testus, leidžiančius tiksliau nustatyti problemos kilmę." },
  { n: "04", title: "Problemos priežasčių paaiškinimas", text: "Suprantamai paaiškiname, kas vyksta ir kodėl — be nereikalingų medicininių terminų." },
  { n: "05", title: "Gydymo plano sudarymas", text: "Kartu su pacientu aptariame realistiškus tikslus ir numatome gydymo kryptį." },
  { n: "06", title: "Pirmos rekomendacijos", text: "Gausite konkrečius pratimus ar elgesio rekomendacijas, kurias galėsite taikyti iš karto." },
];

/* ── WHAT IS APPLIED ─────────────────────────────────────────── */
const appliedItems = [
  "Gydomieji pratimai",
  "Mobilumo ir stabilumo lavinimas",
  "Raumenų aktyvacijos pratimai",
  "Laikysenos ir judesio korekcija",
  "Kvėpavimo ar koordinacijos pratimai",
  "Grįžimo į krūvį planavimas",
  "Namų programos rekomendacijos",
];

/* ── GOALS ───────────────────────────────────────────────────── */
const goalItems = [
  "Mažinti skausmą",
  "Gerinti judesių kokybę",
  "Atkurti funkciją",
  "Didinti pasitikėjimą judesiu",
  "Grįžti prie kasdienės veiklos",
  "Pasirengti grįžimui į sportą ar darbą",
];

/* ── FOR WHOM ─────────────────────────────────────────────────── */
const forWhomItems = [
  "Sėdimą darbą dirbantiems",
  "Aktyviai sportuojantiems",
  "Po traumų ar operacijų",
  "Jaučiantiems pasikartojančius skausmus",
  "Norintiems spręsti ne tik simptomą, bet ir priežastį",
];

/* ── WHY REAMED ──────────────────────────────────────────────── */
const whyItems = [
  { title: "Individualus požiūris", text: "Kiekvienam pacientui sudaromas atskiras planas — pagal būklę, tikslus ir gyvenimo ritmą." },
  { title: "Priežasties paieška", text: "Dirbame ne tik su simptomu, bet ir su tuo, kas jį sukelia." },
  { title: "Aiškus planas", text: "Po pirmojo vizito žinosite, kas vyksta ir ką daryti toliau." },
  { title: "Funkcija grįstas įvertinimas", text: "Vertiname ne tik skausmą, bet ir judesio kokybę, raumenų darbą ir kasdienę funkciją." },
  { title: "Galimybė derinti paslaugas", text: "Prireikus kineziterapiją galima derinti su manualine terapija, osteopatija ar masažu." },
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
    name: "Kotryna Kairytė",
    role: "Kineziterapeutė",
    focus: "Sporto reabilitacija, atsistatymas po traumų",
    photo: "/specialist-kotryna.jpg",
    slug: "kotryna-kairyte",
  },
  {
    name: "Erikas Jatkauskas",
    role: "Kineziterapeutas",
    focus: "Judesio kontrolė, perkrovų gydymas",
    photo: "/specialist-erikas.jpg",
    slug: "erikas-jatkauskas",
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

/* ── MID-PAGE CTA ─────────────────────────────────────────────── */
function MidCTA() {
  return (
    <div className="rounded-2xl bg-[#7DB9B5] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <p className="text-white font-bold text-[1.0625rem] mb-1">
          Nežinote, ar kineziterapija jums tinka?
        </p>
        <p className="text-white/80 text-[0.875rem]">
          Registruokitės pirmajai konsultacijai — kartu pasirinkime tinkamiausią kryptį.
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
export default function KineziterapijaContent() {
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* ── 1. HERO ───────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(160deg, #EEF5F4 0%, #F7FAF9 60%)" }}>
        <div className="container-xl pt-10 pb-12 md:pt-14 md:pb-16">
          <SectionLabel>Paslauga</SectionLabel>
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold text-foreground leading-[1.1] mb-4 max-w-[640px]">
            Kineziterapija Vilniuje
          </h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[540px]">
            Individualiai pritaikytas gydymas, padedantis mažinti skausmą, gerinti judesių kokybę ir atkurti funkciją — po traumų, operacijų ar dėl lėtinių judamojo aparato problemų.
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
            {["Individualus įvertinimas", "Gydymo planas pagal jūsų būklę", "Suaugusiesiems ir sportuojantiems"].map((tp) => (
              <span key={tp} className="flex items-center gap-1.5 text-[0.8125rem] text-muted font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5]" aria-hidden="true" />
                {tp}
              </span>
            ))}
          </div>

          {/* CTAs */}
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

        {/* ── 2. KAS YRA KINEZITERAPIJA ─────────────────────── */}
        <div id="kas-tai" className="grid md:grid-cols-2 gap-8 md:gap-12 items-center scroll-mt-32">
          <div>
            <SectionLabel>Apie paslaugą</SectionLabel>
            <SectionTitle>Kas yra kineziterapija?</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              <p>
                Kineziterapija Vilniuje — tai ne tik pratimai. Tai individualiai pritaikytas judėjimo gydymas, kurio tikslas — rasti problemos priežastį ir sistemingai ją šalinti.
              </p>
              <p>
                Kiekvieno paciento programa sudaroma atskirai: pagal būklę, judesio apribojimus, skausmo kilmę ir gyvenimo aktyvumą. Programa gali keistis priklausomai nuo to, kaip progresuoja gydymas.
              </p>
              <p>
                Tikslas — sumažinti skausmą, atkurti funkciją ir padėti grįžti prie to, ką mėgstate: darbo, sporto ar kasdienės veiklos. Kineziterapija nugaros skausmui, po traumos ar operacijos — visa tai yra mūsų kasdienė praktika.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-white border border-[#DDE9E8] p-6 md:p-8 flex flex-col gap-4">
            {[
              { icon: "🎯", title: "Individualus planas", text: "Kiekvienas vizitas ir programa sudaromi pagal jūsų konkrečią būklę." },
              { icon: "🔍", title: "Priežasties paieška", text: "Vertiname ne tik skausmą, bet ir judesio kokybę bei raumenų darbą." },
              { icon: "📈", title: "Aiškus progresas", text: "Kiekvienas žingsnis — kryptingas, su aiškiu tikslu ir rezultatu." },
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

        {/* ── 4. SU KOKIAIS SUTRIKIMAIS DIRBAME ────────────── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <SectionLabel>Specialybė</SectionLabel>
            <SectionTitle>Su kokiais sutrikimais dirbame?</SectionTitle>
            <BulletList items={treatItems} />
          </div>
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8">
            <p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">Svarbu</p>
            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">
              Jei nesate tikri, ar jūsų problema tinka kineziterapijai — registruokitės pirminei konsultacijai. Pirmojo vizito metu nustatysime, kokia pagalba jums labiausiai tinka.
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

        {/* ── 5. PIRMAS VIZITAS ─────────────────────────────── */}
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
                Vizitų dažnis priklauso nuo būklės. Kartais pakanka kelių vizitų, kitiems atvejams reikia nuoseklesnio proceso — tai aptariame po pirmojo įvertinimo.
              </p>
              <p>
                Planas nėra statiškas — jis koreguojamas pagal tai, kaip jums sekasi ir kaip kinta simptomai.
              </p>
              <p>
                Prireikus kineziterapiją galima derinti su manualine terapija, osteopatija, masažu ar fizioterapija — visa tai galima toje pačioje klinikoje.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              ["Individualus", "Programa derinama prie jūsų būklės ir tikslų."],
              ["Dinamiškas", "Planas keičiamas pagal progresą — ne pagal šabloną."],
              ["Kompleksiškas", "Galima derinti su kitomis paslaugomis pagal poreikį."],
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
            <h2 className="text-[1.25rem] font-bold text-foreground mb-5">Kam tinka kineziterapija?</h2>
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
                  <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-1.5">60 €</p>
                  <p className="text-[0.78rem] text-muted/50 mb-3">45 min</p>
                  <p className="text-[0.8125rem] text-secondary leading-snug">Kineziterapija pagal sudarytą planą</p>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialists.map((s) => (
              <div key={s.slug} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300 flex flex-col">
                <a href={`/specialistai/${s.slug}`} className="block h-[220px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] overflow-hidden">
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
                  "Vilkėkite patogią, laisvą aprangą.",
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
          <p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[460px] mx-auto">
            Registruokitės pirmajam vizitui — įvertinsime jūsų būklę ir parinksime tinkamiausią gydymo kryptį.
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
