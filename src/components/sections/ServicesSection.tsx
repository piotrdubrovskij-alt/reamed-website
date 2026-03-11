"use client";

import {
  Activity,
  HandMetal,
  Stethoscope,
  Dumbbell,
  ClipboardList,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = [
  <Activity size={22} strokeWidth={1.7} />,
  <HandMetal size={22} strokeWidth={1.7} />,
  <Stethoscope size={22} strokeWidth={1.7} />,
  <Dumbbell size={22} strokeWidth={1.7} />,
  <ClipboardList size={22} strokeWidth={1.7} />,
];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="paslaugos"
      className="section-padding bg-white"
      aria-labelledby="services-title"
    >
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-12">
          <h2
            id="services-title"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground"
          >
            {t.services.title}
          </h2>
          <a
            href="#kontaktai"
            className="text-[0.9rem] font-semibold text-brand hover:text-brand-dark flex items-center gap-1.5 transition-colors duration-200 flex-shrink-0"
          >
            {t.services.cta} →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {t.services.items.map((service, i) => (
            <div
              key={service.title}
              className={`group bg-white rounded-2xl border border-border p-6 hover:border-brand hover:shadow-[0_6px_28px_rgba(26,86,160,0.1)] transition-all duration-200 hover:-translate-y-0.5 ${
                i === t.services.items.length - 1 &&
                t.services.items.length % 3 !== 0
                  ? "sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-200 mt-0.5">
                  {serviceIcons[i]}
                </div>
                <div>
                  <h3 className="text-[1rem] font-semibold text-foreground mb-1.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[0.875rem] text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
