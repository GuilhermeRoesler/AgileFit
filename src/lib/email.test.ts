import { describe, expect, it } from "vitest";
import { isValidEmail } from "@/lib/email";

describe("isValidEmail", () => {
  it("aceita e-mails válidos", () => {
    expect(isValidEmail("aluno@agilefit.com")).toBe(true);
    expect(isValidEmail("  nome.sobrenome+promo@dominio.com.br ")).toBe(true);
  });

  it("rejeita e-mails inválidos", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("sem-arroba")).toBe(false);
    expect(isValidEmail("a@b")).toBe(false);
    expect(isValidEmail("@dominio.com")).toBe(false);
    expect(isValidEmail("nome@")).toBe(false);
  });
});
