import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { HEADER_OFFSET } from "@/hooks/use-smooth-scroll";
import "lenis/dist/lenis.css";

const lenisOptions = {
  autoRaf: true,
  anchors: {
    offset: HEADER_OFFSET,
  },
  duration: 1.15,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  touchMultiplier: 1.4,
  syncTouch: false,
} as const;

function useMotionAllowed() {
  const [allowed, setAllowed] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAllowed(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return allowed;
}

/** Smooth scroll global (Lenis). Desliga com prefers-reduced-motion. */
const SmoothScroll = () => {
  const allowed = useMotionAllowed();

  if (!allowed) return null;

  return <ReactLenis root options={lenisOptions} />;
};

export default SmoothScroll;
