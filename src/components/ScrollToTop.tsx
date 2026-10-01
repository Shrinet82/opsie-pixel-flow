import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the new page mount before looking for the anchor.
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
