"use client";

import { useEffect, useState } from "react";
import type { Language } from "@/lib/translations";
import { api, BookingError } from "./client";
import { serviceName } from "./format";
import type { Catalogue, CatalogueService } from "./types";

export type CatalogueState =
  | { status: "loading" }
  | { status: "ready"; data: Catalogue }
  | { status: "unavailable" }
  | { status: "error" };

/** The published catalogue from the clinic system; 503 means online booking is switched off. */
export function useCatalogue(): CatalogueState {
  const [state, setState] = useState<CatalogueState>({ status: "loading" });
  useEffect(() => {
    let live = true;
    api
      .catalogue()
      .then((data) => live && setState({ status: "ready", data }))
      .catch((error: unknown) => {
        if (!live) return;
        setState({ status: error instanceof BookingError && error.status === 503 ? "unavailable" : "error" });
      });
    return () => {
      live = false;
    };
  }, []);
  return state;
}

export function findService(catalogue: Catalogue | null, serviceId: string): CatalogueService | undefined {
  return catalogue?.catalogue.services.find((s) => s.id === serviceId);
}

export function serviceLabelFor(catalogue: Catalogue | null, serviceId: string, lang: Language): string {
  const service = findService(catalogue, serviceId);
  return service ? serviceName(service, lang) : serviceName({ id: serviceId, name: serviceId }, lang);
}

export function specialistNameFor(catalogue: Catalogue | null, specialistId: string): string {
  for (const service of catalogue?.catalogue.services ?? []) {
    const found = service.specialists.find((s) => s.id === specialistId);
    if (found) return found.name;
  }
  return "";
}
