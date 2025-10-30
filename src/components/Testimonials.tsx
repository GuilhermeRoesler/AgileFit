import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Perdeu 15kg em 3 meses",
    content: "O Agile Fit mudou minha vida! Consegui emagrecer sem passar fome e com treinos que cabem na minha rotina. Recomendo demais!",
    rating: 5,
    initials: "MS",
  },
  {
    name: "João Santos",
    role: "Perdeu 22kg em 5 meses",
    content: "Já tentei várias dietas e nunca deu certo. Com o método Agile Fit aprendi a me alimentar corretamente e os resultados são incríveis!",
    rating: 5,
    initials: "JS",
  },
  {
    name: "Ana Costa",
    role: "Perdeu 10kg em 2 meses",
    content: "A comunidade é o diferencial! Sempre tem alguém para motivar e tirar dúvidas. Me sinto parte de uma família fitness.",
    rating: 5,
    initials: "AC",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Histórias de
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Sucesso Real
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos alunos estão dizendo sobre suas transformações
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow">
                  <AvatarFallback className="bg-transparent text-primary-foreground font-bold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
