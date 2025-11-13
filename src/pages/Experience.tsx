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
        <p className="text-xl text-muted-foreground max-w-6xl mx-auto leading-relaxed">
          Explore my growing journey as a designer and developer, from hands-on internships and freelance projects to student-led roles. I’ve worked with real clients, collaborated in agile teams, and led documentation for campus clubs—each experience strengthening my design thinking and technical skills. Here, you’ll find highlights from my UI/UX internship at CloudBox99, graphic design at Pehchaan Trust, freelance work on a pickle brand website, and leadership in the Game Development Club. These roles showcase my passion for learning, adaptability, and delivering creative solutions.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            company={exp.company}
            role={exp.role}
            duration={exp.duration}
            responsibilities={exp.responsibilities}
          />
        ))}
      </div>

    </div>
  );
};

export default Experience;
