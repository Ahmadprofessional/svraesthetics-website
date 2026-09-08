import type { Metadata } from "next";
import { Shell } from "@/components/redesign/Shell";
import { PageHero } from "@/components/redesign/PageHero";
import { BookingCta } from "@/components/redesign/BookingCta";

export const metadata: Metadata = {
  title: "Contact SVR Aesthetics | Bletchley, Milton Keynes",
  description:
    "Contact SVR Aesthetics in Bletchley, Milton Keynes. Call 077 92284575, WhatsApp us or book a free consultation online. Unit 2, Stainer Square Centre, Queensway, MK2 2FY.",
  alternates: { canonical: "https://svraesthetics.co.uk/contact-us" },
};

export default function ContactPage() {
  return (
    <Shell>
      <PageHero
        eyebrow="Contact us"
        title="We'd love to"
        highlight="hear from you"
        intro="Call, WhatsApp, email or use the form — whichever is easiest. We reply quickly during clinic hours and can usually book you in within days."
        crumbs={[{ label: "Contact Us" }]}
      />
      <BookingCta />
      <section className="bg-ivory">
        <iframe
          title="SVR Aesthetics on Google Maps — Unit 2, Stainer Square Centre, Queensway, Bletchley, Milton Keynes MK2 2FY"
          src="https://www.google.com/maps?q=Stainer+Square+Centre,+Queensway,+Bletchley,+Milton+Keynes+MK2+2FY&output=embed"
          className="h-[420px] w-full grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </Shell>
  );
}
