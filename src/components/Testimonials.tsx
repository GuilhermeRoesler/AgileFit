import Reveal from "@/components/Reveal";
import { testimonials, testimonialsSection } from "@/content/site";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import anaPhoto from "@/assets/testimonial-ana.webp";
import joaoPhoto from "@/assets/testimonial-joao.webp";
import mariaPhoto from "@/assets/testimonial-maria.webp";
import transformationImage from "@/assets/transformation.jpg";

const photos = {
  maria: mariaPhoto,
  joao: joaoPhoto,
  ana: anaPhoto,
} as const;

const Testimonials = () => {
  const [featured, ...others] = testimonials;

  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,hsl(28_90%_50%/0.06),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {testimonialsSection.title}
            <span className="mt-1 block text-primary">{testimonialsSection.titleAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {testimonialsSection.description}
          </p>
        </Reveal>

        <Reveal className="mb-12">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-muted/30">
            <div
              className="pointer-events-none absolute inset-0 bg-noise opacity-40 mix-blend-multiply"
              aria-hidden="true"
            />
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <div className="relative min-h-[220px] md:min-h-[280px]">
                <img
                  src={transformationImage}
                  alt={testimonialsSection.proofImageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#0f1f16]/15 to-[#0f1f16]/50" />
              </div>
              <div className="relative flex flex-col justify-center gap-6 px-6 py-8 sm:px-10">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
                  {testimonialsSection.proofEyebrow}
                </p>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
                  {testimonialsSection.proofStats.map((stat) => (
                    <div key={stat.label} className="min-w-0">
                      <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-[1.65rem]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm leading-snug text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
                  <img
                    src={photos[featured.photo]}
                    alt=""
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20"
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                  />
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
                    <img
                      src={photos[testimonial.photo]}
                      alt=""
                      className={cn("h-11 w-11 rounded-full object-cover ring-2", {
                        "ring-primary/20": testimonial.accent === "primary",
                        "ring-secondary/25": testimonial.accent === "secondary",
                      })}
                      width={44}
                      height={44}
                      loading="lazy"
                      decoding="async"
                    />
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
