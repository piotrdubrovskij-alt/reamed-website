"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { Star, UserRound } from "lucide-react";
import type { Review } from "@/data/reviews";
import { formatReviewDate, SPECIALIST_NAMES } from "./format";

const CLAMP = 280;

export default function ReviewCard({
  review,
  lang,
  showSpecialists = true,
  className = "",
}: {
  review: Review;
  lang: "lt" | "en";
  showSpecialists?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const isLong = review.text.length > CLAMP;
  const text =
    isLong && !open
      ? review.text.slice(0, CLAMP).replace(/\s+\S*$/, "") + "…"
      : review.text;
  const [qOpen, qClose] = review.lang === "lt" ? ["„", "“"] : ["“", "”"];

  return (
    <figure
      className={`bg-white rounded-2xl border border-[#DDE9E8] p-6 flex flex-col gap-4 ${className}`}
    >
      <div
        className="flex gap-0.5"
        role="img"
        aria-label={
          lang === "lt"
            ? `${review.rating} iš 5 žvaigždučių`
            : `${review.rating} out of 5 stars`
        }
      >
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} size={15} className="text-amber-400 fill-amber-400" aria-hidden="true" />
        ))}
      </div>

      <blockquote className="flex-1" lang={review.lang}>
        <p className="text-[0.9375rem] text-secondary leading-relaxed">
          {qOpen}
          {text}
          {qClose}
        </p>
        {isLong && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="mt-1 py-2 text-[0.8125rem] font-semibold text-[#437571] hover:underline"
          >
            {open
              ? lang === "lt" ? "Rodyti mažiau" : "Show less"
              : lang === "lt" ? "Skaityti visą" : "Read more"}
          </button>
        )}
      </blockquote>

      <figcaption className="pt-3 border-t border-[#EEF5F4] text-[0.8125rem] text-muted leading-snug">
        <span className="font-semibold text-foreground">{review.author}</span>
        <span aria-hidden="true"> · </span>
        {formatReviewDate(review.date, lang)}
        <span aria-hidden="true"> · </span>
        Google
        {lang === "en" && review.lang === "lt" && (
          <span className="block mt-1 text-[0.75rem]">Review in Lithuanian</span>
        )}
        {showSpecialists && review.specialists.length > 0 && (
          <span className="flex items-center gap-1.5 mt-2">
            <UserRound size={13} strokeWidth={2} aria-hidden="true" />
            {review.specialists.map((slug, i) => (
              <Fragment key={slug}>
                {i > 0 && ", "}
                <Link
                  href={`/specialistai/${slug}`}
                  className="font-medium text-[#437571] hover:underline"
                >
                  {SPECIALIST_NAMES[slug]}
                </Link>
              </Fragment>
            ))}
          </span>
        )}
      </figcaption>
    </figure>
  );
}
