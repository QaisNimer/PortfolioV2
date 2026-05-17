export interface Skill {
  name: string;
  icon?: string;        // URL or local path
  category: SkillCategory;
  rotation?: number;   // sticker tilt angle in degrees
}

export type SkillCategory = 'backend' | 'architecture' | 'frontend' | 'tools';
