import { Check, Play } from "lucide-react";
import { productPreview, site } from "@/content/site";
import { cn } from "@/lib/utils";

type ProductMockupProps = {
  className?: string;
};

const ProductMockup = ({ className }: ProductMockupProps) => {
  return (
    <div className={cn("relative mx-auto w-full max-w-md", className)}>
      <div
        className="absolute -inset-6 rounded-[2rem] bg-primary/15 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0f1f16] text-white shadow-[var(--shadow-strong)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-xs font-medium tracking-wide text-white/50 uppercase">
              {site.name}
            </p>
            <p className="font-display text-lg font-bold">{productPreview.weekLabel}</p>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-bold text-secondary-foreground">
            {productPreview.progressValue}%
          </div>
        </div>

        <div className="space-y-5 p-5">
          <div>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-white/60">{productPreview.progressLabel}</span>
              <span className="font-semibold text-primary-glow">
                {productPreview.progressValue}%
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-linear-to-r from-primary to-primary-glow"
                style={{ width: `${productPreview.progressValue}%` }}
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
      </div>
    </div>
  );
};

export default ProductMockup;
