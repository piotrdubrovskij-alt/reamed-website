import type { ConditionPage } from "@/content/conditions/types";
import { getSpecialistBySlug } from "@/lib/specialists";
import { SITE_URL } from "@/lib/seo";
import { sectionInfo } from "@/content/sections";

// schema.org for a problem page: the page itself (MedicalWebPage about a MedicalCondition),
// its questions (FAQPage) and the breadcrumb through its section. The clinic node lives in the root layout (#clinic).
export function conditionJsonLd(page: ConditionPage) {
  const url = `${SITE_URL}/ka-gydome/${page.slug}`;
  const reviewer = page.reviewed ? getSpecialistBySlug(page.reviewed.by) : undefined;
  const section = sectionInfo(page.section);

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
        about: { "@type": "MedicalCondition", name: page.conditionName },
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
        citation: page.sources.map((s) => ({
          "@type": "ScholarlyArticle",
          name: s.title,
          author: s.authors,
          datePublished: String(s.year),
          isPartOf: s.journal,
          url: `https://doi.org/${s.doi}`,
        })),
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
        // ReaMed › Ką gydome › section (when it has a page) › this page
        itemListElement: [
          { name: "ReaMed", item: SITE_URL },
          { name: "Ką gydome", item: `${SITE_URL}/ka-gydome` },
          ...(section.href && page.slug !== page.section ? [{ name: section.title, item: `${SITE_URL}${section.href}` }] : []),
          { name: page.navTitle, item: url },
        ].map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })),
      },
    ],
  };
}
