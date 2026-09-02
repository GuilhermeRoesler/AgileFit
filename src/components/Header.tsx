import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/content/site";

const Header = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsSheetOpen(false);
  };

  const linkClass = "text-base font-medium transition-colors hover:text-primary";

  const renderNavLinks = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={(e) => handleScrollTo(e, link.href)}
          className={linkClass}
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 flex h-20 items-center justify-between px-6 transition-all duration-300 md:px-8",
        scrolled ? "bg-background/95 text-foreground shadow-md backdrop-blur-sm" : "bg-transparent text-white",
      )}
    >
      <a href="/" className="flex items-center gap-3 text-2xl font-bold">
        <img src="/favicon.svg" alt="" className="h-12 w-12 rounded-[22%]" width={48} height={48} />
        <span>{site.name}</span>
      </a>

      {isMobile ? (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Abrir menu de navegação"
              className={cn(!scrolled && "text-white hover:bg-white/10 hover:text-white")}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px]">
            <nav className="flex flex-col items-start gap-6 p-6" aria-label="Principal">
              {renderNavLinks()}
              <Button asChild variant="cta" size="lg" className="mt-4 w-full">
                <a href="#inscricao" onClick={(e) => handleScrollTo(e, "#inscricao")}>
                  Começar Agora
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      ) : (
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {renderNavLinks()}
          <Button asChild variant="cta" className="text-base">
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
