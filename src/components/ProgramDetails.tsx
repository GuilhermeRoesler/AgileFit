import ProductMockup from "@/components/ProductMockup";
import Reveal from "@/components/Reveal";
import { productPreview, programDetails, programSection } from "@/content/site";
import { icons } from "@/lib/icons";

const ProgramDetails = () => {
  return (
    <section className="bg-[#0f1f16] py-24 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
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

            <ul className="space-y-6">
              {programDetails.map((item, index) => {
                const Icon = icons[item.icon];
                return (
                  <Reveal key={item.title} delayMs={index * 50}>
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

          <Reveal delayMs={120} className="lg:pl-4">
            <ProductMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
