# <img src="public/favicon.png" width="30" align="center"> Agile Fit 💪

> Transforme o seu corpo em 12 semanas com o Método Ágil.

O **Agile Fit** é uma landing page de alta performance desenvolvida para promover e vender um programa de emagrecimento online. O projeto foca numa experiência de utilizador fluida, design responsivo moderno e boas práticas de desenvolvimento web.

![](public/demo.png)

## 🚀 Sobre o Projeto

Este projeto é uma aplicação Single Page Application (SPA) que serve como o principal ponto de contacto para potenciais clientes do método Agile Fit. A página inclui diversas secções estratégicas para conversão, incluindo apresentação do método, benefícios, prova social (depoimentos), FAQ e captura de leads.

### Funcionalidades Principais

- **Hero Section Imersiva**: Destaque visual com Call-to-Action (CTA) claro.
- **Apresentação de Benefícios**: Cards informativos sobre as vantagens do programa.
- **Detalhes do Programa**: Explicação do método de 12 semanas.
- **Prova Social**: Secção de depoimentos para aumentar a credibilidade.
- **FAQ Interativo**: Respostas às dúvidas mais comuns com componentes accordion.
- **Formulário de Inscrição/Newsletter**: Validação robusta e feedback visual imediato.
- **Design Responsivo**: Otimizado para telemóveis, tablets e desktops.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com uma stack moderna focada em performance e escalabilidade:

- **Core**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/) (baseado em Radix UI)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Gestão de Estado (Server)**: [TanStack Query](https://tanstack.com/query/latest)
- **Formulários**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) (para validação)
- **Notificações**: [Sonner](https://sonner.emilkowal.ski/)

## 📂 Estrutura do Projeto

A estrutura de pastas segue as melhores práticas para aplicações React escaláveis:

```bash
src/
├── assets/        # Imagens e recursos estáticos (hero images, logos)
├── components/    # Componentes React reutilizáveis
│   ├── ui/        # Componentes base do shadcn/ui (Button, Card, Input, etc.)
│   └── ...        # Componentes específicos (Hero, Benefits, Header, etc.)
├── hooks/         # Custom React hooks (use-toast, use-mobile)
├── lib/           # Funções utilitárias (utils.ts)
├── pages/         # Componentes de página (Index, NotFound)
└── App.tsx        # Configuração principal de rotas e providers
```

## 🏁 Como Começar

Siga estas instruções para configurar o projeto localmente.

### Pré-requisitos

- Node.js (versão 18 ou superior recomendada)
- npm, pnpm ou yarn

### Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/GuilhermeRoesler/AgileFit
cd agilefit
```

2. **Instale as dependências:**

```bash
npm install
# ou
pnpm install
```

3. **Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

4. **Aceda à aplicação:**
   Abra o seu navegador em `http://localhost:8080` (ou a porta indicada no terminal).

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria a build de produção na pasta `dist`.
- `npm run preview`: Visualiza a build de produção localmente.
- `npm run lint`: Executa o ESLint para verificar a qualidade do código.

## 🎨 Personalização

### Adicionar novos componentes UI

Este projeto utiliza `shadcn/ui`. Para adicionar novos componentes base, não os crie do zero. Verifique a documentação e instale conforme necessário (se estiver a usar a CLI do shadcn) ou copie o código para a pasta `src/components/ui`.

### Estilos Globais

As variáveis de CSS globais e configurações do Tailwind encontram-se em `src/index.css` e `tailwind.config.ts`.

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para a sua Feature (`git checkout -b feature/MinhaFeature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Adiciona: MinhaFeature'`)
4. Faça o Push para a Branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

Desenvolvido para **Agile Fit**.
