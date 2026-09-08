import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTreatmentPage, treatmentPages } from "@/data/treatment-pages";
import { TreatmentPage } from "@/components/redesign/treatment/TreatmentPage";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return treatmentPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getTreatmentPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://svraesthetics.co.uk/${page.slug}` },
    openGraph: { title: page.metaTitle, description: page.metaDescription, images: [page.heroImage] },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getTreatmentPage(slug);
  if (!page) notFound();
  return <TreatmentPage page={page} />;
}
