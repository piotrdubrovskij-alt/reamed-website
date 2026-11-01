"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_REVIEWS } from "@/data/reviews";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

const social = [
  { label: "Instagram", href: "https://www.instagram.com/reamedklinika/" },
  { label: "Facebook", href: "https://www.facebook.com/reamedklinika/" },
];

// Booking, contacts and map in one graphite block, shared by every page. No logo, no rules.
export default function Footer() {
  const { t } = useLanguage();
  const pathname = usePathname();

  return (
    <footer
      id="kontaktai"
      aria-labelledby="footer-h"
      className="bg-graphite text-white pt-12 desk:pt-16 pb-10 [&_:focus-visible]:outline-mint"
    >
      <div className="wrap">
        <h2 id="footer-h" className="sr-only">
          {t.nav.contacts}
        </h2>
        <div className="grid gap-10 desk:grid-cols-[auto_1fr] desk:gap-12 lg:gap-[72px]">
          <div className="flex flex-col gap-8">
            {pathname !== "/registracija" && (
              <Link href="/registracija" className="btn btn-mint text-body w-full desk:w-auto desk:self-start">
                {t.booking.online}
              </Link>
            )}
            {/* Values share one column; links stretch to 44px without moving the rows. */}
            <dl className="grid grid-cols-[auto_1fr] items-baseline gap-x-7 gap-y-3">
              <dt className="text-small text-on-dark">{t.booking.phone}</dt>
              <dd className="text-body font-medium">
                <a href={t.contact.phoneHref} className="inline-flex items-center min-h-11 -my-2 whitespace-nowrap hover:text-mint">
                  {t.contact.phone}
                </a>
              </dd>
              <dt className="text-small text-on-dark">{t.booking.address}</dt>
              <dd className="text-body font-medium">
                <a href={GOOGLE_REVIEWS.url} {...external} className="inline-flex items-center min-h-11 -my-2 hover:text-mint">
                  {t.contact.address}
                </a>
              </dd>
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

          {/* Static OSM map from scripts/build-map.mjs: no iframe, nothing loads from Google or OSM.
              The marker is the SVG's centre, so object-cover keeps it in view. Square corners, like the areas card. */}
          <a
            href={GOOGLE_REVIEWS.url}
            {...external}
            aria-label={t.footer.mapLabel}
            className="relative block h-[200px] overflow-hidden bg-ground desk:h-auto desk:min-h-60"
          >
            <Image src="/map/reamed-map.svg" alt="" fill unoptimized sizes="(min-width: 821px) 60vw, 100vw" className="object-cover" />
            <span className="absolute left-3 bottom-3 max-[360px]:bottom-8 inline-flex items-center gap-1.5 min-h-10 px-4 rounded-full bg-white text-ink text-small font-medium">
              {t.footer.map}
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
            {/* OSM attribution is required; 13px is the one exception to the type scale. Below 360px the pill sits above it. */}
            <span className="absolute right-0 bottom-0 px-1.5 py-0.5 bg-white/75 text-ink text-[13px] leading-normal">
              © OpenStreetMap
            </span>
          </a>
        </div>

        {/* One line from 360px; below that Instagram and Facebook move to a second line together. */}
        <nav aria-label={t.footer.menu} className="mt-10 desk:mt-12 flex flex-wrap items-center gap-x-1.5 text-small text-on-dark">
          <a href="/privatumas" className="inline-flex items-center min-h-11 hover:underline">
            {t.footer.privacy}
          </a>
          <span aria-hidden="true" className="max-[360px]:hidden">
            ·
          </span>
          <span className="inline-flex items-center gap-x-1.5 max-[360px]:w-full">
            {social.map((s, i) => (
              <span key={s.href} className="contents">
                {i > 0 && <span aria-hidden="true">·</span>}
                <a href={s.href} {...external} className="inline-flex items-center min-h-11 hover:underline">
                  {s.label}
                </a>
              </span>
            ))}
          </span>
        </nav>
      </div>
    </footer>
  );
}
