import { useEffect, useState } from "react";
import { Check, Flame, Play } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { productPreview, site } from "@/content/site";
import { cn } from "@/lib/utils";

type ProductMockupProps = {
  className?: string;
};

const ProductMockup = ({ className }: ProductMockupProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold: 0.2, rootMargin: "0px" });
  const [progress, setProgress] = useState(() => {
    if (typeof window === "undefined") return 0;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? productPreview.progressValue
      : 0;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const measure = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.92;
      const end = vh * 0.38;
      const raw = (start - rect.top) / (start - end);
      const t = Math.min(1, Math.max(0, raw));
      setProgress(Math.round(t * productPreview.progressValue));
    };

    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ref]);

  return (
    <div ref={ref} className={cn("relative mx-auto w-full max-w-[360px]", className)}>
      <div
        className="absolute -inset-10 rounded-[3.5rem] bg-primary/25 blur-3xl"
        aria-hidden="true"
      />

      <div
        className={cn(
          "absolute -top-2 -right-2 z-20 hidden rounded-2xl border border-white/10 bg-[#13261c]/95 px-3.5 py-3 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.7)] backdrop-blur-md sm:block",
          "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        )}
        style={{ transitionDelay: visible ? "180ms" : "0ms" }}
      >
        <div className="mb-1 flex items-center gap-1.5 text-secondary">
          <Flame className="h-3.5 w-3.5 fill-current" />
          <span className="text-[11px] font-semibold tracking-wide uppercase">
            {productPreview.streakLabel}
          </span>
        </div>
        <p className="font-display text-sm font-bold text-white">{productPreview.streakValue}</p>
      </div>

      <div
        className={cn(
          "absolute -bottom-1 -left-3 z-20 hidden rounded-2xl border border-white/10 bg-[#13261c]/95 px-3.5 py-3 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.7)] backdrop-blur-md sm:block",
          "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        )}
        style={{ transitionDelay: visible ? "280ms" : "0ms" }}
      >
        <p className="mb-0.5 text-[11px] font-semibold tracking-wide text-white/45 uppercase">
          {productPreview.nextLabel}
        </p>
        <p className="font-display text-sm font-bold text-white">{productPreview.nextValue}</p>
      </div>

      <div
        className={cn(
          "relative transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]",
          visible ? "translate-y-0 animate-float" : "translate-y-6",
        )}
      >
        <div className="relative overflow-hidden rounded-[2.35rem] border border-white/15 bg-[#070f0c] p-[11px] shadow-[0_32px_70px_-22px_rgba(0,0,0,0.7)]">
          <div
            className="absolute top-3.5 left-1/2 z-20 h-[24px] w-[100px] -translate-x-1/2 rounded-full bg-black/95"
            aria-hidden="true"
          />

          <div className="relative overflow-hidden rounded-[1.7rem] bg-[#0f1f16] text-white">
            <div className="flex items-center justify-between border-b border-white/10 px-5 pt-10 pb-4">
              <div>
                <p className="text-xs font-medium tracking-wide text-white/50 uppercase">
                  {site.name}
                </p>
                <p className="font-display text-lg font-bold">{productPreview.weekLabel}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground shadow-[0_8px_24px_-8px_rgba(245,158,11,0.55)]">
                {progress}%
              </div>
            </div>

            <div className="space-y-5 p-5 pb-7">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-white/60">{productPreview.progressLabel}</span>
                  <span className="font-semibold text-primary-glow">{progress}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-primary to-primary-glow transition-[width] duration-150 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/90">
                    <Play className="h-4 w-4 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm text-white/55">{productPreview.dayLabel}</p>
                    <p className="font-display font-semibold">Plano do dia</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {productPreview.sessions.map((session) => (
                    <li
                      key={session.title}
                      className="flex items-center gap-3 rounded-xl bg-black/20 px-3 py-2.5"
                    >
                      <span
                        className={cn(
                          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                          session.done ? "bg-primary text-primary-foreground" : "bg-white/10",
                        )}
                      >
                        {session.done ? <Check className="h-3.5 w-3.5" /> : null}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{session.title}</p>
                        <p className="text-xs text-white/45">
                          {session.time} · {session.meta}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-center text-xs text-white/45">{productPreview.footerNote}</p>
            </div>

            <div className="mx-auto mb-3 h-1 w-28 rounded-full bg-white/25" aria-hidden="true" />
          </div>
        </div>

        <div
          className="pointer-events-none mx-auto mt-3 h-8 w-[70%] rounded-[100%] bg-black/45 blur-xl"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default ProductMockup;
