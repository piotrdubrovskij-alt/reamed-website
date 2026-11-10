"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Phone, Plus, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { specialists } from "@/lib/specialists";
import { api } from "@/lib/booking/client";
import { bookingCopy } from "@/lib/booking/copy";
import { suggestEmail } from "@/lib/booking/email-hint";
import {
  SPECIALIST_SLUGS,
  bookingRole,
  clockTime,
  durationLabel,
  money,
  serviceName,
  visitWhen,
} from "@/lib/booking/format";
import type { CartItem, CatalogueService, InvoiceBuyerInput, OrderView, VisitType } from "@/lib/booking/types";
import { useCatalogue } from "@/lib/booking/useCatalogue";
import { errorText } from "./OrderItems";
import SlotPicker, { type Slot } from "./SlotPicker";
import { Button, Card, CardTitle, Field, Notice, inputClass } from "./ui";

type Step = 1 | 2 | 3;
type Contacts = { firstName: string; lastName: string; phone: string; email: string };
const emptyContacts: Contacts = { firstName: "", lastName: "", phone: "", email: "" };
// The invoice buyer (Piotr 03.11.2026): the patient by default, or a company with its details.
type Invoice = { type: "person" | "company"; name: string; code: string; vatCode: string; address: string };
const emptyInvoice: Invoice = { type: "person", name: "", code: "", vatCode: "", address: "" };
type InvoiceErrors = Partial<Record<"invoiceName" | "invoiceCode" | "invoiceVatCode" | "invoiceAddress", string>>;
const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@.]{2,24}$/;
const COMPANY_CODE = /^\d{7,12}$/;
const VAT_CODE = /^[A-Z]{2}[A-Z0-9]{2,13}$/;

function invoiceInput(invoice: Invoice): InvoiceBuyerInput {
  const address = invoice.address.trim();
  if (invoice.type === "company") {
    const vatCode = invoice.vatCode.replace(/\s/g, "").toUpperCase();
    return {
      type: "company",
      name: invoice.name.trim(),
      code: invoice.code.replace(/\s/g, ""),
      ...(vatCode ? { vatCode } : {}),
      address,
    };
  }
  return address ? { type: "person", address } : { type: "person" };
}
const MAX_ITEMS = 10;

type CartLine = CartItem & { end: number; amountCents: number; durationMinutes: number };

function offers(service: CatalogueService, specialistId: string, visitType: VisitType): boolean {
  if (service.status !== "enabled" || !service.amountCents || !service.durationMinutes) return false;
  if (!service.specialists.some((s) => s.id === specialistId && s.status === "enabled")) return false;
  return visitType === "first_visit" ? service.category === "consultation" : service.category !== "consultation";
}

function Steps({ step, labels }: { step: Step; labels: readonly string[] }) {
  // Phone: the three steps on one line, spread left / centre / right, the current one in a mint
  // pill (Piotr 02.11.2026); 14px is the one deliberate exception to the type scale. From sm up:
  // 16px, numbered circles, the current one mint.
  return (
    <ol className="flex flex-nowrap items-center justify-between sm:justify-start gap-x-1 sm:gap-x-3 text-[14px] sm:text-small whitespace-nowrap">
      {labels.map((label, i) => {
        const n = (i + 1) as Step;
        const state = n === step ? "current" : n < step ? "done" : "todo";
        return (
          <li
            key={label}
            className={`flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 py-1 -mx-2.5 sm:mx-0 sm:px-0 sm:py-0 sm:bg-transparent ${
              state === "current" ? "bg-mint text-ink" : ""
            }`}
            aria-current={state === "current" ? "step" : undefined}
          >
            <span
              className={`inline-flex items-center justify-center tabular-nums sm:size-7 sm:rounded-full ${
                state === "current"
                  ? "font-medium sm:bg-mint sm:text-ink"
                  : state === "done"
                    ? "text-ink sm:bg-graphite sm:text-white"
                    : "text-graphite sm:bg-ground"
              }`}
            >
              {n}
            </span>
            <span className={state === "todo" ? "text-graphite" : "text-ink font-medium"}>{label}</span>
            {i < labels.length - 1 && <span aria-hidden="true" className="hidden sm:block ml-1 h-px w-5 bg-ground-hover" />}
          </li>
        );
      })}
    </ol>
  );
}

export default function BookingContent() {
  const { lang } = useLanguage();
  const c = bookingCopy[lang];
  const catalogue = useCatalogue();

  const [step, setStep] = useState<Step>(1);
  const [visitType, setVisitType] = useState<VisitType | null>(null);
  const [specialistId, setSpecialistId] = useState<string | null>(null);
  const [serviceId, setServiceId] = useState<string | null>(null);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [selecting, setSelecting] = useState(true);
  const [contacts, setContacts] = useState<Contacts>(emptyContacts);
  const [accepted, setAccepted] = useState(false);
  const [invoice, setInvoice] = useState<Invoice>(emptyInvoice);
  const [errors, setErrors] = useState<Partial<Record<keyof Contacts | "terms", string>> & InvoiceErrors>({});
  const [order, setOrder] = useState<OrderView | null>(null);
  const [heldFor, setHeldFor] = useState<string | null>(null);
  const [busy, setBusy] = useState<"hold" | "pay" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [now, setNow] = useState(() => Date.now());
  const [prefilled, setPrefilled] = useState(false);
  // "Registruotis dar kartą" from the order page: ?specialistas=<slug>&paslauga=<service id>,
  // applied once the catalogue has arrived. (Read through the router: on a client-side
  // navigation window.location still shows the previous page when this mounts.)
  const searchParams = useSearchParams();
  const [preselect, setPreselect] = useState<{ specialist: string; service: string } | null>(() => {
    const specialist = searchParams.get("specialistas");
    const service = searchParams.get("paslauga");
    return specialist && service ? { specialist, service } : null;
  });

  useEffect(() => {
    if (step !== 3) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [step]);

  // A signed-in patient (Mano vizitai) gets the form filled in from the latest order (0.9.24);
  // without a session the request answers 403 and nothing changes.
  useEffect(() => {
    let active = true;
    api
      .me()
      .then((me) => {
        if (!active || !me.profile) return;
        setContacts((prev) =>
          prev.firstName || prev.lastName || prev.phone || prev.email
            ? prev
            : { firstName: me.profile!.firstName, lastName: me.profile!.lastName, phone: me.profile!.phone, email: me.profile!.email },
        );
        setPrefilled(true);
      })
      .catch(() => undefined);
    return () => {
      active = false;
    };
  }, []);

  const data = catalogue.status === "ready" ? catalogue.data : null;
  const services = useMemo(() => data?.catalogue.services ?? [], [data]);

  if (preselect && services.length) {
    // Adjusting state while rendering (the documented pattern): once, when the catalogue is here.
    const found = services.find((s) => s.id === preselect.service);
    const id = Object.keys(SPECIALIST_SLUGS).find((key) => SPECIALIST_SLUGS[key] === preselect.specialist);
    setPreselect(null);
    if (found && id) {
      const type: VisitType = found.category === "consultation" ? "first_visit" : "returning";
      if (offers(found, id, type)) {
        setVisitType(type);
        setSpecialistId(id);
        setServiceId(found.id);
      }
    }
  }

  const availableSpecialists = useMemo(() => {
    if (!visitType) return [];
    return specialists.filter((person) => {
      const id = Object.keys(SPECIALIST_SLUGS).find((key) => SPECIALIST_SLUGS[key] === person.slug);
      return id && services.some((service) => offers(service, id, visitType));
    });
  }, [services, visitType]);
  const idOf = (slug: string) => Object.keys(SPECIALIST_SLUGS).find((key) => SPECIALIST_SLUGS[key] === slug) ?? "";

  const serviceOptions = useMemo(
    () => (visitType && specialistId ? services.filter((s) => offers(s, specialistId, visitType)) : []),
    [services, specialistId, visitType],
  );
  // A specialist change keeps a compatible service; a single option is taken at once.
  const service =
    serviceOptions.find((s) => s.id === serviceId) ?? (serviceOptions.length === 1 ? serviceOptions[0] : null);

  const total = cart.reduce((sum, line) => sum + line.amountCents, 0);
  const specialistName = (id: string) =>
    services.flatMap((s) => s.specialists).find((p) => p.id === id)?.name ?? "";
  const serviceLabel = (id: string) => {
    const found = services.find((s) => s.id === id);
    return found ? serviceName(found, lang) : id;
  };

  const chooseVisitType = (type: VisitType) => {
    if (type === visitType) return;
    setVisitType(type);
    setServiceId(null);
    setSlot(null);
    setCart([]);
    setSelecting(true);
    setOrder(null);
    setHeldFor(null);
  };

  const addToCart = () => {
    if (!service || !specialistId || !slot) return;
    const line: CartLine = {
      serviceId: service.id,
      specialistId,
      start: slot.start,
      end: slot.end,
      amountCents: service.amountCents ?? 0,
      durationMinutes: service.durationMinutes ?? 0,
    };
    setCart((prev) => [...prev.filter((l) => l.start !== line.start || l.specialistId !== line.specialistId), line]);
    setSlot(null);
    setSelecting(false);
    setError(null);
  };
  const removeLine = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
    if (cart.length <= 1) setSelecting(true);
  };

  const emailSuggestion = useMemo(() => suggestEmail(contacts.email), [contacts.email]);

  const validateContacts = (): boolean => {
    const next: typeof errors = {};
    if (!contacts.firstName.trim()) next.firstName = c.required;
    if (!contacts.lastName.trim()) next.lastName = c.required;
    const digits = contacts.phone.replace(/[^\d]/g, "");
    if (!contacts.phone.trim()) next.phone = c.required;
    else if (digits.length < 7 || digits.length > 15) next.phone = c.invalidPhone;
    if (!contacts.email.trim()) next.email = c.required;
    else if (!EMAIL.test(contacts.email.trim())) next.email = c.invalidEmail;
    if (!accepted) next.terms = c.acceptRequired;
    if (invoice.type === "company") {
      if (!invoice.name.trim()) next.invoiceName = c.required;
      const code = invoice.code.replace(/\s/g, "");
      if (!code) next.invoiceCode = c.required;
      else if (!COMPANY_CODE.test(code)) next.invoiceCode = c.invalidCompanyCode;
      const vatCode = invoice.vatCode.replace(/\s/g, "").toUpperCase();
      if (vatCode && !VAT_CODE.test(vatCode)) next.invoiceVatCode = c.invalidVatCode;
      if (!invoice.address.trim()) next.invoiceAddress = c.required;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const payloadKey = JSON.stringify({
    visitType,
    lang,
    cart: cart.map((l) => [l.serviceId, l.specialistId, l.start]),
    contacts,
    invoice: invoiceInput(invoice),
  });

  const hold = async (): Promise<OrderView | null> => {
    if (!visitType) return null;
    if (order && heldFor === payloadKey && order.expiresAt > Date.now() + 30_000) return order;
    setBusy("hold");
    setError(null);
    try {
      const held = await api.hold({
        requestId: crypto.randomUUID(),
        visitType,
        locale: lang,
        patient: {
          firstName: contacts.firstName.trim(),
          lastName: contacts.lastName.trim(),
          phone: contacts.phone.trim(),
          email: contacts.email.trim(),
        },
        items: cart.map(({ serviceId, specialistId, start }) => ({ serviceId, specialistId, start })),
        acceptedTerms: true,
        invoice: invoiceInput(invoice),
      });
      setOrder(held);
      setHeldFor(payloadKey);
      return held;
    } catch (e) {
      setError(errorText(e, lang));
      return null;
    } finally {
      setBusy(null);
    }
  };

  const toPayment = async () => {
    if (!validateContacts()) return;
    const held = await hold();
    if (held) {
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const pay = async () => {
    const held = order && heldFor === payloadKey && order.expiresAt > Date.now() + 5_000 ? order : await hold();
    if (!held) return;
    setBusy("pay");
    setError(null);
    try {
      const { checkoutUrl } = await api.pay(held.id);
      window.location.assign(checkoutUrl);
    } catch (e) {
      setError(errorText(e, lang));
      setBusy(null);
    }
  };

  const goTo = (next: Step) => {
    setStep(next);
    setError(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const expired = order !== null && heldFor === payloadKey && order.expiresAt <= now;

  // ---------------------------------------------------------------------------------------------

  if (catalogue.status === "unavailable" || catalogue.status === "error") {
    return (
      <Card className="max-w-[640px]">
        <CardTitle>{c.unavailableTitle}</CardTitle>
        <p className="mt-3 text-body text-graphite">{c.unavailableText}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={c.phoneHref} className="btn btn-dark">
            <Phone size={20} aria-hidden="true" />
            {c.phone}
          </a>
          <Link href="/registracija" className="btn bg-ground text-ink hover:bg-ground-hover">
            {c.toRequestForm}
          </Link>
        </div>
      </Card>
    );
  }

  const summary = (
    <Card className="flex flex-col gap-4">
      <div className="flex items-baseline justify-between gap-3">
        <CardTitle>{c.yourOrder}</CardTitle>
        {cart.length > 0 && (
          <span className="text-small text-graphite">{cart.length === 1 ? c.oneVisit : c.visits(cart.length)}</span>
        )}
      </div>
      {cart.length === 0 ? (
        <p className="text-small text-graphite">{c.emptyCart}</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {cart.map((line, i) => (
            <li key={`${line.specialistId}-${line.start}`} className="rounded-2xl bg-white p-4 flex items-start justify-between gap-3">
              <div className="flex flex-col gap-0.5 min-w-0">
                <p className="text-body font-medium text-ink">{serviceLabel(line.serviceId)}</p>
                <p className="text-small text-graphite">{specialistName(line.specialistId)}</p>
                <p className="text-small text-ink mt-1">{visitWhen(line.start, line.end, lang)}</p>
                <p className="text-small text-graphite">{money(line.amountCents, lang)}</p>
              </div>
              {step === 1 && (
                <button
                  type="button"
                  onClick={() => removeLine(i)}
                  aria-label={c.remove}
                  className="shrink-0 size-11 rounded-full hover:bg-ground inline-flex items-center justify-center text-graphite"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <p className="flex items-baseline justify-between gap-3 border-t border-ground-hover pt-4 text-body">
          <span className="text-graphite">{c.total}</span>
          <strong className="text-h3-m font-medium tabular-nums">{money(total, lang)}</strong>
        </p>
      )}
      {step === 1 && (
        <div className="flex flex-col gap-3">
          {visitType === "returning" && cart.length > 0 && cart.length < MAX_ITEMS && !selecting && (
            <Button variant="ghost" onClick={() => setSelecting(true)}>
              <Plus size={20} aria-hidden="true" />
              {c.addAnother}
            </Button>
          )}
          {cart.length >= MAX_ITEMS && <p className="text-small text-graphite">{c.maxVisits(MAX_ITEMS)}</p>}
          <Button disabled={cart.length === 0} onClick={() => goTo(2)}>
            {c.next}
            <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>
      )}
    </Card>
  );

  return (
    <div className="flex flex-col gap-6">
      <Steps step={step} labels={c.steps} />

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
        <div className="flex flex-col gap-6 min-w-0">
          {step === 1 && (
            <>
              <Card className="flex flex-col gap-5">
                <CardTitle>{c.visitTypeQuestion}</CardTitle>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(
                    [
                      ["first_visit", c.firstVisit, c.firstVisitHint],
                      ["returning", c.returning, c.returningHint],
                    ] as const
                  ).map(([type, title, hint]) => (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={visitType === type}
                      onClick={() => chooseVisitType(type)}
                      className={`flex flex-col items-start gap-1 rounded-[22px] px-5 py-4 text-left transition-colors ${
                        visitType === type ? "bg-graphite text-white" : "bg-ground text-ink hover:bg-ground-hover"
                      }`}
                    >
                      <span className="text-body font-medium">{title}</span>
                      <span className={`text-small ${visitType === type ? "text-on-dark" : "text-graphite"}`}>{hint}</span>
                    </button>
                  ))}
                </div>
                {visitType === "first_visit" && <p className="text-small text-graphite max-w-[60ch]">{c.firstVisitNote}</p>}
              </Card>

              {visitType && selecting && (
                <Card className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <CardTitle>{c.specialist}</CardTitle>
                    {/* On the phone the grid bleeds to the card edge so two cards get room for a full
                        name on one line; name and each role part are sized to the card (container units)
                        and never wrap (Piotr 02.11.2026). */}
                    <ul className="grid grid-cols-2 gap-2 -mx-3 sm:mx-0 sm:gap-3 sm:grid-cols-4">
                      {availableSpecialists.map((person) => {
                        const id = idOf(person.slug);
                        const chosen = specialistId === id;
                        const role = bookingRole(id, lang) ?? (lang === "en" ? person.roleEn : person.role);
                        return (
                          <li key={person.slug} className="@container">
                            <button
                              type="button"
                              aria-pressed={chosen}
                              onClick={() => {
                                setSpecialistId(id);
                                setSlot(null);
                              }}
                              className={`group flex w-full flex-col items-center gap-2 rounded-[22px] p-1.5 pb-3 text-center transition-colors ${
                                chosen ? "bg-graphite text-white" : "bg-ground text-ink hover:bg-ground-hover"
                              }`}
                            >
                              {person.photo && (
                                <Image
                                  src={person.photo}
                                  alt=""
                                  width={320}
                                  height={400}
                                  sizes="(min-width: 640px) 20vw, 45vw"
                                  className="w-full aspect-[4/5] object-cover rounded-t-full"
                                />
                              )}
                              <span className="block whitespace-nowrap font-medium leading-tight text-[clamp(12px,9cqw,16px)]">
                                {person.name}
                              </span>
                              <span
                                className={`block leading-snug text-[clamp(11px,7.8cqw,14px)] ${chosen ? "text-on-dark" : "text-graphite"}`}
                              >
                                {role.split(", ").map((part, i) => (
                                  <span key={part} className="block whitespace-nowrap">
                                    {i === 0 && role.includes(", ") ? `${part},` : part}
                                  </span>
                                ))}
                              </span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {specialistId && (
                    <div className="flex flex-col gap-4">
                      <CardTitle>{c.service}</CardTitle>
                      {serviceOptions.length === 0 ? (
                        <Notice>{c.noServices}</Notice>
                      ) : (
                        <ul className="flex flex-col gap-2">
                          {serviceOptions.map((option) => {
                            const chosen = service?.id === option.id;
                            return (
                              <li key={option.id}>
                                <button
                                  type="button"
                                  aria-pressed={chosen}
                                  onClick={() => {
                                    setServiceId(option.id);
                                    setSlot(null);
                                  }}
                                  className={`flex w-full flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-2xl px-5 py-3.5 text-left transition-colors ${
                                    chosen ? "bg-graphite text-white" : "bg-ground text-ink hover:bg-ground-hover"
                                  }`}
                                >
                                  <span className="text-body font-medium">{serviceName(option, lang)}</span>
                                  <span className={`text-small tabular-nums ${chosen ? "text-on-dark" : "text-graphite"}`}>
                                    {durationLabel(option.durationMinutes, lang)} · {money(option.amountCents ?? 0, lang)}
                                  </span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  )}

                  {specialistId && service && (
                    <div className="flex flex-col gap-4">
                      <CardTitle>{c.time}</CardTitle>
                      <SlotPicker
                        key={`${service.id}:${specialistId}`}
                        serviceId={service.id}
                        specialistId={specialistId}
                        lang={lang}
                        selected={slot}
                        onPick={setSlot}
                      />
                      {slot && (
                        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-4">
                          <p className="flex items-center gap-2 text-body text-ink">
                            <CalendarDays size={20} aria-hidden="true" />
                            {visitWhen(slot.start, slot.end, lang)}
                          </p>
                          <Button onClick={addToCart}>
                            {c.addToOrder}
                            <ArrowRight size={20} aria-hidden="true" />
                          </Button>
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              )}
              {error && <Notice kind="error">{error}</Notice>}
            </>
          )}

          {step === 2 && (
            <Card className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <CardTitle>{c.contactsTitle}</CardTitle>
                <p className="text-small text-graphite">{c.contactsLead}</p>
              </div>
              <form
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  void toPayment();
                }}
                className="flex flex-col gap-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  {(
                    [
                      ["firstName", c.firstName, "text", "given-name"],
                      ["lastName", c.lastName, "text", "family-name"],
                      ["phone", c.phoneLabel, "tel", "tel"],
                      ["email", c.email, "email", "email"],
                    ] as const
                  ).map(([key, label, type, autoComplete]) => (
                    <Field key={key} label={label} htmlFor={`booking-${key}`} error={errors[key]}>
                      <input
                        id={`booking-${key}`}
                        type={type}
                        autoComplete={autoComplete}
                        inputMode={type === "tel" ? "tel" : type === "email" ? "email" : undefined}
                        value={contacts[key]}
                        onChange={(e) => {
                          setContacts((prev) => ({ ...prev, [key]: e.target.value }));
                          if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
                        }}
                        placeholder={type === "tel" ? "+370 …" : undefined}
                        className={inputClass(Boolean(errors[key]))}
                      />
                      {key === "email" && emailSuggestion && (
                        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-small text-graphite">
                          <span>{c.emailHint(emailSuggestion.slice(emailSuggestion.lastIndexOf("@") + 1))}</span>
                          <button
                            type="button"
                            onClick={() => setContacts((prev) => ({ ...prev, email: emailSuggestion }))}
                            className="link-action min-h-11 sm:min-h-0 font-medium"
                          >
                            {c.emailHintApply}
                          </button>
                        </p>
                      )}
                    </Field>
                  ))}
                </div>
                {prefilled && <p className="text-small text-graphite">{c.prefilled}</p>}
                <fieldset className="flex flex-col gap-3 rounded-2xl bg-ground p-4">
                  <legend className="sr-only">{c.invoiceTitle}</legend>
                  <div className="flex flex-col gap-1">
                    <span className="text-body font-medium text-ink">{c.invoiceTitle}</span>
                    <span className="text-small text-graphite">{c.invoiceLead}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(
                      [
                        ["person", c.invoicePerson, c.invoicePersonHint],
                        ["company", c.invoiceCompany, null],
                      ] as const
                    ).map(([type, label, hint]) => (
                      <label
                        key={type}
                        className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-small ${
                          invoice.type === type ? "bg-graphite text-white" : "bg-paper text-ink hover:bg-ground-hover"
                        }`}
                      >
                        <input
                          type="radio"
                          name="booking-invoice-type"
                          value={type}
                          checked={invoice.type === type}
                          onChange={() => {
                            setInvoice((prev) => ({ ...prev, type }));
                            setErrors((prev) => ({
                              ...prev,
                              invoiceName: undefined,
                              invoiceCode: undefined,
                              invoiceVatCode: undefined,
                              invoiceAddress: undefined,
                            }));
                          }}
                          className="sr-only"
                        />
                        <span className="font-medium">{label}</span>
                        {hint && (
                          <span className={`hidden sm:inline ${invoice.type === type ? "text-white/80" : "text-graphite"}`}>({hint})</span>
                        )}
                      </label>
                    ))}
                  </div>
                  {invoice.type === "company" ? (
                    <div className="grid gap-4 sm:grid-cols-2">
                      {(
                        [
                          ["name", "invoiceName", c.invoiceCompanyName, "organization"],
                          ["code", "invoiceCode", c.invoiceCompanyCode, undefined],
                          ["vatCode", "invoiceVatCode", c.invoiceVatCode, undefined],
                          ["address", "invoiceAddress", c.invoiceAddress, "street-address"],
                        ] as const
                      ).map(([key, errorKey, label, autoComplete]) => (
                        <Field key={key} label={label} htmlFor={`booking-invoice-${key}`} error={errors[errorKey]}>
                          <input
                            id={`booking-invoice-${key}`}
                            type="text"
                            autoComplete={autoComplete}
                            inputMode={key === "code" ? "numeric" : undefined}
                            value={invoice[key]}
                            onChange={(e) => {
                              setInvoice((prev) => ({ ...prev, [key]: e.target.value }));
                              if (errors[errorKey]) setErrors((prev) => ({ ...prev, [errorKey]: undefined }));
                            }}
                            className={inputClass(Boolean(errors[errorKey]))}
                          />
                        </Field>
                      ))}
                    </div>
                  ) : (
                    <Field label={c.invoicePersonAddress} htmlFor="booking-invoice-address">
                      <input
                        id="booking-invoice-address"
                        type="text"
                        autoComplete="street-address"
                        value={invoice.address}
                        onChange={(e) => setInvoice((prev) => ({ ...prev, address: e.target.value }))}
                        className={inputClass(false)}
                      />
                    </Field>
                  )}
                </fieldset>
                <div className="flex items-start gap-3 text-small text-ink">
                  <input
                    id="booking-terms"
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => {
                      setAccepted(e.target.checked);
                      if (errors.terms) setErrors((prev) => ({ ...prev, terms: undefined }));
                    }}
                    className="mt-1 size-5 shrink-0 accent-graphite"
                  />
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="booking-terms" className="cursor-pointer">
                      {c.acceptTermsTitle}
                    </label>
                    <ul className="flex flex-col gap-1 pl-4 list-disc marker:text-mint">
                      <li>
                        <Link href="/rezervacija/salygos" target="_blank" className="link-action">
                          {c.acceptTermsLink}
                        </Link>
                      </li>
                      <li>
                        <Link href="/privatumas" target="_blank" className="link-action">
                          {c.acceptPrivacyLink}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {errors.terms && (
                  <p role="alert" className="text-small text-[#B3261E]">
                    {errors.terms}
                  </p>
                )}
                {error && <Notice kind="error">{error}</Notice>}
                <div className="flex flex-wrap gap-3 justify-between pt-2">
                  <Button variant="ghost" onClick={() => goTo(1)}>
                    <ArrowLeft size={20} aria-hidden="true" />
                    {c.back}
                  </Button>
                  <Button type="submit" disabled={busy !== null}>
                    {c.next}
                    <ArrowRight size={20} aria-hidden="true" />
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {step === 3 && order && (
            <Card className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <CardTitle>{c.paymentTitle}</CardTitle>
                <p className="text-small text-graphite">{c.paymentLead}</p>
              </div>
              <dl className="grid grid-cols-1 gap-y-3 sm:grid-cols-[auto_1fr] sm:gap-x-6 sm:gap-y-2 text-body">
                <dt className="text-small sm:text-body text-graphite">{c.fullName}</dt>
                <dd className="text-ink">
                  {contacts.firstName} {contacts.lastName}
                </dd>
                <dt className="text-small sm:text-body text-graphite">{c.phoneLabel}</dt>
                <dd className="text-ink">{contacts.phone}</dd>
                <dt className="text-small sm:text-body text-graphite">{c.email}</dt>
                <dd className="text-ink break-words">{contacts.email}</dd>
                <dt className="text-small sm:text-body text-graphite">{c.invoiceSummary}</dt>
                <dd className="text-ink break-words">
                  {invoice.type === "company"
                    ? `${invoice.name.trim()} (${invoice.code.replace(/\s/g, "")})`
                    : `${contacts.firstName} ${contacts.lastName}`}
                </dd>
              </dl>
              {expired ? (
                <Notice kind="error">{c.holdExpired}</Notice>
              ) : (
                <Notice>{c.holdUntil(clockTime(order.expiresAt, lang))}</Notice>
              )}
              {data && !data.paymentsEnabled && <Notice kind="error">{c.paymentsOff}</Notice>}
              {error && <Notice kind="error">{error}</Notice>}
              <p className="text-small text-graphite">{c.payerNote}</p>
              <div className="flex flex-wrap gap-3 justify-between pt-2">
                <Button variant="ghost" onClick={() => goTo(expired ? 1 : 2)} disabled={busy !== null}>
                  <ArrowLeft size={20} aria-hidden="true" />
                  {c.back}
                </Button>
                <Button onClick={pay} disabled={busy !== null || expired || (data ? !data.paymentsEnabled : false)}>
                  {busy ? c.paying : c.payButton}
                </Button>
              </div>
            </Card>
          )}
        </div>

        {summary}
      </div>
    </div>
  );
}
