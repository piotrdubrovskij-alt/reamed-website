"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare namespace JSX {
  interface IntrinsicElements {
    div: any;
  }
}

const specialists = [
  {
    doctorId: "14780",
    name: "Piotr Dubrovskij",
    role: { lt: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", en: "Physiotherapist, osteopath, manual therapy specialist" },
    photo: "/specialist-piotr.jpg",
    slug: "piotr-dubrovskij",
  },
  {
    doctorId: "14781",
    name: "Kotryna Kairytė",
    role: { lt: "Kineziterapeutė", en: "Physiotherapist" },
    photo: "/specialist-kotryna.jpg",
    slug: "kotryna-kairyte",
  },
  {
    doctorId: "15169",
    name: "Erikas Jatkauskas",
    role: { lt: "Kineziterapeutas", en: "Physiotherapist" },
    photo: "/specialist-erikas.jpg",
    slug: "erikas-jatkauskas",
  },
  {
    doctorId: "13439",
    name: "Mangirdas Kazačenko",
    role: { lt: "Kineziterapeutas, manualinės terapijos specialistas, masažuotojas", en: "Physiotherapist, manual therapy specialist, massage therapist" },
    photo: "/specialist-mangirdas.jpg",
    slug: "mangirdas-kazacenko",
  },
];

const CLINIC_ID = "2611";

const content = {
  lt: {
    back: "Atgal į pagrindinį",
    tag: "Registracija vizitui",
    title: "Registracija vizitui",
    subtitle: "Pasirinkite specialistą ir patogų vizito laiką — rezervacija tiesiogiai per kalendorių.",
    profileLink: "Peržiūrėti profilį",
  },
  en: {
    back: "Back to home",
    tag: "Book a Visit",
    title: "Book a Visit",
    subtitle: "Choose your specialist and a convenient time — book directly through the calendar.",
    profileLink: "View profile",
  },
} as const;

export default function RegistracijaContent() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* Header */}
      <div className="container-xl pt-8 pb-8 md:pt-10 md:pb-10 border-b border-[#DDE9E8]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[0.8125rem] text-muted hover:text-[#7DB9B5] transition-colors duration-200 mb-6"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          {c.back}
        </Link>
        <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-2">{c.tag}</p>
        <h1 className="text-[1.875rem] md:text-[2.375rem] font-bold text-foreground mb-2.5 leading-tight">
          {c.title}
        </h1>
        <p className="text-[0.9375rem] text-muted max-w-[520px] leading-relaxed">{c.subtitle}</p>
      </div>

      {/* Specialist widgets */}
      <div className="container-xl py-8 md:py-10 flex flex-col gap-10">
        {specialists.map((spec) => (
          <div key={spec.doctorId} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden">

            {/* Specialist header */}
            <div className="flex items-center gap-4 px-5 py-4 border-b border-[#EEF5F4]">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB]">
                <img
                  src={spec.photo}
                  alt={spec.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[0.9375rem] font-bold text-foreground leading-tight">{spec.name}</p>
                <p className="text-[0.8rem] text-[#7DB9B5] font-medium leading-snug truncate">{spec.role[lang]}</p>
              </div>
              <Link
                href={`/specialistai/${spec.slug}`}
                className="flex-shrink-0 text-[0.78rem] font-semibold text-muted/60 hover:text-[#7DB9B5] transition-colors duration-200 hidden sm:block"
              >
                {c.profileLink} →
              </Link>
            </div>

            {/* Widget */}
            <div className="p-4 md:p-6">
              {/* @ts-expect-error manodaktaras custom element */}
              <div mydoc-widget mydoc-doctor={spec.doctorId} mydoc-clinic={CLINIC_ID} />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
