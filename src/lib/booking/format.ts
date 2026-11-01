import type { Language } from "@/lib/translations";
import type { CatalogueService } from "./types";

/** Every visit time is shown in the clinic's own time, whatever the visitor's device says. */
export const CLINIC_TZ = "Europe/Vilnius";

const localeOf = (lang: Language) => (lang === "en" ? "en-GB" : "lt-LT");

export function money(cents: number, lang: Language): string {
  return new Intl.NumberFormat(localeOf(lang), {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

export function clockTime(ms: number, lang: Language): string {
  return new Intl.DateTimeFormat(localeOf(lang), {
    timeZone: CLINIC_TZ,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(ms);
}

export function longDate(ms: number, lang: Language): string {
  return new Intl.DateTimeFormat(localeOf(lang), {
    timeZone: CLINIC_TZ,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(ms);
}

export function shortDate(ms: number, lang: Language): string {
  return new Intl.DateTimeFormat(localeOf(lang), {
    timeZone: CLINIC_TZ,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(ms);
}

export function visitWhen(start: number, end: number, lang: Language): string {
  return `${longDate(start, lang)}, ${clockTime(start, lang)}–${clockTime(end, lang)}`;
}

/** The clinic's calendar day (YYYY-MM-DD) that an instant falls on. */
export function clinicDay(ms: number): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: CLINIC_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(ms);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")}`;
}

export function addDays(day: string, days: number): string {
  const [y, m, d] = day.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + days)).toISOString().slice(0, 10);
}

/** Noon in the clinic's day, safe for formatting the weekday and date of a calendar day. */
export function dayInstant(day: string): number {
  const [y, m, d] = day.split("-").map(Number);
  return Date.UTC(y, m - 1, d, 12);
}

/** Short weekday and the day number, for the day tabs ("Pr" / "9"). */
export function dayLabel(day: string, lang: Language): { weekday: string; day: string } {
  const ms = dayInstant(day);
  const locale = localeOf(lang);
  return {
    weekday: new Intl.DateTimeFormat(locale, { timeZone: "UTC", weekday: "short" }).format(ms).replace(/\.$/, ""),
    day: new Intl.DateTimeFormat(locale, { timeZone: "UTC", day: "numeric" }).format(ms),
  };
}

/** "lapkričio 9 d." / "9 November", for a calendar day. */
export function monthDay(day: string, lang: Language): string {
  return new Intl.DateTimeFormat(localeOf(lang), { timeZone: "UTC", month: "long", day: "numeric" }).format(
    dayInstant(day),
  );
}

/** Clinic system specialist ids → site specialist slugs. */
export const SPECIALIST_SLUGS: Record<string, string> = {
  "rm-piotr": "piotr-dubrovskij",
  "rm-kotryna": "kotryna-kairyte",
  "rm-erikas": "erikas-jatkauskas",
  "rm-mangirdas": "mangirdas-kazacenko",
};

/** The catalogue names are Lithuanian; the English ones live here, by service id. */
const SERVICE_NAMES_EN: Record<string, string> = {
  "reamed-consultation": "Initial consultation, assessment and plan",
  "reamed-kinesiotherapy": "Physiotherapy",
  "reamed-complex": "Complex rehabilitation",
  "reamed-extended": "Complex rehabilitation, extended",
  "reamed-piotr-consultation": "Treatment session with Piotr",
  "reamed-piotr-individual": "Treatment session with Piotr",
  "reamed-massage-30": "Massage",
  "reamed-massage-60": "Massage",
};

export function serviceName(service: Pick<CatalogueService, "id" | "name">, lang: Language): string {
  return lang === "en" ? SERVICE_NAMES_EN[service.id] ?? service.name : service.name;
}

export function durationLabel(minutes: number | null, lang: Language): string {
  if (minutes === null) return "";
  return lang === "en" ? `up to ${minutes} min` : `iki ${minutes} min.`;
}

export const CATEGORY_LABELS: Record<Language, Record<CatalogueService["category"], string>> = {
  lt: { consultation: "Konsultacija", kinesiotherapy: "Kineziterapija", massage: "Masažas" },
  en: { consultation: "Consultation", kinesiotherapy: "Physiotherapy", massage: "Massage" },
};
