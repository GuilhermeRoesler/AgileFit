# Agile Fit

Landing page para o programa de emagrecimento **Agile Fit** — SPA responsiva com foco em conversão de leads.

![](docs/screenshots/demo.png)

## Sobre o projeto

Página única com navegação por âncoras, apresenta o método, benefícios, depoimentos, FAQ e formulário de inscrição. Os leads são enviados para uma API PHP externa. Inclui página de privacidade (LGPD).

### Seções

- Hero com CTA principal
- Benefícios e detalhes do programa
- Depoimentos e FAQ interativo
- Formulário de captura de leads com feedback via toast
- Rodapé e política de privacidade

## Stack

- **React 19** + **Vite 8** + **TypeScript 5.9** (strict)
- **Tailwind CSS 4** + **shadcn/ui** (Button, Card, Input, Sheet, Accordion, Avatar)
- **Sonner 2** (notificações)
- **Lucide React** (ícones)
- **Lenis** (scroll suave)
- **Vitest** (testes unitários)

## Estrutura

```bash
src/
├── assets/          # Imagens da landing page
├── components/      # Seções da página (Hero, Header, FAQ, etc.)
│   └── ui/          # Componentes shadcn/ui em uso
├── content/         # Copy e claims centralizados
├── hooks/           # use-mobile, use-smooth-scroll, use-reveal
├── lib/             # Utilitários, leads API, validação
├── pages/           # Index, Privacy, NotFound
└── App.tsx          # Roteamento leve + Toaster
```

## Como rodar

**Pré-requisitos:** Node.js 20+

```bash
git clone https://github.com/GuilhermeRoesler/AgileFit.git
cd AgileFit
npm install
npm run dev
```

Acesse `http://localhost:5173`.

### Variáveis de ambiente

Copie `.env.example` para `.env.production` (ou `.env`) e ajuste:

```bash
VITE_BASE_PATH=/
VITE_SITE_URL=https://example.com
VITE_LEADS_API_URL=https://example.com/api/leads
```

- `VITE_BASE_PATH` — prefixo público (`/` em domínio raiz; `/AgileFit/` no GitHub Pages de projeto)
- `VITE_SITE_URL` — meta tags OG/Twitter, canonical, sitemap e robots no build
- `VITE_LEADS_API_URL` — endpoint do formulário de leads

## CI/CD (GitHub Actions)

O workflow [`.github/workflows/ci.yml`](.github/workflows/ci.yml) roda em PRs e no `main`:

1. **Quality** — `typecheck`, `lint`, `test` e `build`
2. **Deploy** (só em `main`/`master`) — build com base do Pages e publicação no GitHub Pages

### Ativar o deploy

1. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. (Opcional) **Settings → Secrets and variables → Actions**
   - Secret `VITE_LEADS_API_URL` — URL real da API de leads
   - Variable `VITE_SITE_URL` — URL canônica (padrão: `https://<user>.github.io/<repo>`)
   - Variable `VITE_BASE_PATH` — padrão `/<repo>/`; use `/` se houver domínio customizado na raiz

URL padrão do site: `https://guilhermeroesler.github.io/AgileFit/`

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Preview da build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm test` | Testes unitários (Vitest) |
| `npm run test:watch` | Vitest em modo watch |
| `npm run optimize:images` | Comprime hero, transformação, demo e favicon |

## API de leads

O formulário envia `POST` para `VITE_LEADS_API_URL` com os campos `fullname` e `email`. A resposta esperada é JSON: `{ ok: boolean, message?: string }`.

Há honeypot no cliente; a validação definitiva deve permanecer no servidor.

## SEO

- `robots.txt` e `sitemap.xml` gerados no build com `VITE_SITE_URL`
- Meta tags OG/Twitter + `canonical` / `og:url`
- `404.html` gerado no build para SPA no GitHub Pages
- `.htaccess` com fallback SPA para Apache (rotas como `/privacidade`)

## Personalização

- Copy: `src/content/site.ts`
- Estilos globais e tema: `src/index.css` (`@theme inline`)
- Novos componentes shadcn: instale via [CLI shadcn/ui](https://ui.shadcn.com/) (Tailwind v4)

---

Desenvolvido para **Agile Fit**.
