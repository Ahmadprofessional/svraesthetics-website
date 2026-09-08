"use client";

import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447792284575"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
