// Shapes the clinic system's website API returns (klinika-system, server/website-api.ts).
// The site never computes prices or durations itself: everything here comes from the server.

export type VisitType = "first_visit" | "returning";
export type Locale = "lt" | "en";
export type ServiceCategory = "consultation" | "kinesiotherapy" | "massage";

export type CatalogueSpecialist = {
  id: string;
  name: string;
  status: "enabled" | "needs_confirmation";
};

export type CatalogueService = {
  id: string;
  category: ServiceCategory;
  name: string;
  amountCents: number | null;
  durationMinutes: number | null;
  reservationMinutes: number | null;
  status: "enabled" | "needs_confirmation";
  firstVisitRecommended: boolean;
  specialists: CatalogueSpecialist[];
};

export type Catalogue = {
  catalogue: { version: string; services: CatalogueService[] };
  paymentsEnabled: boolean;
  rules: { changeNoticeHours: number; holdMinutes: number };
};

export type Availability = {
  serviceId: string;
  specialistId: string;
  fromDay: string;
  toDay: string;
  status: "ready" | "needs_confirmation" | "unavailable";
  reason?: string;
  slots: { start: number; end: number }[];
};

export type OrderStatus =
  | "held"
  | "awaiting_payment"
  | "paid"
  | "paid_conflict"
  | "expired"
  | "canceled";

export type ItemStatus = "held" | "awaiting_payment" | "confirmed" | "paid_conflict" | "expired" | "canceled";

export type OrderItem = {
  id: string;
  serviceId: string;
  specialistId: string;
  start: number;
  end: number;
  durationMinutes: number;
  amountCents: number;
  status: ItemStatus;
  canChange?: boolean;
  changeDeadline?: number;
};

/** Who the invoice is made out to: the patient (default) or a company with its details. */
export type InvoiceBuyerInput =
  | { type: "person"; address?: string }
  | { type: "company"; name: string; code: string; vatCode?: string; address: string };

export type InvoiceBuyer = {
  type: "person" | "company";
  name: string | null;
  code: string | null;
  vatCode: string | null;
  address: string | null;
};

/** The issued invoice (one per paid order); the PDF is at `orders/:id/invoice.pdf`. */
export type InvoiceInfo = {
  series: string;
  number: number;
  label: string;
  fileName: string;
  issuedAt: number;
  buyerType: "person" | "company";
  totalCents: number;
};

export type OrderView = {
  id: string;
  status: OrderStatus;
  visitType: VisitType;
  locale: Locale;
  totalCents: number;
  amountPaidCents: number;
  currency: "EUR";
  expiresAt: number;
  paidAt: number | null;
  checkoutUrl: string | null;
  patient: { firstName: string; lastName: string; phone: string; email: string };
  items: OrderItem[];
  rules: { changeNoticeHours: number; holdMinutes: number };
  manageUrl: string | null;
  invoiceBuyer?: InvoiceBuyer;
  invoice?: InvoiceInfo | null;
};

/** The order by id alone, as the result page sees it: no contacts, no manage link. */
export type OrderBrief = Omit<OrderView, "patient" | "manageUrl" | "visitType" | "invoiceBuyer" | "invoice">;

export type CartItem = { serviceId: string; specialistId: string; start: number };

export type OrderInput = {
  requestId: string;
  visitType: VisitType;
  locale: Locale;
  patient: { firstName: string; lastName: string; phone: string; email: string };
  items: CartItem[];
  acceptedTerms: true;
  invoice: InvoiceBuyerInput;
};

export type ApiError = { error: string; status: number };

/** The signed-in patient's contacts from the latest order, to fill the booking form (0.9.24). */
export type Profile = { firstName: string; lastName: string; phone: string; email: string };
