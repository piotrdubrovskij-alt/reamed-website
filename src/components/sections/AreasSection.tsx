"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { translations } from "@/lib/translations";

type Area = (typeof translations)["lt" | "en"]["areas"]["items"][number];

// Row button: full column width, 52px, ground pill on the paper section.
const row =
  "flex w-full items-center justify-between gap-4 min-h-13 px-6 rounded-full text-left text-body font-medium cursor-pointer transition-colors duration-200";

function AreaActions({ area }: { area: Area }) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-wrap items-center gap-x-7 gap-y-3.5">
      <Link href="/registracija" className="btn btn-dark text-body">
        {t.areas.register}
      </Link>
      <Link href={`/ka-gydome/${area.slug}`} className="link-action inline-flex items-center min-h-11">
        {t.areas.more}
      </Link>
    </div>
  );
}

// Phone (< 821px): accordion. All closed at first, at most one open.
function AreasAccordion({ items }: { items: readonly Area[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="flex flex-col gap-2 desk:hidden">
      {items.map((area, i) => {
        const expanded = open === i;
        const toggleId = `area-${area.slug}-toggle`;
        const panelId = `area-${area.slug}-panel`;
        return (
          <li key={area.slug}>
            <button
              type="button"
              id={toggleId}
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setOpen(expanded ? null : i)}
              className={`${row} ${expanded ? "bg-graphite text-white" : "bg-ground text-ink"}`}
            >
              {area.title}
              <ChevronDown
                size={20}
                aria-hidden="true"
                className={`shrink-0 transition-transform duration-200 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
              />
            </button>
            {/* Height animates through grid rows in 200ms; a closed panel is inert. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={toggleId}
              inert={!expanded}
              className={`grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none ${
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-5 px-6 pt-4 pb-4">
                  <p>{area.text}</p>
                  <AreaActions area={area} />
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

// Desktop: the picked area's card on the right; the first one is picked at first.
function AreaCard({ area }: { area: Area }) {
  const headingId = `area-${area.slug}-title`;
  return (
    <section aria-labelledby={headingId} className="hidden desk:flex flex-col gap-6 bg-ground p-10">
      <h3 id={headingId} className="text-h3 max-w-[20ch]">
        {area.title}
      </h3>
      <p className="max-w-[46ch]">{area.text}</p>
      <div className="mt-2">
        <AreaActions area={area} />
      </div>
    </section>
  );
}

export default function AreasSection() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(0);
  const items = t.areas.items;
  const current = items[selected];

  return (
    <section id="ka-gydome" aria-labelledby="areas-h" className="bg-paper section-y">
      <div className="wrap grid desk:grid-cols-[5fr_7fr] desk:gap-[72px] desk:items-start">
        <div>
          <h2 id="areas-h" className="text-h2 mb-8 desk:mb-9">
            {t.areas.title}
          </h2>
          <AreasAccordion items={items} />
          <ul className="hidden desk:flex flex-col gap-2">
            {items.map((area, i) => (
              <li key={area.slug}>
                <button
                  type="button"
                  aria-pressed={i === selected}
                  onClick={() => setSelected(i)}
                  className={`${row} ${i === selected ? "bg-graphite text-white" : "bg-ground text-ink hover:bg-ground-hover"}`}
                >
                  {area.title}
                  <ChevronRight size={20} aria-hidden="true" className="shrink-0" />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <AreaCard key={current.slug} area={current} />
      </div>
    </section>
  );
}
