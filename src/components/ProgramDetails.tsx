import { Card } from "@/components/ui/card";
import { Dumbbell, UtensilsCrossed, Video, Users, CalendarCheck } from "lucide-react";

const details = [
  {
    icon: Dumbbell,
    title: "Treinos Eficientes",
    description: "Sequências de 30 minutos para fazer em casa, focadas em queima de gordura e definição muscular.",
  },
  {
    icon: UtensilsCrossed,
    title: "Cardápio Flexível",
    description: "Plano alimentar com receitas fáceis e deliciosas. Coma bem sem passar fome e com opções para todos os gostos.",
  },
  {
    icon: Video,
    title: "Videoaulas Detalhadas",
    description: "Acesso a uma plataforma completa com vídeos explicando cada exercício para você treinar com segurança.",
  },
  {
    icon: Users,
    title: "Comunidade Exclusiva",
    description: "Grupo VIP com outras alunas para trocar experiências, tirar dúvidas e manter a motivação sempre em alta.",
  },
  {
    icon: CalendarCheck,
    title: "Planejamento Semanal",
    description: "Organize sua rotina de treinos e alimentação com nosso planner exclusivo para não perder o foco.",
  },
];

const ProgramDetails = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Tudo Que Você Precisa Para
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Sua Transformação
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Um método completo que une treino, nutrição e mentalidade para resultados definitivos.
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center items-center flex flex-col hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{detail.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {detail.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;