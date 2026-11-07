import { formatPrice, getPricedService, type PriceId } from "@/data/prices";

// Prices inside service texts come from src/data/prices.ts, so a price change updates the texts too.

/** "70 €" */
export const eur = (id: PriceId) => formatPrice(getPricedService(id).price, "lt");

/** Price of one visit in the 5 or 10 visit package: "65 €". */
export function packEur(id: PriceId, count: 5 | 10): string {
  const pack = getPricedService(id).packs?.find((p) => p.count === count);
  if (!pack) throw new Error(`prices.ts: «${id}» has no ${count} visit package`);
  return formatPrice(pack.unit, "lt");
}

/** "60 min" */
export function minutes(id: PriceId): string {
  const d = getPricedService(id).duration;
  if (!d) throw new Error(`prices.ts: «${id}» has no duration`);
  return d;
}
