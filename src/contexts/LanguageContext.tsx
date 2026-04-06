"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, startTransition } from "react";
import { translations, Language } from "@/lib/translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "lt",
  setLang: () => {},
  t: translations.lt,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("lt");

  useEffect(() => {
    const stored = localStorage.getItem("reamed-lang") as Language;
    if (stored === "lt" || stored === "en") startTransition(() => setLangState(stored));
  }, []);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem("reamed-lang", l);
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
