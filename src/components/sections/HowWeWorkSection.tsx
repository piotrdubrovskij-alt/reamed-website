"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function HowWeWorkSection() {
  const { t } = useLanguage();

  return (
    <section
      className="section-padding"
      style={{ background: "#EEF5F4" }}
      aria-labelledby="how-we-work-title"
    >
      <div className="container-xl">
        <div className="max-w-[640px] mb-12 md:mb-16">
          <h2
            id="how-we-work-title"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground mb-4"
          >
            {t.howWeWork.title}
          </h2>
          <p className="text-[1.0625rem] text-muted leading-relaxed">
            {t.howWeWork.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.howWeWork.steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < t.howWeWork.steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-[calc(100%+12px)] w-[calc(100%-24px)] h-px bg-[#DDE9E8] z-0"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#79B8B3] flex items-center justify-center text-white text-[1.1rem] font-bold shadow-[0_4px_16px_rgba(121,184,179,0.3)]">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-[1.0625rem] font-semibold text-foreground mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[0.9rem] text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
