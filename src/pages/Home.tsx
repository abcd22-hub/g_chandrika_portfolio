import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
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
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-4xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-1">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Orange Circle Background */}
              <div className="absolute -inset-8 bg-primary/20 rounded-full blur-3xl"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-8 border-primary shadow-glow">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop" 
                  alt="Alex Morgan - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
