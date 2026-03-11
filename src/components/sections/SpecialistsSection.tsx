"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function SpecialistsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="specialistai"
      className="section-padding bg-white"
      aria-labelledby="specialists-title"
    >
      <div className="container-xl">
        <div className="max-w-[620px] mb-10 md:mb-14">
          <h2
            id="specialists-title"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground mb-4"
          >
            {t.specialists.title}
          </h2>
          <p className="text-[1rem] text-muted leading-relaxed">
            {t.specialists.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-8">
          {t.specialists.items.map((spec) => (
            <div
              key={spec.name}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:border-brand hover:shadow-[0_8px_32px_rgba(26,86,160,0.1)] transition-all duration-300"
            >
              {/* Avatar area */}
              <div className="h-[160px] bg-gradient-to-br from-brand-light to-[#D6E8F9] flex items-center justify-center relative overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-white shadow-[0_4px_16px_rgba(26,86,160,0.15)] flex items-center justify-center">
                  <span className="text-[1.375rem] font-bold text-brand">
                    {spec.initials}
                  </span>
                </div>
                {/* Decorative circles */}
                <div
                  className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-brand/10"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-8 -left-4 w-20 h-20 rounded-full border border-brand/10"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[1rem] font-bold text-foreground mb-1 leading-snug">
                  {spec.name}
                </h3>
                <p className="text-[0.8125rem] font-medium text-brand mb-3 leading-snug">
                  {spec.role}
                </p>
                <p className="text-[0.8125rem] text-muted leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#kontaktai"
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-brand text-brand text-[0.875rem] font-semibold rounded-xl hover:bg-brand-light transition-colors duration-200"
        >
          {t.specialists.cta} →
        </a>
      </div>
    </section>
  );
}
