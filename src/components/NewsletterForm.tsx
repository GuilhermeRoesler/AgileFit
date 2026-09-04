import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Mail, User } from "lucide-react";
import { toast } from "sonner";
import { transformationImage } from "@/lib/images";
import { formCopy, site } from "@/content/site";
import { isValidEmail } from "@/lib/email";
import { submitLead } from "@/lib/leads";
import { withBase } from "@/lib/paths";

const NewsletterForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = fullname.trim();
    const mail = email.trim();

    if (!name || !mail) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    if (!isValidEmail(mail)) {
      toast.error("Por favor, insira um e-mail válido");
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsSubmitting(true);

    try {
      const data = await submitLead(
        { fullname: name, email: mail, website },
        controller.signal,
      );

      if (data.ok) {
        setIsSubmitted(true);
        toast.success("Inscrição realizada com sucesso! Confira seu e-mail.");
      } else {
        toast.error(data.message ?? "Não foi possível concluir a inscrição.");
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      console.error("Erro no envio:", error);
      toast.error("Falha ao enviar. Tente novamente em alguns instantes.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="inscricao" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl border border-primary/25 bg-background px-8 py-12 text-center shadow-[var(--shadow-glow)]">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="mb-4 font-display text-3xl font-bold">{formCopy.successTitle}</h3>
            <p className="mb-4 text-lg text-muted-foreground">
              Bem-vindo ao <strong className="text-primary">{site.name}</strong>, {fullname}!
            </p>
            <p className="text-muted-foreground">
              Enviamos um e-mail para <strong className="text-foreground">{email}</strong> com os
              próximos passos. Confira a caixa de entrada (e o spam) nos próximos minutos.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-border bg-background shadow-[var(--shadow-glow)]">
          <div className="grid lg:grid-cols-2">
            <Reveal className="relative min-h-[320px] lg:min-h-full">
              <img
                src={transformationImage.src}
                srcSet={transformationImage.srcSet}
                sizes={transformationImage.sizes}
                alt="Alimentação saudável do método Agile Fit"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f1f16]/90 via-[#0f1f16]/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="mb-2 font-display text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
                  {formCopy.offerTitle}
                </p>
                <p className="font-display text-2xl font-bold leading-snug">
                  {formCopy.offerSubtitle}
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={80} className="px-6 py-10 sm:px-10 sm:py-12">
              <p className="mb-4 inline-flex rounded-full bg-secondary px-3.5 py-1.5 text-sm font-semibold text-secondary-foreground shadow-[0_8px_20px_-10px_rgba(245,158,11,0.55)]">
                {formCopy.badge}
              </p>

              <h2 className="mb-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {formCopy.title}
                <span className="mt-1 block text-primary">{formCopy.titleAccent}</span>
              </h2>

              <p className="mb-8 text-lg text-muted-foreground">{formCopy.description}</p>

              <form onSubmit={handleSubmit} className="relative space-y-5" noValidate>
                <div
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                  aria-hidden="true"
                >
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="name"
                      name="fullname"
                      type="text"
                      placeholder="Seu nome"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      className="h-12 rounded-xl pl-10"
                      autoComplete="name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 rounded-xl pl-10"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? formCopy.submitting : formCopy.submit}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  {formCopy.consent}{" "}
                  <a
                    href={withBase("/privacidade")}
                    className="underline underline-offset-2 hover:text-primary"
                  >
                    {formCopy.privacyLinkLabel}
                  </a>
                  .
                </p>
              </form>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {formCopy.trust.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
