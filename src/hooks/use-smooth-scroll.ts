import { useLenis } from "lenis/react";

/** Compensa o header fixo (h-20). */
export const HEADER_OFFSET = -80;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scroll até âncora/elemento, via Lenis quando ativo; fallback nativo.
 */
export function useSmoothScroll() {
  const lenis = useLenis();

  return (target: string | HTMLElement) => {
    if (lenis) {
      lenis.scrollTo(target, { offset: HEADER_OFFSET });
      return;
    }

    const el =
      typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  };
}
