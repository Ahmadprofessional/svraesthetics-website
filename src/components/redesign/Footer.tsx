"use client";

import Image from "next/image";
import { siteInfo, footerQuickLinks, footerPolicyLinks } from "@/data/site";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  const openCookiePreferences = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
    }
  };

  return (
    <footer className="bg-ivory pt-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image src="/images/logo.png" alt="SVR Aesthetics" width={130} height={70} className="h-16 w-auto" />
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted-ink">
            Nurse-led aesthetic clinic in Bletchley, Milton Keynes. Professional cosmetic care to help you look and feel as good as you can.
          </p>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-plum">CQC Registered</p>
          <div className="mt-5 flex gap-2">
            <a href={siteInfo.facebook} aria-label="Facebook" className="flex size-10 items-center justify-center rounded-full border border-sand text-plum transition-colors hover:bg-plum hover:text-white"><FacebookIcon className="size-4" /></a>
            <a href={siteInfo.instagram} aria-label="Instagram" className="flex size-10 items-center justify-center rounded-full border border-sand text-plum transition-colors hover:bg-plum hover:text-white"><InstagramIcon className="size-4" /></a>
          </div>
        </div>
        <FooterCol title="Clinic" links={footerQuickLinks} />
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-plum">Policies</h4>
          <ul className="mt-4 space-y-2.5 text-[14px] text-muted-ink">
            {footerPolicyLinks.map((l) => (
              <li key={l.text}><a href={l.href} className="transition-colors hover:text-plum">{l.text}</a></li>
            ))}
            <li>
              <button
                type="button"
                onClick={openCookiePreferences}
                className="transition-colors hover:text-plum text-left cursor-pointer"
              >
                Cookie Preferences
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-plum">Find us</h4>
          <p className="mt-4 text-[14px] leading-relaxed text-muted-ink">{siteInfo.address}</p>
          <a id="footer-phone-link" href={siteInfo.phoneHref} className="gtm-phone-link mt-3 block text-[14px] font-semibold text-ink">{siteInfo.phone}</a>
          <a href={`mailto:${siteInfo.email}`} className="block text-[14px] text-muted-ink">{siteInfo.email}</a>
          <a id="footer-ai-phone-link" href={siteInfo.aiBookingPhoneHref} className="mt-3 block text-[14px] font-semibold text-ink">{siteInfo.aiBookingPhone}</a>
          <p className="text-[12px] text-muted-ink">AI Booking Assistant — call anytime</p>
        </div>
      </div>
      <div className="mt-12 border-t border-sand py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-[12px] text-muted-ink sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} SVR Aesthetics · All rights reserved · Treatments available to clients aged 18+</p>
          <button
            type="button"
            onClick={openCookiePreferences}
            className="transition-colors hover:text-plum underline underline-offset-4 cursor-pointer"
          >
            Cookie Settings
          </button>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { text: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-plum">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-[14px] text-muted-ink">
        {links.map((l) => (
          <li key={l.text}><a href={l.href} className="transition-colors hover:text-plum">{l.text}</a></li>
        ))}
      </ul>
    </div>
  );
}
