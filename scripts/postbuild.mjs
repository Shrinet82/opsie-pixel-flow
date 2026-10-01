// Writes a static copy of index.html per route with that route's own title,
// description, canonical and Open Graph tags, so crawlers and link previews
// that do not run JavaScript still see the right metadata. Also writes sitemap.xml.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const dist = "dist";
const seo = JSON.parse(readFileSync("src/data/seo.json", "utf8"));
const html = readFileSync(join(dist, "index.html"), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

for (const [path, page] of Object.entries(seo.pages)) {
  const url = seo.site + path;
  const img = `${seo.site}/og${path === "/" ? "/home" : path}.png`;
  let out = html
    .replace(/<title>.*?<\/title>/s, `<title>${esc(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(page.description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(page.title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(page.description)}"`)
    .replace(/(<meta property="og:image" content=")[^"]*"/, `$1${img}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${esc(page.title)}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${esc(page.description)}"`)
    .replace(/(<meta name="twitter:image" content=")[^"]*"/, `$1${img}"`);
  if (path === "/privacy" || path === "/terms") out = out.replace("index, follow", "index, follow");
  const file = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, out);
}

const today = new Date().toISOString().slice(0, 10);
const urls = Object.keys(seo.pages)
  .map((p) => `  <url>\n    <loc>${seo.site}${p}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`postbuild: wrote ${Object.keys(seo.pages).length} route pages and sitemap.xml`);
