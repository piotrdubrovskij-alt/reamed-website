import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Open to every crawler, AI assistants included: the clinic wants to be found and quoted.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
