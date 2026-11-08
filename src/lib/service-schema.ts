import type { ServicePage } from "@/content/services/types";
import { getSpecialistBySlug } from "@/lib/specialists";
import { SITE_URL } from "@/lib/seo";
import { sourceHref } from "@/content/conditions/types";

// schema.org for a service page: the page itself (MedicalWebPage about a MedicalTherapy),
// its questions (FAQPage) and the breadcrumb ReaMed › Paslaugos › page. The clinic node lives in the root layout (#clinic).
export function serviceJsonLd(page: ServicePage) {
  const url = `${SITE_URL}/paslaugos/${page.slug}`;
  const reviewer = page.reviewed ? getSpecialistBySlug(page.reviewed.by) : undefined;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#page`,
        url,
        name: page.meta.title,
        description: page.meta.description,
        inLanguage: "lt",
        about: { "@type": "MedicalTherapy", name: page.therapyName, provider: { "@id": `${SITE_URL}/#clinic` } },
        publisher: { "@id": `${SITE_URL}/#clinic` },
        ...(reviewer && page.reviewed
          ? {
              lastReviewed: page.reviewed.date,
              reviewedBy: {
                "@type": "Person",
                name: reviewer.name,
                jobTitle: reviewer.role,
                url: `${SITE_URL}/specialistai/${reviewer.slug}`,
                worksFor: { "@id": `${SITE_URL}/#clinic` },
              },
            }
          : {}),
        citation: page.sources.map((s) =>
          s.doi
            ? {
                "@type": "ScholarlyArticle",
                name: s.title,
                author: s.authors,
                datePublished: String(s.year),
                isPartOf: s.journal,
                url: sourceHref(s),
              }
            : { "@type": "WebPage", name: s.title, author: s.authors, url: sourceHref(s) },
        ),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#duk`,
        mainEntity: page.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "ReaMed", item: SITE_URL },
          { name: "Paslaugos", item: `${SITE_URL}/paslaugos` },
          { name: page.navTitle, item: url },
        ].map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })),
      },
    ],
  };
}
