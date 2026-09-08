"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ShieldCheck } from "lucide-react";
import { submitLead } from "@/lib/leads";
import { siteInfo } from "@/data/site";

const STORAGE_KEY = "svr-promo-dismissed";

export function PromoPopup({ delayMs = 6000 }: { delayMs?: number }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {}
    const timer = setTimeout(() => setOpen(true), delayMs);
    return () => clearTimeout(timer);
  }, [delayMs]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    const res = await submitLead({
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      treatment: "Up to 25% off first treatment (popup)",
      website: String(fd.get("website") ?? ""),
      source: "promo-popup",
    });
    if (res.ok) {
      setStatus("sent");
      setTimeout(close, 2500);
    } else {
      setStatus("error");
      setError(res.error);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="promo-title">
      <div className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-[28px] bg-ivory shadow-[0_50px_100px_-40px_rgba(0,0,0,0.7)] sm:grid-cols-[0.9fr_1.1fr]">
        <button onClick={close} aria-label="Close" className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-white/90 text-ink shadow hover:bg-white">
          <X className="size-4" />
        </button>

        <div className="relative hidden sm:block">
          <Image src="/images/redesign/hero.webp" alt="" fill sizes="40vw" className="object-cover object-[65%_center]" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/70 via-plum-deep/10 to-transparent" />
          <div className="absolute bottom-6 left-6 text-ivory">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush">Limited offer</p>
            <p className="font-display mt-1 text-5xl leading-none">Up to 25% off</p>
            <p className="mt-1 text-[14px] text-ivory/85">your first treatment</p>
          </div>
        </div>

        <div className="p-7 sm:p-9">
          <p className="eyebrow">Book free consultation</p>
          <h2 id="promo-title" className="font-display mt-3 text-[34px] leading-[1.05] text-ink sm:text-4xl">
            Get up to <span className="italic text-plum">25% off</span> your first treatment
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-muted-ink">Leave your details and we&apos;ll call to book your free, no-obligation consultation with Sonali.</p>

          {status === "sent" ? (
            <p className="mt-6 rounded-2xl bg-plum-soft px-5 py-4 text-[15px] font-medium text-plum" role="status">Thank you — your offer is reserved. We&apos;ll be in touch shortly.</p>
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-3">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <input name="name" required placeholder="Name" aria-label="Name" className="w-full rounded-xl border border-sand bg-white px-4 py-3 text-[14px] outline-none focus:border-plum" />
              <input name="email" type="email" placeholder="Email" aria-label="Email" className="w-full rounded-xl border border-sand bg-white px-4 py-3 text-[14px] outline-none focus:border-plum" />
              <input name="phone" type="tel" required placeholder="Phone" aria-label="Phone" className="w-full rounded-xl border border-sand bg-white px-4 py-3 text-[14px] outline-none focus:border-plum" />
              <button type="submit" disabled={status === "sending"} className="w-full rounded-full bg-plum py-3.5 text-[15px] font-semibold text-white hover:bg-plum-deep disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Claim my discount"}
              </button>
              {status === "error" && <p className="text-[13px] font-medium text-ink" role="alert">{error} Call {siteInfo.phone}.</p>}
              <p className="flex items-center gap-1.5 text-[11.5px] text-muted-ink"><ShieldCheck className="size-3.5 text-plum" /> No spam, no obligation. 18+ only.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
