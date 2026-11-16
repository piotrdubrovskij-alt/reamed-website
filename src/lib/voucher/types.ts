import type { InvoiceBuyerInput, InvoiceInfo, Locale, OrderStatus } from "@/lib/booking/types";

// The shapes of the clinic system's voucher routes (klinika-system, server/website-api.ts).
export type VoucherConfig = {
  minCents: number;
  maxCents: number;
  stepCents: number;
  presetCents: number[];
  validityMonths: number;
  messageMax: number;
  nameMax: number;
  deliveryMaxDays: number;
  payMinutes: number;
  termsVersion: string;
  paymentsEnabled: boolean;
};
export type VoucherDelivery = { to: "buyer" } | { to: "recipient"; email: string; date?: string };
export type VoucherOrderInput = {
  requestId: string;
  locale: Locale;
  buyer: { firstName: string; lastName: string; email: string; phone?: string };
  amountCents: number;
  recipientName?: string;
  fromName?: string;
  message?: string;
  delivery: VoucherDelivery;
  acceptedTerms: true;
  invoice: InvoiceBuyerInput;
};
export type GiftSummary = {
  amountCents: number;
  delivery: "buyer" | "recipient";
  deliverOn: string | null;
  recipientEmailHint: string | null;
};
export type VoucherOrderCreated = {
  id: string;
  kind: "voucher";
  status: OrderStatus;
  totalCents: number;
  currency: "EUR";
  expiresAt: number;
  gift: GiftSummary;
};
/** What the result page gets by the order id alone: never the code. */
export type VoucherOrderStatus = {
  id: string;
  kind?: "visits" | "voucher";
  emailHint: string;
  status: OrderStatus;
  locale: Locale;
  totalCents: number;
  expiresAt: number;
  paidAt: number | null;
  gift?: GiftSummary;
};
export type VoucherState = "active" | "used" | "expired";
export type VoucherBalance = {
  code: string;
  amountCents: number;
  balanceCents: number;
  validUntil: string;
  state: VoucherState;
  test: boolean;
};
/** The buyer's own view (session): the code, the gift's words and the invoice. */
export type VoucherOrderView = {
  id: string;
  kind: "voucher";
  status: OrderStatus;
  locale: Locale;
  totalCents: number;
  paidAt: number | null;
  buyer: { firstName: string; lastName: string; email: string };
  gift: {
    amountCents: number;
    recipientName: string | null;
    fromName: string | null;
    message: string | null;
    delivery: "buyer" | "recipient";
    recipientEmail: string | null;
    deliverOn: string | null;
  };
  voucher: VoucherBalance | null;
  invoice: InvoiceInfo | null;
};
