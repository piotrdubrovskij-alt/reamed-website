"use client";

import { ArrowRight, Phone, Mail, ChevronLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Specialist } from "@/lib/specialists";

export default function SpecialistPageContent({ specialist: s }: { specialist: Specialist }) {
  const { lang } = useLanguage();
  const isLt = lang === "lt";

  const about = isLt ? s.about : s.aboutEn;
  const expertise = isLt ? s.expertise : s.expertiseEn;
  const education = isLt ? s.education : s.educationEn;
  const role = isLt ? s.role : s.roleEn;
  const tagline = isLt ? s.tagline : s.taglineEn;

  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* Back link */}
      <div className="container-xl pt-6 pb-0">
        <a
          href="/#specialistai"
          className="inline-flex items-center gap-1.5 text-[0.8125rem] text-muted hover:text-[#7DB9B5] transition-colors duration-200"
        >
          <ChevronLeft size={14} strokeWidth={2} />
          {isLt ? "Visi specialistai" : "All specialists"}
        </a>
      </div>

      {/* Hero */}
      <div className="container-xl pt-6 pb-10 md:pb-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

          {/* Photo */}
          <div className="w-full md:w-[280px] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] aspect-[3/4] md:aspect-auto md:h-[360px]">
              {s.photo ? (
                <img
                  src={s.photo}
                  alt={s.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 10%" }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[2.5rem] font-bold text-[#7DB9B5]">{s.initials}</span>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 pt-1">
            <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#7DB9B5] mb-2">
              ReaMed klinika
            </p>
            <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-foreground mb-2 leading-tight">
              {s.name}
            </h1>
            <p className="text-[1rem] font-medium text-[#7DB9B5] mb-4 leading-snug">{role}</p>
            <p className="text-[0.9375rem] text-muted leading-relaxed mb-6 max-w-[480px]">
              {tagline}
            </p>

            {/* CTA */}
            <div id="registruotis" className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+37060134304"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)] hover:-translate-y-0.5"
              >
                {isLt ? `Registruotis pas ${s.name.split(" ")[0]}` : `Book with ${s.name.split(" ")[0]}`}
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="tel:+37060134304"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
              >
                <Phone size={15} strokeWidth={2} />
                +370 601 34304
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Body */}
      <div className="container-xl pb-14 md:pb-16 grid md:grid-cols-3 gap-6 md:gap-8">

        {/* About */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <h2 className="text-[1.125rem] font-bold text-foreground mb-4">
              {isLt ? "Apie specialistą" : "About"}
            </h2>
            <div className="flex flex-col gap-3">
              {about.map((para, i) => (
                <p key={i} className="text-[0.9375rem] text-secondary leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <h2 className="text-[1.125rem] font-bold text-foreground mb-4">
              {isLt ? "Išsilavinimas ir specializacija" : "Education & specialisation"}
            </h2>
            <ul className="flex flex-col gap-2.5">
              {education.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#90CECA] mt-1.5 flex-shrink-0" />
                  <span className="text-[0.9rem] text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-5">

          {/* Expertise */}
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6">
            <h2 className="text-[1rem] font-bold text-foreground mb-4">
              {isLt ? "Specializacija" : "Specialisation"}
            </h2>
            <ul className="flex flex-col gap-2">
              {expertise.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" />
                  <span className="text-[0.875rem] text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact card */}
          <div className="rounded-2xl p-5" style={{ background: "#383C3B" }}>
            <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-[#90CECA] mb-2">
              {isLt ? "Registracija" : "Booking"}
            </p>
            <p className="text-[0.9rem] font-bold text-white mb-3 leading-snug">
              {isLt
                ? `Užregistruokite vizitą pas ${s.name.split(" ")[0]}`
                : `Book a visit with ${s.name.split(" ")[0]}`}
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+37060134304"
                className="flex items-center gap-2 text-[0.875rem] text-white/65 hover:text-white transition-colors duration-200"
              >
                <Phone size={13} strokeWidth={1.8} className="text-[#90CECA]" />
                +370 601 34304
              </a>
              <a
                href="mailto:info@reamed.lt"
                className="flex items-center gap-2 text-[0.875rem] text-white/65 hover:text-white transition-colors duration-200"
              >
                <Mail size={13} strokeWidth={1.8} className="text-[#90CECA]" />
                info@reamed.lt
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
