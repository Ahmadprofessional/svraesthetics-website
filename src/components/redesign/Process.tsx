import { processSteps } from "@/data/redesign";
import { Reveal } from "@/components/Reveal";

export function Process() {
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-xl">
            <p className="eyebrow">How it works</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
              Calm, clear, <span className="italic text-plum">unhurried</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="bg-white p-8">
              <p className="font-display text-5xl text-blush">{s.n}</p>
              <h3 className="mt-6 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-ink">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
