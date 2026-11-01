"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_REVIEWS, getReviewById, type SpecialistSlug } from "@/data/reviews";
import { firstSentences, formatRating, reviewsCountLabel, specialistPhoto } from "@/components/reviews/format";

export default function ReviewsSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="atsiliepimai" aria-labelledby="rev-h" className="bg-paper section-y">
      <div className="wrap grid gap-10 md:grid-cols-[4fr_8fr] md:gap-[72px] md:items-start">
        <div className="flex flex-col items-start gap-[22px]">
          <h2 id="rev-h" className="text-h2">
            {t.reviews.title}
          </h2>
          <p className="text-h1-m md:text-h1 tracking-[-0.04em] leading-none">
            {formatRating(GOOGLE_REVIEWS.rating, lang)}
          </p>
          <p className="flex gap-1" role="img" aria-label={t.reviews.stars}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={18} className="fill-current" aria-hidden="true" />
            ))}
          </p>
          <a
            href={GOOGLE_REVIEWS.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-action inline-flex items-center min-h-11"
          >
            {reviewsCountLabel(GOOGLE_REVIEWS.count, lang, { quoted: false })}
          </a>
        </div>

        <div className="flex flex-col gap-16">
          {t.reviews.quotes.map((q) => {
            const review = getReviewById(q.review);
            if (!review) return null;
            const slug = q.specialist as SpecialistSlug;
            return (
              <figure key={q.review} className="m-0">
                <blockquote lang={review.lang} className="text-lead leading-[1.45] max-w-[46ch]">
                  <p>{firstSentences(review.text, q.sentences)}</p>
                </blockquote>
                {/* Author first, then who the review is about. The photo is the
                    specialist's, so it sits next to their name, not the quote. */}
                <figcaption className="mt-3.5 flex flex-wrap items-center gap-x-2 text-small text-graphite">
                  <span className="font-medium text-ink">{review.author}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-2 whitespace-nowrap">
                    {t.reviews.about}
                    <Link
                      href={`/specialistai/${slug}`}
                      className="inline-flex items-center gap-2 min-h-11 underline underline-offset-[3px] hover:text-ink"
                    >
                      <Image
                        src={specialistPhoto(slug)}
                        alt=""
                        width={28}
                        height={28}
                        className="size-7 rounded-full object-cover object-[50%_18%]"
                      />
                      {q.name}
                    </Link>
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
