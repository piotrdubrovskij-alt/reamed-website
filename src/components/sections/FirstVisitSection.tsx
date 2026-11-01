"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

// Replaces the old 01–04 "how we work" tiles.
export default function FirstVisitSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="visit-h" className="bg-ground section-y">
      <div className="wrap grid gap-10 md:grid-cols-2 md:gap-[72px] md:items-center">
        <div className="flex flex-col gap-8">
          <h2 id="visit-h" className="text-h2">
            {t.visit.title}
          </h2>
          <p className="text-h3-m md:text-h3 md:leading-[1.25] md:max-w-[24ch]">{t.visit.statement}</p>
          <p className="flex flex-wrap items-center gap-x-3 text-h3-m md:text-h3 font-medium tracking-[-0.02em]">
            {t.visit.facts.map((fact, i) => (
              <Fragment key={fact}>
                {i > 0 && <span aria-hidden="true" className="size-1.5 rounded-full bg-mint" />}
                <span className="whitespace-nowrap">{fact}</span>
              </Fragment>
            ))}
          </p>
          <p>
            <Link href="/kainos" className="link-action inline-flex items-center min-h-11">
              {t.visit.prices}
            </Link>
          </p>
        </div>
        <div className="relative w-full aspect-square rounded-full overflow-hidden bg-graphite/15 md:max-w-[560px] md:justify-self-end">
          <Image
            src="/photos/clinic.jpg"
            alt={t.visit.photoAlt}
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover object-[100%_50%]"
          />
        </div>
      </div>
    </section>
  );
}
