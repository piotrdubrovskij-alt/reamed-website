"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="paslaugos"
      className="section-padding bg-white"
      aria-labelledby="services-title"
    >
      <div className="container-xl">
        <div className="mb-10 md:mb-12">
          <h2
            id="services-title"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground"
          >
            {t.services.title}
          </h2>
        </div>

        {/* 3×2 desktop, 2×3 tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {t.services.items.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl border border-[#DDE9E8] p-6 hover:border-[#90CECA] hover:shadow-[0_6px_28px_rgba(144,206,202,0.12)] transition-all duration-200 hover:-translate-y-0.5 flex flex-col"
            >
              <h3 className="text-[1rem] font-semibold text-foreground mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-[0.875rem] text-muted leading-relaxed flex-1 mb-5">
                {service.description}
              </p>
              <a
                href="#kontaktai"
                className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] hover:gap-2 transition-all duration-200"
              >
                Sužinoti daugiau
                <ArrowRight size={14} strokeWidth={2.5} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
