import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Code, Palette, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "@/components/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8">
          {/* Hero Section with Photo */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Content */}
            <div className="space-y-4 flex-1">
              <h2 className="text-primary text-lg font-semibold tracking-wide uppercase">
                Welcome to my portfolio
              </h2>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-primary">G.Chandrika</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-medium">
                Computer science engineer
              </p>
            </div>

            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-8 border-primary shadow-glow">
                <img 
                  src="https://i.postimg.cc/ZYc0Z0HV/my-image-1.jpg" 
                  alt="G.Chandrika - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-primary rounded-full opacity-50"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-4 border-primary rounded-full"></div>
            </div>
          </div>

          {/* Description and Buttons */}
          <div className="space-y-8 max-w-4xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about crafting beautiful, user-centered digital experiences. 
              I transform complex problems into intuitive, elegant designs that users love.
            </p>
          </div>
        </div>

        {/* About Me Section */}
        <section className="py-20 border-t border-border">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Creative and detail-oriented UI/UX Designer with hands-on experience in designing engaging
 digital interfaces and interactive prototypes using Figma. Skilled in translating business
 requirements into visually appealing, user-centered designs and collaborating with cross-functional
 teams for real-world product launches. Passionate about problem-solving, usability testing, and
 accessible design.
            </p>
            
            {/* Key Skills */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground text-sm">Figma, Adobe XD, Sketch</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <Code className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Web Design</h3>
                <p className="text-muted-foreground text-sm">HTML, CSS, React, Tailwind</p>
              </div>
              <div className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">User Research</h3>
                <p className="text-muted-foreground text-sm">Testing, Analytics, Interviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Highlights */}
        <section className="py-20 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-foreground">Portfolio Highlights</h2>
              <p className="text-lg text-muted-foreground">Check out some of my recent work</p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ProjectCard
                    title="Pickle Website"
                    role="Remote | Sep 2025 – Nov 2025"
                    description="Delivered paid UI/UX design and front-end development for a small business’s pickle brand website. Designed user-friendly layouts and interactive interfaces using HTML, CSS, and JavaScript. Conducted client requirements gathering, usability revisions, and optimized site for responsiveness. Managed project independently and delivered creative, conversion-focused solutions."
                    image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                    tools={["HTML", "CSS", "JavaScript", "UI/UX Design"]}
                    link="https://abcd22-hub.github.io/pickel_website/"
                  />
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ProjectCard
                    title="SarasCan Website"
                    role="Html, CSS, JS"
                    description="Built a responsive, clean website for a Canadian cloud services company. Focused on professional design, intuitive navigation, and cross-device compatibility."
                    image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
                    tools={["HTML", "CSS", "JavaScript"]}
                    link="https://sarascan.ca/"
                  />
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ProjectCard
                    title="athENA (Figma Prototype) — SIH Hackathon Participation"
                    role="Figma Prototype"
                    description="Designed and prototyped a comprehensive career guidance platform in Figma as part of the Smart India Hackathon. Integrated psychometric tests, stage-wise counseling, study abroad and upskilling support, and interactive tools. Focused on delivering NEP 2020-aligned, data-driven, and personalized career recommendations for students and professionals."
                    image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
                    tools={["Figma", "Prototyping", "UI/UX Design", "User Research"]}
                    link="https://www.figma.com/design/VftKwPLGOEm6bsu2aeoJUo/athENA?node-id=0-1&t=SMcXNovgET8QYjTb-1"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>

            <div className="text-center mt-12">
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="gap-2">
                  View All Projects
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Education & Experience Section */}
        <section className="py-20 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold text-foreground">Education & Experience</h2>
              <p className="text-lg text-muted-foreground">My academic background and professional journey</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Education */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-4">EDUCATION</h3>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-primary">ICFAI UNIVERSITY, Department of Computer Science</p>
                  <p className="text-sm text-muted-foreground">2022–2026</p>
                </div>
                <div className="space-y-3 mt-4">
                  <p className="text-lg font-semibold text-primary">SRI CHAITANYA JUNIOR COLLEGE, Intermediate</p>
                  <p className="text-sm text-muted-foreground">2020–2022 | CGPA 8.33</p>
                </div>
                <div className="space-y-3 mt-4">
                  <p className="text-lg font-semibold text-primary">ST.ANNS HIGH SCHOOL, 10th</p>
                  <p className="text-sm text-muted-foreground">2020 | CGPA 10.00</p>
                </div>
              </div>

              {/* Key Experiences */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-4">Key Experiences</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Web Development UI/UX Intern</p>
                    <p className="text-sm text-primary">CloudBox99</p>
                    <p className="text-xs text-muted-foreground mb-2">Jun 2024 - Jul 2024</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Graphic Design Intern</p>
                    <p className="text-sm text-primary">Pehchaan The Street School Trust</p>
                    <p className="text-xs text-muted-foreground mb-2">Dec 2024 - Apr 2025</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Documentation Head</p>
                    <p className="text-sm text-primary">Game Development Club, IcfaiTech</p>
                    <p className="text-xs text-muted-foreground mb-2">Jan 2024 - Present</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Freelance UI/UX Designer</p>
                    <p className="text-sm text-primary">Pickle Website Project</p>
                    <p className="text-xs text-muted-foreground">Sep 2025 - Nov 2025</p>
                  </div>
                </div>
              </div>
            </div>


            <div className="text-center">
              <Link to="/experience">
                <Button size="lg" className="gap-2">
                  View Full Experience
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
