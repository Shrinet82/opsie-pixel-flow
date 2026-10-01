import { Fragment } from "react";

/** Splits a headline into words that rise in sequence on load. */
export function Words({ text, start = 0 }: { text: string; start?: number }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-top">
            <span className="word" style={{ ["--i" as string]: i + start }}>
              {w}
            </span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </>
  );
}
