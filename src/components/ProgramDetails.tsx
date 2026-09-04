import ProductMockup from "@/components/ProductMockup";
import Reveal from "@/components/Reveal";
import { productPreview, programDetails, programSection } from "@/content/site";
import { icons } from "@/lib/icons";

const ProgramDetails = () => {
  return (
    <section className="relative overflow-hidden bg-[#0f1f16] py-24 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(142_70%_40%/0.16),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" aria-hidden="true" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
          <Reveal>
            <p className="mb-4 font-display text-sm font-semibold tracking-[0.22em] text-primary-glow uppercase">
              {productPreview.eyebrow}
            </p>
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {programSection.title}
              <span className="mt-1 block text-secondary">{programSection.titleAccent}</span>
            </h2>
            <p className="mb-10 max-w-xl text-lg text-white/70 sm:text-xl">
              {programSection.description}
            </p>

            <ul className="space-y-7">
              {programDetails.map((item, index) => {
                const Icon = icons[item.icon];
                return (
                  <Reveal key={item.title} delayMs={index * 60}>
                    <li className="flex gap-4 border-l-2 border-primary/40 pl-5">
                      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/8 text-primary-glow">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-display text-lg font-bold">{item.title}</h3>
                        <p className="leading-relaxed text-white/65">{item.description}</p>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delayMs={100} className="flex justify-center lg:justify-end lg:pl-2">
            <ProductMockup className="lg:max-w-[400px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
