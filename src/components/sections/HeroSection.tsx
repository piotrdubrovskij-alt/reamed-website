"use client";

import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ paddingTop: "104px", minHeight: "100svh" }}
      aria-labelledby="hero-title"
    >
      {/* Background image — covers full section */}
      <img
        src="/hero.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "blur(1.5px) brightness(1.03) saturate(0.9)" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(247,250,249,0.97) 0%, rgba(247,250,249,0.93) 30%, rgba(247,250,249,0.72) 52%, rgba(247,250,249,0.18) 72%, transparent 88%)",
        }}
        aria-hidden="true"
      />

      {/* Text content */}
      <div className="relative z-10 container-xl w-full py-10 sm:py-14">
        <div className="max-w-[500px]">
          <p className="mb-3 text-[0.75rem] sm:text-[0.8125rem] font-semibold uppercase tracking-widest text-[#7DB9B5]">
            {t.hero.tag}
          </p>

          <h1
            id="hero-title"
            className="text-[1.5rem] sm:text-[1.9rem] lg:text-[2.4rem] font-bold leading-[1.15] text-foreground mb-4"
          >
            {t.hero.title}
          </h1>

          <p className="text-[0.875rem] sm:text-[0.9375rem] text-secondary leading-relaxed mb-7 max-w-[440px]">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href="/registracija"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.875rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.32)] hover:-translate-y-0.5"
            >
              {t.hero.cta1}
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#specialistai"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#90CECA] text-foreground text-[0.875rem] font-semibold rounded-xl hover:bg-[#EEF5F4] transition-all duration-200"
            >
              {t.hero.cta2}
              <ChevronRight size={16} strokeWidth={2.5} />
            </a>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            {t.hero.trustLine.map((item, i) => (
              <React.Fragment key={i}>
                {i === 3 && <div className="w-full h-0" aria-hidden="true" />}
                <span className="flex items-center gap-2 text-[0.75rem] sm:text-[0.78rem] text-muted font-medium">
                  {i > 0 && i !== 3 && (
                    <span className="w-1 h-1 rounded-full bg-[#90CECA] inline-block" aria-hidden="true" />
                  )}
                  {item}
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
