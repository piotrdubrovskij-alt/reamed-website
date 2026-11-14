import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFoundContent from "@/components/NotFoundContent";

export const metadata: Metadata = {
  title: "Puslapis nerastas — ReaMed",
};

// Any unknown address: Lithuanian page with the site's sections and booking, not Next's bare 404.
export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
