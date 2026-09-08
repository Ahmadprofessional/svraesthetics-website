const items = [
  "Registered Nurse Prescriber",
  "15+ years NHS experience",
  "100s of treatments every year",
  "Premium, clinically-safe products",
  "Natural-looking results",
  "Free consultation · 25% off first treatment",
];

export function TrustMarquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-sand bg-cream py-4">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-[13px] font-semibold uppercase tracking-[0.18em] text-plum/80">
            {t}
            <span className="size-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
