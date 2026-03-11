"use client";

import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ReviewsSection() {
  const { t } = useLanguage();

  return (
    <section
      className="section-padding bg-surface"
      aria-labelledby="reviews-title"
    >
      <div className="container-xl">
        <div className="text-center max-w-[560px] mx-auto mb-10 md:mb-14">
          <h2
            id="reviews-title"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground mb-4"
          >
            {t.reviews.title}
          </h2>
          <p className="text-[1rem] text-muted leading-relaxed">
            {t.reviews.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-8">
          {t.reviews.items.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border p-6 md:p-7 flex flex-col gap-4 shadow-[0_2px_16px_rgba(13,27,46,0.04)]"
            >
              {/* Stars */}
              <div className="flex gap-1" aria-label="5 žvaigždutės">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={15}
                    className="text-amber-400 fill-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1">
                <p className="text-[0.9375rem] text-secondary leading-relaxed before:content-['\u201E'] after:content-['\u201C'] before:text-brand after:text-brand before:font-bold after:font-bold">
                  {review.text}
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border-light">
                <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <circle cx="7" cy="5" r="2.5" stroke="#1A56A0" strokeWidth="1.3" />
                    <path d="M2 12C2 9.8 4.2 8 7 8C9.8 8 12 9.8 12 12" stroke="#1A56A0" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[0.8125rem] font-medium text-muted">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://g.co/kgs/reamed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-border text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-brand hover:text-brand transition-colors duration-200"
          >
            {t.reviews.cta} →
          </a>
        </div>
      </div>
    </section>
  );
}
