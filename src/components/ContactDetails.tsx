"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { GOOGLE_REVIEWS } from "@/data/reviews";

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

// Phone, address, hours and e-mail as one list on graphite: the footer of every page and the top of /kontaktai.
// Values share one column; links stretch to 44px without moving the rows.
export default function ContactDetails() {
  const { t } = useLanguage();

  return (
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
      {/* Weekdays and Saturday on their own lines, so the row never breaks mid-range at 320px. */}
      <dd className="text-body font-medium">
        {t.booking.hoursValue.split(", ").map((line) => (
          <span key={line} className="block whitespace-nowrap">
            {line}
          </span>
        ))}
      </dd>
      <dt className="text-small text-on-dark">{t.booking.email}</dt>
      <dd className="text-body font-medium">
        <a href={`mailto:${t.contact.email}`} className="inline-flex items-center min-h-11 -my-2 hover:text-mint">
          {t.contact.email}
        </a>
      </dd>
    </dl>
  );
}
