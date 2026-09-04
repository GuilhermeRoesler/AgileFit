import Reveal from "@/components/Reveal";
import { benefits, benefitsSection } from "@/content/site";
import { icons } from "@/lib/icons";

const Benefits = () => {
  const [featured, ...rest] = benefits;
  const FeaturedIcon = icons[featured.icon];

  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(142_70%_40%/0.08),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {benefitsSection.title}
            <span className="mt-1 block text-primary">{benefitsSection.titleAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {benefitsSection.description}
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <article className="flex h-full flex-col justify-between rounded-3xl bg-primary px-8 py-10 text-primary-foreground">
              <div>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <FeaturedIcon className="h-7 w-7" />
                </div>
                <p className="mb-3 font-display text-sm font-semibold tracking-[0.2em] text-white/70 uppercase">
                  01
                </p>
                <h3 className="mb-4 font-display text-3xl font-bold leading-tight">
                  {featured.title}
                </h3>
                <p className="text-lg leading-relaxed text-white/85">{featured.description}</p>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:col-span-7">
            {rest.map((item, index) => {
              const Icon = icons[item.icon];
              return (
                <Reveal key={item.title} delayMs={index * 60} className="bg-background">
                  <article className="flex h-full flex-col gap-4 p-7 transition-colors hover:bg-muted/40">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-display text-sm font-semibold text-muted-foreground/70">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold">{item.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{item.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
