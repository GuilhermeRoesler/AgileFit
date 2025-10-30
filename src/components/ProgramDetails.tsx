import FeatureGrid from "@/components/FeatureGrid";
import { programDetails } from "@/content/site";

const ProgramDetails = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Tudo Que Você Precisa Para
            <span className="block bg-linear-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Sua Transformação
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Um método completo que une treino, nutrição e mentalidade para resultados definitivos.
          </p>
        </div>

        <FeatureGrid items={programDetails} variant="center" />
      </div>
    </section>
  );
};

export default ProgramDetails;
