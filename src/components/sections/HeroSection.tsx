"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { formatRating } from "@/components/reviews/format";

// First screen (Piotr, 15.11.2026): text and the team photo, nothing else. No mint circle, no mint band,
// no card: the photo keeps its own studio grey and straight edges, whole, never cropped (3:2).
// Phone: title, lead, button with the rating, then the photo edge to edge; the next section follows it directly.
// Desktop: two columns, 45% text and 55% photo; the photo fills its column, the text is centred against it,
// and the screen's height follows the photo.
export default function HeroSection() {
  const { lang, t } = useLanguage();

  return (
    <section aria-labelledby="hero-h" className="bg-ground">
      <div className="wrap desk:grid desk:grid-cols-[45fr_55fr] desk:items-center desk:gap-10 lg:gap-16 desk:py-12">
        <div className="flex flex-col gap-[18px] pt-6 desk:gap-7 desk:pt-0">
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

        {/* Phone: the negative margins undo the page gutters, so the photo runs edge to edge. */}
        <div className="mt-6 -mx-gutter md:-mx-gutter-md desk:mx-0 desk:mt-0">
          <Image
            src="/photos/team.jpg"
            alt={t.hero.photoAlt}
            width={3072}
            height={2048}
            priority
            quality={90}
            sizes="(min-width: 1440px) 686px, (min-width: 821px) 55vw, 100vw"
            className="block w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
