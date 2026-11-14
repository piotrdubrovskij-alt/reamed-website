import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConditionPageContent from "@/components/ConditionPageContent";
import { conditionPages, getConditionPage } from "@/content/conditions";
import { conditionJsonLd } from "@/lib/condition-schema";
import { pageMetadata } from "@/lib/seo";

// Problem pages from src/content/conditions. The older pages in sibling folders win over this route.
export const dynamicParams = false;

export function generateStaticParams() {
  return conditionPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getConditionPage(slug);
  if (!page) return {};
  return pageMetadata({ path: `/ka-gydome/${page.slug}`, ...page.meta });
}

export default async function ConditionPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getConditionPage(slug);
  if (!page) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionJsonLd(page)).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <ConditionPageContent page={page} />
      </main>
      <Footer />
    </>
  );
}
