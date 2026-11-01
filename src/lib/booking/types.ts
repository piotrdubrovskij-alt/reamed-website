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
};

/** The order by id alone, as the result page sees it: no contacts, no manage link. */
export type OrderBrief = Omit<OrderView, "patient" | "manageUrl" | "visitType">;

export type CartItem = { serviceId: string; specialistId: string; start: number };

export type OrderInput = {
  requestId: string;
  visitType: VisitType;
  locale: Locale;
  patient: { firstName: string; lastName: string; phone: string; email: string };
  items: CartItem[];
  acceptedTerms: true;
};

export type ApiError = { error: string; status: number };
