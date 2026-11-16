"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import ConsentBanner from "@/components/ConsentBanner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
      <ConsentBanner />
    </LanguageProvider>
  );
}
