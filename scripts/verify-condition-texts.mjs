#!/usr/bin/env node
// Checks that src/content/conditions/<slug>.ts says exactly what Piotr's md says.
//   node scripts/verify-condition-texts.mjs scripts/condition-texts/batch-10.json
// On purpose it shares no parsing with import-condition-texts.mjs: the md is cleaned line by line here, the
// page is read back from TypeScript, and both are cut into sentences. Exit code 1 on any difference.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadConditionPage, parseCsv } from "./condition-texts/load-ts.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configPath = process.argv[2];
if (!configPath) throw new Error("Usage: node scripts/verify-condition-texts.mjs <config.json>");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const seo = new Map(parseCsv(fs.readFileSync(path.join(config.sourceDir, "SEO.csv"), "utf8")).map((r) => [r.slug, r]));

// Headings the template prints itself: they are structure, not text of the page.
const TEMPLATE_HEADINGS = /^## (Kada verta kreiptis|Kaip vertiname|Kaip gydome ir kiek tai trunka|Ką galite daryti iki vizito|Kada reikia skubios pagalbos|Dažniausi klausimai)\??$/;
const REMOVED_LINE = [
  /^\[←/,
  /reamed\.lt\/registracija/,
  /^Šiame puslapyje:/,
  /^<a id=/,
  /^Pirmasis\b.*80 €.*reamed\.lt\/kainos/,
  /^Parengė:/,
  /^Mediciniškai peržiūrėjo:/,
  /^Peržiūros data:/,
];

const sentences = (text) =>
  text
    .split(/(?<=[.?!…])\s+(?=[„"(\p{Lu}\d])/u)
    .map((s) => s.trim())
    .filter(Boolean);

function cut(md, from, to) {
  const a = md.indexOf(from);
  const b = to ? md.indexOf(to) : md.length;
  if (a === -1 || b === -1 || b < a) throw new Error(`Cannot find «${from}» … «${to}»`);
  return md.slice(a + from.length, b);
}

function withDashesReplaced(slug, md, report) {
  let out = md;
  for (const [from, to] of config.dashes[slug] ?? []) {
    const hits = out.split(from).length - 1;
    if (hits !== 1) report.push(`dash «${from}» found ${hits} times`);
    out = out.split(from).join(to);
  }
  return out;
}

function mdBodySentences(body) {
  const lines = body
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  // The closing call in the questions: the line before a booking line, unless that line is the answer itself
  // (then a question stands right above it).
  const faqAt = lines.findIndex((l) => /^## Dažniausi klausimai/.test(l));
  const isQuestion = (l) => /^### /.test(l) || /^\*\*.+\*\*$/.test(l);
  const calls = new Set();
  lines.forEach((l, i) => {
    if (i > faqAt && /^\[Registruotis vizitui\]/.test(l) && !isQuestion(lines[i - 2])) calls.add(i - 1);
  });
  return lines
    .filter((l, i) => !calls.has(i) && !REMOVED_LINE.some((re) => re.test(l)))
    .filter((l) => !TEMPLATE_HEADINGS.test(l))
    .map((l) =>
      l
        .replace(/^#{1,3} /, "")
        .replace(/^- /, "")
        .replaceAll("**", "")
        .replace(/\s*\[\d+(?:\s*,\s*\d+)*\]/g, ""),
    )
    .flatMap(sentences);
}

function pageBodySentences(p) {
  const opt = (s) => (s ? [s] : []);
  return [
    p.hero.h1,
    p.hero.lead,
    p.about.title,
    ...p.about.paragraphs,
    ...p.when.items,
    ...(p.when.paragraphs ?? []),
    ...opt(p.when.note),
    ...p.assess.map((a) => `${a.lead} ${a.text}`),
    ...p.treatment.items.map((i) => `${i.title} ${i.text}`),
    ...p.treatment.paragraphs,
    ...(p.beforeVisit ?? []),
    ...p.urgent.items,
    ...p.faq.flatMap((f) => [f.q, f.a]),
  ].flatMap(sentences);
}

function multisetDiff(a, b) {
  const counts = new Map();
  for (const s of b) counts.set(s, (counts.get(s) ?? 0) + 1);
  return a.filter((s) => {
    const n = counts.get(s) ?? 0;
    if (n > 0) counts.set(s, n - 1);
    return n === 0;
  });
}

function checkRelated(block, page, problems) {
  const md = [...block.matchAll(/^- \[(.+)\]\(https:\/\/reamed\.lt(\/\S*)\)$/gm)].map((m) => ({ href: m[2], label: m[1] }));
  for (const r of md) {
    if (!page.related.some((x) => x.href === r.href && x.label === r.label)) problems.push(`related not on the page: ${r.href}`);
  }
  for (const r of page.related) {
    if (!md.some((x) => x.href === r.href && x.label === r.label)) problems.push(`related not in md: ${r.href}`);
  }
}

function checkSources(block, page, problems) {
  const lines = block.split("\n").filter((l) => /^\d+\. /.test(l));
  if (lines.length !== page.sources.length) problems.push(`sources: md ${lines.length}, page ${page.sources.length}`);
  lines.forEach((line, i) => {
    const s = page.sources[i];
    if (!s) return;
    const head = `${s.authors} [${s.title}](`;
    if (line.slice(line.indexOf(" ") + 1, line.indexOf(" ") + 1 + head.length) !== head) problems.push(`source ${i + 1}: authors or title differ: ${line.slice(0, 90)}`);
    const urlEnd = line.indexOf(")", line.indexOf("](") + 2);
    const tail = line.slice(line.lastIndexOf("](") + 2).split(")").slice(1).join(")");
    const url = line.slice(line.lastIndexOf("](") + 2).split(")")[0];
    const doi = tail.match(/DOI:\s*(10\.[^\s]+?)\.?\s*$/)?.[1];
    if (urlEnd === -1) problems.push(`source ${i + 1}: no link`);
    if (doi ? s.doi !== doi || s.url : s.doi || s.url !== url) problems.push(`source ${i + 1}: doi/url differ: ${line.slice(0, 90)}`);
    // A journal is the words between the link and the year: «. Shoulder & Elbow, 2019.», «. BMJ, 2023;383:e1.»
    // A guideline number before the year («. NG226, 2022.») is not one.
    const beforeDoi = tail.replace(/DOI:.*$/, "").replaceAll("*", "");
    const yearAt = beforeDoi.search(/, (?:19|20)\d{2}(;|\.? *$)/);
    const named = beforeDoi.startsWith(". ") && yearAt > 0 ? beforeDoi.slice(2, yearAt) : undefined;
    const mdJournal = named && !/^[A-Z]+\d+$/.test(named) ? named : undefined;
    if (mdJournal !== s.journal) problems.push(`source ${i + 1}: journal md «${mdJournal}», page «${s.journal}»`);
    const mdYear = beforeDoi.replace(/peržiūrėta.*$/, "").match(/\b(?:19|20)\d{2}\b/)?.[0];
    if ((mdYear ? Number(mdYear) : undefined) !== s.year) problems.push(`source ${i + 1}: year md ${mdYear}, page ${s.year}`);
  });
}

function checkLeftovers(page, problems) {
  const walk = (v, at) => {
    if (typeof v === "string") {
      if (/ [–—] |\*|\]\(|<a |\[\d|reamed\.lt\/registracija|80 €|Parengė|Registruokitės/.test(v)) problems.push(`${at}: leftover: «${v.slice(0, 100)}»`);
    } else if (v && typeof v === "object") {
      for (const [k, x] of Object.entries(v)) walk(x, `${at}.${k}`);
    }
  };
  walk(page, "page");
}

function checkTemplateFields(p, section, problems) {
  const parent = loadConditionPage(ROOT, section);
  const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  if (p.section !== section) problems.push("section differs");
  if (p.navTitle !== p.hero.h1 || p.conditionName !== p.hero.h1) problems.push("navTitle or conditionName is not the H1");
  if (p.hero.specialist !== parent.hero.specialist) problems.push("hero.specialist differs from the section page");
  if (!same(p.team, parent.team)) problems.push("team differs from the section page");
  if (!same(p.services, parent.services)) problems.push("services differ from the section page");
  if (p.reviews !== parent.reviews) problems.push("reviews differ from the section page");
  if (p.reviewed !== null) problems.push("reviewed is not null");
  if (p.urgent.note !== "") problems.push('urgent.note is not ""');
  for (const extra of [p.assessNote, p.treatment.intro, p.about.list, p.topicsTitle]) {
    if (extra !== undefined) problems.push(`field outside the md mapping is filled: ${JSON.stringify(extra).slice(0, 60)}`);
  }
}

let total = 0;
for (const { slug, section } of config.pages) {
  const problems = [];
  const raw = fs.readFileSync(path.join(config.sourceDir, "tekstai", `${slug}.md`), "utf8");
  const md = withDashesReplaced(slug, raw, problems);
  const page = loadConditionPage(ROOT, slug);

  const mine = mdBodySentences(cut(md, "", "## Susiję puslapiai"));
  const theirs = pageBodySentences(page);
  for (const s of multisetDiff(mine, theirs)) problems.push(`in md, not on the page: «${s}»`);
  for (const s of multisetDiff(theirs, mine)) problems.push(`on the page, not in md: «${s}»`);
  if (!problems.length && mine.join("\n") !== theirs.join("\n")) problems.push("same sentences, different order");

  checkRelated(cut(md, "## Susiję puslapiai", "## Šaltiniai"), page, problems);
  checkSources(cut(md, "## Šaltiniai", null), page, problems);

  const row = seo.get(slug);
  if (page.meta.title !== row.title) problems.push("meta.title differs from SEO.csv");
  if (page.meta.description !== row.description) problems.push("meta.description differs from SEO.csv");
  checkLeftovers(page, problems);
  checkTemplateFields(page, section, problems);

  const dashes = (config.dashes[slug] ?? []).length;
  console.log(`${problems.length ? "✗" : "✓"} ${slug}: ${mine.length} sentences md, ${theirs.length} page, ${page.sources.length} sources, ${page.related.length} related, ${dashes} dashes replaced, ${problems.length} differences`);
  for (const p of problems) console.log(`    ${p}`);
  total += problems.length;
}
console.log(`\nDifferences: ${total}`);
process.exit(total ? 1 : 0);
