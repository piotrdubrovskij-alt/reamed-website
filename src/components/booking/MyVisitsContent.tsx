"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { api, BookingError } from "@/lib/booking/client";
import { bookingCopy } from "@/lib/booking/copy";
import type { OrderView } from "@/lib/booking/types";
import { useCatalogue } from "@/lib/booking/useCatalogue";
import OrderItems, { errorText } from "./OrderItems";
import { Button, Card, Field, Notice, Spinner, inputClass } from "./ui";

const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@.]{2,24}$/;

/**
 * Optional sign-in by a code sent to the patient's e-mail (no password). The session lives in
 * an HttpOnly cookie set by the site's own API route; this page only ever sees the e-mail.
 */
export default function MyVisitsContent() {
  const { lang } = useLanguage();
  const c = bookingCopy[lang];
  const catalogue = useCatalogue();
  const data = catalogue.status === "ready" ? catalogue.data : null;

  const [phase, setPhase] = useState<"checking" | "email" | "code" | "signed">("checking");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [orders, setOrders] = useState<OrderView[] | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadOrders = async () => {
    const mine = await api.myOrders();
    setSentTo(mine.email);
    setOrders(mine.orders);
    setPhase("signed");
  };

  useEffect(() => {
    let live = true;
    api
      .me()
      .then(() => {
        if (live) return loadOrders();
      })
      .catch((e: unknown) => {
        if (!live) return;
        if (e instanceof BookingError && e.status === 503) setError(c.unavailableTitle);
        setPhase("email");
      });
    return () => {
      live = false;
    };
    // The catalogue copy does not change what we load.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestCode = async () => {
    const value = email.trim().toLowerCase();
    if (!EMAIL.test(value)) {
      setError(c.invalidEmail);
      return;
    }
    setBusy(true);
    setError(null);
    try {
      await api.requestCode(value, lang);
      setSentTo(value);
      setCode("");
      setPhase("code");
    } catch (e) {
      setError(errorText(e, lang));
    } finally {
      setBusy(false);
    }
  };

  const verify = async () => {
    if (!sentTo) return;
    setBusy(true);
    setError(null);
    try {
      await api.verifyCode(sentTo, code.trim());
      await loadOrders();
    } catch (e) {
      setError(errorText(e, lang));
    } finally {
      setBusy(false);
    }
  };

  const signOut = async () => {
    setBusy(true);
    try {
      await api.signOut();
    } finally {
      setBusy(false);
      setOrders(null);
      setSentTo(null);
      setEmail("");
      setPhase("email");
    }
  };

  if (phase === "checking") {
    return (
      <Card className="max-w-[720px]">
        <Spinner label="…" />
      </Card>
    );
  }

  if (phase === "email" || phase === "code") {
    return (
      <Card className="max-w-[560px] flex flex-col gap-5">
        <p className="text-body text-graphite">{phase === "email" ? c.myVisitsLead : c.codeSent(sentTo ?? "")}</p>
        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            void (phase === "email" ? requestCode() : verify());
          }}
          className="flex flex-col gap-4"
        >
          {phase === "email" ? (
            <Field label={c.email} htmlFor="my-email" error={error}>
              <input
                id="my-email"
                type="email"
                autoComplete="email"
                inputMode="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError(null);
                }}
                className={inputClass(Boolean(error))}
              />
            </Field>
          ) : (
            <Field label={c.codeLabel} htmlFor="my-code" error={error}>
              <input
                id="my-code"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="[0-9]*"
                maxLength={7}
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError(null);
                }}
                className={`${inputClass(Boolean(error))} tracking-[0.2em] tabular-nums`}
              />
            </Field>
          )}
          <div className="flex flex-wrap items-center justify-between gap-3">
            {phase === "code" ? (
              <Button variant="ghost" onClick={() => setPhase("email")} disabled={busy}>
                {c.anotherEmail}
              </Button>
            ) : (
              <span />
            )}
            <Button type="submit" disabled={busy}>
              {phase === "email" ? c.sendCode : c.signIn}
            </Button>
          </div>
        </form>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-[720px]">
      <Card className="flex flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-body text-graphite">{c.signedInAs(sentTo ?? "")}</p>
          <Button variant="ghost" onClick={signOut} disabled={busy} className="min-h-11">
            {c.signOut}
          </Button>
        </div>
        {error && <Notice kind="error">{error}</Notice>}
        {orders && orders.length === 0 && (
          <div className="flex flex-col gap-4">
            <Notice>{c.noOrders}</Notice>
            <Link href="/rezervacija" className="btn btn-dark self-start">
              {c.title}
            </Link>
          </div>
        )}
      </Card>
      {orders?.map((order) => (
        <Card key={order.id} className="flex flex-col gap-4">
          <OrderItems
            order={order}
            catalogue={data}
            lang={lang}
            onChange={(updated) => setOrders((prev) => prev?.map((o) => (o.id === updated.id ? updated : o)) ?? null)}
          />
        </Card>
      ))}
    </div>
  );
}
