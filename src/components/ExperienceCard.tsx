
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  company: string;
  title: string;
  location: string;
  date: string;
  description: string[];
  index: number;
}

const ExperienceCard = ({
  company,
  title,
  location,
  date,
  description,
  index,
}: ExperienceCardProps) => {
  return (
    <div className={cn("experience-item animate-on-scroll", `delay-${(index % 3) * 100}`)}>
      <div className="mb-1 flex flex-wrap items-center gap-x-2">
        <h3 className="text-lg font-bold">{company}</h3>
        <span className="text-sm text-muted-foreground">| {location}</span>
      </div>
      <p className="mb-1 text-base font-medium">{title}</p>
      <p className="mb-3 text-sm text-muted-foreground">{date}</p>
      <ul className="list-inside space-y-2 text-sm">
        {description.map((item, idx) => (
          <li key={idx} className="relative pl-5 before:absolute before:left-0 before:top-[0.4em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/40 before:content-['']">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
