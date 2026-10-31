"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getReviews,
  type ConditionSlug,
  type ServiceSlug,
  type SpecialistSlug,
} from "@/data/reviews";
import ReviewCard from "./ReviewCard";
import GoogleRating from "./GoogleRating";

/**
 * Reviews for one condition, service or specialist page.
 * Renders nothing until there are at least `min` matching reviews,
 * so pages fill in automatically as new reviews are tagged.
 */
export default function ReviewsBlock({
  condition,
  service,
  specialist,
  title,
  min = 2,
  initial = 4,
  className = "",
}: {
  condition?: ConditionSlug;
  service?: ServiceSlug;
  specialist?: SpecialistSlug;
  title?: string;
  min?: number;
  initial?: number;
  className?: string;
}) {
  const { lang } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const list = getReviews({ condition, service, specialist });
  if (list.length < min) return null;

  // On the English site, reviews written in English go first.
  const sorted =
    lang === "en"
      ? [...list].sort((a, b) => Number(b.lang === "en") - Number(a.lang === "en"))
      : list;
  const shown = showAll ? sorted : sorted.slice(0, initial);
  const headingId = `atsiliepimai-${condition ?? service ?? specialist}`;

  return (
    <section id="atsiliepimai" aria-labelledby={headingId} className={`scroll-mt-32 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 mb-6">
        <h2
          id={headingId}
          className="text-[1.625rem] md:text-[2rem] font-bold text-foreground leading-tight"
        >
          {title ?? (lang === "lt" ? "Pacientų atsiliepimai" : "Patient reviews")}
        </h2>
        <GoogleRating lang={lang} />
      </div>

      <div className="grid md:grid-cols-2 gap-4 md:gap-5 items-start">
        {shown.map((r) => (
          <ReviewCard key={r.id} review={r} lang={lang} showSpecialists={!specialist} />
        ))}
      </div>

      {!showAll && sorted.length > initial && (
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="inline-flex items-center px-5 py-3 border-2 border-[#DDE9E8] bg-white text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#437571] transition-colors duration-200"
          >
            {lang === "lt"
              ? `Rodyti visus atsiliepimus (${sorted.length})`
              : `Show all reviews (${sorted.length})`}
          </button>
        </div>
      )}
    </section>
  );
}
