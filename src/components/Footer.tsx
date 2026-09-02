import { footerCopy, site } from "@/content/site";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/40 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <div className="mb-3 flex items-center gap-3 text-xl font-bold">
              <img src="/favicon.svg" alt="" className="h-10 w-10 rounded-[22%]" width={40} height={40} />
              <span>{site.name}</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">{footerCopy.blurb}</p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end"
            aria-label="Rodapé"
          >
            <a href="/" className="text-sm font-medium hover:text-primary">
              {footerCopy.home}
            </a>
            <a href="/privacidade" className="text-sm font-medium hover:text-primary">
              {footerCopy.privacy}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium hover:text-primary"
            >
              {footerCopy.contact}
            </a>
          </nav>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">{footerCopy.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;
