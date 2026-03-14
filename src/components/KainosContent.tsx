"use client";

import { ArrowRight } from "lucide-react";

type PriceRow = { label: string; price: string; note?: string };

function PriceTable({ rows }: { rows: PriceRow[] }) {
  return (
    <div className="divide-y divide-[#EEF5F4]">
      {rows.map((row, i) => (
        <div key={i} className={`flex items-start justify-between gap-4 py-3 ${i === 0 ? "pt-0" : ""}`}>
          <div>
            <span className="text-[0.9375rem] text-foreground font-medium">{row.label}</span>
            {row.note && (
              <p className="text-[0.78rem] text-muted mt-0.5 leading-snug">{row.note}</p>
            )}
          </div>
          <span className="flex-shrink-0 text-[1rem] font-bold text-[#7DB9B5]">{row.price}</span>
        </div>
      ))}
    </div>
  );
}

function SectionCard({
  title,
  children,
  accent = false,
}: {
  title: string;
  children: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 md:p-8 ${
        accent
          ? "border-[#90CECA] bg-[#F7FAF9]"
          : "border-[#DDE9E8] bg-white"
      }`}
    >
      <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#7DB9B5] mb-5">
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function KainosContent() {
  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* Page header */}
      <div className="container-xl pt-12 pb-10 md:pt-16 md:pb-12">
        <p className="text-[0.8125rem] font-semibold uppercase tracking-widest text-[#7DB9B5] mb-3">
          ReaMed klinika
        </p>
        <h1 className="text-[2.25rem] md:text-[3rem] font-bold text-foreground mb-4 leading-tight">
          Paslaugos ir kainos
        </h1>
        <p className="text-[1rem] text-muted max-w-[540px] leading-relaxed">
          Skaidrūs įkainiai be paslėptų mokesčių. Kiekvienas vizitas — individualiai pagal jūsų būklę ir poreikį.
        </p>
      </div>

      {/* Content */}
      <div className="container-xl pb-20 md:pb-28">
        <div className="grid gap-5 md:gap-6">

          {/* Piotr — featured */}
          <div className="rounded-2xl overflow-hidden" style={{ background: "#505251" }}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="w-8 h-[3px] bg-[#90CECA] rounded-full mb-5" aria-hidden="true" />
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#90CECA] mb-2">
                  Vizitas pas specialistą
                </p>
                <h2 className="text-[1.5rem] md:text-[1.875rem] font-bold text-white mb-3 leading-snug">
                  Piotr Dubrovskij
                </h2>
                <p className="text-[0.9rem] text-white/60 leading-relaxed mb-6 max-w-[360px]">
                  Skirta pacientams, kurie renkasi vizitą pas Piotr Dubrovskij. Vizito pobūdis parenkamas pagal būklę ir poreikį.
                </p>
                <a
                  href="/kainos#kontaktai"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.875rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 w-fit shadow-[0_4px_16px_rgba(125,185,181,0.3)]"
                >
                  Registruotis <ArrowRight size={15} strokeWidth={2.5} />
                </a>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center gap-3" style={{ background: "rgba(0,0,0,0.15)" }}>
                <div className="flex items-end justify-between py-4 border-b border-white/10">
                  <div>
                    <p className="text-[1rem] font-medium text-white">Individualus vizitas</p>
                    <p className="text-[0.8rem] text-white/45 mt-0.5">60 min · viena kaina, nepriklausomai nuo vizito tipo</p>
                  </div>
                  <span className="text-[2rem] font-bold text-[#90CECA] ml-4">100 €</span>
                </div>
              </div>
            </div>
          </div>

          {/* Two columns on md+ */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">

            {/* Kineziterapija */}
            <SectionCard title="Kineziterapija / Konsultacija (komanda)">
              <PriceTable rows={[
                { label: "Pirminė konsultacija + ištyrimas + planas", price: "70 €", note: "60 min" },
                { label: "Kineziterapija", price: "60 €", note: "45 min" },
                { label: "3 kartai", price: "170 €" },
                { label: "5 kartai", price: "270 €" },
                { label: "10 kartų", price: "510 €" },
              ]} />
            </SectionCard>

            {/* Kompleksinė */}
            <SectionCard title="Kompleksinė reabilitacija (komanda)">
              <PriceTable rows={[
                {
                  label: "Kompleksinė reabilitacija",
                  price: "70 €",
                  note: "60 min · kineziterapija 45 min + 1 papildomas modulis 15 min",
                },
                { label: "3 kartai", price: "195 €" },
                { label: "5 kartai", price: "315 €" },
                { label: "10 kartų", price: "595 €" },
              ]} />
            </SectionCard>

            {/* Kompleksinė išplėstinė */}
            <SectionCard title="Kompleksinė reabilitacija išplėstinė" accent>
              <PriceTable rows={[
                {
                  label: "Kompleksinė reabilitacija IŠPLĖSTINĖ",
                  price: "85 €",
                  note: "75 min · kineziterapija 45 min + 2 papildomi moduliai po 15 min",
                },
                { label: "3 kartai", price: "240 €" },
                { label: "5 kartai", price: "380 €" },
                { label: "10 kartų", price: "720 €" },
              ]} />
            </SectionCard>

            {/* Papildomi moduliai */}
            <SectionCard title="Papildomi moduliai (tik kartu su vizitu)">
              <PriceTable rows={[
                { label: "Papildomas modulis", price: "18 €", note: "15 min" },
              ]} />
              <p className="mt-4 text-[0.8125rem] text-muted leading-relaxed">
                <span className="font-medium text-secondary">Modulių pavyzdžiai (pagal indikacijas):</span>{" "}
                fizioterapija (ultragarsas, elektroterapija); minkštųjų audinių mobilizacija, masažas; teipavimas.
              </p>
            </SectionCard>

            {/* Masažas */}
            <SectionCard title="Masažas">
              <div className="space-y-4">
                <div>
                  <p className="text-[0.8125rem] font-semibold text-secondary mb-2 uppercase tracking-wide">30 min</p>
                  <PriceTable rows={[
                    { label: "Masažas", price: "40 €" },
                    { label: "3 kartai", price: "114 €" },
                    { label: "5 kartai", price: "180 €" },
                    { label: "10 kartų", price: "340 €" },
                  ]} />
                </div>
                <div className="pt-2">
                  <p className="text-[0.8125rem] font-semibold text-secondary mb-2 uppercase tracking-wide">60 min</p>
                  <PriceTable rows={[
                    { label: "Masažas", price: "65 €" },
                    { label: "3 kartai", price: "185 €" },
                    { label: "5 kartai", price: "290 €" },
                    { label: "10 kartų", price: "550 €" },
                  ]} />
                </div>
              </div>
            </SectionCard>

            {/* Fizioterapija */}
            <SectionCard title="Fizioterapija">
              <PriceTable rows={[
                { label: "Fizioterapijos procedūra", price: "20 €", note: "15–20 min" },
                { label: "3 kartai", price: "57 €" },
                { label: "5 kartai", price: "90 €" },
                { label: "10 kartų", price: "170 €" },
              ]} />
            </SectionCard>

          </div>

          {/* Paketų taisyklės */}
          <div className="rounded-2xl border border-[#DDE9E8] bg-white p-6 md:p-8">
            <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#7DB9B5] mb-5">
              Paketų taisyklės
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#90CECA] mt-2 flex-shrink-0" />
                <p className="text-[0.9rem] text-secondary leading-relaxed">
                  <span className="font-semibold">Galiojimas:</span>{" "}
                  3× – 6 savaitės &nbsp;·&nbsp; 5× – 3 mėnesiai &nbsp;·&nbsp; 10× – 6 mėnesiai
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#90CECA] mt-2 flex-shrink-0" />
                <p className="text-[0.9rem] text-secondary leading-relaxed">
                  <span className="font-semibold">Atšaukimas &lt;24 val.:</span>{" "}
                  nurašomas vizitas iš paketo
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-[#EEF5F4] border border-[#D8E6E4] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-1">
              <p className="text-[0.9375rem] font-semibold text-foreground mb-1">
                Turite klausimų dėl kainų?
              </p>
              <p className="text-[0.875rem] text-muted leading-relaxed">
                Susisiekite ir papadėsime pasirinkti tinkamiausią variantą.
              </p>
            </div>
            <a
              href="tel:+37060134304"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.875rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200"
            >
              +370 601 34304
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
