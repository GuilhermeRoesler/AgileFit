import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProgramDetails from "@/components/ProgramDetails";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import NewsletterForm from "@/components/NewsletterForm";
import { useEffect } from "react";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("inscricao");
    formElement?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Update page title and meta tags
    document.title = "Agile Fit - Emagreça com o Método Ágil | Transforme Seu Corpo em 12 Semanas";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Transforme seu corpo em 12 semanas com o método Agile Fit. Plano alimentar personalizado, treinos de 30 minutos e suporte 24/7. Mais de 10.000 alunos transformados!"
      );
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Hero onCtaClick={scrollToForm} />
      <Benefits />
      <ProgramDetails />
      <Testimonials />
      <Faq />
      <NewsletterForm />
    </main>
  );
};

export default Index;