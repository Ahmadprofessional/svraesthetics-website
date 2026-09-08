"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import { siteInfo } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";
import { submitLead, trackContactClick } from "@/lib/leads";

const treatmentsOfInterest = ["Anti-Wrinkle", "Dermal Fillers", "Lip Enhancement", "HydraFacial", "Microneedling", "Chemical Peel", "Not sure yet"];

export function BookingCta({ source = "booking-section" }: { source?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");
    const res = await submitLead({
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      treatment: String(fd.get("treatment") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
      source,
    });
    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
      setError(res.error);
    }
  }

  return (
    <section id="book" className="relative overflow-hidden bg-plum py-20 text-ivory lg:py-28">
      <div className="grain absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-blush/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush">Book your free consultation</p>
          <h2 className="font-display mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Let&apos;s talk about <span className="italic text-blush">your</span> face
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ivory/80">
            No pressure, no obligation. Tell us what&apos;s on your mind and we&apos;ll book you a convenient time with Sonali.
          </p>
          <p className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-ivory/90">
            <span className="flex text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}</span>
            5-star rated on Google
          </p>

          <div className="mt-10 space-y-5 text-[15px]">
            <a href={siteInfo.phoneHref} onClick={() => trackContactClick("call")} className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full bg-ivory/10"><Phone className="size-4" /></span>
              <span><span className="block text-[12px] uppercase tracking-wider text-ivory/60">Call</span>{siteInfo.phone}</span>
            </a>
            <a href="https://wa.me/447792284575" onClick={() => trackContactClick("whatsapp")} className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full bg-ivory/10"><WhatsAppIcon className="size-4" /></span>
              <span><span className="block text-[12px] uppercase tracking-wider text-ivory/60">WhatsApp</span>Message us — we reply fast</span>
            </a>
            <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-4">
              <span className="flex size-11 items-center justify-center rounded-full bg-ivory/10"><Mail className="size-4" /></span>
              <span><span className="block text-[12px] uppercase tracking-wider text-ivory/60">Email</span>{siteInfo.email}</span>
            </a>
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ivory/10"><MapPin className="size-4" /></span>
              <span><span className="block text-[12px] uppercase tracking-wider text-ivory/60">Visit</span>{siteInfo.address}</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ivory/10"><Clock className="size-4" /></span>
              <span><span className="block text-[12px] uppercase tracking-wider text-ivory/60">Hours</span>Mon–Fri 10am–7pm · Sat 10am–8:30pm · Appointment only</span>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl bg-ivory p-6 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] sm:p-8">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
          </div>
          <div className="mt-4">
            <Field label="Email" name="email" type="email" />
          </div>
          <div className="mt-4">
            <label className="text-[13px] font-semibold text-ink/80">Treatment of interest</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {treatmentsOfInterest.map((t) => (
                <label key={t} className="cursor-pointer">
                  <input type="radio" name="treatment" value={t} className="peer sr-only" />
                  <span className="inline-block rounded-full border border-sand bg-white px-3.5 py-1.5 text-[13px] font-medium text-ink/80 transition-colors peer-checked:border-plum peer-checked:bg-plum peer-checked:text-white">
                    {t}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="text-[13px] font-semibold text-ink/80">Anything you&apos;d like us to know?</label>
            <textarea id="message" name="message" rows={3} className="mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-plum" />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-6 w-full rounded-full bg-plum py-4 text-[15px] font-semibold text-white transition-colors hover:bg-plum-deep disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Request my free consultation"}
          </button>
          <p className="mt-3 text-center text-[12px] text-muted-ink">We&apos;ll never share your details. 18+ only.</p>
          {status === "sent" && (
            <p className="mt-4 rounded-xl bg-plum-soft px-4 py-3 text-center text-[14px] font-medium text-plum" role="status">
              Thank you — we&apos;ll be in touch shortly to confirm a time.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 rounded-xl bg-blush-soft px-4 py-3 text-center text-[14px] font-medium text-ink" role="alert">
              {error} Call us on {siteInfo.phone}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-[13px] font-semibold text-ink/80">
        {label}
        {required && <span className="text-blush"> *</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-[15px] outline-none transition-colors focus:border-plum" />
    </div>
  );
}
