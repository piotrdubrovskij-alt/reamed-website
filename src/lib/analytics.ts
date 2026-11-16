/**
 * Google Analytics 4 and Google Ads conversions, only with the visitor's consent (decision Piotr 16.11.2026).
 *
 * Basic consent mode: until the visitor presses «Sutinku» nothing is loaded from Google and no cookie is set.
 * After consent the Google tag loads with analytics and ad measurement on and ad personalisation off
 * (a clinic site: no remarketing, no Google signals). The GA4 property «Reamed.lt - GA4» is linked to
 * Google Ads 564-428-8303, and the Ads conversions are imported from its key events.
 *
 * Events we send ourselves (page views come from the tag; enhanced measurement follows client-side navigation):
 * - phone_click, email_click — any tel: / mailto: link on the site (ConsentBanner listens on the document);
 * - generate_lead — the /registracija and /kontaktai forms after the server accepted them;
 * - purchase — a booking the clinic system reports as paid (order id, sum, EUR; no names, no services);
 * - voucher_purchase — a paid gift voucher (order id, sum, EUR).
 * Never send names, e-mails, phone numbers or anything a patient typed.
 */

export const GA_MEASUREMENT_ID = "G-MLXMMHFZZY";

export type Consent = "granted" | "denied";

const STORAGE_KEY = "reamed-consent";
const TRACKED_PREFIX = "reamed-tracked-";
/** Ask again after a year, as the Lithuanian regulator recommends for cookie consent. */
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export const CONSENT_OPEN_EVENT = "reamed-consent-open";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

/** The stored choice, or null when the visitor has not answered (or answered more than a year ago). */
export function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as { choice?: unknown; at?: unknown };
    if (saved.choice !== "granted" && saved.choice !== "denied") return null;
    const at = typeof saved.at === "string" ? Date.parse(saved.at) : NaN;
    if (!Number.isFinite(at) || Date.now() - at > CONSENT_MAX_AGE_MS) return null;
    return saved.choice;
  } catch {
    return null;
  }
}

function saveConsent(choice: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: new Date().toISOString() }));
  } catch {
    // Private mode or storage switched off: the choice holds for this page only.
  }
}

let tagLoaded = false;

/** Loads the Google tag. Call only after consent. */
export function loadGoogleTag() {
  if (tagLoaded || typeof window === "undefined") return;
  tagLoaded = true;
  window.dataLayer = window.dataLayer || [];
  // gtag.js reads the arguments object itself, so this must stay a plain function, not an arrow with an array.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  const gtag = window.gtag;
  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "denied",
  });
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function acceptConsent() {
  saveConsent("granted");
  loadGoogleTag();
}

/** «Nesutinku», also later from «Slapukų nustatymai»: removes Google's cookies and stops the tag. */
export function declineConsent() {
  saveConsent("denied");
  window.gtag?.("consent", "update", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  clearGoogleCookies();
  // A tag already running stays in memory until the page reloads; a fresh page does not load it at all.
  if (tagLoaded) window.location.reload();
}

function clearGoogleCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => /^(_ga|_gid|_gat|_gcl_)/.test(n));
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}

/** Opens the consent banner again (footer «Slapukų nustatymai», privacy policy). */
export function openConsentSettings() {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

type Params = Record<string, string | number>;

/** Sends an event if the visitor agreed; does nothing otherwise. */
export function track(name: string, params?: Params) {
  window.gtag?.("event", name, params);
}

/** Sends an event once per key in this browser (a paid order's result page can be reloaded or reopened). */
export function trackOnce(key: string, name: string, params?: Params) {
  if (!window.gtag) return;
  try {
    if (window.localStorage.getItem(TRACKED_PREFIX + key)) return;
    window.localStorage.setItem(TRACKED_PREFIX + key, "1");
  } catch {
    // Without storage GA4 still drops a repeated purchase with the same transaction_id.
  }
  window.gtag("event", name, params);
}
