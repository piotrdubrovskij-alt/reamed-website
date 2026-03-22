"use client";

import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const conditionLinkMap: Record<string, string> = {
  // Lithuanian
  "Nugaros skausmas": "/ka-gydome/nugaros-skausmas",
  "Kaklo skausmas": "/ka-gydome/kaklo-skausmas",
  "Peties problemos": "/ka-gydome/peties-problemos",
  "Kelio skausmas ir traumos": "/ka-gydome/kelio-skausmas",
  "Sporto traumos": "/ka-gydome/sporto-traumos",
  "Atsistatymas po operacijų": "/ka-gydome/atsistatymas-po-operaciju",
  "Plintantis skausmas ir tirpimas": "/ka-gydome/plintantis-skausmas",
  "Tendinopatijos ir perkrovos": "/ka-gydome/tendinopatijos",
  // English
  "Back pain": "/ka-gydome/nugaros-skausmas",
  "Neck pain": "/ka-gydome/kaklo-skausmas",
  "Shoulder problems": "/ka-gydome/peties-problemos",
  "Knee pain & injuries": "/ka-gydome/kelio-skausmas",
  "Sports injuries": "/ka-gydome/sporto-traumos",
  "Post-operative recovery": "/ka-gydome/atsistatymas-po-operaciju",
  "Radiating pain & numbness": "/ka-gydome/plintantis-skausmas",
  "Tendinopathies & overuse": "/ka-gydome/tendinopatijos",
};

export default function WhatWeTreatSection() {
  const { t } = useLanguage();

  return (
    <section
      id="ka-gydome"
      className="section-padding"
      style={{ background: "#EEF5F4" }}
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
              href={conditionLinkMap[item.title] ?? "#kontaktai"}
              className="group bg-white rounded-2xl border border-[#DDE9E8] p-5 hover:border-[#90CECA] hover:shadow-[0_6px_24px_rgba(144,206,202,0.12)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-[0.9375rem] font-semibold text-foreground group-hover:text-[#68A7A2] transition-colors duration-200 leading-snug">
                  {item.title}
                </h3>
                <ChevronRight
                  size={16}
                  className="text-[#DDE9E8] group-hover:text-[#90CECA] transition-colors duration-200 flex-shrink-0 ml-2"
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
