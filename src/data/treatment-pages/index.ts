import type { TreatmentPageData } from "@/types/treatment-page";
import { dermalFillersPage } from "./dermal-fillers";

export const treatmentPages: TreatmentPageData[] = [dermalFillersPage];

export function getTreatmentPage(slug: string) {
  return treatmentPages.find((p) => p.slug === slug);
}
