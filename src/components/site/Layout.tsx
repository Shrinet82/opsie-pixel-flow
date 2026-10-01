import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Seo } from "./Seo";

export function Layout({ path, children, noindex }: { path: string; children: ReactNode; noindex?: boolean }) {
  return (
    <>
      <Seo path={path} noindex={noindex} />
      <a
        href="#main"
        className="sr-only z-[70] bg-bone px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
