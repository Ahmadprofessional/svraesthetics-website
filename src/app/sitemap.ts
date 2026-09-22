import type { MetadataRoute } from "next";
import { treatmentPages } from "@/data/treatment-pages";
import { trainingCourses } from "@/data/training";
import { blogPosts } from "@/data/blog";
import { legalDocs } from "@/data/legal";

import { bloodTestsData } from "@/data/blood-tests";

const BASE = "https://svraesthetics.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["", "/treatments", "/blood-tests", "/about-us", "/pricing", "/contact-us", "/book-free-consultation", "/reviews", "/customers-gallery", "/faq", "/training", "/blogs"];
  return [
    ...core.map((p) => ({ url: `${BASE}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 })),
    ...treatmentPages.map((t) => ({ url: `${BASE}/${t.slug}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...Object.keys(bloodTestsData).map((slug) => ({ url: `${BASE}/blood-tests/${slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...trainingCourses.map((c) => ({ url: `${BASE}/${c.slug}`, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...blogPosts.map((b) => ({ url: `${BASE}/${b.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
    ...legalDocs.map((d) => ({ url: `${BASE}/${d.slug}`, changeFrequency: "yearly" as const, priority: 0.2 })),
  ];
}
