"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { label: t.nav.services, href: "#paslaugos" },
    { label: t.nav.whatWeTreat, href: "#ka-gydome" },
    { label: t.nav.specialists, href: "#specialistai" },
    { label: t.nav.prices, href: "/kainos" },
    { label: t.nav.contacts, href: "#kontaktai" },
  ];

  return (
    <footer style={{ background: "#454847" }} className="text-white" aria-label="Footer">
      <div className="container-xl">

        {/* Top divider with mint accent */}
        <div className="h-[2px] bg-gradient-to-r from-[#90CECA] via-[#90CECA]/30 to-transparent mb-0" />

        {/* Main grid */}
        <div className="py-10 md:py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-3.5" aria-label="ReaMed — pradžia">
              <img
                src="/logo.svg"
                alt="ReaMed"
                className="h-6 w-auto brightness-0 invert opacity-60"
              />
            </a>
            <p className="text-[0.83rem] text-white/35 leading-relaxed mb-4 max-w-[200px]">
              {t.footer.tagline}
            </p>
            <div className="flex items-center border border-white/10 rounded-md overflow-hidden text-[0.75rem] font-semibold w-fit">
              {(["lt", "en"] as Language[]).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1.5 transition-colors duration-150 cursor-pointer ${
                    lang === l ? "bg-[#7DB9B5] text-white" : "text-white/30 hover:text-white/60"
                  } ${i === 0 ? "" : "border-l border-white/10"}`}
                  aria-label={`Kalba: ${l.toUpperCase()}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-[#90CECA]/50 mb-4">
              Navigacija
            </p>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.875rem] text-white/50 hover:text-white/90 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialists */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-[#90CECA]/50 mb-4">
              {t.nav.specialists}
            </p>
            <ul className="flex flex-col gap-2">
              {t.specialists.items.map((s) => (
                <li key={s.name}>
                  <a
                    href="#specialistai"
                    className="text-[0.875rem] text-white/50 hover:text-white/90 transition-colors duration-200"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-[#90CECA]/50 mb-4">
              {t.nav.contacts}
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="https://maps.google.com/?q=Olimpieciu+g.+1A-7,+Vilnius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-[0.875rem] text-white/50 hover:text-white/90 transition-colors duration-200"
                >
                  <MapPin size={13} strokeWidth={1.6} className="mt-0.5 flex-shrink-0 text-[#90CECA]/60" />
                  {t.footer.address}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.footer.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-[0.875rem] text-white/50 hover:text-white/90 transition-colors duration-200"
                >
                  <Phone size={13} strokeWidth={1.6} className="flex-shrink-0 text-[#90CECA]/60" />
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="flex items-center gap-2.5 text-[0.875rem] text-white/50 hover:text-white/90 transition-colors duration-200"
                >
                  <Mail size={13} strokeWidth={1.6} className="flex-shrink-0 text-[#90CECA]/60" />
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[0.78rem] text-white/25">{t.footer.copyright}</p>
          <p className="text-[0.78rem] text-white/15">reamed.lt</p>
        </div>

      </div>
    </footer>
  );
}
