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
  const [form, setForm] = useState({ name: "", contactDetail: "", message: "", contact: "phone" as "phone" | "email" });
  const [state, setState] = useState<FormState>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const contactLabel = form.contact === "phone" ? "Telefonu" : "El. paštu";
    const detailLabel = form.contact === "phone" ? "Telefonas" : "El. paštas";
    const subject = encodeURIComponent(`Registracija vizitui — ${form.name}`);
    const body = encodeURIComponent(
      `Vardas: ${form.name}\n${detailLabel}: ${form.contactDetail}\nPageidaujamas susisiekimas: ${contactLabel}\n\nŽinutė:\n${form.message}`
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
        <p className="text-[0.9375rem] text-muted max-w-[520px] leading-relaxed mb-6">
          Susisiekite su mumis telefonu, el. paštu arba užpildykite užklausos formą — atsakysime per 24 val. darbo dienomis.
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a
            href="#forma"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7DB9B5] text-white text-[0.875rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_3px_12px_rgba(125,185,181,0.25)]"
          >
            <ArrowRight size={14} strokeWidth={2.2} />
            Registruotis vizitui
          </a>
          <a
            href="tel:+37060134304"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
          >
            <Phone size={14} strokeWidth={2.2} />
            Paskambinti
          </a>
          <a
            href="https://wa.me/37060134304"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#25D366] hover:text-[#1ebe5b] transition-colors duration-200"
          >
            {WA_ICON}
            WhatsApp
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
                <div className="mt-3 rounded-lg bg-[#F7FAF9] border border-[#EEF5F4] px-3 py-2 overflow-x-auto">
                  <p className="text-[0.75rem] sm:text-[0.8125rem] text-secondary leading-snug whitespace-nowrap">
                    <span className="font-semibold text-foreground">Įėjimas į kliniką:</span>{" "}
                    atskiras įėjimas pirmame pastato aukšte, iš Sporto rūmų pusės.
                  </p>
                </div>
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
          <div className="flex flex-col rounded-2xl border border-[#DDE9E8] overflow-hidden bg-white">
            <iframe
              title="ReaMed klinikos vieta žemėlapyje"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.5!2d25.2783!3d54.7244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9167a75aaaab%3A0x4aa6e885cf94558f!2sReaMed!5e0!3m2!1slt!2slt!4v1710000000000!5m2!1slt!2slt"
              width="100%"
              height="340"
              style={{ border: 0, display: "block", minHeight: "340px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="px-4 py-3 border-t border-[#EEF5F4] flex items-center justify-between gap-3">
              <p className="text-[0.8125rem] text-muted">Olimpiečių g. 1A-7, Vilnius</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Olimpiečių+g.+1A-7,+Vilnius"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#7DB9B5] text-white text-[0.8rem] font-semibold rounded-lg hover:bg-[#68A7A2] transition-colors duration-200 flex-shrink-0 shadow-[0_2px_8px_rgba(125,185,181,0.25)]"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                Naviguoti
              </a>
            </div>
          </div>

        </div>

        {/* ── SECTION 2: Form + How to find us ── */}
        <div id="forma" className="grid lg:grid-cols-2 gap-5">

          {/* Form */}
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6">
            <h2 className="text-[1rem] font-bold text-foreground mb-2">Palikite užklausą</h2>
            <p className="text-[0.8375rem] text-muted leading-relaxed mb-5">
              Jei norite užsiregistruoti ar turite klausimų, užpildykite formą — susisieksime su Jumis per 24 val. darbo dienomis.
            </p>

            {state === "success" ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle size={38} strokeWidth={1.5} className="text-[#7DB9B5]" />
                <p className="text-[1rem] font-semibold text-foreground">Ačiū!</p>
                <p className="text-[0.875rem] text-muted max-w-[280px]">
                  El. pašto programa atidaryta su paruošta žinute — išsiųskite ją ir mes susisieksime.
                </p>
                <button
                  onClick={() => { setState("idle"); setForm({ name: "", contactDetail: "", message: "", contact: "phone" }); }}
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
                {/* Contact method toggle */}
                <div>
                  <label className="block text-[0.8rem] font-medium text-muted mb-1.5">Pageidaujamas susisiekimo būdas</label>
                  <div className="flex gap-2">
                    {([{ val: "phone" as const, label: "Telefonu" }, { val: "email" as const, label: "El. paštu" }]).map(({ val, label }) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() =>
                          setForm((f) =>
                            f.contact === val ? f : { ...f, contact: val, contactDetail: "" }
                          )
                        }
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

                <div>
                  <label className="block text-[0.8rem] font-medium text-muted mb-1.5" htmlFor="contactDetail">
                    Kontaktiniai duomenys *
                  </label>
                  <input
                    id="contactDetail"
                    name="contactDetail"
                    type={form.contact === "email" ? "email" : "tel"}
                    required
                    value={form.contactDetail}
                    onChange={handleChange}
                    placeholder={form.contact === "email" ? "vardas@email.com" : "+370 600 00000"}
                    autoComplete={form.contact === "email" ? "email" : "tel"}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] text-[0.9rem] text-foreground placeholder:text-muted/40 bg-[#F7FAF9] focus:outline-none focus:border-[#90CECA] focus:bg-white transition-colors duration-200"
                  />
                </div>

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
                <p className="text-[0.6875rem] text-muted/45 text-center leading-relaxed mt-3 max-w-[320px] mx-auto">
                  Pateikta informacija bus naudojama tik susisiekti su Jumis dėl registracijos ar konsultacijos.
                </p>
              </form>
            )}
          </div>

          {/* How to find us + Pirmas vizitas */}
          <div className="flex flex-col gap-5">

            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 flex flex-col gap-4">
              <h2 className="text-[1rem] font-bold text-foreground">Kaip mus rasti</h2>

              {/* Parkavimas */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F7FAF9] border border-[#EEF5F4]">
                <span className="text-[1.25rem] leading-none mt-0.5">🚗</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.875rem] font-semibold text-foreground mb-2">Automobiliu · parkavimas</p>
                  <ul className="text-[0.8125rem] text-muted space-y-1.5 list-none pl-0 mb-3">
                    <li className="flex gap-2">
                      <span className="text-[#7DB9B5] flex-shrink-0">•</span>
                      <span>Prie klinikos parkavimo vietų nėra.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#7DB9B5] flex-shrink-0">•</span>
                      <span>Artimiausias stovėjimas — prie Energetikos ir technikos muziejaus.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#7DB9B5] flex-shrink-0">•</span>
                      <span>Taip pat galima statyti automobilį UNIPARK aikštelėse netoliese.</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=M7RQ%2B27+Vilnius"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.75rem] font-medium text-[#7DB9B5] border border-[#D8E6E4] rounded-lg hover:bg-[#EEF5F4] transition-colors duration-200"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Muziejus
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=M7RV%2B98+Vilnius"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.75rem] font-medium text-[#7DB9B5] border border-[#D8E6E4] rounded-lg hover:bg-[#EEF5F4] transition-colors duration-200"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      UNIPARK UP060
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=M7VQ%2BCM+Vilnius"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.75rem] font-medium text-[#7DB9B5] border border-[#D8E6E4] rounded-lg hover:bg-[#EEF5F4] transition-colors duration-200"
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      UNIPARK UP071
                    </a>
                  </div>
                </div>
              </div>

              {/* Viešasis transportas */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F7FAF9] border border-[#EEF5F4]">
                <span className="text-[1.25rem] leading-none mt-0.5">🚌</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.875rem] font-semibold text-foreground mb-2">Viešuoju transportu</p>
                  <p className="text-[0.8125rem] text-muted leading-relaxed">
                    Artimiausia viešojo transporto stotelė —{" "}
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=M7RQ%2B2F+Vilnius"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7DB9B5] font-medium hover:text-[#68A7A2] underline underline-offset-2"
                    >
                      „Žvejų st.“ (M7RQ+2F Vilnius)
                    </a>
                    . Autobusai: <span className="font-medium text-secondary">33</span> ir{" "}
                    <span className="font-medium text-secondary">89</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Pirmas vizitas info block */}
            <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-5">
              <div className="flex items-start gap-3">
                <span className="text-[1.25rem] leading-none mt-0.5">📋</span>
                <div>
                  <p className="text-[0.9rem] font-bold text-foreground mb-1.5">Prieš pirmą vizitą</p>
                  <p className="text-[0.8375rem] text-secondary leading-relaxed">
                    Prašome atvykti 5–10 min. anksčiau ir vilkėti patogią aprangą. Jei turite, atsineškite atliktų tyrimų atsakymus, gydytojų rekomendacijas ar kitą su jūsų būkle susijusią medicininę informaciją.
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
