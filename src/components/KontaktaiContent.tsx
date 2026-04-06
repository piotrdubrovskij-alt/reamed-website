"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const content = {
  lt: {
    pageTitle: "Kontaktai",
    pageSubtitle: "Susisiekite su mumis telefonu, el. paštu arba užpildykite užklausos formą — atsakysime per 24 val. darbo dienomis.",
    btnRegister: "Registruotis vizitui",
    btnCall: "Paskambinti",
    btnEmail: "El. paštas",
    contactTitle: "Kontaktinė informacija",
    labelAddress: "Adresas",
    entranceNote: "Įėjimas į kliniką:",
    entranceText: "atskiras įėjimas pirmame pastato aukšte, iš Sporto rūmų pusės.",
    labelPhone: "Telefonas",
    labelEmail: "El. paštas",
    labelHours: "Darbo laikas",
    weekdays: "Pirmadienis–Penktadienis",
    saturday: "Šeštadienis",
    saturdayHours: "Pagal susitarimą",
    saturdayBadge: "Dirba",
    sunday: "Sekmadienis",
    sundayClosed: "Nedirbame",
    mapCaption: "Olimpiečių g. 1A-7, Vilnius",
    mapClickHint: "Spustelėkite norėdami atidaryti žemėlapį",
    formTitle: "Palikite užklausą",
    formSubtitle: "Jei norite užsiregistruoti ar turite klausimų, užpildykite formą — susisieksime su Jumis per 24 val. darbo dienomis.",
    successTitle: "Užklausa gauta!",
    successText: "Susisieksime su Jumis per 24 val. darbo dienomis.",
    successBtn: "Siųsti naują užklausą",
    labelName: "Vardas *",
    placeholderName: "Jūsų vardas",
    labelContactMethod: "Pageidaujamas susisiekimo būdas",
    byPhone: "Telefonu",
    byEmail: "El. paštu",
    labelContactDetails: "Kontaktiniai duomenys *",
    placeholderEmail: "vardas@email.com",
    placeholderPhone: "+370 600 00000",
    labelMessage: "Žinutė / klausimas",
    placeholderMessage: "Trumpai aprašykite savo situaciją arba klausimą...",
    sending: "Siunčiama...",
    submit: "Siųsti užklausą",
    callDirect: "Arba skambinkite tiesiai:",
    privacy: "Pateikta informacija bus naudojama tik susisiekti su Jumis dėl registracijos ar konsultacijos.",
    howToFindTitle: "Kaip mus rasti",
    carTitle: "Automobiliu · parkavimas",
    carBullet1: "Prie klinikos parkavimo vietų nėra.",
    carBullet2: "Artimiausias stovėjimas — prie Energetikos ir technikos muziejaus.",
    carBullet3: "Taip pat galima statyti automobilį UNIPARK aikštelėse netoliese.",
    publicTitle: "Viešuoju transportu",
    publicStopLabel: "Artimiausia viešojo transporto stotelė —",
    publicBusesLabel: "Autobusai:",
    publicAnd: "ir",
    firstVisitTitle: "Prieš pirmą vizitą",
    firstVisitText: "Prašome atvykti 5–10 min. anksčiau ir vilkėti patogią aprangą. Jei turite, atsineškite atliktų tyrimų atsakymus, gydytojų rekomendacijas ar kitą su jūsų būkle susijusią medicininę informaciją.",
  },
  en: {
    pageTitle: "Contact Us",
    pageSubtitle: "Reach us by phone, email or fill in the enquiry form — we will respond within 24 working hours.",
    btnRegister: "Book a visit",
    btnCall: "Call us",
    btnEmail: "Email",
    contactTitle: "Contact information",
    labelAddress: "Address",
    entranceNote: "Clinic entrance:",
    entranceText: "separate entrance on the ground floor, from the Sports Palace side.",
    labelPhone: "Phone",
    labelEmail: "Email",
    labelHours: "Working hours",
    weekdays: "Monday–Friday",
    saturday: "Saturday",
    saturdayHours: "By appointment",
    saturdayBadge: "Open",
    sunday: "Sunday",
    sundayClosed: "Closed",
    mapCaption: "Olimpiečių g. 1A-7, Vilnius",
    mapClickHint: "Click to open map",
    formTitle: "Leave a request",
    formSubtitle: "If you'd like to book or have any questions, fill in the form — we'll get back to you within 24 working hours.",
    successTitle: "Request received!",
    successText: "We will get back to you within 24 working hours.",
    successBtn: "Send another request",
    labelName: "Name *",
    placeholderName: "Your name",
    labelContactMethod: "Preferred contact method",
    byPhone: "By phone",
    byEmail: "By email",
    labelContactDetails: "Contact details *",
    placeholderEmail: "name@email.com",
    placeholderPhone: "+370 600 00000",
    labelMessage: "Message / question",
    placeholderMessage: "Briefly describe your situation or question...",
    sending: "Sending...",
    submit: "Send request",
    callDirect: "Or call us directly:",
    privacy: "The information provided will only be used to contact you regarding your booking or consultation.",
    howToFindTitle: "How to find us",
    carTitle: "By car · parking",
    carBullet1: "There is no parking directly at the clinic.",
    carBullet2: "The nearest parking is at the Energy and Technology Museum.",
    carBullet3: "You can also park at the nearby UNIPARK car parks.",
    publicTitle: "By public transport",
    publicStopLabel: "The nearest public transport stop is",
    publicBusesLabel: "Buses:",
    publicAnd: "and",
    firstVisitTitle: "Before your first visit",
    firstVisitText: "Please arrive 5–10 minutes early and wear comfortable clothing. If available, bring any test results, doctors' recommendations or other medical information related to your condition.",
  },
} as const;

type FormState = "idle" | "sending" | "success";

export default function KontaktaiContent() {
  const { lang } = useLanguage();
  const c = content[lang];

  const [form, setForm] = useState({ name: "", contactDetail: "", message: "", contact: "phone" as "phone" | "email" });
  const [state, setState] = useState<FormState>("idle");
  const [mapLoaded, setMapLoaded] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "send failed");
      }
      setState("success");
    } catch (err: unknown) {
      clearTimeout(timeout);
      setState("idle");
      alert(
        lang === "en"
          ? "Failed to send. Please call us: +370 601 34304"
          : "Nepavyko išsiųsti. Skambinkite: +370 601 34304"
      );
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* ── HERO ── */}
      <div className="container-xl pt-8 pb-7 md:pt-10 md:pb-8 border-b border-[#DDE9E8]">
        <h1 className="text-[1.875rem] md:text-[2.375rem] font-bold text-foreground mb-2.5 leading-tight">
          {c.pageTitle}
        </h1>
        <p className="text-[0.9375rem] text-muted max-w-[520px] leading-relaxed mb-6">
          {c.pageSubtitle}
        </p>
        <div className="flex flex-wrap gap-2.5">
          <a
            href="#forma"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#7DB9B5] text-white text-[0.875rem] font-semibold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_3px_12px_rgba(125,185,181,0.25)]"
          >
            <ArrowRight size={14} strokeWidth={2.2} />
            {c.btnRegister}
          </a>
          <a
            href="tel:+37060134304"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-[#DDE9E8] text-secondary text-[0.875rem] font-semibold rounded-xl hover:border-[#90CECA] hover:text-[#7DB9B5] transition-colors duration-200"
          >
            <Phone size={14} strokeWidth={2.2} />
            {c.btnCall}
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
            {c.btnEmail}
          </a>
        </div>
      </div>

      <div className="container-xl py-8 md:py-10 flex flex-col gap-6">

        {/* ── SECTION 1: Contact info + Map ── */}
        <div className="grid lg:grid-cols-2 gap-5">

          {/* Contact info */}
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 flex flex-col">
            <h2 className="text-[1rem] font-bold text-foreground mb-5">{c.contactTitle}</h2>
            <ul className="flex flex-col gap-5 flex-1">

              <li>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-muted/50 mb-1.5">{c.labelAddress}</p>
                <a href="https://maps.google.com/?q=Olimpieciu+g.+1A-7,+Vilnius" target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2.5 group">
                  <MapPin size={15} strokeWidth={1.8} className="text-[#7DB9B5] mt-0.5 flex-shrink-0" />
                  <span className="text-[0.9375rem] font-medium text-secondary group-hover:text-[#7DB9B5] transition-colors duration-200">
                    Olimpiečių g. 1A-7, Vilnius
                  </span>
                </a>
                <div className="mt-3 rounded-lg bg-[#F7FAF9] border border-[#EEF5F4] px-3 py-2 overflow-x-auto">
                  <p className="text-[0.75rem] sm:text-[0.8125rem] text-secondary leading-snug whitespace-nowrap">
                    <span className="font-semibold text-foreground">{c.entranceNote}</span>{" "}
                    {c.entranceText}
                  </p>
                </div>
              </li>

              <li>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-muted/50 mb-1.5">{c.labelPhone}</p>
                <a href="tel:+37060134304" className="inline-flex items-center gap-2.5 group">
                  <Phone size={15} strokeWidth={1.8} className="text-[#7DB9B5] flex-shrink-0" />
                  <span className="text-[0.9375rem] font-medium text-secondary group-hover:text-[#7DB9B5] transition-colors duration-200">
                    +370 601 34304
                  </span>
                </a>
              </li>

              <li>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-muted/50 mb-1.5">{c.labelEmail}</p>
                <a href="mailto:info@reamed.lt" className="inline-flex items-center gap-2.5 group">
                  <Mail size={15} strokeWidth={1.8} className="text-[#7DB9B5] flex-shrink-0" />
                  <span className="text-[0.9375rem] font-medium text-secondary group-hover:text-[#7DB9B5] transition-colors duration-200">
                    info@reamed.lt
                  </span>
                </a>
              </li>

              <li>
                <p className="text-[0.72rem] font-semibold uppercase tracking-widest text-muted/50 mb-1.5">{c.labelHours}</p>
                <div className="flex items-start gap-2.5">
                  <Clock size={15} strokeWidth={1.8} className="text-[#7DB9B5] mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col gap-1.5">
                    <div className="flex gap-3 text-[0.875rem]">
                      <span className="text-muted w-[176px] flex-shrink-0">{c.weekdays}</span>
                      <span className="font-medium text-secondary">8:00–19:00</span>
                    </div>
                    <div className="flex gap-3 text-[0.875rem] items-center">
                      <span className="text-muted w-[176px] flex-shrink-0">{c.saturday}</span>
                      <span className="inline-flex items-center gap-1.5 font-semibold text-[#7DB9B5]">
                        {c.saturdayHours}
                        <span className="text-[0.65rem] font-bold uppercase tracking-wider bg-[#EEF5F4] text-[#68A7A2] px-1.5 py-0.5 rounded-full">
                          {c.saturdayBadge}
                        </span>
                      </span>
                    </div>
                    <div className="flex gap-3 text-[0.875rem]">
                      <span className="text-muted w-[176px] flex-shrink-0">{c.sunday}</span>
                      <span className="font-medium text-muted/40">{c.sundayClosed}</span>
                    </div>
                  </div>
                </div>
              </li>

            </ul>
          </div>

          {/* Map — click to load */}
          <div
            className="relative rounded-2xl border border-[#DDE9E8] overflow-hidden bg-white transition-all duration-300 hover:border-[#90CECA] hover:shadow-[0_6px_24px_rgba(125,185,181,0.14)]"
            style={{ minHeight: "340px" }}
          >
            {mapLoaded ? (
              <iframe
                title="ReaMed klinikos vieta žemėlapyje"
                src="https://maps.google.com/maps?q=M7RQ%2B2X+Vilnius,+Vilniaus+m.+sav.&output=embed"
                width="100%"
                height="340"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <button
                type="button"
                onClick={() => setMapLoaded(true)}
                aria-label="Atidaryti žemėlapį su ReaMed klinikos vieta"
                className="group absolute inset-0 w-full flex flex-col items-center justify-center gap-4 cursor-pointer bg-[#F3F8F7]"
              >
                {/* Pulse ring + icon */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-20 h-20 rounded-full bg-[#7DB9B5]/10 group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative w-14 h-14 rounded-full bg-white shadow-[0_4px_20px_rgba(125,185,181,0.25)] flex items-center justify-center group-hover:shadow-[0_6px_28px_rgba(125,185,181,0.4)] transition-shadow duration-300">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7DB9B5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                </div>

                {/* Label */}
                <div className="text-center px-4">
                  <p className="text-[0.9375rem] font-bold text-foreground mb-0.5">ReaMed</p>
                  <p className="text-[0.8125rem] text-muted mb-2">{c.mapCaption}</p>
                  <p className="text-[0.78rem] text-[#7DB9B5] font-medium group-hover:underline underline-offset-2 transition-all">
                    {c.mapClickHint}
                  </p>
                </div>
              </button>
            )}
          </div>

        </div>

        {/* ── SECTION 2: Form + How to find us ── */}
        <div id="forma" className="grid lg:grid-cols-2 gap-5">

          {/* Form */}
          <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6">
            <h2 className="text-[1rem] font-bold text-foreground mb-2">{c.formTitle}</h2>
            <p className="text-[0.8375rem] text-muted leading-relaxed mb-5">{c.formSubtitle}</p>

            {state === "success" ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle size={38} strokeWidth={1.5} className="text-[#7DB9B5]" />
                <p className="text-[1rem] font-semibold text-foreground">{c.successTitle}</p>
                <p className="text-[0.875rem] text-muted max-w-[280px]">{c.successText}</p>
                <button
                  onClick={() => { setState("idle"); setForm({ name: "", contactDetail: "", message: "", contact: "phone" }); }}
                  className="mt-1 text-[0.8125rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200"
                >
                  {c.successBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-[0.8rem] font-medium text-muted mb-1.5" htmlFor="name">{c.labelName}</label>
                  <input
                    id="name" name="name" type="text" required
                    value={form.name} onChange={handleChange}
                    placeholder={c.placeholderName}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] text-[0.9rem] text-foreground placeholder:text-muted/40 bg-[#F7FAF9] focus:outline-none focus:border-[#90CECA] focus:bg-white transition-colors duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-medium text-muted mb-1.5">{c.labelContactMethod}</label>
                  <div className="flex gap-2">
                    {([{ val: "phone" as const, label: c.byPhone }, { val: "email" as const, label: c.byEmail }]).map(({ val, label }) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setForm((f) => f.contact === val ? f : { ...f, contact: val, contactDetail: "" })}
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
                    {c.labelContactDetails}
                  </label>
                  <input
                    id="contactDetail"
                    name="contactDetail"
                    type={form.contact === "email" ? "email" : "tel"}
                    required
                    value={form.contactDetail}
                    onChange={handleChange}
                    placeholder={form.contact === "email" ? c.placeholderEmail : c.placeholderPhone}
                    autoComplete={form.contact === "email" ? "email" : "tel"}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] text-[0.9rem] text-foreground placeholder:text-muted/40 bg-[#F7FAF9] focus:outline-none focus:border-[#90CECA] focus:bg-white transition-colors duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[0.8rem] font-medium text-muted mb-1.5" htmlFor="message">{c.labelMessage}</label>
                  <textarea
                    id="message" name="message" rows={3}
                    value={form.message} onChange={handleChange}
                    placeholder={c.placeholderMessage}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] text-[0.9rem] text-foreground placeholder:text-muted/40 bg-[#F7FAF9] focus:outline-none focus:border-[#90CECA] focus:bg-white transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-colors duration-200 shadow-[0_3px_12px_rgba(125,185,181,0.25)] disabled:opacity-60"
                >
                  {state === "sending" ? c.sending : c.submit}
                  {state !== "sending" && <ArrowRight size={15} strokeWidth={2.5} />}
                </button>
                <p className="text-[0.75rem] text-muted/50 text-center">
                  {c.callDirect}{" "}
                  <a href="tel:+37060134304" className="text-[#7DB9B5] font-medium hover:text-[#68A7A2] transition-colors duration-200">
                    +370 601 34304
                  </a>
                </p>
                <p className="text-[0.6875rem] text-muted/45 text-center leading-relaxed mt-3 max-w-[320px] mx-auto">
                  {c.privacy}
                </p>
              </form>
            )}
          </div>

          {/* How to find us + Pirmas vizitas */}
          <div className="flex flex-col gap-5">

            <div className="bg-white rounded-2xl border border-[#DDE9E8] p-6 flex flex-col gap-4">
              <h2 className="text-[1rem] font-bold text-foreground">{c.howToFindTitle}</h2>

              {/* Parkavimas */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F7FAF9] border border-[#EEF5F4]">
                <span className="text-[1.25rem] leading-none mt-0.5">🚗</span>
                <div className="min-w-0 flex-1">
                  <p className="text-[0.875rem] font-semibold text-foreground mb-2">{c.carTitle}</p>
                  <ul className="text-[0.8125rem] text-muted space-y-1.5 list-none pl-0 mb-3">
                    <li className="flex gap-2"><span className="text-[#7DB9B5] flex-shrink-0">•</span><span>{c.carBullet1}</span></li>
                    <li className="flex gap-2"><span className="text-[#7DB9B5] flex-shrink-0">•</span><span>{c.carBullet2}</span></li>
                    <li className="flex gap-2"><span className="text-[#7DB9B5] flex-shrink-0">•</span><span>{c.carBullet3}</span></li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.google.com/maps/search/?api=1&query=M7RQ%2B27+Vilnius" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.75rem] font-medium text-[#7DB9B5] border border-[#D8E6E4] rounded-lg hover:bg-[#EEF5F4] transition-colors duration-200">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Muziejus
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=M7RV%2B98+Vilnius" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.75rem] font-medium text-[#7DB9B5] border border-[#D8E6E4] rounded-lg hover:bg-[#EEF5F4] transition-colors duration-200">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      UNIPARK UP060
                    </a>
                    <a href="https://www.google.com/maps/search/?api=1&query=M7VQ%2BCM+Vilnius" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2.5 py-1 text-[0.75rem] font-medium text-[#7DB9B5] border border-[#D8E6E4] rounded-lg hover:bg-[#EEF5F4] transition-colors duration-200">
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
                  <p className="text-[0.875rem] font-semibold text-foreground mb-2">{c.publicTitle}</p>
                  <p className="text-[0.8125rem] text-muted leading-relaxed">
                    {c.publicStopLabel}{" "}
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=M7RQ%2B2F+Vilnius"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7DB9B5] font-medium hover:text-[#68A7A2] underline underline-offset-2"
                    >
                      „Žvejų st." (M7RQ+2F Vilnius)
                    </a>
                    . {c.publicBusesLabel} <span className="font-medium text-secondary">33</span> {c.publicAnd}{" "}
                    <span className="font-medium text-secondary">89</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Pirmas vizitas */}
            <div className="rounded-2xl border border-[#D8E6E4] bg-[#EEF5F4] p-5">
              <div className="flex items-start gap-3">
                <span className="text-[1.25rem] leading-none mt-0.5">📋</span>
                <div>
                  <p className="text-[0.9rem] font-bold text-foreground mb-1.5">{c.firstVisitTitle}</p>
                  <p className="text-[0.8375rem] text-secondary leading-relaxed">{c.firstVisitText}</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
