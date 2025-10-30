import { Card } from "@/components/ui/card";
import { Target, Clock, Users, TrendingUp, Heart, Award } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Método Comprovado",
    description: "Sistema testado e aprovado por milhares de alunos com resultados garantidos.",
  },
  {
    icon: Clock,
    title: "Treinos Rápidos",
    description: "Apenas 30 minutos por dia. Perfeito para quem tem rotina agitada.",
  },
  {
    icon: Users,
    title: "Comunidade VIP",
    description: "Acesso ao grupo exclusivo com suporte e motivação 24 horas por dia.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Rápidos",
    description: "Veja mudanças reais em apenas 21 dias seguindo o plano corretamente.",
  },
  {
    icon: Heart,
    title: "Nutrição Equilibrada",
    description: "Cardápio saudável sem passar fome. Aprenda a comer de forma inteligente.",
  },
  {
    icon: Award,
    title: "Certificado Digital",
    description: "Receba seu certificado de conclusão ao finalizar o programa.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Por Que Escolher o
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Agile Fit?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Um programa completo pensado para você alcançar seus objetivos de forma sustentável e definitiva.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
