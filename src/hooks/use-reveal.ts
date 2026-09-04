import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  once = true,
}: UseRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}
