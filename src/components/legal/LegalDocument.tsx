"use client";

import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { openConsentSettings } from "@/lib/analytics";

// The three legal documents (privacy, cookies, purchase rules, redakcija 2026-11-22) share this view.
// Texts live in src/content/legal/*.ts; a change of wording is a new redakcija there.
export type LegalBlock =
  | { p: string }
  | { h3: string }
  | { ol: string[] }
  | { table: { head: string[]; rows: string[][] } }
  | { cookieButton: string };

export type LegalSection = { h: string; id?: string; blocks: LegalBlock[] };

export type LegalDoc = { title: string; edition: string; sections: LegalSection[] };

// "[words](/path)" or "[words](https://…)" inside a text becomes a link; everything else stays plain text.
const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

export function inline(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, words, href] = match;
    const at = match.index ?? 0;
    if (at > last) parts.push(text.slice(last, at));
    parts.push(
      href.startsWith("/") ? (
        <Link key={at} href={href} className="link-action">
          {words}
        </Link>
      ) : (
        <a key={at} href={href} className="link-action" rel="noopener noreferrer">
          {words}
        </a>
      ),
    );
    last = at + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 1 ? parts[0] : parts;
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <>
      {/* Computer: a real table. */}
      <table className="hidden md:table w-full border-collapse text-small text-ink">
        <thead>
          <tr>
            {head.map((cell) => (
              <th key={cell} scope="col" className="border-b border-rule py-2 pr-4 text-left align-bottom font-medium">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i} className={`border-b border-rule py-3 pr-4 align-top text-pretty ${i === 0 ? "font-medium" : ""}`}>
                  {inline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Phone: one card per row, the column names as labels. */}
      <ul className="md:hidden flex flex-col gap-3">
        {rows.map((row) => (
          <li key={row[0]} className="rounded-[16px] bg-ground p-4 flex flex-col gap-2">
            <p className="text-small font-medium text-ink">{inline(row[0])}</p>
            {row.slice(1).map((cell, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-small text-graphite">{head[i + 1]}</span>
                <span className="text-small text-ink text-pretty">{inline(cell)}</span>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  if ("p" in block) return <p className="text-body text-ink text-pretty">{inline(block.p)}</p>;
  if ("h3" in block) return <h3 className="text-body font-medium text-ink mt-2">{block.h3}</h3>;
  if ("ol" in block)
    return (
      <ol className="flex flex-col gap-2 pl-6 list-decimal marker:text-graphite text-body text-ink">
        {block.ol.map((item) => (
          <li key={item} className="text-pretty pl-1">
            {inline(item)}
          </li>
        ))}
      </ol>
    );
  if ("table" in block) return <Table head={block.table.head} rows={block.table.rows} />;
  return (
    <button type="button" onClick={openConsentSettings} className="btn btn-dark min-h-11 self-start text-small">
      {block.cookieButton}
    </button>
  );
}

export default function LegalDocument({ doc, lang }: { doc: LegalDoc; lang: string }) {
  return (
    <article lang={lang} className="bg-paper rounded-[28px] p-5 md:p-8 max-w-[860px] flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-h2 text-balance">{doc.title}</h1>
        <p className="text-small text-graphite">
          {/* «MB … · Redakcija 2026-11-22»: each part stays on one line, so the date never breaks at its hyphens. */}
          {doc.edition.split(" · ").map((part, i) => (
            <Fragment key={part}>
              {i > 0 && " · "}
              <span className="whitespace-nowrap">{part}</span>
            </Fragment>
          ))}
        </p>
      </header>
      {doc.sections.map((section) => (
        <section key={section.h} id={section.id} className="flex flex-col gap-3 scroll-mt-24">
          <h2 className="text-h3-m font-medium text-balance">{section.h}</h2>
          {section.blocks.map((block, i) => (
            <Fragment key={i}>
              <Block block={block} />
            </Fragment>
          ))}
        </section>
      ))}
    </article>
  );
}
