"use client";

import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhatWeTreatSection() {
  const { t } = useLanguage();

  return (
    <section
      className="section-padding bg-surface"
      aria-labelledby="what-we-treat-title"
    >
      <div className="container-xl">
        <div className="mb-10 md:mb-12">
          <h2
            id="what-we-treat-title"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground"
          >
            {t.whatWeTreat.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {t.whatWeTreat.items.map((item) => (
            <a
              key={item.title}
              href="#kontaktai"
              className="group bg-white rounded-2xl border border-border p-5 hover:border-brand hover:shadow-[0_6px_24px_rgba(26,86,160,0.1)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-[0.9375rem] font-semibold text-foreground group-hover:text-brand transition-colors duration-200 leading-snug">
                  {item.title}
                </h3>
                <ChevronRight
                  size={16}
                  className="text-border group-hover:text-brand transition-colors duration-200 flex-shrink-0 ml-2"
                  strokeWidth={2}
                />
              </div>
              <p className="text-[0.8125rem] text-muted leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>

        <p className="text-[0.9rem] text-muted max-w-[560px] leading-relaxed">
          {t.whatWeTreat.note}
        </p>
      </div>
    </section>
  );
}
