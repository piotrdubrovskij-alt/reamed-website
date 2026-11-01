// Builds public/map/reamed-map.svg, the static map in the footer, from OpenStreetMap data.
// Run once by hand: node scripts/build-map.mjs [--save osm.json | --from osm.json]
// The site never talks to Google or OSM: the browser only loads this SVG.
// Data © OpenStreetMap contributors, ODbL; the footer shows the attribution.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The clinic, from schema.org in src/app/layout.tsx (plus code M7RQ+2X).
const CENTER = { lat: 54.6900422, lon: 25.2899553 };
// One SVG unit is METERS metres. The footer crops the sides with object-fit: cover,
// so the view is wide and the marker sits exactly in the middle.
const METERS = 1;
const W = 1600;
const H = 400;
const PAD = 24; // geometry is kept a little past the edges so strokes do not end at the frame

const COLORS = { land: "#ECEDEB", water: "#9DD0CB", green: "#DDE5E2", building: "#E2E4E1", street: "#FFFFFF", pin: "#5F605F", dot: "#9DD0CB" };

// Street width in metres by OSM class: main roads thicker, residential thinner.
const STREETS = {
  trunk: 16, primary: 14, secondary: 12, tertiary: 10,
  trunk_link: 8, primary_link: 8, secondary_link: 7, tertiary_link: 6,
  residential: 7, unclassified: 7, living_street: 6, pedestrian: 6, service: 4,
};
const PATH_BRIDGE = 4; // footways and paths are drawn only where they cross water

const GREEN = {
  leisure: ["park", "garden", "playground"],
  landuse: ["grass", "forest", "meadow", "recreation_ground", "village_green", "cemetery"],
  natural: ["wood", "scrub", "grassland"],
};

const args = process.argv.slice(2);
const flag = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : undefined);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "public/map/reamed-map.svg");

const R = 6371008.8;
const mLat = (Math.PI * R) / 180;
const mLon = mLat * Math.cos((CENTER.lat * Math.PI) / 180);
const project = ({ lat, lon }) => [
  W / 2 + ((lon - CENTER.lon) * mLon) / METERS,
  H / 2 - ((lat - CENTER.lat) * mLat) / METERS,
];

async function load() {
  const from = flag("--from");
  if (from) return JSON.parse(readFileSync(from, "utf8"));
  const dLat = ((H / 2 + PAD) * METERS) / mLat;
  const dLon = ((W / 2 + PAD) * METERS) / mLon;
  const bbox = [CENTER.lat - dLat, CENTER.lon - dLon, CENTER.lat + dLat, CENTER.lon + dLon].map((v) => v.toFixed(6)).join(",");
  const query = `[out:json][timeout:120];
(
  nwr["natural"="water"](${bbox});
  nwr["waterway"="riverbank"](${bbox});
  nwr["leisure"~"^(${GREEN.leisure.join("|")})$"](${bbox});
  nwr["landuse"~"^(${GREEN.landuse.join("|")})$"](${bbox});
  nwr["natural"~"^(${GREEN.natural.join("|")})$"](${bbox});
  nwr["building"](${bbox});
  way["highway"](${bbox});
);
out geom;`;
  // The public server is often busy: retry with a growing pause.
  let res;
  for (let wait = 10; ; wait *= 2) {
    res = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": "reamed-website scripts/build-map.mjs" },
      body: new URLSearchParams({ data: query }),
    });
    if (res.ok || wait > 80 || ![429, 502, 503, 504].includes(res.status)) break;
    console.log(`Overpass ${res.status}, retrying in ${wait}s`);
    await new Promise((r) => setTimeout(r, wait * 1000));
  }
  if (!res.ok) throw new Error(`Overpass: ${res.status} ${await res.text()}`);
  const data = await res.json();
  const save = flag("--save");
  if (save) writeFileSync(save, JSON.stringify(data));
  return data;
}

// --- geometry -------------------------------------------------------------

const same = (a, b) => a.lat === b.lat && a.lon === b.lon;

// Joins the ways of a multipolygon into closed rings.
function rings(ways) {
  const left = ways.filter((g) => g && g.length > 1).map((g) => [...g]);
  const done = [];
  while (left.length) {
    const ring = left.shift();
    let grew = true;
    while (!same(ring[0], ring[ring.length - 1]) && grew) {
      grew = false;
      for (let i = 0; i < left.length; i++) {
        const g = left[i];
        const end = ring[ring.length - 1];
        if (same(g[0], end)) ring.push(...g.slice(1));
        else if (same(g[g.length - 1], end)) ring.push(...g.slice(0, -1).reverse());
        else continue;
        left.splice(i, 1);
        grew = true;
        break;
      }
    }
    done.push(ring);
  }
  return done;
}

function polygonsOf(el) {
  if (el.type === "way") return el.geometry ? [el.geometry] : [];
  if (el.type === "relation" && el.members) {
    return rings(el.members.filter((m) => m.type === "way" && (m.role === "outer" || m.role === "inner")).map((m) => m.geometry));
  }
  return [];
}

// Sutherland–Hodgman against the padded frame.
function clipPolygon(pts) {
  const edges = [
    [(p) => p[0] >= -PAD, (a, b) => cross(a, b, 0, -PAD)],
    [(p) => p[0] <= W + PAD, (a, b) => cross(a, b, 0, W + PAD)],
    [(p) => p[1] >= -PAD, (a, b) => cross(a, b, 1, -PAD)],
    [(p) => p[1] <= H + PAD, (a, b) => cross(a, b, 1, H + PAD)],
  ];
  let list = pts;
  for (const [inside, at] of edges) {
    if (!list.length) break;
    const input = list;
    list = [];
    for (let i = 0; i < input.length; i++) {
      const cur = input[i];
      const prev = input[(i + input.length - 1) % input.length];
      if (inside(cur)) {
        if (!inside(prev)) list.push(at(prev, cur));
        list.push(cur);
      } else if (inside(prev)) list.push(at(prev, cur));
    }
  }
  return list;
}
function cross(a, b, axis, v) {
  const t = (v - a[axis]) / (b[axis] - a[axis]);
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
}

// Lines: keep the runs of segments that touch the frame.
function clipLine(pts) {
  const hit = (a, b) =>
    Math.max(a[0], b[0]) >= -PAD && Math.min(a[0], b[0]) <= W + PAD && Math.max(a[1], b[1]) >= -PAD && Math.min(a[1], b[1]) <= H + PAD;
  const runs = [];
  let run = null;
  for (let i = 1; i < pts.length; i++) {
    if (hit(pts[i - 1], pts[i])) {
      if (!run) runs.push((run = [pts[i - 1]]));
      run.push(pts[i]);
    } else run = null;
  }
  return runs;
}

// Douglas–Peucker. A closed ring is split at its farthest point first.
function simplify(pts, tol) {
  if (pts.length < 3) return pts;
  const [fx, fy] = pts[0];
  const [lx, ly] = pts[pts.length - 1];
  if (fx === lx && fy === ly) {
    let k = 1;
    for (let i = 1; i < pts.length - 1; i++) if (Math.hypot(pts[i][0] - fx, pts[i][1] - fy) > Math.hypot(pts[k][0] - fx, pts[k][1] - fy)) k = i;
    return [...simplifyOpen(pts.slice(0, k + 1), tol), ...simplifyOpen(pts.slice(k), tol).slice(1)];
  }
  return simplifyOpen(pts, tol);
}
function simplifyOpen(pts, tol) {
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length);
  keep[0] = keep[pts.length - 1] = 1;
  const stack = [[0, pts.length - 1]];
  while (stack.length) {
    const [s, e] = stack.pop();
    const [ax, ay] = pts[s];
    const [bx, by] = pts[e];
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy) || 1;
    let max = 0;
    let idx = -1;
    for (let i = s + 1; i < e; i++) {
      const d = Math.abs(dy * pts[i][0] - dx * pts[i][1] + bx * ay - by * ax) / len;
      if (d > max) [max, idx] = [d, i];
    }
    if (max > tol && idx > 0) {
      keep[idx] = 1;
      stack.push([s, idx], [idx, e]);
    }
  }
  return pts.filter((_, i) => keep[i]);
}

const half = (v) => Math.round(v * 2) / 2;
const num = (v) => {
  const s = String(Object.is(v, -0) ? 0 : v);
  return s.replace(/^(-?)0\./, "$1.");
};
// Joins numbers without spaces where the parser does not need them.
function join2(values) {
  let out = "";
  for (const v of values) {
    const s = num(v);
    if (out && !s.startsWith("-") && !(s.startsWith(".") && /\.\d*$/.test(out))) out += " ";
    out += s;
  }
  return out;
}

// Relative path data, rounded to half a unit.
function pathData(pts, close) {
  const r = [];
  for (const p of pts) {
    const q = [half(p[0]), half(p[1])];
    if (!r.length || q[0] !== r[r.length - 1][0] || q[1] !== r[r.length - 1][1]) r.push(q);
  }
  if (close && r.length > 1 && r[0][0] === r[r.length - 1][0] && r[0][1] === r[r.length - 1][1]) r.pop();
  if (r.length < (close ? 3 : 2)) return "";
  const deltas = [];
  for (let i = 1; i < r.length; i++) deltas.push(r[i][0] - r[i - 1][0], r[i][1] - r[i - 1][1]);
  return `M${join2(r[0])}l${join2(deltas)}${close ? "z" : ""}`;
}

function area(pts) {
  let a = 0;
  for (let i = 0; i < pts.length; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[(i + 1) % pts.length];
    a += x1 * y2 - x2 * y1;
  }
  return Math.abs(a / 2);
}

function fillPath(elements, { tol, minArea }) {
  let d = "";
  for (const el of elements) {
    for (const ring of polygonsOf(el)) {
      const pts = clipPolygon(simplify(ring.map(project), tol));
      if (pts.length < 3 || area(pts) < minArea) continue;
      d += pathData(pts, true);
    }
  }
  return d;
}

// --- build ----------------------------------------------------------------

const data = await load();
const els = data.elements.filter((e) => e.tags);
const isWater = (t) => t.natural === "water" || t.waterway === "riverbank";
const isGreen = (t) => Object.entries(GREEN).some(([k, vs]) => vs.includes(t[k]));

const water = fillPath(els.filter((e) => isWater(e.tags)), { tol: 0.8, minArea: 20 });
const green = fillPath(els.filter((e) => isGreen(e.tags) && !e.tags.building), { tol: 0.8, minArea: 40 });
const buildings = fillPath(els.filter((e) => e.tags.building && !isWater(e.tags)), { tol: 0.6, minArea: 6 });
const squares = fillPath(
  els.filter((e) => e.type === "way" && e.tags.highway === "pedestrian" && e.tags.area === "yes"),
  { tol: 0.8, minArea: 20 },
);

const byWidth = new Map();
for (const e of els) {
  const t = e.tags;
  if (e.type !== "way" || !t.highway || !e.geometry || t.area === "yes" || t.tunnel === "yes" || t.indoor === "yes") continue;
  let w = STREETS[t.highway];
  if (!w && t.bridge === "yes" && ["footway", "path", "cycleway"].includes(t.highway)) w = PATH_BRIDGE;
  if (!w) continue;
  const w2 = half(w / METERS);
  for (const run of clipLine(simplify(e.geometry.map(project), 0.8))) {
    byWidth.set(w2, (byWidth.get(w2) ?? "") + pathData(run, false));
  }
}
const streets = [...byWidth.entries()]
  .sort((a, b) => a[0] - b[0])
  .map(([w, d]) => `<path stroke-width="${num(w)}" d="${d}"/>`)
  .join("");

// Pin: the tip on the clinic; about 36px tall on desktop (map ~250px high), 30px on phones (200px).
const PIN_H = 60;
const s = PIN_H / 32;
const pin = `<g transform="translate(${num(half(W / 2 - 12 * s))} ${num(half(H / 2 - PIN_H))}) scale(${s.toFixed(3)})"><path fill="${COLORS.pin}" d="M12 0C5.4 0 0 5.4 0 12c0 8.6 12 20 12 20s12-11.4 12-20C24 5.4 18.6 0 12 0z"/><circle fill="${COLORS.dot}" cx="12" cy="12" r="4.5"/></g>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
<!-- ReaMed, Olimpiečių g. 1A-7, Vilnius. Map data © OpenStreetMap contributors (ODbL). Built by scripts/build-map.mjs. -->
<rect width="${W}" height="${H}" fill="${COLORS.land}"/>
<path fill="${COLORS.green}" d="${green}"/>
<path fill="${COLORS.water}" fill-rule="evenodd" d="${water}"/>
<path fill="${COLORS.building}" d="${buildings}"/>
<path fill="${COLORS.street}" d="${squares}"/>
<g fill="none" stroke="${COLORS.street}" stroke-linecap="round" stroke-linejoin="round">${streets}</g>
${pin}
</svg>
`;

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, svg);
console.log(`${out}: ${(Buffer.byteLength(svg) / 1024).toFixed(1)} KB`);
