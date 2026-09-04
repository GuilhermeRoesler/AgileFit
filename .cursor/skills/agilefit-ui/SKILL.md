---
name: agilefit-ui
description: >-
  Padrões de UI, tema Tailwind/shadcn e seções da landing Agile Fit.
  Use ao criar ou editar componentes, CSS tokens, páginas ou quando a rule
  agilefit-ui apontar para esta skill.
disable-model-invocation: true
---

# UI, tema e seções

## Identidade visual

Tema fitness: **verde** (primary) + **laranja** (secondary/accent).

Tokens em `src/index.css` (`:root` + `@theme inline`):

- `--primary` / `--primary-glow`
- `--secondary` / `--accent`
- `--shadow-glow` / `--shadow-strong`
- `--radius`

Não migrar para tema roxo genérico nem dark mode por padrão. Preserve o look atual.

## Onde colocar o quê

| Tipo | Local |
|------|--------|
| Seção de página | `src/components/Nome.tsx` (default export) |
| Página | `src/pages/` |
| Primitivo shadcn | `src/components/ui/` |
| Hook responsivo | `src/hooks/` |
| `cn()` / helpers | `src/lib/utils.ts` |

## shadcn/ui

- Config: `components.json` (style `new-york`, Tailwind v4, CSS variables)
- **Novos componentes**: instalar via CLI shadcn; não copiar de outros projetos à mão
- Preferir variantes existentes do `Button` (ex.: `variant="cta"`, `size="xl"`)
- Toasts: `toast` de `sonner` + `<Toaster />` já em `App.tsx`

## Padrões de seção

1. Importar copy de `@/content/site`.
2. Usar `container` + padding responsivo (`px-4 sm:px-6 lg:px-8`) como nas seções atuais.
3. CTAs principais disparam scroll para `#inscricao` (ver `Index.tsx` → `scrollToForm`).
4. Imagens: `fetchPriority="high"` só no hero; demais `loading="lazy"` + `decoding="async"`.
5. Gradientes Tailwind v4: `bg-linear-to-*` (não `bg-gradient-to-*` legado, salvo código já existente a preservar).

## Hero (referência de composição)

- Full-bleed com imagem de fundo + overlay escuro
- Brand (`site.name`) → H1 → subheadline → um CTA
- Evitar cards/stats flutuantes no primeiro viewport sem pedido explícito

## Acessibilidade mínima

- Labels associados a inputs
- Contraste suficiente sobre hero (texto claro + sombra já usada)
- Não remover `aria-hidden` do honeypot

## Imagens

Assets em `src/assets/`. Após trocar hero/transformação/demo/favicon, considerar:

```bash
npm run optimize:images
```
