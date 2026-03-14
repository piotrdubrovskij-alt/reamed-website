import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SpecialistPageContent from "@/components/SpecialistPageContent";
import { specialists, getSpecialistBySlug } from "@/lib/specialists";

export async function generateStaticParams() {
  return specialists.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const spec = getSpecialistBySlug(slug);
  if (!spec) return {};
  return {
    title: `${spec.name} — ReaMed klinika Vilniuje`,
    description: `${spec.role}. ${spec.tagline}. Registruotis vizitui ReaMed klinikoje Vilniuje.`,
  };
}

export default async function SpecialistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spec = getSpecialistBySlug(slug);
  if (!spec) notFound();

  return (
    <>
      <Header />
      <main>
        <SpecialistPageContent specialist={spec} />
      </main>
      <Footer />
    </>
  );
}
