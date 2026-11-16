"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { api, BookingError } from "@/lib/booking/client";
import { bookingCopy } from "@/lib/booking/copy";
import { suggestEmail } from "@/lib/booking/email-hint";
import { addDays, clinicDay } from "@/lib/booking/format";
import type { InvoiceBuyerInput } from "@/lib/booking/types";
import { voucherCopy } from "@/lib/voucher/copy";
import { fullDaySentence, wholeEuros } from "@/lib/voucher/format";
import type { VoucherConfig } from "@/lib/voucher/types";
import { errorText } from "@/components/booking/OrderItems";
import { Button, Card, CardTitle, Choice, Field, Notice, Spinner, inputClass } from "@/components/booking/ui";
import VoucherPreview from "./VoucherPreview";

/**
 * Buying a gift voucher (Piotr 15.11.2026): a sum from 50 € in steps of 10, optional words for
 * the recipient, the voucher e-mailed to the buyer or straight to the recipient, paid through
 * Paysera. The page only collects the choices: the limits come from the clinic system
 * (`vouchers/config`), which also checks everything again, creates the voucher after the
 * payment and sends the letters. The buyer's e-mail is proved by the code from the letter first,
 * exactly as on /rezervacija, because the voucher and the invoice go there.
 */
type Buyer = { firstName: string; lastName: string; email: string };
type Invoice = { type: "person" | "company"; name: string; code: string; vatCode: string; address: string };
type Errors = Partial<
  Record<
    | "amount"
    | "to"
    | "from"
    | "message"
    | "recipientEmail"
    | "date"
    | "firstName"
    | "lastName"
    | "email"
    | "terms"
    | "invoiceName"
    | "invoiceCode"
    | "invoiceVatCode"
    | "invoiceAddress",
    string
  >
>;

const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@.]{2,24}$/;
const COMPANY_CODE = /^\d{7,12}$/;
const VAT_CODE = /^[A-Z]{2}[A-Z0-9]{2,13}$/;
// The voucher sheet's font has no pictographs: the system drops them, so the preview does too.
const plainWords = (value: string) =>
  value
    .replace(/[\p{Extended_Pictographic}️‍]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
/** The same day of the month 12 months later, as the system counts it. */
function validUntil(day: string, months: number): string {
  const [y, m, d] = day.split("-").map(Number);
  const target = new Date(Date.UTC(y, m - 1 + months, 1));
  const last = new Date(Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0)).getUTCDate();
  target.setUTCDate(Math.min(d, last));
  return target.toISOString().slice(0, 10);
}

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

export default function VoucherContent() {
  const { lang } = useLanguage();
  const c = voucherCopy[lang];
  const b = bookingCopy[lang];

  const [config, setConfig] = useState<VoucherConfig | null>(null);
  const [unavailable, setUnavailable] = useState(false);
  const [amount, setAmount] = useState<number | null>(10_000);
  const [custom, setCustom] = useState(false);
  const [customText, setCustomText] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");
  const [delivery, setDelivery] = useState<"buyer" | "recipient">("buyer");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [when, setWhen] = useState<"now" | "day">("now");
  const [date, setDate] = useState("");
  const [buyer, setBuyer] = useState<Buyer>({ firstName: "", lastName: "", email: "" });
  const [invoice, setInvoice] = useState<Invoice>({ type: "person", name: "", code: "", vatCode: "", address: "" });
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [verifiedEmail, setVerifiedEmail] = useState<string | null>(null);
  const [verify, setVerify] = useState<{
    phase: "idle" | "sending" | "code" | "checking";
    sentTo: string | null;
    code: string;
    error: string | null;
  }>({ phase: "idle", sentTo: null, code: "", error: null });
  // One request id per set of choices: a second click or a retry returns the same order.
  const request = useRef<{ key: string; id: string } | null>(null);

  useEffect(() => {
    let live = true;
    api
      .voucherConfig()
      .then((value) => live && setConfig(value))
      .catch(() => live && setUnavailable(true));
    // A buyer who is already signed in (Mano vizitai) does not prove the same address again.
    api
      .me()
      .then((me) => {
        if (!live || !me.email) return;
        setSessionEmail(me.email.toLowerCase());
        setBuyer((prev) =>
          prev.firstName || prev.lastName || prev.email
            ? prev
            : {
                firstName: me.profile?.firstName ?? "",
                lastName: me.profile?.lastName ?? "",
                email: me.email ?? "",
              },
        );
      })
      .catch(() => undefined);
    return () => {
      live = false;
    };
  }, []);

  const today = useMemo(() => clinicDay(Date.now()), []);
  const euros = (cents: number) => wholeEuros(cents, lang);
  const min = config?.minCents ?? 5_000;
  const max = config?.maxCents ?? 200_000;
  const step = config?.stepCents ?? 1_000;
  const messageMax = config?.messageMax ?? 300;
  const nameMax = config?.nameMax ?? 60;
  const maxDays = config?.deliveryMaxDays ?? 90;
  const validAmount = (cents: number | null): cents is number =>
    cents !== null && cents >= min && cents <= max && cents % step === 0;

  const chooseCustom = (text: string) => {
    setCustomText(text);
    const digits = text.trim().replace(/\s*€$/, "");
    setAmount(/^\d{1,5}$/.test(digits) ? Number(digits) * 100 : null);
    setErrors((prev) => ({ ...prev, amount: undefined }));
  };
  const nudge = (direction: 1 | -1) => {
    const base = validAmount(amount) ? amount : Math.max(min, Math.min(max, Math.round((amount ?? min) / step) * step));
    const next = Math.max(min, Math.min(max, base + direction * step));
    setAmount(next);
    setCustomText(String(next / 100));
    setErrors((prev) => ({ ...prev, amount: undefined }));
  };

  const emailValue = buyer.email.trim().toLowerCase();
  const emailShape = EMAIL.test(emailValue);
  const emailVerified = emailShape && (verifiedEmail === emailValue || sessionEmail === emailValue);
  const emailSuggestion = useMemo(() => suggestEmail(buyer.email), [buyer.email]);
  const recipientSuggestion = useMemo(() => suggestEmail(recipientEmail), [recipientEmail]);
  const words = { to: plainWords(to), from: plainWords(from), message: plainWords(message) };

  const validate = (): boolean => {
    const next: Errors = {};
    if (!validAmount(amount)) next.amount = c.amountInvalid(euros(min), euros(max), euros(step));
    if (words.to.length > nameMax) next.to = c.tooLong;
    if (words.from.length > nameMax) next.from = c.tooLong;
    if (words.message.length > messageMax) next.message = c.tooLong;
    if (delivery === "recipient") {
      if (!recipientEmail.trim()) next.recipientEmail = b.required;
      else if (!EMAIL.test(recipientEmail.trim().toLowerCase())) next.recipientEmail = b.invalidEmail;
      if (when === "day" && (!date || date < today || date > addDays(today, maxDays)))
        next.date = c.sendDateInvalid(maxDays);
    }
    if (!buyer.firstName.trim()) next.firstName = b.required;
    if (!buyer.lastName.trim()) next.lastName = b.required;
    if (!buyer.email.trim()) next.email = b.required;
    else if (!emailShape) next.email = b.invalidEmail;
    if (invoice.type === "company") {
      if (!invoice.name.trim()) next.invoiceName = b.required;
      const code = invoice.code.replace(/\s/g, "");
      if (!code) next.invoiceCode = b.required;
      else if (!COMPANY_CODE.test(code)) next.invoiceCode = b.invalidCompanyCode;
      const vatCode = invoice.vatCode.replace(/\s/g, "").toUpperCase();
      if (vatCode && !VAT_CODE.test(vatCode)) next.invoiceVatCode = b.invalidVatCode;
      if (!invoice.address.trim()) next.invoiceAddress = b.required;
    }
    if (!accepted) next.terms = b.acceptRequired;
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) document.getElementById(`voucher-${first}`)?.focus();
    return !first;
  };

  const sendCode = async () => {
    setVerify((prev) => ({ ...prev, phase: "sending", error: null }));
    try {
      await api.requestCode(emailValue, lang);
      setVerify({ phase: "code", sentTo: emailValue, code: "", error: null });
    } catch (e) {
      setVerify((prev) => ({ ...prev, phase: "idle", error: errorText(e, lang) }));
    }
  };

  const buy = async () => {
    if (!validAmount(amount)) return;
    setBusy(true);
    setError(null);
    const input = {
      locale: lang,
      buyer: { firstName: buyer.firstName.trim(), lastName: buyer.lastName.trim(), email: emailValue },
      amountCents: amount,
      ...(words.to ? { recipientName: words.to } : {}),
      ...(words.from ? { fromName: words.from } : {}),
      ...(words.message ? { message: words.message } : {}),
      delivery:
        delivery === "recipient"
          ? {
              to: "recipient" as const,
              email: recipientEmail.trim().toLowerCase(),
              ...(when === "day" && date > today ? { date } : {}),
            }
          : { to: "buyer" as const },
      acceptedTerms: true as const,
      invoice: invoiceInput(invoice),
    };
    const key = JSON.stringify(input);
    if (request.current?.key !== key) request.current = { key, id: crypto.randomUUID() };
    try {
      const order = await api.voucherOrder({ requestId: request.current.id, ...input });
      const { checkoutUrl } = await api.pay(order.id);
      window.location.assign(checkoutUrl);
    } catch (e) {
      // An order that ran out of time must not be asked for again under the same id.
      if (e instanceof BookingError && e.status === 400) request.current = null;
      setError(errorText(e, lang));
      setBusy(false);
    }
  };

  const submit = async () => {
    if (busy || !validate()) return;
    if (!emailVerified) {
      if (verify.phase === "code" && verify.sentTo === emailValue)
        setVerify((prev) => ({ ...prev, error: prev.code ? prev.error : b.emailCodeRequired }));
      else await sendCode();
      return;
    }
    await buy();
  };

  const confirmCode = async () => {
    const code = verify.code.replace(/\s+/g, "");
    if (!verify.sentTo) return;
    if (!/^\d{6}$/.test(code)) {
      setVerify((prev) => ({ ...prev, error: b.emailCodeRequired }));
      return;
    }
    setVerify((prev) => ({ ...prev, phase: "checking", error: null }));
    try {
      const signedIn = await api.verifyCode(verify.sentTo, code);
      const email = signedIn.email.toLowerCase();
      setVerifiedEmail(email);
      setSessionEmail(email);
      setVerify({ phase: "idle", sentTo: null, code: "", error: null });
      // The code was the last thing missing: go on to the payment by itself.
      if (email === emailValue && validate()) await buy();
    } catch (e) {
      setVerify((prev) => ({ ...prev, phase: "code", error: errorText(e, lang) }));
    }
  };

  if (unavailable) {
    return (
      <Card className="max-w-[640px] flex flex-col gap-4">
        <CardTitle>{c.unavailableTitle}</CardTitle>
        <p className="text-body text-graphite">{c.unavailableText}</p>
        <div className="flex flex-wrap gap-3">
          <a href={b.phoneHref} className="btn btn-dark">
            {b.phone}
          </a>
          <Link href="/kontaktai" className="btn btn-mint">
            info@reamed.lt
          </Link>
        </div>
      </Card>
    );
  }
  if (!config) {
    return (
      <Card className="max-w-[640px]">
        <Spinner label={c.loading} />
      </Card>
    );
  }

  const until = validUntil(today, config.validityMonths);
  const clear = (key: keyof Errors) => errors[key] && setErrors((prev) => ({ ...prev, [key]: undefined }));
  const codeShown = !emailVerified && (verify.phase === "code" || verify.phase === "checking") && verify.sentTo;

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        void submit();
      }}
      className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(420px,50%)] lg:items-start max-w-[1180px]"
    >
      {/* One sheet of paper, the steps as sections with air between them; the gift itself beside it. */}
      <Card className="flex flex-col lg:col-start-1 lg:row-start-1">
        <section className="flex flex-col gap-5">
        <CardTitle id="voucher-amount-title">{c.amountTitle}</CardTitle>
        <div role="group" aria-labelledby="voucher-amount-title" className="flex flex-wrap gap-2">
          {config.presetCents.map((cents) => (
            <Choice
              key={cents}
              selected={!custom && amount === cents}
              onClick={() => {
                setCustom(false);
                setAmount(cents);
                clear("amount");
              }}
              className="min-w-[96px]"
            >
              {euros(cents)}
            </Choice>
          ))}
          <Choice
            selected={custom}
            onClick={() => {
              setCustom(true);
              setCustomText(amount === null ? "" : String(amount / 100));
            }}
          >
            {c.amountOther}
          </Choice>
        </div>
        {custom && (
          <Field
            label={c.amountLabel}
            htmlFor="voucher-amount"
            error={errors.amount}
            hint={c.amountHint(euros(min), euros(step))}
            className="max-w-[320px]"
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => nudge(-1)}
                aria-label={c.amountLess(euros(step))}
                className="shrink-0 size-[52px] rounded-full bg-ground hover:bg-ground-hover inline-flex items-center justify-center"
              >
                <Minus size={20} aria-hidden="true" />
              </button>
              <input
                id="voucher-amount"
                type="text"
                inputMode="numeric"
                autoComplete="off"
                value={customText}
                onChange={(e) => chooseCustom(e.target.value)}
                aria-invalid={Boolean(errors.amount)}
                className={`${inputClass(Boolean(errors.amount))} text-center tabular-nums`}
              />
              <button
                type="button"
                onClick={() => nudge(1)}
                aria-label={c.amountMore(euros(step))}
                className="shrink-0 size-[52px] rounded-full bg-ground hover:bg-ground-hover inline-flex items-center justify-center"
              >
                <Plus size={20} aria-hidden="true" />
              </button>
            </div>
          </Field>
        )}
        {!custom && errors.amount && (
          <p role="alert" className="text-small text-[#B3261E]">
            {errors.amount}
          </p>
        )}
        </section>

        <section className="flex flex-col gap-5 mt-8 pt-8 border-t border-ink/10">
        <div className="flex flex-col gap-1.5">
          <CardTitle>{c.giftTitle}</CardTitle>
          <p className="text-small text-graphite">{c.giftLead}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label={c.to} htmlFor="voucher-to" error={errors.to}>
            <input
              id="voucher-to"
              type="text"
              value={to}
              maxLength={nameMax}
              placeholder={c.toPlaceholder}
              onChange={(e) => {
                setTo(e.target.value);
                clear("to");
              }}
              className={inputClass(Boolean(errors.to))}
            />
          </Field>
          <Field label={c.from} htmlFor="voucher-from" error={errors.from}>
            <input
              id="voucher-from"
              type="text"
              value={from}
              maxLength={nameMax}
              placeholder={c.fromPlaceholder}
              onChange={(e) => {
                setFrom(e.target.value);
                clear("from");
              }}
              className={inputClass(Boolean(errors.from))}
            />
          </Field>
        </div>
        <Field
          label={c.message}
          htmlFor="voucher-message"
          error={errors.message}
          hint={`${words.message.length} / ${messageMax}`}
        >
          <textarea
            id="voucher-message"
            rows={3}
            value={message}
            maxLength={messageMax + 40}
            placeholder={c.messagePlaceholder}
            onChange={(e) => {
              setMessage(e.target.value);
              clear("message");
            }}
            className={`${inputClass(Boolean(errors.message))} py-3 min-h-[108px] resize-y`}
          />
        </Field>
        </section>

        <section className="flex flex-col gap-5 mt-8 pt-8 border-t border-ink/10">
        <CardTitle id="voucher-delivery-title">{c.deliveryTitle}</CardTitle>
        <div role="radiogroup" aria-labelledby="voucher-delivery-title" className="grid gap-2 sm:grid-cols-2">
          {(
            [
              ["buyer", c.toMe, c.toMeHint],
              ["recipient", c.toRecipient, c.toRecipientHint],
            ] as const
          ).map(([value, label, hint]) => (
            <label
              key={value}
              className={`flex flex-col gap-1 rounded-2xl p-4 cursor-pointer transition-colors duration-150 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-focus ${
                delivery === value ? "bg-graphite text-white" : "bg-ground text-ink hover:bg-ground-hover"
              }`}
            >
              <input
                type="radio"
                name="voucher-delivery"
                value={value}
                checked={delivery === value}
                onChange={() => setDelivery(value)}
                className="sr-only"
              />
              <span className="text-body font-medium">{label}</span>
              <span className={`text-small ${delivery === value ? "text-on-dark" : "text-graphite"}`}>{hint}</span>
            </label>
          ))}
        </div>
        {delivery === "recipient" && (
          <div className="flex flex-col gap-4">
            <Field
              label={c.recipientEmail}
              htmlFor="voucher-recipientEmail"
              error={errors.recipientEmail}
              hint={c.recipientEmailNote}
            >
              <input
                id="voucher-recipientEmail"
                type="email"
                inputMode="email"
                autoComplete="off"
                value={recipientEmail}
                onChange={(e) => {
                  setRecipientEmail(e.target.value);
                  clear("recipientEmail");
                }}
                className={inputClass(Boolean(errors.recipientEmail))}
              />
            </Field>
            {recipientSuggestion && (
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-ink">
                <span>{b.emailHint(recipientSuggestion.slice(recipientSuggestion.lastIndexOf("@") + 1))}</span>
                <button type="button" className="link-action" onClick={() => setRecipientEmail(recipientSuggestion)}>
                  {b.emailHintApply}
                </button>
              </p>
            )}
            <div role="group" aria-label={c.sendWhen} className="flex flex-wrap gap-2">
              <Choice selected={when === "now"} onClick={() => setWhen("now")}>
                {c.sendNow}
              </Choice>
              <Choice
                selected={when === "day"}
                onClick={() => {
                  setWhen("day");
                  if (!date) setDate(addDays(today, 1));
                }}
              >
                {c.sendOnDay}
              </Choice>
            </div>
            {when === "day" && (
              <Field
                label={c.sendDate}
                htmlFor="voucher-date"
                error={errors.date}
                hint={date ? `${fullDaySentence(date, lang)} ${c.sendDateHint}` : c.sendDateHint}
                className="max-w-[320px]"
              >
                <input
                  id="voucher-date"
                  type="date"
                  value={date}
                  min={today}
                  max={addDays(today, maxDays)}
                  onChange={(e) => {
                    setDate(e.target.value);
                    clear("date");
                  }}
                  className={inputClass(Boolean(errors.date))}
                />
              </Field>
            )}
          </div>
        )}
        </section>

        <section className="flex flex-col gap-5 mt-8 pt-8 border-t border-ink/10">
        <CardTitle>{c.buyerTitle}</CardTitle>
        <div className="grid gap-4 sm:grid-cols-2">
          {(
            [
              ["firstName", b.firstName, "given-name"],
              ["lastName", b.lastName, "family-name"],
            ] as const
          ).map(([key, label, autoComplete]) => (
            <Field key={key} label={label} htmlFor={`voucher-${key}`} error={errors[key]}>
              <input
                id={`voucher-${key}`}
                type="text"
                autoComplete={autoComplete}
                value={buyer[key]}
                onChange={(e) => {
                  setBuyer((prev) => ({ ...prev, [key]: e.target.value }));
                  clear(key);
                }}
                className={inputClass(Boolean(errors[key]))}
              />
            </Field>
          ))}
        </div>
        <Field
          label={b.email}
          htmlFor="voucher-email"
          error={errors.email}
          hint={emailVerified ? b.emailVerified : b.emailWillVerify}
        >
          <input
            id="voucher-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={buyer.email}
            onChange={(e) => {
              setBuyer((prev) => ({ ...prev, email: e.target.value }));
              clear("email");
              if (verify.phase !== "idle") setVerify({ phase: "idle", sentTo: null, code: "", error: null });
            }}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>
        {emailSuggestion && (
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-ink">
            <span>{b.emailHint(emailSuggestion.slice(emailSuggestion.lastIndexOf("@") + 1))}</span>
            <button
              type="button"
              className="link-action"
              onClick={() => setBuyer((prev) => ({ ...prev, email: emailSuggestion }))}
            >
              {b.emailHintApply}
            </button>
          </p>
        )}
        {codeShown && (
          <div className="flex flex-col gap-3 rounded-2xl bg-ground p-4">
            <p className="text-small text-ink">{b.emailCodeSent(verify.sentTo!)}</p>
            <div className="flex flex-wrap items-end gap-3">
              <Field
                label={b.codeLabel}
                htmlFor="voucher-email-code"
                error={verify.error ?? undefined}
                className="w-[11rem]"
              >
                <input
                  id="voucher-email-code"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={7}
                  autoFocus
                  value={verify.code}
                  onChange={(e) => setVerify((prev) => ({ ...prev, code: e.target.value, error: null }))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      void confirmCode();
                    }
                  }}
                  className={`${inputClass(Boolean(verify.error))} tracking-[0.2em]`}
                />
              </Field>
              <Button type="button" onClick={() => void confirmCode()} disabled={verify.phase === "checking"}>
                {b.emailVerifyButton}
              </Button>
              <button
                type="button"
                className="link-action min-h-[52px]"
                onClick={() => void sendCode()}
                disabled={verify.phase === "checking"}
              >
                {b.emailResend}
              </button>
            </div>
          </div>
        )}
        {!emailVerified && verify.phase === "idle" && verify.error && <Notice kind="error">{verify.error}</Notice>}

        <fieldset className="flex flex-col gap-4">
          <legend className="sr-only">{b.invoiceTitle}</legend>
          <div className="flex flex-col gap-1">
            <span className="text-body font-medium text-ink">{b.invoiceTitle}</span>
            <span className="text-small text-graphite">{b.invoiceLead}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Choice
              selected={invoice.type === "person"}
              onClick={() => setInvoice((prev) => ({ ...prev, type: "person" }))}
            >
              {b.invoicePerson}
            </Choice>
            <Choice
              selected={invoice.type === "company"}
              onClick={() => setInvoice((prev) => ({ ...prev, type: "company" }))}
            >
              {b.invoiceCompany}
            </Choice>
          </div>
          {invoice.type === "company" ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {(
                [
                  ["name", "invoiceName", b.invoiceCompanyName, "organization"],
                  ["code", "invoiceCode", b.invoiceCompanyCode, undefined],
                  ["vatCode", "invoiceVatCode", b.invoiceVatCode, undefined],
                  ["address", "invoiceAddress", b.invoiceAddress, "street-address"],
                ] as const
              ).map(([key, errorKey, label, autoComplete]) => (
                <Field key={key} label={label} htmlFor={`voucher-${errorKey}`} error={errors[errorKey]}>
                  <input
                    id={`voucher-${errorKey}`}
                    type="text"
                    autoComplete={autoComplete}
                    value={invoice[key]}
                    onChange={(e) => {
                      setInvoice((prev) => ({ ...prev, [key]: e.target.value }));
                      clear(errorKey);
                    }}
                    className={inputClass(Boolean(errors[errorKey]))}
                  />
                </Field>
              ))}
            </div>
          ) : (
            <Field label={b.invoicePersonAddress} htmlFor="voucher-invoiceAddress">
              <input
                id="voucher-invoiceAddress"
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
            id="voucher-terms"
            type="checkbox"
            checked={accepted}
            onChange={(e) => {
              setAccepted(e.target.checked);
              clear("terms");
            }}
            className="mt-1 size-5 shrink-0 accent-graphite"
          />
          <div className="flex flex-col gap-1.5">
            <label htmlFor="voucher-terms" className="cursor-pointer">
              {c.acceptTitle}
            </label>
            <ul className="flex flex-col gap-1 pl-4 list-disc marker:text-mint">
              <li>
                <Link href="/dovanu-kuponas/salygos" target="_blank" className="link-action">
                  {c.acceptTerms}
                </Link>
              </li>
              <li>
                <Link href="/privatumas" target="_blank" className="link-action">
                  {b.acceptPrivacyLink}
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
        {!config.paymentsEnabled && <Notice>{c.paymentsOff}</Notice>}
        {error && <Notice kind="error">{error}</Notice>}
        <div className="flex flex-col gap-3 pt-1">
          <Button
            type="submit"
            disabled={busy || !config.paymentsEnabled || verify.phase === "sending" || verify.phase === "checking"}
            className="self-start"
          >
            {busy ? b.paying : c.pay(validAmount(amount) ? euros(amount) : "")}
          </Button>
          <p className="text-small text-graphite">{c.payNote}</p>
        </div>
        </section>
      </Card>

      {/* The gift: first on a phone, beside the form and following the scroll on a computer. */}
      <aside className="order-first lg:order-none flex flex-col gap-4 lg:col-start-2 lg:row-start-1 lg:sticky lg:top-[calc(var(--header-h)+16px)]">
        <VoucherPreview
          lang={lang}
          amountCents={validAmount(amount) ? amount : null}
          to={words.to}
          from={words.from}
          message={words.message}
          validUntil={until}
        />
        <p className="text-small text-graphite px-1">{c.previewNote}</p>
        <ul className="hidden lg:flex flex-col gap-2 px-1">
          {c.facts.map((fact) => (
            <li key={fact} className="flex items-start gap-2 text-small text-ink">
              <Check size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-focus" />
              {fact}
            </li>
          ))}
        </ul>
      </aside>
    </form>
  );
}
