"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t.nav.services, href: "#paslaugos" },
    { label: t.nav.whatWeTreat, href: "#ka-gydome" },
    { label: t.nav.specialists, href: "#specialistai" },
    { label: t.nav.prices, href: "#kainos" },
    { label: t.nav.contacts, href: "#kontaktai" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_0_rgba(13,27,46,0.08)]"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0" aria-label="ReaMed — pradžia">
            <Image
              src="/logo.png"
              alt="ReaMed klinika"
              width={120}
              height={68}
              className="h-11 w-auto object-contain rounded-lg"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Pagrindinis meniu">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.875rem] font-medium text-secondary hover:text-brand transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${t.header.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-[0.875rem] font-medium text-secondary hover:text-brand transition-colors duration-200"
            >
              <Phone size={15} strokeWidth={2} />
              {t.header.phone}
            </a>

            {/* Language toggle */}
            <div className="flex items-center border border-border rounded-md overflow-hidden text-[0.8rem] font-semibold">
              {(["lt", "en"] as Language[]).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 transition-colors duration-150 cursor-pointer ${
                    lang === l
                      ? "bg-brand text-white"
                      : "text-muted hover:text-foreground"
                  } ${i === 0 ? "" : "border-l border-border"}`}
                  aria-label={`Kalba: ${l.toUpperCase()}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>

            <a
              href="#kontaktai"
              className="px-5 py-2 bg-brand text-white text-[0.875rem] font-semibold rounded-lg hover:bg-brand-dark transition-colors duration-200 shadow-sm"
            >
              {t.header.register}
            </a>
          </div>

          {/* Mobile right */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="#kontaktai"
              className="px-4 py-1.5 bg-brand text-white text-[0.8rem] font-semibold rounded-lg hover:bg-brand-dark transition-colors duration-200"
            >
              {t.header.register}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground hover:text-brand transition-colors duration-200"
              aria-label={mobileOpen ? "Uždaryti meniu" : "Atidaryti meniu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-border`}
      >
        <nav className="container-xl py-4 flex flex-col gap-1" aria-label="Mobilusis meniu">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-[0.9375rem] font-medium text-secondary hover:text-brand transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 mt-1 border-t border-border flex items-center justify-between">
            <a
              href={`tel:${t.header.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-[0.875rem] font-medium text-muted hover:text-brand transition-colors duration-200"
            >
              <Phone size={15} strokeWidth={2} />
              {t.header.phone}
            </a>
            <div className="flex items-center border border-border rounded-md overflow-hidden text-[0.8rem] font-semibold">
              {(["lt", "en"] as Language[]).map((l, i) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 transition-colors duration-150 cursor-pointer ${
                    lang === l
                      ? "bg-brand text-white"
                      : "text-muted hover:text-foreground"
                  } ${i === 0 ? "" : "border-l border-border"}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
