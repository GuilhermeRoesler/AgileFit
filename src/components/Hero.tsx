import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mulher fitness comemorando resultados"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <Star className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold">O favorito de mais de 10.000 alunas</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight [text-shadow:_0_4px_8px_rgba(0,0,0,0.4)]">
            O Fim da Luta Contra a Balança
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mt-2">
              Começa Agora
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            Junte-se ao método que já transformou milhares de corpos e recuperou a autoestima. Chega de dietas malucas e treinos chatos.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="xl"
              variant="cta"
              onClick={onCtaClick}
              className="group text-lg shadow-[var(--shadow-strong)] hover:shadow-primary/50 animate-pulse-glow"
            >
              Quero Minha Transformação
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits List */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "Plano alimentar delicioso",
              "Treinos rápidos de 30 min",
              "Comunidade VIP de apoio",
              "Resultados em 21 dias",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-sm bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-sm">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;