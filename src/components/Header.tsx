"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Check, ChevronDown, Menu, Phone, X } from "lucide-react";
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

// Language names stay in their own language whichever one is on.
const languageNames: Record<Language, string> = { lt: "Lietuvių", en: "English" };

// Below lg: one 44px button with the current language and a list under it.
function LanguageMenu() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const close = (refocus: boolean) => {
    setOpen(false);
    if (refocus) button.current?.focus();
  };

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    return () => document.removeEventListener("pointerdown", onPointer);
  }, [open]);

  return (
    <div
      ref={root}
      className="relative lg:hidden"
      onKeyDown={(e) => {
        if (open && e.key === "Escape") {
          // Close the list only, not the mobile menu around it.
          e.stopPropagation();
          close(true);
        }
      }}
      onBlur={(e) => {
        if (open && !root.current?.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={button}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="language-menu"
        className="inline-flex items-center justify-center gap-0.5 min-w-11 h-11 px-1 rounded-full text-small font-medium text-ink cursor-pointer"
      >
        <span className="sr-only">{t.header.language}: </span>
        {lang.toUpperCase()}
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
        />
      </button>
      <ul
        id="language-menu"
        hidden={!open}
        className="absolute left-0 top-full mt-1 z-10 w-44 py-1 bg-white border border-ground-hover rounded-2xl"
      >
        {(["lt", "en"] as Language[]).map((l) => (
          <li key={l}>
            <button
              type="button"
              lang={l}
              aria-current={lang === l ? "true" : undefined}
              onClick={() => {
                setLang(l);
                close(true);
              }}
              className="flex w-full items-center justify-between gap-3 min-h-11 px-4 text-left text-small font-medium text-ink hover:bg-ground cursor-pointer"
            >
              {languageNames[l]}
              {lang === l && <Check size={18} aria-hidden="true" className="shrink-0" />}
            </button>
          </li>
        ))}
      </ul>
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
      <div className="wrap flex items-center justify-between gap-3 lg:gap-6 h-header lg:h-header-lg">
        <Link href="/" onClick={goHome} aria-label={t.header.home} className="shrink-0 inline-flex items-center min-h-11">
          <Image
            src="/brand/reamed-wordmark-graphite.svg"
            alt=""
            width={150}
            height={31}
            priority
            className="w-[96px] min-[360px]:w-[124px] lg:w-[150px] h-auto"
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

        {/* Below lg: language, phone, booking and menu as 44px zones with no gaps between them. */}
        <div className="flex items-center lg:gap-[22px] text-small font-medium">
          <LanguageSwitch className="hidden lg:flex" />
          <LanguageMenu />
          <a href={t.contact.phoneHref} className="hidden xl:inline-flex items-center min-h-11 whitespace-nowrap">
            {t.contact.phone}
          </a>
          <a
            href={t.contact.phoneHref}
            aria-label={`${t.header.call} ${t.contact.phone}`}
            className="lg:hidden inline-flex items-center justify-center size-11 rounded-full text-ink"
          >
            <Phone size={22} aria-hidden="true" />
          </a>
          <Link
            href="/registracija"
            aria-label={t.header.book}
            className="lg:hidden inline-flex items-center justify-center size-11 rounded-full bg-graphite text-white hover:bg-ink transition-colors duration-150"
          >
            <CalendarDays size={22} aria-hidden="true" />
          </Link>
          <Link href="/registracija" className="max-lg:hidden btn btn-dark min-h-[46px] px-[22px] text-small">
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
          <div className="mt-4 text-small font-medium">
            <a href={t.contact.phoneHref} className="inline-flex items-center min-h-11">
              {t.contact.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
