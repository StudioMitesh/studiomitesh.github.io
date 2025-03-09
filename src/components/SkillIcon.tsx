
import { cn } from "@/lib/utils";

interface SkillIconProps {
  name: string;
  icon: string;
  category: string;
  index: number;
}

const SkillIcon = ({ name, icon, category, index }: SkillIconProps) => {
  return (
    <div 
      className={cn(
        "animate-on-scroll flex flex-col items-center justify-center p-3 text-center transition-all hover:scale-105",
        `delay-${(index % 5) * 100}`
      )}
    >
      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-card p-2 shadow-sm border border-border hover:border-primary transition-colors">
        <img src={icon} alt={name} className="h-8 w-8 object-contain" />
      </div>
      <span className="text-xs font-medium">{name}</span>
    </div>
  );
};

export default SkillIcon;
