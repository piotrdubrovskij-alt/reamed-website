"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { SpecialistSlug } from "@/data/reviews";
import { SPECIALIST_NAMES, specialistPhoto } from "@/components/reviews/format";

export default function SpecialistsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="specialistai"
      aria-labelledby="team-h"
      className="bg-graphite text-white section-y [&_:focus-visible]:outline-mint"
    >
      <div className="wrap">
        <div className="grid gap-10 mb-14 md:grid-cols-[7fr_5fr] md:gap-[72px] md:items-end md:mb-18">
          <h2 id="team-h" className="text-h2 text-mint max-w-[14ch] text-balance">
            {t.team.title}
          </h2>
          <p className="text-lead text-on-dark">{t.team.lead}</p>
        </div>
        <ul className="grid grid-cols-2 gap-x-3.5 gap-y-7 md:grid-cols-4 md:gap-6">
          {t.team.people.map((p) => {
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
                <p className="mt-1.5 text-small text-on-dark">{p.fact}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
