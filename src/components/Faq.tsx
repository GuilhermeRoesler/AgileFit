import Reveal from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqSection, faqs } from "@/content/site";

const Faq = () => {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {faqSection.title}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">{faqSection.description}</p>
        </Reveal>

        <Reveal className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="rounded-2xl border border-border/80 bg-background px-6"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default Faq;
