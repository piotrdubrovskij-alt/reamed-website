import type { Specialist } from "@/lib/specialists";
import { SITE_URL } from "@/lib/seo";

const LANGUAGE_CODES: Record<string, string> = { Lietuvių: "lt", Anglų: "en", Rusų: "ru" };

// schema.org for a specialist page: the person behind «Peržiūrėjo» on the problem pages (same @id).
// The licence number is the one already shown on the page. The clinic node lives in the root layout (#clinic).
export function specialistJsonLd(s: Specialist) {
  const url = `${SITE_URL}/specialistai/${s.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name: s.name,
    jobTitle: s.role,
    url,
    ...(s.photo ? { image: `${SITE_URL}${s.photo}` } : {}),
    worksFor: { "@id": `${SITE_URL}/#clinic` },
    knowsAbout: s.expertise,
    ...(s.languages?.length ? { knowsLanguage: s.languages.map((l) => LANGUAGE_CODES[l] ?? l) } : {}),
    ...(s.license
      ? {
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "license",
            identifier: s.license,
          },
        }
      : {}),
  };
}
