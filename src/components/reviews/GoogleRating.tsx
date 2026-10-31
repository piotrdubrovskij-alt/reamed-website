import { Star, ArrowUpRight } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { formatRating, reviewsCountLabel } from "./format";

/** "★ 5,0 · 55 atsiliepimai „Google“ ↗" — links to the Google listing. */
export default function GoogleRating({ lang }: { lang: "lt" | "en" }) {
  return (
    <a
      href={GOOGLE_REVIEWS.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 min-h-[44px] flex-shrink-0 text-[0.875rem] text-secondary hover:text-[#437571] transition-colors duration-200"
    >
      <Star size={16} className="text-amber-400 fill-amber-400" aria-hidden="true" />
      <span>
        <strong className="font-bold text-foreground">
          {formatRating(GOOGLE_REVIEWS.rating, lang)}
        </strong>
        {" · "}
        {reviewsCountLabel(GOOGLE_REVIEWS.count, lang)}
      </span>
      <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}
