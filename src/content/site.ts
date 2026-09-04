/** Conteúdo centralizado da landing — única fonte para copy e claims. */

export const site = {
  name: "Agile Fit",
  tagline: "Emagreça com o Método Ágil",
  studentsCount: "10.000",
  programWeeks: 12,
  firstResultsDays: 21,
  guaranteeDays: 7,
  trialDays: 7,
  email: "contato@example.com",
} as const;

export const navLinks = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#o-que-voce-recebe", label: "O Programa" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
] as const;

export const hero = {
  headline: "O Fim da Luta Contra a Balança",
  headlineAccent: "Começa Agora",
  subheadline:
    "Método completo de treino, nutrição e mentalidade — resultados iniciais em 21 dias, programa de 12 semanas.",
  cta: "Quero Minha Transformação",
  imageAlt: "Mulher fitness comemorando resultados",
} as const;

export const benefitsSection = {
  title: "Por Que o Agile Fit",
  titleAccent: "Realmente Funciona?",
  description:
    "Um programa completo pensado para você alcançar seus objetivos de forma sustentável e definitiva.",
} as const;

export const benefits = [
  {
    icon: "Target" as const,
    title: "Método Comprovado",
    description: `Sistema testado por mais de ${site.studentsCount} alunos com resultados consistentes.`,
  },
  {
    icon: "Clock" as const,
    title: "Treinos Rápidos",
    description: "Apenas 30 minutos por dia. Perfeito para quem tem rotina agitada.",
  },
  {
    icon: "Users" as const,
    title: "Comunidade VIP",
    description: "Acesso ao grupo exclusivo com suporte e motivação todos os dias.",
  },
  {
    icon: "TrendingUp" as const,
    title: "Resultados em 21 Dias",
    description: `Veja mudanças reais em ${site.firstResultsDays} dias seguindo o plano corretamente.`,
  },
  {
    icon: "Heart" as const,
    title: "Nutrição Equilibrada",
    description: "Cardápio saudável sem passar fome. Aprenda a comer de forma inteligente.",
  },
  {
    icon: "Award" as const,
    title: "Acesso Vitalício",
    description: "No programa completo: pague uma vez e tenha acesso para sempre, com atualizações.",
  },
];

export const programSection = {
  title: "Tudo Que Você Precisa Para",
  titleAccent: "Sua Transformação",
  description:
    "Um método completo que une treino, nutrição e mentalidade para resultados definitivos.",
} as const;

export const programDetails = [
  {
    icon: "Dumbbell" as const,
    title: "Treinos Eficientes",
    description:
      "Sequências de 30 minutos para fazer em casa, focadas em queima de gordura e definição muscular.",
  },
  {
    icon: "UtensilsCrossed" as const,
    title: "Cardápio Flexível",
    description:
      "Plano alimentar com receitas fáceis e deliciosas. Coma bem sem passar fome e com opções para todos os gostos.",
  },
  {
    icon: "Video" as const,
    title: "Videoaulas Detalhadas",
    description:
      "Acesso a uma plataforma completa com vídeos explicando cada exercício para você treinar com segurança.",
  },
  {
    icon: "Users" as const,
    title: "Comunidade Exclusiva",
    description:
      "Grupo VIP para trocar experiências, tirar dúvidas e manter a motivação sempre em alta.",
  },
  {
    icon: "CalendarCheck" as const,
    title: "Planejamento Semanal",
    description:
      "Organize sua rotina de treinos e alimentação com nosso planner exclusivo para não perder o foco.",
  },
  {
    icon: "BrainCircuit" as const,
    title: "Mentalidade Vencedora",
    description:
      "Desenvolva o foco e a disciplina para não desistir e manter seus resultados a longo prazo.",
  },
];

export const productPreview = {
  eyebrow: "Dentro da plataforma",
  weekLabel: "Semana 3 de 12",
  dayLabel: "Hoje · Treino HIIT",
  progressLabel: "Progresso do ciclo",
  progressValue: 58,
  sessions: [
    { time: "08:00", title: "Ativação metabólica", meta: "12 min", done: true },
    { time: "12:30", title: "Almoço do cardápio B", meta: "420 kcal", done: true },
    { time: "19:00", title: "HIIT full body", meta: "30 min", done: false },
  ],
  footerNote: "Planner + videoaulas + comunidade em um só lugar",
} as const;

export const testimonialsSection = {
  title: "Histórias de",
  titleAccent: "Sucesso Real",
  description: "Veja o que nossos alunos estão dizendo sobre suas transformações",
  proofEyebrow: "Resultados reais",
  proofImageAlt: "Refeição saudável do método Agile Fit",
  proofStats: [
    { value: `+${site.studentsCount}`, label: "alunos no método" },
    { value: `${site.firstResultsDays} dias`, label: "para primeiros resultados" },
    { value: `${site.programWeeks} sem.`, label: "de transformação" },
  ],
} as const;

export const testimonials = [
  {
    name: "Maria Silva",
    role: "Perdeu 15kg em 3 meses",
    content:
      "O Agile Fit mudou minha vida! Consegui emagrecer sem passar fome e com treinos que cabem na minha rotina. Recomendo demais!",
    rating: 5,
    photo: "maria" as const,
    accent: "primary" as const,
  },
  {
    name: "João Santos",
    role: "Perdeu 22kg em 5 meses",
    content:
      "Já tentei várias dietas e nunca deu certo. Com o método Agile Fit aprendi a me alimentar corretamente e os resultados são incríveis!",
    rating: 5,
    photo: "joao" as const,
    accent: "secondary" as const,
  },
  {
    name: "Ana Costa",
    role: "Perdeu 10kg em 2 meses",
    content:
      "A comunidade é o diferencial! Sempre tem alguém para motivar e tirar dúvidas. Me sinto parte de uma família fitness.",
    rating: 5,
    photo: "ana" as const,
    accent: "primary" as const,
  },
] as const;

export const faqSection = {
  title: "Dúvidas Frequentes",
  description: "Tudo o que você precisa saber antes de começar sua jornada de transformação.",
} as const;

export const faqs = [
  {
    question: "Preciso de equipamentos para fazer os treinos?",
    answer:
      "Não! A maioria dos treinos do Agile Fit foi desenhada para ser feita em casa, usando apenas o peso do corpo. Alguns exercícios podem ter variações com acessórios simples como elásticos ou halteres, mas não são obrigatórios.",
  },
  {
    question: "Não tenho muito tempo. Os treinos são longos?",
    answer:
      "De forma alguma! O método se baseia em treinos rápidos e intensos de, no máximo, 30 minutos por dia. É perfeito para quem tem uma rotina corrida mas não abre mão de se cuidar.",
  },
  {
    question: "Vou passar fome com a dieta?",
    answer:
      "Nunca! Nossa filosofia é de reeducação alimentar, não de restrição. Você terá um cardápio flexível, com receitas saborosas e nutritivas que te deixarão saciado(a) e com energia.",
  },
  {
    question: "A inscrição nesta página é paga?",
    answer: `Não. Aqui você se cadastra gratuitamente para receber o plano introdutório de ${site.trialDays} dias por e-mail. O programa completo de ${site.programWeeks} semanas é opcional e apresentado depois, com transparência sobre valores.`,
  },
  {
    question: "E se eu não gostar do programa completo?",
    answer: `Oferecemos garantia incondicional de ${site.guaranteeDays} dias na compra do programa completo. Se por qualquer motivo você não se adaptar, basta solicitar o reembolso e devolvemos 100% do investimento.`,
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo do programa completo?",
    answer:
      "O acesso à plataforma, treinos e comunidade é vitalício. Você adquire uma vez e pode acessar para sempre, incluindo atualizações futuras, sem custo adicional.",
  },
] as const;

export const formCopy = {
  badge: "Plano gratuito de 7 dias",
  title: "Comece Sua",
  titleAccent: "Transformação Agora",
  description: `Inscreva-se gratuitamente e receba um plano de ${site.trialDays} dias para iniciar sua jornada. Sem cartão de crédito.`,
  submit: "Quero Começar Agora!",
  submitting: "Processando...",
  consent: `Ao se inscrever, você concorda em receber e-mails sobre emagrecimento saudável e com nossa`,
  privacyLinkLabel: "Política de Privacidade",
  trust: ["100% Seguro", "Sem cartão de crédito", "Cancele os e-mails quando quiser"] as const,
  offerTitle: "Oferta Limitada",
  offerSubtitle: "20% OFF no programa completo nas primeiras 24h",
  successTitle: "Inscrição Confirmada!",
} as const;

export const footerCopy = {
  eyebrow: "Método ágil. Corpo novo.",
  blurb: `Programa de emagrecimento com treinos de 30 minutos, nutrição e comunidade. Resultados iniciais em ${site.firstResultsDays} dias.`,
  privacy: "Privacidade",
  home: "Início",
  contact: "Contato",
  rights: `© ${new Date().getFullYear()} ${site.name}. Todos os direitos reservados.`,
} as const;

export const privacyCopy = {
  title: "Política de Privacidade",
  updated: "Última atualização: setembro de 2026",
  sections: [
    {
      heading: "1. Quem somos",
      body: `O ${site.name} (“nós”) opera a landing page e o formulário de inscrição em nosso site. Contato: ${site.email}.`,
    },
    {
      heading: "2. Dados que coletamos",
      body: "Coletamos nome completo e endereço de e-mail quando você se inscreve para receber o plano introdutório e comunicações sobre o programa.",
    },
    {
      heading: "3. Finalidade",
      body: "Usamos seus dados para enviar o material solicitado, comunicar sobre o programa Agile Fit e melhorar nossa comunicação. Não vendemos seus dados a terceiros.",
    },
    {
      heading: "4. Base legal (LGPD)",
      body: "O tratamento se fundamenta no consentimento (art. 7º, I, da Lei nº 13.709/2018 — LGPD), manifestado ao enviar o formulário.",
    },
    {
      heading: "5. Seus direitos",
      body: `Você pode solicitar acesso, correção, exclusão ou revogação do consentimento pelo e-mail ${site.email}. Também pode cancelar o recebimento de e-mails pelos links de descadastro.`,
    },
    {
      heading: "6. Retenção e segurança",
      body: "Mantemos os dados apenas pelo tempo necessário às finalidades acima e adotamos medidas razoáveis de proteção. O envio ocorre via HTTPS para nosso servidor de inscrição.",
    },
  ],
} as const;
