"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { api } from "@/lib/booking/client";
import { voucherCopy } from "@/lib/voucher/copy";
import { fullDay, wholeEuros } from "@/lib/voucher/format";
import type { VoucherBalance } from "@/lib/voucher/types";
import { errorText } from "@/components/booking/OrderItems";
import { Button, Card, Field, Notice, inputClass } from "@/components/booking/ui";

const CODE = /^(RM)?[A-HJKMNP-Z2-9]{8}$/;
const tidy = (value: string) => value.toUpperCase().replace(/[^A-Z0-9]/g, "");

/**
 * What is left on a voucher, by the code printed on it (the QR on the sheet opens this page with
 * the code filled in). The clinic system answers only the sum, the balance and the last valid day.
 */
export default function VoucherBalanceContent() {
  const { lang } = useLanguage();
  const c = voucherCopy[lang];
  const params = useSearchParams();
  const given = params.get("k") ?? "";
  const [code, setCode] = useState(given);
  const [balance, setBalance] = useState<VoucherBalance | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const check = async (value: string) => {
    if (!CODE.test(tidy(value))) {
      setBalance(null);
      setError(c.balanceInvalid);
      return;
    }
    setBusy(true);
    setError(null);
    try {
      setBalance(await api.voucherBalance(value.trim()));
    } catch (e) {
      setBalance(null);
      setError(errorText(e, lang));
    } finally {
      setBusy(false);
    }
  };
  // The code from the QR is checked at once, without a click.
  useEffect(() => {
    if (!given || !CODE.test(tidy(given))) return;
    let live = true;
    api
      .voucherBalance(given.trim())
      .then((value) => live && setBalance(value))
      .catch(() => undefined);
    return () => {
      live = false;
    };
  }, [given]);

  const euros = (cents: number) => wholeEuros(cents, lang);
  const state = balance
    ? balance.state === "active"
      ? c.stateActive
      : balance.state === "used"
        ? c.stateUsed
        : c.stateExpired
    : "";
  return (
    <div className="flex flex-col gap-6 max-w-[640px]">
      <Card>
        <form
          noValidate
          className="flex flex-wrap items-end gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            void check(code);
          }}
        >
          <Field label={c.balanceCode} htmlFor="voucher-code" className="grow min-w-[220px]">
            <input
              id="voucher-code"
              type="text"
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              maxLength={20}
              placeholder="RM-XXXX-XXXX"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={`${inputClass(false)} uppercase tracking-[0.06em] tabular-nums placeholder:tracking-normal`}
            />
          </Field>
          <Button type="submit" disabled={busy || !code.trim()}>
            {c.balanceCheck}
          </Button>
        </form>
      </Card>
      {error && <Notice kind="error">{error}</Notice>}
      {balance && (
        <div aria-live="polite" className="rounded-[28px] bg-graphite text-white p-6 md:p-8 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-small text-on-dark">{c.balanceLeft}</span>
              <span className="text-[44px] md:text-[56px] leading-none font-medium tracking-[-0.025em] tabular-nums text-mint">
                {euros(balance.balanceCents)}
              </span>
              <span className="text-small text-on-dark">{c.balanceOf(euros(balance.amountCents))}</span>
            </div>
            <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-small font-medium">{state}</span>
          </div>
          <p className="text-body">
            {balance.state === "expired"
              ? c.balanceExpired(fullDay(balance.validUntil, lang))
              : c.balanceValid(fullDay(balance.validUntil, lang))}
          </p>
          <p className="text-small text-on-dark tracking-[0.06em] tabular-nums">{balance.code}</p>
          {balance.test && <p className="text-small text-on-dark">{c.test}</p>}
        </div>
      )}
      {balance?.state === "active" && <p className="text-body text-graphite text-pretty">{c.balanceBook}</p>}
    </div>
  );
}
