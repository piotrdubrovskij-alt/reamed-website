import { Star } from "lucide-react";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { formatRating, reviewsCountLabel } from "@/components/reviews/format";

const stats = [
  { value: "12+", label: "metų patirties" },
  { value: "5000+", label: "pacientų" },
];

const valueClass =
  "flex items-center gap-1.5 text-[1.625rem] md:text-[2rem] font-bold text-white leading-none";
const labelClass =
  "text-[0.75rem] md:text-[0.875rem] text-white/75 text-center leading-snug";

export default function TrustBar() {
  return (
    <div style={{ background: "#7DB9B5" }}>
      <div className="container-xl">
        <div className="grid grid-cols-3 divide-x divide-white/20 py-5 md:py-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-0.5 px-4 md:px-8">
              <span className={valueClass}>{value}</span>
              <span className={labelClass}>{label}</span>
            </div>
          ))}
          <a
            href={GOOGLE_REVIEWS.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 px-4 md:px-8 hover:opacity-90"
          >
            <span className={valueClass}>
              <Star className="w-5 h-5 md:w-6 md:h-6 fill-white" strokeWidth={0} aria-hidden="true" />
              {formatRating(GOOGLE_REVIEWS.rating, "lt")}
            </span>
            <span className={labelClass}>{reviewsCountLabel(GOOGLE_REVIEWS.count, "lt")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
