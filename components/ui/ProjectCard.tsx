import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";
import Badge from "./Badge";
import Button from "./Button";

export interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  featured = false,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)]",
        featured && "border-primary/20",
        className
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-background",
          featured ? "aspect-[2.4/1]" : "aspect-video"
        )}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface px-6">
            <div className="text-center">
              <span className="text-4xl font-semibold tracking-tight text-primary/60">
                {title.slice(0, 1).toUpperCase()}
              </span>
              <p className="mt-2 text-sm font-medium text-muted">{title}</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className={cn("p-6", featured && "md:p-7")}>
        <div className="mb-2 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-text">{title}</h3>
          {featured && (
            <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
              Featured
            </span>
          )}
        </div>
        <p className="mb-4 line-clamp-2 text-sm text-muted">{description}</p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
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
                <ExternalLink className="h-4 w-4" />
                Live
              </Button>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="md">
                <SiGithub className="h-4 w-4" />
                Code
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
