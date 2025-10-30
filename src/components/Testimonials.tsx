import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { testimonials } from "@/content/site";

const Testimonials = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Histórias de
            <span className="block bg-linear-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Sucesso Real
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos alunos estão dizendo sobre suas transformações
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                ))}
              </div>

              <p className="mb-6 leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 bg-linear-to-br from-primary to-primary-glow">
                  <AvatarFallback className="bg-transparent font-bold text-primary-foreground">
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
