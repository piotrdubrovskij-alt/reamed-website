"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Check, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { api, BookingError } from "@/lib/booking/client";
import { bookingCopy } from "@/lib/booking/copy";
import { voucherCopy } from "@/lib/voucher/copy";
import { fullDaySentence, wholeEuros } from "@/lib/voucher/format";
import type { VoucherOrderStatus, VoucherOrderView } from "@/lib/voucher/types";
import { errorText } from "@/components/booking/OrderItems";
import { Button, Card, CardTitle, Notice, Spinner } from "@/components/booking/ui";
import VoucherPreview from "./VoucherPreview";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const POLL_MS = 3000;
const POLL_FOR_MS = 90_000;

/**
 * Where Paysera sends the buyer back. A return is not a payment: the page asks the clinic system
 * about the order until it says "paid". By the order id alone the system tells only the state and
 * where the voucher goes; the code and the sheet come only with the buyer's own session (the
 * e-mail code typed before paying), so a copied address of this page shows nobody a voucher.
 */
export default function VoucherResultContent() {
  const { lang } = useLanguage();
  const c = voucherCopy[lang];
  const b = bookingCopy[lang];
  const params = useSearchParams();
  const orderId = params.get("order");
  const failed = params.get("result") === "failure";
  const validId = orderId !== null && UUID.test(orderId);

  const [order, setOrder] = useState<VoucherOrderStatus | null>(null);
  const [mine, setMine] = useState<VoucherOrderView | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [polling, setPolling] = useState(true);
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    if (!validId || !orderId) return;
    let live = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const startedAt = Date.now();
    const tick = async () => {
      try {
        const status = await api.voucherStatus(orderId);
        if (!live) return;
        if (status.kind !== "voucher") {
          setNotFound(true);
          setPolling(false);
          return;
        }
        setOrder(status);
        if (status.status === "paid") {
          setPolling(false);
          // Only the buyer's own browser gets the code; elsewhere the letter carries it.
          api
            .voucherOrderView(orderId)
            .then((view) => live && setMine(view))
            .catch(() => undefined);
          return;
        }
        const waiting = status.status === "held" || status.status === "awaiting_payment";
        const again = waiting && !failed && Date.now() - startedAt < POLL_FOR_MS;
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
        <Link href="/dovanu-kuponas" className="btn btn-dark self-start">
          {c.buyAgain}
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

  const paid = order.status === "paid";
  const waiting = order.status === "held" || order.status === "awaiting_payment";
  const stillPolling = waiting && polling;
  const gift = order.gift;
  const title = paid
    ? c.resultPaid
    : order.status === "expired"
      ? c.resultExpired
      : failed || !stillPolling
        ? c.resultFailed
        : c.resultPending;
  const text = paid
    ? gift?.delivery === "recipient" && gift.recipientEmailHint
      ? gift.deliverOn
        ? c.resultToRecipientLater(gift.recipientEmailHint, fullDaySentence(gift.deliverOn, lang), order.emailHint)
        : c.resultToRecipientNow(gift.recipientEmailHint, order.emailHint)
      : c.resultToBuyer(order.emailHint)
    : order.status === "expired"
      ? c.resultExpiredText
      : failed || !stillPolling
        ? c.resultFailedText
        : c.resultPendingText;

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(420px,50%)] lg:items-start max-w-[1180px]">
      <Card className="flex flex-col gap-5 lg:col-start-1 lg:row-start-1">
        <div className="flex items-start gap-4">
          {paid && (
            <span className="shrink-0 inline-flex size-12 items-center justify-center rounded-full bg-mint text-ink">
              <Check size={24} aria-hidden="true" />
            </span>
          )}
          <div className="flex flex-col gap-2">
            <CardTitle>{title}</CardTitle>
            <p className="text-body text-graphite text-pretty">{text}</p>
            {paid && <p className="text-small text-graphite">{c.resultNotReceived}</p>}
          </div>
        </div>
        {stillPolling && <Spinner label={c.resultChecking} />}
        {error && <Notice kind="error">{error}</Notice>}
        {mine?.voucher?.test && <Notice>{c.test}</Notice>}
        {/* The gift is the main thing here; the invoice is a quiet link under it. */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
          {paid && mine?.voucher && (
            <a href={api.voucherPdfUrl(order.id)} target="_blank" rel="noopener" className="btn btn-dark">
              <Download size={20} aria-hidden="true" />
              {c.download}
            </a>
          )}
          {paid && mine?.invoice && (
            <a href={api.invoiceUrl(order.id)} target="_blank" rel="noopener" className="link-action text-body">
              {b.invoiceDownload}
            </a>
          )}
          {waiting && !stillPolling && (
            <Button onClick={payAgain} disabled={paying}>
              {paying ? b.paying : c.tryAgain}
            </Button>
          )}
          {order.status === "expired" && (
            <Link href="/dovanu-kuponas" className="btn btn-dark">
              {c.buyAgain}
            </Link>
          )}
        </div>
      </Card>

      <aside className="order-first lg:order-none flex flex-col gap-3 lg:col-start-2 lg:row-start-1">
        {mine?.voucher ? (
          <VoucherPreview
            lang={lang}
            amountCents={mine.gift.amountCents}
            to={mine.gift.recipientName}
            from={mine.gift.fromName}
            message={mine.gift.message}
            validUntil={mine.voucher.validUntil}
            code={mine.voucher.code}
          />
        ) : (
          <Card className="flex flex-col gap-3">
            <CardTitle>{c.yourVoucher}</CardTitle>
            <p className="flex items-baseline justify-between gap-3 text-body">
              <span className="text-graphite">{c.title}</span>
              <strong className="text-h3-m font-medium tabular-nums">{wholeEuros(order.totalCents, lang)}</strong>
            </p>
          </Card>
        )}
      </aside>
    </div>
  );
}
