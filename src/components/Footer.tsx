import Image from "next/image";
import Link from "next/link";
import { siteInfo, footerQuickLinks, footerPolicyLinks } from "@/data/site";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/images/footer-logo.png" alt="SVR Aesthetics" width={160} height={86} />
          <p className="mt-4 text-sm text-brand-body">
            Professional Cosmetic Care To Help You Look And Feel As Good As You Can.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteInfo.facebook}
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-brand-navy text-white hover:opacity-90"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href={siteInfo.instagram}
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-brand-navy text-white hover:opacity-90"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-brand-heading">Quick links</h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-body">
            {footerQuickLinks.map((l) => (
              <li key={l.text}>
                <Link href={l.href} className="hover:text-brand-navy">
                  {l.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-brand-heading">Policies</h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-body">
            {footerPolicyLinks.map((l) => (
              <li key={l.text}>
                <Link href={l.href} className="hover:text-brand-navy">
                  {l.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-brand-heading">Working Hours</h4>
          <p className="mt-4 text-sm text-brand-body">Monday – Friday : 10:00 am – 7:00 pm</p>
          <p className="mt-1 text-sm text-brand-body">Saturday : 10:00 am – 8:30 pm</p>
          <p className="mt-1 text-sm text-brand-body">Sunday : Closed</p>
          <p className="mt-3 text-xs text-brand-body/80">Opening times: (Appointment only)</p>
          <p className="text-xs text-brand-body/80">Mon–Thur: 10:00 PM – 04:00 PM</p>
          <p className="text-xs text-brand-body/80">Friday – Sat: 10:00 PM – 04:00</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-4 pt-6 text-center text-xs text-brand-body">
        COPYRIGHT © 2026 SVR AESTHETICS | ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
