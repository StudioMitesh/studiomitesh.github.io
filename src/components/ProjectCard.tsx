
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  className?: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  github,
  className,
  index,
}: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "project-card animate-on-scroll",
        `delay-${(index % 5) * 100}`,
        className
      )}
    >
      <div className="project-image-container mb-4 aspect-video w-full overflow-hidden rounded-lg bg-muted">
        <img
          src={image}
          alt={title}
          className="project-image h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center gap-3">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            <span>View Project</span>
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
  );
};

export default ProjectCard;
