---
name: agilefit-overview
description: >-
  Visão geral da arquitetura, stack e convenções do Agile Fit.
  Use ao iniciar trabalho no repositório, refatorar estrutura, adicionar
  dependências ou quando a rule agilefit-core apontar para esta skill.
disable-model-invocation: true
---

# Agile Fit — overview

Landing page SPA de conversão para o programa de emagrecimento **Agile Fit**.
Navegação por âncoras na home; páginas extras: privacidade (LGPD) e 404.

## Stack (não trocar sem pedido explícito)

| Camada | Tecnologia |
|--------|------------|
| UI | React 19 + TypeScript 5.9 (strict) |
| Build | Vite 8 (`@vitejs/plugin-react-swc`) |
| Estilo | Tailwind CSS 4 + `tw-animate-css` |
| Componentes | shadcn/ui (style `new-york`, baseColor `green`) |
| Ícones | Lucide React |
| Toasts | Sonner 2 |
| Testes | Vitest |
| Node | 20+ |

## Estrutura de `src/`

```
src/
├── assets/          # Imagens da landing
├── components/      # Seções (Hero, Header, FAQ, …)
│   └── ui/          # Primitivos shadcn — editar com cuidado
├── content/         # Única fonte de copy/claims (site.ts)
├── hooks/           # ex.: use-mobile
├── lib/             # utils, leads, email, paths
├── pages/           # Index, Privacy, NotFound
├── App.tsx          # Roteamento leve + Toaster
└── index.css        # Tokens CSS + @theme inline
```

## Convenções

1. **Alias** `@/` → `src/` (Vite + tsconfig).
2. **Copy**: nunca espalhar claims de marketing nos componentes; importe de `@/content/site`.
3. **Rotas**: apenas `/` e `/privacidade` (via `appPathname` em `App.tsx`). Âncoras: `#beneficios`, `#o-que-voce-recebe`, `#depoimentos`, `#faq`, `#inscricao`.
4. **Base path**: GitHub Pages pode usar `/AgileFit/`. Links internos → `withBase(...)`.
5. **Env** (prefixo `VITE_`):
   - `VITE_BASE_PATH`
   - `VITE_SITE_URL`
   - `VITE_LEADS_API_URL`
6. **Qualidade obrigatória** antes de concluir mudanças relevantes:
   ```bash
   npm run typecheck && npm run lint && npm test && npm run build
   ```

## Skills relacionadas

- Conteúdo → [agilefit-content](../agilefit-content/SKILL.md)
- UI/tema → [agilefit-ui](../agilefit-ui/SKILL.md)
- Leads → [agilefit-leads](../agilefit-leads/SKILL.md)
- Deploy/SEO → [agilefit-deploy](../agilefit-deploy/SKILL.md)

## Anti-padrões

- Adicionar React Router sem necessidade (roteamento atual é intencional e mínimo)
- Commitar secrets / `.env.production` com URLs reais sensíveis
- Duplicar copy fora de `src/content/site.ts`
- Quebrar suporte a `BASE_URL` do Vite
