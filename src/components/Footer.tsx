"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

// Booking block and footer in one graphite block, shared by every page. No logo, no rules.
export default function Footer() {
  const { t, setLang } = useLanguage();
  const pathname = usePathname();

  const navItems = [
    { label: t.nav.whatWeTreat, href: "/#ka-gydome", always: false },
    { label: t.nav.services, href: "/#paslaugos", always: false },
    { label: t.nav.specialists, href: "/#specialistai", always: false },
    { label: t.nav.prices, href: "/kainos", always: false },
    { label: t.footer.privacy, href: "/privatumas", always: true },
  ];

  return (
    <footer
      id="kontaktai"
      aria-labelledby="footer-h"
      className="bg-graphite text-white pt-section md:pt-section-md pb-10 [&_:focus-visible]:outline-mint"
    >
      <div className="wrap">
        <div className="grid gap-10 desk:grid-cols-[7fr_5fr] desk:gap-[72px] desk:items-start">
          <div>
            <h2 id="footer-h" className="text-h2 text-mint text-balance">
              {t.booking.title}
            </h2>
            {pathname !== "/registracija" && (
              <Link href="/registracija" className="btn btn-mint text-body mt-7 w-full desk:w-auto">
                {t.booking.online}
              </Link>
            )}
          </div>
          {/* Values share one column; links stretch to 44px without moving the rows. */}
          <dl className="grid grid-cols-[auto_1fr] items-baseline gap-x-7 gap-y-3">
            <dt className="text-small text-on-dark">{t.booking.phone}</dt>
            <dd className="text-body font-medium">
              <a href={t.contact.phoneHref} className="inline-flex items-center min-h-11 -my-2 whitespace-nowrap hover:text-mint">
                {t.contact.phone}
              </a>
            </dd>
            <dt className="text-small text-on-dark">{t.booking.address}</dt>
            <dd className="text-body font-medium">{t.contact.address}</dd>
            <dt className="text-small text-on-dark">{t.booking.hours}</dt>
            <dd className="text-body font-medium">{t.booking.hoursValue}</dd>
            <dt className="text-small text-on-dark">{t.booking.email}</dt>
            <dd className="text-body font-medium">
              <a href={`mailto:${t.contact.email}`} className="inline-flex items-center min-h-11 -my-2 hover:text-mint">
                {t.contact.email}
              </a>
            </dd>
          </dl>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-x-10 text-small text-on-dark desk:mt-16">
          {/* Phone: only privacy and language, the rest is in the header menu. */}
          <nav aria-label={t.footer.menu} className="flex flex-nowrap items-center whitespace-nowrap gap-x-[26px]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${item.always ? "inline-flex" : "hidden desk:inline-flex"} items-center min-h-11 hover:underline`}
              >
                {item.label}
              </a>
            ))}
            <span aria-hidden="true" className="desk:hidden -mx-3.5">
              ·
            </span>
            <button
              type="button"
              onClick={() => setLang(t.footer.otherLanguageCode)}
              lang={t.footer.otherLanguageCode}
              className="inline-flex items-center min-h-11 hover:underline cursor-pointer"
            >
              {t.footer.otherLanguage}
            </button>
          </nav>
          <p className="w-full desk:w-auto">
            © {new Date().getFullYear()} {t.footer.company}
          </p>
        </div>
      </div>
    </footer>
  );
}
