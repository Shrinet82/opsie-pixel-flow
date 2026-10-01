import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInViewOnce } from "@/hooks/use-in-view";

type Props = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

/** Fade and lift on first entry. Stagger by passing delay in steps of 70ms. */
export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }: Props) {
  const [ref, seen] = useInViewOnce<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** A 1px rule that draws left to right when it enters. */
export function Rule({ delay = 0, className = "" }: { delay?: number; className?: string }) {
  const [ref, seen] = useInViewOnce<HTMLDivElement>("0px 0px -4% 0px");
  return (
    <div
      ref={ref}
      aria-hidden
      className={`rule-draw h-px bg-current opacity-[0.14] ${seen ? "is-in" : ""} ${className}`}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    />
  );
}
