export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  preview?: {
    eyebrow: string;
    steps: string[];
  };
  status?: "Active" | "Maintained" | "Experiment" | "Completed";
  problem?: string;
  solution?: string;
}
