import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollAnimationWrapperProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";
  delay?: number;
}

export const ScrollAnimationWrapper = ({ 
  children, 
  className,
  animationType = "fade-up",
  delay = 0
}: ScrollAnimationWrapperProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-left": "translate-x-8 opacity-0", 
    "fade-right": "-translate-x-8 opacity-0",
    "scale": "scale-95 opacity-0",
    "fade": "opacity-0"
  };

  const visibleClasses = {
    "fade-up": "translate-y-0 opacity-100",
    "fade-left": "translate-x-0 opacity-100",
    "fade-right": "translate-x-0 opacity-100", 
    "scale": "scale-100 opacity-100",
    "fade": "opacity-100"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visibleClasses[animationType] : animationClasses[animationType],
        className
      )}
      style={{ 
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {children}
    </div>
  );
};