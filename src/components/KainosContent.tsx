"use client";

import { ArrowRight, Phone } from "lucide-react";

/* ── Reusable price row ── */
function Row({ label, price, note, large }: { label: string; price: string; note?: string; large?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3 border-b border-[#EEF5F4] last:border-0">
      <div>
        <span className={`${large ? "text-[1rem] font-semibold text-foreground" : "text-[0.9rem] text-secondary font-medium"}`}>
          {label}
        </span>
        {note && <p className="text-[0.75rem] text-muted mt-0.5 leading-snug">{note}</p>}
      </div>
      <span className={`flex-shrink-0 font-bold ${large ? "text-[1.5rem] text-[#7DB9B5]" : "text-[1.05rem] text-[#7DB9B5]"}`}>
        {price}
      </span>
    </div>
  );
}

export default function KainosContent() {
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* ── HERO ── */}
      <div className="container-xl pt-12 pb-10 md:pt-16 md:pb-12 border-b border-[#DDE9E8]">
        <p className="text-[0.8125rem] font-semibold uppercase tracking-widest text-[#7DB9B5] mb-3">
          ReaMed klinika
        </p>
        <h1 className="text-[2.25rem] md:text-[3rem] font-bold text-foreground mb-4 leading-tight">
          Paslaugos ir kainos
        </h1>
        <p className="text-[1rem] text-muted max-w-[580px] leading-relaxed">
          Skaidrūs įkainiai be paslėptų mokesčių. Dažniausiai gydymas prasideda nuo pirminės konsultacijos ir ištyrimo, kad galėtume parinkti tinkamiausią kryptį.
        </p>
      </div>

      <div className="container-xl py-12 md:py-16 flex flex-col gap-10 md:gap-14">

        {/* ── 1. NUO KO PRADĖTI ── */}
        <div>
          <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[#7DB9B5] mb-6">
            Nuo ko dažniausiai pradedama
          </h2>
          <div className="rounded-2xl border-2 border-[#90CECA] bg-white p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-[1.25rem] md:text-[1.5rem] font-bold text-foreground mb-1 leading-snug">
                Pirminė konsultacija + ištyrimas + planas
              </p>
              <p className="text-[0.9rem] text-muted leading-relaxed mt-2 max-w-[500px]">
                Vizito metu įvertiname būklę, aptariame simptomus ir parenkame tinkamiausią gydymo kryptį.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
              <div className="text-right">
                <span className="text-[0.8rem] text-muted">60 min</span>
                <p className="text-[2.5rem] font-bold text-[#7DB9B5] leading-none">70 €</p>
              </div>
              <a
                href="tel:+37060134304"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7DB9B5] text-white text-[0.875rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200"
              >
                Registruotis <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* ── 2. TRYS PAGRINDINĖS PASLAUGOS ── */}
        <div>
          <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[#7DB9B5] mb-6">
            Pagrindiniai gydymo formatai (komanda)
          </h2>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">

            {/* A - Kineziterapija */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 flex flex-col hover:border-[#90CECA] hover:shadow-[0_6px_24px_rgba(144,206,202,0.1)] transition-all duration-200">
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#90CECA] mb-2">A</p>
              <h3 className="text-[1.0625rem] font-bold text-foreground mb-1">Kineziterapija</h3>
              <p className="text-[0.8rem] text-muted mb-5">45 min</p>
              <div className="flex-1 divide-y divide-[#EEF5F4]">
                <div className="flex justify-between items-center py-2.5 first:pt-0">
                  <span className="text-[0.875rem] text-secondary">1 vizitas</span>
                  <span className="font-bold text-[1.05rem] text-foreground">60 €</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[0.875rem] text-secondary">3 kartai</span>
                  <span className="font-bold text-[1.05rem] text-[#7DB9B5]">170 €</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[0.875rem] text-secondary">5 kartai</span>
                  <span className="font-bold text-[1.05rem] text-[#7DB9B5]">270 €</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[0.875rem] text-secondary">10 kartų</span>
                  <span className="font-bold text-[1.05rem] text-[#7DB9B5]">510 €</span>
                </div>
              </div>
            </div>

            {/* B - Kompleksinė */}
            <div className="bg-white rounded-2xl border-2 border-[#90CECA] p-6 flex flex-col shadow-[0_4px_20px_rgba(144,206,202,0.15)] relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-[#7DB9B5] text-white text-[0.7rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Populiariausia
                </span>
              </div>
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#90CECA] mb-2 mt-1">B</p>
              <h3 className="text-[1.0625rem] font-bold text-foreground mb-1">Kompleksinė reabilitacija</h3>
              <p className="text-[0.8rem] text-muted mb-1">60 min</p>
              <p className="text-[0.75rem] text-muted mb-5 leading-snug">kineziterapija 45 min + 1 papildomas modulis 15 min</p>
              <div className="flex-1 divide-y divide-[#EEF5F4]">
                <div className="flex justify-between items-center py-2.5 first:pt-0">
                  <span className="text-[0.875rem] text-secondary">1 vizitas</span>
                  <span className="font-bold text-[1.05rem] text-foreground">70 €</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[0.875rem] text-secondary">3 kartai</span>
                  <span className="font-bold text-[1.05rem] text-[#7DB9B5]">195 €</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[0.875rem] text-secondary">5 kartai</span>
                  <span className="font-bold text-[1.05rem] text-[#7DB9B5]">315 €</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[0.875rem] text-secondary">10 kartų</span>
                  <span className="font-bold text-[1.05rem] text-[#7DB9B5]">595 €</span>
                </div>
              </div>
            </div>

            {/* C - Išplėstinė */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 flex flex-col hover:border-[#90CECA] hover:shadow-[0_6px_24px_rgba(144,206,202,0.1)] transition-all duration-200">
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#90CECA] mb-2">C</p>
              <h3 className="text-[1.0625rem] font-bold text-foreground mb-1">Kompleksinė išplėstinė</h3>
              <p className="text-[0.8rem] text-muted mb-1">75 min</p>
              <p className="text-[0.75rem] text-muted mb-5 leading-snug">kineziterapija 45 min + 2 papildomi moduliai po 15 min</p>
              <div className="flex-1 divide-y divide-[#EEF5F4]">
                <div className="flex justify-between items-center py-2.5 first:pt-0">
                  <span className="text-[0.875rem] text-secondary">1 vizitas</span>
                  <span className="font-bold text-[1.05rem] text-foreground">85 €</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[0.875rem] text-secondary">3 kartai</span>
                  <span className="font-bold text-[1.05rem] text-[#7DB9B5]">240 €</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[0.875rem] text-secondary">5 kartai</span>
                  <span className="font-bold text-[1.05rem] text-[#7DB9B5]">380 €</span>
                </div>
                <div className="flex justify-between items-center py-2.5">
                  <span className="text-[0.875rem] text-secondary">10 kartų</span>
                  <span className="font-bold text-[1.05rem] text-[#7DB9B5]">720 €</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 3. PIOTR ── */}
        <div>
          <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[#7DB9B5] mb-6">
            Vizitas pas specialistą
          </h2>
          <div className="rounded-2xl bg-[#2E3332] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <p className="text-[0.75rem] font-semibold uppercase tracking-wider text-[#90CECA] mb-2">Piotr Dubrovskij</p>
              <p className="text-[1.25rem] font-bold text-white mb-2 leading-snug">Individualus 60 min vizitas</p>
              <p className="text-[0.875rem] text-white/55 leading-relaxed max-w-[460px]">
                Skirta pacientams, kurie renkasi vizitą pas Piotr Dubrovskij. Vizito pobūdis parenkamas pagal būklę ir poreikį, o kaina nepriklauso nuo taikomo metodo.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
              <p className="text-[2.5rem] font-bold text-[#90CECA] leading-none">100 €</p>
              <a
                href="tel:+37060134304"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7DB9B5] text-white text-[0.875rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200"
              >
                Registruotis vizitui <ArrowRight size={15} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* ── 4. PAPILDOMOS PASLAUGOS ── */}
        <div>
          <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[#7DB9B5] mb-6">
            Papildomos paslaugos
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">

            {/* Papildomi moduliai */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-7">
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-[1.0625rem] font-bold text-foreground">Papildomi moduliai</h3>
                <span className="text-[1.05rem] font-bold text-[#7DB9B5]">18 €</span>
              </div>
              <p className="text-[0.8rem] text-muted mb-4">15 min · tik kartu su vizitu</p>
              <p className="text-[0.8125rem] font-medium text-secondary mb-2">Modulių pavyzdžiai:</p>
              <ul className="space-y-1.5">
                {["Fizioterapija (ultragarsas, elektroterapija)", "Minkštųjų audinių mobilizacija", "Masažas", "Teipavimas"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[0.8125rem] text-muted">
                    <span className="w-1 h-1 rounded-full bg-[#90CECA] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Masažas + Fizioterapija */}
            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 md:p-7 space-y-5">
              {/* Masažas */}
              <div>
                <h3 className="text-[1.0625rem] font-bold text-foreground mb-3">Masažas</h3>
                <div className="space-y-1">
                  <p className="text-[0.72rem] font-bold uppercase tracking-wider text-muted mb-1.5">30 min</p>
                  {[["1 k.", "40 €"], ["3 k.", "114 €"], ["5 k.", "180 €"], ["10 k.", "340 €"]].map(([l, p]) => (
                    <div key={l} className="flex justify-between text-[0.875rem] py-1 border-b border-[#F4F8F7] last:border-0">
                      <span className="text-secondary">{l}</span>
                      <span className="font-semibold text-[#7DB9B5]">{p}</span>
                    </div>
                  ))}
                  <p className="text-[0.72rem] font-bold uppercase tracking-wider text-muted mb-1.5 pt-2">60 min</p>
                  {[["1 k.", "65 €"], ["3 k.", "185 €"], ["5 k.", "290 €"], ["10 k.", "550 €"]].map(([l, p]) => (
                    <div key={l+"-60"} className="flex justify-between text-[0.875rem] py-1 border-b border-[#F4F8F7] last:border-0">
                      <span className="text-secondary">{l}</span>
                      <span className="font-semibold text-[#7DB9B5]">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#EEF5F4] pt-5">
                <h3 className="text-[1.0625rem] font-bold text-foreground mb-3">Fizioterapija</h3>
                <p className="text-[0.8rem] text-muted mb-2">15–20 min</p>
                {[["1 k.", "20 €"], ["3 k.", "57 €"], ["5 k.", "90 €"], ["10 k.", "170 €"]].map(([l, p]) => (
                  <div key={l+"-fiz"} className="flex justify-between text-[0.875rem] py-1 border-b border-[#F4F8F7] last:border-0">
                    <span className="text-secondary">{l}</span>
                    <span className="font-semibold text-[#7DB9B5]">{p}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── 5. PAKETŲ TAISYKLĖS ── */}
        <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8">
          <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-[#7DB9B5] mb-5">
            Paketų taisyklės
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "3× paketas galioja 6 savaites",
              "5× paketas galioja 3 mėnesius",
              "10× paketas galioja 6 mėnesius",
              "Atšaukimas mažiau nei prieš 24 val. — vizitas nurašomas iš paketo",
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#90CECA] mt-1.5 flex-shrink-0" />
                <p className="text-[0.9rem] text-secondary leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 6. CTA ── */}
        <div className="rounded-2xl border-2 border-[#DDE9E8] bg-white p-8 md:p-10 text-center">
          <h2 className="text-[1.5rem] md:text-[1.875rem] font-bold text-foreground mb-3">
            Nežinote, kuri paslauga jums tinkamiausia?
          </h2>
          <p className="text-[1rem] text-muted leading-relaxed mb-8 max-w-[480px] mx-auto">
            Dažniausiai rekomenduojame pradėti nuo pirminės konsultacijos ir ištyrimo — vizito metu padėsime pasirinkti tinkamiausią kryptį.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+37060134304"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#7DB9B5] text-white text-[0.9375rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.3)]"
            >
              Registruotis <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="mailto:info@reamed.lt"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#DDE9E8] text-secondary text-[0.9375rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
            >
              <Phone size={16} strokeWidth={2} />
              Susisiekti
            </a>
          </div>
          <p className="text-[0.875rem] text-muted mt-5">+370 601 34304 &nbsp;·&nbsp; info@reamed.lt</p>
        </div>

      </div>
    </div>
  );
}
