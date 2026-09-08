export interface TrainingCourse {
  slug: string;
  title: string;
  whoFor: string;
  entryRequirements?: string;
  overview: string[];
  theory: string[];
  practical: string[];
  treatmentAreas?: string[];
  duration: string;
}
