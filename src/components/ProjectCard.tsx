import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  compact?: boolean;
}

const ProjectCard = ({ project, index, featured = false, compact = false }: ProjectCardProps) => {
  const { title, description, image, link, linkLabel, github, status, badges, role, stack, cover } = project;
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // cached images can finish before React attaches onLoad
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  // own observer: cards mount after filtering/expanding, past the page-level one
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("visible");
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "project-card animate-on-scroll flex flex-col",
        compact && "!p-4",
        `delay-${(index % 5) * 100}`
      )}
    >
      <div className={cn(
        "project-image-container aspect-video w-full overflow-hidden rounded-lg bg-muted",
        compact ? "mb-3" : "mb-4",
        !loaded && "animate-pulse"
      )}>
        <img
          src={image}
          alt={title}
          ref={imgRef}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={cn(
            "project-image h-full w-full bg-muted transition-all duration-700",
            cover ? "object-cover object-top" : "object-contain",
            loaded ? "blur-0 scale-100 opacity-100" : "scale-105 opacity-0 blur-lg"
          )}
          loading="lazy"
        />
      </div>

      {(status || badges?.length) && (
        <div className={cn("flex flex-wrap", compact ? "mb-2 gap-1.5" : "mb-3 gap-2")}>
          {status && (
            <Badge variant="outline" className={cn("gap-1.5", compact && "px-2 py-0 text-[11px]")}>
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {status}
            </Badge>
          )}
          {badges?.map((badge) => (
            <Badge key={badge} variant="secondary" className={cn(compact && "px-2 py-0 text-[11px]")}>{badge}</Badge>
          ))}
        </div>
      )}

      <h3 className={cn("mb-1 font-bold", featured ? "text-2xl" : compact ? "text-base leading-snug" : "text-xl")}>{title}</h3>
      {role && <p className="mb-2 text-sm font-medium text-primary">{role}</p>}
      <p className={cn("text-muted-foreground", featured ? "mb-4 text-base" : compact ? "mb-3 line-clamp-4 text-xs" : "mb-4 text-sm")}>{description}</p>

      <div className="mt-auto">
        <ul className={cn("flex flex-wrap gap-1.5", compact ? "mb-3" : "mb-4")} aria-label="Tech stack">
          {(compact ? stack.slice(0, 3) : stack).map((tech) => (
            <li key={tech} className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">{tech}</li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <ExternalLink className="h-4 w-4" />
              <span>{linkLabel ?? "View Project"}</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
