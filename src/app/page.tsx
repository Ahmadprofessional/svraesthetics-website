import { Header } from "@/components/redesign/Header";
import { Hero } from "@/components/redesign/Hero";
import { TrustMarquee } from "@/components/redesign/TrustMarquee";
import { Pillars } from "@/components/redesign/Pillars";
import { TreatmentMenu } from "@/components/redesign/TreatmentMenu";
import { MeetSonali } from "@/components/redesign/MeetSonali";
import { Results } from "@/components/redesign/Results";
import { Process } from "@/components/redesign/Process";
import { Reviews } from "@/components/redesign/Reviews";
import { PricingSnapshot } from "@/components/redesign/PricingSnapshot";
import { Faq } from "@/components/redesign/Faq";
import { BookingCta } from "@/components/redesign/BookingCta";
import { Footer } from "@/components/redesign/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PromoPopup } from "@/components/redesign/PromoPopup";
import { siteInfo } from "@/data/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "SVR Aesthetics",
  image: "https://svraesthetics.co.uk/images/redesign/hero.webp",
  url: "https://svraesthetics.co.uk",
  telephone: "+447792284575",
  email: siteInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 2, Stainer Square Centre, Queensway, Bletchley",
    addressLocality: "Milton Keynes",
    postalCode: "MK2 2FY",
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 52.044051, longitude: -0.754983 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "20:30" },
  ],
  priceRange: "££",
  medicalSpecialty: "Dermatology",
  sameAs: [siteInfo.facebook, siteInfo.instagram],
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustMarquee />
        <Pillars />
        <TreatmentMenu />
        <MeetSonali />
        <Results />
        <Process />
        <Reviews />
        <PricingSnapshot />
        <Faq />
        <BookingCta />
      </main>
      <Footer />
      <WhatsAppButton />
      <PromoPopup />
    </div>
  );
}
