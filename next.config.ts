import type { NextConfig } from "next";

const cspHeader = [
  "default-src 'self'",
  // Next.js requires unsafe-inline/unsafe-eval for hydration chunks
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.manodaktaras.lt",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.manodaktaras.lt",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  // Google Maps + manodaktaras booking widget iframes
  "frame-src https://maps.google.com https://www.google.com https://www.manodaktaras.lt",
  "connect-src 'self' https://www.manodaktaras.lt",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  output: "standalone",
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
