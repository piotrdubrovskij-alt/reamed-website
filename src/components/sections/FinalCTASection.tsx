"use client";

import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FinalCTASection() {
  const { t } = useLanguage();

  return (
    <section
      id="kontaktai"
      className="section-padding bg-white"
      aria-labelledby="cta-title"
    >
      <div className="container-xl">
        <div
          className="rounded-3xl overflow-hidden"
          style={{ background: "#505251" }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* CTA content */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              {/* Mint accent line */}
              <div className="w-10 h-[3px] bg-[#90CECA] rounded-full mb-6" aria-hidden="true" />

              <h2
                id="cta-title"
                className="text-[1.875rem] md:text-[2.375rem] font-bold text-white leading-[1.15] mb-5"
              >
                {t.cta.title}
              </h2>
              <p className="text-[1rem] text-white/65 leading-relaxed mb-8 max-w-[460px]">
                {t.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/registracija"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#7DB9B5] text-white text-[0.9375rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_20px_rgba(121,184,179,0.3)]"
                >
                  {t.cta.btn1}
                  <ArrowRight size={17} strokeWidth={2.5} />
                </a>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white text-[0.9375rem] font-semibold rounded-xl hover:bg-white/8 hover:border-white/35 transition-colors duration-200"
                >
                  {t.cta.btn2}
                </a>
              </div>
            </div>

            {/* Contact info */}
            <div
              className="p-10 md:p-14 flex flex-col justify-center gap-5"
              style={{ background: "rgba(0,0,0,0.15)" }}
            >
              <a
                href="https://maps.google.com/?q=Olimpieciu+g.+1A-7,+Vilnius"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 text-white/80 hover:text-white transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/8 group-hover:bg-[#90CECA]/20 flex items-center justify-center transition-colors duration-200 mt-0.5 border border-white/10">
                  <MapPin size={18} strokeWidth={2} className="text-[#90CECA]" />
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold uppercase tracking-wider text-white/35 mb-0.5">Adresas</p>
                  <p className="text-[0.9375rem] font-medium leading-snug">{t.contact.address}</p>
                </div>
              </a>

              <a
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                className="group flex items-start gap-4 text-white/80 hover:text-white transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/8 group-hover:bg-[#90CECA]/20 flex items-center justify-center transition-colors duration-200 mt-0.5 border border-white/10">
                  <Phone size={18} strokeWidth={2} className="text-[#90CECA]" />
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold uppercase tracking-wider text-white/35 mb-0.5">Telefonas</p>
                  <p className="text-[0.9375rem] font-medium">{t.contact.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${t.contact.email}`}
                className="group flex items-start gap-4 text-white/80 hover:text-white transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/8 group-hover:bg-[#90CECA]/20 flex items-center justify-center transition-colors duration-200 mt-0.5 border border-white/10">
                  <Mail size={18} strokeWidth={2} className="text-[#90CECA]" />
                </div>
                <div>
                  <p className="text-[0.75rem] font-semibold uppercase tracking-wider text-white/35 mb-0.5">El. paštas</p>
                  <p className="text-[0.9375rem] font-medium">{t.contact.email}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
