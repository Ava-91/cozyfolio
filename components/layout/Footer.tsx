import Link from "next/link";
import { SiGithub, SiTelegram } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import { socials, SocialLink } from "../constants/socials";

const iconMap = {
  github: SiGithub,
  telegram: SiTelegram,
  email: Mail,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">●</span>
            <span className="text-sm font-medium text-text">Cozyfolio</span>
            <span className="text-xs text-muted">© {currentYear}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socials.map((social: SocialLink) => {
              const Icon = iconMap[social.icon];
              return (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-text transition-colors duration-200 p-1.5 rounded-lg hover:bg-surface/50"
                  aria-label={social.name}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>

          {/* Credits */}
          <p className="text-xs text-muted">
            Built one component at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;