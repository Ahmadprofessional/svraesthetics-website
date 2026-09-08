import Image from "next/image";
import { siteInfo } from "@/data/site";

export function Hero() {
  return (
    <section className="bg-white">
      <a href={siteInfo.bookingHref} className="block">
        <Image
          src="/images/hero-banner.jpg"
          alt="SVR Aesthetics in UK"
          width={1874}
          height={880}
          priority
          className="mx-auto w-full max-w-[1874px]"
        />
      </a>
    </section>
  );
}
