import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
}

export const SocialLink = ({ href, icon: Icon, label, className }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg",
        "text-muted-foreground hover:text-primary",
        "border border-border hover:border-primary/20",
        "bg-card hover:bg-accent",
        "transition-all duration-300",
        "hover:shadow-soft hover:-translate-y-0.5",
        "text-sm font-medium",
        className
      )}
      aria-label={label}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
};