import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fitness.png";
import { hero, site } from "@/content/site";

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center text-white">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt={hero.imageAlt}
          className="h-full w-full scale-105 object-cover animate-fade-in"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/60 to-black/75" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.45)_100%)]"
          aria-hidden="true"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 animate-fade-up font-display text-sm font-semibold tracking-[0.28em] text-white/75 uppercase sm:text-base">
            {site.name}
          </p>

          <h1
            className="mb-6 animate-fade-up font-display text-5xl leading-[1.05] font-extrabold [text-shadow:_0_4px_24px_rgba(0,0,0,0.35)] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {hero.headline}
            <span className="mt-2 block bg-linear-to-r from-primary-glow via-secondary to-secondary bg-clip-text text-transparent">
              {hero.headlineAccent}
            </span>
          </h1>

          <p
            className="mx-auto mb-10 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/85 sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            {hero.subheadline}
          </p>

          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "240ms" }}>
            <Button
              size="xl"
              variant="cta"
              onClick={onCtaClick}
              className="group text-lg shadow-[var(--shadow-strong)]"
            >
              {hero.cta}
              <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
