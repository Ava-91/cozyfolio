import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";
import Badge from "./Badge";
import { Button } from "./Button";

export interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300",
        "hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:-translate-y-1",
        className
      )}
    >
      {/* Image */}
      <div className="relative w-full aspect-video bg-background overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted">
            <svg
              className="w-16 h-16 opacity-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>
        <p className="text-muted text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {liveUrl && (
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md">
                <ExternalLink className="w-4 h-4" />
                Live
              </Button>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="md">
                <SiGithub className="h-4 w-4" />
                    code
                </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;