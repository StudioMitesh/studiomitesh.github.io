
import { cn } from "@/lib/utils";

interface OrganizationCardProps {
  title: string;
  role: string;
  date?: string;
  description: string[];
  index: number;
}

const OrganizationCard = ({
  title,
  role,
  date,
  description,
  index,
}: OrganizationCardProps) => {
  return (
    <div className={cn(
      "animate-on-scroll rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md", 
      `delay-${(index % 4) * 100}`
    )}>
      <h3 className="mb-1 text-lg font-bold">{title}</h3>
      <p className="mb-1 text-base font-medium">{role}</p>
      {date && <p className="mb-3 text-sm text-muted-foreground">{date}</p>}
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

export default OrganizationCard;
