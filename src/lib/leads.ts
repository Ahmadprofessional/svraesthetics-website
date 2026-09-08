export interface LeadInput {
  name: string;
  phone: string;
  email?: string;
  treatment?: string;
  message?: string;
  source: string;
  website?: string;
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackConversion(source: string) {
  if (typeof window === "undefined") return;
  window.dataLayer?.push({ event: "generate_lead", lead_source: source });
  if (window.gtag) {
    window.gtag("event", "generate_lead", { lead_source: source });
    const label = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;
    const id = process.env.NEXT_PUBLIC_GADS_ID;
    if (id && label) window.gtag("event", "conversion", { send_to: `${id}/${label}` });
  }
}

export function trackContactClick(kind: "call" | "whatsapp") {
  if (typeof window === "undefined") return;
  window.dataLayer?.push({ event: `${kind}_click` });
  window.gtag?.("event", `${kind}_click`);
}

export async function submitLead(input: LeadInput): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...input, page: window.location.pathname }),
    });
    const data = (await res.json()) as { ok: boolean; error?: string };
    if (!res.ok || !data.ok) return { ok: false, error: data.error ?? "Something went wrong. Please call us instead." };
    trackConversion(input.source);
    return { ok: true };
  } catch {
    return { ok: false, error: "Something went wrong. Please call us instead." };
  }
}
