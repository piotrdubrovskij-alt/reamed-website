import Link from "next/link";
import type { ReactNode } from "react";
import { INLINE_LINK } from "@/lib/inline-links";

// A paragraph with links to our own pages written into it (src/lib/inline-links.ts): the words as Piotr wrote them,
// the linked words as an action link.
export default function LinkedText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE_LINK)) {
    const at = m.index ?? 0;
    if (at > last) parts.push(text.slice(last, at));
    parts.push(
      <Link key={at} href={m[2]} className="link-action font-normal">
        {m[1]}
      </Link>,
    );
    last = at + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
