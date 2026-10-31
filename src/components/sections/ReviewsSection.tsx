"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getReviews, GOOGLE_REVIEWS } from "@/data/reviews";
import ReviewCard from "@/components/reviews/ReviewCard";
import GoogleRating from "@/components/reviews/GoogleRating";

export default function ReviewsSection() {
  const { t, lang } = useLanguage();

  const featured = getReviews({ featured: true, limit: 6 });
  // English visitors see the reviews written in English first.
  const items =
    lang === "en" ? [...getReviews({ lang: "en" }), ...featured].slice(0, 6) : featured;

  return (
    <section
      id="atsiliepimai"
      className="section-padding scroll-mt-24"
      style={{ background: "#EEF5F4" }}
      aria-labelledby="reviews-title"
    >
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 md:mb-10">
          <div className="max-w-[500px]">
            <h2
              id="reviews-title"
              className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground mb-3"
            >
              {t.reviews.title}
            </h2>
            <p className="text-[1rem] text-muted leading-relaxed">{t.reviews.subtitle}</p>
          </div>
          <GoogleRating lang={lang} />
        </div>

        {/* Phone: one swipeable row. Desktop: 3 × 2 grid. */}
        <div className="-mx-6 px-6 scroll-px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 md:scroll-px-0 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:items-start">
          {items.map((r) => (
            <ReviewCard
              key={r.id}
              review={r}
              lang={lang}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-auto"
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={GOOGLE_REVIEWS.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border-2 border-[#DDE9E8] bg-white text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#437571] transition-colors duration-200"
          >
            {t.reviews.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
