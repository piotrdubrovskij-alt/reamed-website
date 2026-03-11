"use client";

import { Dumbbell, ArrowUpRight, SplineIcon, Activity } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const directionIcons = [
  <Dumbbell size={26} strokeWidth={1.6} />,
  <Activity size={26} strokeWidth={1.6} />,
  <SplineIcon size={26} strokeWidth={1.6} />,
];

const directionAccents = ["#1A56A0", "#2E6BB8", "#3472BA"];

export default function MainDirectionsSection() {
  const { t } = useLanguage();

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="directions-title"
    >
      <div className="container-xl">
        <div className="mb-10 md:mb-14">
          <h2
            id="directions-title"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground"
          >
            {t.mainDirections.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.mainDirections.items.map((item, i) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl border border-border p-8 hover:border-brand hover:shadow-[0_8px_32px_rgba(26,86,160,0.12)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Background accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: directionAccents[i] }}
                aria-hidden="true"
              />

              <div
                className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-colors duration-300"
              >
                {directionIcons[i]}
              </div>

              <h3 className="text-[1.125rem] font-semibold text-foreground mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-[0.9rem] text-muted leading-relaxed mb-6">
                {item.description}
              </p>

              <a
                href="#kontaktai"
                className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-brand hover:gap-2 transition-all duration-200"
                aria-label={`Registruotis: ${item.title}`}
              >
                Registruotis
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
