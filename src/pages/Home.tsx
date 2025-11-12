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
                Hi, I'm <span className="text-primary">Alex Morgan</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-medium">
                UI/UX Designer
              </p>
            </div>

            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-6 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-8 border-primary shadow-glow">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop" 
                  alt="Alex Morgan - UI/UX Designer"
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
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 text-base">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2 text-base">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <section className="py-20 border-t border-border">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a UI/UX designer with a passion for creating intuitive, user-centered experiences that solve real problems. 
              My approach combines data-driven insights with creative design thinking to deliver solutions that not only look beautiful 
              but also drive meaningful results. I believe great design should be invisible—it should just work.
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
                    title="E-commerce Mobile App"
                    role="Lead UI/UX Designer"
                    description="Designed a complete mobile shopping experience with intuitive navigation and seamless checkout flow, resulting in 40% increase in conversions."
                    image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
                    tools={["Figma", "React Native", "Prototyping"]}
                  />
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ProjectCard
                    title="SaaS Dashboard Redesign"
                    role="Senior UX Designer"
                    description="Reimagined analytics dashboard for B2B platform, improving data visualization and reducing user onboarding time by 60%."
                    image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                    tools={["Sketch", "Vue.js", "Data Viz"]}
                  />
                </CarouselItem>
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ProjectCard
                    title="Health & Fitness Web App"
                    role="UI Designer"
                    description="Created engaging workout tracking interface with social features, achieving 4.8 star rating and 100k+ active users."
                    image="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=600&fit=crop"
                    tools={["Adobe XD", "React", "Animation"]}
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
                <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
                <div className="space-y-3">
                  <p className="text-lg font-semibold text-primary">Bachelor of Design</p>
                  <p className="text-foreground">Stanford University</p>
                  <p className="text-sm text-muted-foreground">2015 - 2019</p>
                  <div className="pt-3 space-y-2">
                    <p className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span>Focus: Human-Computer Interaction & Visual Design</span>
                    </p>
                    <p className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span>Design Thinking Club President</span>
                    </p>
                    <p className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span>Dean's List all semesters</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Experiences */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                <h3 className="text-2xl font-bold text-foreground mb-4">Key Experiences</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Senior UX Designer</p>
                    <p className="text-sm text-primary">TechCorp Inc.</p>
                    <p className="text-xs text-muted-foreground mb-2">2021 - Present</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">UI Designer</p>
                    <p className="text-sm text-primary">Creative Studio</p>
                    <p className="text-xs text-muted-foreground mb-2">2019 - 2021</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Freelance Designer</p>
                    <p className="text-sm text-primary">Various Clients</p>
                    <p className="text-xs text-muted-foreground">2018 - 2019</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Tools */}
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Skills & Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                    <Palette className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Figma</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">HTML/CSS/JS</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Usability Testing</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">React</p>
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
