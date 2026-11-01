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
    <section aria-labelledby="hero-h" className="relative overflow-hidden bg-ground desk:h-[780px]">
      <div className="wrap relative h-full">
        {/* Desktop: text stays in the left half of the container, 48px short of the middle. */}
        <div className="relative z-10 flex flex-col gap-[22px] pt-10 desk:gap-7 desk:pt-30 desk:max-w-[calc(50%-48px)]">
          <h1 id="hero-h" className="text-h1-m desk:text-h1 text-balance">
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
            Desktop: left edge at the container middle + 24px; at least 1040px
            (taller than the 780px screen) and always wider than what is left
            of the viewport, so the right edge cuts it. Only its left part is
            visible there, so the frame moves right (73%) to keep the people in view. */}
        <div className="relative mt-12 -ml-[10vw] -mb-[42vw] size-[120vw] rounded-full overflow-hidden bg-graphite/15 desk:absolute desk:m-0 desk:left-[calc(50%+24px)] desk:-top-[90px] desk:size-[max(1040px,calc(50vw+120px))]">
          <Image
            src="/photos/clinic.jpg"
            alt={t.hero.photoAlt}
            fill
            priority
            sizes="(min-width: 821px) max(1040px, calc(50vw + 120px)), 120vw"
            className="object-cover object-[63%_50%] desk:object-[73%_50%]"
          />
        </div>
      </div>
    </section>
  );
}
