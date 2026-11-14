import Link from "next/link";
import type { Topic } from "@/content/sections";

// What a section holds, from the plan's table (src/content/sections.ts): a topic with its own page
// is a link, the rest is text until its page is written. Used on the home page and on /ka-gydome.
export default function SectionTopics({ topics, columns = false }: { topics: readonly Topic[]; columns?: boolean }) {
  return (
    <ul className={columns ? "grid gap-x-10 md:grid-cols-2" : "flex flex-col"}>
      {topics.map((t) => (
        <li key={t.title} className="flex items-center gap-3 min-h-11">
          <span aria-hidden="true" className={`size-2.5 shrink-0 rounded-full ${t.page ? "bg-mint" : "bg-graphite/40"}`} />
          {t.page ? (
            <Link
              href={`/ka-gydome/${t.page}`}
              className="py-2 underline decoration-mint decoration-2 underline-offset-[6px] hover:text-graphite"
            >
              {t.title}
            </Link>
          ) : (
            <span className="py-2 text-graphite">{t.title}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
