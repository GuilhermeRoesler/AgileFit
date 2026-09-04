---
name: agilefit-leads
description: >-
  Formulário de inscrição, validação de e-mail, honeypot e API de leads do
  Agile Fit. Use ao alterar NewsletterForm, leads.ts, email.ts ou quando a
  rule agilefit-leads apontar para esta skill.
disable-model-invocation: true
---

# Leads e formulário de inscrição

## Fluxo

1. Usuário preenche nome + e-mail em `NewsletterForm` (`#inscricao`).
2. Validação client: campos obrigatórios + `isValidEmail` (`src/lib/email.ts`).
3. `submitLead` (`src/lib/leads.ts`) envia `FormData` via `POST` para `VITE_LEADS_API_URL`.
4. Feedback: Sonner toasts; sucesso troca UI para estado confirmado.

## Contrato da API

**Request** (`multipart/form-data`):

- `fullname` (string)
- `email` (string)

**Response** (JSON):

```ts
{ ok: boolean; message?: string }
```

- `ok: true` → sucesso
- `ok: false` → exibir `message` ou fallback genérico
- HTTP não-OK → throw; UI mostra erro genérico

Env obrigatória: `VITE_LEADS_API_URL`. Sem ela, `getLeadsApiUrl()` lança erro.

## Honeypot

Campo oculto `website` no formulário:

- Deve permanecer **vazio** para humanos
- Se preenchido, `submitLead` retorna `{ ok: true }` **sem** chamar a API
- Não remover; não validar no servidor a partir deste skill (servidor é externo)

Validação definitiva de e-mail/anti-spam permanece no **backend PHP externo**.

## Regras de implementação

1. Manter `AbortController` no submit (cancelar request anterior / unmount).
2. Tratar `AbortError` sem toast de falha.
3. Não logar PII além do necessário; evitar `console.log` de e-mail/nome.
4. Link de privacidade: `withBase("/privacidade")`.
5. Copy do form: `formCopy` em `src/content/site.ts`.
6. Testes: atualizar `src/lib/leads.test.ts` e `src/lib/email.test.ts` junto com a lógica.

## Checklist

- [ ] Honeypot intacto e fora do fluxo visual
- [ ] Payload só `fullname` + `email` no FormData real
- [ ] Toasts de erro/sucesso coerentes
- [ ] Testes Vitest passando (`npm test`)
