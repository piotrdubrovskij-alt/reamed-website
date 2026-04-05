"use client";

import Link from "next/link";
import { Phone, FileText, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PHONE_HREF = "tel:+37060134304";
const PHONE_DISPLAY = "+370 601 34304";
const WA_HREF = "https://wa.me/37060134304";

const WA_ICON = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const content = {
  lt: {
    back: "Atgal",
    tag: "Registracija vizitui",
    title: "Kaip registruotis?",
    subtitle:
      "Pasirinkite patogų būdą susisiekti — patvirtinsime vizito laiką arba atsakysime į klausimus.",
    hint: "Susisieksime su Jumis per 24 val. darbo dienomis.",
    options: [
      {
        id: "call",
        icon: <Phone size={22} strokeWidth={1.8} />,
        label: "Skambinti",
        description: PHONE_DISPLAY,
        sub: "Greičiausias būdas",
        href: PHONE_HREF,
        external: false,
        primary: true,
      },
      {
        id: "wa",
        icon: WA_ICON,
        label: "Rašyti WhatsApp",
        description: "wa.me/37060134304",
        sub: "Darbo dienomis iki 19:00",
        href: WA_HREF,
        external: true,
        primary: false,
      },
      {
        id: "form",
        icon: <FileText size={22} strokeWidth={1.8} />,
        label: "Palikti užklausą",
        description: "Trumpa forma — atsakysime per 24 val.",
        sub: "Jei negalite skambinti dabar",
        href: "/kontaktai",
        external: false,
        primary: false,
      },
    ],
  },
  en: {
    back: "Back",
    tag: "Book a visit",
    title: "How to book?",
    subtitle:
      "Choose a convenient way to get in touch — we will confirm your appointment or answer any questions.",
    hint: "We will get back to you within 24 working hours.",
    options: [
      {
        id: "call",
        icon: <Phone size={22} strokeWidth={1.8} />,
        label: "Call us",
        description: PHONE_DISPLAY,
        sub: "Fastest way to reach us",
        href: PHONE_HREF,
        external: false,
        primary: true,
      },
      {
        id: "wa",
        icon: WA_ICON,
        label: "WhatsApp",
        description: "wa.me/37060134304",
        sub: "Weekdays until 19:00",
        href: WA_HREF,
        external: true,
        primary: false,
      },
      {
        id: "form",
        icon: <FileText size={22} strokeWidth={1.8} />,
        label: "Leave a request",
        description: "Short form — we reply within 24 h",
        sub: "If you cannot call right now",
        href: "/kontaktai",
        external: false,
        primary: false,
      },
    ],
  },
} as const;

export default function RegistracijaContent() {
  const { lang } = useLanguage();
  const c = content[lang];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#F7FAF9", paddingTop: "104px" }}
    >
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 md:py-16">
        <div className="w-full max-w-[440px]">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[0.8125rem] text-muted hover:text-[#7DB9B5] transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            {c.back}
          </Link>

          {/* Tag */}
          <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-3">
            {c.tag}
          </p>

          {/* Title */}
          <h1 className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground leading-tight mb-3">
            {c.title}
          </h1>

          {/* Subtitle */}
          <p className="text-[0.9375rem] text-muted leading-relaxed mb-8 max-w-[380px]">
            {c.subtitle}
          </p>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {c.options.map((opt) => {
              const inner = (
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-200 ${
                      opt.primary
                        ? "bg-white/20 text-white"
                        : "bg-[#EEF5F4] text-[#7DB9B5]"
                    }`}
                  >
                    {opt.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-[1rem] font-bold leading-tight mb-0.5 ${
                        opt.primary ? "text-white" : "text-foreground"
                      }`}
                    >
                      {opt.label}
                    </p>
                    <p
                      className={`text-[0.875rem] font-medium truncate ${
                        opt.primary ? "text-white/90" : "text-[#7DB9B5]"
                      }`}
                    >
                      {opt.description}
                    </p>
                    <p
                      className={`text-[0.75rem] mt-0.5 ${
                        opt.primary ? "text-white/60" : "text-muted/60"
                      }`}
                    >
                      {opt.sub}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className={`flex-shrink-0 ${
                      opt.primary ? "text-white/70" : "text-[#90CECA]"
                    }`}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              );

              const baseClass = `w-full px-5 py-4 rounded-2xl border-2 transition-all duration-200 text-left active:scale-[0.98] ${
                opt.primary
                  ? "bg-[#7DB9B5] border-[#7DB9B5] hover:bg-[#68A7A2] hover:border-[#68A7A2] shadow-[0_6px_24px_rgba(125,185,181,0.32)] hover:-translate-y-0.5"
                  : "bg-white border-[#DDE9E8] hover:border-[#90CECA] hover:shadow-[0_4px_16px_rgba(125,185,181,0.12)]"
              }`;

              if (opt.external) {
                return (
                  <a
                    key={opt.id}
                    href={opt.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={baseClass}
                  >
                    {inner}
                  </a>
                );
              }

              if (opt.href.startsWith("tel:")) {
                return (
                  <a key={opt.id} href={opt.href} className={baseClass}>
                    {inner}
                  </a>
                );
              }

              return (
                <Link key={opt.id} href={opt.href} className={baseClass}>
                  {inner}
                </Link>
              );
            })}
          </div>

          {/* Hint */}
          <div className="mt-6 flex items-center gap-2 justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] flex-shrink-0" aria-hidden="true" />
            <p className="text-[0.8125rem] text-muted/70 text-center">{c.hint}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
