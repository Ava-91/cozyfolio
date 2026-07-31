export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "CMS"
  | "Tools"
  | "Design"
  | "Other";

export type SkillLevel =
  | "Learning"
  | "Intermediate"
  | "Advanced";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;

  icon?: string;

  featured?: boolean;

  years?: number;
}