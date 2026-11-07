"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    title: "Puslapis nerastas",
    lead: "Tokio puslapio nėra arba jis perkeltas. Galbūt ieškojote vieno iš šių:",
    links: [
      { href: "/ka-gydome", label: "Ką gydome" },
      { href: "/paslaugos", label: "Paslaugos" },
      { href: "/specialistai", label: "Specialistai" },
      { href: "/kainos", label: "Kainos" },
      { href: "/kontaktai", label: "Kontaktai" },
    ],
    book: "Registruotis vizitui",
    home: "Į pradžią",
  },
  en: {
    title: "Page not found",
    lead: "This page does not exist or has moved. You may be looking for one of these:",
    links: [
      { href: "/ka-gydome", label: "What we treat" },
      { href: "/paslaugos", label: "Services" },
      { href: "/specialistai", label: "Specialists" },
      { href: "/kainos", label: "Prices" },
      { href: "/kontaktai", label: "Contacts" },
    ],
    book: "Book a visit",
    home: "Home page",
  },
} as const;

export default function NotFoundContent() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <section aria-labelledby="not-found-h" className="bg-paper section-y">
      <div className="wrap">
        <h1 id="not-found-h" className="text-h1-m desk:text-h1 text-balance">
          {c.title}
        </h1>
        <p className="mt-5 max-w-[46ch] text-lead-m desk:text-lead">{c.lead}</p>
        <ul className="mt-8 flex flex-col gap-1 desk:flex-row desk:flex-wrap desk:gap-x-9">
          {c.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="link-action inline-flex items-center min-h-11 text-lead">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3.5">
          <Link href="/registracija" className="btn btn-dark">
            {c.book}
          </Link>
          <Link href="/" className="link-action inline-flex items-center min-h-11">
            {c.home}
          </Link>
        </div>
      </div>
    </section>
  );
}
