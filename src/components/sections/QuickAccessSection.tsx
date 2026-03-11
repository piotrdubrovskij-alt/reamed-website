"use client";

import {
  Activity,
  PersonStanding,
  Dumbbell,
  Stethoscope,
  MoveHorizontal,
  Circle,
  Zap,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const iconMap: Record<string, React.ReactNode> = {
  spine: <Activity size={22} strokeWidth={1.8} />,
  neck: <PersonStanding size={22} strokeWidth={1.8} />,
  sport: <Dumbbell size={22} strokeWidth={1.8} />,
  recovery: <Stethoscope size={22} strokeWidth={1.8} />,
  shoulder: <MoveHorizontal size={22} strokeWidth={1.8} />,
  knee: <Circle size={22} strokeWidth={1.8} />,
  nerve: <Zap size={22} strokeWidth={1.8} />,
  tendon: <Layers size={22} strokeWidth={1.8} />,
};

export default function QuickAccessSection() {
  const { t } = useLanguage();

  return (
    <section
      id="ka-gydome"
      className="section-padding bg-surface"
      aria-labelledby="quick-access-title"
    >
      <div className="container-xl">
        <div className="text-center mb-10 md:mb-12">
          <h2
            id="quick-access-title"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground"
          >
            {t.quickAccess.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
          {t.quickAccess.items.map((item) => (
            <a
              key={item.label}
              href="#kontaktai"
              className="group flex items-center gap-3 bg-white rounded-xl px-4 py-4 border border-border hover:border-brand hover:shadow-[0_4px_20px_rgba(26,86,160,0.1)] transition-all duration-200 hover:-translate-y-0.5"
              aria-label={item.label}
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-brand-light flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-200">
                {iconMap[item.icon]}
              </span>
              <span className="text-[0.875rem] font-medium text-secondary group-hover:text-foreground transition-colors duration-200 leading-snug">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-[0.9rem] text-muted max-w-[560px] mx-auto leading-relaxed">
          {t.quickAccess.note}
        </p>
      </div>
    </section>
  );
}
