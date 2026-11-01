"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";

function LanguageSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className={`flex items-center ${className}`} role="group" aria-label={t.header.language}>
      {(["lt", "en"] as Language[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          lang={l}
          className={`min-h-11 min-w-11 px-2 rounded-full text-small font-medium cursor-pointer transition-colors duration-150 ${
            lang === l ? "text-ink underline decoration-mint decoration-2 underline-offset-[6px]" : "text-graphite hover:text-ink"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // The logo always lands on the top of the home page. On the home page itself
  // (also /#kontaktai) scroll up and drop the anchor; elsewhere Link opens it at the top.
  const goHome = (e: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname !== "/" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    if (window.location.hash || window.location.search) window.history.replaceState(window.history.state, "", "/");
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const navItems = [
    { label: t.nav.whatWeTreat, href: "/#ka-gydome" },
    { label: t.nav.services, href: "/#paslaugos" },
    { label: t.nav.specialists, href: "/#specialistai" },
    { label: t.nav.prices, href: "/kainos" },
    { label: t.nav.contacts, href: "/kontaktai" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ground">
      <div className="wrap flex items-center justify-between gap-6 h-header lg:h-header-lg">
        <Link href="/" onClick={goHome} aria-label={t.header.home} className="shrink-0 inline-flex items-center min-h-11">
          <Image
            src="/brand/reamed-wordmark-graphite.svg"
            alt=""
            width={150}
            height={31}
            priority
            className="w-[124px] lg:w-[150px] h-auto"
          />
        </Link>

        <nav className="hidden lg:block" aria-label={t.header.mainMenu}>
          <ul className="flex gap-[30px] text-small font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center min-h-11 hover:underline hover:decoration-mint hover:decoration-2 hover:underline-offset-[6px]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:gap-[22px] text-small font-medium">
          <LanguageSwitch className="hidden lg:flex" />
          <a href={t.contact.phoneHref} className="hidden xl:inline-flex items-center min-h-11 whitespace-nowrap">
            {t.contact.phone}
          </a>
          <Link href="/registracija" className="btn btn-dark min-h-11 lg:min-h-[46px] px-[18px] lg:px-[22px] text-small">
            {t.header.register}
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            className="lg:hidden inline-flex items-center justify-center size-11 -mr-2.5 rounded-full text-ink hover:bg-paper cursor-pointer"
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="lg:hidden bg-ground">
        <nav className="wrap pb-8" aria-label={t.header.mobileMenu}>
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center min-h-14 text-lead font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between gap-4 text-small font-medium">
            <a href={t.contact.phoneHref} className="inline-flex items-center min-h-11">
              {t.contact.phone}
            </a>
            <LanguageSwitch className="-mr-2" />
          </div>
        </nav>
      </div>
    </header>
  );
}
