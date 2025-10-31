import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Dumbbell } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#o-que-voce-recebe", label: "O Programa" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
];

const Header = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsSheetOpen(false); // Close sheet on link click
  };

  const renderNavLinks = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleScrollTo(e, link.href)}
          className="text-xl font-medium transition-colors hover:text-primary"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-24 px-6 md:px-8 transition-all duration-300",
        scrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-transparent text-white"
      )}
    >
      <a href="#" className="flex items-center gap-2 font-bold text-2xl">
        <img src="/favicon.png" alt="Agile Fit Logo" className="h-12 w-12" />
        <span>Agile Fit</span>
      </a>

      {isMobile ? (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px]">
            <nav className="flex flex-col items-start gap-6 p-6">
              {renderNavLinks()}
              <Button
                asChild
                variant="cta"
                size="lg"
                className="w-full mt-4 animate-pulse-glow"
              >
                <a href="#inscricao" onClick={(e) => handleScrollTo(e, "#inscricao")}>
                  Começar Agora
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      ) : (
        <nav className="hidden md:flex items-center gap-6">
          {renderNavLinks()}
          <Button asChild variant="cta" size="lg" className="animate-pulse-glow text-xl">
            <a href="#inscricao" onClick={(e) => handleScrollTo(e, "#inscricao")}>
              Quero Começar
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;