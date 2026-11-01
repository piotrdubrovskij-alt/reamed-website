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
        {/* The photo is low quality: toned into the mint and blurred. It overhangs the
            circle by 16px so the blurred edge never shows as a light rim. */}
        <div className="relative isolate w-full aspect-square rounded-full overflow-hidden bg-mint md:max-w-[560px] md:justify-self-end">
          <div className="absolute -inset-4">
            <Image
              src="/photos/clinic.jpg"
              alt={t.visit.photoAlt}
              fill
              sizes="(min-width: 768px) 592px, calc(100vw + 32px)"
              className="object-cover object-[100%_50%] mix-blend-multiply [filter:grayscale(1)_contrast(.85)_brightness(1.15)_blur(4px)] desk:[filter:grayscale(1)_contrast(.85)_brightness(1.15)_blur(6px)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
