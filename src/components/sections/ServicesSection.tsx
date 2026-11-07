"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Services as big buttons on a mint band (Piotr, 07.11.2026: the plain list read as weak, most visits come from phones).
// Brand pair the other way round: graphite buttons on mint, white title, mint arrow. The band sits between
// «Pirmasis vizitas» (ground) and the team (graphite). No shadows or lines: background change only.
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
        <ul className="grid gap-2.5 md:grid-cols-2 desk:grid-cols-3 md:gap-3">
          {t.services.items.map((s) => (
            <li key={s.slug} className="flex">
              <Link
                href={`/paslaugos/${s.slug}`}
                className="group flex w-full items-center justify-between gap-4 min-h-[76px] rounded-[28px] bg-graphite px-6 py-4 text-white no-underline transition-colors duration-200 hover:bg-ink motion-reduce:transition-none desk:min-h-[112px] desk:px-7 desk:py-6"
              >
                <span className="flex flex-col gap-1">
                  <span className="text-body font-medium desk:text-lead">{s.title}</span>
                  <span className="text-small text-on-dark">{s.text}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="grid place-items-center shrink-0 size-10 rounded-full bg-mint text-ink transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
                >
                  <ArrowRight size={20} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
