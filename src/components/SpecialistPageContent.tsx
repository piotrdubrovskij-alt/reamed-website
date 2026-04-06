"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, ChevronLeft, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Specialist } from "@/lib/specialists";

const COURSES_PREVIEW = 6;

export default function SpecialistPageContent({ specialist: s }: { specialist: Specialist }) {
  const { lang } = useLanguage();
  const isLt = lang === "lt";
  const [coursesExpanded, setCoursesExpanded] = useState(false);

  const about = isLt ? s.about : s.aboutEn;
  const conditions = isLt ? s.conditions : s.conditionsEn;
  const expertise = isLt ? s.expertise : s.expertiseEn;
  const education = isLt ? s.education : s.educationEn;
  const role = isLt ? s.role : s.roleEn;
  const tagline = isLt ? s.tagline : s.taglineEn;
  const courses = isLt ? s.courses : s.coursesEn;

  const firstName = s.name.split(" ")[0];
  const firstNameAcc = isLt ? (s.nameAccusative ?? firstName) : firstName;

  const visibleCourses = courses && !coursesExpanded
    ? courses.slice(0, COURSES_PREVIEW)
    : courses;

  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* Back link */}
      <div className="container-xl pt-6 pb-0">
        <Link
          href="/#specialistai"
          className="inline-flex items-center gap-1.5 text-[0.8125rem] text-muted hover:text-[#7DB9B5] transition-colors duration-200"
        >
          <ChevronLeft size={14} strokeWidth={2} />
          {isLt ? "Visi specialistai" : "All specialists"}
        </Link>
      </div>

      {/* ── HERO ── */}
      <div className="container-xl pt-6 pb-10 md:pb-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">

          {/* Photo */}
          <div className="w-full md:w-[280px] flex-shrink-0">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] h-[260px] sm:h-[300px] md:h-[320px]">
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
            <p className="text-[1rem] font-medium text-[#7DB9B5] mb-3 leading-snug">{role}</p>
            <p className="text-[0.9375rem] text-muted leading-relaxed mb-5 max-w-[480px]">
              {tagline}
            </p>

            {/* Quick fact badges */}
            {(s.license || (s.languages && s.languages.length > 0)) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {s.license && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[0.75rem] font-medium text-[#5E8F8B] bg-[#EEF5F4] border border-[#D0E2E0] rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] flex-shrink-0" />
                    {isLt ? "Lic." : "Lic."} {s.license}
                  </span>
                )}
                {s.languages && s.languages.map((l) => (
                  <span key={l} className="px-3 py-1 text-[0.75rem] font-medium text-[#5E8F8B] bg-[#EEF5F4] border border-[#D0E2E0] rounded-full">
                    {l}
                  </span>
                ))}
              </div>
            )}

            {/* CTA buttons */}
            <div id="registruotis" className="flex flex-col sm:flex-row gap-3">
              <a
                href="/registracija"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)] hover:-translate-y-0.5"
              >
                {isLt ? `Registruotis pas ${firstNameAcc}` : `Book with ${firstName}`}
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

      {/* ── BODY ── */}
      <div className="container-xl pb-10 grid md:grid-cols-3 gap-6 md:gap-8">

        {/* Main column */}
        <div className="md:col-span-2 flex flex-col gap-5">

          {/* About */}
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <h2 className="text-[1.125rem] font-bold text-foreground mb-4">
              {isLt ? (s.feminine ? "Apie specialistę" : "Apie specialistą") : "About"}
            </h2>
            <div className="flex flex-col gap-3">
              {about.map((para, i) => (
                <p key={i} className="text-[0.9375rem] text-secondary leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Conditions */}
          {conditions && conditions.length > 0 && (
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
              <h2 className="text-[1.125rem] font-bold text-foreground mb-4">
                {isLt ? "Su kokiomis problemomis dirba" : "Conditions treated"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {conditions.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" />
                    <span className="text-[0.9rem] text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Methods / Expertise */}
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <h2 className="text-[1.125rem] font-bold text-foreground mb-4">
              {isLt ? "Taikomi metodai" : "Methods used"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {expertise.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#90CECA] mt-1.5 flex-shrink-0" />
                  <span className="text-[0.9rem] text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
            <h2 className="text-[1.125rem] font-bold text-foreground mb-4">
              {isLt ? "Išsilavinimas" : "Education"}
            </h2>
            <ul className="flex flex-col gap-2.5">
              {education.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#90CECA] mt-1.5 flex-shrink-0" />
                  <span className="text-[0.9rem] text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            {s.license && (
              <div className="mt-4 pt-4 border-t border-[#EEF5F4] flex items-center gap-2.5">
                <span className="text-[0.72rem] font-semibold uppercase tracking-widest text-muted/50">
                  {isLt ? "Licencija" : "Licence"}
                </span>
                <span className="text-[0.8125rem] font-semibold text-secondary">{s.license}</span>
              </div>
            )}
          </div>

          {/* Courses */}
          {visibleCourses && visibleCourses.length > 0 && (
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-8">
              <h2 className="text-[1.125rem] font-bold text-foreground mb-5">
                {isLt ? "Kvalifikacijos tobulinimas" : "Professional development"}
              </h2>
              <ul className="flex flex-col gap-0">
                {visibleCourses.map((item, i) => {
                  const parts = item.split("|");
                  const year = parts[0] ?? "";
                  const title = parts[1] ?? item;
                  const org = parts[2];
                  const isLast = i === visibleCourses.length - 1;
                  return (
                    <li key={i} className="flex gap-4">
                      <div className="flex flex-col items-center flex-shrink-0 w-[56px]">
                        <span className="text-[0.7rem] font-bold text-[#7DB9B5] leading-none mt-1 text-right w-full">{year}</span>
                        {!isLast && <div className="w-px flex-1 bg-[#EEF5F4] mt-1.5 min-h-[16px]" />}
                      </div>
                      <div className={`flex-1 ${!isLast ? "pb-4" : ""}`}>
                        <p className="text-[0.875rem] font-medium text-secondary leading-snug">{title}</p>
                        {org && <p className="text-[0.78rem] text-muted/60 mt-0.5">{org}</p>}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {courses && courses.length > COURSES_PREVIEW && (
                <button
                  type="button"
                  onClick={() => setCoursesExpanded((v) => !v)}
                  className="mt-4 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200"
                >
                  <ChevronDown
                    size={15}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${coursesExpanded ? "rotate-180" : ""}`}
                  />
                  {coursesExpanded
                    ? (isLt ? "Rodyti mažiau" : "Show less")
                    : (isLt ? `Rodyti visus (${courses.length})` : `Show all (${courses.length})`)}
                </button>
              )}
            </div>
          )}

        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-5">

          {/* Registration card */}
          <div className="rounded-2xl p-5" style={{ background: "#383C3B" }}>
            <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-[#90CECA] mb-2">
              {isLt ? "Registracija" : "Booking"}
            </p>
            <p className="text-[0.9rem] font-bold text-white mb-4 leading-snug">
              {isLt ? "Registracija konsultacijai" : "Book a consultation"}
            </p>
            <div className="flex flex-col gap-2 mb-4">
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
            <a
              href="/registracija"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#7DB9B5] text-white text-[0.875rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200"
            >
              {isLt ? "Registruotis vizitui" : "Book a visit"}
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
          </div>

          {/* Languages */}
          {s.languages && s.languages.length > 0 && (
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5">
              <h2 className="text-[0.9375rem] font-bold text-foreground mb-3">
                {isLt ? "Kalbos" : "Languages"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {s.languages.map((l) => (
                  <span
                    key={l}
                    className="px-3 py-1 text-[0.8125rem] font-medium text-[#5E8F8B] bg-[#EEF5F4] border border-[#D0E2E0] rounded-full"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div className="container-xl pb-14 md:pb-16">
        <div className="rounded-2xl border border-[#DDE9E8] bg-white p-7 md:p-10">
          <div className="max-w-[560px]">
            <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-[#7DB9B5] mb-2">
              {isLt ? "Registracija" : "Booking"}
            </p>
            <h2 className="text-[1.375rem] md:text-[1.75rem] font-bold text-foreground mb-3 leading-snug">
              {isLt
                ? `Užregistruokite vizitą pas ${firstNameAcc}`
                : `Book a visit with ${firstName}`}
            </h2>
            <p className="text-[0.9375rem] text-muted leading-relaxed mb-6">
              {isLt
                ? "Jeigu turite klausimų arba norite registruotis konsultacijai, skambinkite arba rašykite – atsakysime per darbo dieną."
                : "If you have questions or would like to book a consultation, call or write to us – we will respond within one working day."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/registracija"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.25)] hover:-translate-y-0.5"
              >
                {isLt ? "Registruotis vizitui" : "Book a visit"}
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>
              <a
                href="mailto:info@reamed.lt"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={2} />
                info@reamed.lt
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
