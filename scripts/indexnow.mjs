// Tells Bing and the other IndexNow engines which addresses to crawl: every URL in the live sitemap.
// Run after a merge has reached reamed.lt: node scripts/indexnow.mjs
// The key is public by design: the same value is served as a file at the site root (public/<key>.txt).
import { readdirSync } from "node:fs";

const host = "reamed.lt";
const file = readdirSync(new URL("../public/", import.meta.url)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!file) throw new Error("public/<key>.txt not found");
const key = file.replace(".txt", "");

const xml = await (await fetch(`https://${host}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error("sitemap is empty");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${file}`, urlList }),
});
console.log(res.status, res.statusText, `${urlList.length} URLs`);
if (!res.ok && res.status !== 202) process.exit(1);
