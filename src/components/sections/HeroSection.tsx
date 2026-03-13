"use client";

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
      {/* Full photo — bottom trimmed to hide watermark */}
      <div className="w-full overflow-hidden">
        <img
          src="/hero.jpg"
          alt="ReaMed klinikos komanda"
          className="w-full h-auto block"
          style={{ marginBottom: "-6%", filter: "blur(1.5px) brightness(1.03) saturate(0.9)" }}
        />
      </div>

      {/* Overlay for text — covers left portion */}
      <div
        className="absolute inset-0 flex items-center"
        style={{
          background:
            "linear-gradient(100deg, rgba(247,250,249,0.95) 0%, rgba(247,250,249,0.88) 28%, rgba(247,250,249,0.5) 50%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Text content — starts below header (104px) */}
      <div className="absolute left-0 right-0 bottom-0 flex items-center" style={{ top: "104px" }}>
        <div className="container-xl w-full">
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

            <p className="text-[0.9375rem] text-secondary leading-relaxed mb-3 max-w-[540px]">
              {t.hero.subtitle}
            </p>

            <p className="text-[0.9rem] text-muted leading-relaxed mb-7 max-w-[440px]">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="#kontaktai"
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
                <>
                  {/* Force line break after 3rd item (Osteopatija) */}
                  {i === 3 && <div key="break" className="w-full h-0" />}
                  <span
                    key={i}
                    className="flex items-center gap-2 text-[0.78rem] text-muted font-medium"
                  >
                  {i > 0 && i !== 3 && (
                    <span
                      className="w-1 h-1 rounded-full bg-[#90CECA] inline-block"
                      aria-hidden="true"
                    />
                  )}
                    {item}
                  </span>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
