"use client";

import { ExternalLink, MessageCircle, Phone, ShieldCheck, Sparkles, CheckCircle } from "lucide-react";
import { siteInfo } from "@/data/site";
import { trackContactClick } from "@/lib/leads";

export function BookingEmbed() {
  return (
    <section id="book-online" className="relative py-12 lg:py-16 bg-cream/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Header Badges */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-plum/10 px-3.5 py-1 text-[12px] font-semibold text-plum">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Real-Time Availability
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-muted-ink border border-sand">
            <CheckCircle className="size-3.5 text-plum" />
            Instant Confirmation
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-[12px] font-medium text-muted-ink border border-sand">
            <ShieldCheck className="size-3.5 text-plum" />
            Nurse Prescriber Led
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl sm:text-4xl text-ink">
            Select Your <span className="text-plum italic">Treatment & Time</span>
          </h2>
          <p className="mt-2 text-[15px] text-muted-ink max-w-xl mx-auto">
            Choose your service and preferred time slot below for a personalized consultation with Sonali.
          </p>
        </div>

        {/* Embedded Card */}
        <div className="relative mx-auto max-w-[940px] rounded-3xl border border-sand bg-white p-3 sm:p-6 shadow-[0_20px_50px_-25px_rgba(43,37,48,0.15)]">
          <iframe
            src="https://clinicconsent.com/book/svr-aesthetics"
            title="Book an appointment"
            width="100%"
            height="760"
            style={{ border: 0, maxWidth: "900px", width: "100%", minHeight: "760px" }}
            loading="lazy"
            className="w-full rounded-2xl border-0"
          />

          {/* Direct fallback link */}
          <div className="mt-4 pt-4 border-t border-sand/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-muted-ink">
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-gold" />
              Secure booking powered by ClinicConsent / AestheticOS
            </span>
            <a
              href="https://clinicconsent.com/book/svr-aesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-plum font-semibold hover:underline"
            >
              Open booking in new tab
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Contact Alternative Bar */}
        <div className="mt-8 mx-auto max-w-[940px] rounded-2xl border border-sand bg-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-[15px] font-semibold text-ink">Prefer to book via Phone or WhatsApp?</p>
            <p className="text-[13px] text-muted-ink mt-0.5">We reply quickly to answer any questions before you book.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={siteInfo.phoneHref}
              onClick={() => trackContactClick("call")}
              className="inline-flex items-center gap-2 rounded-full border border-sand bg-cream/50 px-4 py-2 text-[13px] font-semibold text-ink hover:bg-cream transition-colors"
            >
              <Phone className="size-3.5 text-plum" />
              Call {siteInfo.phone}
            </a>
            <a
              href="https://wa.me/447792284575"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("whatsapp")}
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[13px] font-semibold text-white hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="size-3.5 fill-current" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
