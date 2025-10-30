import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Transformação fitness - Agile Fit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-primary/20">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-semibold">Método Comprovado</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Emagreça com
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Método Ágil
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Transforme seu corpo em <strong className="text-foreground">apenas 12 semanas</strong> com o método que já ajudou mais de 10.000 pessoas a alcançarem seus objetivos.
          </p>

          {/* Benefits List */}
          <ul className="space-y-3 mb-8">
            {[
              "Plano alimentar personalizado",
              "Treinos de 30 minutos",
              "Suporte 24/7 no grupo VIP",
              "Resultados em 21 dias",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 text-lg">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="xl"
              variant="cta"
              onClick={onCtaClick}
              className="group"
            >
              Começar Minha Transformação
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              onClick={onCtaClick}
            >
              Ver Depoimentos
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex items-center gap-6 flex-wrap">
            <div>
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Alunos</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-muted-foreground">Avaliação</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
