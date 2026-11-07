/**
 * A mistyped e-mail domain is the usual reason a patient "got no confirmation" (Piotr 04.11.2026).
 * The form suggests the closest common domain when the typed one is one or two edits away; the
 * patient decides. Nothing is sent anywhere: a plain comparison in the browser.
 */
const COMMON_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "me.com",
  "mail.ru",
  "yandex.ru",
  "inbox.lt",
  "one.lt",
  "zebra.lt",
  "protonmail.com",
  "proton.me",
  "gmx.de",
];

/** Edits between two strings; two swapped letters ("gmial") count as one edit. */
function distance(a: string, b: string): number {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const d: number[] = Array.from({ length: rows * cols }, () => 0);
  for (let i = 0; i < rows; i++) d[i * cols] = i;
  for (let j = 0; j < cols; j++) d[j] = j;
  for (let i = 1; i < rows; i++)
    for (let j = 1; j < cols; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let best = Math.min(d[(i - 1) * cols + j] + 1, d[i * cols + j - 1] + 1, d[(i - 1) * cols + j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1])
        best = Math.min(best, d[(i - 2) * cols + j - 2] + 1);
      d[i * cols + j] = best;
    }
  return d[rows * cols - 1];
}

/** The corrected address, or null when the domain is fine or too different to guess. */
export function suggestEmail(value: string): string | null {
  const email = value.trim().toLowerCase();
  const at = email.lastIndexOf("@");
  if (at < 1 || at === email.length - 1) return null;
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (COMMON_DOMAINS.includes(domain)) return null;
  // Only domains that look complete: a dot and at least two letters after it.
  if (!/^[a-z0-9.-]+\.[a-z]{2,}$/.test(domain)) return null;
  let best: { domain: string; score: number } | null = null;
  for (const candidate of COMMON_DOMAINS) {
    const score = distance(domain, candidate);
    const limit = candidate.length >= 10 ? 2 : 1;
    if (score > 0 && score <= limit && (!best || score < best.score)) best = { domain: candidate, score };
  }
  return best ? `${local}@${best.domain}` : null;
}
