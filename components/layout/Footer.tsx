import Link from "next/link";
import { SiGithub, SiTelegram } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { socials, SocialLink } from "../constants/socials";
import { githubStats } from "../constants/github";

const iconMap = { github: SiGithub, telegram: SiTelegram, email: Mail };

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg text-primary">●</span>
            <span className="text-sm font-medium text-text">Cozyfolio</span>
            <span className="text-xs text-muted">© {currentYear}</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted">
            <span>{githubStats.repositories}</span>
            <span aria-hidden="true">·</span>
            <span>{githubStats.commits}</span>
            <Link
              href={githubStats.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-text transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              GitHub @Ava-91
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {socials.map((social: SocialLink) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-1.5 text-muted transition-colors duration-200 hover:bg-surface/50 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-muted md:text-left">Built one component at a time.</p>
      </div>
    </footer>
  );
};

export default Footer;
