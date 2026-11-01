import type {
  Availability,
  Catalogue,
  OrderBrief,
  OrderInput,
  OrderView,
} from "./types";

export class BookingError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function call<T>(method: "GET" | "POST", route: string, body?: unknown): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`/api/booking/${route}`, {
      method,
      headers: body === undefined ? undefined : { "Content-Type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
      credentials: "same-origin",
      cache: "no-store",
    });
  } catch {
    throw new BookingError("network", 0);
  }
  let payload: unknown = null;
  try {
    payload = await res.json();
  } catch {
    payload = null;
  }
  if (!res.ok) {
    const message =
      payload && typeof payload === "object" && typeof (payload as { error?: unknown }).error === "string"
        ? (payload as { error: string }).error
        : "";
    throw new BookingError(message, res.status);
  }
  return payload as T;
}

export const api = {
  catalogue: () => call<Catalogue>("GET", "catalogue"),
  availability: (q: { serviceId: string; specialistId: string; fromDay: string; toDay: string }) =>
    call<Availability>("GET", `availability?${new URLSearchParams(q)}`),
  hold: (input: OrderInput) => call<OrderView>("POST", "orders", input),
  pay: (orderId: string) =>
    call<{ checkoutUrl: string; expiresAt: number; status: string }>("POST", `orders/${orderId}/pay`),
  status: (orderId: string) => call<OrderBrief>("GET", `orders/${orderId}/status`),
  order: (orderId: string, token?: string | null) =>
    call<OrderView>("GET", `orders/${orderId}${token ? `?t=${encodeURIComponent(token)}` : ""}`),
  cancel: (orderId: string, itemId: string, token?: string | null) =>
    call<OrderView>("POST", `orders/${orderId}/items/${itemId}/cancel`, token ? { token } : {}),
  move: (orderId: string, itemId: string, start: number, token?: string | null) =>
    call<OrderView>("POST", `orders/${orderId}/items/${itemId}/move`, token ? { token, start } : { start }),
  requestCode: (email: string, locale: "lt" | "en") =>
    call<{ sent: boolean; expiresInMinutes: number }>("POST", "sign-in/code", { email, locale }),
  verifyCode: (email: string, code: string) =>
    call<{ email: string; expiresAt: number }>("POST", "sign-in/verify", { email, code }),
  signOut: () => call<{ signedOut: boolean }>("POST", "sign-in/out", {}),
  me: () => call<{ email: string; expiresAt: number }>("GET", "me"),
  myOrders: () => call<{ email: string; orders: OrderView[] }>("GET", "me/orders"),
};
