"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { api, BookingError } from "@/lib/booking/client";
import { bookingCopy } from "@/lib/booking/copy";
import type { OrderView } from "@/lib/booking/types";
import { useCatalogue } from "@/lib/booking/useCatalogue";
import OrderItems, { errorText } from "./OrderItems";
import { Card, Notice, Spinner } from "./ui";

/** The order behind the signed link from the confirmation e-mail: `?t=<token>`. */
export default function OrderContent() {
  const { lang } = useLanguage();
  const c = bookingCopy[lang];
  const token = useSearchParams().get("t");
  const catalogue = useCatalogue();
  const data = catalogue.status === "ready" ? catalogue.data : null;
  const [order, setOrder] = useState<OrderView | null>(null);
  const [loaded, setLoaded] = useState<"loading" | "ready" | "invalid" | "error">("loading");
  const [error, setError] = useState<string | null>(null);

  // The token is `<orderId>.<expiry>.<signature>`: the order id is its first part.
  const orderId = token?.split(".")[0] ?? null;
  const tokenShape = Boolean(token && orderId && /^[0-9a-f-]{36}$/i.test(orderId));
  const state = tokenShape ? loaded : "invalid";

  useEffect(() => {
    if (!tokenShape || !token || !orderId) return;
    let live = true;
    api
      .order(orderId, token)
      .then((view) => {
        if (!live) return;
        setOrder(view);
        setLoaded("ready");
      })
      .catch((e: unknown) => {
        if (!live) return;
        if (e instanceof BookingError && (e.status === 403 || e.status === 400)) setLoaded("invalid");
        else {
          setError(errorText(e, lang));
          setLoaded("error");
        }
      });
    return () => {
      live = false;
    };
  }, [token, orderId, tokenShape, lang]);

  if (state === "loading") {
    return (
      <Card className="max-w-[720px]">
        <Spinner label="…" />
      </Card>
    );
  }
  if (state === "invalid" || !order) {
    return (
      <Card className="max-w-[720px] flex flex-col gap-4">
        {error ? <Notice kind="error">{error}</Notice> : <Notice>{c.orderLinkInvalid}</Notice>}
        <div className="flex flex-wrap gap-3">
          <Link href="/rezervacija/mano-vizitai" className="btn btn-dark">
            {c.toMyVisits}
          </Link>
          <a href={c.phoneHref} className="btn bg-ground text-ink hover:bg-ground-hover">
            {c.phone}
          </a>
        </div>
      </Card>
    );
  }

  return (
    <Card className="max-w-[720px] flex flex-col gap-5">
      <p className="text-body text-graphite">{c.orderLead}</p>
      <OrderItems order={order} catalogue={data} lang={lang} token={token} onChange={setOrder} />
    </Card>
  );
}
