import ServiceCard from "@/components/ServiceCard";
import { Smartphone, Layout, Palette, Code, Eye, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that prioritize user experience and accessibility."
    },
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Designing beautiful and functional mobile applications for iOS and Android platforms."
    },
    {
      icon: Code,
      title: "Web Design",
      description: "Crafting responsive and modern websites that deliver exceptional user experiences across all devices."
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Developing cohesive visual identities that reflect your brand's personality and values."
    },
    {
      icon: Eye,
      title: "User Research",
      description: "Conducting thorough user research to understand needs, behaviors, and pain points."
    },
    {
      icon: Zap,
      title: "Prototyping",
      description: "Building interactive prototypes to test ideas and validate design decisions before development."
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
          My <span className="text-primary">Services</span>
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I offer comprehensive design services to help bring your digital products to life. 
          From initial concept to final implementation, I'm here to guide you every step of the way.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Process Section */}
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">
          My Design <span className="text-primary">Process</span>
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", desc: "Understanding your goals and user needs" },
            { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
            { step: "03", title: "Prototype", desc: "Building interactive prototypes" },
            { step: "04", title: "Deliver", desc: "Final designs and development handoff" },
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">{phase.step}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
              <p className="text-sm text-muted-foreground">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
