import hero800 from "@/assets/hero-fitness-800.webp";
import hero1200 from "@/assets/hero-fitness-1200.webp";
import hero1600 from "@/assets/hero-fitness-1600.webp";
import transformation600 from "@/assets/transformation-600.webp";
import transformation900 from "@/assets/transformation-900.webp";
import transformation1200 from "@/assets/transformation-1200.webp";

export const heroImage = {
  src: hero1200,
  srcSet: `${hero800} 800w, ${hero1200} 1200w, ${hero1600} 1600w`,
  sizes: "100vw",
} as const;

export const transformationImage = {
  src: transformation900,
  srcSet: `${transformation600} 600w, ${transformation900} 900w, ${transformation1200} 1200w`,
  sizes: "(min-width: 1024px) 50vw, 100vw",
} as const;
