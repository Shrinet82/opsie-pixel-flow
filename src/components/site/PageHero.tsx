import type { ReactNode } from "react";
import { Words } from "./Words";
import { Rule } from "./Reveal";

type Props = { label: string; labelClass?: string; title: string; sub: string; children?: ReactNode; aside?: ReactNode };

/** Dark hero shared by the inner pages. */
export function PageHero({ label, labelClass = "muted", title, sub, children, aside }: Props) {
  return (
    <section className="on-dark grain relative overflow-hidden bg-ink pb-20 pt-32 text-bone sm:pb-24 sm:pt-44">
      <div className={`wrap relative z-10 grid items-center gap-14 ${aside ? "lg:grid-cols-12" : ""}`}>
        <div className={aside ? "lg:col-span-7" : "max-w-[900px]"}>
          <p className={`label hero-fade mb-8 ${labelClass}`}>{label}</p>
          <h1 className="h-display"><Words text={title} /></h1>
          <p className="lede muted hero-fade mt-8" style={{ ["--d" as string]: "700ms" }}>{sub}</p>
          {children && (
            <div className="hero-fade mt-10 flex flex-wrap gap-3" style={{ ["--d" as string]: "850ms" }}>{children}</div>
          )}
        </div>
        {aside && <div className="hero-fade lg:col-span-5" style={{ ["--d" as string]: "500ms" }}>{aside}</div>}
      </div>
      <div className="wrap relative z-10 mt-16">
        <div className="hero-fade" style={{ ["--d" as string]: "1000ms" }}><Rule /></div>
      </div>
    </section>
  );
}
