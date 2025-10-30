import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso de equipamentos para fazer os treinos?",
    answer:
      "Não! A maioria dos treinos do Agile Fit foi desenhada para ser feita em casa, usando apenas o peso do corpo. Alguns exercícios podem ter variações com acessórios simples como elásticos ou halteres, mas não são obrigatórios.",
  },
  {
    question: "Não tenho muito tempo. Os treinos são longos?",
    answer:
      "De forma alguma! O método se baseia em treinos rápidos e intensos de, no máximo, 30 minutos por dia. É perfeito para quem tem uma rotina corrida mas não abre mão de se cuidar.",
  },
  {
    question: "Vou passar fome com a dieta?",
    answer:
      "Nunca! Nossa filosofia é de reeducação alimentar, não de restrição. Você terá um cardápio flexível, com receitas saborosas e nutritivas que te deixarão saciada e com energia.",
  },
  {
    question: "E se eu não gostar do programa?",
    answer:
      "Estamos tão confiantes nos resultados que oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não se adaptar, basta solicitar o reembolso e devolvemos 100% do seu investimento.",
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer:
      "O acesso à plataforma, treinos e comunidade é vitalício! Você compra uma vez e pode acessar para sempre, incluindo todas as futuras atualizações do programa, sem custo adicional.",
  },
];

const Faq = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo o que você precisa saber antes de começar sua jornada de transformação.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;