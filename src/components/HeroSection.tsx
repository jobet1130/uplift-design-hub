import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: "default" | "overlay" | "simple";
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  ctaText,
  ctaLink,
  variant = "default",
  className
}: HeroSectionProps) => {
  const isOverlay = variant === "overlay";
  const isSimple = variant === "simple";

  return (
    <section 
      className={cn(
        "relative min-h-[60vh] flex items-center justify-center",
        isSimple && "min-h-[40vh] bg-muted",
        className
      )}
    >
      {/* Background Image */}
      {!isSimple && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
          {isOverlay && (
            <div className="absolute inset-0 bg-gradient-overlay" />
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {subtitle && (
            <p className={cn(
              "text-sm font-body font-medium uppercase tracking-wide mb-4",
              isOverlay || isSimple ? "text-primary" : "text-primary"
            )}>
              {subtitle}
            </p>
          )}
          
          <h1 className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight",
            isOverlay ? "text-white" : isSimple ? "text-foreground" : "text-foreground"
          )}>
            {title}
          </h1>
          
          {description && (
            <p className={cn(
              "text-lg md:text-xl font-body leading-relaxed mb-8 max-w-2xl mx-auto",
              isOverlay ? "text-white/90" : isSimple ? "text-muted-foreground" : "text-muted-foreground"
            )}>
              {description}
            </p>
          )}
          
          {ctaText && ctaLink && (
            <Button 
              variant={isOverlay ? "hero" : "cta"} 
              size="xl" 
              asChild
            >
              <a href={ctaLink}>
                {ctaText}
              </a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;