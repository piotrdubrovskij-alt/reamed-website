"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { formatRating } from "@/components/reviews/format";

export default function HeroSection() {
  const { lang, t } = useLanguage();

  return (
    <section aria-labelledby="hero-h" className="relative overflow-hidden bg-ground desk:h-[640px]">
      <div className="wrap relative h-full">
        {/* Desktop: text stays in the left half of the container, 48px short of the middle. */}
        <div className="relative z-10 flex flex-col gap-[18px] pt-6 desk:gap-7 desk:pt-24 desk:max-w-[calc(50%-48px)]">
          <h1 id="hero-h" className="text-h1-m desk:text-h1 text-balance">
            {t.hero.title}
          </h1>
          <p className="text-lead-m desk:text-lead">{t.hero.lead}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 desk:gap-x-7">
            <Link href="/registracija" className="btn btn-dark text-body">
              {t.hero.cta}
            </Link>
            <a
              href={GOOGLE_REVIEWS.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 min-h-11 text-small text-graphite hover:text-ink"
            >
              <Star size={18} className="fill-current" aria-hidden="true" />
              <span>
                <b className="font-semibold text-ink">{formatRating(GOOGLE_REVIEWS.rating, lang)}</b> Google
              </span>
            </a>
          </div>
        </div>

        {/* Desktop: mint circle, left edge at the container middle + 24px; at least
            1040px (taller than the 640px screen) and always wider than what is left
            of the viewport, so the right edge cuts it. */}
        <div className="hidden desk:block absolute left-[calc(50%+24px)] -top-[160px] size-[max(1040px,calc(50vw+120px))] rounded-full bg-mint" />
      </div>

      {/* The team photo (3:2, whole, never cropped), replacing the white hands (15.11.2026).
          Phone: a rounded card inside the gutters, standing on a mint shelf that starts at 40% of its
          height and runs 40px below it, edge to edge, and closes the first screen.
          Desktop: the same card inside the visible part of the circle (container middle + 24px to the
          screen's right edge), centred 24px right of that part's middle, 76% of its width, max 640px:
          at 1280–1920px the mint margin around the card stays at least 48px on every side. */}
      <div className="relative mt-6 desk:mt-0 desk:absolute desk:top-1/2 desk:left-[calc(75%+24px)] desk:-translate-x-1/2 desk:-translate-y-1/2 desk:w-[min(calc((50%_-_24px)_*_0.76),640px)]">
        <div aria-hidden="true" className="desk:hidden absolute inset-x-0 top-[40%] bottom-0 bg-mint" />
        <div className="relative px-gutter pb-10 md:px-gutter-md desk:p-0">
          <Image
            src="/photos/team.jpg"
            alt={t.hero.photoAlt}
            width={1536}
            height={1024}
            priority
            sizes="(min-width: 821px) min(calc((50vw - 24px) * 0.76), 640px), calc(100vw - 40px)"
            className="w-full h-auto rounded-[24px] desk:rounded-[28px]"
          />
        </div>
      </div>
    </section>
  );
}
