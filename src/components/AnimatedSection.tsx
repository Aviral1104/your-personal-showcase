import { ReactNode, forwardRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, id, delay = 0 }, _ref) => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "transition-all duration-1000 ease-out",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12",
          className
        )}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </section>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
