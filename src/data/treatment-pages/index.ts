import type { TreatmentPageData } from "@/types/treatment-page";
import { treatments } from "@/data/treatments";
import { extraTreatments } from "@/data/extra-treatments";
import { dermalFillersPage } from "./dermal-fillers";
import { buildTreatmentPage, catalog } from "./build";

const extraSlugs = new Set(extraTreatments.map((t) => t.slug));
const source = [...extraTreatments, ...treatments.filter((t) => !extraSlugs.has(t.slug) && t.slug !== dermalFillersPage.slug)];

export const treatmentPages: TreatmentPageData[] = [dermalFillersPage, ...source.map(buildTreatmentPage)];

export function getTreatmentPage(slug: string) {
  return treatmentPages.find((p) => p.slug === slug);
}

export const treatmentCategories = Array.from(new Set(["Injectables", "Dermal Fillers", "Facials & Skin", "Skin & Lesion Removal", "Laser, Hair & Wellness"]));

export function treatmentsByCategory(category: string) {
  return treatmentPages.filter((p) => p.category === category);
}

export { catalog };
