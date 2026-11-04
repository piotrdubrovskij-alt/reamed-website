// ReaMed price list: the one source for /kainos and the first visit facts on the home page.
// Prices approved by Piotr; the receipt layout is docs/design/redesign-g/kainos.html.
// Numbers live here once; only words are per language. Packages are 5 and 10 visits only.
// To change a price: edit it here, both places update.

import type { Language } from "@/lib/translations";

type Text = Record<Language, string>;

export type Pack = {
  count: 5 | 10;
  /** Price of one visit in the package, €. */
  unit: number;
  /** Price of the whole package, €. */
  total: number;
};

export type PricedService = {
  name: Text;
  /** €. */
  price: number;
  /** Same in both languages, e.g. "60 min". */
  duration?: string;
  note?: Text;
  packs?: Pack[];
};

export type PriceGroup = {
  id: string;
  title: Text;
  services: PricedService[];
};

const firstVisit = {
  name: { lt: "Konsultacija, ištyrimas ir gydymo planas", en: "Consultation, assessment and treatment plan" },
  price: 80,
  duration: "60 min",
} satisfies PricedService;

export const priceGroups: PriceGroup[] = [
  {
    id: "pirmasis-vizitas",
    title: { lt: "Pirmasis vizitas", en: "First visit" },
    services: [firstVisit],
  },
  {
    id: "gydymas",
    title: { lt: "Gydymas", en: "Treatment" },
    services: [
      {
        name: { lt: "Kineziterapija", en: "Physiotherapy" },
        price: 70,
        duration: "45 min",
        packs: [
          { count: 5, unit: 65, total: 325 },
          { count: 10, unit: 60, total: 600 },
        ],
      },
      {
        name: { lt: "Kompleksinė reabilitacija", en: "Combined rehabilitation" },
        price: 85,
        duration: "60 min",
        note: {
          lt: "kineziterapija ir viena papildoma priemonė pagal indikacijas",
          en: "physiotherapy and one add-on procedure as indicated",
        },
        packs: [
          { count: 5, unit: 80, total: 400 },
          { count: 10, unit: 75, total: 750 },
        ],
      },
      {
        name: { lt: "Kompleksinė išplėstinė", en: "Combined extended" },
        price: 100,
        duration: "75 min",
        note: {
          lt: "kineziterapija ir dvi papildomos priemonės pagal indikacijas",
          en: "physiotherapy and two add-on procedures as indicated",
        },
        packs: [
          { count: 5, unit: 95, total: 475 },
          { count: 10, unit: 90, total: 900 },
        ],
      },
    ],
  },
  {
    id: "papildomai",
    title: { lt: "Papildomai", en: "Additional" },
    services: [
      {
        name: { lt: "Papildomas modulis", en: "Add-on module" },
        price: 20,
        duration: "15 min",
        note: {
          lt: "tik kartu su vizitu: fizioterapija, elektroterapija, ultragarsas, mobilizacija, masažas ar teipavimas",
          en: "only together with a visit: physiotherapy modalities, electrotherapy, ultrasound, mobilisation, massage or taping",
        },
      },
      {
        name: { lt: "Masažas, 30 min", en: "Massage, 30 min" },
        price: 40,
        packs: [
          { count: 5, unit: 36, total: 180 },
          { count: 10, unit: 34, total: 340 },
        ],
      },
      {
        name: { lt: "Masažas, 60 min", en: "Massage, 60 min" },
        price: 65,
        packs: [
          { count: 5, unit: 58, total: 290 },
          { count: 10, unit: 55, total: 550 },
        ],
      },
      {
        name: { lt: "Fizioterapija", en: "Physiotherapy modalities" },
        price: 20,
        duration: "15–20 min",
        note: { lt: "pagal indikacijas", en: "as indicated" },
        packs: [
          { count: 5, unit: 18, total: 90 },
          { count: 10, unit: 17, total: 170 },
        ],
      },
    ],
  },
];

/** Piotr's own visit, shown on its own slip next to the receipt. */
export const specialistVisit = {
  slug: "piotr-dubrovskij",
  service: {
    name: { lt: "Individualus vizitas", en: "Individual visit" },
    price: 100,
    duration: "60 min",
    note: {
      lt: "vizito pobūdis parenkamas pagal būklę, kaina nuo metodo nepriklauso",
      en: "the type of visit is chosen to suit the condition, the price does not depend on the method",
    },
  } satisfies PricedService,
};

/** The first visit, for the home page facts. */
export const FIRST_VISIT = firstVisit;

/** "80 €" in Lithuanian, "€80" in English; the space is non-breaking. */
export function formatPrice(eur: number, lang: Language): string {
  return lang === "lt" ? `${eur} €` : `€${eur}`;
}

/** "5 kartai" / "10 kartų", "5 sessions". */
export function formatCount(count: Pack["count"], lang: Language): string {
  if (lang === "en") return `${count} sessions`;
  return `${count} ${count === 10 ? "kartų" : "kartai"}`;
}

/** Duration and note on one line: "60 min · kineziterapija ir …". */
export function serviceMeta(service: PricedService, lang: Language): string | null {
  const parts = [service.duration, service.note?.[lang]].filter(Boolean);
  return parts.length ? parts.join(" · ") : null;
}
