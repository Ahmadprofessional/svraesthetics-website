"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/data/site";

const nav = [
  { label: "Injectables", href: "#injectables" },
  { label: "Facials", href: "#facials" },
  { label: "Results", href: "#results" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-plum-deep text-ivory">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-[12px] tracking-wide sm:px-6">
          <p className="truncate">
            <span className="font-semibold text-blush">25% off</span> your first treatment · Free consultation · Bletchley, Milton Keynes
          </p>
          <a href={siteInfo.phoneHref} className="hidden shrink-0 items-center gap-2 font-medium sm:flex">
            <Phone className="size-3.5" /> {siteInfo.phone}
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled ? "bg-ivory/85 shadow-[0_1px_0_0_#e9e0d4,0_10px_30px_-18px_rgba(43,37,48,0.35)] backdrop-blur-xl" : "bg-ivory"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
          <Link href="/" className="shrink-0" aria-label="SVR Aesthetics home">
            <Image src="/images/logo.png" alt="SVR Aesthetics" width={124} height={66} priority className="h-14 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 text-[14px] font-medium text-ink lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="relative py-1 transition-colors hover:text-plum after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-plum after:transition-transform hover:after:scale-x-100">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteInfo.phoneHref}
              className="flex size-11 items-center justify-center rounded-full border border-sand text-plum lg:hidden"
              aria-label="Call us"
            >
              <Phone className="size-4" />
            </a>
            <a
              href="#book"
              className="hidden items-center rounded-full bg-plum px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(75,42,99,0.8)] transition-all hover:-translate-y-0.5 hover:bg-plum-deep sm:inline-flex"
            >
              Book Free Consultation
            </a>
            <button
              onClick={() => setOpen(true)}
              className="flex size-11 items-center justify-center rounded-full border border-sand text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <div className={cn("fixed inset-0 z-50 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
        <div className={cn("absolute inset-0 bg-ink/40 transition-opacity", open ? "opacity-100" : "opacity-0")} onClick={() => setOpen(false)} />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ivory p-6 shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <Image src="/images/logo.png" alt="SVR Aesthetics" width={100} height={54} className="h-12 w-auto" />
            <button onClick={() => setOpen(false)} className="flex size-10 items-center justify-center rounded-full border border-sand" aria-label="Close menu">
              <X className="size-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-1">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display border-b border-sand py-4 text-2xl text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#book" onClick={() => setOpen(false)} className="mt-8 rounded-full bg-plum px-5 py-3.5 text-center font-semibold text-white">
            Book Free Consultation
          </a>
          <a href={siteInfo.phoneHref} className="mt-3 flex items-center justify-center gap-2 rounded-full border border-plum px-5 py-3.5 font-semibold text-plum">
            <Phone className="size-4" /> {siteInfo.phone}
          </a>
        </div>
      </div>
    </>
  );
}
