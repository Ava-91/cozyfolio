export type SocialIcon = "github" | "telegram" | "email" | "linkedin";

export interface Social {
  name: string;
  href: string;
  icon: SocialIcon;
}