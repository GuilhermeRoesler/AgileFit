---
name: agilefit-deploy
description: >-
  Base path, SEO no build, variáveis de ambiente e CI/CD GitHub Pages do
  Agile Fit. Use ao editar vite.config, workflows, paths.ts, index.html ou
  quando a rule agilefit-deploy apontar para esta skill.
disable-model-invocation: true
---

# Paths, SEO e deploy

## Variáveis de ambiente

Copiar de `.env.example`. Prefixo `VITE_` (expostas no client).

| Variável | Função |
|----------|--------|
| `VITE_BASE_PATH` | `base` do Vite (`/` ou `/AgileFit/`) |
| `VITE_SITE_URL` | Canonical, OG, sitemap, robots |
| `VITE_LEADS_API_URL` | Endpoint POST de leads |

## Paths no código

Arquivo: `src/lib/paths.ts`

- `withBase(path)` — links/assets conscientes do `import.meta.env.BASE_URL`
- `appPathname()` — pathname da app **sem** o prefixo base (usado em `App.tsx`)

Qualquer `<a href>` interno ou navegação programática deve respeitar o base path.

## Plugins Vite relevantes (`vite.config.ts`)

1. **html-transform** — substitui `__SITE_URL__` no `index.html`
2. **seo-files** — gera `robots.txt` + `sitemap.xml` no `dist` (home + `/privacidade`)
3. **spa-github-pages-fallback** — copia `index.html` → `404.html` para SPA no Pages
4. `public/.htaccess` — fallback Apache para rotas como `/privacidade`

Ao adicionar rota pública nova:

1. Registrar em `App.tsx`
2. Incluir no sitemap do plugin
3. Garantir fallback 404/htaccess ainda cobre a rota

## CI/CD (`.github/workflows/ci.yml`)

**Job Quality** (PR + push): `typecheck` → `lint` → `test` → `build`

**Job Deploy** (só `main`/`master`): build com env do Pages + `deploy-pages`

Defaults no deploy:

- `VITE_SITE_URL` → `https://<owner>.github.io/<repo>` (ou variable)
- `VITE_BASE_PATH` → `/<repo>/` (ou variable; `/` se domínio raiz)
- `VITE_LEADS_API_URL` → secret (placeholder + warning se ausente)

## Checklist ao mudar deploy/SEO

- [ ] `withBase` / `appPathname` cobrem novos links
- [ ] Sitemap lista todas as rotas indexáveis
- [ ] Build local com `VITE_BASE_PATH=/AgileFit/` ainda navega
- [ ] Testes de `paths.test.ts` atualizados
- [ ] Não commitar secrets reais no repo
