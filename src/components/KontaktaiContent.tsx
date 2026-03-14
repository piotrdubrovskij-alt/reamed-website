"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

type FormState = "idle" | "sending" | "success";

export default function KontaktaiContent() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", contact: "phone" });
  const [state, setState] = useState<FormState>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const contactLabel = form.contact === "phone" ? "Telefonu" : "El. paštu";
    const subject = encodeURIComponent(`Registracija vizitui — ${form.name}`);
    const body = encodeURIComponent(
      `Vardas: ${form.name}\nTelefonas: ${form.phone}${form.email ? `\nEl. paštas: ${form.email}` : ""}\nPageidaujamas susisiekimas: ${contactLabel}\n\nŽinutė:\n${form.message}`
    );
    window.location.href = `mailto:info@reamed.lt?subject=${subject}&body=${body}`;
    setTimeout(() => setState("success"), 400);
  }

  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* ── HERO ── */}
      <div className="container-xl pt-8 pb-7 md:pt-10 md:pb-8 border-b border-[#DDE9E8]">
        <h1 className="text-[1.875rem] md:text-[2.375rem] font-bold text-foreground mb-2.5 leading-tight">
          Kontaktai
        </h1>
        <p className="text-[0.9375rem] text-muted max-w-[480px] leading-relaxed mb-6">
          Susisiekite su mumis telefonu, el. paštu arba užpildykite užklausos formą — atsakysime kaip įmanoma greičiau.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a
            href="tel:+37060134304"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7DB9B5] text-white text-[0.875rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_3px_12px_rgba(125,185,181,0.25)]"
          >
            <Phone size={14} strokeWidth={2.2} />
            Paskambinti
          </a>
          <a
            href="https://wa.me/37060134304"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-[0.875rem] font-semibold rounded-xl hover:bg-[#1ebe5b] transition-colors duration-200 shadow-[0_3px_12px_rgba(37,211,102,0.2)]"
          >
            {WA_ICON}
            WhatsApp
          </a>
          <a
            href="#forma"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
          >
            <ArrowRight size={14} strokeWidth={2.2} />
            Registruotis vizitui
          </a>
          <a
            href="mailto:info@reamed.lt"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
          >
            <Mail size={14} strokeWidth={2.2} />
            El. paštas
          </a>
        </div>
      </div>

      <div className="container-xl py-8 md:py-10 flex flex-col gap-6">

        {/* ── SECTION 1: Contact info + Map ── */}
        <div className="grid lg:grid-cols-2 gap-5">

          {/* Contact info */}
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 flex flex-col">
            <h2 className="text-[1rem] font-bold text-foreground mb-5">Kontaktinė informacija</h2>
            <ul className="flex flex-col gap-5 flex-1">

              <li>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-muted/50 mb-1.5">Adresas</p>
                <a href="https://maps.google.com/?q=Olimpieciu+g.+1A-7,+Vilnius" target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2.5 group">
                  <MapPin size={15} strokeWidth={1.8} className="text-[#7DB9B5] mt-0.5 flex-shrink-0" />
                  <span className="text-[0.9375rem] font-medium text-secondary group-hover:text-[#7DB9B5] transition-colors duration-200">
                    Olimpiečių g. 1A-7, Vilnius
                  </span>
                </a>
              </li>

              <li>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-muted/50 mb-1.5">Telefonas</p>
                <a href="tel:+37060134304" className="inline-flex items-center gap-2.5 group">
                  <Phone size={15} strokeWidth={1.8} className="text-[#7DB9B5] flex-shrink-0" />
                  <span className="text-[0.9375rem] font-medium text-secondary group-hover:text-[#7DB9B5] transition-colors duration-200">
                    +370 601 34304
                  </span>
                </a>
              </li>

              <li>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-muted/50 mb-1.5">El. paštas</p>
                <a href="mailto:info@reamed.lt" className="inline-flex items-center gap-2.5 group">
                  <Mail size={15} strokeWidth={1.8} className="text-[#7DB9B5] flex-shrink-0" />
                  <span className="text-[0.9375rem] font-medium text-secondary group-hover:text-[#7DB9B5] transition-colors duration-200">
                    info@reamed.lt
                  </span>
                </a>
              </li>

              <li>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-muted/50 mb-1.5">Darbo laikas</p>
                <div className="flex items-start gap-2.5">
                  <Clock size={15} strokeWidth={1.8} className="text-[#7DB9B5] mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col gap-1.5">
                    {/* Mon–Fri */}
                    <div className="flex gap-3 text-[0.875rem]">
                      <span className="text-muted w-[176px] flex-shrink-0">Pirmadienis–Penktadienis</span>
                      <span className="font-medium text-secondary">8:00–19:00</span>
                    </div>
                    {/* Saturday — highlighted */}
                    <div className="flex gap-3 text-[0.875rem] items-center">
                      <span className="text-muted w-[176px] flex-shrink-0">Šeštadienis</span>
                      <span className="inline-flex items-center gap-1.5 font-semibold text-[#7DB9B5]">
                        Pagal susitarimą
                        <span className="text-[0.65rem] font-bold uppercase tracking-wider bg-[#EEF5F4] text-[#68A7A2] px-1.5 py-0.5 rounded-full">
                          Dirba
                        </span>
                      </span>
                    </div>
                    {/* Sunday */}
                    <div className="flex gap-3 text-[0.875rem]">
                      <span className="text-muted w-[176px] flex-shrink-0">Sekmadienis</span>
                      <span className="font-medium text-muted/40">Nedirbame</span>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          {/* Map */}
          <div className="rounded-2xl border border-[#DDE9E8] overflow-hidden bg-white" style={{ minHeight: "340px" }}>
            <iframe
              title="ReaMed klinikos vieta žemėlapyje"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.5!2d25.2783!3d54.7244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9167a75aaaab%3A0x4aa6e885cf94558f!2sReaMed!5e0!3m2!1slt!2slt!4v1710000000000!5m2!1slt!2slt"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

        {/* ── SECTION 2: Form + How to find us ── */}
        <div id="forma" className="grid lg:grid-cols-2 gap-5">

          {/* Form */}
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6">
            <h2 className="text-[1rem] font-bold text-foreground mb-0.5">Užklausos forma</h2>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-[0.8375rem] text-muted leading-relaxed">
                Jei turite klausimų ar norite, kad su jumis susisiektume, užpildykite formą.
              </p>
            </div>
            {/* Response time badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EEF5F4] border border-[#D8E6E4] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7DB9B5] animate-pulse" />
              <span className="text-[0.78rem] font-semibold text-[#68A7A2]">Atsakome per 24 val.</span>
            </div>

            {state === "success" ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle size={38} strokeWidth={1.5} className="text-[#7DB9B5]" />
                <p className="text-[1rem] font-semibold text-foreground">Ačiū!</p>
                <p className="text-[0.875rem] text-muted max-w-[280px]">
                  El. pašto programa atidaryta su paruošta žinute — išsiųskite ją ir mes susisieksime.
                </p>
                <button
                  onClick={() => { setState("idle"); setForm({ name: "", phone: "", email: "", message: "", contact: "phone" }); }}
                  className="mt-1 text-[0.8125rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200"
                >
                  Siųsti naują užklausą
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[0.8rem] font-medium text-muted mb-1.5" htmlFor="name">Vardas *</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder="Jūsų vardas"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] text-[0.9rem] text-foreground placeholder:text-muted/40 bg-[#F7FAF9] focus:outline-none focus:border-[#90CECA] focus:bg-white transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-medium text-muted mb-1.5" htmlFor="phone">Telefono numeris *</label>
                  <input
                    id="phone" name="phone" type="tel" required
                    value={form.phone} onChange={handleChange}
                    placeholder="+370 600 00000"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] text-[0.9rem] text-foreground placeholder:text-muted/40 bg-[#F7FAF9] focus:outline-none focus:border-[#90CECA] focus:bg-white transition-colors duration-200"
                  />
                </div>

                {/* Contact method toggle */}
                <div>
                  <label className="block text-[0.8rem] font-medium text-muted mb-1.5">Pageidaujamas susisiekimo būdas</label>
                  <div className="flex gap-2">
                    {[{ val: "phone", label: "Telefonu" }, { val: "email", label: "El. paštu" }].map(({ val, label }) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, contact: val }))}
                        className={`flex-1 py-2 text-[0.8375rem] font-medium rounded-lg border-2 transition-colors duration-200 ${
                          form.contact === val
                            ? "border-[#90CECA] bg-[#EEF5F4] text-[#7DB9B5]"
                            : "border-[#DDE9E8] text-muted hover:border-[#90CECA]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email field — appears when "El. paštu" is selected */}
                {form.contact === "email" && (
                  <div>
                    <label className="block text-[0.8rem] font-medium text-muted mb-1.5" htmlFor="email">
                      El. paštas *
                    </label>
                    <input
                      id="email" name="email" type="email" required={form.contact === "email"}
                      value={form.email} onChange={handleChange}
                      placeholder="jusu@pastas.lt"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] text-[0.9rem] text-foreground placeholder:text-muted/40 bg-[#F7FAF9] focus:outline-none focus:border-[#90CECA] focus:bg-white transition-colors duration-200"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-[0.8rem] font-medium text-muted mb-1.5" htmlFor="message">Žinutė / klausimas</label>
                  <textarea
                    id="message" name="message" rows={3}
                    value={form.message} onChange={handleChange}
                    placeholder="Trumpai aprašykite savo situaciją arba klausimą..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] text-[0.9rem] text-foreground placeholder:text-muted/40 bg-[#F7FAF9] focus:outline-none focus:border-[#90CECA] focus:bg-white transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_3px_12px_rgba(125,185,181,0.25)] disabled:opacity-60"
                >
                  {state === "sending" ? "Siunčiama..." : "Siųsti užklausą"}
                  {state !== "sending" && <ArrowRight size={15} strokeWidth={2.5} />}
                </button>
                <p className="text-[0.75rem] text-muted/50 text-center">
                  Arba skambinkite tiesiai:{" "}
                  <a href="tel:+37060134304" className="text-[#7DB9B5] font-medium hover:text-[#68A7A2] transition-colors duration-200">
                    +370 601 34304
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* How to find us + Pirmas vizitas */}
          <div className="flex flex-col gap-5">

            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 flex flex-col gap-4">
              <h2 className="text-[1rem] font-bold text-foreground">Kaip mus rasti</h2>
              {[
                {
                  icon: "🚗",
                  title: "Automobiliu",
                  text: "Olimpiečių g. 1A-7. Šalia pastato yra nemokama automobilių stovėjimo aikštelė.",
                },
                {
                  icon: "🚌",
                  title: "Viešuoju transportu",
                  text: "Artimiausia stotelė — \u201eOlimpiečių g.\u201c Patogu atvykti maršrutais 2G, 3G, 6. Nuo stotelės iki klinikos — kelios minutės pėsčiomis.",
                },
              ].map(({ icon, title, text }) => (
                <div key={title} className="flex items-start gap-4 p-4 rounded-xl bg-[#F7FAF9] border border-[#EEF5F4]">
                  <span className="text-[1.25rem] leading-none mt-0.5">{icon}</span>
                  <div>
                    <p className="text-[0.875rem] font-semibold text-foreground mb-0.5">{title}</p>
                    <p className="text-[0.8125rem] text-muted leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pirmas vizitas info block */}
            <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-5">
              <div className="flex items-start gap-3">
                <span className="text-[1.25rem] leading-none mt-0.5">📋</span>
                <div>
                  <p className="text-[0.9rem] font-bold text-foreground mb-1.5">Pirmas vizitas</p>
                  <p className="text-[0.8375rem] text-secondary leading-relaxed">
                    Pirmojo vizito trukmė — ~60 min. Pasiimkite medicininius dokumentus, jei turite.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
