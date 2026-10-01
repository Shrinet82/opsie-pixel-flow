const SHEETS = [
  { name: "Vendorroll", tone: "text-vendorroll-dark", tx: "-34px", ty: "34px", r: "-4deg", rows: [70, 52, 62] },
  { name: "Ledgerline", tone: "text-copper", tx: "0px", ty: "0px", r: "0deg", rows: [58, 74, 44] },
  { name: "Advisory", tone: "text-gold", tx: "34px", ty: "-34px", r: "4deg", rows: [64, 48, 70] },
];

/** Three thin sheets, one per offering, that fan out on load. Abstract on purpose. */
export function HeroSheets() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-[460px]" aria-hidden>
      {SHEETS.map((s, i) => (
        <div
          key={s.name}
          className="sheet absolute inset-x-[8%] top-[10%] h-[72%] border border-bone/15 bg-ink-2 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]"
          style={{
            ["--i" as string]: i,
            ["--tx" as string]: s.tx,
            ["--ty" as string]: s.ty,
            ["--r" as string]: s.r,
            zIndex: i + 1,
          }}
        >
          <p className={`label ${s.tone}`}>{s.name}</p>
          <div className="mt-6 space-y-3.5">
            {s.rows.map((w, j) => (
              <div key={j} className="h-px bg-bone/20" style={{ width: `${w}%` }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
