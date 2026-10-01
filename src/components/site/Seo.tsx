import { useEffect } from "react";
import seo from "@/data/seo.json";

type Pages = Record<string, { title: string; description: string }>;

function setMeta(selector: string, attr: "content" | "href", value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

/** Keeps head tags in step with the route. Static copies are also written at build time. */
export function Seo({ path, noindex }: { path: string; noindex?: boolean }) {
  useEffect(() => {
    const page = (seo.pages as Pages)[path];
    if (!page) return;
    const url = seo.site + (path === "/" ? "/" : path);
    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", page.title);
    setMeta('meta[name="twitter:description"]', "content", page.description);
    const img = `${seo.site}/og${path === "/" ? "/home" : path}.png`;
    setMeta('meta[property="og:image"]', "content", img);
    setMeta('meta[name="twitter:image"]', "content", img);
    if (noindex) setMeta('meta[name="robots"]', "content", "noindex, follow");
  }, [path, noindex]);
  return null;
}
