"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function HeroVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[520px] flex items-center justify-center">
      <svg
        viewBox="0 0 560 520"
        className="w-full max-w-[520px] h-auto"
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large background circle */}
        <circle cx="280" cy="260" r="230" stroke="#EBF3FC" strokeWidth="1.5" />
        <circle cx="280" cy="260" r="180" stroke="#D6E8F9" strokeWidth="1" />

        {/* Main accent arc */}
        <path
          d="M 100 260 A 180 180 0 0 1 460 260"
          stroke="#1A56A0"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M 130 310 A 160 160 0 0 0 430 310"
          stroke="#3472BA"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="6 8"
          opacity="0.4"
        />

        {/* Central element */}
        <circle cx="280" cy="260" r="48" fill="#EBF3FC" />
        <circle cx="280" cy="260" r="36" fill="#D6E8F9" />
        <circle cx="280" cy="260" r="24" fill="#1A56A0" opacity="0.15" />
        <circle cx="280" cy="260" r="10" fill="#1A56A0" />

        {/* Spine/column - vertical element */}
        <line x1="280" y1="160" x2="280" y2="360" stroke="#1A56A0" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <circle cx="280" cy="175" r="5" fill="#1A56A0" opacity="0.5" />
        <circle cx="280" cy="200" r="5" fill="#1A56A0" opacity="0.5" />
        <circle cx="280" cy="225" r="5" fill="#1A56A0" opacity="0.5" />
        <circle cx="280" cy="295" r="5" fill="#1A56A0" opacity="0.5" />
        <circle cx="280" cy="320" r="5" fill="#1A56A0" opacity="0.5" />
        <circle cx="280" cy="345" r="5" fill="#1A56A0" opacity="0.5" />

        {/* Shoulder arc left */}
        <path
          d="M 180 230 C 200 190 240 175 280 175"
          stroke="#1A56A0"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Shoulder arc right */}
        <path
          d="M 380 230 C 360 190 320 175 280 175"
          stroke="#1A56A0"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Joint circles */}
        <circle cx="172" cy="240" r="14" stroke="#1A56A0" strokeWidth="2" fill="white" opacity="0.9" />
        <circle cx="172" cy="240" r="6" fill="#1A56A0" opacity="0.7" />

        <circle cx="388" cy="240" r="14" stroke="#1A56A0" strokeWidth="2" fill="white" opacity="0.9" />
        <circle cx="388" cy="240" r="6" fill="#1A56A0" opacity="0.7" />

        <circle cx="280" cy="360" r="14" stroke="#1A56A0" strokeWidth="2" fill="white" opacity="0.9" />
        <circle cx="280" cy="360" r="6" fill="#1A56A0" opacity="0.7" />

        {/* Movement vectors - arms */}
        <line x1="158" y1="254" x2="120" y2="300" stroke="#3472BA" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="402" y1="254" x2="440" y2="300" stroke="#3472BA" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

        {/* Leg vectors */}
        <line x1="280" y1="374" x2="240" y2="430" stroke="#3472BA" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="280" y1="374" x2="320" y2="430" stroke="#3472BA" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

        {/* Knee joints */}
        <circle cx="234" cy="436" r="8" stroke="#1A56A0" strokeWidth="1.5" fill="white" opacity="0.7" />
        <circle cx="326" cy="436" r="8" stroke="#1A56A0" strokeWidth="1.5" fill="white" opacity="0.7" />

        {/* Decorative dots top right */}
        <circle cx="450" cy="100" r="3" fill="#1A56A0" opacity="0.2" />
        <circle cx="470" cy="120" r="2" fill="#1A56A0" opacity="0.15" />
        <circle cx="430" cy="130" r="2.5" fill="#1A56A0" opacity="0.15" />
        <circle cx="490" cy="150" r="2" fill="#3472BA" opacity="0.12" />
        <circle cx="460" cy="160" r="3" fill="#1A56A0" opacity="0.1" />

        {/* Decorative dots bottom left */}
        <circle cx="80" cy="380" r="3" fill="#1A56A0" opacity="0.2" />
        <circle cx="60" cy="400" r="2" fill="#1A56A0" opacity="0.15" />
        <circle cx="100" cy="410" r="2.5" fill="#1A56A0" opacity="0.15" />

        {/* Small cross / medical marker */}
        <line x1="470" y1="195" x2="470" y2="215" stroke="#1A56A0" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
        <line x1="460" y1="205" x2="480" y2="205" stroke="#1A56A0" strokeWidth="2" strokeLinecap="round" opacity="0.3" />

        {/* Outer accent arc */}
        <path
          d="M 60 260 A 220 220 0 0 1 500 260"
          stroke="#3472BA"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 12"
          opacity="0.2"
        />
      </svg>

      {/* Floating stat cards */}
      <div className="absolute top-6 right-4 md:right-0 bg-white rounded-xl shadow-[0_4px_24px_rgba(13,27,46,0.1)] p-3 flex items-center gap-2.5 border border-border-light">
        <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2L9.6 6.4H14L10.7 8.9L12 13.4L8 10.8L4 13.4L5.3 8.9L2 6.4H6.4L8 2Z" fill="#1A56A0" />
          </svg>
        </div>
        <div>
          <p className="text-[0.7rem] text-muted leading-none mb-0.5">Klientų įvertinimas</p>
          <p className="text-[0.85rem] font-bold text-foreground">4.9 / 5.0</p>
        </div>
      </div>

      <div className="absolute bottom-10 left-4 md:left-0 bg-white rounded-xl shadow-[0_4px_24px_rgba(13,27,46,0.1)] p-3 flex items-center gap-2.5 border border-border-light">
        <div className="w-8 h-8 bg-brand-light rounded-lg flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="6" r="3" stroke="#1A56A0" strokeWidth="1.5" />
            <path d="M2 14C2 11.2 4.7 9 8 9C11.3 9 14 11.2 14 14" stroke="#1A56A0" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <p className="text-[0.7rem] text-muted leading-none mb-0.5">Patirtis</p>
          <p className="text-[0.85rem] font-bold text-foreground">10+ metų</p>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="relative pt-28 md:pt-32 pb-16 md:pb-24 bg-white overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, #EBF3FC 0%, transparent 70%)",
        }}
      />

      <div className="container-xl relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-[0.8125rem] font-semibold uppercase tracking-widest text-brand">
              {t.hero.tag}
            </p>

            <h1
              id="hero-title"
              className="text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold leading-[1.12] text-foreground mb-6"
            >
              {t.hero.title}
            </h1>

            <p className="text-[1.0625rem] text-secondary leading-relaxed mb-4 max-w-[540px]">
              {t.hero.subtitle}
            </p>

            <p className="text-[0.9375rem] text-muted leading-relaxed mb-8 max-w-[520px]">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#kontaktai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand text-white text-[0.9375rem] font-semibold rounded-xl hover:bg-brand-dark transition-all duration-200 shadow-[0_4px_16px_rgba(26,86,160,0.3)] hover:shadow-[0_6px_20px_rgba(26,86,160,0.4)] hover:-translate-y-0.5"
              >
                {t.hero.cta1}
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>
              <a
                href="#specialistai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-brand text-brand text-[0.9375rem] font-semibold rounded-xl hover:bg-brand-light transition-all duration-200"
              >
                {t.hero.cta2}
                <ChevronRight size={17} strokeWidth={2.5} />
              </a>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {t.hero.trustLine.map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-[0.8125rem] text-muted font-medium">
                  {i > 0 && (
                    <span className="w-1 h-1 rounded-full bg-border-light inline-block" aria-hidden="true" />
                  )}
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
