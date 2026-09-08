"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/data/site";
import { treatmentGroups, trainingGroup, primaryLinks, utilityLinks } from "@/data/nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<"treatments" | "training" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="bg-plum-deep text-ivory">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[12px] tracking-wide sm:px-6">
          <p className="truncate">
            <span className="font-semibold text-blush">25% off</span> your first treatment · Free consultation · Bletchley, Milton Keynes
          </p>
          <div className="hidden shrink-0 items-center gap-5 lg:flex">
            {utilityLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-ivory/80 transition-colors hover:text-ivory">
                {l.label}
              </Link>
            ))}
            <a href={siteInfo.phoneHref} className="flex items-center gap-2 font-semibold">
              <Phone className="size-3.5" /> {siteInfo.phone}
            </a>
          </div>
          <a href={siteInfo.phoneHref} className="flex shrink-0 items-center gap-2 font-semibold lg:hidden">
            <Phone className="size-3.5" /> {siteInfo.phone}
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled ? "bg-ivory/90 shadow-[0_1px_0_0_#e9e0d4,0_10px_30px_-18px_rgba(43,37,48,0.35)] backdrop-blur-xl" : "bg-ivory"
        )}
        onMouseLeave={() => setMenu(null)}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6">
          <Link href="/" className="shrink-0" aria-label="SVR Aesthetics home">
            <Image src="/images/logo.png" alt="SVR Aesthetics" width={124} height={66} priority className="h-14 w-auto" />
          </Link>

          <nav className="hidden items-center gap-7 text-[14px] font-medium text-ink lg:flex">
            <Link href="/" className="transition-colors hover:text-plum">Home</Link>
            <NavTrigger label="Treatments" active={menu === "treatments"} onEnter={() => setMenu("treatments")} onClick={() => setMenu("treatments")} />
            <NavTrigger label="Training" active={menu === "training"} onEnter={() => setMenu("training")} onClick={() => setMenu("training")} />
            {primaryLinks.map((l) => (
              <Link key={l.href} href={l.href} onMouseEnter={() => setMenu(null)} className="transition-colors hover:text-plum">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
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

        {/* Treatments mega menu */}
        <div
          className={cn(
            "absolute inset-x-0 top-full hidden border-t border-sand bg-ivory shadow-[0_30px_60px_-30px_rgba(43,37,48,0.35)] transition-all duration-200 lg:block",
            menu === "treatments" ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          )}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-5 gap-8 px-6 py-8">
            {treatmentGroups.map((g) => (
              <div key={g.label}>
                <Link href={g.href} className="font-display text-[22px] leading-tight text-ink transition-colors hover:text-plum">
                  {g.label}
                </Link>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((i) => (
                    <li key={i.href}>
                      <Link href={i.href} className="text-[13.5px] text-muted-ink transition-colors hover:text-plum">
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-sand bg-cream">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-[13px]">
              <p className="text-muted-ink">Not sure which treatment is right for you? Every plan starts with a free consultation.</p>
              <Link href="/treatments" className="inline-flex items-center gap-1.5 font-semibold text-plum">
                View all treatments <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Training dropdown */}
        <div
          className={cn(
            "absolute inset-x-0 top-full hidden border-t border-sand bg-ivory shadow-[0_30px_60px_-30px_rgba(43,37,48,0.35)] transition-all duration-200 lg:block",
            menu === "training" ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
          )}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-[1.2fr_2fr] gap-10 px-6 py-8">
            <div>
              <p className="eyebrow">SVR Training Academy</p>
              <h3 className="font-display mt-3 text-3xl leading-tight text-ink">CPD-accredited aesthetics courses</h3>
              <p className="mt-3 text-[14px] text-muted-ink">Online theory plus hands-on practical days with live models, for medics and qualified practitioners.</p>
              <Link href={trainingGroup.href} className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-plum">
                All courses <ArrowRight className="size-3.5" />
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              {trainingGroup.items.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="block rounded-xl border border-transparent px-3 py-2.5 text-[14px] text-ink transition-colors hover:border-sand hover:bg-white hover:text-plum">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
        <div className={cn("absolute inset-0 bg-ink/40 transition-opacity", open ? "opacity-100" : "opacity-0")} onClick={() => setOpen(false)} />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-ivory shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-sand p-5">
            <Image src="/images/logo.png" alt="SVR Aesthetics" width={100} height={54} className="h-11 w-auto" />
            <button onClick={() => setOpen(false)} className="flex size-10 items-center justify-center rounded-full border border-sand" aria-label="Close menu">
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-2">
            <MobileLink href="/" onClick={() => setOpen(false)}>Home</MobileLink>
            {treatmentGroups.map((g) => (
              <MobileGroup key={g.label} group={g} onNavigate={() => setOpen(false)} />
            ))}
            <MobileGroup group={trainingGroup} onNavigate={() => setOpen(false)} />
            {primaryLinks.map((l) => (
              <MobileLink key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</MobileLink>
            ))}
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 pb-2 text-[13px] text-muted-ink">
              {utilityLinks.slice(0, 3).map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-plum">{l.label}</Link>
              ))}
            </div>
          </nav>

          <div className="border-t border-sand p-5">
            <a href="#book" onClick={() => setOpen(false)} className="block rounded-full bg-plum px-5 py-3.5 text-center font-semibold text-white">
              Book Free Consultation
            </a>
            <a href={siteInfo.phoneHref} className="mt-3 flex items-center justify-center gap-2 rounded-full border border-plum px-5 py-3.5 font-semibold text-plum">
              <Phone className="size-4" /> {siteInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function NavTrigger({ label, active, onEnter, onClick }: { label: string; active: boolean; onEnter: () => void; onClick: () => void }) {
  return (
    <button
      onMouseEnter={onEnter}
      onClick={onClick}
      aria-expanded={active}
      className={cn("flex items-center gap-1 py-2 transition-colors hover:text-plum", active && "text-plum")}
    >
      {label}
      <ChevronDown className={cn("size-3.5 transition-transform", active && "rotate-180")} />
    </button>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick} className="font-display block border-b border-sand py-4 text-[22px] text-ink">
      {children}
    </Link>
  );
}

function MobileGroup({ group, onNavigate }: { group: { label: string; href: string; items: { label: string; href: string }[] }; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-sand">
      <button onClick={() => setExpanded((v) => !v)} className="font-display flex w-full items-center justify-between py-4 text-left text-[22px] text-ink" aria-expanded={expanded}>
        {group.label}
        <ChevronDown className={cn("size-5 text-plum transition-transform", expanded && "rotate-180")} />
      </button>
      <div className={cn("grid transition-all duration-300", expanded ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <ul className="overflow-hidden">
          <li>
            <Link href={group.href} onClick={onNavigate} className="block py-2 text-[15px] font-semibold text-plum">
              All {group.label}
            </Link>
          </li>
          {group.items.map((i) => (
            <li key={i.href}>
              <Link href={i.href} onClick={onNavigate} className="block py-2 text-[15px] text-muted-ink">
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
