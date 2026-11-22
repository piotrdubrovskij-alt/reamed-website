"use client";

import { startTransition, useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  acceptConsent,
  CONSENT_OPEN_EVENT,
  declineConsent,
  loadGoogleTag,
  readConsent,
  track,
} from "@/lib/analytics";

const copy = {
  lt: {
    label: "Slapukų sutikimas",
    text: "Naudojame statistikos ir reklamos slapukus.",
    more: "Plačiau",
    decline: "Nesutinku",
    accept: "Sutinku",
  },
  en: {
    label: "Cookie consent",
    text: "We use statistics and advertising cookies.",
    more: "More",
    decline: "Decline",
    accept: "Accept",
  },
};

/**
 * Cookie consent (Piotr 16.11.2026): Google Analytics 4 and Google Ads measurement only after «Sutinku».
 * Both answers are buttons of the same weight; the banner does not cover the page and can be reopened from
 * the footer («Slapukų nustatymai») and the privacy policy. Also counts clicks on tel: and mailto: links
 * anywhere on the site (sent only after consent, see src/lib/analytics.ts).
 */
export default function ConsentBanner() {
  const { lang } = useLanguage();
  const c = copy[lang];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const choice = readConsent();
    if (choice === "granted") loadGoogleTag();
    else if (choice === null) startTransition(() => setOpen(true));

    const onOpen = () => setOpen(true);
    const onClick = (e: MouseEvent) => {
      const link = e.target instanceof Element ? e.target.closest("a[href]") : null;
      const href = link?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) track("phone_click");
      else if (href.startsWith("mailto:")) track("email_click");
    };
    window.addEventListener(CONSENT_OPEN_EVENT, onOpen);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, onOpen);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  if (!open) return null;

  const answer = (granted: boolean) => {
    setOpen(false);
    if (granted) acceptConsent();
    else declineConsent();
  };

  return (
    <section
      aria-label={c.label}
      className="fixed inset-x-0 bottom-0 z-50 p-3 desk:p-6 pointer-events-none"
    >
      {/* One line and two buttons (Piotr 17.11.2026: no explanations on the banner, the details are behind «Plačiau»). */}
      <div className="pointer-events-auto mx-auto desk:mx-0 max-w-[760px] rounded-[20px] border border-rule bg-paper p-4 desk:py-4 desk:px-5 text-ink shadow-[0_8px_32px_rgba(43,44,43,0.16)] flex flex-col gap-3 desk:flex-row desk:items-center desk:gap-5">
        <p className="text-small desk:flex-1">
          {c.text}{" "}
          <Link href="/slapukai" className="link-action whitespace-nowrap">
            {c.more}
          </Link>
        </p>
        <div className="grid grid-cols-2 gap-3 desk:shrink-0">
          <button type="button" onClick={() => answer(false)} className="btn btn-dark min-h-11 px-5 text-small">
            {c.decline}
          </button>
          <button type="button" onClick={() => answer(true)} className="btn btn-dark min-h-11 px-5 text-small">
            {c.accept}
          </button>
        </div>
      </div>
    </section>
  );
}
