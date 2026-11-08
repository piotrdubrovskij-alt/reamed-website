import { SECTIONS } from "@/content/sections";
import { conditionPages } from "@/content/conditions";
import { infoPages } from "@/content/pages";
import { servicePages } from "@/content/services";
import { eur } from "@/content/services/price-text";
import { specialists } from "@/lib/specialists";
import { SITE_URL } from "@/lib/seo";

// A short map of the site for AI assistants (plan of 07.11.2026), built from the same data as the pages,
// so the lists cannot drift from them. Hours and address are typed here: keep them equal to the JSON-LD in layout.tsx.
export const dynamic = "force-static";

export function GET() {
  const titles = new Map(conditionPages.map((p) => [p.slug, p.hero.h1]));
  const line = (title: string, path: string) => `- [${title}](${SITE_URL}${path})`;

  const sections = SECTIONS.map((s) => {
    const seen = new Set<string>();
    const pages = s.topics.filter((t) => t.page && !seen.has(t.page) && Boolean(seen.add(t.page)));
    return [
      `### ${s.name.lt}`,
      s.text.lt,
      line(titles.get(s.slug) ?? s.name.lt, `/ka-gydome/${s.slug}`),
      ...pages.map((t) => line(titles.get(t.page!) ?? t.title, `/ka-gydome/${t.page}`)),
    ].join("\n");
  });

  const body = `# ReaMed

> Privati kineziterapijos, manualinės terapijos ir osteopatijos klinika Vilniaus centre. Olimpiečių g. 1A-7, Vilnius. Tel. +370 601 34304, info@reamed.lt. I–V 8:00–19:00, VI 8:00–16:00. Kalbos: lietuvių, anglų, rusų.

- Paslaugos mokamos, siuntimo nereikia, su ligonių kasomis nedirbame.
- Pirmasis vizitas: konsultacija, ištyrimas ir gydymo planas, 60 min, ${eur("pirmasis-vizitas")}. Kineziterapija ${eur("kineziterapija")}. Visos kainos: ${SITE_URL}/kainos
- Registracija: ${SITE_URL}/registracija
- Vaikų kineziterapija ir skoliozė: ne ReaMed, o FitKid klinika (https://fitkid.lt).

## Apie kliniką

${infoPages.map((p) => line(p.hero.h1, p.path)).join("\n")}

## Paslaugos

${servicePages.map((p) => line(p.navTitle, `/paslaugos/${p.slug}`)).join("\n")}

## Specialistai

${specialists.map((s) => line(`${s.name}, ${s.role.toLowerCase()}`, `/specialistai/${s.slug}`)).join("\n")}

## Ką gydome

${sections.join("\n\n")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
