"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_REVIEWS, getReviewById, type SpecialistSlug } from "@/data/reviews";
import { SPECIALIST_NAMES, firstSentences, formatRating, reviewsCountLabel, specialistPhoto } from "@/components/reviews/format";

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
              <div key={q.review} className="grid grid-cols-[64px_1fr] gap-[18px] md:grid-cols-[96px_1fr] md:gap-7">
                <Image
                  src={specialistPhoto(slug)}
                  alt={SPECIALIST_NAMES[slug]}
                  width={96}
                  height={96}
                  className="size-16 md:size-24 rounded-full object-cover object-[50%_18%]"
                />
                <figure className="m-0">
                  <blockquote lang={review.lang} className="text-lead leading-[1.45] max-w-[46ch]">
                    <p>{firstSentences(review.text, q.sentences)}</p>
                  </blockquote>
                  <figcaption className="mt-3.5 text-small text-graphite">
                    {review.author}, {q.about}
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
