"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Phone, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const specialists = [
  {
    doctorId: "14780",
    name: "Piotr Dubrovskij",
    role: { lt: "Kineziterapeutas, osteopatas, manualinės terapijos specialistas", en: "Physiotherapist, osteopath, manual therapy specialist" },
    photo: "/specialist-piotr.jpg",
    slug: "piotr-dubrovskij",
    mdUrl: "https://www.manodaktaras.lt/gydytojas/14780",
  },
  {
    doctorId: "14781",
    name: "Kotryna Kairytė",
    role: { lt: "Kineziterapeutė", en: "Physiotherapist" },
    photo: "/specialist-kotryna.jpg",
    slug: "kotryna-kairyte",
    mdUrl: "https://www.manodaktaras.lt/gydytojas/14781",
  },
  {
    doctorId: "15169",
    name: "Erikas Jatkauskas",
    role: { lt: "Kineziterapeutas", en: "Physiotherapist" },
    photo: "/specialist-erikas.jpg",
    slug: "erikas-jatkauskas",
    mdUrl: "https://www.manodaktaras.lt/gydytojas/15169",
  },
  {
    doctorId: "13439",
    name: "Mangirdas Kazačenko",
    role: { lt: "Kineziterapeutas, manualinės terapijos specialistas, masažuotojas", en: "Physiotherapist, manual therapy specialist, massage therapist" },
    photo: "/specialist-mangirdas.jpg",
    slug: "mangirdas-kazacenko",
    mdUrl: "https://www.manodaktaras.lt/gydytojas/13439",
  },
];

const CLINIC_ID = "2611";

const content = {
  lt: {
    back: "Atgal į pagrindinį",
    tag: "Registracija vizitui",
    title: "Registracija vizitui",

    // Phone-first block
    phoneTitle: "Patogiausia registruotis telefonu",
    phoneText: "Skambučiu galime greičiau patvirtinti laiką ir pasiūlyti daugiau galimų vizito variantų. Ne visi laisvi laikai visada matomi internetinėje registracijoje.",
    phoneCta: "Skambinti +370 601 34304",
    phoneHelper: "Taip pat galite pasirinkti specialistą ir peržiūrėti šiuo metu matomus laikus internetu.",

    // Online booking block
    onlineDivider: "arba registruokitės internetu",
    bookOnline: "Registruotis internetu",
    viewProfile: "profilis →",

    // Fallback form
    formTitle: "Neradote tinkamo laiko?",
    formText: "Parašykite mums – pasistengsime rasti Jums tinkamą laiką pas norimą specialistą.",
    labelName: "Vardas",
    labelPhone: "Telefono numeris",
    labelEmail: "El. paštas",
    labelSpecialist: "Pageidaujamas specialistas",
    labelTime: "Pageidaujamas laikas / dienos",
    labelMessage: "Trumpa žinutė",
    placeholderTime: "pvz. Pirmadieniais iki 14 val.",
    placeholderMessage: "Trumpai apibūdinkite savo problemą ar klausimą",
    specialistAny: "Nesvarbu — pasirinkite patys",
    contactBy: "Susisiekti",
    contactPhone: "Telefonu",
    contactEmail: "El. paštu",
    submit: "Siųsti užklausą",
    sending: "Siunčiama…",
    successTitle: "Užklausa išsiųsta",
    successText: "Susisieksime su Jumis per 24 val. darbo dienomis.",
    sendAnother: "Siųsti dar vieną užklausą",
    required: "Privalomas laukas",
  },
  en: {
    back: "Back to home",
    tag: "Book a Visit",
    title: "Book a Visit",

    phoneTitle: "Fastest way: call us",
    phoneText: "A quick call allows us to confirm your time immediately and offer more available slots. Not all free slots are always visible in the online booking system.",
    phoneCta: "Call +370 601 34304",
    phoneHelper: "You can also browse available times online by choosing a specialist below.",

    onlineDivider: "or book online",
    bookOnline: "Book online",
    viewProfile: "profile →",

    formTitle: "Can't find a suitable time?",
    formText: "Write to us — we will do our best to find a time that works for you with your preferred specialist.",
    labelName: "Name",
    labelPhone: "Phone number",
    labelEmail: "Email",
    labelSpecialist: "Preferred specialist",
    labelTime: "Preferred time / days",
    labelMessage: "Short message",
    placeholderTime: "e.g. Mondays before 2pm",
    placeholderMessage: "Briefly describe your issue or question",
    specialistAny: "No preference — choose for me",
    contactBy: "Contact by",
    contactPhone: "Phone",
    contactEmail: "Email",
    submit: "Send request",
    sending: "Sending…",
    successTitle: "Request sent",
    successText: "We will contact you within 24 working hours.",
    sendAnother: "Send another request",
    required: "Required field",
  },
} as const;

type SendState = "idle" | "sending" | "success" | "error";

const emptyFields = { name: "", phone: "", email: "", specialist: "", time: "", message: "" };

export default function RegistracijaContent() {
  const { lang } = useLanguage();
  const c = content[lang];

  const [contactPref, setContactPref] = useState<"phone" | "email">("phone");
  const [fields, setFields] = useState(emptyFields);
  const [sendState, setSendState] = useState<SendState>("idle");
  const [nameError, setNameError] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "name") setNameError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.name.trim()) { setNameError(true); return; }

    const contactDetail = contactPref === "phone" ? fields.phone : fields.email;
    const messageParts = [];
    if (fields.specialist) messageParts.push(`Specialistas: ${fields.specialist}`);
    if (fields.time) messageParts.push(`Pageidaujamas laikas: ${fields.time}`);
    if (fields.message) messageParts.push(fields.message);

    setSendState("sending");
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: fields.name,
          contactDetail: contactDetail || "—",
          contact: contactPref,
          message: messageParts.join("\n"),
          lang,
        }),
      });
      clearTimeout(timer);
      if (res.ok) {
        setSendState("success");
      } else {
        setSendState("error");
      }
    } catch {
      clearTimeout(timer);
      setSendState("error");
    }
  };

  const resetForm = () => {
    setFields(emptyFields);
    setSendState("idle");
    setNameError(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#F7FAF9", paddingTop: "104px" }}>

      {/* ── PAGE HEADER ── */}
      <div className="container-xl pt-8 pb-8 md:pt-10 md:pb-10 border-b border-[#DDE9E8]">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[0.8125rem] text-muted hover:text-[#7DB9B5] transition-colors duration-200 mb-6"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          {c.back}
        </Link>
        <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-2">{c.tag}</p>
        <h1 className="text-[1.875rem] md:text-[2.375rem] font-bold text-foreground leading-tight">
          {c.title}
        </h1>
      </div>

      <div className="container-xl py-8 md:py-12 flex flex-col gap-12">

        {/* ── 1. PHONE-FIRST CALLOUT ── */}
        <div className="rounded-2xl bg-[#383C3B] px-6 py-7 md:px-10 md:py-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#7DB9B5]/20 flex items-center justify-center flex-shrink-0">
                <Phone size={15} strokeWidth={2.5} className="text-[#7DB9B5]" />
              </div>
              <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#7DB9B5]">
                {lang === "lt" ? "Rekomenduojame" : "Recommended"}
              </p>
            </div>
            <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-white mb-3 leading-snug">
              {c.phoneTitle}
            </h2>
            <p className="text-[0.875rem] text-white/55 leading-relaxed max-w-[480px]">
              {c.phoneText}
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
            <a
              href="tel:+37060134304"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#7DB9B5] text-white text-[0.9375rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_20px_rgba(125,185,181,0.3)] hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Phone size={16} strokeWidth={2.5} />
              {c.phoneCta}
            </a>
            <p className="text-[0.75rem] text-white/35 max-w-[260px] md:text-right leading-snug">
              {c.phoneHelper}
            </p>
          </div>
        </div>

        {/* ── 2. ONLINE BOOKING DIVIDER ── */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[#DDE9E8]" />
          <p className="text-[0.75rem] font-semibold uppercase tracking-widest text-muted/40 whitespace-nowrap px-1">
            {c.onlineDivider}
          </p>
          <div className="flex-1 h-px bg-[#DDE9E8]" />
        </div>

        {/* ── 3. SPECIALIST CARDS WITH WIDGETS ── */}
        <div className="flex flex-col gap-8">
          {specialists.map((spec) => (
            <div key={spec.doctorId} className="bg-white rounded-2xl border border-[#DDE9E8] overflow-hidden">

              {/* Specialist identity */}
              <div className="flex items-center gap-4 px-5 pt-5 pb-4">
                <a
                  href={spec.mdUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#EEF5F4] to-[#D4EDEB] hover:opacity-90 transition-opacity duration-200"
                >
                  <img
                    src={spec.photo}
                    alt={spec.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 10%" }}
                  />
                </a>
                <div className="flex-1 min-w-0">
                  <a
                    href={spec.mdUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-[0.9375rem] font-bold text-foreground hover:text-[#7DB9B5] transition-colors duration-200 leading-tight mb-0.5"
                  >
                    {spec.name}
                  </a>
                  <p className="text-[0.78rem] text-[#7DB9B5] font-medium leading-snug">{spec.role[lang]}</p>
                </div>
                <Link
                  href={`/specialistai/${spec.slug}`}
                  className="hidden sm:block flex-shrink-0 text-[0.75rem] text-muted/40 hover:text-[#7DB9B5] transition-colors duration-200"
                >
                  {c.viewProfile}
                </Link>
              </div>

              {/* Widget */}
              <div className="px-5 pb-5">
                <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-muted/40 mb-3">
                  {c.bookOnline}
                </p>
                {/* @ts-expect-error manodaktaras custom element */}
                <div mydoc-widget="true" mydoc-doctor={spec.doctorId} mydoc-clinic={CLINIC_ID} />
              </div>

            </div>
          ))}
        </div>

        {/* ── 4. FALLBACK FORM ── */}
        <div ref={formRef} className="rounded-2xl border border-[#DDE9E8] bg-white px-6 py-7 md:px-10 md:py-9">
          <p className="text-[0.72rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-2">
            {lang === "lt" ? "Užklausa" : "Request"}
          </p>
          <h2 className="text-[1.375rem] md:text-[1.75rem] font-bold text-foreground mb-2 leading-snug">
            {c.formTitle}
          </h2>
          <p className="text-[0.9rem] text-muted leading-relaxed mb-7 max-w-[480px]">
            {c.formText}
          </p>

          {sendState === "success" ? (
            <div className="flex flex-col items-start gap-4 py-4">
              <div className="w-10 h-10 rounded-full bg-[#EEF5F4] flex items-center justify-center">
                <Check size={18} strokeWidth={2.5} className="text-[#7DB9B5]" />
              </div>
              <div>
                <p className="text-[1rem] font-bold text-foreground mb-1">{c.successTitle}</p>
                <p className="text-[0.875rem] text-muted">{c.successText}</p>
              </div>
              <button
                onClick={resetForm}
                className="text-[0.8125rem] font-semibold text-[#7DB9B5] hover:text-[#68A7A2] transition-colors duration-200"
              >
                {c.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

              {/* Row 1: Name */}
              <div>
                <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">
                  {c.labelName} <span className="text-[#7DB9B5]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Vardas Pavardė"
                  className={`w-full px-4 py-2.5 rounded-xl border text-[0.9rem] text-foreground placeholder:text-muted/35 bg-[#F7FAF9] focus:outline-none focus:ring-2 focus:ring-[#7DB9B5]/30 transition-all duration-200 ${nameError ? "border-red-300 focus:border-red-300" : "border-[#DDE9E8] focus:border-[#7DB9B5]"}`}
                />
                {nameError && (
                  <p className="text-[0.75rem] text-red-400 mt-1">{c.required}</p>
                )}
              </div>

              {/* Row 2: Phone + Email side by side */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">{c.labelPhone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    placeholder="+370 ..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] focus:border-[#7DB9B5] text-[0.9rem] text-foreground placeholder:text-muted/35 bg-[#F7FAF9] focus:outline-none focus:ring-2 focus:ring-[#7DB9B5]/30 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">{c.labelEmail}</label>
                  <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder="vardas@mail.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] focus:border-[#7DB9B5] text-[0.9rem] text-foreground placeholder:text-muted/35 bg-[#F7FAF9] focus:outline-none focus:ring-2 focus:ring-[#7DB9B5]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 3: Specialist + Preferred time */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">{c.labelSpecialist}</label>
                  <select
                    name="specialist"
                    value={fields.specialist}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] focus:border-[#7DB9B5] text-[0.9rem] text-foreground bg-[#F7FAF9] focus:outline-none focus:ring-2 focus:ring-[#7DB9B5]/30 transition-all duration-200"
                  >
                    <option value="">{c.specialistAny}</option>
                    {specialists.map((s) => (
                      <option key={s.slug} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">{c.labelTime}</label>
                  <input
                    type="text"
                    name="time"
                    value={fields.time}
                    onChange={handleChange}
                    placeholder={c.placeholderTime}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] focus:border-[#7DB9B5] text-[0.9rem] text-foreground placeholder:text-muted/35 bg-[#F7FAF9] focus:outline-none focus:ring-2 focus:ring-[#7DB9B5]/30 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">{c.labelMessage}</label>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder={c.placeholderMessage}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#DDE9E8] focus:border-[#7DB9B5] text-[0.9rem] text-foreground placeholder:text-muted/35 bg-[#F7FAF9] focus:outline-none focus:ring-2 focus:ring-[#7DB9B5]/30 transition-all duration-200 resize-none"
                />
              </div>

              {/* Row 5: Preferred contact */}
              <div>
                <p className="text-[0.8rem] font-semibold text-foreground/70 mb-2">{c.contactBy}</p>
                <div className="flex gap-2">
                  {(["phone", "email"] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setContactPref(opt)}
                      className={`px-4 py-1.5 rounded-lg text-[0.8rem] font-semibold border transition-all duration-200 ${
                        contactPref === opt
                          ? "bg-[#7DB9B5] border-[#7DB9B5] text-white"
                          : "bg-white border-[#DDE9E8] text-muted hover:border-[#90CECA]"
                      }`}
                    >
                      {opt === "phone" ? c.contactPhone : c.contactEmail}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                <button
                  type="submit"
                  disabled={sendState === "sending"}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.28)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {sendState === "sending" ? c.sending : c.submit}
                  {sendState !== "sending" && <ArrowRight size={15} strokeWidth={2.5} />}
                </button>
                {sendState === "error" && (
                  <p className="text-[0.8rem] text-red-400">
                    {lang === "lt"
                      ? "Nepavyko išsiųsti. Pabandykite skambinti: +370 601 34304"
                      : "Failed to send. Please call: +370 601 34304"}
                  </p>
                )}
              </div>

            </form>
          )}
        </div>

      </div>

      {/* Bottom spacing */}
      <div className="pb-16" />

    </div>
  );
}
