import FeatureGrid from "@/components/FeatureGrid";
import { benefits } from "@/content/site";

const Benefits = () => {
  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Por Que o Agile Fit
            <span className="block bg-linear-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Realmente Funciona?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Um programa completo pensado para você alcançar seus objetivos de forma sustentável e
            definitiva.
          </p>
        </div>

        <FeatureGrid items={benefits} />
      </div>
    </section>
  );
};

export default Benefits;
