import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/ProjectCard";
import { projects, type ProjectTag } from "@/data/projects";

const featured = projects.filter((p) => p.tier === "featured");
const more = projects.filter((p) => p.tier === "more");
const older = projects.filter((p) => p.tier === "older");

// Only offer chips that match something below the featured row
const filterTags = Array.from(new Set([...more, ...older].flatMap((p) => p.tags))).sort() as ProjectTag[];

const ProjectsSection = () => {
  const [searchParams] = useSearchParams();
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [showOlder, setShowOlder] = useState(false);

  const param = searchParams.get("filter");
  const active = filterTags.find((t) => t === param) ?? null;

  const setFilter = (tag: ProjectTag | null) => {
    const next = new URLSearchParams(searchParams);
    if (tag) next.set("filter", tag);
    else next.delete("filter");
    navigate({ search: next.toString(), hash }, { replace: true });
  };

  const matches = (tags: ProjectTag[]) => !active || tags.includes(active);
  const visibleMore = more.filter((p) => matches(p.tags));
  const visibleOlder = older.filter((p) => matches(p.tags));

  return (
    <section id="projects" className="scroll-mt-16 bg-secondary/30 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title animate-on-scroll">Projects</h2>

        <div className="mb-16">
          <h3 className="mb-6 text-xl font-semibold">Featured Projects</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featured.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} featured />
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">More Projects</h3>
          <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {[null, ...filterTags].map((tag) => (
              <button
                key={tag ?? "all"}
                onClick={() => setFilter(tag)}
                aria-pressed={active === tag}
                className={cn(
                  "rounded-full border px-3 py-1 text-sm font-medium transition-colors",
                  active === tag
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                )}
              >
                {tag ?? "All"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleMore.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} compact />
            ))}
          </div>

          {visibleOlder.length > 0 && (
            <div className="mt-10">
              <button
                onClick={() => setShowOlder(!showOlder)}
                aria-expanded={showOlder}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <ChevronDown className={cn("h-4 w-4 transition-transform", showOlder && "rotate-180")} />
                {showOlder ? "Hide" : "Show"} older projects ({visibleOlder.length})
              </button>
              {showOlder && (
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {visibleOlder.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} compact />
                  ))}
                </div>
              )}
            </div>
          )}

          {visibleMore.length === 0 && visibleOlder.length === 0 && (
            <p className="text-sm text-muted-foreground">No projects match this filter.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
