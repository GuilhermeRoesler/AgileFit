import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { heroImage } from "@/lib/images";
import { withBase } from "@/lib/paths";
import { hero, site } from "@/content/site";

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center text-white">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage.src}
          srcSet={heroImage.srcSet}
          sizes={heroImage.sizes}
          alt={hero.imageAlt}
          className="h-full w-full origin-center object-cover animate-ken-burns"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#0f1f16]/55 via-[#0f1f16]/72 to-[#0a1510]/92" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(0,0,0,0.45)_100%)]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-noise opacity-[0.28] mix-blend-overlay" aria-hidden="true" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex animate-fade-up flex-col items-center gap-3">
            <img
              src={withBase("/favicon.svg")}
              alt=""
              className="h-14 w-14 rounded-[22%] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.55)] sm:h-16 sm:w-16"
              width={64}
              height={64}
            />
            <p className="font-display text-xl font-bold tracking-[0.2em] text-white uppercase sm:text-2xl">
              {site.name}
            </p>
          </div>

          <h1
            className="mb-6 animate-fade-up font-display text-5xl leading-[1.05] font-extrabold text-white [text-shadow:_0_2px_0_rgba(0,0,0,0.2),_0_12px_40px_rgba(0,0,0,0.45)] sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {hero.headline}
            <span className="mt-2 block text-secondary [text-shadow:_0_2px_24px_rgba(245,158,11,0.35)]">
              {hero.headlineAccent}
            </span>
          </h1>

          <p
            className="mx-auto mb-10 max-w-2xl animate-fade-up text-lg leading-relaxed text-white/92 sm:text-xl"
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
