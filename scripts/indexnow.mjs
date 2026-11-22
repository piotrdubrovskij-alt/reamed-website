// Tells Bing and the other IndexNow engines (Yandex, Seznam, Naver…) which reamed.lt addresses to crawl again.
// Bing's index also feeds ChatGPT search and Copilot, so a page that changed should reach it the same day.
//
//   node scripts/indexnow.mjs                          every URL in the live sitemap (manual, one-off)
//   node scripts/indexnow.mjs --changed --state FILE   only pages whose content changed since FILE was written
//
// --changed is what .github/workflows/indexnow.yml runs after each new version is live (Piotr, 22.11.2026).
// A page counts as changed when its title, description, canonical, robots or visible text differ;
// new sitemap URLs and URLs that left the sitemap are sent too. Without FILE (first run) every URL is sent.
// FILE is rewritten only after IndexNow accepted the list, so a failed run is retried by the next one.
//
// The key is public by design: the same value is served as a file at the site root (public/<key>.txt).
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";

const host = "reamed.lt";
const args = process.argv.slice(2);
const changedOnly = args.includes("--changed");
const stateIndex = args.indexOf("--state");
const statePath = stateIndex >= 0 ? args[stateIndex + 1] : null;
if (changedOnly && !statePath) throw new Error("--changed needs --state <file>");
const dryRun = args.includes("--dry-run");

const file = readdirSync(new URL("../public/", import.meta.url)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!file) throw new Error("public/<key>.txt not found");
const key = file.replace(".txt", "");

// Local test only: INDEXNOW_FETCH_ORIGIN=http://localhost:3100 reads pages from a local `next start`
// (with --dry-run); the URLs sent to IndexNow are always the reamed.lt ones from the sitemap.
const fetchOrigin = process.env.INDEXNOW_FETCH_ORIGIN;

async function get(url, tries = 3) {
  if (fetchOrigin) url = url.replace(`https://${host}`, fetchOrigin);
  for (let i = 1; ; i++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "reamed-indexnow" }, signal: AbortSignal.timeout(20000) });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return await res.text();
    } catch (err) {
      if (i >= tries) throw new Error(`${url}: ${err.message}`);
      await new Promise((r) => setTimeout(r, 2000 * i));
    }
  }
}

const decode = (s) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'");

const pick = (html, re) => decode(html.match(re)?.[1] ?? "");

// What a search engine would see as the page: head fields and visible text, without scripts, styles,
// build hashes or nonces, so a rebuild with the same content gives the same fingerprint.
function fingerprint(html) {
  const head = [
    pick(html, /<title[^>]*>([^<]*)<\/title>/i),
    pick(html, /<meta name="description" content="([^"]*)"/i),
    pick(html, /<link rel="canonical" href="([^"]*)"/i),
    pick(html, /<meta name="robots" content="([^"]*)"/i),
  ];
  const text = decode(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<template\b[\s\S]*?<\/template>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
  return createHash("sha256").update(head.join("\n") + "\n" + text).digest("hex").slice(0, 20);
}

const xml = await get(`https://${host}/sitemap.xml`);
const sitemap = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1]));
if (!sitemap.length) throw new Error("sitemap is empty");

let urlList = sitemap;
let pages = {};

if (changedOnly) {
  const before = statePath && existsSync(statePath) ? JSON.parse(readFileSync(statePath, "utf8")).pages : null;

  // Four at a time: about 120 pages take well under a minute and do not load the site.
  const queue = [...sitemap];
  await Promise.all(
    Array.from({ length: 4 }, async () => {
      for (let url = queue.shift(); url; url = queue.shift()) pages[url] = fingerprint(await get(url));
    }),
  );

  if (before) {
    const changed = sitemap.filter((u) => before[u] !== pages[u]);
    const gone = Object.keys(before).filter((u) => !(u in pages));
    urlList = [...changed, ...gone];
    console.log(`${sitemap.length} pages checked: ${changed.length} changed or new, ${gone.length} left the sitemap`);
  } else {
    console.log(`No saved state: sending all ${sitemap.length} sitemap URLs`);
  }
}

for (const u of urlList) console.log("  " + u);

if (urlList.length && !dryRun) {
  // IndexNow takes up to 10 000 URLs per request.
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${file}`, urlList }),
  });
  console.log(res.status, res.statusText, `${urlList.length} URLs`);
  if (!res.ok && res.status !== 202) process.exit(1);
} else if (!urlList.length) {
  console.log("Nothing changed, nothing sent");
}

// --dry-run (local test) also writes FILE, so a second dry run shows whether a rebuild alone changes fingerprints.
if (changedOnly) {
  writeFileSync(statePath, JSON.stringify({ savedAt: new Date().toISOString(), pages }, null, 1));
}
