import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceItem = { slug: string; title: string; text: string };

// Services as big graphite buttons for a mint band (Piotr, 07.11.2026: the plain list read as weak, most visits
// come from phones). Used on the home page and on /paslaugos, so both look the same.
// The first one (kineziterapija, the main service) is full width on tablets and two rows tall on desktop, so the grid
// closes without a gap: 1 + 6 in 2 columns, or 1 tall + 3 × 2 in 4 columns.
export default function ServiceButtons({ items }: { items: readonly ServiceItem[] }) {
  return (
    <ul className="grid gap-2.5 md:grid-cols-2 desk:grid-cols-4 md:gap-3">
      {items.map((s, i) => (
        <li key={s.slug} className={i === 0 ? "flex md:col-span-2 desk:col-span-1 desk:row-span-2" : "flex"}>
          <Link
            href={`/paslaugos/${s.slug}`}
            className={`group flex w-full items-center justify-between gap-4 min-h-[76px] rounded-[28px] bg-graphite px-6 py-4 text-white no-underline transition-colors duration-200 hover:bg-ink motion-reduce:transition-none desk:min-h-[112px] desk:px-7 desk:py-6${
              i === 0 ? " desk:flex-col desk:items-start desk:py-7" : ""
            }`}
          >
            <span className="flex flex-col gap-1">
              <span className={`text-body font-medium ${i === 0 ? "desk:text-h3" : "desk:text-lead"}`}>{s.title}</span>
              <span className="text-small text-on-dark">{s.text}</span>
            </span>
            <span
              aria-hidden="true"
              className="grid place-items-center shrink-0 size-10 rounded-full bg-mint text-ink transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none"
            >
              <ArrowRight size={20} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
