"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarDays, CalendarPlus, Check, Clock3, FileText, RotateCcw } from "lucide-react";
import type { Language } from "@/lib/translations";
import { api, BookingError } from "@/lib/booking/client";
import { bookingCopy } from "@/lib/booking/copy";
import { SPECIALIST_SLUGS, dateTimeWhen, money, visitWhen } from "@/lib/booking/format";
import type { Catalogue, OrderItem, OrderView } from "@/lib/booking/types";
import { serviceLabelFor, specialistNameFor } from "@/lib/booking/useCatalogue";
import SlotPicker, { type Slot } from "./SlotPicker";
import { Button, Dialog, Notice } from "./ui";

export function errorText(error: unknown, lang: Language): string {
  const c = bookingCopy[lang];
  if (error instanceof BookingError) {
    if (error.status === 0) return c.errorNetwork;
    // The clinic system answers in Lithuanian; its message says exactly what went wrong.
    if (error.message && error.status === 400) return error.message;
  }
  return c.errorGeneric;
}

function statusOf(item: OrderItem, now: number, lang: Language): { label: string; done: boolean } {
  const c = bookingCopy[lang];
  if (item.status === "canceled") return { label: c.statusCanceled, done: true };
  if (item.status === "paid_conflict") return { label: c.statusConflict, done: true };
  if (item.end <= now) return { label: c.statusPast, done: true };
  return { label: c.statusConfirmed, done: false };
}

/**
 * One paid order's visits with the patient's own actions. `token` is the signed link from the
 * e-mail; without it the session cookie proves ownership. Every change goes to the clinic
 * system, which applies the 12-hour rule itself; the result replaces the order shown.
 */
export default function OrderItems({
  order,
  catalogue,
  lang,
  token,
  onChange,
}: {
  order: OrderView;
  catalogue: Catalogue | null;
  lang: Language;
  token?: string | null;
  onChange: (order: OrderView) => void;
}) {
  const c = bookingCopy[lang];
  const [now] = useState(() => Date.now());
  const [dialog, setDialog] = useState<{ kind: "move" | "cancel"; item: OrderItem } | null>(null);
  const [slot, setSlot] = useState<Slot | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const close = () => {
    setDialog(null);
    setSlot(null);
    setError(null);
  };

  const run = async (action: () => Promise<OrderView>, done: string) => {
    setBusy(true);
    setError(null);
    try {
      const updated = await action();
      onChange(updated);
      setNotice(done);
      close();
    } catch (e) {
      setError(errorText(e, lang));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {notice && <Notice kind="success">{notice}</Notice>}
      <ul className="flex flex-col gap-3">
        {order.items.map((item) => {
          const status = statusOf(item, now, lang);
          const canChange = item.canChange === true && !status.done;
          return (
            <li key={item.id} className="rounded-2xl bg-white p-4 md:p-5 flex flex-col gap-3">
              <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                <div className="flex flex-col gap-0.5">
                  <p className={`text-body font-medium ${status.done ? "text-graphite" : "text-ink"}`}>
                    {serviceLabelFor(catalogue, item.serviceId, lang)}
                  </p>
                  <p className="text-small text-graphite">{specialistNameFor(catalogue, item.specialistId)}</p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-small ${
                    item.status === "canceled"
                      ? "bg-ground text-graphite line-through"
                      : status.done
                        ? "bg-ground text-graphite"
                        : "bg-mint text-ink"
                  }`}
                >
                  {!status.done && <Check size={16} aria-hidden="true" />}
                  {status.label}
                </span>
              </div>
              <p className={`flex items-start gap-2 text-body ${status.done ? "text-graphite" : "text-ink"}`}>
                <CalendarDays size={20} aria-hidden="true" className="mt-0.5 shrink-0" />
                <span className={item.status === "canceled" ? "line-through" : ""}>
                  {visitWhen(item.start, item.end, lang)}
                </span>
              </p>
              {canChange && item.changeDeadline ? (
                // The concrete deadline (Piotr 04.11.2026): only here, on the patient's own visit;
                // general screens keep the informational "12 hours".
                <p className="flex items-start gap-2 text-small text-graphite">
                  <Clock3 size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
                  {c.changeUntil(dateTimeWhen(item.changeDeadline, lang))}
                </p>
              ) : !status.done && item.status === "confirmed" ? (
                <p className="flex items-start gap-2 text-small text-graphite max-w-[40ch]">
                  <Clock3 size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
                  {c.tooLate}
                </p>
              ) : null}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-small text-graphite">{money(item.amountCents, lang)}</span>
                <div className="flex flex-wrap gap-2">
                  {!status.done && item.status === "confirmed" && (
                    <a
                      href={api.calendarUrl(order.id, token, item.id)}
                      download="reamed-vizitas.ics"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-small font-medium text-ink hover:bg-ground-hover"
                    >
                      <CalendarPlus size={18} aria-hidden="true" />
                      {c.addToCalendar}
                    </a>
                  )}
                  {canChange && (
                    <>
                      <Button variant="ghost" onClick={() => setDialog({ kind: "move", item })} className="min-h-11">
                        {c.change}
                      </Button>
                      <Button variant="ghost" onClick={() => setDialog({ kind: "cancel", item })} className="min-h-11">
                        {c.cancel}
                      </Button>
                    </>
                  )}
                  {status.done && SPECIALIST_SLUGS[item.specialistId] && (
                    <Link
                      href={`/rezervacija?specialistas=${SPECIALIST_SLUGS[item.specialistId]}&paslauga=${encodeURIComponent(item.serviceId)}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full px-4 py-2 text-small font-medium text-ink hover:bg-ground-hover"
                    >
                      <RotateCcw size={18} aria-hidden="true" />
                      {c.rebook}
                    </Link>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {order.invoice && (
        // The invoice PDF (0.9.23): one per paid order, opened straight from the proxy with the same
        // proof of ownership as the order itself.
        <a
          href={api.invoiceUrl(order.id, token)}
          target="_blank"
          rel="noopener"
          className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-small font-medium text-ink hover:bg-ground-hover"
        >
          <FileText size={18} aria-hidden="true" />
          {c.invoiceDownload} · {order.invoice.label}
        </a>
      )}

      {dialog?.kind === "move" && (
        <Dialog title={c.moveTitle} onClose={close} closeLabel={c.close}>
          <p className="text-small text-graphite">{c.moveLead}</p>
          <SlotPicker
            serviceId={dialog.item.serviceId}
            specialistId={dialog.item.specialistId}
            lang={lang}
            selected={slot}
            onPick={setSlot}
            excludeStart={dialog.item.start}
          />
          {error && <Notice kind="error">{error}</Notice>}
          <div className="flex flex-wrap gap-3 justify-end">
            <Button variant="ghost" onClick={close}>
              {c.back}
            </Button>
            <Button
              disabled={!slot || busy}
              onClick={() => slot && run(() => api.move(order.id, dialog.item.id, slot.start, token), c.moved)}
            >
              {c.moveConfirm}
            </Button>
          </div>
        </Dialog>
      )}

      {dialog?.kind === "cancel" && (
        <Dialog title={c.cancelTitle} onClose={close} closeLabel={c.close}>
          <p className="text-body text-ink">{visitWhen(dialog.item.start, dialog.item.end, lang)}</p>
          <p className="text-small text-graphite">{c.cancelText}</p>
          {error && <Notice kind="error">{error}</Notice>}
          <div className="flex flex-wrap gap-3 justify-end">
            <Button variant="ghost" onClick={close}>
              {c.cancelKeep}
            </Button>
            <Button disabled={busy} onClick={() => run(() => api.cancel(order.id, dialog.item.id, token), c.canceledDone)}>
              {c.cancelConfirm}
            </Button>
          </div>
        </Dialog>
      )}
    </div>
  );
}
