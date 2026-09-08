import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronDown } from "lucide-react";
import { siteInfo, topBarLinks, mainNavLinks, categoryNav } from "@/data/site";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export function Header() {
  return (
    <header>
      {/* Top bar */}
      <div className="bg-brand-navy text-white text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2.5">
          <div className="flex items-center gap-4">
            <a href={siteInfo.phoneHref} className="flex items-center gap-2 font-semibold">
              <Phone className="size-3.5" />
              {siteInfo.phone}
            </a>
            <div className="hidden items-center gap-3 sm:flex">
              <a href={siteInfo.facebook} aria-label="Facebook" className="opacity-90 hover:opacity-100">
                <FacebookIcon className="size-4" />
              </a>
              <a href={siteInfo.instagram} aria-label="Instagram" className="opacity-90 hover:opacity-100">
                <InstagramIcon className="size-4" />
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs sm:text-sm">
            {topBarLinks.map((l) => (
              <Link key={l.text} href={l.href} className="opacity-90 hover:opacity-100 hover:underline">
                {l.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-[#f4f2f2]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3">
          <Link href="/" className="shrink-0">
            <Image src="/images/logo.png" alt="SVR Aesthetics laser clinic logo" width={140} height={75} priority />
          </Link>
          <nav className="hidden items-center gap-7 text-[15px] font-medium text-brand-heading lg:flex">
            {mainNavLinks.map((l) => (
              <Link key={l.text} href={l.href} className="hover:text-brand-navy">
                {l.text}
              </Link>
            ))}
          </nav>
          <a
            href={siteInfo.bookingHref}
            className="shrink-0 rounded-md bg-brand-navy px-6 py-3 text-base font-bold text-white transition-colors hover:bg-brand-navy-dark"
          >
            BOOK NOW
          </a>
        </div>
      </div>

      {/* Category submenu */}
      <div className="hidden bg-brand-navy lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 text-sm font-semibold tracking-wide text-white">
          {categoryNav.map((cat) => (
            <div key={cat.label} className="group relative">
              <button className="flex items-center gap-1 py-3 uppercase hover:opacity-90">
                {cat.label}
                <ChevronDown className="size-3.5" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-30 w-64 -translate-x-1/2 rounded-md bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {cat.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 text-sm font-normal capitalize text-brand-heading hover:bg-brand-tint hover:text-brand-navy"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
