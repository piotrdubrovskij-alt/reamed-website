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
    { label: t.nav.prices, href: "#kainos" },
    { label: t.nav.contacts, href: "#kontaktai" },
  ];

  return (
    <footer className="bg-foreground text-white" aria-label="Footer">
      <div className="container-xl">
        {/* Main footer */}
        <div className="py-14 md:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="inline-block mb-4" aria-label="ReaMed — pradžia">
              <span className="text-[1.5rem] font-bold tracking-tight text-white">
                Rea<span className="text-brand-mid">Med</span>
              </span>
            </a>
            <p className="text-[0.875rem] text-white/50 leading-relaxed mb-5">
              {t.footer.tagline}
            </p>
            {/* Language toggle */}
            <div className="flex items-center border border-white/15 rounded-md overflow-hidden text-[0.8rem] font-semibold w-fit">
              {(["lt", "en"] as Language[]).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 transition-colors duration-150 cursor-pointer ${
                    lang === l
                      ? "bg-brand text-white"
                      : "text-white/40 hover:text-white/70"
                  } ${i === 0 ? "" : "border-l border-white/15"}`}
                  aria-label={`Kalba: ${l.toUpperCase()}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[0.8125rem] font-semibold uppercase tracking-wider text-white/40 mb-5">
              Navigacija
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.9rem] text-white/65 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialistai */}
          <div>
            <h3 className="text-[0.8125rem] font-semibold uppercase tracking-wider text-white/40 mb-5">
              {t.nav.specialists}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {t.specialists.items.map((s) => (
                <li key={s.name}>
                  <a
                    href="#specialistai"
                    className="text-[0.9rem] text-white/65 hover:text-white transition-colors duration-200"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-[0.8125rem] font-semibold uppercase tracking-wider text-white/40 mb-5">
              {t.nav.contacts}
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href="https://maps.google.com/?q=Olimpieciu+g.+1A-7,+Vilnius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-[0.875rem] text-white/65 hover:text-white transition-colors duration-200"
                >
                  <MapPin size={15} strokeWidth={1.8} className="mt-0.5 flex-shrink-0" />
                  {t.footer.address}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${t.footer.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-[0.875rem] text-white/65 hover:text-white transition-colors duration-200"
                >
                  <Phone size={15} strokeWidth={1.8} className="flex-shrink-0" />
                  {t.footer.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.footer.email}`}
                  className="flex items-center gap-2.5 text-[0.875rem] text-white/65 hover:text-white transition-colors duration-200"
                >
                  <Mail size={15} strokeWidth={1.8} className="flex-shrink-0" />
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.8125rem] text-white/35">
            {t.footer.copyright}
          </p>
          <p className="text-[0.8125rem] text-white/25">
            reamed.lt
          </p>
        </div>
      </div>
    </footer>
  );
}
