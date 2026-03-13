"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function SpecialistsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="specialistai"
      className="section-padding bg-white"
      aria-labelledby="specialists-title"
    >
      <div className="container-xl">
        <div className="max-w-[620px] mb-10 md:mb-14">
          <h2
            id="specialists-title"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-foreground mb-4"
          >
            {t.specialists.title}
          </h2>
          <p className="text-[1rem] text-muted leading-relaxed">
            {t.specialists.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-8">
          {t.specialists.items.map((spec) => {
            const photo =
              spec.initials === "PD" ? "/specialist-piotr.jpg" :
              spec.initials === "KK" ? "/specialist-kotryna.jpg" :
              spec.initials === "EJ" ? "/specialist-erikas.jpg" :
              spec.initials === "MK" ? "/specialist-mangirdas.jpg" :
              null;
            return (
            <div
              key={spec.name}
              className="group bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden hover:border-[#90CECA] hover:shadow-[0_8px_32px_rgba(144,206,202,0.12)] transition-all duration-300"
            >
              {/* Avatar */}
              <div className="h-[300px] bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] flex items-center justify-center relative overflow-hidden">
                {photo ? (
                  <img
                    src={photo}
                    alt={spec.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 10%" }}
                  />
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full bg-white shadow-[0_4px_16px_rgba(144,206,202,0.2)] flex items-center justify-center">
                      <span className="text-[1.375rem] font-bold text-[#7DB9B5]">
                        {spec.initials}
                      </span>
                    </div>
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border border-[#90CECA]/15" aria-hidden="true" />
                    <div className="absolute -bottom-8 -left-4 w-20 h-20 rounded-full border border-[#90CECA]/15" aria-hidden="true" />
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-[1rem] font-bold text-foreground mb-1 leading-snug">
                  {spec.name}
                </h3>
                <p className="text-[0.8125rem] font-medium text-[#7DB9B5] mb-3 leading-snug">
                  {spec.role}
                </p>
                <p className="text-[0.8125rem] text-muted leading-relaxed">
                  {spec.description}
                </p>
              </div>
            </div>
            );
          })}
        </div>

        <a
          href="#kontaktai"
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#90CECA] text-[#5E6765] text-[0.875rem] font-semibold rounded-xl hover:bg-[#EEF5F4] transition-colors duration-200"
        >
          {t.specialists.cta} →
        </a>
      </div>
    </section>
  );
}
