import ProjectCard from "@/components/ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      title: "My Origins Prototype",
      role: "Figma/UX",
      description: "Designed an interactive and accessible family heritage prototype in Figma. Prioritized intuitive navigation, clear flows, and user personalization for all age groups.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tools: ["Figma", "User Research", "Prototyping"],
      link: "https://www.figma.com/design/GxXo8ryxF2Cuh9XpnC3XR8/myorigins.ai?node-id=0-1&t=NKUFaNDBx5MzzMzU-1"
    },
    {
      title: "MindTrack Mental Health Tracker",
      role: "React, Tailwind",
      description: "Developed user dashboards supporting AI-powered assessment and a mental health chatbot. Emphasized engaging, accessible UI/UX for diverse users.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tools: ["React", "Tailwind CSS", "AI Integration"]
    },
    {
      title: "SarasCan Website",
      role: "Html, CSS, JS",
      description: "Built a responsive, clean website for a Canadian cloud services company. Focused on professional design, intuitive navigation, and cross-device compatibility.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tools: ["HTML", "CSS", "JavaScript"],
      link: "https://sarascan.ca/"
    },
    {
      title: "Ride-Smart Website",
      role: "Html, CSS, JS",
      description: "Created a learning platform for AI topics with a smooth, user-friendly interface. Integrated responsive layouts and accessible contact forms to support inclusive learning.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
      tools: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      link: "https://chandrikchandu.github.io/ride-smart/"
    },
    {
      title: "Pet Adoption Web Server",
      role: "PHP/MySQL, HTML,CSS",
      description: "Developed a web platform for pet adoption, emphasizing user-friendly navigation and reliable backend database integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tools: ["PHP", "MySQL", "HTML", "CSS"]
    },
    {
      title: "Pickle Website",
      role: "Remote | Sep 2025 – Nov 2025",
      description: "Delivered paid UI/UX design and front-end development for a small business’s pickle brand website. Designed user-friendly layouts and interactive interfaces using HTML, CSS, and JavaScript. Conducted client requirements gathering, usability revisions, and optimized site for responsiveness. Managed project independently and delivered creative, conversion-focused solutions.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tools: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
      link: "https://abcd22-hub.github.io/pickel_website/"
    },
    {
      title: "athENA (Figma Prototype) — SIH Hackathon Participation",
      role: "Figma Prototype",
      description: "Designed and prototyped a comprehensive career guidance platform in Figma as part of the Smart India Hackathon. Integrated psychometric tests, stage-wise counseling, study abroad and upskilling support, and interactive tools. Focused on delivering NEP 2020-aligned, data-driven, and personalized career recommendations for students and professionals.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tools: ["Figma", "Prototyping", "UI/UX Design", "User Research"],
      link: "https://www.figma.com/design/VftKwPLGOEm6bsu2aeoJUo/athENA?node-id=0-1&t=SMcXNovgET8QYjTb-1"
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
          My <span className="text-primary">Portfolio</span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A collection of my recent projects showcasing UI/UX design, web development, 
          and creative problem-solving across various industries.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            role={project.role}
            description={project.description}
            image={project.image}
            tools={project.tools}
            link={project.link}
          />
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

export default Portfolio;
