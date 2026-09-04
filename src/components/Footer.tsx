import { footerCopy, site } from "@/content/site";
import { withBase } from "@/lib/paths";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0f1f16] py-16 text-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(142_70%_40%/0.18),transparent_45%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" aria-hidden="true" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="mb-4 font-display text-sm font-semibold tracking-[0.22em] text-secondary uppercase">
              {footerCopy.eyebrow}
            </p>
            <div className="mb-4 flex items-center gap-3 font-display text-2xl font-bold tracking-tight">
              <img
                src={withBase("/favicon.svg")}
                alt=""
                className="h-11 w-11 rounded-[22%]"
                width={44}
                height={44}
              />
              <span>{site.name}</span>
            </div>
            <p className="max-w-md text-base leading-relaxed text-white/65">{footerCopy.blurb}</p>
          </div>

          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end"
            aria-label="Rodapé"
          >
            <a href={withBase("/")} className="text-sm font-medium text-white/80 hover:text-secondary">
              {footerCopy.home}
            </a>
            <a
              href={withBase("/privacidade")}
              className="text-sm font-medium text-white/80 hover:text-secondary"
            >
              {footerCopy.privacy}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-sm font-medium text-white/80 hover:text-secondary"
            >
              {footerCopy.contact}
            </a>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/45">
          {footerCopy.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
