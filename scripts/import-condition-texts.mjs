#!/usr/bin/env node
// Moves Piotr's finished texts (tekstai/*.md + SEO.csv) to src/content/conditions/<slug>.ts, strings as they are.
//   node scripts/import-condition-texts.mjs scripts/condition-texts/batch-10.json
// A new batch is a new config next to batch-10.json. The script stops on anything it does not recognise
// instead of guessing. After it: node scripts/verify-condition-texts.mjs <the same config>.
//
// Changed in the text, and nothing else: citation numbers [1], navigation and booking lines, the closing call
// in the questions, the first-visit price paragraph (the template shows it from prices.ts), «Parengė…» lines,
// dashes between words (config: each replacement is listed).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadConditionPage, parseCsv } from "./condition-texts/load-ts.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = process.argv[2];
if (!configPath) throw new Error("Usage: node scripts/import-condition-texts.mjs <config.json>");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const batchSlugs = new Set(config.pages.map((p) => p.slug));
const seo = new Map(parseCsv(fs.readFileSync(path.join(config.sourceDir, "SEO.csv"), "utf8")).map((r) => [r.slug, r]));

const dropCitations = (s) => s.replace(/\s*\[\d+(?:\s*,\s*\d+)*\]/g, "");
const key = (title) => title.replace(/\?$/, "").trim().toLowerCase();
const isSiteLine = (b) => /^\[Registruotis vizitui\]\(https:\/\/reamed\.lt\/registracija\)/.test(b);

function applyDashes(slug, md) {
  let out = md;
  for (const [from, to] of config.dashes[slug] ?? []) {
    const found = out.split(from).length - 1;
    if (found !== 1) throw new Error(`${slug}: «${from}» found ${found} times, expected once`);
    out = out.replace(from, to);
  }
  return out;
}

/** { h1, intro: blocks, sections: [{ title, blocks }] } */
function splitMarkdown(md) {
  const doc = { h1: null, intro: [], sections: [] };
  let target = null;
  for (const raw of md.split(/\n\s*\n/)) {
    const block = raw.trim();
    if (!block || /^<a id="[^"]+"><\/a>$/.test(block) || block.startsWith("[←")) continue;
    if (block.startsWith("# ")) {
      doc.h1 = block.slice(2).trim();
      target = doc.intro;
    } else if (block.startsWith("## ")) {
      const section = { title: block.slice(3).trim(), blocks: [] };
      doc.sections.push(section);
      target = section.blocks;
    } else if (/^(Parengė|Mediciniškai peržiūrėjo|Peržiūros data):/.test(block)) {
      continue;
    } else if (!target) {
      throw new Error(`Text before the H1: «${block.slice(0, 60)}»`);
    } else {
      target.push(block);
    }
  }
  if (!doc.h1) throw new Error("No H1");
  return doc;
}

function listItems(block) {
  return block.split("\n").map((line) => {
    if (!line.startsWith("- ")) throw new Error(`Expected a list item: «${line.slice(0, 60)}»`);
    return line.slice(2).trim();
  });
}

function parseWhen(blocks) {
  // Some texts have paragraphs here instead of a list.
  if (!blocks.some((b) => b.startsWith("- "))) return { items: [], paragraphs: blocks.map(dropCitations) };
  const [list, ...rest] = blocks;
  if (rest.length > 1) throw new Error("«Kada verta kreiptis»: more than one paragraph after the list");
  return { items: listItems(list).map(dropCitations), ...(rest[0] ? { note: dropCitations(rest[0]) } : {}) };
}

function parseAssess(slug, blocks, leadWords, removed) {
  const paragraphs = blocks.filter((b) => {
    // Worded differently from text to text; «Pirmasis susitarimas…» elsewhere is ordinary text.
    const price = /^Pirmasis\b/.test(b) && b.includes("80 €") && b.includes("reamed.lt/kainos");
    if (price) removed.push(b);
    return !price;
  });
  if (paragraphs.length !== (leadWords ?? []).length) {
    throw new Error(
      `${slug}: assessLeadWords must have ${paragraphs.length} numbers, one per paragraph:\n` +
        paragraphs.map((p) => `  ${p.slice(0, 80)}`).join("\n"),
    );
  }
  return paragraphs.map((p, i) => {
    const words = dropCitations(p).split(" ");
    const n = leadWords[i];
    if (n < 2 || n > 5) throw new Error(`${slug}: lead of ${n} words`);
    return { lead: words.slice(0, n).join(" "), text: words.slice(n).join(" ") };
  });
}

function parseTreatment(blocks) {
  const treatment = { items: [], paragraphs: [] };
  for (const b of blocks) {
    // Punctuation right after the bold words («**Kai petys jautrus**, pradedame…») stays with the title.
    const bold = b.match(/^\*\*(.+?)\*\*([,:;]?)\s+(.+)$/s);
    if (bold) treatment.items.push({ title: bold[1] + bold[2], text: dropCitations(bold[3]) });
    else treatment.paragraphs.push(dropCitations(b));
  }
  return treatment;
}

function parseFaq(slug, blocks, removed) {
  const faq = [];
  for (const [i, b] of blocks.entries()) {
    const question = b.match(/^###\s+(.+)$/) ?? b.match(/^\*\*(.+)\*\*$/);
    if (question) {
      faq.push({ q: question[1].trim(), a: null });
      continue;
    }
    const current = faq.at(-1);
    if (!current) throw new Error(`${slug}: FAQ text before the first question`);
    if (current.a === null) current.a = dropCitations(b);
    // After an answer: a booking line, or the paragraph right before a booking line (the call, in any words).
    else if (/reamed\.lt\/registracija/.test(b) || /^\[Registruotis vizitui\]/.test(blocks[i + 1] ?? "")) {
      removed.push(b);
      console.log(`  call removed: ${b}`);
    } else throw new Error(`${slug}: unexpected second paragraph in an FAQ answer: «${b.slice(0, 60)}»`);
  }
  for (const f of faq) if (f.a === null) throw new Error(`${slug}: question without an answer: ${f.q}`);
  return faq;
}

function pageExists(href) {
  const [, area, slug] = href.match(/^\/(ka-gydome|paslaugos)\/([a-z0-9-]+)$/) ?? [];
  if (!area) return false;
  if (area === "ka-gydome" && batchSlugs.has(slug)) return true;
  const folder = area === "ka-gydome" ? "src/content/conditions" : "src/content/services";
  return fs.existsSync(path.join(ROOT, folder, `${slug}.ts`));
}

function parseRelated(slug, blocks) {
  return blocks.flatMap(listItems).flatMap((line) => {
    const link = line.match(/^\[(.+)\]\(https:\/\/reamed\.lt(\/[^)]*)\)$/);
    if (!link) throw new Error(`${slug}: cannot read related link «${line}»`);
    if (pageExists(link[2])) return [{ href: link[2], label: link[1] }];
    console.log(`  related dropped, no such page: ${link[2]}`);
    return [];
  });
}

function parseSources(slug, blocks) {
  return blocks
    .flatMap((b) => b.split("\n"))
    .map((line) => {
      const m = line.match(/^\d+\.\s+(.+?)\s+\[(.+?)\]\((\S+?)\)(.*)$/);
      if (!m) throw new Error(`${slug}: cannot read source «${line}»`);
      const [, authors, title, url, tail] = m;
      const doi = tail.match(/DOI:\s*(10\.\S+?)\.?\s*$/)?.[1];
      const rest = tail.replace(/DOI:.*$/, "");
      // «. J Rehabil Med, 2019;51:479–491.», «. Shoulder & Elbow, 2019.», a name with commas, or in *italics*.
      // «. NG226, 2022.» is the number of a guideline, not a journal.
      const named = rest.match(/^\.\s*(.+?),\s*\d{4}(?:;|\.?\s*$)/)?.[1].replaceAll("*", "");
      const journal = named && !/^[A-Z]+\d+$/.test(named) ? named : undefined;
      // «peržiūrėta 2026» is when the page was read, not a year of the source.
      const year = rest.replace(/peržiūrėta.*$/, "").match(/\b(?:19|20)\d{2}\b/)?.[0];
      const left = rest.replace(/^[.,\s]+|[.\s]+$/g, "");
      if (left && !journal) console.log(`  source tail: «${title.slice(0, 40)}…» → ${left}`);
      return {
        authors,
        title,
        ...(journal ? { journal } : {}),
        ...(year ? { year: Number(year) } : {}),
        ...(doi ? { doi } : { url }),
      };
    });
}

function buildPage({ slug, section, assessLeadWords }) {
  console.log(`\n${slug}`);
  const md = applyDashes(slug, fs.readFileSync(path.join(config.sourceDir, "tekstai", `${slug}.md`), "utf8"));
  const doc = splitMarkdown(md);
  const removed = [];
  const row = seo.get(slug);
  if (!row) throw new Error(`${slug}: no row in SEO.csv`);

  const [lead, ...navigation] = doc.intro;
  for (const b of navigation) {
    if (!isSiteLine(b) && !b.startsWith("Šiame puslapyje:")) throw new Error(`${slug}: unexpected intro block «${b.slice(0, 60)}»`);
    removed.push(b);
  }

  const [about, ...others] = doc.sections;
  const known = new Map(others.map((s) => [key(s.title), s.blocks]));
  const take = (title) => {
    const blocks = known.get(title);
    if (!blocks) throw new Error(`${slug}: no section «${title}»`);
    known.delete(title);
    return blocks;
  };
  const when = parseWhen(take("kada verta kreiptis"));
  const assess = parseAssess(slug, take("kaip vertiname"), assessLeadWords, removed);
  const treatment = parseTreatment(take("kaip gydome ir kiek tai trunka"));
  const beforeVisit = take("ką galite daryti iki vizito").map(dropCitations);
  const urgent = take("kada reikia skubios pagalbos").map((b) => dropCitations(b).replaceAll("**", ""));
  const faq = parseFaq(slug, take("dažniausi klausimai"), removed);
  const related = parseRelated(slug, take("susiję puslapiai"));
  const sources = parseSources(slug, take("šaltiniai"));
  if (known.size) throw new Error(`${slug}: unknown sections: ${[...known.keys()].join(", ")}`);

  const parent = loadConditionPage(ROOT, section);
  const page = {
    slug,
    section,
    navTitle: doc.h1,
    meta: { title: row.title, description: row.description },
    conditionName: doc.h1,
    hero: { h1: doc.h1, lead: dropCitations(lead), specialist: parent.hero.specialist },
    // A paragraph here is a plain string: bold words inside it keep their words and lose the asterisks.
    about: { title: about.title, paragraphs: about.blocks.map((b) => dropCitations(b).replaceAll("**", "")) },
    when,
    assess,
    services: parent.services,
    treatment,
    beforeVisit,
    urgent: { note: "", items: urgent },
    team: parent.team,
    faq,
    reviews: parent.reviews,
    sources,
    reviewed: null,
    related,
  };

  console.log(`  removed: ${removed.length} blocks; ${treatment.items.length} treatment items; ${faq.length} questions; ${sources.length} sources`);
  return page;
}

function checkClean(page) {
  const walk = (value, where) => {
    if (typeof value === "string") {
      if (/ [–—] |\*|\]\(|<a |\[\d/.test(value)) throw new Error(`${page.slug} ${where}: leftover markup or dash: «${value.slice(0, 100)}»`);
    } else if (value && typeof value === "object") {
      for (const [k, v] of Object.entries(value)) walk(v, `${where}.${k}`);
    }
  };
  walk(page, "page");
}

const camel = (slug) => slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

function writePage(page) {
  const body = JSON.stringify(page, null, 2).replace(/^(\s*)"([A-Za-z][A-Za-z0-9]*)":/gm, "$1$2:");
  const file = `import type { ConditionPage } from "./types";

// ${config.batch}: Piotr's text, moved by scripts/import-condition-texts.mjs. Wording is his: do not retype.
export const ${camel(page.slug)}: ConditionPage = ${body};
`;
  fs.writeFileSync(path.join(ROOT, "src/content/conditions", `${page.slug}.ts`), file);
}

const pages = config.pages.map(buildPage);
pages.forEach(checkClean);
pages.forEach(writePage);
console.log(`\nWritten: ${pages.length} pages.`);
