"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative flex min-h-[620px] md:min-h-[680px] overflow-hidden"
      style={{ paddingTop: "104px" }}
      aria-labelledby="hero-title"
    >
      {/* Left — text block */}
      <div
        className="relative z-10 flex items-center w-full lg:w-[48%] xl:w-[44%] flex-shrink-0"
        style={{ background: "#F7FAF9" }}
      >
        {/* Soft right edge blending into photo */}
        <div
          className="hidden lg:block absolute top-0 right-0 w-20 h-full z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #F7FAF9, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="px-6 md:px-10 xl:px-14 py-14 md:py-20 max-w-[560px]">
          <p className="mb-4 text-[0.8125rem] font-semibold uppercase tracking-widest text-[#7DB9B5]">
            {t.hero.tag}
          </p>

          <h1
            id="hero-title"
            className="text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem] font-bold leading-[1.1] text-foreground mb-5"
          >
            {t.hero.title}
          </h1>

          <p className="text-[1.0625rem] text-secondary leading-relaxed mb-4">
            {t.hero.subtitle}
          </p>

          <p className="text-[0.9375rem] text-muted leading-relaxed mb-8">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#kontaktai"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#7DB9B5] text-white text-[0.9375rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.32)] hover:shadow-[0_6px_20px_rgba(125,185,181,0.42)] hover:-translate-y-0.5"
            >
              {t.hero.cta1}
              <ArrowRight size={17} strokeWidth={2.5} />
            </a>
            <a
              href="#specialistai"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-[#90CECA] text-foreground text-[0.9375rem] font-semibold rounded-xl hover:bg-[#EEF5F4] transition-all duration-200"
            >
              {t.hero.cta2}
              <ChevronRight size={17} strokeWidth={2.5} />
            </a>
          </div>

          {/* Trust line */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {t.hero.trustLine.map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-[0.8125rem] text-muted font-medium"
              >
                {i > 0 && (
                  <span
                    className="w-1 h-1 rounded-full bg-[#90CECA] inline-block"
                    aria-hidden="true"
                  />
                )}
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right — full photo, all specialists visible */}
      <div className="hidden lg:block flex-1 relative">
        <img
          src="/hero.jpg"
          alt="ReaMed klinikos komanda"
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
      </div>

      {/* Mobile: photo below text */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
        <img
          src="/hero.jpg"
          alt="ReaMed klinikos komanda"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, #F7FAF9 0%, transparent 40%)",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
