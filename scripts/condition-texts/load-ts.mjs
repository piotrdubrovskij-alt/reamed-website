// Loads a data file from src/content (TypeScript) into a Node script: types are dropped, relative imports follow.
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const cache = new Map();

export function loadTs(file) {
  const abs = path.resolve(file);
  if (cache.has(abs)) return cache.get(abs).exports;
  const { outputText } = ts.transpileModule(fs.readFileSync(abs, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const mod = { exports: {} };
  cache.set(abs, mod);
  const localRequire = (id) => {
    if (!id.startsWith(".")) throw new Error(`${abs}: only relative imports are supported, got ${id}`);
    return loadTs(path.resolve(path.dirname(abs), `${id}.ts`));
  };
  new Function("require", "module", "exports", outputText)(localRequire, mod, mod.exports);
  return mod.exports;
}

/** The ConditionPage exported by src/content/conditions/<slug>.ts */
export function loadConditionPage(root, slug) {
  const exports = loadTs(path.join(root, "src/content/conditions", `${slug}.ts`));
  const page = Object.values(exports).find((v) => v && typeof v === "object" && v.slug === slug);
  if (!page) throw new Error(`${slug}.ts does not export a page with this slug`);
  return page;
}

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') {
        cell += '"';
        i++;
      } else if (c === '"') quoted = false;
      else cell += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(cell);
      cell = "";
    } else if (c === "\n") {
      row.push(cell.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      cell = "";
    } else cell += c;
  }
  if (cell || row.length) rows.push([...row, cell]);
  const [head, ...body] = rows;
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i]])));
}
