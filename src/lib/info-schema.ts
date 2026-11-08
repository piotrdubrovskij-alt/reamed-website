import type { InfoPage } from "@/content/pages/types";
import { sourceHref } from "@/content/conditions/types";
import { plainPageText } from "@/lib/inline-links";
import { getSpecialistBySlug } from "@/lib/specialists";
import { SITE_URL } from "@/lib/seo";

// schema.org for a standalone page: the page itself (AboutPage, FAQPage or MedicalWebPage), its questions and the
// breadcrumb ReaMed › page. On /duk the questions belong to the page node; elsewhere they are a FAQPage node of their own,
// as on the service pages. The clinic node lives in the root layout (#clinic).
export function infoJsonLd(page: InfoPage) {
  const url = `${SITE_URL}${page.path}`;
  const clinic = { "@id": `${SITE_URL}/#clinic` };
  const reviewer = page.reviewed ? getSpecialistBySlug(page.reviewed.by) : undefined;
  const questions = page.blocks
    .flatMap((b) => (b.kind === "faq" ? b.items : []))
    .map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plainPageText(f.a) },
    }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": page.schema,
        "@id": `${url}#page`,
        url,
        name: page.meta.title,
        description: page.meta.description,
        inLanguage: "lt",
        ...(page.schema === "AboutPage" ? { mainEntity: clinic } : {}),
        ...(page.schema === "FAQPage" ? { mainEntity: questions } : {}),
        ...(page.schema === "MedicalWebPage" && page.therapyName
          ? { about: { "@type": "MedicalTherapy", name: page.therapyName, provider: clinic } }
          : {}),
        publisher: clinic,
        ...(reviewer && page.reviewed
          ? {
              lastReviewed: page.reviewed.date,
              reviewedBy: {
                "@type": "Person",
                "@id": `${SITE_URL}/specialistai/${reviewer.slug}#person`,
                name: reviewer.name,
                jobTitle: reviewer.role,
                url: `${SITE_URL}/specialistai/${reviewer.slug}`,
                worksFor: clinic,
              },
            }
          : {}),
        ...(page.sources.length > 0
          ? {
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
            }
          : {}),
      },
      ...(page.schema !== "FAQPage" && questions.length > 0
        ? [{ "@type": "FAQPage", "@id": `${url}#duk`, mainEntity: questions }]
        : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { name: "ReaMed", item: SITE_URL },
          { name: page.navTitle, item: url },
        ].map((crumb, i) => ({ "@type": "ListItem", position: i + 1, ...crumb })),
      },
    ],
  };
}
