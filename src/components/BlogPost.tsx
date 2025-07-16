import { cn } from "@/lib/utils";
import { Calendar, ExternalLink } from "lucide-react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  platform: string;
  className?: string;
}

export const BlogPost = ({
  title,
  excerpt,
  date,
  readTime,
  url,
  platform,
  className
}: BlogPostProps) => {
  return (
    <article
      className={cn(
        "group bg-card rounded-xl p-6 border border-border",
        "shadow-soft hover:shadow-hover",
        "transition-all duration-300",
        "hover:bg-accent/50 hover:-translate-y-1",
        className
      )}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs font-medium">
            {platform}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground">
            {readTime} read
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Read more
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
};