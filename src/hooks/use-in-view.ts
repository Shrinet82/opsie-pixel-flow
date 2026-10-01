import { useEffect, useRef, useState } from "react";

/** True once the element has entered the viewport. Never flips back. */
export function useInViewOnce<T extends HTMLElement>(margin = "0px 0px -8% 0px") {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, margin]);

  return [ref, seen] as const;
}

/** Tracks whether the element is currently on screen, so loops can pause. */
export function useIsLive<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setLive(e.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return [ref, live] as const;
}
