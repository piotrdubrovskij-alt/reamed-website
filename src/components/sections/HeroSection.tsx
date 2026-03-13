"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-[580px] md:min-h-[680px] lg:min-h-[720px] flex items-center overflow-hidden"
      style={{ paddingTop: "104px" }}
      aria-labelledby="hero-title"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Left gradient overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(247,250,249,0.97) 0%, rgba(247,250,249,0.93) 30%, rgba(247,250,249,0.7) 55%, rgba(247,250,249,0.0) 80%)",
          }}
          aria-hidden="true"
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "linear-gradient(to bottom, transparent, #F7FAF9)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="container-xl relative z-10 py-16 md:py-20">
        <div className="max-w-[580px]">
          <p className="mb-4 text-[0.8125rem] font-semibold uppercase tracking-widest text-[#7DB9B5]">
            {t.hero.tag}
          </p>

          <h1
            id="hero-title"
            className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.1] text-foreground mb-5"
          >
            {t.hero.title}
          </h1>

          <p className="text-[1.0625rem] text-secondary leading-relaxed mb-4 max-w-[500px]">
            {t.hero.subtitle}
          </p>

          <p className="text-[0.9375rem] text-muted leading-relaxed mb-8 max-w-[480px]">
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
    </section>
  );
}
