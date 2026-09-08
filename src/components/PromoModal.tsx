"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("svr-promo-seen");
    if (seen) return;
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    setOpen(false);
    sessionStorage.setItem("svr-promo-seen", "1");
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative grid w-full max-w-2xl grid-cols-1 overflow-hidden rounded-lg bg-white shadow-2xl sm:grid-cols-2">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full bg-white/90 text-brand-heading shadow hover:bg-white"
        >
          <X className="size-4" />
        </button>
        <div className="relative hidden sm:block">
          <Image src="/images/promo-bg.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-[#8300e9] px-6 py-10 text-center text-white">
          <h3 className="text-lg font-bold uppercase">Book Free Consultation</h3>
          <p className="text-2xl font-semibold leading-tight">
            Get Up To 25% Off
            <br />
            First Treatment
          </p>
          <form
            className="mt-2 w-full max-w-xs space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              close();
            }}
          >
            <Input placeholder="Name:" className="bg-white text-brand-heading" />
            <Input placeholder="Email:*" type="email" required className="bg-white text-brand-heading" />
            <Input placeholder="Phone:*" type="tel" required className="bg-white text-brand-heading" />
            <Button type="submit" className="w-full bg-black text-white hover:bg-black/80">
              Sign Me Up!
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
