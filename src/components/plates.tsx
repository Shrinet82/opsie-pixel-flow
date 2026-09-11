import type { ReactNode } from "react";

export type Ground = "ink" | "cream";

/** Ground alternates every section. Two grounds only. */
export const Section = ({
  ground = "ink",
  children,
  className = "",
  id,
}: {
  ground?: Ground;
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section
    id={id}
    className={`gutter rhythm ${
      ground === "ink" ? "bg-ink text-cream" : "bg-cream text-ink"
    } ${className}`}
  >
    {children}
  </section>
);

/** Mono label. Labels only — never used as an eyebrow above a heading. */
export const Label = ({
  children,
  ground = "ink",
  className = "",
}: {
  children: ReactNode;
  ground?: Ground;
  className?: string;
}) => (
  <span
    className={`t-label ${ground === "ink" ? "text-ink-faint" : "text-cream-body"} ${className}`}
  >
    {children}
  </span>
);

/** Big Newsreader numeral that opens a plate. */
export const Numeral = ({
  children,
  ground = "ink",
}: {
  children: ReactNode;
  ground?: Ground;
}) => (
  <span
    className={`t-numeral shrink-0 ${
      ground === "ink" ? "text-signal" : "text-signal-cream"
    }`}
  >
    {children}
  </span>
);

/** Numeral beside a section heading; stacks under 390px. */
export const PlateHead = ({
  numeral,
  heading,
  children,
  ground = "ink",
}: {
  numeral?: string;
  heading: ReactNode;
  children?: ReactNode;
  ground?: Ground;
}) => (
  <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
    {numeral && <Numeral ground={ground}>{numeral}</Numeral>}
    <div className="flex-1 basis-[300px] flex flex-col gap-6">
      <h2 className="t-section m-0">{heading}</h2>
      {children}
    </div>
  </div>
);

export const Body = ({
  children,
  ground = "ink",
  dim,
  className = "",
}: {
  children: ReactNode;
  ground?: Ground;
  dim?: boolean;
  className?: string;
}) => (
  <p
    className={`t-body m-0 ${
      ground === "ink"
        ? dim
          ? "text-ink-muted"
          : "text-ink-body"
        : dim
          ? "text-cream-body/80"
          : "text-cream-body"
    } ${className}`}
  >
    {children}
  </p>
);

/**
 * Frame for a product screenshot. Until the real capture exists it renders a
 * hatched well carrying the shot it is waiting for, so the gap is explicit
 * rather than quietly papered over.
 */
export const PlateFrame = ({
  label,
  state,
  caption,
  src,
  alt,
  className = "",
  minHeight = 360,
  ground = "ink",
  children,
}: {
  label: string;
  state: string;
  caption?: string;
  src?: string;
  alt?: string;
  className?: string;
  minHeight?: number;
  ground?: Ground;
  children?: ReactNode;
}) => (
  <figure className={`m-0 flex flex-col gap-3 ${className}`}>
    <div className="flex items-baseline justify-between gap-4">
      <Label ground={ground}>{label}</Label>
      <Label ground={ground}>{state}</Label>
    </div>

    {children ? (
      <div
        className={`w-full overflow-hidden border ${
          ground === "ink"
            ? "border-ink-rule bg-ink-well text-cream"
            : "border-[rgba(14,15,18,0.18)] bg-white text-ink shadow-sm"
        }`}
        style={{ minHeight }}
      >
        {children}
      </div>
    ) : src ? (
      <img
        src={src}
        alt={alt ?? state}
        className={`w-full border block ${
          ground === "ink" ? "border-ink-rule" : "border-cream-rule"
        }`}
        loading="lazy"
      />
    ) : (
      <div
        className={`grid place-items-center px-6 ${
          ground === "ink"
            ? "plate-well border border-ink-rule"
            : "border border-[rgba(14,15,18,0.15)] bg-[repeating-linear-gradient(135deg,#e4e0d5_0_10px,#eeeae0_10px_20px)]"
        }`}
        style={{ minHeight }}
      >
        <span
          className={`font-mono text-[11px] tracking-[0.04em] px-3 py-1.5 text-center ${
            ground === "ink"
              ? "bg-signal text-ink"
              : "bg-white text-ink border border-[rgba(14,15,18,0.2)]"
          }`}
        >
          {caption ?? state.toLowerCase()}
        </span>
      </div>
    )}
  </figure>
);

/** Rule that matches the ground it sits on. */
export const Rule = ({ ground = "ink" }: { ground?: Ground }) => (
  <hr
    className={`m-0 border-0 border-t ${
      ground === "ink" ? "border-ink-rule" : "border-cream-rule"
    }`}
  />
);
