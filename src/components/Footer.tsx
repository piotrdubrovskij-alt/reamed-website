"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

// Booking block and footer in one graphite block, shared by every page.
export default function Footer() {
  const { t, setLang } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { label: t.nav.whatWeTreat, href: "/#ka-gydome" },
    { label: t.nav.services, href: "/#paslaugos" },
    { label: t.nav.specialists, href: "/#specialistai" },
    { label: t.nav.prices, href: "/kainos" },
    { label: t.footer.privacy, href: "/privatumas" },
  ];

  return (
    <footer
      id="kontaktai"
      aria-labelledby="footer-h"
      className="bg-graphite text-white pt-section md:pt-section-md pb-12 [&_:focus-visible]:outline-mint"
    >
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[7fr_5fr] md:gap-[72px] md:items-end">
          <div>
            <h2 id="footer-h" className="text-h2 text-mint text-balance">
              {t.booking.title}
            </h2>
            <a
              href={t.contact.phoneHref}
              className="block mt-9 py-1 text-h1-m md:text-h1 tracking-[-0.03em] leading-none whitespace-nowrap hover:text-mint"
            >
              {t.contact.phone}
            </a>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              {pathname !== "/registracija" && (
                <Link href="/registracija" className="btn btn-mint text-body">
                  {t.booking.online}
                </Link>
              )}
              <a href={`mailto:${t.contact.email}`} className="link-action inline-flex items-center min-h-11 text-body">
                {t.contact.email}
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-7 gap-y-2.5 text-body">
            <dt className="text-on-dark">{t.booking.address}</dt>
            <dd className="font-medium">{t.contact.address}</dd>
            <dt className="text-on-dark">{t.booking.hours}</dt>
            <dd className="font-medium">{t.booking.hoursValue}</dd>
            <dt className="text-on-dark">{t.booking.firstVisit}</dt>
            <dd className="font-medium">{t.booking.firstVisitValue}</dd>
          </dl>
        </div>

        <Image
          src="/brand/reamed-lockup-for-dark.svg"
          alt="ReaMed"
          width={1376}
          height={384}
          className="mt-22 md:mt-36 w-full h-auto"
        />

        <div className="mt-14 flex flex-wrap justify-between gap-x-10 gap-y-4 text-small text-on-dark">
          <nav aria-label={t.footer.menu} className="flex flex-wrap gap-x-[26px]">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="inline-flex items-center min-h-11 hover:underline">
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setLang(t.footer.otherLanguageCode)}
              lang={t.footer.otherLanguageCode}
              className="inline-flex items-center min-h-11 hover:underline cursor-pointer"
            >
              {t.footer.otherLanguage}
            </button>
          </nav>
          <p className="self-center">
            © {new Date().getFullYear()} {t.footer.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
