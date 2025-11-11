import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  image: string;
  tools: string[];
}

const ProjectCard = ({ title, role, description, image, tools }: ProjectCardProps) => {
  return (
    <Card className="group bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden hover:shadow-glow">
      <div className="relative overflow-hidden aspect-video bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <Button variant="default" size="sm" className="gap-2">
            View Project <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <CardContent className="p-6 space-y-3">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-primary text-sm font-medium">{role}</p>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tools.map((tool, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium bg-secondary text-foreground rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
