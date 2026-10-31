"use client";

import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "104px" }}
      aria-labelledby="hero-title"
    >
      {/* Overlay for text — covers left portion (text overlays the photo from md up only).
          Explicit z-index: the photo's blur filter below gives it its own stacking context,
          which would otherwise paint above these siblings once the photo moved later in the DOM. */}
      <div
        className="hidden md:block md:absolute md:inset-0 md:z-10"
        style={{
          background:
            "linear-gradient(100deg, rgba(247,250,249,0.95) 0%, rgba(247,250,249,0.88) 28%, rgba(247,250,249,0.5) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Text content — normal flow under the header on mobile; overlaid on the photo from md up */}
      <div className="relative md:absolute md:left-0 md:right-0 md:bottom-0 md:top-[104px] md:z-10 md:flex md:items-center">
        <div className="container-xl w-full py-8 md:py-0">
          <div className="max-w-[520px]">
            <p className="mb-3 text-[0.8125rem] font-semibold uppercase tracking-widest text-[#7DB9B5]">
              {t.hero.tag}
            </p>

            <h1
              id="hero-title"
              className="text-[1.7rem] sm:text-[2rem] lg:text-[2.4rem] font-bold leading-[1.15] text-foreground mb-4"
            >
              {t.hero.title}
            </h1>

            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-7 max-w-[480px]">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <a
                href="/registracija"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.32)] hover:-translate-y-0.5"
              >
                {t.hero.cta1}
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="#specialistai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#90CECA] text-foreground text-[0.9rem] font-semibold rounded-xl hover:bg-[#EEF5F4] transition-all duration-200"
              >
                {t.hero.cta2}
                <ChevronRight size={16} strokeWidth={2.5} />
              </a>
            </div>


            {/* Trust line */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {t.hero.trustLine.map((item, i) => (
                <React.Fragment key={i}>
                  {i === 3 && <div className="w-full h-0" aria-hidden="true" />}
                  <span className="flex items-center gap-2 text-[0.78rem] text-muted font-medium">
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
      </div>

      {/* Full photo — bottom trimmed to hide watermark */}
      <div className="w-full overflow-hidden">
        <img
          src="/hero.jpg"
          alt="ReaMed klinikos komanda"
          className="w-full h-auto block"
          style={{ marginBottom: "-6%", filter: "blur(1.5px) brightness(1.03) saturate(0.9)" }}
        />
      </div>
    </section>
  );
}
