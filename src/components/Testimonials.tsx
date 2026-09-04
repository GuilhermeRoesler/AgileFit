import Reveal from "@/components/Reveal";
import { testimonials, testimonialsSection } from "@/content/site";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const avatarTone = (accent: "primary" | "secondary") =>
  accent === "secondary" ? "bg-secondary" : "bg-primary";

const Testimonials = () => {
  const [featured, ...others] = testimonials;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {testimonialsSection.title}
            <span className="mt-1 block text-primary">{testimonialsSection.titleAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {testimonialsSection.description}
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="relative h-full overflow-hidden rounded-3xl bg-muted/60 px-8 py-10 sm:px-12 sm:py-14">
              <div
                className="pointer-events-none absolute -top-6 left-6 font-display text-[7rem] leading-none text-primary/15 select-none"
                aria-hidden="true"
              >
                “
              </div>
              <div className="relative">
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: featured.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="mb-10 font-display text-2xl leading-snug font-semibold text-foreground sm:text-3xl">
                  {featured.content}
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-full font-display text-lg font-bold text-white",
                      avatarTone(featured.accent),
                    )}
                  >
                    {featured.initials}
                  </div>
                  <div>
                    <div className="font-display text-lg font-bold">{featured.name}</div>
                    <div className="text-muted-foreground">{featured.role}</div>
                  </div>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {others.map((testimonial, index) => (
              <Reveal key={testimonial.name} delayMs={index * 80}>
                <figure className="rounded-3xl border border-border/80 bg-background px-6 py-7">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <blockquote className="mb-6 leading-relaxed text-muted-foreground">
                    “{testimonial.content}”
                  </blockquote>
                  <figcaption className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-white",
                        avatarTone(testimonial.accent),
                      )}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
