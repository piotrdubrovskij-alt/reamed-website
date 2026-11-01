"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { formatRating, reviewsCountLabel } from "@/components/reviews/format";

export default function HeroSection() {
  const { lang, t } = useLanguage();

  return (
    <section aria-labelledby="hero-h" className="relative overflow-hidden bg-ground lg:h-[780px]">
      <div className="wrap relative h-full">
        <div className="relative z-10 flex flex-col gap-[22px] pt-10 lg:gap-7 lg:pt-30 lg:max-w-[640px]">
          <h1 id="hero-h" className="text-h1-m lg:text-h1 text-balance">
            {t.hero.title}
          </h1>
          <p className="text-lead">{t.hero.lead}</p>
          <p className="flex flex-wrap gap-x-[18px] gap-y-1.5 text-body">
            <span>{t.hero.priceLabel}</span>
            <span className="font-semibold">{t.hero.price}</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/registracija" className="btn btn-dark text-body w-full sm:w-auto">
              {t.hero.cta}
            </Link>
            <a href="#atsiliepimai" className="inline-flex items-center gap-2 min-h-11 text-small text-graphite">
              <Star size={18} className="fill-current" aria-hidden="true" />
              <span>
                <b className="font-semibold text-ink">{formatRating(GOOGLE_REVIEWS.rating, lang)}</b>
                {" · "}
                {reviewsCountLabel(GOOGLE_REVIEWS.count, lang, { quoted: false })}
              </span>
            </a>
          </div>
        </div>

        {/* Phone: full-bleed circle cut by the section's bottom edge.
            Desktop: 1040px circle cut by the right edge. */}
        <div className="relative mt-12 -ml-[10vw] -mb-[42vw] size-[120vw] rounded-full overflow-hidden bg-graphite/15 lg:absolute lg:m-0 lg:size-[1040px] lg:-right-[300px] lg:-top-[90px]">
          <Image
            src="/photos/clinic.jpg"
            alt={t.hero.photoAlt}
            fill
            priority
            sizes="(min-width: 1024px) 1040px, 120vw"
            className="object-cover object-[63%_50%]"
          />
        </div>
      </div>
    </section>
  );
}
