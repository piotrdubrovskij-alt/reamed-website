import type { Language } from "@/lib/translations";

/** "2026 m. gruodžio 24 d." / "24 December 2026" for a YYYY-MM-DD day, wherever the visitor is. */
export function fullDay(day: string, lang: Language): string {
  return new Intl.DateTimeFormat(lang === "lt" ? "lt-LT" : "en-GB", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${day}T12:00:00Z`));
}

/** The same day ending a sentence: Lithuanian dates already end with "d.", English ones get the period. */
export function fullDaySentence(day: string, lang: Language): string {
  const text = fullDay(day, lang);
  return text.endsWith(".") ? text : `${text}.`;
}

/** Whole euros without cents: "100 €" / "€100". */
export function wholeEuros(cents: number, lang: Language): string {
  return new Intl.NumberFormat(lang === "lt" ? "lt-LT" : "en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: cents % 100 ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(cents / 100);
}
