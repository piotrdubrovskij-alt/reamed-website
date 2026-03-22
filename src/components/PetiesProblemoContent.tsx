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
    q: "Kodėl man skauda petį keliant ranką?",
    a: "Dažnai tai susiję su peties ir pečių juostos funkcija, perkrova, sumažėjusiu judrumu ar audinių dirginimu. Tiksli priežastis priklauso nuo simptomų pobūdžio ir judesio vertinimo.",
  },
  {
    q: "Ar peties skausmas gali praeiti savaime?",
    a: "Kartais taip, tačiau jei skausmas kartojasi, stiprėja ar riboja judesį, verta atlikti įvertinimą ir suprasti, kas palaiko problemą — tai padeda išvengti ilgesnės raidos.",
  },
  {
    q: "Ką daryti, jei petys skauda naktį?",
    a: "Naktinis peties skausmas gana dažnas. Jis gali būti susijęs su uždegiminiu dirginimu, perkrova ar sumažėjusiu judrumu, todėl verta įvertinti situaciją ir parinkti tinkamą gydymo kryptį.",
  },
  {
    q: "Ar po peties traumos galima iš karto pradėti judinti ranką?",
    a: "Tai priklauso nuo traumos pobūdžio. Kai kuriais atvejais judesys svarbus anksti, kitais reikia aiškesnių apribojimų. Todėl po traumos svarbu individualiai įvertinti būklę.",
  },
  {
    q: "Kiek vizitų dažniausiai prireikia?",
    a: "Tai priklauso nuo problemos pobūdžio, trukmės ir jūsų tikslo. Kartais pakanka kelių vizitų, kitais atvejais reikia nuoseklesnio gydymo plano — tikslią kryptį aptarsime po pirmojo vizito.",
  },
  {
    q: "Ar gydymo metu gausiu rekomendacijų namams?",
    a: "Taip. Jei reikia, gausite aiškias rekomendacijas dėl judesio, krūvio, pratimų ar kasdienės veiklos.",
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
  "Peties skausmas nepraeina ar kartojasi",
  "Sunku pakelti ranką aukštyn ar į šoną",
  "Jaučiate ribotą judesį, tempimą ar sustingimą",
  "Petys skauda naktį arba gulint ant šono",
  "Po traumos ar perkrovos petys neatsistato",
  "Sportuojant ar dirbant simptomai stiprėja",
  "Peties sritis jaučiasi silpna ar nestabili",
  "Norite suprasti, kas palaiko simptomus ir kaip gydytis kryptingai",
];

const relatedItems = [
  "Peties sąnario ir aplinkinių audinių perkrova",
  "Rotatorių manžetės dirginimas ar perkrova",
  "Ribotas peties sąnario judrumas",
  "Mentės kontrolės ir pečių juostos funkcijos sutrikimai",
  "Skausmas po traumos ar sumušimo",
  "Būklės po peties operacijų",
  "Pasikartojantis skausmas sporto metu ar po fizinio darbo",
  "Sustingimas ir sumažėjęs funkcionalumas atliekant kasdienius judesius",
];

const assessSteps = [
  { n: "01", title: "Nusiskundimų aptarimas", text: "Aptariame, kada simptomai prasidėjo, kur tiksliai skauda, kokie judesiai juos provokuoja ir kas riboja kasdienę veiklą." },
  { n: "02", title: "Būklės ir judesio įvertinimas", text: "Vertiname peties, mentės, pečių juostos, kaklo ir viršutinės nugaros dalies judrumą, kontrolę bei funkciją." },
  { n: "03", title: "Funkciniai testai", text: "Atliekame testus, padedančius geriau suprasti, ar simptomai susiję su judesio ribotumu, perkrova, nestabilumu ar minkštųjų audinių dirginimu." },
  { n: "04", title: "Problemos paaiškinimas", text: "Aiškiai paaiškiname, kas šiuo metu labiausiai tikėtina palaiko simptomus ir kokia gydymo kryptis būtų logiškiausia." },
  { n: "05", title: "Gydymo plano sudarymas", text: "Parenkame individualų planą — aktyvesnį, labiau manualinį ar mišrų, pagal jūsų būklę ir tikslą." },
];

const appliedItems = [
  "Kineziterapija",
  "Manualinis gydymas",
  "Osteopatinis gydymas",
  "Peties ir pečių juostos judrumo gerinimas",
  "Mentės kontrolės ir stabilumo lavinimas",
  "Raumenų aktyvavimo ir jėgos pratimai",
  "Judesio technikos korekcija",
  "Krūvio korekcijos rekomendacijos",
  "Namų programos rekomendacijos",
];

const goalItems = [
  "Mažinti peties skausmą ir diskomfortą",
  "Gerinti judrumą ir judesio laisvumą",
  "Atkurti peties ir mentės funkciją",
  "Gerinti jėgą, kontrolę ir stabilumą",
  "Mažinti simptomų pasikartojimo riziką",
  "Padėti grįžti prie darbo, sporto ar kasdienės veiklos",
];

const redFlags = [
  "Po traumos negalite pakelti rankos",
  "Petyje atsirado ryški deformacija ar staigus stiprus silpnumas",
  "Skausmas labai stiprus ir greitai progresuoja",
  "Simptomai atsirado po rimtesnės traumos ar kritimo",
  "Ryškiai sutriko rankos funkcija",
  "Kartu pasireiškia neįprasti bendri simptomai ar labai prasta savijauta",
];

const services = [
  { title: "Kineziterapija", text: "Tinka, kai svarbiausia atkurti judesį, peties funkciją, jėgą, kontrolę ir mažinti pasikartojančių simptomų riziką.", href: "/paslaugos/kineziterapija" },
  { title: "Manualinė terapija", text: "Tinka, kai reikia tikslingo manualinio gydymo, siekiant mažinti skausmą ir gerinti peties bei pečių juostos judrumą.", href: "/paslaugos/manualine-terapija" },
  { title: "Osteopatija", text: "Tinka, kai svarbus platesnis peties, mentės, kaklo ir krūtinės ląstos ryšių vertinimas.", href: "/paslaugos/osteopatija" },
  { title: "Sporto reabilitacija", text: "Tinka, kai problema susijusi su sportu, grįžimu į treniruotes ar peties perkrova fizinio aktyvumo metu.", href: "/paslaugos/sporto-reabilitacija" },
  { title: "Pooperacinė reabilitacija", text: "Tinka, kai reikia atsistatymo po peties operacijos pagal konkretų gijimo ir reabilitacijos etapą.", href: "/paslaugos/pooperacine-reabilitacija" },
];

const specialists = [
  { name: "Piotr Dubrovskij", role: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", focus: "Peties skausmas, pečių juostos funkcijos sutrikimai, sudėtingesnės peties būklės", photo: "/specialist-piotr.jpg", slug: "piotr-dubrovskij" },
  { name: "Kotryna Kairytė", role: "Kineziterapeutė", focus: "Peties reabilitacija, sporto traumos, funkcinis atsigavimas po perkrovų", photo: "/specialist-kotryna.jpg", slug: "kotryna-kairyte" },
  { name: "Erikas Jatkauskas", role: "Kineziterapeutas", focus: "Peties ir pečių juostos problemos, atsistatymas po traumų ir operacijų", photo: "/specialist-erikas.jpg", slug: "erikas-jatkauskas" },
];

/* ═══════════════════════════════════════════════════════════════ */
export default function PetiesProblemoContent() {
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
            Peties problemos Vilniuje
          </h1>
          <p className="text-[1rem] md:text-[1.125rem] text-secondary leading-relaxed mb-7 max-w-[560px]">
            Peties skausmas, ribotas judesys, silpnumas ar diskomfortas po traumos ar operacijos gali trukdyti kasdienei veiklai, miegui, darbui ir sportui. Įvertiname problemos pobūdį ir parenkame tinkamiausią gydymo kryptį.
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
            <SectionTitle>Kas yra peties problemos?</SectionTitle>
            <div className="flex flex-col gap-3 text-[0.9375rem] text-secondary leading-relaxed">
              <p>Peties problemos gali pasireikšti skausmu, judesio ribotumu, silpnumu, tempimo pojūčiu, nestabilumu ar diskomfortu atliekant kasdienius judesius. Dažniausiai simptomai išryškėja keliant ranką, siekiant aukštyn, rengiantis, miegant ant skaudančios pusės ar sportuojant.</p>
              <p>Peties sritis yra sudėtinga, nes į ją įeina ne tik pats peties sąnarys, bet ir mentės, raktikaulio, krūtinės ląstos bei kaklo regiono funkcija. Todėl peties skausmas ne visada reiškia vien lokalų sąnario sutrikimą — dažnai svarbus ir bendras judesio modelis.</p>
              <p>ReaMed klinikoje peties problemos vertinamos kompleksiškai. Mums svarbu suprasti ne tik kur skauda, bet ir kaip juda petys, mentė, kaklas ir viršutinė nugaros dalis.</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { title: "Peties skausmas gali turėti skirtingas priežastis", text: "Simptomai gali būti susiję su perkrova, judesio ribotumu, minkštųjų audinių dirginimu, nestabilumu ar atsistatymu po traumos." },
              { title: "Svarbus ne tik petys, bet ir aplinkinės sritys", text: "Mentės kontrolė, kaklo ir krūtinės ląstos judrumas dažnai daro didelę įtaką peties funkcijai." },
              { title: "Tikslas — ne tik sumažinti skausmą", text: "Siekiame padėti atkurti laisvesnį, stipresnį ir kokybiškesnį judesį." },
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
            <SectionTitle>Su kuo gali būti susijusios peties problemos?</SectionTitle>
            <BulletList items={relatedItems} />
          </div>
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8">
            <p className="text-[0.8125rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">Svarbu</p>
            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-4">
              Peties skausmas gali būti susijęs su skirtingomis struktūromis ir judesio modeliais, todėl svarbiausia ne spėlioti, o įvertinti, kas konkrečiai šiuo metu palaiko simptomus.
            </p>
            <a href="#registruotis" className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200">
              Registruotis įvertinimui <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* ── 5. KAIP VERTINAME ── */}
        <div id="kaip-vertiname" className="scroll-mt-32">
          <SectionLabel>Įvertinimas</SectionLabel>
          <SectionTitle>Kaip vertiname peties problemas?</SectionTitle>
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
                Nors dauguma peties problemų yra susijusios su judėjimo sistema, kai kuriais atvejais svarbus greitesnis gydytojo įvertinimas. Nedelskite, jei:
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
          <SectionTitle>Kokios paslaugos gali tikti esant peties problemoms?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <span className="font-semibold text-foreground">Svarbu:</span> tinkamiausia paslauga priklauso nuo jūsų simptomų pobūdžio, todėl pirmiausia svarbus individualus įvertinimas.
            </p>
          </div>
        </div>

        {/* ── 10. KODĖL REAMED ── */}
        <div>
          <SectionLabel>ReaMed</SectionLabel>
          <SectionTitle>Kodėl pacientai kreipiasi į ReaMed dėl peties problemų?</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Vertiname ne tik petį", text: "Svarbu ne tik kur skauda, bet ir kaip dirba mentė, pečių juosta, kaklas bei viršutinė nugaros dalis." },
              { title: "Aiškiai paaiškiname situaciją", text: "Po vizito suprasite, kas gali palaikyti simptomus ir kokia gydymo kryptis jums šiuo metu tinkamiausia." },
              { title: "Gydymą parenkame pagal būklę", text: "Vieniems labiau tinka aktyvus funkcijos atkūrimas, kitiems — manualinis ar mišrus požiūris." },
              { title: "Orientuojamės į funkciją", text: "Tikslas — ne tik sumažinti skausmą, bet ir padėti vėl laisviau kelti ranką ir grįžti prie įprastos veiklos." },
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
          <SectionTitle>Specialistai, dirbantys su peties problemomis</SectionTitle>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

        {/* ── 12. FAQ ── */}
        <div id="duk" className="scroll-mt-32">
          <SectionLabel>Klausimai</SectionLabel>
          <SectionTitle>Dažniausiai užduodami klausimai</SectionTitle>
          <FAQ />
        </div>

        {/* ── 13. FINAL CTA ── */}
        <div id="registruotis" className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10 text-center">
          <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-foreground mb-3">
            Norite suprasti, kas sukelia jūsų peties problemą?
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
