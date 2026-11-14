// Builds the default social preview (og:image) for every page:
// the full ReaMed logo, mint on graphite, centred on a 1200×630 canvas.
// Run: node scripts/build-og.mjs  →  public/og/reamed-og.png
import { mkdir, readFile } from "node:fs/promises";
import sharp from "sharp";

const W = 1200;
const H = 630;
const GRAPHITE = "#5F605F";
const LOGO_HEIGHT = 440;

const svg = await readFile(new URL("../public/brand/reamed-logo-for-dark.svg", import.meta.url));
const logo = await sharp(svg, { density: 600 }).resize({ height: LOGO_HEIGHT }).png().toBuffer();
const { width: logoWidth } = await sharp(logo).metadata();

await mkdir(new URL("../public/og/", import.meta.url), { recursive: true });
await sharp({ create: { width: W, height: H, channels: 3, background: GRAPHITE } })
  .composite([{ input: logo, left: Math.round((W - logoWidth) / 2), top: Math.round((H - LOGO_HEIGHT) / 2) }])
  .png({ compressionLevel: 9 })
  .toFile(new URL("../public/og/reamed-og.png", import.meta.url).pathname);

console.log("public/og/reamed-og.png", W, "×", H);
