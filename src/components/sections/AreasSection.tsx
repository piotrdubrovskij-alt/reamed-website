"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import type { translations } from "@/lib/translations";

type Area = (typeof translations)["lt" | "en"]["areas"]["items"][number];

// "Kur skauda?": pick an area on the left, its panel shows on the right
// (on phones, right under the picked item).
function AreaPanel({ area, variant }: { area: Area; variant: "phone" | "side" }) {
  const { t } = useLanguage();
  const headingId = `area-${area.slug}-${variant}`;
  const shown = variant === "phone" ? "flex md:hidden mt-3 mb-4" : "hidden md:flex";

  return (
    <section aria-labelledby={headingId} className={`flex-col gap-6 bg-ground p-7 md:p-10 ${shown}`}>
      <h3 id={headingId} className="text-h3-m md:text-h3 max-w-[20ch]">
        {area.title}
      </h3>
      <p className="max-w-[46ch]">{area.text}</p>
      <div className="mt-2 flex flex-wrap items-center gap-x-7 gap-y-3.5">
        <Link href="/registracija" className="btn btn-dark text-body">
          {t.areas.register}
        </Link>
        <Link href={`/ka-gydome/${area.slug}`} className="link-action inline-flex items-center min-h-11">
          {t.areas.more}
        </Link>
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
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[5fr_7fr] md:gap-[72px] md:items-start">
          <div>
            <h2 id="areas-h" className="text-h2 mb-9">
              {t.areas.title}
            </h2>
            <ul className="flex flex-col gap-1">
              {items.map((area, i) => (
                <li key={area.slug}>
                  <button
                    type="button"
                    aria-pressed={i === selected}
                    onClick={() => setSelected(i)}
                    className={`flex w-[calc(100%+14px)] items-center gap-4 min-h-12 -ml-3.5 px-3.5 md:w-[calc(100%+22px)] md:-ml-[22px] md:px-[22px] rounded-full text-left text-lead font-medium cursor-pointer transition-colors duration-200 ${
                      i === selected ? "bg-graphite text-white" : "hover:bg-ground"
                    }`}
                  >
                    <span aria-hidden="true" className="size-3 shrink-0 rounded-full bg-mint" />
                    {area.title}
                  </button>
                  {i === selected && <AreaPanel area={area} variant="phone" />}
                </li>
              ))}
            </ul>
          </div>
          <AreaPanel key={current.slug} area={current} variant="side" />
        </div>
      </div>
    </section>
  );
}
