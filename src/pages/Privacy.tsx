import { Button } from "@/components/ui/button";
import { privacyCopy, site } from "@/content/site";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3 text-xl font-bold">
            <img src="/favicon.svg" alt="" className="h-10 w-10 rounded-[22%]" width={40} height={40} />
            <span>{site.name}</span>
          </a>
          <Button asChild variant="outline">
            <a href="/">Voltar</a>
          </Button>
        </div>
      </header>

      <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-2 text-4xl font-bold">{privacyCopy.title}</h1>
        <p className="mb-10 text-sm text-muted-foreground">{privacyCopy.updated}</p>

        <div className="space-y-8">
          {privacyCopy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="mb-2 text-xl font-semibold">{section.heading}</h2>
              <p className="leading-relaxed text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
};

export default Privacy;
