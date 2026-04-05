"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const content = {
  lt: {
    back: "Atgal į pagrindinį",
    tag: "Registracija vizitui",
    title: "Registracija vizitui",

    phoneEyebrow: "Rekomenduojame",
    phoneTitle: "Patogiausia registruotis telefonu",
    phoneText: "Skambučiu galime greičiau patvirtinti laiką ir pasiūlyti tinkamiausią vizito laiką. Tai greičiausias būdas susisiekti ir užsiregistruoti.",
    phoneCta: "Skambinti +370 601 34304",
    phoneHours: "Darbo laikas: I–V 8:00–19:00",

    formEyebrow: "Užklausa",
    formTitle: "Palikite užklausą",
    formText: "Jei šiuo metu negalite paskambinti, užpildykite formą — susisieksime su Jumis ir padėsime suderinti vizito laiką.",

    labelName: "Vardas",
    labelPhone: "Telefono numeris",
    labelEmail: "El. paštas",
    labelTime: "Pageidaujamas laikas / dienos",
    labelMessage: "Trumpa žinutė",
    placeholderName: "Jūsų vardas",
    placeholderPhone: "+370 ...",
    placeholderEmail: "el.pastas@mail.com",
    placeholderTime: "pvz. Pirmadieniais iki 14 val.",
    placeholderMessage: "Trumpai aprašykite savo situaciją arba klausimą",

    contactLabel: "Pageidaujamas susisiekimo būdas",
    contactPhone: "Telefonu",
    contactEmail: "El. paštu",

    submit: "Siųsti užklausą",
    sending: "Siunčiama…",
    required: "Privalomas laukas",

    successTitle: "Užklausa gauta",
    successText: "Susisieksime su Jumis per 24 val. darbo dienomis.",
    sendAnother: "Siųsti dar vieną užklausą",

    errorMsg: "Nepavyko išsiųsti. Skambinkite: +370 601 34304",
  },
  en: {
    back: "Back to home",
    tag: "Book a Visit",
    title: "Book a Visit",

    phoneEyebrow: "Recommended",
    phoneTitle: "Fastest way: call us",
    phoneText: "A quick call lets us confirm your time immediately and find the most convenient slot for you. It's the fastest way to book.",
    phoneCta: "Call +370 601 34304",
    phoneHours: "Working hours: Mon–Fri 8:00–19:00",

    formEyebrow: "Request",
    formTitle: "Leave a request",
    formText: "If you can't call right now, fill in the form — we will get back to you and help arrange a convenient visit time.",

    labelName: "First name",
    labelPhone: "Phone number",
    labelEmail: "Email",
    labelTime: "Preferred time / days",
    labelMessage: "Short message",
    placeholderName: "Your name",
    placeholderPhone: "+370 ...",
    placeholderEmail: "your@email.com",
    placeholderTime: "e.g. Mondays before 2pm",
    placeholderMessage: "Briefly describe your situation or question",

    contactLabel: "Preferred contact method",
    contactPhone: "By phone",
    contactEmail: "By email",

    submit: "Send request",
    sending: "Sending…",
    required: "Required field",

    successTitle: "Request received",
    successText: "We will contact you within 24 working hours.",
    sendAnother: "Send another request",

    errorMsg: "Failed to send. Please call: +370 601 34304",
  },
} as const;

type SendState = "idle" | "sending" | "success" | "error";

const emptyFields = { name: "", phone: "", email: "", time: "", message: "" };

export default function RegistracijaContent() {
  const { lang } = useLanguage();
  const c = content[lang];

  const [contactPref, setContactPref] = useState<"phone" | "email">("phone");
  const [fields, setFields] = useState(emptyFields);
  const [sendState, setSendState] = useState<SendState>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof typeof emptyFields, boolean>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof emptyFields]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    if (!fields.name.trim()) newErrors.name = true;
    if (contactPref === "phone" && !fields.phone.trim()) newErrors.phone = true;
    if (contactPref === "email" && !fields.email.trim()) newErrors.email = true;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }

    const contactDetail = contactPref === "phone" ? fields.phone : fields.email;
    const parts: string[] = [];
    if (fields.time) parts.push(`${lang === "lt" ? "Pageidaujamas laikas" : "Preferred time"}: ${fields.time}`);
    if (fields.message) parts.push(fields.message);

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
          contactDetail,
          contact: contactPref,
          message: parts.join("\n"),
          lang,
        }),
      });
      clearTimeout(timer);
      setSendState(res.ok ? "success" : "error");
    } catch {
      clearTimeout(timer);
      setSendState("error");
    }
  };

  const resetForm = () => {
    setFields(emptyFields);
    setSendState("idle");
    setErrors({});
  };

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-2.5 rounded-xl border text-[0.9rem] text-foreground placeholder:text-muted/35 bg-[#F7FAF9] focus:outline-none focus:ring-2 transition-all duration-200 ${
      hasError
        ? "border-red-300 focus:border-red-300 focus:ring-red-100"
        : "border-[#DDE9E8] focus:border-[#7DB9B5] focus:ring-[#7DB9B5]/20"
    }`;

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

      <div className="container-xl py-8 md:py-12 flex flex-col gap-8 max-w-[680px]">

        {/* ── 1. PHONE PRIORITY BLOCK ── */}
        <div className="rounded-2xl bg-[#383C3B] px-7 py-8 md:px-10 md:py-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-full bg-[#7DB9B5]/20 flex items-center justify-center">
              <Phone size={13} strokeWidth={2.5} className="text-[#7DB9B5]" />
            </div>
            <p className="text-[0.68rem] font-bold uppercase tracking-widest text-[#7DB9B5]">
              {c.phoneEyebrow}
            </p>
          </div>

          <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-white mb-3 leading-snug">
            {c.phoneTitle}
          </h2>
          <p className="text-[0.875rem] text-white/55 leading-relaxed mb-7 max-w-[440px]">
            {c.phoneText}
          </p>

          <a
            href="tel:+37060134304"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#7DB9B5] text-white text-[0.9375rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_20px_rgba(125,185,181,0.25)] hover:-translate-y-0.5"
          >
            <Phone size={16} strokeWidth={2.5} />
            {c.phoneCta}
          </a>

          <p className="text-[0.75rem] text-white/30 mt-4">{c.phoneHours}</p>
        </div>

        {/* ── 2. REQUEST FORM ── */}
        <div className="rounded-2xl border border-[#DDE9E8] bg-white px-7 py-8 md:px-10 md:py-10">
          <p className="text-[0.68rem] font-bold uppercase tracking-widest text-[#7DB9B5] mb-2">
            {c.formEyebrow}
          </p>
          <h2 className="text-[1.25rem] md:text-[1.5rem] font-bold text-foreground mb-2 leading-snug">
            {c.formTitle}
          </h2>
          <p className="text-[0.875rem] text-muted leading-relaxed mb-8 max-w-[460px]">
            {c.formText}
          </p>

          {sendState === "success" ? (
            <div className="flex flex-col items-start gap-4 py-2">
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
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">

              {/* Name */}
              <div>
                <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">
                  {c.labelName} <span className="text-[#7DB9B5]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder={c.placeholderName}
                  className={inputClass(errors.name)}
                />
                {errors.name && <p className="text-[0.73rem] text-red-400 mt-1">{c.required}</p>}
              </div>

              {/* Phone + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">
                    {c.labelPhone}
                    {contactPref === "phone" && <span className="text-[#7DB9B5] ml-1">*</span>}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    placeholder={c.placeholderPhone}
                    className={inputClass(errors.phone)}
                  />
                  {errors.phone && <p className="text-[0.73rem] text-red-400 mt-1">{c.required}</p>}
                </div>
                <div>
                  <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">
                    {c.labelEmail}
                    {contactPref === "email" && <span className="text-[#7DB9B5] ml-1">*</span>}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    placeholder={c.placeholderEmail}
                    className={inputClass(errors.email)}
                  />
                  {errors.email && <p className="text-[0.73rem] text-red-400 mt-1">{c.required}</p>}
                </div>
              </div>

              {/* Preferred time */}
              <div>
                <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">{c.labelTime}</label>
                <input
                  type="text"
                  name="time"
                  value={fields.time}
                  onChange={handleChange}
                  placeholder={c.placeholderTime}
                  className={inputClass()}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[0.8rem] font-semibold text-foreground/70 mb-1.5">{c.labelMessage}</label>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder={c.placeholderMessage}
                  className={`${inputClass()} resize-none`}
                />
              </div>

              {/* Contact method */}
              <div>
                <p className="text-[0.8rem] font-semibold text-foreground/70 mb-2">{c.contactLabel}</p>
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
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={sendState === "sending"}
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#7DB9B5] text-white text-[0.9rem] font-bold rounded-xl hover:bg-[#68A7A2] transition-all duration-200 shadow-[0_4px_16px_rgba(125,185,181,0.25)] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                >
                  {sendState === "sending" ? c.sending : c.submit}
                  {sendState !== "sending" && <ArrowRight size={15} strokeWidth={2.5} />}
                </button>
                {sendState === "error" && (
                  <p className="text-[0.8rem] text-red-400">{c.errorMsg}</p>
                )}
              </div>

            </form>
          )}
        </div>

      </div>

      <div className="pb-16" />
    </div>
  );
}
