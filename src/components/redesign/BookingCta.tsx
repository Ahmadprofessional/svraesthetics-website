"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Star, Calendar, MessageSquare, ExternalLink, Sparkles } from "lucide-react";
import { siteInfo } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";
import { submitLead, trackContactClick, pushToDataLayer } from "@/lib/leads";

const treatmentsOfInterest = ["Anti-Wrinkle", "Dermal Fillers", "Lip Enhancement", "HydraFacial", "Microneedling", "Chemical Peel", "Not sure yet"];

export function BookingCta({ source = "booking-section" }: { source?: string }) {
  const [tab, setTab] = useState<"instant" | "callback">("instant");
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
      // Push standard GTM event based on form context
      if (source.includes("contact")) {
        pushToDataLayer({ event: "contact_form_submit", form_id: "booking-callback-form", lead_source: source });
      } else {
        pushToDataLayer({ event: "booking_form_submit", form_id: "booking-callback-form", lead_source: source });
      }
      form.reset();
    } else {
      setStatus("error");
      setError(res.error);
    }
  }

  return (
    <section id="book" className="relative overflow-hidden bg-plum py-16 text-ivory lg:py-24">
      <div className="grain absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-blush/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-blush">Book your free consultation</p>
          <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
            Let&apos;s talk about <span className="italic text-blush">your</span> face
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ivory/80">
            Book your appointment live below with Sonali, Nurse Prescriber.
          </p>
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[13px] font-semibold text-ivory/90">
            <span className="flex text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}</span>
            <span>5-star rated on Google · Nurse Prescriber Led · CQC Registered</span>
          </div>

          {/* Toggle buttons between Live Calendar & Callback */}
          <div className="mt-6 inline-flex rounded-full bg-white/10 p-1 backdrop-blur-sm border border-white/10">
            <button
              type="button"
              onClick={() => setTab("instant")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${
                tab === "instant"
                  ? "bg-white text-plum shadow-md"
                  : "text-ivory/80 hover:text-white"
              }`}
            >
              <Calendar className="size-4" />
              Book Online (Live Calendar)
            </button>
            <button
              type="button"
              onClick={() => setTab("callback")}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold transition-all ${
                tab === "callback"
                  ? "bg-white text-plum shadow-md"
                  : "text-ivory/80 hover:text-white"
              }`}
            >
              <MessageSquare className="size-4" />
              Request Callback Form
            </button>
          </div>
        </div>

        {/* Tab 1: Live ClinicConsent Iframe */}
        {tab === "instant" && (
          <div className="mx-auto max-w-[940px] rounded-3xl bg-white p-3 sm:p-6 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-sand/60 pb-3 text-[13px] text-muted-ink">
              <span className="flex items-center gap-2 font-medium text-ink">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Real-Time Availability
              </span>
              <a
                id="instant-tab-external-link"
                href="https://clinicconsent.com/book/svr-aesthetics"
                target="_blank"
                rel="noopener noreferrer"
                className="gtm-booking-external-link inline-flex items-center gap-1 font-semibold text-plum hover:underline"
              >
                Open in new window
                <ExternalLink className="size-3.5" />
              </a>
            </div>

            <iframe
              src="https://clinicconsent.com/book/svr-aesthetics"
              title="Book an appointment"
              width="100%"
              height="760"
              style={{ border: 0, maxWidth: "900px", width: "100%", minHeight: "760px" }}
              loading="lazy"
              className="w-full rounded-2xl border-0"
            />

            <div className="mt-4 pt-3 border-t border-sand/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-[12px] text-muted-ink">
              <span>Secure booking powered by ClinicConsent / AestheticOS</span>
              <span className="flex items-center gap-1">
                Prefer to call? <a id="booking-instant-phone-link" href={siteInfo.phoneHref} onClick={() => trackContactClick("call")} className="gtm-phone-link text-plum font-semibold hover:underline">{siteInfo.phone}</a>
              </span>
            </div>
          </div>
        )}

        {/* Tab 2: Manual Form & Details */}
        {tab === "callback" && (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div>
              <h3 className="font-display text-3xl">Prefer a quick callback?</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ivory/80">
                Leave your details and treatment of interest, and Sonali will call you directly at a convenient time to discuss your goals.
              </p>

              <div className="mt-8 space-y-4 text-[14px]">
                <a id="booking-cta-phone-link" href={siteInfo.phoneHref} onClick={() => trackContactClick("call")} className="gtm-phone-link flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-ivory/10"><Phone className="size-4" /></span>
                  <span><span className="block text-[11px] uppercase tracking-wider text-ivory/60">Call</span>{siteInfo.phone}</span>
                </a>
                <a id="booking-cta-whatsapp-link" href="https://wa.me/447792284575" onClick={() => trackContactClick("whatsapp")} className="gtm-whatsapp-link flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-ivory/10"><WhatsAppIcon className="size-4" /></span>
                  <span><span className="block text-[11px] uppercase tracking-wider text-ivory/60">WhatsApp</span>Message us</span>
                </a>
                <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-ivory/10"><Mail className="size-4" /></span>
                  <span><span className="block text-[11px] uppercase tracking-wider text-ivory/60">Email</span>{siteInfo.email}</span>
                </a>
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ivory/10"><MapPin className="size-4" /></span>
                  <span><span className="block text-[11px] uppercase tracking-wider text-ivory/60">Visit</span>{siteInfo.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ivory/10"><Clock className="size-4" /></span>
                  <span><span className="block text-[11px] uppercase tracking-wider text-ivory/60">Hours</span>Mon–Thu 11am–5pm · Fri–Sat 11am–7pm (appointment only)</span>
                </div>
              </div>
            </div>

            <form id="booking-callback-form" onSubmit={onSubmit} className="gtm-lead-form rounded-3xl bg-ivory p-6 text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] sm:p-8">
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
                      <span className="inline-block rounded-full border border-sand bg-white px-3 py-1 text-[12px] font-medium text-ink/80 transition-colors peer-checked:border-plum peer-checked:bg-plum peer-checked:text-white">
                        {t}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="text-[13px] font-semibold text-ink/80">Anything you&apos;d like us to know?</label>
                <textarea id="message" name="message" rows={3} className="mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-plum" />
              </div>
              <button
                id="booking-callback-submit"
                type="submit"
                disabled={status === "sending"}
                className="gtm-booking-submit mt-6 w-full rounded-full bg-plum py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-plum-deep disabled:opacity-60"
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
        )}
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
      <input id={name} name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-[14px] outline-none transition-colors focus:border-plum" />
    </div>
  );
}
