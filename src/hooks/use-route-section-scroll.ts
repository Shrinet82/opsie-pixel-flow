import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type RouteScrollState = {
  scrollTo?: string;
};

export function useRouteSectionScroll() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = (location.state as RouteScrollState | null) ?? null;
    if (!state?.scrollTo) {
      return;
    }

    const sectionId = state.scrollTo;
    requestAnimationFrame(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });

    navigate(location.pathname, { replace: true, state: null });
  }, [location.pathname, location.state, navigate]);
}
