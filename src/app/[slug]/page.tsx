import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTreatmentPage, treatmentPages } from "@/data/treatment-pages";
import { getTrainingBySlug, trainingCourses } from "@/data/training";
import { getBlogPostBySlug, blogPosts } from "@/data/blog";
import { getLegalDoc, legalDocs } from "@/data/legal";
import { TreatmentPage } from "@/components/redesign/treatment/TreatmentPage";
import { TrainingCoursePage } from "@/components/redesign/TrainingCoursePage";
import { BlogPostPage } from "@/components/redesign/BlogPostPage";
import { LegalPage } from "@/components/redesign/LegalPage";

type Params = { slug: string };
const BASE = "https://svraesthetics.co.uk";

export function generateStaticParams(): Params[] {
  return [
    ...treatmentPages.map((p) => ({ slug: p.slug })),
    ...trainingCourses.map((c) => ({ slug: c.slug })),
    ...blogPosts.map((b) => ({ slug: b.slug })),
    ...legalDocs.map((d) => ({ slug: d.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `${BASE}/${slug}`;

  const treatment = getTreatmentPage(slug);
  if (treatment) {
    return {
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      alternates: { canonical },
      openGraph: { title: treatment.metaTitle, description: treatment.metaDescription, images: [treatment.heroImage] },
    };
  }
  const course = getTrainingBySlug(slug);
  if (course) {
    return { title: `${course.title} Milton Keynes | SVR Training Academy`, description: course.whoFor, alternates: { canonical } };
  }
  const post = getBlogPostBySlug(slug);
  if (post) {
    return { title: `${post.title} | SVR Aesthetics`, description: post.excerpt, alternates: { canonical }, openGraph: { images: [post.image] } };
  }
  const legal = getLegalDoc(slug);
  if (legal) {
    return { title: `${legal.title} | SVR Aesthetics`, description: legal.intro, alternates: { canonical } };
  }
  return {};
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  const treatment = getTreatmentPage(slug);
  if (treatment) return <TreatmentPage page={treatment} />;

  const course = getTrainingBySlug(slug);
  if (course) return <TrainingCoursePage course={course} />;

  const post = getBlogPostBySlug(slug);
  if (post) return <BlogPostPage post={post} />;

  const legal = getLegalDoc(slug);
  if (legal) return <LegalPage doc={legal} />;

  notFound();
}
