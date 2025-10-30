import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProgramDetails from "@/components/ProgramDetails";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import NewsletterForm from "@/components/NewsletterForm";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToForm = () => {
    document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onCtaClick={scrollToForm} />
        <div id="beneficios">
          <Benefits />
        </div>
        <div id="o-que-voce-recebe">
          <ProgramDetails />
        </div>
        <div id="depoimentos">
          <Testimonials />
        </div>
        <div id="faq">
          <Faq />
        </div>
        <NewsletterForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
