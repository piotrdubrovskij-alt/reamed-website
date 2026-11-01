"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { specialists } from "@/lib/specialists";
import type { SpecialistSlug } from "@/data/reviews";
import { SPECIALIST_NAMES, specialistPhoto } from "@/components/reviews/format";

export default function SpecialistsSection() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="specialistai"
      aria-labelledby="team-h"
      className="bg-graphite text-white section-y [&_:focus-visible]:outline-mint"
    >
      <div className="wrap">
        <div className="mb-10 md:mb-14">
          <h2 id="team-h" className="text-h2 text-mint text-balance">
            {t.team.title}
          </h2>
          <p className="mt-4 text-lead text-on-dark max-w-[46ch]">{t.team.lead}</p>
        </div>
        <ul className="grid grid-cols-2 gap-x-3.5 gap-y-7 md:grid-cols-4 md:gap-6">
          {specialists.map((p) => {
            const slug = p.slug as SpecialistSlug;
            return (
              <li key={slug}>
                <Link href={`/specialistai/${slug}`} className="group block">
                  <Image
                    src={specialistPhoto(slug)}
                    alt=""
                    width={640}
                    height={800}
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="w-full aspect-[4/5] object-cover rounded-t-full"
                  />
                  <span className="block mt-[18px] text-body md:text-lead font-medium group-hover:underline group-hover:decoration-mint group-hover:decoration-2 group-hover:underline-offset-[5px]">
                    {SPECIALIST_NAMES[slug]}
                  </span>
                </Link>
                <p className="mt-1.5 text-small text-on-dark">{lang === "en" ? p.taglineEn : p.tagline}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
