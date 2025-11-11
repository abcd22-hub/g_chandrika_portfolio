import { Palette, Code, Lightbulb, Users } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Design Tools", items: ["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop"] },
    { category: "Development", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
    { category: "Design Skills", items: ["User Research", "Wireframing", "Prototyping", "UI Design", "UX Strategy"] },
    { category: "Soft Skills", items: ["Communication", "Collaboration", "Problem Solving", "Time Management"] },
  ];

  const values = [
    {
      icon: Palette,
      title: "Creative Excellence",
      description: "I believe every pixel matters and strive to create visually stunning interfaces."
    },
    {
      icon: Users,
      title: "User-Centered",
      description: "Understanding user needs and behaviors is at the heart of every design decision."
    },
    {
      icon: Code,
      title: "Design & Code",
      description: "I bridge the gap between design and development, ensuring seamless implementation."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "I constantly explore new trends and technologies to deliver cutting-edge solutions."
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
          About <span className="text-primary">Me</span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
      </div>

      {/* Story Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden border-4 border-primary shadow-glow">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="Design workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">My Design Philosophy</h2>
          <p className="text-muted-foreground leading-relaxed">
            With over 5 years of experience in UI/UX design, I've had the privilege of working with 
            diverse clients across various industries. My journey began with a passion for art and 
            technology, which naturally evolved into a career in digital design.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I specialize in creating intuitive, accessible, and beautiful digital experiences. 
            Every project is an opportunity to solve unique challenges and deliver solutions that 
            not only meet business goals but also delight users.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not designing, you'll find me exploring the latest design trends, contributing 
            to open-source projects, or mentoring aspiring designers in the community.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          What Drives <span className="text-primary">My Work</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-glow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Skills & <span className="text-primary">Expertise</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-secondary text-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
