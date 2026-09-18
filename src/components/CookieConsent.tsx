"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, Check, X, Sliders, ChevronRight } from "lucide-react";

export interface CookiePreferences {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = "svr_cookie_consent_v1";

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  const applyGtmConsent = useCallback((prefs: { analytics: boolean; marketing: boolean }) => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.marketing ? "granted" : "denied",
        ad_user_data: prefs.marketing ? "granted" : "denied",
        ad_personalization: prefs.marketing ? "granted" : "denied",
      });
    }

    window.dataLayer.push({
      event: "cookie_consent_update",
      consent_analytics: prefs.analytics,
      consent_marketing: prefs.marketing,
    });
  }, []);

  const saveConsent = useCallback(
    (prefs: { analytics: boolean; marketing: boolean }) => {
      const record: CookiePreferences = {
        necessary: true,
        analytics: prefs.analytics,
        marketing: prefs.marketing,
        timestamp: new Date().toISOString(),
      };

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
      } catch {
        // LocalStorage disabled or quota exceeded
      }

      applyGtmConsent(prefs);
      setShowBanner(false);
      setShowModal(false);
    },
    [applyGtmConsent]
  );

  useEffect(() => {
    setMounted(true);

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CookiePreferences;
        setAnalytics(parsed.analytics);
        setMarketing(parsed.marketing);
        applyGtmConsent(parsed);
      } else {
        // Show banner after brief delay
        const timer = setTimeout(() => setShowBanner(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      setShowBanner(true);
    }
  }, [applyGtmConsent]);

  // Listen for custom event from footer or links to reopen preferences
  useEffect(() => {
    const handleOpen = () => {
      setShowModal(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpen);
    return () => window.removeEventListener("open-cookie-preferences", handleOpen);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Floating Low-Profile Banner */}
      {showBanner && !showModal && (
        <aside
          aria-label="Cookie consent banner"
          className="fixed bottom-3 left-3 right-3 z-50 mx-auto max-w-4xl rounded-2xl border border-sand bg-white/95 px-3.5 py-2.5 sm:px-5 sm:py-3 shadow-[0_12px_36px_-12px_rgba(43,37,48,0.22)] backdrop-blur-md transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4">
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div className="size-7 rounded-lg bg-plum/10 text-plum flex items-center justify-center shrink-0">
                <Cookie className="size-3.5" />
              </div>
              <p className="text-[12px] sm:text-[13px] leading-snug text-muted-ink">
                <strong className="font-semibold text-ink">Cookie Notice:</strong> We use cookies to enable core features and measure site traffic under UK GDPR.{" "}
                <Link href="/privacy-policy" className="text-plum font-semibold hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 self-end sm:self-center">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="rounded-full border border-sand bg-cream/40 px-3 py-1.5 text-[11.5px] sm:text-[12px] font-medium text-ink hover:border-plum/40 hover:text-plum transition-colors cursor-pointer"
              >
                Preferences
              </button>

              <button
                type="button"
                onClick={() => saveConsent({ analytics: false, marketing: false })}
                className="rounded-full border border-sand bg-white px-3 py-1.5 text-[11.5px] sm:text-[12px] font-medium text-ink hover:bg-cream transition-colors cursor-pointer"
              >
                Essential Only
              </button>

              <button
                type="button"
                onClick={() => saveConsent({ analytics: true, marketing: true })}
                className="rounded-full bg-plum px-3.5 py-1.5 text-[11.5px] sm:text-[12px] font-semibold text-white hover:bg-plum-deep transition-transform active:scale-95 shadow-xs cursor-pointer"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Preferences Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-sand bg-white p-5 sm:p-7 shadow-2xl animate-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between border-b border-sand pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <Sliders className="size-5 text-plum" />
                <h3 id="cookie-modal-title" className="font-display text-2xl text-ink font-semibold">
                  Cookie Settings
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="size-8 rounded-full border border-sand flex items-center justify-center text-muted-ink hover:text-ink transition-colors"
                aria-label="Close preferences modal"
              >
                <X className="size-4" />
              </button>
            </div>

            <p className="text-[13.5px] text-muted-ink leading-relaxed mb-6">
              Manage which cookies you allow us to store on your device. Strictly necessary cookies are required for security, online consultation booking, and core functionality.
            </p>

            <div className="space-y-4">
              {/* Strictly Necessary */}
              <div className="rounded-2xl border border-sand bg-cream/30 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-[14.5px] font-semibold text-ink flex items-center gap-1.5">
                      <ShieldCheck className="size-4 text-plum" />
                      Strictly Necessary Cookies
                    </h4>
                    <p className="mt-1 text-[12.5px] text-muted-ink">
                      Essential for security, booking system iframe embeds, and anti-spam form protections.
                    </p>
                  </div>
                  <span className="shrink-0 text-[12px] font-bold text-plum uppercase tracking-wider bg-plum/10 px-2.5 py-1 rounded-full">
                    Always Active
                  </span>
                </div>
              </div>

              {/* Analytics */}
              <div className="rounded-2xl border border-sand bg-white p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-[14.5px] font-semibold text-ink">
                      Analytics & Performance Cookies
                    </h4>
                    <p className="mt-1 text-[12.5px] text-muted-ink">
                      Allows Google Analytics to measure visitor counts, page traffic, and clinic engagement without identifying you directly.
                    </p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center shrink-0">
                    <input
                      type="checkbox"
                      checked={analytics}
                      onChange={(e) => setAnalytics(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-sand peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-sand after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-plum" />
                  </label>
                </div>
              </div>

              {/* Marketing */}
              <div className="rounded-2xl border border-sand bg-white p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-[14.5px] font-semibold text-ink">
                      Advertising & Conversion Tracking
                    </h4>
                    <p className="mt-1 text-[12.5px] text-muted-ink">
                      Enables Google Tag Manager and conversion attribution when you request a consultation through Google search ads.
                    </p>
                  </div>
                  <label className="relative inline-flex cursor-pointer items-center shrink-0">
                    <input
                      type="checkbox"
                      checked={marketing}
                      onChange={(e) => setMarketing(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-sand peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-sand after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-plum" />
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 pt-4 border-t border-sand flex items-center justify-between gap-3">
              <Link
                href="/privacy-policy"
                onClick={() => setShowModal(false)}
                className="text-[13px] font-semibold text-plum hover:underline"
              >
                Cookie Table in Privacy Policy →
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => saveConsent({ analytics: false, marketing: false })}
                  className="rounded-full border border-sand px-4 py-2 text-[13px] font-semibold text-ink hover:bg-cream transition-colors"
                >
                  Reject Optional
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent({ analytics, marketing })}
                  className="rounded-full bg-plum px-5 py-2 text-[13px] font-semibold text-white hover:bg-plum-deep transition-transform active:scale-95 shadow-sm"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
