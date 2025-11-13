import { Palette, Code, Lightbulb, Users, Figma, Sparkles, Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const designTools = [
    { name: "Figma", description: "Wireframing, Prototyping, Design Systems" },
    { name: "Usability Testing", description: "User Research" },
    { name: "HTML/CSS/JS", description: "Frontend Development" },
    { name: "React", description: "Component Development" },
  ];

  const skills = [
    "Figma", "Wireframing", "Prototyping", "Design Systems",
    "Usability Testing", "User Research", "HTML", "CSS", 
    "JavaScript", "React", "User Flows", "Storyboarding",
    "Communication", "Collaboration", "Problem-Solving", "Adaptability"
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Research & Ideation",
      description: "Understanding user needs through research and brainstorming solutions."
    },
    {
      icon: Palette,
      title: "Wireframing",
      description: "Creating low-fidelity designs to map out user flows and layouts."
    },
    {
      icon: Code,
      title: "Prototyping in Figma",
      description: "Building interactive prototypes to test and validate ideas."
    },
    {
      icon: Lightbulb,
      title: "Iterate & Collaborate",
      description: "Refining designs based on feedback and team collaboration."
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
          About <span className="text-primary">Me</span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto"></div>
      </div>

      {/* Detailed Bio */}
      <div className="mb-20">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground">Hi, I'm <span className="text-primary">Chandrika</span></h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a student UI/UX designer at <strong className="text-foreground">ICFAI University</strong>, 
            passionate about creating intuitive and beautiful digital experiences. My journey into design 
            began during my coursework where I discovered how design can simplify technology and make it 
            accessible to everyone.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Through my academic projects, freelance work, and internships, I've developed a deep 
            appreciation for problem-solving through design. I love the challenge of understanding user 
            needs and transforming complex problems into simple, elegant solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">My Core Philosophy:</strong> Simplicity, empathy, and 
            accessibility drive my design process. I believe that great design should be invisible—it 
            should just work, seamlessly and beautifully.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
              <span className="text-sm font-medium text-primary">NPTEL Certified</span>
            </div>
            
          </div>
        </div>
      </div>

      {/* Design Process & Philosophy */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-4">
          My Design <span className="text-primary">Process</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          My approach begins with research and ideation, followed by wireframing and prototyping in Figma. 
          I believe iterative feedback and collaboration are key to great outcomes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-glow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-primary">STEP {index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fun Facts / Personal Interests */}
      <div className="mb-20">
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-foreground blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary-foreground blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Beyond Design
            </h2>
            <p className="text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto mb-4">
              Outside design, I enjoy sketching, participating in tech club workshops, and gaming. 
              I'm always exploring new design trends and experimenting with colors and layouts to 
              keep my creativity flowing.
            </p>
            <p className="text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              I believe that curiosity and continuous learning are essential to growth, both as a 
              designer and as a person.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action / Connect */}
      <div className="bg-card border border-border rounded-3xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Let's Create Something <span className="text-primary">Impactful</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
          I'm always excited to collaborate on meaningful projects and connect with fellow designers 
          and innovators. Let's work together to create something amazing!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button asChild size="lg" className="gap-2">
            <Link to="/portfolio">
              <Palette className="w-4 h-4" />
              View My Portfolio
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="https://www.linkedin.com/in/g-chandrika?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </Button>
        </div>
        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="mailto:g.chandrika22@ifheindia.org"
            className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
