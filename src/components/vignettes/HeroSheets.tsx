import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { VENDORROLL_URL } from "@/data/links";
import { VendorrollVignette } from "./VendorrollVignette";
import { LedgerVignette } from "./LedgerVignette";
import { AdvisoryVignette } from "./AdvisoryVignette";

type Sheet = {
  name: string;
  tag: string;
  tone: string;
  hover: string;
  href: string;
  external?: boolean;
  tx: string;
  ty: string;
  r: string;
  fd: string;
  body: ReactNode;
};

// Cascade: each sheet sits lower and further right, so every label and its
// first rows stay visible. Offsets are percentages of the sheet's own size.
const SHEETS: Sheet[] = [
  { name: "Vendorroll", tag: "Live", tone: "text-vendorroll-dark", hover: "hover:border-vendorroll-dark/60 focus-visible:border-vendorroll-dark/60", href: VENDORROLL_URL, external: true, tx: "0%", ty: "0%", r: "-2.5deg", fd: "7s", body: <VendorrollVignette bare /> },
  { name: "Ledgerline", tag: "Coming soon", tone: "text-copper", hover: "hover:border-copper/60 focus-visible:border-copper/60", href: "/ledgerline", tx: "13%", ty: "54%", r: "1.5deg", fd: "8.5s", body: <LedgerVignette bare /> },
  { name: "Advisory", tag: "Taking engagements", tone: "text-gold", hover: "hover:border-gold/70 focus-visible:border-gold/70", href: "/advisory", tx: "26%", ty: "108%", r: "-1deg", fd: "6.5s", body: <AdvisoryVignette bare /> },
];

const sheetClass =
  "sheet absolute left-0 top-0 block overflow-hidden h-[48%] w-[74%] border border-bone/15 bg-ink-2 text-bone shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] outline-none";

/** Three sheets, one per offering. Each draws its own content and links to its product. */
export function HeroSheets() {
  return (
    <div className="on-dark relative mx-auto aspect-[1/1.12] w-full max-w-[460px]">
      {SHEETS.map((s, i) => {
        const inner = (
          <span className="sheet-float block h-full p-5" style={{ ["--fd" as string]: s.fd, ["--i" as string]: i }}>
            <span className="mb-4 flex items-baseline justify-between">
              <span className={`label ${s.tone}`}>{s.name}</span>
              <span className="label !text-[10px] text-bone/50">
                {s.tag}
                {s.external && <ArrowUpRight size={11} className="ml-1 inline -translate-y-px" aria-hidden />}
              </span>
            </span>
            <span className="block" aria-hidden>{s.body}</span>
          </span>
        );
        const style = {
          ["--i" as string]: i,
          ["--tx" as string]: s.tx,
          ["--ty" as string]: s.ty,
          ["--r" as string]: s.r,
          ["--z" as string]: i + 1,
        };
        const cls = `${sheetClass} ${s.hover}`;
        return s.external ? (
          <a key={s.name} href={s.href} className={cls} style={style} aria-label={`${s.name}, ${s.tag}`}>
            {inner}
          </a>
        ) : (
          <Link key={s.name} to={s.href} className={cls} style={style} aria-label={`${s.name}, ${s.tag}`}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
