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
  preview?: { eyebrow: string; steps: string[] };
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
  preview,
  className,
}: ProjectCardProps) => {
  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300",
        "hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_40px_rgb(0,0,0,0.32)]",
        featured && "relative border-primary/20 bg-surface/80",
        className
      )}
    >
      {featured && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />
      )}

      <div
        className={cn(
          "relative w-full overflow-hidden bg-background",
          featured ? "aspect-[2.4/1]" : "aspect-video"
        )}
      >
        {image ? (
          <Image
            src={image}
            alt={`${title} project preview`}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 1200px" : "(max-width: 768px) 100vw, 50vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : preview ? (
          <div className="flex h-full flex-col justify-between bg-gradient-to-br from-surface to-background p-6 md:p-8">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary/80">{preview.eyebrow}</p>
              <div className="mt-5 h-px w-full bg-border" />
            </div>

            <div className="grid gap-2 sm:grid-cols-3">
              {preview.steps.map((step, index) => (
                <div
                  key={step}
                  className="animate-pulse rounded-xl border border-border bg-background/60 p-3"
                  style={{ animationDelay: `${index * 350}ms` }}
                >
                  <span className="text-[10px] text-muted">0{index + 1}</span>
                  <p className="mt-1 text-sm font-medium text-text">{step}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface px-6">
            <div className="text-center">
              <span className={cn("font-semibold tracking-tight text-primary/60", featured ? "text-5xl" : "text-4xl")}>
                {title.slice(0, 1).toUpperCase()}
              </span>
              <p className="mt-2 text-sm font-medium text-muted">{title}</p>
            </div>
          </div>
        )}
      </div>

      <div className={cn("p-6", featured && "md:p-8")}>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <h3 className={cn("font-semibold text-text", featured ? "text-xl" : "text-lg")}>{title}</h3>
          {featured && (
            <span className="rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
              Featured
            </span>
          )}
        </div>
        <p className={cn("mb-5 text-muted", featured ? "max-w-3xl text-base leading-7" : "line-clamp-2 text-sm")}>
          {description}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge key={tag} variant="default">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {liveUrl && (
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open the live ${title} project`}>
              <Button variant="primary" size="md"><ExternalLink className="h-4 w-4" aria-hidden="true" />Live</Button>
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code on GitHub`}>
              <Button variant="ghost" size="md"><SiGithub className="h-4 w-4" aria-hidden="true" />Code</Button>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
