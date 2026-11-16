"use client";

import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Replaces the old 01–04 "how we work" tiles.
export default function FirstVisitSection() {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="visit-h" className="bg-ground section-y">
      <div className="wrap grid gap-10 md:grid-cols-2 md:gap-[72px] md:items-center">
        <div className="flex flex-col gap-6">
          <h2 id="visit-h" className="text-h2">
            {t.visit.title}
          </h2>
          <p className="text-lead max-w-[36ch]">{t.visit.statement}</p>
          <p className="flex flex-wrap items-center gap-x-3 text-h3-m md:text-h3 font-medium tracking-[-0.02em]">
            {t.visit.facts.map((fact, i) => (
              <Fragment key={fact}>
                {i > 0 && <span aria-hidden="true" className="size-1.5 rounded-full bg-mint" />}
                <span className="whitespace-nowrap">{fact}</span>
              </Fragment>
            ))}
          </p>
          {/* A modest offer line (Piotr, 07.11.2026): packages make the next visits cheaper. Prices come from prices.ts. */}
          <p className="self-start flex items-start gap-2.5 rounded-[20px] bg-mint-light px-4 py-3 text-small text-ink max-w-[44ch]">
            <Tag size={18} aria-hidden="true" className="shrink-0 mt-[3px]" />
            <span>{t.visit.offer}</span>
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-x-7 gap-y-3.5">
            <Link href="/rezervacija" className="btn btn-dark text-body">
              {t.visit.cta}
            </Link>
            <Link href="/kainos" className="link-action inline-flex items-center min-h-11">
              {t.visit.prices}
            </Link>
          </div>
        </div>
        {/* The manual therapy room (square photo, 15.11.2026), whole and as it is: a square with 20/24px
            corners instead of the old circle, full column width on the phone, up to 520px on the desktop.
            The blurred, mint-toned clinic.jpg that stood here was low quality. */}
        <div className="relative w-full aspect-square rounded-[20px] desk:rounded-[24px] overflow-hidden bg-ground-hover md:max-w-[520px] md:justify-self-end">
          <Image
            src="/photos/manual-therapy-room.jpg"
            alt={t.visit.photoAlt}
            fill
            quality={90}
            sizes="(min-width: 768px) 520px, calc(100vw - 40px)"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
