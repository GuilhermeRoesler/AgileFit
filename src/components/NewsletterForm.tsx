import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle, Mail, User, Sparkles } from "lucide-react";
import { toast } from "sonner";
import transformationImage from "@/assets/transformation.jpg";

const NewsletterForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!fullname.trim() || !email.trim()) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Por favor, insira um email válido");
      return;
    }

    setIsSubmitting(true);

    // Preparar dados para o PHP
    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('email', email);

    // Chamada real da API com fetch
    fetch('submit.php', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          // Trata erros de servidor (ex: 500)
          toast.error(response.statusText)
          throw new Error(`Erro no servidor: ${response.statusText}`);
        }
        return response.json(); // Converte a resposta para JSON
      })
      .then(data => {
        // 'data' é o JSON retornado pelo PHP: {ok: boolean, message: string}
        if (data.ok) {
          // Sucesso (veio do PHP)
          setIsSubmitted(true);
          setIsSubmitting(false);
          toast.success("Inscrição realizada com sucesso! Confira seu email.");
          // Mostra estado de sucesso no botão
        } else {
          // Erro (veio do PHP, ex: "E-mail inválido.")
          toast.error(data.message);
          throw new Error(data.message);
        }
      })
      .catch(error => {
        // Trata qualquer erro (seja do 'throw' acima ou falha de rede)
        console.error('Erro no envio:', error);
      });
  };

  if (isSubmitted) {
    return (
      <section id="inscricao" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto p-8 text-center border-2 border-primary/50 shadow-[var(--shadow-strong)]">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Inscrição Confirmada! 🎉</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Bem-vindo ao <strong className="text-primary">Agile Fit</strong>, {fullname}!
            </p>
            <p className="text-muted-foreground">
              Enviamos um email para <strong className="text-foreground">{email}</strong> com os próximos passos.
              Confira sua caixa de entrada (e spam também) nos próximos minutos.
            </p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="inscricao" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
                <img
                  src={transformationImage}
                  alt="Transformação saudável"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6 space-y-3">
                  <Card className="p-4 bg-background/95 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-bold">Oferta Limitada</div>
                        <div className="text-sm text-muted-foreground">20% OFF nas primeiras 24h</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">Vagas Limitadas</span>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Comece Sua
                <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Transformação Agora
                </span>
              </h2>

              <p className="text-xl text-muted-foreground mb-8">
                Inscreva-se gratuitamente e receba um plano de 7 dias para começar sua jornada rumo ao corpo dos seus sonhos.
              </p>

              <Card className="p-8 border-2 border-primary/20 shadow-[var(--shadow-glow)]">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Nome Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="pl-10 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12"
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
                    {isSubmitting ? "Processando..." : "Quero Começar Agora! 🚀"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Ao se inscrever, você concorda em receber emails com conteúdo sobre emagrecimento saudável. Sem spam, prometido! 🤝
                  </p>
                </form>
              </Card>

              {/* Trust Badges */}
              <div className="mt-8 flex items-center justify-center gap-8 flex-wrap">
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-1" />
                  <div className="text-sm text-muted-foreground">100% Seguro</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-1" />
                  <div className="text-sm text-muted-foreground">Sem Cobrança</div>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mb-1" />
                  <div className="text-sm text-muted-foreground">Cancele Quando Quiser</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;
