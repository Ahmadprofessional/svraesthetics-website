import type { Metadata } from "next";
import Image from "next/image";
import { beforeAfterImages } from "@/data/site";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Before & After Gallery | SVR Aesthetics Milton Keynes",
  description: "Real, unretouched before and after results from SVR Aesthetics clients in Milton Keynes — Botox, cheek augmentation, lip filler and more.",
  alternates: { canonical: "https://svraesthetics.co.uk/customers-gallery" },
};

export default function GalleryPage() {
  return (
    <Shell>
      <PageHero eyebrow="Customers gallery" title="Before & after," highlight="untouched" intro="Real results from real clients, photographed in clinic and shared with their permission." crumbs={[{ label: "Customers Gallery" }]} />
      <section className="bg-plum-deep py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 sm:gap-5 sm:px-6 lg:grid-cols-4">
          {beforeAfterImages.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <figure className="group overflow-hidden rounded-2xl bg-plum">
                <div className="relative aspect-[4/5]">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="px-4 py-3 text-[13px] text-ivory/80">{img.alt}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl px-4 text-center text-[14px] text-ivory/70">Individual results vary. Photos are shared with client consent and are not retouched.</p>
      </section>
      <BookingCta />
    </Shell>
  );
}
