import { cn } from "@/lib/utils";

interface SkillTagProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SkillTag = ({ children, className, style }: SkillTagProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium",
        "bg-skill-tag text-skill-tag-foreground",
        "border border-primary/10",
        "transition-all duration-300",
        "hover:bg-primary/5 hover:border-primary/20 hover:scale-105",
        "shadow-soft",
        className
      )}
      style={style}
    >
      {children}
    </span>
  );
};