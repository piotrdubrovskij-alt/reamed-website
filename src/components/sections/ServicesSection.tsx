"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceLinkMap: Record<string, string> = {
  Kineziterapija: "/paslaugos/kineziterapija",
  Kinesiology: "/paslaugos/kineziterapija",
  "Manualinė terapija": "/paslaugos/manualine-terapija",
  "Manual therapy": "/paslaugos/manualine-terapija",
  "Gydomasis masažas": "/paslaugos/gydomasis-masazas",
  "Therapeutic massage": "/paslaugos/gydomasis-masazas",
  "Osteopatija": "/paslaugos/osteopatija",
  "Osteopathy": "/paslaugos/osteopatija",
  "Sporto reabilitacija": "/paslaugos/sporto-reabilitacija",
  "Sports rehabilitation": "/paslaugos/sporto-reabilitacija",
  "Pooperacinė reabilitacija": "/paslaugos/pooperacine-reabilitacija",
  "Post-operative rehabilitation": "/paslaugos/pooperacine-reabilitacija",
};

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="paslaugos"
      className="section-padding bg-white"
      aria-labelledby="services-title"
    >
      <div className="container-xl">
        <div className="mb-10 md:mb-12">
          <h2
            id="services-title"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground"
          >
            {t.services.title}
          </h2>
        </div>

        {/* 3×2 desktop, 2×3 tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {t.services.items.map((service) => (
            <a
              key={service.title}
              href={serviceLinkMap[service.title] ?? "#kontaktai"}
              className="group bg-white rounded-2xl border border-[#DDE9E8] p-6 hover:border-[#90CECA] hover:shadow-[0_6px_28px_rgba(144,206,202,0.12)] transition-all duration-200 hover:-translate-y-0.5 flex flex-col cursor-pointer"
            >
              <h3 className="text-[1rem] font-semibold text-foreground mb-2 leading-snug group-hover:text-[#68A7A2] transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-[0.875rem] text-muted leading-relaxed flex-1 mb-5">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-[#7DB9B5] group-hover:text-[#68A7A2] group-hover:gap-2 transition-all duration-200">
                Sužinoti daugiau
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </a>
          ))}
        </div>
        {/* Bottom note */}
        <div className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:items-center gap-5 p-6 md:p-8 rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4]">
          <div className="flex-1">
            <p className="text-[0.9375rem] font-semibold text-foreground mb-1.5">
              Nuo ko pradėti?
            </p>
            <p className="text-[0.9rem] text-muted leading-relaxed">
              Dažniausiai gydymas prasideda nuo pirminės konsultacijos ir ištyrimo. Vizito metu įvertiname būklę, aptariame simptomus ir parenkame tinkamiausią gydymo kryptį.
            </p>
          </div>
          <a
            href="/registracija"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.875rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_2px_12px_rgba(125,185,181,0.25)]"
          >
            Registruotis
          </a>
        </div>
      </div>
    </section>
  );
}
