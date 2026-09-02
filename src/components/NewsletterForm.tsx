import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle, Mail, User, Sparkles } from "lucide-react";
import { toast } from "sonner";
import transformationImage from "@/assets/transformation.jpg";
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
      <section
        id="inscricao"
        className="bg-linear-to-br from-primary/5 via-background to-secondary/5 py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mx-auto max-w-2xl border-2 border-primary/50 p-8 text-center shadow-[var(--shadow-strong)]">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-primary to-primary-glow">
              <CheckCircle className="h-10 w-10 text-primary-foreground" />
            </div>
            <h3 className="mb-4 text-3xl font-bold">{formCopy.successTitle}</h3>
            <p className="mb-4 text-lg text-muted-foreground">
              Bem-vindo ao <strong className="text-primary">{site.name}</strong>, {fullname}!
            </p>
            <p className="text-muted-foreground">
              Enviamos um e-mail para <strong className="text-foreground">{email}</strong> com os
              próximos passos. Confira a caixa de entrada (e o spam) nos próximos minutos.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section
      id="inscricao"
      className="bg-linear-to-br from-primary/5 via-background to-secondary/5 py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-strong)]">
                <img
                  src={transformationImage}
                  alt="Transformação saudável"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />

                <div className="absolute right-6 bottom-6 left-6 space-y-3">
                  <Card className="bg-background/95 p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-primary to-primary-glow">
                        <Sparkles className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-bold">{formCopy.offerTitle}</div>
                        <div className="text-sm text-muted-foreground">{formCopy.offerSubtitle}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-secondary">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">{formCopy.badge}</span>
              </div>

              <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                {formCopy.title}
                <span className="block bg-linear-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  {formCopy.titleAccent}
                </span>
              </h2>

              <p className="mb-8 text-xl text-muted-foreground">{formCopy.description}</p>

              <Card className="relative border-2 border-primary/20 p-8 shadow-[var(--shadow-glow)]">
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                        className="h-12 pl-10"
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
                        className="h-12 pl-10"
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
                    <a href={withBase("/privacidade")} className="underline underline-offset-2 hover:text-primary">
                      {formCopy.privacyLinkLabel}
                    </a>
                    .
                  </p>
                </form>
              </Card>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
                {formCopy.trust.map((item) => (
                  <div key={item} className="text-center">
                    <CheckCircle className="mx-auto mb-1 h-6 w-6 text-primary" />
                    <div className="text-sm text-muted-foreground">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
