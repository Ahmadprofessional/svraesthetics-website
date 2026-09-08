"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setVisible(true);
      cleanup();
    };

    const isOnScreen = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    // Primary: efficient, fires as the element crosses into the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(el);

    // Fallback: fast momentum scrolling can advance the page across several
    // animation frames between IntersectionObserver callbacks, occasionally
    // skipping the crossing entirely and leaving the element stuck at
    // opacity 0 forever. A throttled scroll/resize check catches that case
    // by testing the element's actual position directly.
    let ticking = false;
    const onScroll = () => {
      if (ticking || done) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (isOnScreen()) reveal();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    function cleanup() {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }

    if (isOnScreen()) reveal();

    return cleanup;
  }, [visible]);

  return (
    <div
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
