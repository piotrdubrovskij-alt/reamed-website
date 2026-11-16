import type { NextConfig } from "next";
import { legacyRedirects } from "./src/data/legacy-redirects";

// Google tag (GA4 + Google Ads conversions), loaded only after cookie consent (Piotr 16.11.2026,
// src/lib/analytics.ts). Hosts from Google's CSP guide for GA4 with Ads features; google.<TLD> must be
// listed per country, so only .lt besides .com. Nothing else third-party is allowed in.
const googleTag = {
  script: "https://www.googletagmanager.com",
  connect: [
    "https://www.googletagmanager.com",
    "https://*.google-analytics.com",
    "https://*.analytics.google.com",
    "https://*.google.com",
    "https://*.google.lt",
    "https://*.g.doubleclick.net",
    "https://pagead2.googlesyndication.com",
    "https://www.googleadservices.com",
  ].join(" "),
  frame: "https://www.googletagmanager.com",
};

const cspHeader = [
  "default-src 'self'",
  // Next.js requires unsafe-inline/unsafe-eval for hydration chunks
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.manodaktaras.lt ${googleTag.script}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.manodaktaras.lt",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  // Google Maps + manodaktaras booking widget iframes
  `frame-src https://maps.google.com https://www.google.com https://www.manodaktaras.lt ${googleTag.frame}`,
  `connect-src 'self' https://www.manodaktaras.lt ${googleTag.connect}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  output: "standalone",
  // 90: the team photo on the first screen and the room photo in «Pirmasis vizitas» (faces and detail;
  // the default 75 makes them visibly soft on a phone). Everything else stays at 75.
  images: { qualities: [75, 90] },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.reamed.lt" }],
        destination: "https://reamed.lt/:path*",
        permanent: true,
      },
      // Old WordPress addresses → current pages (see the file for the list).
      ...legacyRedirects.map((r) => ({ ...r, permanent: true })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            // Only sent over HTTPS; harmless on HTTP dev
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Content-Security-Policy", value: cspHeader },
        ],
      },
    ];
  },
};

export default nextConfig;
