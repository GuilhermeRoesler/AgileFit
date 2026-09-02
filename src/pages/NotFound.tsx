import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/paths";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
      <p className="mb-6 text-xl text-muted-foreground">Página não encontrada</p>
      <Button asChild variant="cta">
        <a href={withBase("/")}>Voltar para a página inicial</a>
      </Button>
    </div>
  </div>
);

export default NotFound;
