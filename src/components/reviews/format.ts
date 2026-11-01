import type { SpecialistSlug } from "@/data/reviews";

type Lang = "lt" | "en";

// Kept here (not imported from lib/specialists) so the home page
// does not pull every specialist bio into its bundle.
export const SPECIALIST_NAMES: Record<SpecialistSlug, string> = {
  "piotr-dubrovskij": "Piotr Dubrovskij",
  "kotryna-kairyte": "Kotryna Kairytė",
  "erikas-jatkauskas": "Erikas Jatkauskas",
  "mangirdas-kazacenko": "Mangirdas Kazačenko",
};

const LT_MONTHS_GEN = [
  "sausio", "vasario", "kovo", "balandžio", "gegužės", "birželio",
  "liepos", "rugpjūčio", "rugsėjo", "spalio", "lapkričio", "gruodžio",
];
const EN_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** "2026-08" → "2026 m. rugpjūčio mėn." / "August 2026"; "2024" → "2024 m." / "2024" */
export function formatReviewDate(date: string, lang: Lang): string {
  const [y, m] = date.split("-");
  if (!m) return lang === "lt" ? `${y} m.` : y;
  const i = Number(m) - 1;
  return lang === "lt" ? `${y} m. ${LT_MONTHS_GEN[i]} mėn.` : `${EN_MONTHS[i]} ${y}`;
}

/** 5 → "5,0" (lt) / "5.0" (en) */
export function formatRating(rating: number, lang: Lang): string {
  const s = rating.toFixed(1);
  return lang === "lt" ? s.replace(".", ",") : s;
}

/** 55 → "55 atsiliepimai „Google“" with correct Lithuanian plural; `quoted: false` → "… Google" */
export function reviewsCountLabel(n: number, lang: Lang, { quoted = true } = {}): string {
  if (lang === "en") return `${n} Google reviews`;
  const last = n % 10;
  const lastTwo = n % 100;
  const word =
    last === 1 && lastTwo !== 11
      ? "atsiliepimas"
      : last === 0 || (lastTwo >= 11 && lastTwo <= 19)
        ? "atsiliepimų"
        : "atsiliepimai";
  return `${n} ${word} ${quoted ? "„Google“" : "Google"}`;
}

/** First `n` whole sentences, verbatim. Never paraphrase a review. */
export function firstSentences(text: string, n: number): string {
  return text.trim().split(/(?<=[.!?])\s+/).slice(0, n).join(" ");
}

/** Cropped portrait (640×800), see docs/design/redesign-g/README.md. */
export function specialistPhoto(slug: SpecialistSlug): string {
  return `/photos/specialist-${slug}.jpg`;
}
