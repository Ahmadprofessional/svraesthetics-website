"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/data/site";

export function StickyBar({ name, fromPrice }: { name: string; fromPrice: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-ivory/95 px-4 py-3 backdrop-blur transition-transform duration-300 lg:hidden",
        show ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-[12px] text-muted-ink">{name}</p>
          <p className="font-display text-xl leading-none text-ink">from {fromPrice}</p>
        </div>
        <a href={siteInfo.phoneHref} className="flex size-11 shrink-0 items-center justify-center rounded-full border border-plum text-plum" aria-label="Call us">
          <Phone className="size-4" />
        </a>
        <a href="#book" className="shrink-0 rounded-full bg-plum px-5 py-3 text-[14px] font-semibold text-white">
          Book free consult
        </a>
      </div>
    </div>
  );
}
