export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
  images?: string[];    // paths to slideshow images
  imageCount?: number;
}
