import type { Metadata } from "next";

export const SITE_URL = "https://reamed.lt";

// One social preview for every page until pages get their own pictures.
export const OG_IMAGE = {
  url: "/og/reamed-og.png",
  width: 1200,
  height: 630,
  alt: "ReaMed klinika Vilniuje",
};

type PageMeta = {
  /** Path from the site root, e.g. "/kainos". Becomes the canonical URL and og:url. */
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
};

// Every page states its own canonical address, so Google does not split it
// between reamed.lt, www.reamed.lt and http:// versions.
export function pageMetadata({ path, title, description, noindex }: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "ReaMed",
      locale: "lt_LT",
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
