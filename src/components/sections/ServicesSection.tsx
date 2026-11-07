"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import ServiceButtons from "@/components/ServiceButtons";

// Services as big buttons on a mint band (Piotr, 07.11.2026). Brand pair the other way round: graphite buttons
// on mint, white title, mint arrow. The band sits between «Pirmasis vizitas» (ground) and the team (graphite).
// No shadows or lines: background change only. /paslaugos shows the same buttons.
export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="paslaugos"
      aria-labelledby="services-h"
      className="bg-mint text-ink section-y [--focus-ring:var(--color-ink)]"
    >
      <div className="wrap">
        <h2 id="services-h" className="text-h2 max-w-[24ch] text-balance mb-8 md:mb-12">
          {t.services.title}
        </h2>
        <ServiceButtons items={t.services.items} />
      </div>
    </section>
  );
}
