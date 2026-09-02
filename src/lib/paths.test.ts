import { describe, expect, it } from "vitest";
import { appPathname, withBase } from "./paths";

describe("withBase", () => {
  it("usa BASE_URL do Vite", () => {
    expect(withBase("/")).toBe(import.meta.env.BASE_URL);
    expect(withBase("/privacidade")).toBe(`${import.meta.env.BASE_URL}privacidade`);
  });
});

describe("appPathname", () => {
  it("normaliza barra final e index.html", () => {
    expect(appPathname("/")).toBe("/");
    expect(appPathname("/privacidade/")).toBe("/privacidade");
    expect(appPathname("/index.html")).toBe("/");
  });
});
