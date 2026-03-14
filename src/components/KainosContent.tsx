"use client";

import { ArrowRight, Phone } from "lucide-react";

function PackageRows({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-3 space-y-1.5">
      {rows.map(([label, price]) => (
        <div key={label} className="flex justify-between items-center text-[0.85rem]">
          <span className="text-muted">{label}</span>
          <span className="font-semibold text-secondary">{price}</span>
        </div>
      ))}
    </div>
  );
}

export default function KainosContent() {
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* HERO */}
      <div className="container-xl pt-12 pb-10 md:pt-14 md:pb-12 border-b border-[#DDE9E8]">
        <h1 className="text-[2.25rem] md:text-[2.875rem] font-bold text-foreground mb-3 leading-tight">
          Paslaugos ir kainos
        </h1>
        <p className="text-[1rem] text-muted max-w-[560px] leading-relaxed">
          Skaidrūs įkainiai be paslėptų mokesčių. Dažniausiai gydymas prasideda nuo pirminės konsultacijos ir ištyrimo, kad galėtume parinkti tinkamiausią kryptį.
        </p>
      </div>

      <div className="container-xl py-10 md:py-14 flex flex-col gap-10 md:gap-12">

        {/* 1 — NUO KO PRADĖTI */}
        <div>
          <h2 className="text-[1.125rem] font-bold text-foreground mb-4">Nuo ko pradėti?</h2>
          <div className="rounded-2xl border-2 border-[#90CECA] bg-white p-6 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <p className="text-[1.125rem] font-bold text-foreground leading-snug mb-1.5">
                Pirminė konsultacija + ištyrimas + planas
              </p>
              <p className="text-[0.85rem] text-muted mb-0.5">60 min</p>
              <p className="text-[0.85rem] text-muted">Dažniausias pirmas žingsnis naujam pacientui</p>
            </div>
            <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2 flex-shrink-0">
              <p className="text-[2.25rem] font-bold text-[#7DB9B5] leading-none">70 €</p>
              <a
                href="tel:+37060134304"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#7DB9B5] text-white text-[0.8125rem] font-semibold rounded-lg hover:bg-[#68A7A2] transition-colors duration-200"
              >
                Registruotis <ArrowRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* 2 — TRYS PAGRINDINĖS */}
        <div>
          <h2 className="text-[1.125rem] font-bold text-foreground mb-4">Pagrindiniai gydymo formatai</h2>
          <div className="grid md:grid-cols-3 gap-4">

            {/* Kineziterapija */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5 flex flex-col hover:border-[#90CECA] hover:shadow-[0_4px_20px_rgba(144,206,202,0.1)] transition-all duration-200">
              <h3 className="text-[1rem] font-bold text-foreground mb-0.5">Kineziterapija</h3>
              <p className="text-[0.8rem] text-muted mb-0.5">Individualus bazinis gydymo formatas</p>
              <p className="text-[0.75rem] text-muted mb-4">45 min</p>
              <p className="text-[2rem] font-bold text-[#7DB9B5] leading-none mb-1">60 €</p>
              <p className="text-[0.75rem] text-muted mb-4">vienas vizitas</p>
              <div className="border-t border-[#EEF5F4] pt-3">
                <PackageRows rows={[["3 kartai", "170 €"], ["5 kartai", "270 €"], ["10 kartų", "510 €"]]} />
              </div>
            </div>

            {/* Kompleksinė */}
            <div className="bg-white rounded-2xl border-2 border-[#90CECA] p-5 flex flex-col shadow-[0_4px_20px_rgba(144,206,202,0.12)] relative">
              <div className="absolute -top-3 left-5">
                <span className="bg-[#7DB9B5] text-white text-[0.68rem] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Populiariausia
                </span>
              </div>
              <h3 className="text-[1rem] font-bold text-foreground mb-0.5 mt-1">Kompleksinė reabilitacija</h3>
              <p className="text-[0.8rem] text-muted mb-0.5">Kineziterapija + 1 papildomas modulis</p>
              <p className="text-[0.75rem] text-muted mb-4">60 min</p>
              <p className="text-[2rem] font-bold text-[#7DB9B5] leading-none mb-1">70 €</p>
              <p className="text-[0.75rem] text-muted mb-4">vienas vizitas</p>
              <div className="border-t border-[#EEF5F4] pt-3">
                <PackageRows rows={[["3 kartai", "195 €"], ["5 kartai", "315 €"], ["10 kartų", "595 €"]]} />
              </div>
            </div>

            {/* Išplėstinė */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5 flex flex-col hover:border-[#90CECA] hover:shadow-[0_4px_20px_rgba(144,206,202,0.1)] transition-all duration-200">
              <h3 className="text-[1rem] font-bold text-foreground mb-0.5">Kompleksinė išplėstinė</h3>
              <p className="text-[0.8rem] text-muted mb-0.5">Kineziterapija + 2 papildomi moduliai</p>
              <p className="text-[0.75rem] text-muted mb-4">75 min</p>
              <p className="text-[2rem] font-bold text-[#7DB9B5] leading-none mb-1">85 €</p>
              <p className="text-[0.75rem] text-muted mb-4">vienas vizitas</p>
              <div className="border-t border-[#EEF5F4] pt-3">
                <PackageRows rows={[["3 kartai", "240 €"], ["5 kartai", "380 €"], ["10 kartų", "720 €"]]} />
              </div>
            </div>

          </div>
        </div>

        {/* 3 — PIOTR */}
        <div>
          <h2 className="text-[1.125rem] font-bold text-foreground mb-4">Vizitas pas specialistą</h2>
          <div
            className="rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-6"
            style={{ background: "linear-gradient(135deg, #3A3E3D 0%, #2C3030 100%)" }}
          >
            <div className="flex-1">
              <p className="text-[0.75rem] font-semibold uppercase tracking-wider text-[#90CECA] mb-2">Piotr Dubrovskij</p>
              <p className="text-[1.125rem] font-bold text-white mb-2 leading-snug">Individualus 60 min vizitas</p>
              <p className="text-[0.875rem] text-white/55 leading-relaxed max-w-[440px]">
                Vizito pobūdis parenkamas pagal būklę ir poreikį. Kaina nepriklauso nuo taikomo metodo.
              </p>
            </div>
            <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-3 flex-shrink-0">
              <p className="text-[2rem] font-bold text-[#90CECA] leading-none">100 €</p>
              <a
                href="tel:+37060134304"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#7DB9B5] text-white text-[0.8125rem] font-semibold rounded-lg hover:bg-[#68A7A2] transition-colors duration-200"
              >
                Registruotis vizitui <ArrowRight size={13} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* 4 — PAPILDOMOS PASLAUGOS */}
        <div>
          <h2 className="text-[1.125rem] font-bold text-foreground mb-4">Papildomos paslaugos</h2>
          <div className="grid md:grid-cols-3 gap-4">

            {/* Moduliai */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5">
              <h3 className="text-[1rem] font-bold text-foreground mb-0.5">Papildomas modulis</h3>
              <p className="text-[0.8rem] text-muted mb-1">15 min · tik kartu su vizitu</p>
              <p className="text-[1.75rem] font-bold text-[#7DB9B5] leading-none mb-4">18 €</p>
              <p className="text-[0.75rem] font-semibold text-secondary uppercase tracking-wider mb-2">Pavyzdžiai:</p>
              <ul className="space-y-1.5">
                {["Fizioterapija", "Elektroterapija", "Ultragarsas", "Minkštųjų audinių mobilizacija", "Masažas", "Teipavimas"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[0.8125rem] text-muted">
                    <span className="w-1 h-1 rounded-full bg-[#90CECA] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Masažas */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5">
              <h3 className="text-[1rem] font-bold text-foreground mb-4">Masažas</h3>
              <p className="text-[0.72rem] font-bold uppercase tracking-wider text-muted mb-2">30 min</p>
              <p className="text-[1.75rem] font-bold text-[#7DB9B5] leading-none mb-1">40 €</p>
              <PackageRows rows={[["3 kartai", "114 €"], ["5 kartai", "180 €"], ["10 kartų", "340 €"]]} />
              <div className="border-t border-[#EEF5F4] mt-4 pt-4">
                <p className="text-[0.72rem] font-bold uppercase tracking-wider text-muted mb-2">60 min</p>
                <p className="text-[1.75rem] font-bold text-[#7DB9B5] leading-none mb-1">65 €</p>
                <PackageRows rows={[["3 kartai", "185 €"], ["5 kartai", "290 €"], ["10 kartų", "550 €"]]} />
              </div>
            </div>

            {/* Fizioterapija */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5">
              <h3 className="text-[1rem] font-bold text-foreground mb-4">Fizioterapija</h3>
              <p className="text-[0.72rem] font-bold uppercase tracking-wider text-muted mb-2">15–20 min</p>
              <p className="text-[1.75rem] font-bold text-[#7DB9B5] leading-none mb-1">20 €</p>
              <PackageRows rows={[["3 kartai", "57 €"], ["5 kartai", "90 €"], ["10 kartų", "170 €"]]} />
            </div>

          </div>
        </div>

        {/* 5 — PAKETŲ TAISYKLĖS */}
        <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] px-6 py-5 md:px-8 md:py-6">
          <h2 className="text-[1rem] font-bold text-foreground mb-4">Paketų taisyklės</h2>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              "3× paketas galioja 6 savaites",
              "5× paketas galioja 3 mėnesius",
              "10× paketas galioja 6 mėnesius",
              "Atšaukimas mažiau nei prieš 24 val. — vizitas nurašomas iš paketo",
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#90CECA] mt-1.5 flex-shrink-0" />
                <p className="text-[0.9rem] text-secondary leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6 — CTA */}
        <div className="rounded-2xl border border-[#DDE9E8] bg-white p-8 md:p-10 text-center">
          <h2 className="text-[1.5rem] md:text-[1.875rem] font-bold text-foreground mb-3">
            Nežinote, nuo ko pradėti?
          </h2>
          <p className="text-[1rem] text-muted leading-relaxed mb-7 max-w-[480px] mx-auto">
            Dažniausiai rekomenduojame pradėti nuo pirminės konsultacijos ir ištyrimo — vizito metu padėsime pasirinkti tinkamiausią kryptį.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <a
              href="tel:+37060134304"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7DB9B5] text-white text-[0.9375rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)]"
            >
              Registruotis <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="mailto:info@reamed.lt"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#DDE9E8] text-secondary text-[0.9375rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
            >
              <Phone size={15} strokeWidth={2} /> Susisiekti
            </a>
          </div>
          <p className="text-[0.85rem] text-muted">+370 601 34304 · info@reamed.lt</p>
        </div>

      </div>
    </div>
  );
}
