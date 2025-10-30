export type LeadPayload = {
  fullname: string;
  email: string;
  /** Honeypot — deve permanecer vazio. */
  website?: string;
};

export type LeadResponse = {
  ok: boolean;
  message?: string;
};

export function getLeadsApiUrl(): string {
  const url = import.meta.env.VITE_LEADS_API_URL?.trim();
  if (!url) {
    throw new Error("VITE_LEADS_API_URL não está definida");
  }
  return url;
}

export async function submitLead(
  payload: LeadPayload,
  signal?: AbortSignal,
): Promise<LeadResponse> {
  if (payload.website?.trim()) {
    return { ok: true, message: "ok" };
  }

  const formData = new FormData();
  formData.append("fullname", payload.fullname.trim());
  formData.append("email", payload.email.trim());

  const response = await fetch(getLeadsApiUrl(), {
    method: "POST",
    body: formData,
    signal,
  });

  if (!response.ok) {
    throw new Error(`Erro no servidor: ${response.status} ${response.statusText}`);
  }

  const data = (await response.json()) as LeadResponse;
  return data;
}
