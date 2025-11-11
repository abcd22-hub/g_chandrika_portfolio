import ProjectCard from "@/components/ProjectCard";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Mobile App",
      role: "Lead UI/UX Designer",
      description: "Designed a complete mobile shopping experience with intuitive navigation, seamless checkout, and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      tools: ["Figma", "React Native", "User Research"]
    },
    {
      title: "SaaS Dashboard Platform",
      role: "Product Designer",
      description: "Created a comprehensive analytics dashboard with data visualization, custom reports, and real-time monitoring features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tools: ["Figma", "React", "D3.js"]
    },
    {
      title: "Healthcare Booking System",
      role: "UX Designer",
      description: "Designed an intuitive appointment booking system for patients with emphasis on accessibility and ease of use.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tools: ["Adobe XD", "HTML/CSS", "JavaScript"]
    },
    {
      title: "Fitness Tracking App",
      role: "UI/UX Designer",
      description: "Built a motivating fitness app with workout tracking, progress visualization, and social features for community engagement.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
      tools: ["Sketch", "React", "API Integration"]
    },
    {
      title: "Real Estate Platform",
      role: "Senior Designer",
      description: "Designed a modern property search platform with advanced filters, virtual tours, and seamless mortgage calculator integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tools: ["Figma", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Social Media Dashboard",
      role: "Product Designer",
      description: "Created a unified social media management tool with scheduling, analytics, and content creation features.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      tools: ["Figma", "React", "API Integration"]
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
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 bg-card border border-border rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Interested in working together?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a href="/contact">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
            Get in Touch
          </button>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
