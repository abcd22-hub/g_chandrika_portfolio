import ExperienceItem from "@/components/ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Senior UI/UX Designer",
      duration: "2021 - Present",
      responsibilities: [
        "Led design efforts for 15+ enterprise applications, improving user satisfaction by 40%",
        "Collaborated with cross-functional teams to deliver pixel-perfect interfaces",
        "Mentored junior designers and established design system standards"
      ]
    },
    {
      company: "Digital Innovators Inc.",
      role: "UI/UX Designer",
      duration: "2019 - 2021",
      responsibilities: [
        "Designed and prototyped mobile and web applications for diverse clients",
        "Conducted user research and usability testing to inform design decisions",
        "Worked closely with developers to ensure seamless design implementation"
      ]
    },
    {
      company: "Creative Studio",
      role: "Junior Designer",
      duration: "2018 - 2019",
      responsibilities: [
        "Created wireframes, mockups, and prototypes for client projects",
        "Assisted in developing brand identities and marketing materials",
        "Participated in brainstorming sessions and design critiques"
      ]
    },
    {
      company: "Freelance",
      role: "Freelance Designer",
      duration: "2017 - 2018",
      responsibilities: [
        "Delivered custom design solutions for small businesses and startups",
        "Managed multiple projects simultaneously while maintaining quality",
        "Built strong client relationships through excellent communication"
      ]
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
          My <span className="text-primary">Experience</span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Over 5 years of professional experience creating exceptional digital experiences 
          for companies ranging from startups to enterprise organizations.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>

      {/* Education Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          Education & <span className="text-primary">Certifications</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Bachelor of Design</h3>
            <p className="text-primary font-medium mb-2">Design Institute</p>
            <p className="text-sm text-muted-foreground">2013 - 2017</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">📜</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">UX Design Certification</h3>
            <p className="text-primary font-medium mb-2">Google UX Design Professional</p>
            <p className="text-sm text-muted-foreground">2020</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Interaction Design</h3>
            <p className="text-primary font-medium mb-2">Interaction Design Foundation</p>
            <p className="text-sm text-muted-foreground">2019</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Design Thinking Workshop</h3>
            <p className="text-primary font-medium mb-2">IDEO U</p>
            <p className="text-sm text-muted-foreground">2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
