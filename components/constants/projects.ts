import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "RepoShot",
    description:
      "Turn a GitHub repository into a polished, shareable image with themes, customization, and PNG export.",
    image: "",
    tags: ["Next.js", "TypeScript", "GitHub API"],
    githubUrl: "https://github.com/Ava-91/reposhot",
    liveUrl: "",
    featured: true,
  },
  {
    title: "VibeSorter",
    description:
      "Organize image libraries by visual vibe using local analysis, confidence scores, caching, and reviewable organization.",
    image: "",
    tags: ["Python", "Pillow", "CLI"],
    githubUrl: "https://github.com/Ava-91/VibeSorter",
    liveUrl: "",
    featured: true,
  },
  {
    title: "music-sync",
    description:
      "Safely reconcile two independent music libraries with metadata and artwork conflict detection, fuzzy matching, review, and backups.",
    image: "",
    tags: ["Python", "Mutagen", "Pillow"],
    githubUrl: "https://github.com/Ava-91/music-sync",
    liveUrl: "",
    featured: true,
  },
  {
    title: "Luna",
    description:
      "A local-first music library cleanup toolkit for metadata, artwork, duplicates, indexing, and reversible operations.",
    image: "",
    tags: ["Python", "SQLite", "CLI"],
    githubUrl: "https://github.com/Ava-91/luna",
    liveUrl: "",
  },
  {
    title: "Ava Night",
    description:
      "A midnight-blue Visual Studio Code theme designed for calm, focused coding sessions.",
    image: "/images/ava-night.png",
    tags: ["VS Code", "Theme API", "JSON"],
    githubUrl: "https://github.com/Ava-91/ava-night",
    liveUrl: "",
  },
  {
    title: "MusicPlayer",
    description:
      "A local-first music player with playlists, queue controls, metadata, artwork, search, and a polished interface.",
    image: "/images/musicplayer.png",
    tags: ["Next.js", "React", "TypeScript"],
    githubUrl: "https://github.com/Ava-91/MusicPlayer",
    liveUrl: "",
  },
];
