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
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Safely push standard events to Google Tag Manager dataLayer
 */
export function pushToDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function trackConversion(source: string) {
  if (typeof window === "undefined") return;
  pushToDataLayer({ event: "generate_lead", lead_source: source });
  if (window.gtag) {
    window.gtag("event", "generate_lead", { lead_source: source });
    const label = process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL;
    const id = process.env.NEXT_PUBLIC_GADS_ID;
    if (id && label) window.gtag("event", "conversion", { send_to: `${id}/${label}` });
  }
}

export function trackContactClick(kind: "call" | "whatsapp") {
  if (typeof window === "undefined") return;
  const eventName = kind === "call" ? "phone_click" : "whatsapp_click";
  pushToDataLayer({ event: eventName, contact_method: kind });
  // Also push {kind}_click for backwards compatibility
  pushToDataLayer({ event: `${kind}_click` });
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
