// Addresses of the old WordPress site (before 2026) that Google still crawls.
// Search Console listed 96 of them as 404 on 7 Nov 2026; some still had impressions
// (/sausgysliu-skausmo-gydymas/ — 535 in seven months). Each one now points
// to the closest page of the current site, permanently.
//
// Order matters: the first matching rule wins, so specific rules come before
// the catch-alls at the bottom. `:path*` also matches the address without a tail.
// When a closer page appears (e.g. disko išvarža), repoint its old address here.

type LegacyRedirect = { source: string; destination: string };

const BACK = "/ka-gydome/nugaros-skausmas";
const TENDONS = "/ka-gydome/tendinopatijos";
const SPORT = "/ka-gydome/sporto-traumos";
const PHYSIO = "/paslaugos/kineziterapija";
// Children and scoliosis are FitKid's work, not ReaMed's.
const FITKID = "https://fitkid.lt";

const rules: Array<[string, string]> = [
  // Specialists' old pages
  ["/piotr-dubrovskij/:path*", "/specialistai/piotr-dubrovskij"],
  ["/kotryna-kairyte/:path*", "/specialistai/kotryna-kairyte"],
  ["/erikas-jatkauskas/:path*", "/specialistai/erikas-jatkauskas"],
  ["/mangirdas-kazacenko/:path*", "/specialistai/mangirdas-kazacenko"],
  // Image attachments that WordPress published as pages under /specialistai/
  ["/specialistai/_62_9862", "/specialistai"],
  ["/specialistai/axcsgiy7-inettools-net-resize-image", "/specialistai"],
  ["/specialistai/10360770_10207383217803898_8041386801063062103_n-2", "/specialistai"],

  // Conditions
  ["/sausgysliu-skausmo-gydymas/:path*", TENDONS],
  ["/stuburo-diskas/:path*", "/ka-gydome/stuburo-isvarza"],
  ["/nugaros-skausmas/:path*", BACK],

  // Services
  ["/sporto-kineziterapija/:path*", "/paslaugos/sporto-reabilitacija"],
  ["/sporto-traumu-reabilitacija/:path*", "/paslaugos/sporto-reabilitacija"],
  ["/reabilitacija-po-operaciju/:path*", "/paslaugos/pooperacine-reabilitacija"],
  ["/kineziterapija-2/:path*", PHYSIO],
  ["/kinezioteipavimas-2/:path*", PHYSIO],
  ["/kinezioteipavimas/:path*", PHYSIO],
  ["/neurologine-kineziterapija/:path*", PHYSIO],
  ["/fizioterapija/:path*", "/paslaugos/fizioterapija"],
  ["/masazas/:path*", "/paslaugos/gydomasis-masazas"],
  ["/osteopatija/:path*", "/paslaugos/osteopatija"],
  ["/taikomoji-kineziologija/:path*", "/paslaugos"],

  // Old articles about sports injuries
  ["/kaip-sumazinti-traumu-tikimybe-slidinejant-kalnuose/:path*", SPORT],
  ["/begimo-tramu-prevencija/:path*", SPORT],
  ["/futbolo-traumos-ju-priezastys-tyrimai-ir-prevencija/:path*", SPORT],

  // Children and scoliosis → FitKid
  ["/vaiku-kineziterapija/:path*", FITKID],
  ["/vaiku-kineziterapija-copy/:path*", FITKID],
  ["/kaip-padeti-vaikui-atsikoseti/:path*", FITKID],
  ["/skolioze/:path*", FITKID],

  // Prices
  ["/kainos/malenkaja", "/kainos"],

  // Tags: the meaningful ones first, then the rest to the home page
  ["/tag/sausgysles-plysimas", TENDONS],
  ["/tag/tendinitas", TENDONS],
  ["/tag/sausgysliu-skausmas", TENDONS],
  ["/tag/ekscentriniai-pratimai", TENDONS],
  ["/tag/stuburo-diskas", "/ka-gydome/stuburo-isvarza"],
  ["/tag/sporto-traumos", SPORT],
  ["/tag/slidinejimo-traumos", SPORT],
  ["/tag/futbolo-traumos", SPORT],
  ["/tag/futbolo-traumu-prevencija", SPORT],
  ["/tag/futbolo-traumu-reabilitacija", SPORT],
  ["/tag/begimo-traumos", SPORT],
  ["/tag/begimo-traumu-prevencija", SPORT],
  ["/tag/begimo-treniruotes", SPORT],
  ["/tag/kineziterapija", PHYSIO],
  ["/tag/kineziterapija-vilniuje", PHYSIO],
  ["/tag/kineziterapija-vilnius", PHYSIO],
  ["/tag/kineziterapijos-pratimai", PHYSIO],
  ["/tag/pratimai", PHYSIO],
  ["/tag/jegos-pratimai", PHYSIO],
  ["/tag/agne-juodyte", "/specialistai"],
  ["/tag/:path*", "/"],

  // Pages about the clinic, news, blog and WordPress service pages
  ["/apie-mus/:path*", "/"],
  ["/reamed/:path*", "/"],
  ["/lobacevske-reamed-klinika/:path*", "/"],
  ["/nieko-nekainuojanti-sveikatos-piliule/:path*", "/"],
  ["/agne-juodyte-europos-hemofilijos-kongresas/:path*", "/"],
  ["/partneriai/:path*", "/"],
  ["/blogas/:path*", "/"],
  ["/naujienos/:path*", "/"],
  ["/naujienos-old/:path*", "/"],
  ["/category/:path*", "/"],
  ["/author/:path*", "/"],
  ["/testimonial/:path*", "/"],
  ["/feed/:path*", "/"],
  ["/default-sitemap.xsl", "/sitemap.xml"],
];

export const legacyRedirects: LegacyRedirect[] = rules.map(([source, destination]) => ({ source, destination }));
