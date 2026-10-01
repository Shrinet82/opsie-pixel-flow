import type { ReactNode } from "react";
import { Reveal, Rule } from "./Reveal";

type Props = {
  ground: "dark" | "light";
  label?: string;
  id?: string;
  children: ReactNode;
  className?: string;
  grain?: boolean;
};

/** One band of the page. Alternates ink and bone, with a mono section label. */
export function Section({ ground, label, id, children, className = "", grain }: Props) {
  const dark = ground === "dark";
  return (
    <section
      id={id}
      className={`${dark ? "on-dark bg-ink text-bone" : "on-light bg-bone text-ink"} ${
        grain && dark ? "grain" : ""
      } section-y scroll-mt-16 ${className}`}
    >
      <div className="wrap relative z-10">
        {label && (
          <Reveal className="mb-12 sm:mb-16">
            <Rule className="mb-5" />
            <p className="label muted">{label}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
