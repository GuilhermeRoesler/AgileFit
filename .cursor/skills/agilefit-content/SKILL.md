---
name: agilefit-content
description: >-
  Como editar copy, claims e dados de marketing do Agile Fit em
  src/content/site.ts. Use ao alterar textos da landing, FAQ, depoimentos,
  formulário ou quando a rule agilefit-content apontar para esta skill.
disable-model-invocation: true
---

# Conteúdo da landing

## Fonte única

Todo copy/claims/números de marketing ficam em **`src/content/site.ts`**.

Componentes de seção **importam** esses exports; não redefine strings inline
(exceto `aria`/labels técnicos mínimos, se já existirem).

## Exports principais

| Export | Uso |
|--------|-----|
| `site` | Nome, tagline, contagens, prazos, e-mail de contato |
| `navLinks` | Links do header (âncoras) |
| `hero` | Headline, subheadline, CTA, alt da imagem |
| `benefits` | Cards de benefícios (+ `icon` tipado) |
| `programDetails` | Itens do programa |
| `testimonials` | Depoimentos |
| `faq` | Perguntas/respostas |
| `formCopy` | Textos do formulário de inscrição |
| (outros no arquivo) | Footer, privacy snippets, etc. |

Use `as const` e mantenha o padrão tipado de `icon` (`"Target" as const`, etc.)
para bater com o mapa em `src/lib/icons.ts`.

## Regras de edição

1. **Consistência de claims**: números (`studentsCount`, `firstResultsDays`, `programWeeks`, `guaranteeDays`, `trialDays`) devem refletir o mesmo valor em headline/FAQ/formulário — preferir interpolar `site.*` em vez de repetir literais.
2. **Tom**: português brasileiro, conversão (benefício + urgência suave), sem promessas médicas absolutas.
3. **Âncoras**: se mudar `href` em `navLinks`, atualizar o `id` correspondente em `src/pages/Index.tsx`.
4. **Ícones novos**: adicionar o nome em `src/lib/icons.ts` e usar o mesmo literal no item de conteúdo.
5. **Privacidade**: textos legais da página Privacy podem viver no content file; altere com cuidado (LGPD).

## Checklist

- [ ] Nenhum claim novo hardcoded em `components/`
- [ ] Ícones resolvem via `icons.ts`
- [ ] Âncoras nav ↔ `id` na Index alinhadas
- [ ] FAQ/depoimentos com chaves estáveis o suficiente para React (`key`)
