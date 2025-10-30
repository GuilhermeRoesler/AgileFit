import { describe, expect, it, vi, afterEach } from "vitest";
import { getLeadsApiUrl, submitLead } from "@/lib/leads";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});

describe("getLeadsApiUrl", () => {
  it("usa VITE_LEADS_API_URL quando definido", () => {
    vi.stubEnv("VITE_LEADS_API_URL", "https://example.com/api/leads");
    expect(getLeadsApiUrl()).toBe("https://example.com/api/leads");
  });

  it("lança erro quando VITE_LEADS_API_URL está ausente", () => {
    vi.stubEnv("VITE_LEADS_API_URL", "");
    expect(() => getLeadsApiUrl()).toThrow(/VITE_LEADS_API_URL/);
  });
});

describe("submitLead", () => {
  it("não chama a API quando o honeypot está preenchido", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const result = await submitLead({
      fullname: "Bot",
      email: "bot@example.com",
      website: "http://spam.test",
    });

    expect(result.ok).toBe(true);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("envia FormData e retorna JSON tipado", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true, message: "ok" }),
    });
    vi.stubGlobal("fetch", fetchMock);
    vi.stubEnv("VITE_LEADS_API_URL", "https://example.com/api/leads");

    const result = await submitLead({ fullname: "Ana", email: "ana@example.com" });

    expect(result).toEqual({ ok: true, message: "ok" });
    expect(fetchMock).toHaveBeenCalledOnce();
    const [, init] = fetchMock.mock.calls[0];
    expect(init.method).toBe("POST");
    expect(init.body).toBeInstanceOf(FormData);
  });
});
