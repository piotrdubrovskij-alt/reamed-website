"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { formatRating } from "@/components/reviews/format";

// White hands from the logo, decoration only (viewBox 100 × 66.14).
function Hands({ className }: { className: string }) {
  return (
    <Image
      src="/brand/reamed-hands-white.svg"
      alt=""
      aria-hidden="true"
      width={100}
      height={66}
      className={`absolute h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none ${className}`}
    />
  );
}

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
          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link href="/registracija" className="btn btn-dark text-body w-full sm:w-auto">
              {t.hero.cta}
            </Link>
            <a
              href={GOOGLE_REVIEWS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-11 text-small text-graphite hover:text-ink"
            >
              <Star size={18} className="fill-current" aria-hidden="true" />
              <span>
                <b className="font-semibold text-ink">{formatRating(GOOGLE_REVIEWS.rating, lang)}</b> Google
              </span>
            </a>
          </div>
        </div>

        {/* Mint circle. Phone: 120vw, only its top 78vw shows above the section's
            bottom edge. Desktop: left edge at the container middle + 24px; at least
            1040px (taller than the 780px screen) and always wider than what is left
            of the viewport, so the right edge cuts it. */}
        <div className="relative mt-12 -ml-[10vw] -mb-[42vw] size-[120vw] rounded-full overflow-hidden bg-mint desk:absolute desk:m-0 desk:left-[calc(50%+24px)] desk:-top-[90px] desk:size-[max(1040px,calc(50vw+120px))]">
          {/* Phone: centred on the screen, 39vw below the circle's top, 60vw wide. */}
          <Hands className="desk:hidden top-[39vw] w-[60vw] left-[calc(60vw-var(--spacing-gutter))] md:left-[calc(60vw-var(--spacing-gutter-md))]" />
        </div>
      </div>

      {/* Desktop: centred in the visible part of the circle (container middle + 24px
          to the screen's right edge, full 780px height); 60% of its width, max 520px. */}
      <Hands className="hidden desk:block top-1/2 left-[calc(75%+12px)] w-[min(calc((50%_-_24px)_*_0.6),520px)]" />
    </section>
  );
}
