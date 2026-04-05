"use client";

import { ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function PackageRows({ rows }: { rows: [string, string][] }) {
  return (
    <div className="space-y-1">
      {rows.map(([label, price]) => (
        <div key={label} className="flex justify-between items-center text-[0.82rem]">
          <span className="text-muted">{label}</span>
          <span className="font-medium text-[#5F6866]">{price}</span>
        </div>
      ))}
    </div>
  );
}

const content = {
  lt: {
    heroTitle: "Paslaugos ir kainos",
    heroSubtitle: "Skaidrūs įkainiai be paslėptų mokesčių. Dažniausiai gydymas prasideda nuo pirminės konsultacijos ir ištyrimo.",
    startTitle: "Nuo ko pradėti?",
    startService: "Pirminė konsultacija + ištyrimas + planas",
    startDuration: "60 min · Rekomenduojamas pirmasis vizitas naujam pacientui",
    register: "Registruotis",
    mainTitle: "Pagrindiniai gydymo formatai",
    cardKinezi: { title: "Kineziterapija", desc: "Individualus bazinis gydymo formatas", duration: "45 min", priceLabel: "vienas vizitas" },
    cardKomplex: { badge: "Populiariausia", title: "Kompleksinė reabilitacija", desc: "45 min kineziterapija + 15 min papildoma priemonė pagal indikacijas", duration: "60 min", priceLabel: "vienas vizitas" },
    cardExtended: { title: "Kompleksinė išplėstinė", desc: "45 min kineziterapija + 2 papildomos priemonės po 15 min pagal indikacijas", duration: "75 min", priceLabel: "vienas vizitas" },
    addOnNoteTitle: "Kas yra papildoma priemonė?",
    addOnNoteText: "Pagal indikacijas tai gali būti fizioterapija (ultragarsas, elektroterapija), minkštųjų audinių mobilizacija, masažo technikos ar teipavimas.",
    pkg3: "3 kartai", pkg5: "5 kartai", pkg10: "10 kartų",
    specialistTitle: "Vizitas pas specialistą",
    specialistLabel: "Piotr Dubrovskij",
    specialistService: "Individualus 60 min vizitas",
    specialistNote: "Vizito pobūdis parenkamas pagal būklę. Kaina nepriklauso nuo taikomo metodo.",
    addonsTitle: "Papildomos paslaugos",
    moduleTitle: "Papildomas modulis",
    moduleDuration: "15 min · tik kartu su vizitu",
    moduleExamplesLabel: "Pavyzdžiai",
    moduleExamples: ["Fizioterapija", "Elektroterapija", "Ultragarsas", "Mobilizacija", "Masažas", "Teipavimas"],
    massageTitle: "Masažas",
    massageDuration30: "30 min",
    massageDuration60: "60 min",
    physioTitle: "Fizioterapija",
    physioDuration: "15–20 min · pagal indikacijas",
    physioPerSession: "Viena procedūra",
    rulesTitle: "Paketų taisyklės",
    rules: [
      "3× paketas galioja 6 savaites",
      "5× paketas galioja 8 savaites",
      "10× paketas galioja 4 mėnesius",
      "Atšaukimas mažiau nei prieš 24 val. — vizitas nurašomas iš paketo",
    ],
    paymentTitle: "Apmokėjimas ir kompensavimas",
    paymentText1: "Už paslaugas galite atsiskaityti grynaisiais, banko kortele arba bankiniu pavedimu.",
    paymentText2: "Jei turite sveikatos draudimą ir norite kreiptis dėl kompensavimo, po vizito išrašome sąskaitą faktūrą, kurią galėsite pateikti savo draudimo bendrovei pagal jos nustatytą tvarką.",
    ctaTitle: "Nežinote, nuo ko pradėti?",
    ctaText: "Dažniausiai rekomenduojame pradėti nuo pirminės konsultacijos ir ištyrimo — vizito metu padėsime pasirinkti tinkamiausią kryptį.",
    ctaRegister: "Registruotis",
    ctaContact: "Susisiekti",
  },
  en: {
    heroTitle: "Services & Prices",
    heroSubtitle: "Transparent pricing with no hidden fees. Treatment usually begins with an initial consultation and assessment.",
    startTitle: "Where to start?",
    startService: "Initial consultation + assessment + treatment plan",
    startDuration: "60 min · Recommended first visit for new patients",
    register: "Book now",
    mainTitle: "Main treatment formats",
    cardKinezi: { title: "Physiotherapy", desc: "Individual standard treatment format", duration: "45 min", priceLabel: "per session" },
    cardKomplex: { badge: "Most popular", title: "Combined rehabilitation", desc: "45 min physiotherapy + 15 min add-on procedure as indicated", duration: "60 min", priceLabel: "per session" },
    cardExtended: { title: "Combined extended", desc: "45 min physiotherapy + 2 add-on procedures of 15 min each as indicated", duration: "75 min", priceLabel: "per session" },
    addOnNoteTitle: "What is an add-on procedure?",
    addOnNoteText: "Depending on the indication, this may include physiotherapy (ultrasound, electrotherapy), soft tissue mobilisation, massage techniques or taping.",
    pkg3: "3 sessions", pkg5: "5 sessions", pkg10: "10 sessions",
    specialistTitle: "Specialist visit",
    specialistLabel: "Piotr Dubrovskij",
    specialistService: "Individual 60-min visit",
    specialistNote: "The nature of the visit is tailored to the condition. Price does not depend on the method used.",
    addonsTitle: "Additional services",
    moduleTitle: "Add-on module",
    moduleDuration: "15 min · only combined with a visit",
    moduleExamplesLabel: "Examples",
    moduleExamples: ["Physiotherapy", "Electrotherapy", "Ultrasound", "Mobilisation", "Massage", "Taping"],
    massageTitle: "Massage",
    massageDuration30: "30 min",
    massageDuration60: "60 min",
    physioTitle: "Physiotherapy",
    physioDuration: "15–20 min · as indicated",
    physioPerSession: "Single session",
    rulesTitle: "Package terms",
    rules: [
      "3× package valid for 6 weeks",
      "5× package valid for 8 weeks",
      "10× package valid for 4 months",
      "Cancellation less than 24 h before — session is deducted from the package",
    ],
    paymentTitle: "Payment & reimbursement",
    paymentText1: "You can pay for services in cash, by bank card or bank transfer.",
    paymentText2: "If you have health insurance and wish to apply for reimbursement, we issue an invoice after the visit which you can submit to your insurance company according to their procedure.",
    ctaTitle: "Not sure where to start?",
    ctaText: "We usually recommend starting with an initial consultation and assessment — during the visit we will help you choose the most suitable direction.",
    ctaRegister: "Book now",
    ctaContact: "Contact us",
  },
} as const;

export default function KainosContent() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* HERO */}
      <div className="container-xl pt-8 pb-8 md:pt-10 md:pb-10 border-b border-[#DDE9E8]">
        <h1 className="text-[2rem] md:text-[2.625rem] font-bold text-foreground mb-2.5 leading-tight">
          {c.heroTitle}
        </h1>
        <p className="text-[0.9375rem] text-muted max-w-[400px] leading-relaxed">
          {c.heroSubtitle}
        </p>
      </div>

      <div className="container-xl py-8 md:py-10 flex flex-col gap-7 md:gap-9">

        {/* 1 — NUO KO PRADĖTI */}
        <div>
          <h2 className="text-[1rem] font-bold text-foreground mb-3">{c.startTitle}</h2>
          <div className="rounded-2xl border-2 border-[#90CECA] bg-white overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              <div className="flex-1 p-5 sm:p-6 border-b sm:border-b-0 sm:border-r border-[#EEF5F4]">
                <p className="text-[1.0625rem] font-bold text-foreground leading-snug mb-1.5">
                  {c.startService}
                </p>
                <p className="text-[0.8125rem] text-muted/75">{c.startDuration}</p>
              </div>
              <div className="flex items-center gap-5 p-5 sm:p-6 sm:flex-col sm:items-end sm:justify-center sm:gap-2.5">
                <p className="text-[2.25rem] font-bold text-[#7DB9B5] leading-none">70 €</p>
                <a
                  href="/registracija"
                  className="inline-flex items-center gap-1.5 px-4 py-1 bg-[#7DB9B5] text-white text-[0.8rem] font-semibold rounded-lg hover:bg-[#68A7A2] transition-colors duration-200"
                >
                  {c.register} <ArrowRight size={12} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2 — PAGRINDINIAI */}
        <div>
          <h2 className="text-[1rem] font-bold text-foreground mb-3">{c.mainTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4">

            {/* Kineziterapija */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5 flex flex-col hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200">
              <h3 className="text-[1.0625rem] font-bold text-foreground mb-1">{c.cardKinezi.title}</h3>
              <p className="text-[0.78rem] text-muted leading-snug mb-0.5 min-h-[2.4rem]">{c.cardKinezi.desc}</p>
              <p className="text-[0.72rem] text-muted/60 mb-3">{c.cardKinezi.duration}</p>
              <p className="text-[2.25rem] font-bold text-[#7DB9B5] leading-none mb-0.5">60 €</p>
              <p className="text-[0.72rem] text-muted/55 mb-4">{c.cardKinezi.priceLabel}</p>
              <div className="border-t border-[#EEF5F4] pt-3 mt-auto">
                <PackageRows rows={[[c.pkg3, "170 €"], [c.pkg5, "270 €"], [c.pkg10, "510 €"]]} />
              </div>
            </div>

            {/* Kompleksinė — popular */}
            <div className="bg-white rounded-2xl border-2 border-[#90CECA] p-5 flex flex-col shadow-[0_4px_20px_rgba(144,206,202,0.12)] relative">
              <div className="absolute -top-2.5 left-4">
                <span className="text-[0.65rem] font-semibold text-[#7DB9B5] uppercase tracking-widest border border-[#90CECA] bg-white px-2 py-0.5 rounded-full">
                  {c.cardKomplex.badge}
                </span>
              </div>
              <h3 className="text-[1.0625rem] font-bold text-foreground mb-1 mt-1.5">{c.cardKomplex.title}</h3>
              <p className="text-[0.78rem] text-muted leading-snug mb-0.5 min-h-[2.4rem]">{c.cardKomplex.desc}</p>
              <p className="text-[0.72rem] text-muted/60 mb-3">{c.cardKomplex.duration}</p>
              <p className="text-[2.25rem] font-bold text-[#7DB9B5] leading-none mb-0.5">70 €</p>
              <p className="text-[0.72rem] text-muted/55 mb-4">{c.cardKomplex.priceLabel}</p>
              <div className="border-t border-[#EEF5F4] pt-3 mt-auto">
                <PackageRows rows={[[c.pkg3, "195 €"], [c.pkg5, "315 €"], [c.pkg10, "595 €"]]} />
              </div>
            </div>

            {/* Išplėstinė */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5 flex flex-col hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200">
              <h3 className="text-[1.0625rem] font-bold text-foreground mb-1">{c.cardExtended.title}</h3>
              <p className="text-[0.78rem] text-muted leading-snug mb-0.5 min-h-[2.4rem]">{c.cardExtended.desc}</p>
              <p className="text-[0.72rem] text-muted/60 mb-3">{c.cardExtended.duration}</p>
              <p className="text-[2.25rem] font-bold text-[#7DB9B5] leading-none mb-0.5">85 €</p>
              <p className="text-[0.72rem] text-muted/55 mb-4">{c.cardExtended.priceLabel}</p>
              <div className="border-t border-[#EEF5F4] pt-3 mt-auto">
                <PackageRows rows={[[c.pkg3, "240 €"], [c.pkg5, "380 €"], [c.pkg10, "720 €"]]} />
              </div>
            </div>

          </div>

          <div className="mt-3 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-[#EEF5F4]/60 border border-[#DDE9E8]">
            <span className="w-1 h-1 rounded-full bg-[#90CECA] mt-1.5 flex-shrink-0" />
            <p className="text-[0.8125rem] text-muted leading-relaxed">
              <span className="font-semibold text-secondary">{c.addOnNoteTitle}</span>{" "}
              {c.addOnNoteText}
            </p>
          </div>
        </div>

        {/* 3 — PIOTR */}
        <div>
          <h2 className="text-[1rem] font-bold text-foreground mb-3">{c.specialistTitle}</h2>
          <div
            className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ background: "#383C3B" }}
          >
            <div className="flex-1">
              <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-[#90CECA] mb-1.5">{c.specialistLabel}</p>
              <p className="text-[1rem] font-bold text-white mb-1">{c.specialistService}</p>
              <p className="text-[0.8rem] text-white/45 leading-relaxed max-w-[380px]">{c.specialistNote}</p>
            </div>
            <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2 flex-shrink-0">
              <p className="text-[1.875rem] font-bold text-[#90CECA] leading-none">100 €</p>
              <a
                href="tel:+37060134304"
                className="inline-flex items-center gap-1.5 px-4 py-1 bg-[#7DB9B5] text-white text-[0.8rem] font-semibold rounded-lg hover:bg-[#68A7A2] transition-colors duration-200"
              >
                {c.register} <ArrowRight size={12} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* 4 — PAPILDOMOS */}
        <div>
          <h2 className="text-[1rem] font-bold text-foreground mb-3">{c.addonsTitle}</h2>
          <div className="grid md:grid-cols-3 gap-4">

            {/* Moduliai */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5">
              <h3 className="text-[1rem] font-bold text-foreground mb-0.5">{c.moduleTitle}</h3>
              <p className="text-[0.78rem] text-muted mb-2">{c.moduleDuration}</p>
              <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-3">18 €</p>
              <p className="text-[0.7rem] font-bold uppercase tracking-wider text-muted/70 mb-1.5">{c.moduleExamplesLabel}</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                {c.moduleExamples.map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#90CECA] flex-shrink-0" />
                    <span className="text-[0.78rem] text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Masažas */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5">
              <h3 className="text-[1rem] font-bold text-foreground mb-4">{c.massageTitle}</h3>
              <p className="text-[0.7rem] font-bold uppercase tracking-wider text-muted/70 mb-1">{c.massageDuration30}</p>
              <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-2">40 €</p>
              <PackageRows rows={[[c.pkg3, "114 €"], [c.pkg5, "180 €"], [c.pkg10, "340 €"]]} />
              <div className="border-t border-[#EEF5F4] mt-4 pt-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-wider text-muted/70 mb-1">{c.massageDuration60}</p>
                <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-2">65 €</p>
                <PackageRows rows={[[c.pkg3, "185 €"], [c.pkg5, "290 €"], [c.pkg10, "550 €"]]} />
              </div>
            </div>

            {/* Fizioterapija */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5">
              <h3 className="text-[1rem] font-bold text-foreground mb-0.5">{c.physioTitle}</h3>
              <p className="text-[0.78rem] text-muted mb-4">{c.physioDuration}</p>
              <p className="text-[0.7rem] font-bold uppercase tracking-wider text-muted/70 mb-1">{c.physioPerSession}</p>
              <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-2">20 €</p>
              <PackageRows rows={[[c.pkg3, "57 €"], [c.pkg5, "90 €"], [c.pkg10, "170 €"]]} />
            </div>

          </div>
        </div>

        {/* 5 — PAKETŲ TAISYKLĖS */}
        <div className="rounded-xl bg-[#EEF5F4] border border-[#D0E2E0] px-4 py-3.5">
          <p className="text-[0.8125rem] font-bold text-secondary mb-2.5">{c.rulesTitle}</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {c.rules.map((rule) => (
              <div key={rule} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" />
                <p className="text-[0.8125rem] text-secondary/70 leading-snug">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6 — APMOKĖJIMAS IR KOMPENSAVIMAS */}
        <div className="rounded-xl bg-[#EEF5F4] border border-[#D0E2E0] px-4 py-3.5">
          <p className="text-[0.8125rem] font-bold text-secondary mb-2.5">{c.paymentTitle}</p>
          <p className="text-[0.8125rem] text-secondary/70 leading-relaxed mb-2">{c.paymentText1}</p>
          <p className="text-[0.8125rem] text-secondary/70 leading-relaxed">{c.paymentText2}</p>
        </div>

        {/* 7 — CTA */}
        <div className="rounded-2xl border border-[#DDE9E8] bg-white p-6 md:p-8 text-center">
          <h2 className="text-[1.375rem] md:text-[1.75rem] font-bold text-foreground mb-2.5">
            {c.ctaTitle}
          </h2>
          <p className="text-[0.9375rem] text-muted leading-relaxed mb-5 max-w-[400px] mx-auto">
            {c.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3.5">
            <a
              href="/registracija"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_3px_12px_rgba(125,185,181,0.25)]"
            >
              {c.ctaRegister} <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a
              href="mailto:info@reamed.lt"
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
            >
              <Phone size={14} strokeWidth={2} /> {c.ctaContact}
            </a>
          </div>
          <p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p>
        </div>

      </div>
    </div>
  );
}
