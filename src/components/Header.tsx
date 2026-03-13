"use client";

import { useState, useEffect } from "react";
import { Phone, Clock, Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* ── TOP BAR ── */}
      <div style={{ background: "#505251" }}>
        <div className="container-xl">
          <div className="flex items-center justify-between h-9">

            {/* Left */}
            <span className="hidden sm:flex items-center gap-1.5 text-[0.72rem] text-white/50">
              <Clock size={11} strokeWidth={2} className="text-[#90CECA]" />
              I–V 8:00–19:00
            </span>

            {/* Right */}
            <div className="flex items-center gap-4 md:gap-5">
              {/* Hours — hidden on small mobile, shown on md+ */}
              <span className="hidden md:flex items-center gap-1.5 text-[0.72rem] text-white/50">
                <Clock size={11} strokeWidth={2} className="text-[#90CECA]" />
                I–V 8:00–19:00
              </span>

              {/* Phone */}
              <a
                href="tel:+37060134304"
                className="flex items-center gap-1.5 text-[0.72rem] text-white/60 hover:text-white transition-colors duration-150"
              >
                <Phone size={11} strokeWidth={2} className="text-[#90CECA]" />
                +370 601 34304
              </a>

              {/* Language */}
              <div className="flex items-center text-[0.7rem] font-semibold">
                {(["lt", "en"] as Language[]).map((l, i) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-1.5 py-0.5 transition-colors duration-150 cursor-pointer ${
                      lang === l ? "text-[#90CECA]" : "text-white/35 hover:text-white/60"
                    } ${i === 0 ? "border-r border-white/15 pr-1.5" : "pl-1.5"}`}
                    aria-label={`Kalba: ${l.toUpperCase()}`}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/97 backdrop-blur-md shadow-[0_2px_24px_rgba(31,37,36,0.08)]"
            : "bg-white"
        }`}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-16 md:h-[68px]">

            {/* Wordmark */}
            <a
              href="#"
              className="flex-shrink-0 text-[1.375rem] font-bold tracking-tight text-foreground hover:text-[#7DB9B5] transition-colors duration-200"
              aria-label="ReaMed — pradžia"
            >
              Rea<span className="text-[#7DB9B5]">Med</span>
            </a>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-6 xl:gap-8"
              aria-label="Pagrindinis meniu"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[0.875rem] font-medium text-muted hover:text-[#7DB9B5] transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-[#90CECA] rounded-full group-hover:w-full transition-all duration-250" />
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="#kontaktai"
                className="px-5 py-2.5 bg-[#7DB9B5] text-white text-[0.875rem] font-semibold rounded-lg hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_2px_12px_rgba(125,185,181,0.28)]"
              >
                {t.header.register}
              </a>
            </div>

            {/* Mobile controls */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href="#kontaktai"
                className="px-4 py-1.5 bg-[#7DB9B5] text-white text-[0.8rem] font-semibold rounded-lg hover:bg-[#68A7A2] transition-colors duration-200"
              >
                {t.header.register}
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-foreground hover:text-[#7DB9B5] transition-colors duration-200"
                aria-label={mobileOpen ? "Uždaryti meniu" : "Atidaryti meniu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#D8E6E4]" />
      </div>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white border-b border-[#D8E6E4] shadow-[0_8px_24px_rgba(31,37,36,0.08)]`}
      >
        <nav
          className="container-xl py-4 flex flex-col gap-1"
          aria-label="Mobilusis meniu"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="py-2.5 px-1 text-[0.9375rem] font-medium text-secondary hover:text-[#7DB9B5] border-b border-[#EEF5F4] last:border-0 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          {/* Phone in mobile menu */}
          <div className="pt-3 mt-1 flex items-center gap-2 text-[0.875rem] text-muted">
            <Clock size={13} className="text-[#90CECA]" strokeWidth={2} />
            <span>I–V 8:00–19:00</span>
            <span className="mx-1 text-[#D8E6E4]">·</span>
            <a href="tel:+37060134304" className="hover:text-[#7DB9B5] transition-colors duration-200">
              +370 601 34304
            </a>
          </div>
        </nav>
      </div>

    </header>
  );
}
