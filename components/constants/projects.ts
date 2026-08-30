import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "RepoShot",
    description:
      "Turn a GitHub repository into a polished, shareable image with themes, customization, and PNG export.",
    image: "",
    tags: ["Next.js", "TypeScript", "GitHub API"],
    githubUrl: "https://github.com/Ava-91/reposhot",
    liveUrl: "https://reposhot.vercel.app",
    featured: true,
    status: "Active",
    preview: { eyebrow: "Repository → shareable visual", steps: ["Paste a repo", "Customize the card", "Export PNG"] },
    problem: "GitHub repository links are useful but visually bland when shared.",
    solution: "RepoShot turns repository metadata into polished, customizable shareable cards.",
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
    status: "Active",
    preview: { eyebrow: "Images → visual vibes", steps: ["Scan locally", "Score confidence", "Review groups"] },
    problem: "Large image collections are easy to accumulate and difficult to organize by feeling.",
    solution: "VibeSorter analyzes visual characteristics and proposes reviewable vibe-based organization.",
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
    status: "Active",
    preview: { eyebrow: "Two libraries → one safe merge", steps: ["Compare", "Review conflicts", "Backup + merge"] },
    problem: "Merging two music libraries can silently overwrite metadata or artwork.",
    solution: "music-sync compares libraries conservatively and requires review before uncertain merges.",
  },
  {
    title: "Luna",
    description:
      "A local-first music library cleanup toolkit for metadata, artwork, duplicates, indexing, and reversible operations.",
    image: "",
    tags: ["Python", "SQLite", "CLI"],
    githubUrl: "https://github.com/Ava-91/luna",
    liveUrl: "",
    status: "Active",
    preview: { eyebrow: "Messy library → clean library", steps: ["Index", "Audit", "Apply reversible fixes"] },
  },
  {
    title: "Ava Night",
    description:
      "A midnight-blue Visual Studio Code theme designed for calm, focused coding sessions.",
    image: "/images/ava-night.png",
    tags: ["VS Code", "Theme API", "JSON"],
    githubUrl: "https://github.com/Ava-91/ava-night",
    liveUrl: "",
    status: "Maintained",
  },
  {
    title: "MusicPlayer",
    description:
      "A local-first music player with playlists, queue controls, metadata, artwork, search, and a polished interface.",
    image: "/images/musicplayer.png",
    tags: ["Next.js", "React", "TypeScript"],
    githubUrl: "https://github.com/Ava-91/MusicPlayer",
    liveUrl: "",
    status: "Completed",
  },
];
