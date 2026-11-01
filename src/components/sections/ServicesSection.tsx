"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

// Services as plain text on paper: no cards, frames or icons.
export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="paslaugos" aria-labelledby="services-h" className="bg-paper section-y">
      <div className="wrap">
        <h2 id="services-h" className="text-h2 max-w-[24ch] text-balance mb-10 md:mb-14">
          {t.services.title}
        </h2>
        <ul className="grid gap-8 md:grid-cols-2 desk:grid-cols-3 md:gap-x-[72px] md:gap-y-12">
          {t.services.items.map((s) => (
            <li key={s.slug}>
              <Link href={`/paslaugos/${s.slug}`} className="link-action inline-flex items-center min-h-11 text-lead">
                {s.title}
              </Link>
              <p className="mt-1.5 text-graphite max-w-[36ch]">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
