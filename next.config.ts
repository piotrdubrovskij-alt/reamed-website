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
  async redirects() {
    // Old WordPress addresses (Search Console still lists ~100 of them as 404) → the matching new pages.
    const old = (source: string, destination: string) => ({ source, destination, permanent: true });
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.reamed.lt" }],
        destination: "https://reamed.lt/:path*",
        permanent: true,
      },
      // Specialists
      old("/piotr-dubrovskij", "/specialistai/piotr-dubrovskij"),
      old("/kotryna-kairyte", "/specialistai/kotryna-kairyte"),
      old("/erikas-jatkauskas/:rest*", "/specialistai/erikas-jatkauskas"),
      old("/specialistai", "/#specialistai"),
      old("/specialistai/_62_9862", "/#specialistai"),
      old("/specialistai/10360770_10207383217803898_8041386801063062103_n-2", "/#specialistai"),
      old("/specialistai/axcsgiy7-inettools-net-resize-image", "/#specialistai"),
      // Problems
      old("/nugaros-skausmas/:rest*", "/ka-gydome/nugaros-skausmas"),
      old("/stuburo-diskas", "/ka-gydome/nugaros-skausmas"),
      old("/sausgysliu-skausmo-gydymas", "/ka-gydome/tendinopatijos"),
      old("/reabilitacija-po-operaciju", "/paslaugos/pooperacine-reabilitacija"),
      // Services
      old("/kineziterapija-2", "/paslaugos/kineziterapija"),
      old("/kinezioteipavimas-2", "/paslaugos/kineziterapija"),
      old("/fizioterapija/:rest*", "/paslaugos/kineziterapija"),
      old("/neurologine-kineziterapija", "/paslaugos/kineziterapija"),
      old("/taikomoji-kineziologija", "/paslaugos/manualine-terapija"),
      old("/osteopatija", "/paslaugos/osteopatija"),
      old("/masazas/:rest*", "/paslaugos/gydomasis-masazas"),
      old("/sporto-kineziterapija", "/paslaugos/sporto-reabilitacija"),
      old("/sporto-traumu-reabilitacija", "/paslaugos/sporto-reabilitacija"),
      // Blog posts about sports injuries and their tags
      old("/kaip-sumazinti-traumu-tikimybe-slidinejant-kalnuose/:rest*", "/ka-gydome/sporto-traumos"),
      old("/begimo-tramu-prevencija/:rest*", "/ka-gydome/sporto-traumos"),
      old("/futbolo-traumos-ju-priezastys-tyrimai-ir-prevencija", "/ka-gydome/sporto-traumos"),
      old("/tag/:rest*", "/ka-gydome/sporto-traumos"),
      old("/category/:rest*", "/"),
      old("/blogas", "/"),
      old("/naujienos-old", "/"),
      old("/author/:rest*", "/"),
      old("/testimonial/:rest*", "/"),
      old("/feed/:rest*", "/"),
      old("/nieko-nekainuojanti-sveikatos-piliule/:rest*", "/"),
      old("/agne-juodyte-europos-hemofilijos-kongresas", "/"),
      // About / clinic
      old("/apie-mus/:rest*", "/#specialistai"),
      old("/reamed/:rest*", "/"),
      old("/lobacevske-reamed-klinika/:rest*", "/kontaktai"),
      // Children's topics now live at FitKid
      old("/vaiku-kineziterapija", "https://fitkid.lt/"),
      old("/vaiku-kineziterapija-copy", "https://fitkid.lt/"),
      old("/kaip-padeti-vaikui-atsikoseti/:rest*", "https://fitkid.lt/"),
      old("/skolioze", "https://fitkid.lt/"),
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
