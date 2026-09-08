import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLandingPage, landingPages } from "@/data/landing-pages";
import { LandingPage } from "@/components/redesign/landing/LandingPage";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.sub,
    robots: { index: false, follow: false },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();
  return <LandingPage page={page} />;
}
