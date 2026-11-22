"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import ContactDetails from "@/components/ContactDetails";
import { GIFT_VOUCHER_LIVE } from "@/lib/voucher/launch";
import { openConsentSettings } from "@/lib/analytics";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const social = [
  { label: "Instagram", href: "https://www.instagram.com/reamedklinika/" },
  { label: "Facebook", href: "https://www.facebook.com/reamedklinika/" },
];

// One graphite block on every page, three columns on a computer (Piotr 14.11.2026, after the footer review): the clinic in
// one line with the booking button, the contacts, and the links a reader needs after the page. No logo (it is in the
// header), no map (it lives on /kontaktai with the route), no rules: the bottom row is set apart by spacing alone.
// On /kontaktai the page itself opens with the same list, so the footer there is one strip with the privacy policy link.
// The booking terms (payment, 12-hour cancellation, refunds) stand next to it since 15.11.2026: Paysera's review
// asks that the sale terms be reachable on the site itself, not only from the booking form.
// «Slapukų nustatymai» (16.11.2026) reopens the cookie banner, so consent can be withdrawn as easily as given.
// «Slapukų politika» (22.11.2026) is its own document, but not a footer link (Piotr 22.11.2026: two cookie items read as
// the same thing twice). It opens from the banner's «Plačiau» and from the privacy policy; the button stays here.
function LegalLinks({ className }: { className: string }) {
  const { t } = useLanguage();
  const items = [
    { label: t.footer.privacy, href: "/privatumas" },
    { label: t.footer.terms, href: "/rezervacija/salygos" },
  ];
  return (
    <nav aria-label={t.footer.legal} className={className}>
      {items.map((l, i) => (
        <span key={l.href} className="contents">
          {i > 0 && (
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
          )}
          <a href={l.href} className="inline-flex items-center min-h-11 hover:underline">
            {l.label}
          </a>
        </span>
      ))}
      <span aria-hidden="true" className="hidden sm:inline">
        ·
      </span>
      <button
        type="button"
        onClick={openConsentSettings}
        className="inline-flex items-center min-h-11 text-left hover:underline cursor-pointer"
      >
        {t.footer.cookies}
      </button>
    </nav>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  if (pathname === "/kontaktai") {
    return (
      <footer className="bg-graphite text-white py-3 [--focus-ring:var(--color-mint)]">
        <LegalLinks className="wrap flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1.5 text-small text-on-dark" />
      </footer>
    );
  }

  // The same targets as the header menu (07.11.2026: «Ką gydome» and «Paslaugos» open the home page blocks),
  // plus the way to the door, the map and the parking on /kontaktai.
  const links = [
    { label: t.nav.whatWeTreat, href: "/#ka-gydome" },
    { label: t.nav.services, href: "/#paslaugos" },
    { label: t.nav.specialists, href: "/specialistai" },
    { label: t.nav.prices, href: "/kainos" },
    ...(GIFT_VOUCHER_LIVE ? [{ label: t.nav.giftVoucher, href: "/dovanu-kuponas" }] : []),
    { label: t.footer.findUs, href: "/kontaktai#rasti-h" },
  ];

  return (
    <footer
      id="kontaktai"
      aria-labelledby="footer-h"
      className="bg-graphite text-white pt-12 desk:pt-16 pb-8 [--focus-ring:var(--color-mint)]"
    >
      <div className="wrap">
        <h2 id="footer-h" className="sr-only">
          {t.nav.contacts}
        </h2>
        <div className="grid gap-10 desk:grid-cols-[minmax(0,1.1fr)_auto_auto] desk:gap-x-14 lg:gap-x-[72px] desk:items-start">
          <div className="flex flex-col gap-6">
            <p className="max-w-[22ch] text-lead font-medium text-balance">{t.footer.tagline}</p>
            {!pathname.startsWith("/rezervacija") && (
              <Link href="/rezervacija" className="btn btn-mint text-body w-full desk:w-auto desk:self-start">
                {t.booking.online}
              </Link>
            )}
          </div>

          <ContactDetails />

          <nav aria-label={t.footer.patients}>
            <p className="text-small text-on-dark">{t.footer.patients}</p>
            {/* Rows of 44px set like the contact list: the label row above, values below, nothing moves on hover. */}
            <ul className="mt-3 flex flex-col gap-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="inline-flex items-center min-h-11 -my-2 text-body font-medium hover:text-mint">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social links, then the privacy policy and the booking terms as the very last line (Piotr 14.11.2026; terms 15.11.2026). No line above them. */}
        <div className="mt-10 desk:mt-12 flex flex-col gap-y-1 text-small text-on-dark">
          <nav aria-label={t.footer.menu} className="flex items-center gap-x-1.5">
            {social.map((s, i) => (
              <span key={s.href} className="contents">
                {i > 0 && <span aria-hidden="true">·</span>}
                <a href={s.href} {...external} className="inline-flex items-center min-h-11 hover:underline">
                  {s.label}
                </a>
              </span>
            ))}
          </nav>
          <LegalLinks className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-1.5 self-start" />
        </div>
      </div>
    </footer>
  );
}
