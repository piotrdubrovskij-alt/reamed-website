"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CalendarDays, Check, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { api, BookingError } from "@/lib/booking/client";
import { bookingCopy } from "@/lib/booking/copy";
import { money, visitWhen } from "@/lib/booking/format";
import type { OrderBrief } from "@/lib/booking/types";
import { serviceLabelFor, specialistNameFor, useCatalogue } from "@/lib/booking/useCatalogue";
import { errorText } from "./OrderItems";
import { Button, Card, CardTitle, Notice, Spinner } from "./ui";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const POLL_MS = 3000;
const POLL_FOR_MS = 90_000;

/**
 * Where Paysera sends the patient back. The page shows only what the clinic system says about
 * the order: a successful return is not a payment until the system has confirmed it from
 * Paysera, so the page keeps asking for a while.
 */
export default function ResultContent() {
  const { lang } = useLanguage();
  const c = bookingCopy[lang];
  const params = useSearchParams();
  const orderId = params.get("order");
  const failed = params.get("result") === "failure";
  const catalogue = useCatalogue();
  const data = catalogue.status === "ready" ? catalogue.data : null;

  const [order, setOrder] = useState<OrderBrief | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paying, setPaying] = useState(false);
  const [polling, setPolling] = useState(true);
  const validId = orderId !== null && UUID.test(orderId);

  useEffect(() => {
    if (!validId || !orderId) return;
    let live = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const startedAt = Date.now();
    const tick = async () => {
      try {
        const brief = await api.status(orderId);
        if (!live) return;
        setOrder(brief);
        const settled = brief.status !== "held" && brief.status !== "awaiting_payment";
        const again = !settled && !failed && Date.now() - startedAt < POLL_FOR_MS;
        setPolling(again);
        if (again) timer = setTimeout(tick, POLL_MS);
      } catch (e) {
        if (!live) return;
        setPolling(false);
        if (e instanceof BookingError && e.status === 400) setNotFound(true);
        else setError(errorText(e, lang));
      }
    };
    void tick();
    return () => {
      live = false;
      if (timer) clearTimeout(timer);
    };
  }, [orderId, validId, failed, lang]);

  const payAgain = async () => {
    if (!orderId) return;
    setPaying(true);
    setError(null);
    try {
      const { checkoutUrl } = await api.pay(orderId);
      window.location.assign(checkoutUrl);
    } catch (e) {
      setError(errorText(e, lang));
      setPaying(false);
    }
  };

  if (notFound || !validId) {
    return (
      <Card className="max-w-[640px] flex flex-col gap-4">
        <CardTitle>{c.resultNotFound}</CardTitle>
        <Link href="/rezervacija" className="btn btn-dark self-start">
          {c.bookAgain}
        </Link>
      </Card>
    );
  }

  if (!order) {
    return (
      <Card className="max-w-[640px] flex flex-col gap-4">
        {error ? <Notice kind="error">{error}</Notice> : <Spinner label={c.resultChecking} />}
      </Card>
    );
  }

  const paid = order.status === "paid" || order.status === "paid_conflict";
  const pending = order.status === "held" || order.status === "awaiting_payment";
  const stillPolling = pending && polling;
  const confirmedCount = order.items.filter((i) => i.status === "confirmed").length;

  const title = paid
    ? confirmedCount > 1
      ? c.resultPaidMany
      : c.resultPaid
    : order.status === "expired"
      ? c.resultExpired
      : order.status === "canceled"
        ? c.resultCanceled
        : failed
          ? c.resultFailed
          : c.resultPending;
  const text = paid
    ? order.status === "paid_conflict"
      ? c.resultConflictText
      : c.resultPaidText
    : order.status === "expired"
      ? c.resultExpiredText
      : order.status === "canceled"
        ? ""
        : failed
          ? c.resultFailedText
          : c.resultPendingText;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start max-w-[1040px]">
      <Card className="flex flex-col gap-5">
        <div className="flex items-start gap-4">
          {paid && (
            <span className="shrink-0 inline-flex size-12 items-center justify-center rounded-full bg-mint text-ink">
              <Check size={24} aria-hidden="true" />
            </span>
          )}
          <div className="flex flex-col gap-2">
            <CardTitle>{title}</CardTitle>
            {text && <p className="text-body text-graphite">{text}</p>}
          </div>
        </div>
        {stillPolling && <Spinner label={c.resultChecking} />}
        {error && <Notice kind="error">{error}</Notice>}
        {paid && (
          <p className="flex items-center gap-2 text-small text-graphite">
            <MapPin size={18} aria-hidden="true" />
            {c.address}
          </p>
        )}
        <div className="flex flex-wrap gap-3 pt-1">
          {pending && !stillPolling && (
            <Button onClick={payAgain} disabled={paying}>
              {paying ? c.paying : c.payAgain}
            </Button>
          )}
          {(order.status === "expired" || order.status === "canceled") && (
            <Link href="/rezervacija" className="btn btn-dark">
              {c.bookAgain}
            </Link>
          )}
          {paid && (
            <Link href="/rezervacija/mano-vizitai" className="btn btn-dark">
              {c.toMyVisits}
            </Link>
          )}
        </div>
      </Card>

      <Card className="flex flex-col gap-4">
        <CardTitle>{c.yourOrder}</CardTitle>
        <ul className="flex flex-col gap-2">
          {order.items.map((item) => (
            <li key={item.id} className="rounded-2xl bg-white p-4 flex flex-col gap-1">
              <p className="text-body font-medium text-ink">{serviceLabelFor(data, item.serviceId, lang)}</p>
              <p className="text-small text-graphite">{specialistNameFor(data, item.specialistId)}</p>
              <p className="flex items-start gap-2 text-small text-ink mt-1">
                <CalendarDays size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
                <span className={item.status === "canceled" ? "line-through" : ""}>{visitWhen(item.start, item.end, lang)}</span>
              </p>
              {item.status === "paid_conflict" && <p className="text-small text-graphite">{c.statusConflict}</p>}
            </li>
          ))}
        </ul>
        <p className="flex items-baseline justify-between gap-3 border-t border-ground-hover pt-4 text-body">
          <span className="text-graphite">{c.total}</span>
          <strong className="text-h3-m font-medium tabular-nums">{money(order.totalCents, lang)}</strong>
        </p>
      </Card>
    </div>
  );
}
