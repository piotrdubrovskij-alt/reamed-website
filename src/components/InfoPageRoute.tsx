import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoPageContent from "@/components/InfoPageContent";
import type { InfoPage } from "@/content/pages/types";
import { infoJsonLd } from "@/lib/info-schema";

// The body of the four standalone routes (src/app/apie-mus and the others): structured data, header, page, footer.
export default function InfoPageRoute({ page }: { page: InfoPage }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(infoJsonLd(page)).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main>
        <InfoPageContent page={page} />
      </main>
      <Footer />
    </>
  );
}
