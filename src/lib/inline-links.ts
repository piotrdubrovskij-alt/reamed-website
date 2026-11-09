// A paragraph from Piotr's texts may name another page of ours as a link:
// «[Achilo tendinopatija](/ka-gydome/achilo-tendinopatija)». Only our own /ka-gydome/ pages; the build checks
// the targets (src/content/conditions/index.ts). Fields that may hold such links: about.paragraphs,
// when.paragraphs, treatment.paragraphs. Shown by src/components/g/LinkedText.tsx.

export const INLINE_LINK = /\[([^\]]+)\]\((\/ka-gydome\/[a-z0-9-]+)\)/g;

/** The words without link markup, for places that show plain text. */
export function plainText(text: string): string {
  return text.replace(INLINE_LINK, "$1");
}

// The same markup on the standalone pages (src/content/pages): any page of ours, «[words](/kainos)».
// The build checks the targets in src/content/pages/index.ts.
export const PAGE_LINK = /\[([^\]]+)\]\((\/[a-z0-9/-]*)\)/g;

/** The words without link markup (FAQ schema, documents). */
export function plainPageText(text: string): string {
  return text.replace(PAGE_LINK, "$1");
}
