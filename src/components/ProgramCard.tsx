import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const ProgramCard = ({
  title,
  description,
  image,
  buttonText = "Learn More",
  buttonLink = "#",
  className
}: ProgramCardProps) => {
  return (
    <div className={cn(
      "group bg-card rounded-xl shadow-soft hover:shadow-medium transition-smooth overflow-hidden",
      className
    )}>
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-smooth">
          {title}
        </h3>
        
        <p className="text-muted-foreground font-body leading-relaxed">
          {description}
        </p>
        
        <Button variant="outline" className="group/btn" asChild>
          <a href={buttonLink}>
            {buttonText}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProgramCard;