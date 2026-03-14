"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { GoogleReview } from "@/lib/google-reviews";

const TRUNCATE_LENGTH = 160;

function toInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase() + ".";
  // First name + last initial: "Aistė K."
  return parts[0] + " " + parts[parts.length - 1].charAt(0).toUpperCase() + ".";
}

function ReviewCard({ review, isCenter }: { review: GoogleReview; isCenter: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = review.text.length > TRUNCATE_LENGTH;
  const displayText = !expanded && needsTruncation
    ? review.text.slice(0, TRUNCATE_LENGTH).trimEnd() + "…"
    : review.text;

  return (
    <div
      className={`bg-white rounded-2xl border p-6 flex flex-col gap-4 transition-all duration-300
        ${isCenter
          ? "border-[#90CECA] shadow-[0_4px_24px_rgba(144,206,202,0.15)]"
          : "border-[#DDE9E8] shadow-[0_2px_12px_rgba(31,37,36,0.04)] opacity-60 md:flex hidden"
        }`}
    >
      <div className="flex gap-1" aria-label={`${review.rating} žvaigždutės`}>
        {Array.from({ length: review.rating }).map((_, s) => (
          <Star key={s} size={14} className="text-amber-400 fill-amber-400" aria-hidden="true" />
        ))}
      </div>

      <blockquote className="flex-1">
        <p className="text-[0.9375rem] text-secondary leading-relaxed">
          <span className="text-[#90CECA] font-bold mr-0.5">&bdquo;</span>
          {displayText}
          <span className="text-[#90CECA] font-bold ml-0.5">&ldquo;</span>
        </p>
        {needsTruncation && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-2 text-[0.8rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200"
          >
            {expanded ? "Rodyti mažiau ↑" : "Skaityti daugiau ↓"}
          </button>
        )}
      </blockquote>

      <div className="flex items-center gap-3 pt-2 border-t border-[#EEF5F4]">
        <div className="w-8 h-8 rounded-full bg-[#EEF5F4] flex items-center justify-center flex-shrink-0 text-[0.75rem] font-bold text-[#7DB9B5]">
          {toInitials(review.author).charAt(0)}
        </div>
        <div>
          <p className="text-[0.8125rem] font-medium text-foreground leading-none">
            {toInitials(review.author)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection({
  reviews,
  reviewsUrl,
}: {
  reviews: GoogleReview[];
  reviewsUrl: string;
}) {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = reviews.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next, total]);

  const idx = (offset: number) => (current + offset + total) % total;

  return (
    <section
      className="section-padding"
      style={{ background: "#EEF5F4" }}
      aria-labelledby="reviews-title"
    >
      <div className="container-xl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12">
          <div className="max-w-[500px]">
            <h2
              id="reviews-title"
              className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground mb-3"
            >
              {t.reviews.title}
            </h2>
            <p className="text-[1rem] text-muted leading-relaxed">{t.reviews.subtitle}</p>
          </div>

          {/* Google badge */}
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 flex-shrink-0 bg-white border border-[#DDE9E8] rounded-xl px-4 py-2.5 shadow-[0_2px_8px_rgba(31,37,36,0.04)] hover:border-[#90CECA] hover:shadow-[0_4px_16px_rgba(144,206,202,0.12)] transition-all duration-200"
            aria-label="Peržiūrėti visus atsiliepimus Google"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} className="text-amber-400 fill-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-[0.7rem] text-muted leading-none mt-0.5">5.0 · Google</p>
            </div>
          </a>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[0, 1, 2].map((offset) => (
              <ReviewCard
                key={offset}
                review={reviews[idx(offset - 1)]}
                isCenter={offset === 1}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prev}
              aria-label="Ankstesnis atsiliepimas"
              className="w-9 h-9 rounded-full border-2 border-[#DDE9E8] flex items-center justify-center text-muted hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
            >
              <ChevronLeft size={16} strokeWidth={2} />
            </button>

            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Atsiliepimas ${i + 1}`}
                  className={`rounded-full transition-all duration-200 ${
                    i === current ? "w-5 h-2 bg-[#7DB9B5]" : "w-2 h-2 bg-[#D8E6E4] hover:bg-[#90CECA]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Kitas atsiliepimas"
              className="w-9 h-9 rounded-full border-2 border-[#DDE9E8] flex items-center justify-center text-muted hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
            >
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href={reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#68A7A2] transition-colors duration-200"
          >
            {t.reviews.cta} →
          </a>
        </div>

      </div>
    </section>
  );
}
