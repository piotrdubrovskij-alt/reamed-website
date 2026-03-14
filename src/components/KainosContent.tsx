"use client";

import { ArrowRight, Phone } from "lucide-react";

function PackageRows({ rows }: { rows: [string, string][] }) {
  return (
    <div className="space-y-1">
      {rows.map(([label, price]) => (
        <div key={label} className="flex justify-between items-center text-[0.82rem]">
          <span className="text-muted">{label}</span>
          <span className="font-medium text-[#5F6866]">{price}</span>
        </div>
      ))}
    </div>
  );
}

export default function KainosContent() {
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* HERO */}
      <div className="container-xl pt-8 pb-8 md:pt-10 md:pb-10 border-b border-[#DDE9E8]">
        <h1 className="text-[2rem] md:text-[2.625rem] font-bold text-foreground mb-2.5 leading-tight">
          Paslaugos ir kainos
        </h1>
        <p className="text-[0.9375rem] text-muted max-w-[400px] leading-relaxed">
          Skaidrūs įkainiai be paslėptų mokesčių. Dažniausiai gydymas prasideda nuo pirminės konsultacijos ir ištyrimo.
        </p>
      </div>

      <div className="container-xl py-8 md:py-10 flex flex-col gap-7 md:gap-9">

        {/* 1 — NUO KO PRADĖTI */}
        <div>
          <h2 className="text-[1rem] font-bold text-foreground mb-3">Nuo ko pradėti?</h2>
          <div className="rounded-2xl border-2 border-[#90CECA] bg-white overflow-hidden">
            <div className="flex flex-col sm:flex-row">
              {/* Left */}
              <div className="flex-1 p-5 sm:p-6 border-b sm:border-b-0 sm:border-r border-[#EEF5F4]">
                <p className="text-[1.0625rem] font-bold text-foreground leading-snug mb-1.5">
                  Pirminė konsultacija + ištyrimas + planas
                </p>
                <p className="text-[0.8125rem] text-muted/75">
                  60 min · Rekomenduojamas pirmasis vizitas naujam pacientui
                </p>
              </div>
              {/* Right */}
              <div className="flex items-center gap-5 p-5 sm:p-6 sm:flex-col sm:items-end sm:justify-center sm:gap-2.5">
                <p className="text-[2.25rem] font-bold text-[#7DB9B5] leading-none">70 €</p>
                <a
                  href="tel:+37060134304"
                  className="inline-flex items-center gap-1.5 px-4 py-1 bg-[#7DB9B5] text-white text-[0.8rem] font-semibold rounded-lg hover:bg-[#68A7A2] transition-colors duration-200"
                >
                  Registruotis <ArrowRight size={12} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2 — TRYS PAGRINDINĖS */}
        <div>
          <h2 className="text-[1rem] font-bold text-foreground mb-3">Pagrindiniai gydymo formatai</h2>
          <div className="grid md:grid-cols-3 gap-4">

            {/* Kineziterapija */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5 flex flex-col hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200">
              <h3 className="text-[1.0625rem] font-bold text-foreground mb-1">Kineziterapija</h3>
              <p className="text-[0.78rem] text-muted leading-snug mb-0.5 min-h-[2.4rem]">
                Individualus bazinis gydymo formatas
              </p>
              <p className="text-[0.72rem] text-muted/60 mb-3">45 min</p>
              <p className="text-[2.25rem] font-bold text-[#7DB9B5] leading-none mb-0.5">60 €</p>
              <p className="text-[0.72rem] text-muted/55 mb-4">vienas vizitas</p>
              <div className="border-t border-[#EEF5F4] pt-3 mt-auto">
                <PackageRows rows={[["3 kartai", "170 €"], ["5 kartai", "270 €"], ["10 kartų", "510 €"]]} />
              </div>
            </div>

            {/* Kompleksinė — popular */}
            <div className="bg-white rounded-2xl border-2 border-[#90CECA] p-5 flex flex-col shadow-[0_4px_20px_rgba(144,206,202,0.12)] relative">
              <div className="absolute -top-2.5 left-4">
                <span className="text-[0.65rem] font-semibold text-[#7DB9B5] uppercase tracking-widest border border-[#90CECA] bg-white px-2 py-0.5 rounded-full">
                  Populiariausia
                </span>
              </div>
              <h3 className="text-[1.0625rem] font-bold text-foreground mb-1 mt-1.5">Kompleksinė reabilitacija</h3>
              <p className="text-[0.78rem] text-muted leading-snug mb-0.5 min-h-[2.4rem]">
                45 min kineziterapija + 15 min papildoma priemonė pagal indikacijas
              </p>
              <p className="text-[0.72rem] text-muted/60 mb-3">60 min</p>
              <p className="text-[2.25rem] font-bold text-[#7DB9B5] leading-none mb-0.5">70 €</p>
              <p className="text-[0.72rem] text-muted/55 mb-4">vienas vizitas</p>
              <div className="border-t border-[#EEF5F4] pt-3 mt-auto">
                <PackageRows rows={[["3 kartai", "195 €"], ["5 kartai", "315 €"], ["10 kartų", "595 €"]]} />
              </div>
            </div>

            {/* Išplėstinė */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5 flex flex-col hover:border-[#90CECA] hover:shadow-[0_4px_18px_rgba(144,206,202,0.1)] transition-all duration-200">
              <h3 className="text-[1.0625rem] font-bold text-foreground mb-1">Kompleksinė išplėstinė</h3>
              <p className="text-[0.78rem] text-muted leading-snug mb-0.5 min-h-[2.4rem]">
                45 min kineziterapija + 2 papildomos priemonės po 15 min pagal indikacijas
              </p>
              <p className="text-[0.72rem] text-muted/60 mb-3">75 min</p>
              <p className="text-[2.25rem] font-bold text-[#7DB9B5] leading-none mb-0.5">85 €</p>
              <p className="text-[0.72rem] text-muted/55 mb-4">vienas vizitas</p>
              <div className="border-t border-[#EEF5F4] pt-3 mt-auto">
                <PackageRows rows={[["3 kartai", "240 €"], ["5 kartai", "380 €"], ["10 kartų", "720 €"]]} />
              </div>
            </div>

          </div>

          {/* Explanatory note below 3 cards */}
          <div className="mt-3 flex items-start gap-2.5 px-4 py-3 rounded-xl bg-[#EEF5F4]/60 border border-[#DDE9E8]">
            <span className="w-1 h-1 rounded-full bg-[#90CECA] mt-1.5 flex-shrink-0" />
            <p className="text-[0.8125rem] text-muted leading-relaxed">
              <span className="font-semibold text-secondary">Kas yra papildoma priemonė?</span>{" "}
              Pagal indikacijas tai gali būti fizioterapija (ultragarsas, elektroterapija), minkštųjų audinių mobilizacija, masažo technikos ar teipavimas.
            </p>
          </div>
        </div>

        {/* 3 — PIOTR */}
        <div>
          <h2 className="text-[1rem] font-bold text-foreground mb-3">Vizitas pas specialistą</h2>
          <div
            className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ background: "#383C3B" }}
          >
            <div className="flex-1">
              <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-[#90CECA] mb-1.5">Piotr Dubrovskij</p>
              <p className="text-[1rem] font-bold text-white mb-1">Individualus 60 min vizitas</p>
              <p className="text-[0.8rem] text-white/45 leading-relaxed max-w-[380px]">
                Vizito pobūdis parenkamas pagal būklę. Kaina nepriklauso nuo taikomo metodo.
              </p>
            </div>
            <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-2 flex-shrink-0">
              <p className="text-[1.875rem] font-bold text-[#90CECA] leading-none">100 €</p>
              <a
                href="tel:+37060134304"
                className="inline-flex items-center gap-1.5 px-4 py-1 bg-[#7DB9B5] text-white text-[0.8rem] font-semibold rounded-lg hover:bg-[#68A7A2] transition-colors duration-200"
              >
                Registruotis <ArrowRight size={12} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* 4 — PAPILDOMOS */}
        <div>
          <h2 className="text-[1rem] font-bold text-foreground mb-3">Papildomos paslaugos</h2>
          <div className="grid md:grid-cols-3 gap-4">

            {/* Moduliai */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5">
              <h3 className="text-[1rem] font-bold text-foreground mb-0.5">Papildomas modulis</h3>
              <p className="text-[0.78rem] text-muted mb-2">15 min · tik kartu su vizitu</p>
              <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-3">18 €</p>
              <p className="text-[0.7rem] font-bold uppercase tracking-wider text-muted/70 mb-1.5">Pavyzdžiai</p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                {["Fizioterapija", "Elektroterapija", "Ultragarsas", "Mobilizacija", "Masažas", "Teipavimas"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#90CECA] flex-shrink-0" />
                    <span className="text-[0.78rem] text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Masažas */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5">
              <h3 className="text-[1rem] font-bold text-foreground mb-4">Masažas</h3>
              <p className="text-[0.7rem] font-bold uppercase tracking-wider text-muted/70 mb-1">30 min</p>
              <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-2">40 €</p>
              <PackageRows rows={[["3 kartai", "114 €"], ["5 kartai", "180 €"], ["10 kartų", "340 €"]]} />
              <div className="border-t border-[#EEF5F4] mt-4 pt-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-wider text-muted/70 mb-1">60 min</p>
                <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-2">65 €</p>
                <PackageRows rows={[["3 kartai", "185 €"], ["5 kartai", "290 €"], ["10 kartų", "550 €"]]} />
              </div>
            </div>

            {/* Fizioterapija */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-5">
              <h3 className="text-[1rem] font-bold text-foreground mb-0.5">Fizioterapija</h3>
              <p className="text-[0.78rem] text-muted mb-4">15–20 min · pagal indikacijas</p>
              <p className="text-[0.7rem] font-bold uppercase tracking-wider text-muted/70 mb-1">Viena procedūra</p>
              <p className="text-[1.875rem] font-bold text-[#7DB9B5] leading-none mb-2">20 €</p>
              <PackageRows rows={[["3 kartai", "57 €"], ["5 kartai", "90 €"], ["10 kartų", "170 €"]]} />
            </div>

          </div>
        </div>

        {/* 5 — PAKETŲ TAISYKLĖS */}
        <div className="rounded-xl bg-[#EEF5F4] border border-[#D0E2E0] px-4 py-3.5">
          <p className="text-[0.8125rem] font-bold text-secondary mb-2.5">Paketų taisyklės</p>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {[
              "3× paketas galioja 6 savaites",
              "5× paketas galioja 8 savaites",
              "10× paketas galioja 4 mėnesius",
              "Atšaukimas mažiau nei prieš 24 val. — vizitas nurašomas iš paketo",
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-[#7DB9B5] mt-1.5 flex-shrink-0" />
                <p className="text-[0.8125rem] text-secondary/70 leading-snug">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 6 — CTA */}
        <div className="rounded-2xl border border-[#DDE9E8] bg-white p-6 md:p-8 text-center">
          <h2 className="text-[1.375rem] md:text-[1.75rem] font-bold text-foreground mb-2.5">
            Nežinote, nuo ko pradėti?
          </h2>
          <p className="text-[0.9375rem] text-muted leading-relaxed mb-5 max-w-[400px] mx-auto">
            Dažniausiai rekomenduojame pradėti nuo pirminės konsultacijos ir ištyrimo — vizito metu padėsime pasirinkti tinkamiausią kryptį.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3.5">
            <a
              href="tel:+37060134304"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_3px_12px_rgba(125,185,181,0.25)]"
            >
              Registruotis <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a
              href="mailto:info@reamed.lt"
              className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#DDE9E8] text-secondary text-[0.9rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
            >
              <Phone size={14} strokeWidth={2} /> Susisiekti
            </a>
          </div>
          <p className="text-[0.78rem] text-muted/45">+370 601 34304 · info@reamed.lt</p>
        </div>

      </div>
    </div>
  );
}
