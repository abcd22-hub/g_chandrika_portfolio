import { Briefcase } from "lucide-react";

interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  logo?: string;
}

const ExperienceItem = ({ company, role, duration, responsibilities }: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 border-l-2 border-border group hover:border-primary transition-colors">
      <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center group-hover:shadow-glow transition-shadow">
        <Briefcase className="w-3 h-3 text-primary-foreground" />
      </div>
      
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-card">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-1">{role}</h3>
          <p className="text-primary font-medium mb-1">{company}</p>
          <p className="text-sm text-muted-foreground">{duration}</p>
        </div>
        
        <ul className="space-y-2">
          {responsibilities.map((item, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-start">
              <span className="text-primary mr-2 mt-1">▸</span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
