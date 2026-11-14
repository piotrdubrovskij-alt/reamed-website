import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageContent from "@/components/ServicePageContent";
import { getServicePage, servicePages } from "@/content/services";
import { serviceJsonLd } from "@/lib/service-schema";
import { pageMetadata } from "@/lib/seo";

// Service pages from src/content/services (template G).
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) return {};
  return pageMetadata({ path: `/paslaugos/${page.slug}`, ...page.meta });
}

export default async function ServicePageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(page)).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <ServicePageContent page={page} />
      </main>
      <Footer />
    </>
  );
}
