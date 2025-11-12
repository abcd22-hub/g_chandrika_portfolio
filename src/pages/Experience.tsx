import ExperienceItem from "@/components/ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      company: "CloudBox99",
      role: "Web Development UI/UX Intern",
      duration: "Jun 2024 - Jul 2024",
      responsibilities: [
        "Designed wireframes, user flows, and UI mockups in Figma for two live web products",
        "Developed and presented pitch decks and interactive prototypes for internal projects",
        "Practiced responsive design and collaborated within an agile development team",
        "Incorporated user feedback into iterative design cycles"
      ]
    },
    {
      company: "Pehchaan The Street School Trust",
      role: "Graphic Design Intern",
      duration: "Dec 2024 - Apr 2025",
      responsibilities: [
        "Created campaign graphics for digital media using Canva, focusing on clarity and engagement",
        "Collaborated with mentors and volunteers to deliver timely, high-quality assets",
        "Supported principles of branding, accessibility, and visual storytelling"
      ]
    },
    {
      company: "Game Development Club, IcfaiTech",
      role: "Documentation Head",
      duration: "Jan 2024 - Present",
      responsibilities: [
        "Led documentation and reporting for club events and workshops",
        "Ensured professional standards in all user-facing communications and materials",
        "Supported online content, logistics planning, and outcome reporting across student-led initiatives"
      ]
    },
    {
      company: "Freelance UI/UX Designer",
      role: "Pickle Website Project",
      duration: "Sep 2025 - Nov 2025",
      responsibilities: [
        "Delivered paid UI/UX design and front-end development for a small business's pickle brand website",
        "Designed user-friendly layouts and interactive interfaces using HTML, CSS, and JavaScript",
        "Conducted client requirements gathering, usability revisions, and optimized site for responsiveness",
        "Managed project independently and delivered creative, conversion-focused solutions"
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

      {/* Certifications Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          <span className="text-primary">Certifications</span> & Courses
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">📊</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">Introduction to Programming</h3>
            <p className="text-primary font-medium text-sm">Kaggle</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">🐍</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">Python Programming</h3>
            <p className="text-primary font-medium text-sm">Kaggle</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">📈</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">Exploratory Data Analysis</h3>
            <p className="text-primary font-medium text-sm">Future SkillsPrime</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">💻</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">Object-Oriented Programming</h3>
            <p className="text-primary font-medium text-sm">NASSCOM</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">📐</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">MATLAB Onramp</h3>
            <p className="text-primary font-medium text-sm">MATLAB</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">⚙️</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">C Language</h3>
            <p className="text-primary font-medium text-sm">Lasya Infotech</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">☁️</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">AWS GenAI Ideathon</h3>
            <p className="text-primary font-medium text-sm">AWS</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">🏢</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">Internship Completion & LOR</h3>
            <p className="text-primary font-medium text-sm">CloudBox99</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">🏆</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">Smart India Hackathon</h3>
            <p className="text-primary font-medium text-sm">Internal Selection</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">🥽</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">XR Jumpstart Program</h3>
            <p className="text-primary font-medium text-sm">XR MONK</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">🎨</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">Graphic Designing</h3>
            <p className="text-primary font-medium text-sm">Pehchaan The Street School</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">🧠</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">Affective Computing</h3>
            <p className="text-primary font-medium text-sm">NPTEL</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 hover:border-primary transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="text-xl">🤖</span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">AI Workshop</h3>
            <p className="text-primary font-medium text-sm">Ecell IIT Hyderabad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
