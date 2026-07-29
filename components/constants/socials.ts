export interface SocialLink {
  name: string;
  href: string;
  icon: "github" | "telegram" | "email";
}

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/Ava-91",
    icon: "github",
  }
];