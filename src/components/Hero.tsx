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
          className="h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-white/80 uppercase sm:text-base">
            {site.name}
          </p>

          <h1 className="mb-6 text-5xl leading-tight font-extrabold [text-shadow:_0_4px_8px_rgba(0,0,0,0.4)] sm:text-6xl lg:text-7xl">
            {hero.headline}
            <span className="mt-2 block bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              {hero.headlineAccent}
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-white/90 sm:text-2xl">
            {hero.subheadline}
          </p>

          <div className="flex justify-center">
            <Button
              size="xl"
              variant="cta"
              onClick={onCtaClick}
              className="group text-lg shadow-[var(--shadow-strong)] hover:shadow-primary/50"
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
